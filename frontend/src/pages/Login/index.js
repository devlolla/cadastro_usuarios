import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import { Container, InputLogin, FormLogin, ButtonLogin, Title } from './styles';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const data = {
    email,
    password
  }


  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('sessions', data);

      localStorage.setItem('login', JSON.stringify({ data }));
      localStorage.setItem('token', response.data.id)

      history.push('/products')

    } catch (err) {
      alert('Login não realizado, tente novamente com um usuário valido.')
    }
  }

  return (
    <Container>

      <FormLogin onSubmit={handleLogin}>
        <Title> Olá </Title>
        <InputLogin
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <InputLogin
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <ButtonLogin> Login </ButtonLogin>

      </FormLogin>
    </Container>
  )
}