import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, FC, forwardRef } from 'react';

type Variant =
  | 'default'
  | 'destructive'
  | 'outline'
  | 'subtle'
  | 'ghost'
  | 'link'
  | 'brand'
  | 'flat';

const VARIANT: Record<Variant, string> = {
  default: 'bg-slate-50 text-slate-900 dark:bg-slate-50 dark:text-slate-900',
  destructive:
    'bg-red-500 text-white hover:bg-red-600 dark:bg-red-500 dark:text-white dark:hover:bg-red-600',
  outline:
    'border border-slate-700 bg-transparent text-slate-100 hover:bg-slate-800 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800',
  subtle:
    'bg-slate-700 text-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-200',
  ghost:
    'bg-transparent text-slate-100 hover:bg-slate-800 hover:text-slate-100 data-[state=open]:bg-transparent dark:text-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-100 dark:data-[state=open]:bg-transparent',
  link: 'bg-transparent text-slate-100 underline-offset-4 hover:bg-transparent hover:underline dark:bg-transparent dark:text-slate-100 dark:hover:bg-transparent',
  brand:
    'bg-red-600 text-white hover:bg-red-700 dark:bg-red-600 dark:text-white dark:hover:bg-red-700',
  flat: 'rounded-none bg-slate-50 text-slate-900 hover:bg-red-600 hover:text-slate-100 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-red-600 dark:hover:text-slate-100',
};

type Size = 'default' | 'sm' | 'lg' | 'auto';

const SIZE: Record<Size, string> = {
  default: 'h-10 px-4 py-2',
  sm: 'h-9 rounded-md px-2',
  lg: 'h-11 rounded-md px-8',
  auto: 'px-4 py-2',
};

export const buttonVariants = ({
  variant = 'default',
  size = 'default',
  className,
}: {
  variant: Variant;
  size: Size;
  className?: string;
}): string =>
  cn(
    'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-slate-900 transition-colors hover:bg-slate-800 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-slate-800 dark:hover:bg-slate-800 dark:hover:text-slate-100 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:data-[state=open]:bg-slate-800',
    VARIANT[variant],
    SIZE[size],
    className
  );

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };
