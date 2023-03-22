import { ItemContainer } from './styles';

interface ExperienceItemProps {
  year: string;
  title: string;
  description: string;
}

export function ExperienceItem({
  year,
  title,
  description
}: ExperienceItemProps) {
  return (
    <ItemContainer>
      <div>
        <h1>{year}</h1>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </ItemContainer>
  );
}
