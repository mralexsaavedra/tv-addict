import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { NavItem } from '@/types';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';

interface MainNavProps {
  items?: NavItem[];
}

export function MainNav({ items }: MainNavProps) {
  const path = usePathname();

  return (
    <div className="flex gap-6 lg:gap-10">
      <Link href="/" className="hidden lg:block" onClick={() => void 0}>
        <Image
          src="/netflix-logo.svg"
          alt="netflix"
          width={1024}
          height={276.74}
          className="h-auto w-28 object-cover transition-opacity hover:opacity-80 active:opacity-100"
          priority
        />
      </Link>

      {items?.length ? (
        <nav className="hidden gap-6 lg:flex">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    'flex items-center text-lg font-medium text-slate-300 transition hover:text-slate-300 hover:text-opacity-70 dark:text-slate-300 dark:hover:text-slate-300 dark:hover:text-opacity-70 sm:text-sm',
                    path === item.href &&
                      'font-bold text-white dark:text-white',
                    item.disabled &&
                      'cursor-not-allowed opacity-80 pointer-events-none'
                  )}
                  onClick={() => void 0}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="h-auto px-2 py-1.5 text-base hover:bg-neutral-800 focus:ring-0 dark:hover:bg-neutral-800 lg:hidden"
          >
            {/* <Icons.logo className="mr-2 h-4 w-4 text-red-600" /> */}
            <span className="font-bold">Menu</span>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="start"
          sideOffset={20}
          className="w-52 overflow-y-auto overflow-x-hidden rounded-sm bg-neutral-800 text-slate-200 dark:bg-neutral-800 dark:text-slate-200"
        >
          {items?.map((item, index) =>
            item.href ? (
              <DropdownMenuItem
                key={index}
                asChild
                className="hover:bg-neutral-700 focus:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              >
                <Link href={item.href} onClick={() => void 0}>
                  {item.icon && (
                    <item.icon className="mr-2 h-4 w-4" aria-hidden="true" />
                  )}
                  <span className="line-clamp-1">{item.title}</span>
                </Link>
              </DropdownMenuItem>
            ) : (
              <DropdownMenuItem
                key={index}
                asChild
                className="hover:bg-neutral-700 focus:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              >
                <div onClick={item.onClick}>
                  {item.icon && (
                    <item.icon className="mr-2 h-4 w-4" aria-hidden="true" />
                  )}
                  <span className="line-clamp-1">{item.title}</span>
                </div>
              </DropdownMenuItem>
            )
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
