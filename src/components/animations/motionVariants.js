// src/components/animations/motionVariants.js

export const fadeUp = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -60, rotate: -2 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 60, rotate: 2 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

export const floatY = {
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const textColorPulse = {
  animate: {
    color: ["#2563eb", "#4f46e5", "#2563eb"],
    transition: { duration: 3, repeat: Infinity },
  },
};
