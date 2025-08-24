import AnimatedText from '@/components/AnimatedText'
import TropicalElements from '@/components/TropicalElements'
import { MapPin } from 'lucide-react'

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Tropical background elements */}
      <TropicalElements />
      
      {/* Main content */}
      <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto">
        {/* Logo/Brand Name */}
        <div className="space-y-4">
          <h1 className="font-dancing text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-gradient-hawaiian animate-wave">
            MOCHILAND
          </h1>
          <p className="font-comfortaa text-lg sm:text-xl md:text-2xl text-sky-700 opacity-90">
            Artisanal Hawaiian Donuts
          </p>
        </div>
        
        {/* Animated Coming Soon */}
        <div className="py-8">
          <AnimatedText />
        </div>
        
        {/* Opening Information */}
        <div className="space-y-6">
          <div className="inline-block bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-6 hawaiian-shadow">
            <p className="font-comfortaa text-2xl sm:text-3xl text-coral-600 mb-2">
              Opening October 2024
            </p>
            <p className="font-comfortaa text-lg text-sky-700 animate-pulse-slow">
              Get ready for a taste of paradise! 🌺
            </p>
          </div>
          
          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-sky-700 hover:text-sky-800 transition-colors">
            <MapPin className="w-5 h-5" />
            <address className="font-comfortaa not-italic text-lg">
              Hawaii Location
            </address>
          </div>
        </div>
        
        {/* Donut decoration */}
        <div className="flex justify-center gap-4 text-4xl animate-float">
          <span className="opacity-60">🍩</span>
          <span className="opacity-80">🍩</span>
          <span className="opacity-60">🍩</span>
        </div>
      </div>
      
      {/* Footer wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1440 200" 
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path 
            fill="rgba(56, 189, 248, 0.1)" 
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
          <path 
            fill="rgba(34, 211, 238, 0.1)" 
            d="M0,160L48,144C96,128,192,96,288,96C384,96,480,128,576,144C672,160,768,160,864,144C960,128,1056,96,1152,96C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </div>
  )
}