import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { LOCALE } from '@/lib/locale';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString(LOCALE, {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export function getYear(input: string | number): number {
  const date = new Date(input);
  return date.getFullYear();
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}

export function formatEnum(input: string): string {
  const words = input.split('_');
  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  return capitalizedWords.join(' ');
}
