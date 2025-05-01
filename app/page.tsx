"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Download, FileMusic, Guitar, Layers, Menu, Mic, Music, Play, Settings, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { MusicalNotes } from "@/components/musical-notes"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <MusicalNotes />
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex gap-2 items-center text-xl font-bold">
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#aa8bf8] to-purple-700 flex items-center justify-center">
              <Music className="h-5 w-5 text-white" />
            </div>
            <span>TaBee</span>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden flex items-center justify-center" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
          
            <Link href="/timeline" className="text-sm font-medium transition-colors hover:text-primary relative group">
              Timeline
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/team" className="text-sm font-medium transition-colors hover:text-primary relative group">
              Team
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/support" className="text-sm font-medium transition-colors hover:text-primary relative group">
              Support
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/pricing" className="text-sm font-medium transition-colors hover:text-primary relative group">
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <Button className="bg-gradient-to-r from-[#aa8bf8] to-purple-700 hover:opacity-90 transition-opacity">
              Download App
              <Download className="ml-2 h-4 w-4" />
            </Button>
          </nav>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <nav className="container flex flex-col space-y-4">
              <Link
                href="/timeline"
                className="text-sm font-medium transition-colors hover:text-primary px-2 py-1.5 rounded-md hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Timeline
              </Link>
              <Link
                href="/team"
                className="text-sm font-medium transition-colors hover:text-primary px-2 py-1.5 rounded-md hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Team
              </Link>
              <Link
                href="/support"
                className="text-sm font-medium transition-colors hover:text-primary px-2 py-1.5 rounded-md hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Support
              </Link>
              <Button className="bg-gradient-to-r from-[#aa8bf8] to-purple-700 hover:opacity-90 transition-opacity w-full justify-center">
                Download App
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </nav>
          </div>
        )}
      </header>
      <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-indigo-950 to-purple-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Turn Music into Tabs with TaBee
                  </h1>
                  <p className="max-w-[600px] text-gray-200 md:text-xl">
                    TaBee uses AI to convert music files into tabs for multiple instruments. Identify notes, separate instruments,
                    practice with our studio features, and create accurate tabs in seconds. Whether you're a beginner or a pro,
                    TaBee makes it easy to learn and practice.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#FFD700] to-amber-500 text-black hover:opacity-90 transition-opacity"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-black bg-white hover:bg-white/90">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-[350px] md:h-[350px] md:w-[350px] lg:h-[350px] lg:w-[350px]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative h-[350px] w-[350px] md:h-[350px] md:w-[350px] lg:h-[350px] lg:w-[350px] bg-gradient-to-br from-[#f6f2d0] to-[#fffae0] rounded-full flex items-center justify-center overflow-hidden">
                      <Image
                        src="app/page-logo.jpg"
                        alt="TaBee Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How TaBee Works</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our AI-powered process makes creating guitar tabs from music files simple and accurate.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#aa8bf8] to-purple-700 text-white">
                  <FileMusic className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">1. Upload Music</h3>
                <p className="text-sm text-gray-500 text-center">
                  Upload any song you want to TaBee. Our system accepts most audio formats including MP3, WAV, and FLAC.
                </p>
                <div className="relative w-full h-[500px] mt-2 rounded-lg overflow-hidden">
                  <Image
                    src="/app/generation.png"
                    alt="Upload Music Interface"
                    width={300}
                    height={500}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#aa8bf8] to-purple-700 text-white">
                  <Layers className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">2. AI Processing</h3>
                <p className="text-sm text-gray-500 text-center">
                  Our AI separates instruments, identifies notes and chords, and converts them into accurate instrument
                  tabs.
                </p>
                <div className="relative w-full h-[500px] mt-2 rounded-lg overflow-hidden">
                  <Image
                    src="/app/tabs.png"
                    alt="AI Processing Visualization"
                    width={300}
                    height={500}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#aa8bf8] to-purple-700 text-white">
                  <Guitar className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">3. Practice & Perfect</h3>
                <p className="text-sm text-gray-500 text-center">
                  Use the Tabs Studio to practice, edit, and perfect your tabs. Save and share them with other
                  musicians.
                </p>
                <div className="relative w-full h-[500px] mt-2 rounded-lg overflow-hidden">
                  <Image
                    src="/app/studio.png"
                    alt="Tabs Studio Interface"
                    width={300}
                    height={500}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#f6f2d0] to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Powerful Features</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  TaBee offers a comprehensive suite of tools to help musicians get acurate tabs and practice them.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-200 p-6 shadow-sm bg-white hover:shadow-md transition-shadow">
                <div className="rounded-full bg-gradient-to-r from-[#aa8bf8] to-purple-700 p-3">
                  <Layers className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Instrument Separation</h3>
                <p className="text-sm text-gray-500 text-center">
                  Isolate individual instruments from any music file with advanced AI technology.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-200 p-6 shadow-sm bg-white hover:shadow-md transition-shadow">
                <div className="rounded-full bg-gradient-to-r from-[#aa8bf8] to-purple-700 p-3">
                  <Music className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Chord Detection</h3>
                <p className="text-sm text-gray-500 text-center">
                  Accurately and easily identify chords played in your music.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-200 p-6 shadow-sm bg-white hover:shadow-md transition-shadow">
                <div className="rounded-full bg-gradient-to-r from-[#aa8bf8] to-purple-700 p-3">
                  <Guitar className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Tab Generation</h3>
                <p className="text-sm text-gray-500 text-center">
                  Convert detected notes into easy-to-read instrument tabs automatically.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-200 p-6 shadow-sm bg-white hover:shadow-md transition-shadow">
                <div className="rounded-full bg-gradient-to-r from-[#aa8bf8] to-purple-700 p-3">
                  <Mic className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Tab Recording</h3>
                <p className="text-sm text-gray-500 text-center">
                  Record your instrument while playing and instantly convert it to tabs.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-200 p-6 shadow-sm bg-white hover:shadow-md transition-shadow">
                <div className="rounded-full bg-gradient-to-r from-[#aa8bf8] to-purple-700 p-3">
                  <Settings className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Tabs Studio</h3>
                <p className="text-sm text-gray-500 text-center">
                  Edit, customize, and perfect your tabs in our comprehensive studio environment.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-200 p-6 shadow-sm bg-white hover:shadow-md transition-shadow">
                <div className="rounded-full bg-gradient-to-r from-[#aa8bf8] to-purple-700 p-3">
                  <FileMusic className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Multi-Instrument Support</h3>
                <p className="text-sm text-gray-500 text-center">
                  Starting with string instruments, we plan to expand to other instrument types soon.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* User Testimonials Section */}
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Our Users Say</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Musicians of all skill levels are loving TaBee
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="relative h-16 w-16 mr-4 overflow-hidden rounded-full">
                    <Image
                      src="/app/logo.jpg"
                      alt="User Avatar"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Michael Torres</h4>
                    <p className="text-sm text-gray-500">Guitar Teacher</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "TaBee has revolutionized how I teach my students. Being able to quickly tab out songs they want to
                  learn has made lessons much more engaging."
                </p>
                <div className="flex mt-4">
                  <div className="text-[#FFD700]">★★★★★</div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="relative h-16 w-16 mr-4 overflow-hidden rounded-full">
                    <Image
                      src="/app/logo.jpg"
                      alt="User Avatar"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Sophia Chen</h4>
                    <p className="text-sm text-gray-500">Hobbyist Guitarist</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "As a beginner, finding accurate tabs was always a challenge. TaBee makes it so easy to learn my
                  favorite songs without the frustration."
                </p>
                <div className="flex mt-4">
                  <div className="text-[#FFD700]">★★★★★</div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="relative h-16 w-16 mr-4 overflow-hidden rounded-full">
                    <Image
                      src="/app/logo.jpg"
                      alt="User Avatar"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">James Wilson</h4>
                    <p className="text-sm text-gray-500">Professional Musician</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "The accuracy of TaBee's note detection is impressive. I use it to quickly tab out ideas during
                  songwriting sessions. Huge time saver!"
                </p>
                <div className="flex mt-4">
                  <div className="text-[#FFD700]">★★★★★</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Real-world Usage Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">TaBee in the Wild</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See how musicians are using TaBee in real-world scenarios
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Usage Scenario 1 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="relative h-64 w-full">
                  <Image
                    src="/real-world/home.jpg"
                    alt="Musician using TaBee at home"
                    width={500}
                    height={256}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Home Practice Sessions</h3>
                  <p className="text-gray-600">
                    Musicians can use TaBee to learn new songs at their own pace, with the ability to slow down, or loop
                    sections and focus on specific parts of a song.
                  </p>
                </div>
              </div>

              {/* Usage Scenario 2 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="relative h-64 w-full">
                  <Image
                    src="/real-world/studio.jpg"
                    alt="Band using TaBee in studio"
                    width={500}
                    height={256}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Studio Collaboration</h3>
                  <p className="text-gray-600">
                    Bands and recording artists can use TaBee to quickly document and share musical ideas during songwriting
                    and recording sessions.
                  </p>
                </div>
              </div>

              {/* Usage Scenario 3 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="relative h-64 w-full">
                  <Image
                    src="/real-world/lesson.jpg"
                    alt="Teacher using TaBee with student"
                    width={500}
                    height={256}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Music Education</h3>
                  <p className="text-gray-600">
                    Music Teachers can use TaBee to create custom learning materials for students, making lessons more engaging
                    and personalized.
                  </p>
                </div>
              </div>

              {/* Usage Scenario 4 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="relative h-64 w-full">
                  <Image
                    src="/real-world/live.jpg"
                    alt="Musician performing with TaBee"
                    width={500}
                    height={256}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Live Performance</h3>
                  <p className="text-gray-600">
                    Performers/Bands can use TaBee to quickly learn cover songs and create setlists with accurate tabs for
                    rehearsals and live shows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-indigo-950 to-purple-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Your Music?
                </h2>
                <p className="max-w-[900px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Download TaBee today and start creating perfect guitar tabs from your favorite songs.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#FFD700] to-amber-500 text-black hover:opacity-90 transition-opacity"
                >
                  Download Now
                  <Download className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-black bg-white hover:bg-white/90">
                  Watch Demo
                  <Play className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6 md:py-8">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          <div className="flex gap-2 items-center text-xl font-bold">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#aa8bf8] to-purple-700 flex items-center justify-center">
              <Music className="h-5 w-5 text-white" />
            </div>
            <span>TaBee</span>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              About
            </Link>
          </nav>
          <div className="flex-1 text-center text-xs text-muted-foreground md:text-right">
            © {new Date().getFullYear()} TaBee. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
