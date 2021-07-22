const connection = require('../database/connection');

module.exports = {
  async create(request, response) {
    const { email, password } = request.body;

    const User = await connection('users')
      .where({ 'email': email, 'password': password })
      .select('id', 'name')
      .first();

    if (!User) {
      return response.status(400).json({ "error": "Missing password" })
    }

    return response.json(User);

  }
}