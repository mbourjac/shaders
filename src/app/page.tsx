'use client';

import { useState } from 'react';
import Link from 'next/link';
import { cn } from '../lib/utils';
import { HomeLink } from './types';

const HomePage = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const links = [
    {
      path: 'wave-distortion',
      label: 'Wave distortion',
    },
  ] satisfies HomeLink[];

  return (
    <main className="px-4">
      <ul>
        {links.map(({ path, label }, index) => (
          <li
            className={cn('group', index !== links.length - 1 && 'border-b')}
            key={path}
            onMouseEnter={() => setHoveredLink(path)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <Link
              href={path}
              className={cn(
                'flex items-baseline gap-[0.5vw] py-2 leading-none transition-all duration-[400ms] ease-[cubic-bezier([0.83,0,0.17,1])] group-hover:translate-x-4',
                hoveredLink && hoveredLink !== path && 'opacity-60'
              )}
            >
              <span className="text-3xl uppercase">
                <span className="text-lg italic">
                  {String(index + 1).padStart(2, '0')}
                </span>{' '}
                {label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default HomePage;
