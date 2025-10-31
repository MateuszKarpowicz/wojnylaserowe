"use client";

import { useEffect } from 'react';
import { Section, SectionHeader, Container, Button, ImageFrame } from '@/components/primitives';

export default function InstagramSection({
  title = 'Śledź nas na Instagramie',
  postUrl = process.env.NEXT_PUBLIC_INSTAGRAM_POST_URL,
  profileUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL || process.env.NEXT_PUBLIC_INSTAGRAM_URL,
}) {
  useEffect(() => {
    // Załaduj embed.js tylko raz
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
    <Section bg='surface'>
      <Container>
        <SectionHeader title={title} variant='dark' />
        <div className='max-w-md mx-auto w-full'>
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
                <p className='text-text-dark/70'>Skonfiguruj adres posta w NEXT_PUBLIC_INSTAGRAM_POST_URL</p>
              </div>
            )}
          </ImageFrame>

          <div className='mt-6 text-center'>
            <Button as='a' href={profileUrl || '#'} target='_blank' rel='noopener noreferrer' variant='ctaBlue' size='md' fullWidth={true}>
              Otwórz profil na Instagramie
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
