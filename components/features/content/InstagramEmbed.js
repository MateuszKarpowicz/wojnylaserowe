'use client';

import { useEffect } from 'react';
import { Button, ImageFrame } from '@/components/primitives';

/**
 * InstagramEmbed - Komponent embed Instagram bez Section wrappera
 *
 * Wydzielony komponent embed Instagram do użycia w różnych sekcjach.
 *
 * @param {string} [postUrl] - URL posta Instagram (env: NEXT_PUBLIC_INSTAGRAM_POST_URL)
 * @param {string} [profileUrl] - URL profilu Instagram (env: NEXT_PUBLIC_INSTAGRAM_URL)
 */
export default function InstagramEmbed({
  postUrl = process.env.NEXT_PUBLIC_INSTAGRAM_POST_URL,
  profileUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL,
}) {
  useEffect(() => {
    // Załaduj embed.js tylko raz
    // UWAGA: Instagram embed.js może wyświetlać błędy w konsoli dotyczące @property rules
    // To normalne i pochodzi z zewnętrznego CSS Instagram - nie możemy tego naprawić
    const existing = document.querySelector('script[src="https://www.instagram.com/embed.js"]');
    if (!existing) {
      const s = document.createElement('script');
      s.src = 'https://www.instagram.com/embed.js';
      s.async = true;
      document.body.appendChild(s);
      return () => {
        // zostawiamy skrypt, by nie ładować wielokrotnie przy nawigacji
      };
    } else if (window.instgrm && window.instgrm.Embeds) {
      // Przebuduj osadzenia jeśli skrypt już jest
      window.instgrm.Embeds.process();
    }
  }, [postUrl]);

  return (
    <>
      <ImageFrame variant='blue' aspect='square' sizeClass='w-full'>
        {postUrl ? (
          <blockquote
            className='instagram-media absolute inset-0 w-full h-full m-0'
            data-instgrm-permalink={postUrl}
            data-instgrm-version='14'
            style={{ background: 'transparent', border: 0 }}
          />
        ) : (
          <div className='absolute inset-0 flex items-center justify-center'>
            <p className='text-text-dark/70'>
              Skonfiguruj adres posta w NEXT_PUBLIC_INSTAGRAM_POST_URL
            </p>
          </div>
        )}
      </ImageFrame>

      <Button
        as='a'
        href={profileUrl || '#'}
        target='_blank'
        rel='noopener noreferrer'
        variant='cta-blue'
        size='md'
        fullWidth={true}
        className='mt-6'
      >
        Otwórz profil na Instagramie
      </Button>
    </>
  );
}
