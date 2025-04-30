import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Github, Linkedin, Mail, Music, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function TeamPage() {
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Our Team</h1>
                <p className="max-w-[900px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The passionate musicians and engineers behind TaBee
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Team Member */}
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-md transition-shadow hover:shadow-lg">
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 transform rounded-full bg-gradient-to-r from-[#aa8bf8] to-purple-700 opacity-20"></div>
                <div className="mb-4 flex items-center gap-4">
                  <div className="h-16 w-16 overflow-hidden rounded-full">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="Jamie Davis"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Jamie Davis</h3>
                    <p className="text-sm text-gray-500">Founder & CEO</p>
                  </div>
                </div>
                <p className="mb-4 text-gray-600">
                  Guitarist with 15+ years of experience and software engineer. Jamie combined his passion for music and
                  technology to create TaBee.
                </p>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                </div>
              </div>

              {/* Team Member */}
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-md transition-shadow hover:shadow-lg">
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 transform rounded-full bg-gradient-to-r from-[#aa8bf8] to-purple-700 opacity-20"></div>
                <div className="mb-4 flex items-center gap-4">
                  <div className="h-16 w-16 overflow-hidden rounded-full">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="Sarah Lee"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Sarah Lee</h3>
                    <p className="text-sm text-gray-500">CTO</p>
                  </div>
                </div>
                <p className="mb-4 text-gray-600">
                  AI specialist with a background in audio processing. Sarah leads our engineering team and oversees the
                  development of our core algorithms.
                </p>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                </div>
              </div>

              {/* Team Member */}
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-md transition-shadow hover:shadow-lg">
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 transform rounded-full bg-gradient-to-r from-[#aa8bf8] to-purple-700 opacity-20"></div>
                <div className="mb-4 flex items-center gap-4">
                  <div className="h-16 w-16 overflow-hidden rounded-full">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="Miguel Rodriguez"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Miguel Rodriguez</h3>
                    <p className="text-sm text-gray-500">Lead Developer</p>
                  </div>
                </div>
                <p className="mb-4 text-gray-600">
                  Full-stack developer and bassist. Miguel is responsible for building our user interface and ensuring a
                  seamless experience across all devices.
                </p>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                </div>
              </div>

              {/* Team Member */}
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-md transition-shadow hover:shadow-lg">
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 transform rounded-full bg-gradient-to-r from-[#aa8bf8] to-purple-700 opacity-20"></div>
                <div className="mb-4 flex items-center gap-4">
                  <div className="h-16 w-16 overflow-hidden rounded-full">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="Alex Kim"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Alex Kim</h3>
                    <p className="text-sm text-gray-500">Music Director</p>
                  </div>
                </div>
                <p className="mb-4 text-gray-600">
                  Professional guitarist and music educator. Alex ensures our tab generation is accurate and musically
                  sensible across different genres and playing styles.
                </p>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                </div>
              </div>

              {/* Team Member */}
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-md transition-shadow hover:shadow-lg">
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 transform rounded-full bg-gradient-to-r from-[#aa8bf8] to-purple-700 opacity-20"></div>
                <div className="mb-4 flex items-center gap-4">
                  <div className="h-16 w-16 overflow-hidden rounded-full">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="Emma Patel"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Emma Patel</h3>
                    <p className="text-sm text-gray-500">UX Designer</p>
                  </div>
                </div>
                <p className="mb-4 text-gray-600">
                  Designer with a focus on creating intuitive user experiences. Emma ensures TaBee is accessible and
                  enjoyable for musicians of all skill levels.
                </p>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                </div>
              </div>

              {/* Team Member */}
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-md transition-shadow hover:shadow-lg">
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 transform rounded-full bg-gradient-to-r from-[#aa8bf8] to-purple-700 opacity-20"></div>
                <div className="mb-4 flex items-center gap-4">
                  <div className="h-16 w-16 overflow-hidden rounded-full">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="Tom Jackson"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Tom Jackson</h3>
                    <p className="text-sm text-gray-500">Community Manager</p>
                  </div>
                </div>
                <p className="mb-4 text-gray-600">
                  Musician and community builder. Tom manages our growing community of users, collects feedback, and
                  helps shape the future of TaBee.
                </p>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Team Photo */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold mb-6">Our Team at Work</h3>
              <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg mb-8">
                <Image
                  src="/placeholder.svg?height=400&width=1200"
                  alt="TaBee Team Working Together"
                  width={1200}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals who are passionate about music and technology. Check out
                our current openings or send us your resume.
              </p>
              <Button className="bg-gradient-to-r from-[#aa8bf8] to-purple-700 hover:opacity-90 transition-opacity">
                View Open Positions
              </Button>
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
