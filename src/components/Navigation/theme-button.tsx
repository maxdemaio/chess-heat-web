'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Icons } from '@/components/ui/icons';

export function ThemeButton() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted ? (
        <button
          aria-label="theme button"
          className="focus:bg-accent rounded-lg p-2 duration-300 focus:outline-none focus-visible:ring-2"
          onClick={() => {
            setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
          }}
          type="button"
        >
          {resolvedTheme === 'dark' && <Icons.moon aria-hidden="true" className="h-5 w-5" />}
          {resolvedTheme === 'light' && <Icons.sun aria-hidden="true" className="h-5 w-5" />}
        </button>
      ) : null}
    </>
  );
}
