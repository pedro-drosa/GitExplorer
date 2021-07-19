import {Container, Form, Title, SubTitle} from './style';

export function Dashboard() {
  return (
    <Container>
      <Title>Git Explorer</Title>
      <SubTitle>Find users on github</SubTitle>
      <Form hasError={false}>
        <input 
        placeholder="User name" />
        <button type="submit">search</button>
      </Form>
    </Container>
  );
};
