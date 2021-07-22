const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const { page = 1 } = request.query;

    const [count] = await connection('products').count();

    console.log(count);

    const products = await connection('products')
      .limit(5)
      .offset((page - 1) * 5)
      .select('*');

    response.header('X-Total-Count', count['count(*)']);

    return response.json(products)
  },

  async create(request, response) {
    const { productName, price, description, status } = request.body;
    const user_id = request.headers.token;

    const [id] = await connection('products').insert({
      productName,
      price,
      description,
      status,
      user_id
    });

    return response.json({ id });

  },

  async update(request, response) {
    const { id } = request.params;
    const user_id = request.headers.token;

    const { productName, price, description, status } = request.body;

    const products = await connection('products')
      .where('id', id)
      .select('user_id')
      .first();

    if (products.user_id !== user_id) {
      return response.status(401).json({ error: "Operação não permitida !" })
    }

    await connection('products').where('id', id).update({
      productName,
      price,
      description,
      status,
      user_id
    });

    return response.status(204).send()
  },

  async delete(request, response) {
    const { id } = request.params;
    const user_id = request.headers.token;

    const products = await connection('products')
      .where('id', id)
      .select('user_id')
      .first();

    if (products.user_id !== user_id) {
      return response.status(401).json({ error: "Operação não permitida !" })
    }

    await connection('products').where('id', id).delete();

    return response.status(204).send();
  }
}