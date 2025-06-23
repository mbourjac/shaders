'use client';

import { useRef } from 'react';
import dynamic from 'next/dynamic';
import { useScroll } from 'framer-motion';

const Scene = dynamic(
  () => import('./_components/scene').then((module) => module.Scene),
  {
    ssr: false,
  }
);

const WaveDistortionPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <main>
      <div ref={containerRef} className="h-[300vh]">
        <div className="sticky top-0 h-dvh">
          <Scene scrollYProgress={scrollYProgress} />
        </div>
      </div>
      <div className="h-dvh"></div>
    </main>
  );
};

export default WaveDistortionPage;
