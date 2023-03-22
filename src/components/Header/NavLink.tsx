import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavLinkContainer } from './styles';

interface NavLinkProps {
  title: string;
  path: string;
}
export function NavLink({ title, path }: NavLinkProps) {
  const router = useRouter();

  const isActive = router.pathname === path;
  return (
    <NavLinkContainer isActive={isActive}>
      <Link href={path}>
        <span>{title}</span>
      </Link>
    </NavLinkContainer>
  );
}
