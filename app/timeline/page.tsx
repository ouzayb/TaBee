import Link from "next/link"
import { ArrowLeft, Calendar, Check, Clock, Code, Download, FileText, Lightbulb, Music, Rocket } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function TimelinePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2 items-center text-xl font-bold">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#aa8bf8] to-purple-700 flex items-center justify-center">
              <Music className="h-5 w-5 text-white" />
            </div>
            <span>TaBee</span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <Link href="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-indigo-950 to-purple-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  TaBee Development Timeline
                </h1>
                <p className="max-w-[900px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Follow our journey from concept to creation and beyond
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <div className="space-y-16">
                {/* Timeline Item */}
                <div className="relative pl-8 sm:pl-16">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#aa8bf8] to-purple-700 text-white">
                      <Lightbulb className="h-5 w-5" />
                    </div>
                    <div className="absolute left-5 top-10 sm:left-8 h-full w-[1px] bg-gradient-to-b from-[#aa8bf8] to-transparent"></div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold">Concept & Ideation</h3>
                      <time className="text-sm text-gray-500 flex items-center gap-1 mb-2">
                        <Calendar className="h-3 w-3" /> January 2023
                      </time>
                      <p className="text-gray-600">
                        The idea for TaBee was born when our founder, a guitarist and software engineer, struggled to
                        learn complex songs by ear. We envisioned an AI-powered solution that could automatically
                        convert music into accurate guitar tabs.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Timeline Item */}
                <div className="relative pl-8 sm:pl-16">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#aa8bf8] to-purple-700 text-white">
                      <Code className="h-5 w-5" />
                    </div>
                    <div className="absolute left-5 top-10 sm:left-8 h-full w-[1px] bg-gradient-to-b from-[#aa8bf8] to-transparent"></div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold">Development Begins</h3>
                      <time className="text-sm text-gray-500 flex items-center gap-1 mb-2">
                        <Calendar className="h-3 w-3" /> March 2023
                      </time>
                      <p className="text-gray-600">
                        Our team of engineers and musicians started building the first prototype of TaBee. We focused on
                        developing the core AI algorithms for instrument separation and note detection.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Timeline Item */}
                <div className="relative pl-8 sm:pl-16">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#aa8bf8] to-purple-700 text-white">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div className="absolute left-5 top-10 sm:left-8 h-full w-[1px] bg-gradient-to-b from-[#aa8bf8] to-transparent"></div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold">Beta Testing</h3>
                      <time className="text-sm text-gray-500 flex items-center gap-1 mb-2">
                        <Calendar className="h-3 w-3" /> August 2023
                      </time>
                      <p className="text-gray-600">
                        We launched our closed beta program with 100 musicians of varying skill levels. Their feedback
                        was invaluable in refining our tab generation algorithms and improving the user interface.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Timeline Item */}
                <div className="relative pl-8 sm:pl-16">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#aa8bf8] to-purple-700 text-white">
                      <Rocket className="h-5 w-5" />
                    </div>
                    <div className="absolute left-5 top-10 sm:left-8 h-full w-[1px] bg-gradient-to-b from-[#aa8bf8] to-transparent"></div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold">Official Launch</h3>
                      <time className="text-sm text-gray-500 flex items-center gap-1 mb-2">
                        <Calendar className="h-3 w-3" /> January 2024
                      </time>
                      <p className="text-gray-600">
                        TaBee was officially launched to the public with support for guitar tab generation. The app was
                        downloaded over 10,000 times in the first month, exceeding our expectations.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Timeline Item */}
                <div className="relative pl-8 sm:pl-16">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#aa8bf8] to-purple-700 text-white">
                      <Download className="h-5 w-5" />
                    </div>
                    <div className="absolute left-5 top-10 sm:left-8 h-full w-[1px] bg-gradient-to-b from-[#aa8bf8] to-transparent"></div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold">Tabs Studio Update</h3>
                      <time className="text-sm text-gray-500 flex items-center gap-1 mb-2">
                        <Calendar className="h-3 w-3" /> April 2024
                      </time>
                      <p className="text-gray-600">
                        We released a major update introducing the Tabs Studio feature, allowing users to edit,
                        practice, and customize their tabs with different instruments and tempos.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Timeline Item - Current */}
                <div className="relative pl-8 sm:pl-16">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#FFD700] to-amber-500 text-black">
                      <Check className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold">Present Day</h3>
                      <time className="text-sm text-gray-500 flex items-center gap-1 mb-2">
                        <Clock className="h-3 w-3" /> Now
                      </time>
                      <p className="text-gray-600">
                        TaBee continues to grow with over 50,000 active users. We're constantly improving our AI
                        algorithms and adding new features based on user feedback.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 text-center">
                <h3 className="text-2xl font-bold mb-4">What's Next for TaBee?</h3>
                <p className="text-gray-600 mb-8">
                  We're working on expanding our instrument support beyond guitar, improving our AI accuracy, and
                  developing collaborative features for musicians to share and work on tabs together.
                </p>
                <Button className="bg-gradient-to-r from-[#aa8bf8] to-purple-700 hover:opacity-90 transition-opacity">
                  Join Our Journey
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
          <div className="flex-1 text-center text-xs text-muted-foreground md:text-right">
            © {new Date().getFullYear()} TaBee. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
