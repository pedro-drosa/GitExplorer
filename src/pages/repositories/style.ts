import styled from 'styled-components';

export const Container = styled.div`
  max-width: 960px;
  height: 100vh;
  margin: 60px auto;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`; 

export const Title = styled.h1 `
  margin-top: 30px;
  font-size:1em;
  color: #3fa4b4;
  text-transform: capitalize;
`;

export const SubTitle = styled.h2`
  color: #76797f;
  font-size: 1em;
  font-weight: 200;
`;

export const Avatar = styled.img`
  border-radius: 30%;
  width: 200px;
  height: 200px;
`;

export const Repository = styled.div`
  margin-top: 60px;
  
  h3 {
    font-weight: 400;
    border: 1px solid rgba(0,0,0,.1);
  
    &:first-of-type {
      border-radius: 10px 10px 0 0;
    }

    &:last-of-type {
      border-radius: 0 0 10px 10px;
    }

    padding: 10px;
    background: #fff;
    font-size: .6em;
  }
`;