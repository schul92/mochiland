import { Metadata } from 'next'
import { MapPin, Clock, Star, Sparkles } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export const metadata: Metadata = {
  title: 'MOCHILAND | Artisanal Hawaiian Mochi Donuts - Opening October 2025',
  description: 'Experience authentic Hawaiian mochi donuts at MOCHILAND Waikiki. Fresh daily artisanal donuts with unique island flavors. Opening October 2025 at 2142 Kalakaua Ave, Honolulu, HI 96815.',
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-yellow-50">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-pink-300/30 to-orange-300/30 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-yellow-300/30 to-pink-300/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-yellow-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 md:py-32">
          <div className="text-center space-y-8 animate-fade-up">
            {/* Opening Badge */}
            <div className="inline-flex items-center gap-2">
              <Badge variant="secondary" className="px-4 py-2 text-sm bg-gradient-to-r from-orange-100 to-pink-100 border-orange-200">
                <Star className="w-4 h-4 mr-2 text-orange-500" />
                Grand Opening October 2025
                <Star className="w-4 h-4 ml-2 text-orange-500" />
              </Badge>
            </div>

            {/* Logo */}
            <div className="space-y-4">
              <h1 className="font-dancing text-7xl md:text-8xl lg:text-9xl bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent font-bold drop-shadow-sm">
                MOCHILAND
              </h1>
              <p className="font-comfortaa text-2xl md:text-3xl text-gray-700">
                Artisanal Hawaiian Mochi Donuts
              </p>
            </div>

            {/* Coming Soon Text */}
            <div className="py-8">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                Coming Soon to Waikiki!
              </h2>
            </div>

            {/* Info Cards */}
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <Card className="group hover:shadow-xl transition-all duration-300 border-orange-100 bg-white/90 backdrop-blur">
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-pink-400 to-orange-400 rounded-lg group-hover:scale-110 transition-transform">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 text-left">
                      <CardTitle className="text-lg font-comfortaa">Visit Us In Waikiki</CardTitle>
                      <CardDescription className="mt-2 font-comfortaa">
                        2142 Kalakaua Ave<br />
                        Honolulu, HI 96815<br />
                        <span className="text-xs">(Heart of Waikiki)</span>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-cyan-100 bg-white/90 backdrop-blur">
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-lg group-hover:scale-110 transition-transform">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 text-left">
                      <CardTitle className="text-lg font-comfortaa">Opening Hours</CardTitle>
                      <CardDescription className="mt-2 font-comfortaa">
                        October 2025<br />
                        Daily: 7:00 AM - 9:00 PM<br />
                        <span className="text-xs font-semibold text-orange-600">Fresh Donuts All Day!</span>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>

            {/* Email Signup */}
            <Card className="max-w-md mx-auto border-gradient-to-r from-orange-200 to-pink-200 bg-white/95 backdrop-blur">
              <CardHeader>
                <CardTitle className="font-comfortaa">Be First to Know!</CardTitle>
                <CardDescription className="font-comfortaa">
                  Get exclusive opening day offers & updates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="flex gap-2" action="/api/subscribe" method="POST">
                  <Input 
                    type="email" 
                    placeholder="Enter your email"
                    className="font-comfortaa"
                    required
                  />
                  <Button type="submit" className="bg-gradient-to-r from-orange-400 to-pink-400 hover:from-orange-500 hover:to-pink-500 font-comfortaa">
                    Notify Me
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Donut Decoration */}
            <div className="flex justify-center gap-8 text-6xl py-8">
              <span className="animate-float hover:scale-125 transition-transform cursor-pointer">🍩</span>
              <span className="animate-float hover:scale-125 transition-transform cursor-pointer" style={{ animationDelay: '1s' }}>🍩</span>
              <span className="animate-float hover:scale-125 transition-transform cursor-pointer" style={{ animationDelay: '2s' }}>🍩</span>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-20 bg-gradient-to-t from-orange-50/50 to-transparent">
          <h2 className="font-dancing text-5xl md:text-6xl text-center bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent mb-12">
            Why MOCHILAND?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-pink-100 bg-white/90 backdrop-blur hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-6xl mb-4">🌺</div>
                <CardTitle className="font-comfortaa">Hawaiian Inspired</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Unique flavors inspired by the islands - Lilikoi, Haupia, and more!
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-yellow-100 bg-white/90 backdrop-blur hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-6xl mb-4">✨</div>
                <CardTitle className="font-comfortaa">Mochi Texture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Perfectly chewy mochi donuts made fresh daily with premium ingredients
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-cyan-100 bg-white/90 backdrop-blur hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-6xl mb-4">🌈</div>
                <CardTitle className="font-comfortaa">Instagram Worthy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Beautiful, colorful creations that taste as amazing as they look
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Special Flavors Preview */}
          <div className="mt-16 text-center">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Signature Flavors
            </Badge>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {['Lilikoi Glaze', 'Haupia Coconut', 'Guava Rose', 'Ube Purple Yam', 'Matcha Green Tea', 'Black Sesame'].map((flavor) => (
                <Badge key={flavor} variant="secondary" className="px-4 py-2 font-comfortaa">
                  {flavor}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-orange-100 to-pink-100 py-12 px-4 mt-20">
          <div className="container mx-auto text-center space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-700">
              <a href="https://instagram.com/mochilandusa" className="hover:text-orange-500 transition-colors font-comfortaa">
                Instagram
              </a>
              <span className="hidden sm:block">•</span>
              <a href="https://facebook.com/mochilandusa" className="hover:text-orange-500 transition-colors font-comfortaa">
                Facebook
              </a>
              <span className="hidden sm:block">•</span>
              <a href="tel:+18085551234" className="hover:text-orange-500 transition-colors font-comfortaa">
                (808) 555-1234
              </a>
            </div>
            <p className="text-sm text-gray-600 font-comfortaa">
              © 2025 MOCHILAND USA. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 font-comfortaa">
              2142 Kalakaua Ave, Honolulu, HI 96815
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}