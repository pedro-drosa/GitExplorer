import { Avatar, Container, Repository, SubTitle, Title } from "../Repositories/style";

import avatarImg from '../../img/avatar.jpg';

export function Repositories() {
  return(
    <Container>
      <Avatar src={avatarImg} alt="avatar" />
      <Title>Pedro Mascarenhas</Title>
      <SubTitle>pedro-drosa</SubTitle>
      <Repository>
        <h3>HC-Hiring-Coders-Landing-Page</h3>
        <h3>HC-Hiring-Coders-VTEX</h3>
        <h3>Coders-VTEX</h3>
        <h3>HC-Hiring-Coders-IO</h3>
      </Repository>
    </Container>
  )
}
