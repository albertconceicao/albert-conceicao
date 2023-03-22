import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiFillLinkedin
} from 'react-icons/ai';
import { Container } from './styles';

export function Footer() {
  const handleRedirect = (url: string) => window.open(url);
  const handleScrollTop = () =>
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  return (
    <Container>
      <div className="container">
        <button type="button" onClick={handleScrollTop}>
          Voltar ao topo
        </button>
        <section>
          <AiOutlineTwitter
            onClick={() => handleRedirect('https://twitter.com')}
          />
          <AiOutlineGithub
            onClick={() => handleRedirect('https://github.com/albertconceicao')}
          />
          <AiFillLinkedin
            onClick={() =>
              handleRedirect('https://www.linkedin.com/in/albertconceicao/')
            }
          />
        </section>
      </div>
    </Container>
  );
}
