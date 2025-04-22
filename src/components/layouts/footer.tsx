import { m, useInView } from 'framer-motion';
import { GeistSans } from 'geist/font/sans';
import Link from 'next/link';
import { useFeatureFlagEnabled } from 'posthog-js/react';
import { useRef } from 'react';
import { footerLinks } from '@/constants/links';
import { SpotifyActivity } from './spotify';
import {
  Tooltip,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';

export const Footer = () => {
  const view = useRef(null);
  const inView = useInView(view, { margin: '0px 0px', once: true });
  const spotifyFlag = useFeatureFlagEnabled('spotify-activity');

  return (
    <m.footer
      ref={view}
      initial="hidden"
      animate={inView && 'show'}
      className={`mt-6 bg-background/30 backdrop-blur-sm ${GeistSans.variable} font-sans`}
    >
      <hr className="layout mb-6 border-text/10" />
      <div className="layout relative pb-4">
        <div className="mb-4 flex flex-col items-center justify-center gap-3">
          {spotifyFlag && <SpotifyActivity />}
        </div>
        <div className="flex flex-col-reverse place-items-center justify-center gap-6">
          <p className="flex gap-3 text-sm font-medium text-text/60 sm:text-center">
            © 2025 yogyy.
          </p>
          <div className="flex flex-col items-center">
            <p className="text-text/60">Reach me out</p>
            <ul className="relative my-auto flex gap-x-3 text-xl md:gap-x-5">
              {footerLinks.map(link => (
                <li key={link.href} className="inline-flex items-center">
                  <TooltipProvider delayDuration={300}>
                    <Tooltip>
                      <TooltipTrigger
                        type="button"
                        className="cursor-newtab group outline-none"
                        aria-label={link.alt}
                        asChild
                      >
                        <Link
                          href={link.href}
                          target="_blank"
                          aria-label={`go to ${link.alt}`}
                          className="cursor-newtab"
                        >
                          <link.icon className="relative m-1 w-5 text-text/70 group-hover:text-accent group-focus:text-accent" />
                        </Link>
                      </TooltipTrigger>
                      <TooltipPortal>
                        <TooltipContent
                          sideOffset={8}
                          side="top"
                          className="font-medium text-text/80 outline-accent duration-400"
                        >
                          {link.content[0]}
                          <span className="text-primary">{link.content[1]}</span>
                        </TooltipContent>
                      </TooltipPortal>
                    </Tooltip>
                  </TooltipProvider>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </m.footer>
  );
};
