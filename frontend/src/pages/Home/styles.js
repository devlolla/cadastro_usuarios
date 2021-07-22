import styled from 'styled-components'

export const ButtonHeader = styled.button`
  width: 100%;
  max-width: 210px;
  height: 35px;

  font-family: "Open Sans", sans-serif;
  font-size: 16px;

  font-weight: 700;

  background: #c9a6d8;
  color: rgb(31, 31, 31);

  cursor: pointer;

  border: none;
  border-radius: 8px;
`

export const ButtonBack = styled.button`
  width: 100%;
  max-width: 210px;
  height: 30px;

  font-family: "Open Sans", sans-serif;
  font-size: 16px;

  font-weight: 700;

  background: transparent;

  cursor: pointer;

  border: none;
  border-radius: 8px;
`

export const ButtonThrash = styled.button`
  background: transparent;
  border: none;

  cursor: pointer;
`

export const Container = styled.div`
  padding: 20px;

  width: 100%;

  .table {
    width: 100%;
    height: 100%;
    border-collapse: collapse;
  }

  .table td,
  .table th {
    padding: 12px 15px;
    border: 1px solid #ddd;
    text-align: center;

    font-size: 16px;
  }

  .table th {
    background: #f3d7c6;
    color: rgb(26, 25, 25);
  }

  .table tbody tr:nth-child(even) {
    background: #f0b591;
  }
`

