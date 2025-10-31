/**
 * Motion configuration - spring animations dla drawerów i gestów
 * Używane z Framer Motion (motion/react)
 */

export const springSheet = {
  type: 'spring',
  stiffness: 420,
  damping: 40,
  mass: 0.7,
};

export const springSnappy = {
  type: 'spring',
  stiffness: 560,
  damping: 36,
  mass: 0.6,
};

export const springSlow = {
  type: 'spring',
  stiffness: 300,
  damping: 50,
  mass: 0.8,
};

// Dla prefers-reduced-motion (prosty fade/translate, bez spring)
export const reducedMotionTransition = {
  duration: 0.2,
  ease: [0.4, 0, 0.2, 1],
};
