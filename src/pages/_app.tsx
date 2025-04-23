import { LazyMotion } from 'framer-motion';
import type { AppProps } from 'next/app';
import Router, { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';
import nProgress from 'nprogress';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import React from 'react';
import '@/styles/globals.css';
import '@/styles/nprogess.css';
import { isProd } from '@/constants/env';
import { env } from '@/env';

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.remove);
Router.events.on('routeChangeComplete', nProgress.done);

if (typeof window !== 'undefined' && isProd) {
  posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: isProd ? 'https://yogyy.vercel.app/ingest' : 'http://localhost:3000/ingest',
  });
}
const loadFeatures = () => import('@/lib/features').then(res => res.default);

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  React.useEffect(() => {
    // Track page views
    const handleRouteChange = () => posthog?.capture('$pageview');
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PostHogProvider client={posthog}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        <LazyMotion features={loadFeatures} strict>
          <Component {...pageProps} />
        </LazyMotion>
      </ThemeProvider>
    </PostHogProvider>
  );
}
