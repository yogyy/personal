import clsx from 'clsx';
import { m, useMotionValueEvent, useScroll } from 'framer-motion';
import { GeistSans } from 'geist/font/sans';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { ThemeButton } from '@/components/dark-theme';
import { easeOutBack } from '@/constants/framer-easing';
import { navLinks } from '@/constants/links';

function NavLink({ href, children, ...rest }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const router = useRouter();
  const arrOfRoute = router.route.split('/');
  const baseRoute = '/' + arrOfRoute[1];
  const isNotActive = router.pathname && baseRoute !== href;

  return (
    <Link
      href={href || ''}
      className={clsx(
        'rounded-sm p-1 text-primary transition-colors focus:outline-none focus-visible:ring focus-visible:ring-primary',
        { 'text-white/50 hover:text-primary/50': isNotActive },
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}

export const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const { pathname } = useRouter();
  const { scrollY } = useScroll();
  const inPosts = pathname === '/posts/[slug]';

  useMotionValueEvent(scrollY, 'change', latest => {
    const prev = scrollY.getPrevious();
    if (latest > prev && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <m.header
      variants={{ visible: { y: 0 }, hidden: { y: '-100%' } }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.25, easings: easeOutBack }}
      className={clsx(`${GeistSans.variable} sticky top-0 z-10 w-full bg-background/80 font-sans`, {
        'border-b-2 border-accent': inPosts,
      })}
    >
      <a
        href="#skip-nav"
        className="group absolute left-4 top-1 z-20 -translate-y-16 rounded-sm bg-background p-2 font-medium text-foreground transition focus:translate-y-0 focus:outline-none focus:ring focus:ring-accent"
      >
        skip to content
      </a>
      <nav
        aria-label="Main Menu"
        className={clsx('backdrop-blur-sm', { 'bg-background': inPosts })}
      >
        <div className="layout flex items-center justify-between py-4">
          <ul className="ml-9 flex gap-7 font-medium">
            {navLinks.map(({ label, href }) => (
              <li key={`${href} ${label}`} className="text-xs md:text-base">
                <NavLink href={href}>{label}</NavLink>
              </li>
            ))}
          </ul>
          <ThemeButton />
        </div>
      </nav>
    </m.header>
  );
};
