import { useTheme } from 'next-themes';
import { useIsClient } from '@/hooks/use-is-client';
import { Moon } from './icons/moon';
import { Sun } from './icons/sun';

type ThemeButtonProps = React.ComponentPropsWithoutRef<'button'>;

export function ThemeButton(props: ThemeButtonProps) {
  const { theme, setTheme } = useTheme();
  const client = useIsClient();

  return (
    <button
      role="button"
      type="button"
      aria-label="dark mode toggle"
      aria-pressed="true"
      className="rounded-md border-2 border-transparent p-1.5 py-1 text-primary focus:outline-none focus-visible:border-accent "
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      {...props}
    >
      <span className="sr-only">Toggle theme</span>
      {client ? <>{theme === 'light' ? <Moon /> : <Sun />}</> : <Sun />}
    </button>
  );
}
