import Prismic from '@prismicio/client';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { Header } from '../../components/Header';
import { ProjectItem } from '../../components/ProjectItem';
import { getPrismicClient } from '../../services/prismic';
import { ProjectsContainer } from '../../styles/ProjectsStyles';

interface IProject {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface ProjectProps {
  projects: IProject[];
}

export default function Projects({ projects }: ProjectProps) {
  return (
    <ProjectsContainer>
      <Head>
        <title>Projetos | Meu portfólio</title>
        <meta
          name="description"
          content="Aqui você pode encontrar os projetos desenvolvidos até o momento e visitá-los."
        />
        <meta property="og:image" content="/ogimage.jpg" />
        <meta property="og:image:secure_url" content="/ogimage.jpg" />
        <meta name="twitter:image" content="/ogimage.jpg" />
        <meta name="twitter:image:src" content="/ogimage.jpg" />
        <meta
          property="og:description"
          content="Aqui você pode encontrar os projetos desenvolvidos até o momento e visitá-los."
        />
        <meta
          name="keywords"
          content="Albert Conceição, albert conceicao, albertconceicao, albertconceição, front end developer, desenvolvedor front end, programador, desenvolvedor de sites, criador de sites, criar um site, criar landing pages, landing pages, desenvolvedor de software, software"
        />
      </Head>
      <Header />

      <main className="container">
        {projects.map(project => (
          <ProjectItem
            key={project.slug}
            title={project.title}
            type={project.type}
            slug={project.slug}
            imgUrl={project.thumbnail}
          />
        ))}
      </main>
    </ProjectsContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const projectResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'projects')],
    { orderings: '[document.first_publication_date_desc]' }
  );
  const projects = projectResponse.results.map(project => ({
    slug: project.uid,
    title: project.data.title,
    type: project.type,
    description: project.data.description,
    link: project.data.live_project.url,
    thumbnail: project.data.thumbnail.url
  }));
  return {
    props: {
      projects
    },
    revalidate: 86400
  };
};
