import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  align-self: center;
  justify-content: center;
  margin-top: 5rem;

  > img {
    width: 40rem;
    flex: 1;
  }

  > div {
    flex: 4;
  }

  @media (max-width: 1450px) {
    > img {
      width: 30rem;
    }

    > div {
      flex: 1;
    }
  }

  @media (max-width: 1000px) {
    > img {
      width: 22rem;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column-reverse;
    > div {
      width: 100%;
    }
  }
`;

export const TextContainer = styled.section`
  margin-bottom: 2rem;
  width: 100%;
  @keyframes animate-letters {
    from {
      opacity: 0;
      transform: translateY(-50%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  h1 {
    font-size: 8rem;
    color: ${({ theme }) => theme.primary};
  }

  h2 {
    font-size: 3rem;
    font-weight: 500;
    color: ${({ theme }) => theme.secondary};
  }

  h1 span,
  h2 span {
    opacity: 0;
    animation-name: animate-letters;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
  }

  h1 span:nth-child(1) {
    animation-delay: 0.2s;
  }

  h1 span:nth-child(2) {
    animation-delay: 0.4s;
  }
  h1 span:nth-child(3) {
    animation-delay: 0.6s;
  }

  h2 span:nth-child(1) {
    animation-delay: 0.8s;
  }

  h2 span:nth-child(2) {
    animation-delay: 1s;
  }
  h2 span:nth-child(3) {
    animation-delay: 1.2s;
  }
  h2 span:nth-child(4) {
    animation-delay: 1.4s;
  }

  h2 span:nth-child(5) {
    animation-delay: 1.6s;
  }
  h2 span:nth-child(6) {
    animation-delay: 1.8s;
  }
  h2 span:nth-child(7) {
    animation-delay: 2s;
  }

  h2 span:nth-child(8) {
    animation-delay: 2.4s;
  }
  h2 span:nth-child(9) {
    animation-delay: 2.6s;
  }

  h2 span:nth-child(10) {
    animation-delay: 2.8s;
  }
  h2 span:nth-child(11) {
    animation-delay: 3s;
  }
  h2 span:nth-child(12) {
    animation-delay: 3.2s;
  }

  h2 span:nth-child(13) {
    animation-delay: 3.4s;
  }
  h2 span:nth-child(14) {
    animation-delay: 3.6s;
  }
  h2 span:nth-child(15) {
    animation-delay: 3.8s;
  }

  /* adicione mais regras para cada letra */

  @media (max-width: 1450px) {
    h1 {
      font-size: 5rem;
    }
    h2 {
      font-size: 2rem;
    }
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
`;

export const InfosContainer = styled.section`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CodeItem = styled.pre`
  background: ${({ theme }) => theme.gradient};
  padding: 2rem;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 300;
  color: #fff;
  width: 24rem;
  align-self: flex-start;
  transition: 1s !important;

  @media (max-width: 1450px) {
    width: 18rem;
    padding: 1.5rem;
    font-size: 0.8rem;
  }
  @media (max-width: 1000px) {
    width: 100%;
    padding: 1.5rem;
    font-size: 0.8rem;
  }
  &:hover {
    filter: brightness(1.2);
  }
  &:last-child {
    align-self: flex-end;
  }

  > div {
    margin: 0.2rem 0;
    margin-left: 1rem;
  }

  span.purple {
    color: #c38cdd;
  }
  span.blue {
    color: #7ac7e3;
  }
  span.comment {
    color: ${({ theme }) => theme.text};
    display: block;
    margin-bottom: 1rem;
  }
`;
