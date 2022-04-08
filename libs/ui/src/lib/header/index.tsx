import React from 'react';
import { Logo } from '../logo';

export interface HeaderProps {
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export function Header({ children, onClick }: HeaderProps) {
  return (
    <header
      className="flex justify-center items-center py-2 bg-primary w-full"
      onClick={onClick}
    >
      <div className="flex container gap-5">
        <div className="flex-none"><a href='/'><Logo /></a></div>
        <div className="flex-grow">{children}</div>
      </div>
    </header>
  );
}

export default Header;
