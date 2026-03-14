import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
/**
 * Production-grade BrandMark SVG.
 * Updated: All elements now use solid fills to ensure absolute visual consistency.
 * Uses currentColor to inherit from the CSS variable system.
 */
const BrandMark = () => (
  <svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 864 864"
    className="w-64 md:w-80 lg:w-96 h-auto"
    aria-hidden="true"
  >
    <path
      fill="currentColor"
      d="M271.93,173.25h113.82c1.9,0,3.17,1.96,2.39,3.7l-82.08,182.63c-1.41,3.14,2.29,6.09,5.03,4.01l242.97-183.72c5.68-4.3,12.61-6.62,19.74-6.62h104.03c3.31,0,4.59,4.32,1.8,6.11l-319.69,206.18c-9.67,6.24-11.01,19.86-2.74,27.86l18.86,18.24c14.93,14.44,21.15,35.68,16.38,55.9h0c-1.58,6.68-10.3,8.24-14.19,2.58-.05-.08-.11-.15-.16-.23-2.1-3.01-4.37-5.6-6.44-7.7-1.93-1.95-5.17.04-4.32,2.65h0c.89,2.72-2.61,4.68-4.46,2.5-5.21-6.12-12.45-14.26-20.97-22.82-21.07-21.14-47.91-45.54-56.69-53.46-1.53-1.38-3.92-1.05-5.02.69l-63.74,100.21c-1.96,3.07-5.35,4.94-8.99,4.94h-27.28c-2.19,0-3.78-2.08-3.21-4.19l91.74-337.02c.39-1.45,1.71-2.45,3.21-2.45Z"
    />
    <path
      fill="currentColor"
      d="M520.29,630.84H124.92c-1.83,0-3.31-1.48-3.32-3.3l-.39-72.32c0-1.84,1.48-3.34,3.33-3.34l305.07.27c10.86,0,21.3,4.21,29.14,11.73l63.85,61.25c2.16,2.07.69,5.72-2.3,5.72Z"
    />
    <path
      fill="currentColor"
      d="M532.51,572.13h48.93c10.34,0,20.39,3.46,28.53,9.83l131.55,102.85c2.52,1.97,1.08,6-2.11,5.94l-87.58-1.76c-11.33-.23-22.18-4.6-30.5-12.29l-95.29-88.03c-6.38-5.89-2.21-16.54,6.47-16.54Z"
    />
    {/* Refined Geometric Elements: Converted from stroke to solid fill */}
    <path
      fill="currentColor"
      d="M445.73,469.56c-5.68,7.19-17.17,1.59-14.98-7.31,2.28-9.27,5.04-19.49,8.24-29.58,6.29-19.82,14.05-39.26,19.55-52.3,1.55-3.66,7-2.55,7,1.42v20.12c0,3.43,4.3,4.96,6.47,2.31l48.48-59.37c2.77-3.39,8.07.08,6.06,3.98l-19.49,37.83c-5.14,9.98-11.23,19.44-18.19,28.25l-43.14,54.64Z"
    />
    <path
      fill="currentColor"
      d="M479.69,469.48l35.45-43.4c14.12-17.28,31.41-31.7,50.95-42.47l72.15-39.78c3.62-2,7.24,2.62,4.44,5.66l-74.92,81.26c-14.08,15.27-30.77,27.91-49.28,37.32l-28.32,14.4c-8.22,4.18-16.31-5.85-10.47-13Z"
    />
    <path
      fill="currentColor"
      d="M537.19,528.56c-15.17,1.86-30.4,3.01-43.63,3.73-9.3.5-12.55-12.13-4.18-16.19l50.2-24.34c10.61-5.15,21.72-9.2,33.15-12.11l59.52-15.15c4.3-1.1,6.46,5,2.42,6.85l-56.02,25.64c-3.22,1.47-2.66,6.21.82,6.89l27.49,5.38c3.89.76,3.95,6.3.08,7.14-16.53,3.6-43.13,8.89-69.84,12.17Z"
    />
  </svg>
);
export function HomePage() {
  useEffect(() => {
    document.title = "Flint & Steel";
  }, []);
  return (
    <main className="min-h-[100dvh] bg-background flex flex-col items-center justify-center px-6 pt-4 pb-20 md:px-12 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1.0] }}
        className="flex flex-col items-center max-w-screen-md w-full"
      >
        {/* Visual Anchor: The solid brand identity */}
        <div className="mb-2 md:mb-4 text-foreground">
          <BrandMark />
        </div>
        {/* Primary Invocation: Poetic and centered */}
        <h1 className="text-xl md:text-3xl text-foreground font-semibold tracking-tight text-center mb-6 md:mb-8 text-balance italic opacity-90">
          No sense in rushing to become.
        </h1>
        {/* Contemplative Body: Optimized for legibility and vertical rhythm */}
        <p className="text-base md:text-lg text-muted-foreground leading-[1.9] md:leading-[2.2] tracking-[0.015em] max-w-[36ch] mx-auto text-center font-normal text-balance">
          There’s no race to becoming, because you’re already in the unfolding flow of being.
          Each moment is a step, and each step is enough.
          You’ve been on the path all along.
        </p>
      </motion.div>
    </main>
  );
}