import styled from 'styled-components'

export const InputLogin = styled.input`
  width: 100%;
  max-width: 300px;
  height: 50px;

  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  text-align: center;

  border: none;
  border-radius: 8px;
  background: #a98a8a42 !important;

  margin: 5px;
  padding: 5px;

  outline: none;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  height: 100vh;
`

export const FormLogin = styled.form`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
`

export const ButtonLogin = styled.button`
  width: 100%;
  max-width: 300px;
  height: 50px;

  border: none;
  border-radius: 8px;

  background: #f3cdb7;

  margin-top: 25px;
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  transition: 0.2s;



  &:hover {
    background: #ffc09b;
  }
`

export const Title = styled.h1`
  font-family: "Open Sans", sans-serif;

  display: flex;
  align-items: center;
  justify-content: center;
`