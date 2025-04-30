import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Mail, MessageSquare, Music, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function SupportPage() {
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Support & Help Center</h1>
                <p className="max-w-[900px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get help with TaBee and find answers to your questions
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How accurate is TaBee's tab generation?</AccordionTrigger>
                    <AccordionContent>
                      TaBee's accuracy depends on the clarity of the audio source and the complexity of the music. For
                      clear recordings with distinct guitar parts, our accuracy is typically 85-95%. More complex pieces
                      or recordings with multiple overlapping instruments may require some manual adjustments in the
                      Tabs Studio.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>What music file formats does TaBee support?</AccordionTrigger>
                    <AccordionContent>
                      TaBee supports most common audio formats including MP3, WAV, FLAC, AAC, and OGG. For best results,
                      we recommend using uncompressed formats like WAV or FLAC when possible.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Can I export my tabs to other formats?</AccordionTrigger>
                    <AccordionContent>
                      Yes, TaBee allows you to export your tabs in various formats including PDF, Guitar Pro (.gp),
                      MIDI, and plain text. This makes it easy to share your tabs or continue working on them in other
                      software.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Does TaBee work with all types of guitars?</AccordionTrigger>
                    <AccordionContent>
                      TaBee works with standard 6-string guitars in standard tuning by default. However, you can adjust
                      the settings in the Tabs Studio to accommodate different tunings, 7-string guitars, bass guitars,
                      and other string instruments.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>Is there a limit to how many songs I can process?</AccordionTrigger>
                    <AccordionContent>
                      Free accounts can process up to 5 songs per month, with each song limited to 5 minutes in length.
                      Premium subscribers enjoy unlimited song processing with extended duration limits.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-6">
                    <AccordionTrigger>How do I record my own playing for tab generation?</AccordionTrigger>
                    <AccordionContent>
                      In the TaBee app, navigate to the "Record" tab and follow the on-screen instructions. For best
                      results, use a quiet environment and position your device's microphone close to your guitar. You
                      can also connect an audio interface for higher quality recordings.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {/* Support Image */}
                <div className="mt-8 rounded-xl overflow-hidden shadow-md">
                  <div className="relative h-64 w-full">
                    <Image
                      src="/placeholder.svg?height=256&width=500"
                      alt="TaBee Support Team"
                      width={500}
                      height={256}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-4 bg-gradient-to-r from-[#aa8bf8] to-purple-700 text-white">
                    <p className="text-center font-medium">
                      Our support team is ready to help you get the most out of TaBee
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#aa8bf8] to-purple-700 text-white">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email Support</h3>
                      <p className="text-sm text-gray-500">support@tabee.app</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#aa8bf8] to-purple-700 text-white">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone Support</h3>
                      <p className="text-sm text-gray-500">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#aa8bf8] to-purple-700 text-white">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Live Chat</h3>
                      <p className="text-sm text-gray-500">Available 9am-5pm EST, Monday-Friday</p>
                    </div>
                  </div>
                </div>

                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="Your email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input id="subject" placeholder="How can we help?" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Please describe your issue in detail"
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-[#aa8bf8] to-purple-700 hover:opacity-90 transition-opacity">
                    Send Message
                  </Button>
                </form>

                {/* Support Image */}
                <div className="mt-8 rounded-xl overflow-hidden shadow-md">
                  <div className="relative h-64 w-full">
                    <Image
                      src="/placeholder.svg?height=256&width=500"
                      alt="TaBee Customer Support"
                      width={500}
                      height={256}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-4 bg-gradient-to-r from-[#FFD700] to-amber-500 text-black">
                    <p className="text-center font-medium">We typically respond to all inquiries within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Tutorials Section */}
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Video Tutorials</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Learn how to use TaBee with our step-by-step video guides
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Tutorial 1 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="relative h-48 w-full bg-gray-100">
                  <Image
                    src="/placeholder.svg?height=192&width=350"
                    alt="Getting Started with TaBee"
                    width={350}
                    height={192}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-16 w-16 rounded-full bg-black/50 flex items-center justify-center">
                      <div className="h-0 w-0 border-y-8 border-y-transparent border-l-12 border-l-white ml-1"></div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-1">Getting Started with TaBee</h3>
                  <p className="text-sm text-gray-500">Learn the basics of using TaBee to create your first tab</p>
                </div>
              </div>

              {/* Tutorial 2 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="relative h-48 w-full bg-gray-100">
                  <Image
                    src="/placeholder.svg?height=192&width=350"
                    alt="Advanced Tab Editing"
                    width={350}
                    height={192}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-16 w-16 rounded-full bg-black/50 flex items-center justify-center">
                      <div className="h-0 w-0 border-y-8 border-y-transparent border-l-12 border-l-white ml-1"></div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-1">Advanced Tab Editing</h3>
                  <p className="text-sm text-gray-500">Master the Tabs Studio for perfect customization</p>
                </div>
              </div>

              {/* Tutorial 3 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="relative h-48 w-full bg-gray-100">
                  <Image
                    src="/placeholder.svg?height=192&width=350"
                    alt="Recording Your Guitar"
                    width={350}
                    height={192}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-16 w-16 rounded-full bg-black/50 flex items-center justify-center">
                      <div className="h-0 w-0 border-y-8 border-y-transparent border-l-12 border-l-white ml-1"></div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-1">Recording Your Guitar</h3>
                  <p className="text-sm text-gray-500">
                    Tips for getting the best recording quality for tab generation
                  </p>
                </div>
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
