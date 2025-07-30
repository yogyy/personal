import { GeistSans } from 'geist/font/sans';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

export default function Custom404() {
  return (
    <>
      <NextSeo title="Page Not Found" />
      <div className={`grid min-h-svh w-svw place-content-center ${GeistSans.variable} font-sans`}>
        <div className="relative flex h-screen flex-col items-center justify-center">
          <Link href="/" className="">
            <h1 className="text-6xl text-destructive xl:text-9xl">404</h1>
          </Link>
          <p className="bg-gradient-to-br from-yellow-500 to-red-600 bg-clip-text text-transparent">
            page couldn&apos;t be found
          </p>
        </div>
      </div>
    </>
  );
}
