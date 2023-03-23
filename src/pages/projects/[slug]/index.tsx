import { GetStaticPaths, GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Header } from '../../../components/Header';
import { ProjectBanner } from '../../../components/ProjectBanner';
import { getPrismicClient } from '../../../services/prismic';
import { ProjectContainer } from '../../../styles/ProjectStyle';
import { LoadingScreen } from '../../../components/LoadingScreen';

interface IProject {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface ProjectProps {
  project: IProject;
}

export default function Project({ project }: ProjectProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <LoadingScreen />;
  }
  return (
    <ProjectContainer>
      <Header />
      <Head>
        <title>{project.title} | Meu portfólio</title>
        <meta name="description" content={project.description} />
        <meta property="og:image" content={project.thumbnail} />
        <meta property="og:image:secure_url" content={project.thumbnail} />
        <meta name="twitter:image" content={project.thumbnail} />
        <meta name="twitter:image:src" content={project.thumbnail} />
        <meta property="og:description" content={project.description} />
      </Head>
      <ProjectBanner
        title={project.title}
        type={project.type}
        imgUrl={project.thumbnail}
      />

      <main>
        <p>{project.description}</p>

        <button type="button">
          <a href={project.link} target="_blank" rel="noreferrer">
            Ver projeto online
          </a>
        </button>
      </main>
    </ProjectContainer>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const projects = await prismic.query([
    Prismic.predicates.at('document.type', 'projects')
  ]);

  const paths = projects.results.map(project => ({
    params: {
      slug: project.uid
    }
  }));

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const prismic = getPrismicClient();
  const { slug } = context.params;

  const response = await prismic.getByUID('projects', String(slug), {});

  const project = {
    slug: response.uid,
    title: response.data.title,
    type: response.type,
    description: response.data.description,
    thumbnail: response.data.thumbnail.url,
    link: response.data.live_project.url
  };
  // const projects = projectResponse.results.map(project => ({
  //   slug: project.uid,
  //   title: project.data.title,
  //   type: project.type,
  //   description: project.data.description,
  //   link: project.data.live_project.url,
  //   thumbnail: project.data.thumbnail.url
  // }));
  return {
    props: {
      project
    },
    revalidate: 86400
  };
};
