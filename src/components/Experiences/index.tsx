import { SectionTitle } from '../SectionTitle';
import { ExperienceItem } from './ExperienceItem';
import { Container } from './styles';

export function Experiences() {
  return (
    <Container>
      <SectionTitle title="02 anos" description="de experiência" />

      <section>
        <ExperienceItem
          year="2023"
          title="Front End Developer"
          description="BW Events Tech"
        />
        <ExperienceItem
          year="2022"
          title="Front End Developer / Analista de Sistemas"
          description="BW Events Tech / PCN Tecnologia"
        />
        <ExperienceItem
          year="2021"
          title="Analista de Sistemas / Front End Developer"
          description="PCN Tecnologia"
        />
        <ExperienceItem
          year="2021"
          title="Front End Developer"
          description="Interstation - Freelancer"
        />
      </section>
    </Container>
  );
}
