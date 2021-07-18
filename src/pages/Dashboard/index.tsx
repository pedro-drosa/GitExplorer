import {Container, Form, Title} from './style';

export function Dashboard() {
  return (
    <Container>
      <Title>Encontre Usuários no Github</Title>
      <Form hasError={false}>
        <input 
        placeholder="Nome do usuário" />
        <button type="submit">Pesquisar</button>
      </Form>
    </Container>
  );
};
