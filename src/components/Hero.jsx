import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {

  
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-28 md:mt-5 lg:5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className="mt-28 md:mt-5 lg:5">
          <span className='inline-flex items-center gap-2 rounded-full border border-[#915EFF]/40 bg-[#915EFF]/10 px-4 py-1.5 text-[13px] sm:text-[14px] text-[#dfd9ff]'>
            <span className='w-2 h-2 rounded-full bg-green-400 animate-pulse' />
            Open to international & visa-sponsored roles
          </span>

          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Victor</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Senior Full-Stack Developer, <br className='sm:block hidden' />
            iGaming &amp; AI Engineer. I build provably-fair gaming, <br className='sm:block hidden' />
            real-time, and AI-powered systems end-to-end.
          </p>

          <div className='mt-6 flex flex-wrap gap-4'>
            <a
              href='#projects'
              className='rounded-xl bg-[#915EFF] px-6 py-3 text-[15px] font-bold text-white shadow-md shadow-primary transition-transform hover:scale-105'
            >
              View My Work
            </a>
            <a
              href='#contact'
              className='rounded-xl border border-[#915EFF]/60 px-6 py-3 text-[15px] font-bold text-white transition-colors hover:bg-[#915EFF]/15'
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      <ComputersCanvas />

      

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
