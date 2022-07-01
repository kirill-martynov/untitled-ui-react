import s from './Link.module.css';

interface LinkProps {
  label: string;
  href: string;
}

export const Link = ({ label, href }: LinkProps) => {
  return (
    <a className={s.root} href={href}>
      {label}
    </a>
  );
};
