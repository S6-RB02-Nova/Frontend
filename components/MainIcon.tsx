import type { ReactNode } from 'react';
import Image from 'next/image';

const MainIcon = () => {
  return (
    <Image
      src="https://i.ibb.co/Qf29XS6/4energylogotransparent.png"
      height={250}
      width={400}
      objectFit="contain"
      alt="4Energy logo"
    />
  );
};

export default MainIcon;
