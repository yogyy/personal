import { FileUser, MailPlus } from '@/components/icons/internal';
import { Github, LinkedIn, X } from '@/components/icons/simple-icons';

const externalUrl = [
  {
    href: 'https://drive.google.com/file/d/1WiDTa401eRn8icWj6QkV842Q4kxFiFwZ/view?usp=sharing',
    icon: FileUser,
    name: 'Resume',
  },
  {
    href: 'https://github.com/yogyy',
    icon: Github,
    name: 'yogyy',
  },
  {
    href: 'https://twitter.com/yogyyconst',
    icon: X,
    name: '@yogyyconst',
  },
];

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/posts', label: 'Posts' },
  { href: '/projects', label: 'Projects' },
];

const footerLinks = [
  {
    href: 'mailto:m.yogi.fs@gmail.com',
    alt: 'Email',
    icon: MailPlus,
    content: ['Contact me ', 'm.yogi.fs@gmail.com'],
  },
  {
    href: 'https://github.com/yogyy',
    alt: 'Github',
    icon: Github,
    content: ['See My Project on ', 'Github'],
  },
  {
    href: 'https://www.linkedin.com/in/yogyy/',
    alt: 'LinkedIn',
    icon: LinkedIn,
    content: ['Find me on ', 'LinkedIn'],
  },
  {
    href: 'https://twitter.com/yogyyconst',
    alt: 'Twitter',
    icon: X,
    content: ['Reach me on ', 'X'],
  },
];

export { externalUrl, footerLinks, navLinks };
