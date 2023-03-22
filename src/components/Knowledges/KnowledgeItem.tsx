import { ReactNode } from 'react';
import { KnowledgeContainer } from './styles';

interface KnowledgeItemProps {
  title: string;
  icon: ReactNode;
}

export function KnowledgeItem({ title, icon }: KnowledgeItemProps) {
  return (
    <KnowledgeContainer>
      <p>{title}</p>
      {icon}
    </KnowledgeContainer>
  );
}
