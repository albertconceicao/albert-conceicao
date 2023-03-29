/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
// import Picture from '../../assets/pessoa.webp';

export function HomeHero() {
  return (
    <Container data-aos="fade-up">
      {/* <img src={Picture} alt="" /> */}
      <div>
        <TextContainer>
          <h1>
            <span>O</span>
            <span>l</span>
            <span>á</span>
          </h1>
          <h2 id="text">
            <span>M</span>
            <span>e</span>
            <span> </span>
            <span>c</span>
            <span>h</span>
            <span>a</span>
            <span>m</span>
            <span>o</span>
            <span> </span>
            <span>A</span>
            <span>l</span>
            <span>b</span>
            <span>e</span>
            <span>r</span>
            <span>t</span>
          </h2>
        </TextContainer>

        <InfosContainer>
          <CodeItem data-aos="zoom-in">
            <span className="comment">//Minha apresentação</span>
            <span className="purple">Infos </span>
            {'\u007B'}
            <div>
              Idade: <span className="blue">24,</span>
            </div>
            <div>
              Profissão: <span className="blue">Desenvolvedor de Software</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem data-aos="zoom-in">
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
