import {NavLink} from '../NavLink';
import React from 'react';
import './index.scss';

export default function Header() {
  return (
    <header>
      <h1>NEXT WHAT MOVIE?</h1>
      <nav>
        <ul>
          <li>
            <NavLink label={'오늘의 영화'} url={'/today'} />
          </li>
        </ul>
      </nav>
    </header>
  );
}
