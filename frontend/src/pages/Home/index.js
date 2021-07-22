import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router';
import api from '../../services/api';
import { FcFullTrash } from "react-icons/fc";

import { ButtonHeader, ButtonBack, ButtonThrash, Container } from './styles';

import '../css/global.css'

export default function Home() {


  const [products, setProducts] = useState([]);

  const history = useHistory();

  const Token = localStorage.getItem('token')

  useEffect(() => {
    api.get('products').then(response => {
      setProducts(response.data)
    })
  }, [Token]);

  function handleLogout() {
    localStorage.clear();

    history.push('/')
  }

  async function handleDeleteProduct(id) {
    try {
      await api.delete(`products/${id}`, {
        headers: {
          Token: Token,
        }
      });

      setProducts(products.filter(product => product.id !== id));
    } catch (err) {
      alert('Erro ao deletar, tente novamente')
    }
  }
  function newProduct() {
    history.push('/products/register')
  }

  return (
    <Container>
      <header>
        <ButtonBack onClick={handleLogout}> Logout </ButtonBack>
        <ButtonHeader onClick={newProduct}> Adicionar Produto </ButtonHeader>
      </header>
      <div>

        <table className='table'>
          <thead>
            <th>Nome do produto</th>
            <th>Preço</th>
            <th>Descrição</th>
            <th>Status</th>
            <th>Ação</th>
          </thead>
          {products.map(product => (
            <tbody>
              <tr>
                <td>{product.productName}</td>
                <td>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}</td>
                <td>{product.description}</td>
                <td>{product.status == 1 ? 'Vendido' : 'Em estoque'}</td>
                <td><ButtonThrash onClick={() => handleDeleteProduct(product.id)}> <FcFullTrash size={18} /> </ButtonThrash></td>
              </tr>
            </tbody>
          ))}
        </table>

      </div>

    </Container>
  )
}