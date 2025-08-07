import { poppins } from '@/app/ui/fonts';
import Image from 'next/image';
export default function AcmeLogo() {
  return (
    <div
      className={`${poppins.className} flex flex-row items-center leading-none text-gray-50`}
    >
      <Image
        src="/hero.png"
        alt="DevNath Logo"
        width={35}
        height={35}
        className="mr-2 rounded-full shadow-lg flex md:block max-w-400"
      />
      {/* You can replace the text with an SVG or any other logo format */}
      <p className="mr-12 text-[34px] bg-gradient-to-t from-green-50 to-blue-500 bg-clip-text text-transparent">Hyelkali</p>
    </div>
  );
}
