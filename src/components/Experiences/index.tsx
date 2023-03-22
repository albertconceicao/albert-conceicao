import { SectionTitle } from '../SectionTitle';
import { ExperienceItem } from './ExperienceItem';
import { Container } from './styles';

export function Experiences() {
  return (
    <Container>
      <SectionTitle title="02 anos" description="de experiência" />

      <section>
        <ExperienceItem
          year="2021"
          title="Front End Developer"
          description="Lorem iupus dot samet."
        />
        <ExperienceItem
          year="2021"
          title="Front End Developer"
          description="Lorem iupus dot samet."
        />
        <ExperienceItem
          year="2021"
          title="Front End Developer"
          description="Lorem iupus dot samet."
        />
        <ExperienceItem
          year="2021"
          title="Front End Developer"
          description="Lorem iupus dot samet."
        />
      </section>
    </Container>
  );
}
