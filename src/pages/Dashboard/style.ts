import styled,{css} from 'styled-components';

interface FormProps{
  hasError: boolean;
}

export const Container = styled.div`
  max-width: 960px;
  height: 100vh;
  margin: 0 auto;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`; 

export const Title = styled.h1 `
  display: flex;
  font-size:2em;
  font-weight: bold;
  color: #3fa4b4;
  max-width: 450px;
  line-height: 56px;
  align-items: center;

  &::before {
    content: '';
    display: block;
    background: #b5bec4;
    margin-right: 10px;
    width: 60px;
    height: 200px;
  }
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #3fa4b4;
    border-right: 0;
    outline: 0;
    ${(props) => 
      props.hasError &&   
      css` 
        border-color:#c53030;
      `}
    &::placeholder {
      color: #a8a8b3;
    }
  }
  
  button {
    width: 210px;
    height:70px;
    background: #3fa4b4;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color:#fff;
    font-weight: bold;
    transition: background-color 0.2s;
    &:hover {
    background: #3fa4b4;
    }
  }

  @media(max-width: 745px){
    input {
      width: 300px;
      border: 2px solid #3fa4b4;
      border-radius: 5px;
    }
    
    button {
      width: 100vw;
      margin-top: 30px;
      border-radius: 5px;
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;