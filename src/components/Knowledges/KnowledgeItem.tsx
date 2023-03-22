import { ReactNode } from 'react';
import { KnowledgeContainer } from './styles';

interface KnowledgeItemProps {
  title: string;
  icon: ReactNode;
}

export function KnowledgeItem({ title, icon }: KnowledgeItemProps) {
  return (
    <KnowledgeContainer data-aos="fade-up">
      <p>{title}</p>
      {icon}
    </KnowledgeContainer>
  );
}
