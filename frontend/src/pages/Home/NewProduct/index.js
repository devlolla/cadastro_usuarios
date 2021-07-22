import React, { useState } from 'react';
import api from '../../../services/api';
import { useHistory } from 'react-router';

import {
  Container,
  InputForm,
  Title,
  FormCad,
  ButtonBack,
  ButtonRegister
} from './styles'


export default function Register() {
  const [productName, setProductName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState(false)

  const Token = localStorage.getItem('token')

  const history = useHistory();


  async function handleNewProduct(e) {
    e.preventDefault();

    const data = {
      productName,
      price,
      description,
      status
    };

    if (productName == '') {
      alert('Falha ao tentar cadastrar Produto')
      history.push('/products')
    } else {
      try {
        await api.post('products', data, {
          headers: {
            Token: Token
          }
        })

        history.push('/products')
      } catch (err) {
        alert('Erro ao cadastrar novo produto')
      }
    }

  }

  return (
    <Container>
      <Title> Cadastre um novo produto </Title>
      <FormCad onSubmit={handleNewProduct}>

        <InputForm
          type="text"
          value={productName}
          onChange={e => setProductName(e.target.value)}
          placeholder="Nome do Produto"
        />

        <InputForm
          type="text"
          value={price}
          onChange={e => setPrice(e.target.value)}
          placeholder="Preço"
        />

        <textarea
          type="text"
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Descrição"
        />
        <select name="" id="">
          <option
            value={status}
            onChange={e => setStatus(e.target.value)}>
            Vendido
          </option>
          <option
            value={status}
            onChange={e => setStatus(e.target.value)}>
            Estoque
          </option>
        </select>

        <ButtonRegister> Cadastrar Produto </ButtonRegister>
      </FormCad>
      <ButtonBack onClick={() => history.push('/products')}> Voltar </ButtonBack>
    </Container>
  )
}