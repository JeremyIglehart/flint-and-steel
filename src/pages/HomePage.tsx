import React, { useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
/**
 * Production-grade BrandMark SVG.
 * High-fidelity geometry (viewBox 659.48).
 * All paths are solid fills as per client requirements.
 */
const BrandMark = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 659.48 659.48"
    className="w-[284px] md:w-[355px] lg:w-[426px] max-w-full h-auto"
    aria-hidden="true"
  >
    <path
      fill="currentColor"
      d="M207.57,105.15h86.88c1.45,0,2.42,1.5,1.82,2.82l-62.65,139.4c-1.08,2.4,1.75,4.65,3.84,3.06l185.45-140.23c4.34-3.28,9.62-5.05,15.07-5.05h79.4c2.53,0,3.5,3.3,1.37,4.66l-244.01,157.37c-7.38,4.76-8.4,15.16-2.09,21.26l14.4,13.92c11.39,11.02,16.14,27.23,12.5,42.67h0c-1.21,5.1-7.86,6.29-10.83,1.97-.04-.06-.08-.11-.12-.18-1.6-2.3-3.34-4.27-4.92-5.88-1.47-1.49-3.95.03-3.3,2.02h0c.68,2.08-1.99,3.57-3.4,1.91-3.98-4.67-9.5-10.88-16-17.42-16.08-16.14-36.57-34.76-43.27-40.81-1.17-1.05-2.99-.8-3.83.53l-48.65,76.49c-1.5,2.34-4.08,3.77-6.86,3.77h-20.82c-1.67,0-2.89-1.59-2.45-3.2l70.02-257.24c.3-1.11,1.31-1.87,2.45-1.87Z"
    />
    <path
      fill="currentColor"
      d="M397.14,454.4H95.36c-1.4,0-2.53-1.13-2.53-2.52l-.3-55.2c0-1.4,1.13-2.55,2.54-2.55l232.85.21c8.29,0,16.26,3.21,22.24,8.95l48.73,46.75c1.65,1.58.53,4.37-1.76,4.37Z"
    />
    <path
      fill="currentColor"
      d="M406.47,409.58h37.35c7.89,0,15.56,2.64,21.78,7.5l100.41,78.5c1.92,1.5,0.82,4.58-1.61,4.53l-66.85-1.34c-8.65-.18-16.93-3.51-23.28-9.38l-72.73-67.19c-4.87-4.5-1.69-12.63,4.94-12.63Z"
    />
    <path
      fill="currentColor"
      d="M340.23,331.3c-4.34,5.49-13.11,1.21-11.43-5.58,1.74-7.08,3.85-14.88,6.29-22.58,4.8-15.13,10.72-29.97,14.92-39.92,1.18-2.79,5.34-1.95,5.34,1.08v15.36c0,2.62,3.28,3.79,4.94,1.76l37.01-45.31c2.11-2.59,6.16.06,4.62,3.04l-14.88,28.87c-3.92,7.62-8.57,14.84-13.88,21.56l-32.93,41.68Z"
    />
    <path
      fill="currentColor"
      d="M366.15,331.24l27.06-33.13c10.78-13.19,23.97-24.2,38.89-32.42l55.07-30.36c2.76-1.53,5.53,2,3.39,4.32l-57.18,62.03c-10.75,11.66-23.49,21.3-37.61,28.48l-21.62,10.99c-6.27,3.19-12.45-4.47-7.99-9.92Z"
    />
    <path
      fill="currentColor"
      d="M410.04,376.33c-11.58,1.42-23.2,2.3-33.3,2.85-7.1.38-9.58-9.26-3.19-12.36l38.32-18.58c8.1-3.93,16.58-7.02,25.3-9.24l45.43-11.56c3.28-.84,4.93,3.82,1.85,5.23l-42.76,19.57c-2.46,1.12-2.03,4.74.63,5.26l20.98,4.11c2.97.58,3.02,4.81.06,5.45-12.62,2.75-32.92,6.79-53.31,9.29Z"
    />
  </svg>
);
export function HomePage() {
  useEffect(() => {
    document.title = "Flint & Steel";
  }, []);
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.2,
      },
    },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };
  return (
    <main
      className="min-h-[100dvh] w-full flex flex-col items-center justify-center py-16 px-6 sm:px-12 overflow-y-auto"
      role="main"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center max-w-screen-md w-full"
      >
        {/* Visual Anchor - Refined Maker's Mark */}
        <motion.div
          variants={itemVariants}
          className="mb-12 md:mb-16 text-foreground"
          aria-label="Flint and Steel Maker's Mark"
        >
          <BrandMark />
        </motion.div>
        {/* Primary Invocation - Poetic Serif */}
        <motion.h1
          variants={itemVariants}
          className="text-2xl md:text-3xl lg:text-4xl text-primary font-semibold tracking-tight text-center mb-10 md:mb-12 text-balance italic"
        >
          No sense in rushing to become.
        </motion.h1>
        {/* Contemplative Body - Balanced and Breathing */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg lg:text-xl text-muted-foreground leading-[1.8] md:leading-[2] tracking-[0.015em] max-w-[38ch] mx-auto text-center font-normal text-balance"
        >
          There’s no race to becoming, because you’re already in the unfolding flow of being.
          Each moment is a step, and each step is enough.
          You’ve been on the path all along.
        </motion.p>
      </motion.div>
    </main>
  );
}