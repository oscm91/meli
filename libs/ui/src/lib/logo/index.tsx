import React from 'react';
import { LogoImage } from '../images';

export interface LogoProps {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export function Logo({ onClick }: LogoProps) {
  return (
    <span onClick={onClick}>
      <LogoImage />
    </span>
  );
}

export default Logo;
