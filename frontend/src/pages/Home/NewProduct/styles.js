import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
 
  height: 100vh;
  width: 100%;

  input,
  textarea,
  select,
  option {
    width: 100%;
    max-width: 300px;
    height: 50px;

    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    text-align: center;

    border: none;
    border-radius: 8px;
    background: #d1dce6;

    margin: 5px;
    padding: 5px;

    outline: none;
  }

  .container textarea {
    height: 60px;
  }

`

export const Title = styled.h1`
  font-family: "Open Sans", sans-serif;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const InputForm = styled.input`
  width: 100%;
  max-width: 300px;
  height: 50px;

  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  text-align: center;

  border: none;
  border-radius: 8px;
  background: #d1dce6;

  margin: 5px;
  padding: 5px;

  outline: none;

`

export const FormCad = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  font-family: "Open Sans", sans-serif;
  width: 100%;
`

export const ButtonRegister = styled.button`
  width: 100%;
  max-width: 300px;
  height: 40px;

  margin-top: 15px;

  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  text-align: center;
  font-weight: 700;
  color: #ece7db;

  background: #6d7d8c;

  border-radius: 8px;
  border: none;

  transition: 0.5s;

  cursor: pointer;

  &:hover {
    background: #546370;
  }
`

export const ButtonBack = styled.button`
  width: 100%;
  max-width: 300px;
  height: 40px;

  margin-top: 15px;

  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  text-align: center;
  font-weight: 700;
  color: rgb(31, 31, 31);

  background: transparent;

  border-radius: 8px;
  border: none;

  transition: 0.5s;

  cursor: pointer;

`

