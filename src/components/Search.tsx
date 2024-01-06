import {
  FC,
  startTransition,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { Input, type InputProps } from '@/components/ui/Input';
import { Search as SearchIcon } from '@/components/icons/Search';

const WAIT_BETWEEN_CHANGE = 300;

interface SearchProps extends Omit<InputProps, 'onChange'> {
  containerClassName?: string;
  onChange: (value: string) => void;
}

const Search: FC<SearchProps> = ({
  id = 'query',
  containerClassName,
  onChange,
  className,
  ...props
}) => {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // close search input on clicking outside,
  // and optimize with useCallback hook to prevent unnecessary re-renders
  const closeInput = useCallback(() => setIsOpen(false), []);
  useOnClickOutside(inputRef, closeInput);

  useEffect(() => {
    setIsOpen(Boolean(searchParams.get('q')?.toString()));
  }, [searchParams]);

  // configure keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // close search input on pressing escape
      if (e.key === 'Escape') {
        closeInput();
      }

      // open search input on pressing ctrl + k or cmd + k
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        if (!inputRef.current) return;
        e.preventDefault();
        setIsOpen(true);
        inputRef.current.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeInput]);

  const handleOnChange = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set('q', value);
    } else {
      params.delete('q');
    }

    startTransition(() => {
      replace(`${pathname}?${params.toString()}`);
    });

    onChange(value);
  }, WAIT_BETWEEN_CHANGE);

  return (
    <div className={cn('relative', containerClassName)}>
      <Input
        ref={inputRef}
        id={id}
        type="text"
        placeholder="Buscar..."
        className={cn(
          'h-auto rounded-none py-1.5 pl-8 text-sm transition-all dark:placeholder:text-slate-300 dark:focus:ring-offset-0',
          isOpen
            ? 'w-24 border dark:border-slate-500 xxs:w-28 xs:w-44'
            : 'w-0 border-none',
          className
        )}
        onChange={(e) => handleOnChange(e.target.value)}
        {...props}
      />

      <Button
        aria-label="Search"
        variant="ghost"
        className={cn(
          'absolute top-1/2 h-auto -translate-y-1/2 rounded-full p-1 hover:bg-transparent dark:hover:bg-transparent',
          isOpen ? 'left-1' : 'left-[9px]'
        )}
        onClick={() => {
          if (!inputRef.current) return;
          setIsOpen(!isOpen);
          inputRef.current.focus();
        }}
      >
        <SearchIcon
          className={cn(
            'text-slate-50 transition-opacity hover:opacity-75 active:scale-95',
            isOpen ? 'h-4 w-4' : 'h-5 w-5'
          )}
          aria-hidden="true"
        />
      </Button>
    </div>
  );
};

export { Search };
