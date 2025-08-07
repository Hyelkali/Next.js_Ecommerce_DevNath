import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css'
import Image from 'next/image';

export default function Page() {
  return (
    <main className="relative flex min-h-screen flex-col p-6 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-zinc-900 via-blue-700 to-violet-900 w-full h-full" />
      {/* Image background with opacity */}
      <Image
        src="/img1.jpg"
        alt="Background"
        fill
        priority
        className="object-cover opacity-80 absolute inset-0 -z-10 blur-sm brightness-50"
      />
      {/* ...existing content... */}
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-gradient-to-t from-stone-800 via-blue-900 to-blue-600 border-spacing-2 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row ">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gradient-to-r from-blue-800 to-indigo-900 px-6 py-10 md:w-2/5 md:px-20">
        <div className={styles.shape}></div>
          <p className={`text-xl text-gray-50 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Acme Ecommerce!</strong> This is an ecommerce site built by <span className="font-bold text-blue-300">Hyelkali</span> as the first Acme Next.js tutorial.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/hero.png"
            alt="Hero Image"
            width={1000}
            height={760}
            className="rounded-lg shadow-lg flex md:block max-w-400"
          />    
        </div>
      </div>
    </main>
  );
}
