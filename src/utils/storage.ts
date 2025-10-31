import type { GalleryImage } from '../types';

const GALLERY_KEY = 'ceramics.galleryImages';
const ABOUT_KEY = 'ceramics.aboutText';

export function getImages(): GalleryImage[] {
  const stored = localStorage.getItem(GALLERY_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function saveImages(images: GalleryImage[]): void {
  localStorage.setItem(GALLERY_KEY, JSON.stringify(images));
}

export function getAboutText(): string {
  return localStorage.getItem(ABOUT_KEY) || '';
}

export function saveAboutText(text: string): void {
  localStorage.setItem(ABOUT_KEY, text);
}

