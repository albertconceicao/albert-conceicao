import Link from 'next/link';
import { SectionTitle } from '../SectionTitle';
import { ProjectItem } from './ProjectItem';
import { Container } from './styles';

export function Projects() {
  return (
    <Container>
      <SectionTitle title="Últimos projetos" />

      <section>
        <ProjectItem
          img="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          title="Projeto 01"
          type="website"
          slug="test"
        />
        <ProjectItem
          img="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          title="Projeto 01"
          type="website"
          slug="test"
        />
        <ProjectItem
          img="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          title="Projeto 01"
          type="website"
          slug="test"
        />
      </section>
      <button type="button">
        <Link href="/projects">
          <span>Ver todos os prohetos</span>
        </Link>
      </button>
    </Container>
  );
}
