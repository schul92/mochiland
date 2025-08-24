'use client'

import { motion } from 'framer-motion'

export default function TropicalElements() {
  return (
    <>
      {/* Floating Hibiscus Flowers */}
      <motion.div
        className="absolute top-10 left-10 text-6xl opacity-20"
        animate={{ 
          rotate: [0, 10, -10, 0],
          y: [0, -20, 0],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        🌺
      </motion.div>
      
      <motion.div
        className="absolute top-20 right-20 text-5xl opacity-20"
        animate={{ 
          rotate: [0, -10, 10, 0],
          y: [0, -15, 0],
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        🌺
      </motion.div>
      
      {/* Palm Trees */}
      <motion.div
        className="absolute bottom-10 left-5 text-7xl opacity-15"
        animate={{ 
          rotate: [-5, 5, -5],
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        🌴
      </motion.div>
      
      <motion.div
        className="absolute bottom-10 right-5 text-8xl opacity-15"
        animate={{ 
          rotate: [5, -5, 5],
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      >
        🌴
      </motion.div>
      
      {/* Pineapple */}
      <motion.div
        className="absolute top-1/3 left-20 text-4xl opacity-15"
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 10, 0],
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        🍍
      </motion.div>
      
      {/* Ocean Wave */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyan-200/20 to-transparent"
        animate={{ 
          x: [0, 50, 0],
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Floating Donuts */}
      <motion.div
        className="absolute top-1/4 right-1/4 text-5xl opacity-20"
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 360],
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        🍩
      </motion.div>
      
      <motion.div
        className="absolute bottom-1/3 left-1/4 text-4xl opacity-15"
        animate={{ 
          y: [0, -25, 0],
          rotate: [0, -360],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        🍩
      </motion.div>
    </>
  )
}