import { SectionTitle } from '../SectionTitle';
import { Form } from './Form';
import { Container } from './styles';

export function ContactForm() {
  return (
    <Container>
      <SectionTitle
        title={
          <>
            Precisa dos <br /> meus serviços?
          </>
        }
        description={
          <>
            Preencha o formulário abaixo <br /> que irei retornar em breve
          </>
        }
      />
      <Form />
    </Container>
  );
}
