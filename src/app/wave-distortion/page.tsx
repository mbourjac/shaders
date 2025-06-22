'use client';

import dynamic from 'next/dynamic';

const Scene = dynamic(
  () => import('./_components/scene').then((module) => module.Scene),
  {
    ssr: false,
  }
);

const WaveDistortionPage = () => {
  return (
    <main className="h-dvh">
      <Scene />
    </main>
  );
};

export default WaveDistortionPage;
