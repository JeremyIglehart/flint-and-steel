import React from 'react';
import { motion } from 'framer-motion';
/**
 * Maker's Mark: A crisp interlocking diamond and line pattern 
 * with a 1.5px stroke and a single tiny #D95C3C circle as an ember accent.
 */
const MakersMark = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="opacity-90"
  >
    <path
      d="M24 4L40 24L24 44L8 24L24 4Z"
      stroke="#1C1B1A"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M24 4V44M8 24H40"
      stroke="#1C1B1A"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="24" cy="24" r="2.5" fill="#D95C3C" />
  </svg>
);
export function HomePage() {
  return (
    <main className="min-h-[100dvh] bg-[#F7F6F2] flex flex-col items-center justify-center p-6 sm:p-12 overflow-hidden selection:bg-[#D95C3C]/10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="flex flex-col items-center max-w-screen-md w-full"
      >
        {/* Visual Anchor */}
        <div className="mb-12">
          <MakersMark />
        </div>
        {/* Primary Invocation */}
        <h1 className="text-xl md:text-2xl text-[#1C1B1A] font-medium tracking-wide text-center mb-8">
          No sense in rushing to become.
        </h1>
        {/* Contemplative Body */}
        <p className="text-sm md:text-base text-[#3A3935] leading-[2.2] tracking-wide max-w-[36ch] mx-auto text-center font-light">
          There’s no race to becoming, because you’re already in the unfolding flow of being. 
          Each moment is a step, and each step is enough. 
          You’ve been on the path all along.
        </p>
      </motion.div>
    </main>
  );
}