'use client';
import { Locale } from '@/config';
import { setUserLocale } from '@/services/locale';
import { useLocale, useTranslations } from 'next-intl';
import { useTransition } from 'react';

export default function LocaleSwitcher() {
  const locale = useLocale();

  const [isPending, startTransition] = useTransition();

  function onChange(value: string) {
    const locale = value as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  }

  return (
    <div className="flex items-center justify-end mr-4">
      <p
        className={`${
          locale === 'en' ? 'text-while ' : 'text-custom-lightGray'
        } cursor-pointer p-1 text-lg`}
        onClick={() => onChange('en')}
      >
        en
      </p>
      <p className="text-custom-lightGray cursor-pointer p-1 text-xs">|</p>
      <p
        className={`${
          locale === 'ua' ? 'text-while ' : 'text-custom-lightGray'
        } cursor-pointer p-1 text-lg`}
        onClick={() => onChange('ua')}
      >
        ua
      </p>
    </div>
  );
}
