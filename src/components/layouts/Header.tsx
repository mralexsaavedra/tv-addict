'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useMounted } from '@/hooks/useMounted';
import { cn } from '@/lib/utils';
import { Search } from '@/components/Search';
import { Skeleton } from '@/components/ui/Skeleton';
import { MainNav } from '@/components/layouts/MainNav';
import { siteConfig } from '@/config/site';
import { buttonVariants } from '../ui/Button';

const Header = () => {
  const pathname = usePathname();
  const mounted = useMounted();
  const [isScrolled, setIsScrolled] = useState(false);

  // change background color on scroll
  useEffect(() => {
    const changeBgColor = () => {
      window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false);
    };
    window.addEventListener('scroll', changeBgColor);

    return () => window.removeEventListener('scroll', changeBgColor);
  }, [isScrolled]);

  return (
    <header
      aria-label="Header"
      className={cn(
        'sticky top-0 z-40 w-full',
        isScrolled ? 'bg-neutral-900 shadow-md' : 'bg-transparent'
      )}
    >
      <nav className="container flex h-16 max-w-screen-2xl items-center justify-between space-x-4 sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />

        <div className="flex items-center space-x-1.5">
          {mounted ? (
            <Search
              containerClassName={cn(pathname === '/login' ? 'hidden' : 'flex')}
              onChange={() => void 0}
            />
          ) : (
            <Skeleton className="aspect-square h-7 bg-neutral-700" />
          )}

          {mounted ? (
            <Link
              aria-label="Sign in"
              href="/login"
              className={cn(
                buttonVariants({
                  variant: 'brand',
                  size: 'auto',
                  className: 'h-auto rounded',
                })
              )}
            >
              Sign In
            </Link>
          ) : (
            <Skeleton className="h-7 w-10 bg-neutral-700" />
          )}
        </div>
      </nav>
    </header>
  );
};

export { Header };
function replace(arg0: string) {
  throw new Error('Function not implemented.');
}
