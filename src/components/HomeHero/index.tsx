/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
// import Picture from '../../assets/pessoa.webp';

export function HomeHero() {
  return (
    <Container>
      {/* <img src={Picture} alt="" /> */}
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Albert</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem>
            <span className="comment">//Minha apresentação</span>
            <span className="purple">Infos </span>
            {'\u007B'}
            <div>
              Nome: <span className="blue">Albert,</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Conceição</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem>
            <span className="purple">Trabalho atual </span>
            {'\u007B'}
            <div>
              Função: <span className="blue">Front End Developer</span>
            </div>
            <div>
              Empresa: <span className="blue">BW Events Tech</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}
