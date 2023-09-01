import React from 'react';

interface IProps {
  label: string;
  url: string;
  size?: 'small' | 'medium' | 'large';
}
import './index.scss';
import Link from 'next/link';

export const NavLink = ({label, size = 'medium', url}: IProps) => {
  return (
    <Link href={url} className={`nav-link-${size}`}>
      {label}
    </Link>
  );
};
