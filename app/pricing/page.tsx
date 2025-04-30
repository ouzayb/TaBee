import Link from "next/link"
import { ArrowLeft, Check, Download, HelpCircle, Music, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MusicalNotes } from "@/components/musical-notes"

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MusicalNotes />
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
                  Choose Your Perfect Plan
                </h1>
                <p className="max-w-[900px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find the right TaBee plan for your musical journey
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {/* Free Plan */}
              <div className="flex flex-col overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
                <div className="flex flex-col items-center justify-center space-y-2 border-b bg-gray-50 p-6">
                  <h3 className="text-xl font-bold">Free</h3>
                  <div className="text-center">
                    <span className="text-3xl font-bold">$0</span>
                    <span className="text-sm text-gray-500">/month</span>
                  </div>
                  <p className="text-center text-sm text-gray-500">Perfect for beginners</p>
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span className="text-sm">5 songs per month</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span className="text-sm">Basic tab generation</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span className="text-sm">Standard instrument separation</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span className="text-sm">Export as plain text</span>
                    </li>
                    <li className="flex items-center">
                      <X className="mr-2 h-4 w-4 text-gray-300" />
                      <span className="text-sm text-gray-500">Advanced editing tools</span>
                    </li>
                    <li className="flex items-center">
                      <X className="mr-2 h-4 w-4 text-gray-300" />
                      <span className="text-sm text-gray-500">Tab recording</span>
                    </li>
                    <li className="flex items-center">
                      <X className="mr-2 h-4 w-4 text-gray-300" />
                      <span className="text-sm text-gray-500">Priority support</span>
                    </li>
                  </ul>
                  <Button className="mt-6 w-full bg-gray-200 text-gray-800 hover:bg-gray-300">
                    Get Started
                    <Download className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Basic Plan */}
              <div className="flex flex-col overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
                <div className="flex flex-col items-center justify-center space-y-2 border-b bg-[#f6f2d0] p-6">
                  <h3 className="text-xl font-bold">Basic</h3>
                  <div className="text-center">
                    <span className="text-3xl font-bold">$9.99</span>
                    <span className="text-sm text-gray-500">/month</span>
                  </div>
                  <p className="text-center text-sm text-gray-500">For casual musicians</p>
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span className="text-sm">20 songs per month</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span className="text-sm">Enhanced tab generation</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span className="text-sm">Improved instrument separation</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span className="text-sm">Export as PDF and text</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span className="text-sm">Basic editing tools</span>
                    </li>
                    <li className="flex items-center">
                      <X className="mr-2 h-4 w-4 text-gray-300" />
                      <span className="text-sm text-gray-500">Tab recording</span>
                    </li>
                    <li className="flex items-center">
                      <X className="mr-2 h-4 w-4 text-gray-300" />
                      <span className="text-sm text-gray-500">Priority support</span>
                    </li>
                  </ul>
                  <Button className="mt-6 w-full bg-gradient-to-r from-[#aa8bf8] to-purple-700 hover:opacity-90 transition-opacity">
                    Subscribe
                  </Button>
                </div>
              </div>

              {/* Pro Plan - Highlighted */}
              <div className="flex flex-col overflow-hidden rounded-lg border-2 border-[#FFD700] bg-white shadow-md transition-all hover:shadow-lg relative">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 transform">
                  <div className="bg-gradient-to-r from-[#FFD700] to-amber-500 px-3 py-1 text-xs font-bold text-black rounded-full">
                    POPULAR
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2 border-b bg-gradient-to-r from-[#FFD700]/20 to-amber-500/20 p-6">
                  <h3 className="text-xl font-bold">Pro</h3>
                  <div className="text-center">
                    <span className="text-3xl font-bold">$19.99</span>
                    <span className="text-sm text-gray-500">/month</span>
                  </div>
                  <p className="text-center text-sm text-gray-500">For serious musicians</p>
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span className="text-sm">Unlimited songs</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span className="text-sm">Advanced tab generation</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span className="text-sm">High-quality instrument separation</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span className="text-sm">Export in all formats</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span className="text-sm">Full Tabs Studio access</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span className="text-sm">Tab recording</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span className="text-sm">Email support</span>
                    </li>
                  </ul>
                  <Button className="mt-6 w-full bg-gradient-to-r from-[#FFD700] to-amber-500 text-black hover:opacity-90 transition-opacity">
                    Subscribe
                  </Button>
                </div>
              </div>

              {/* Enterprise Plan */}
              <div className="flex flex-col overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
                <div className="flex flex-col items-center justify-center space-y-2 border-b bg-gradient-to-r from-indigo-950/10 to-purple-900/10 p-6">
                  <h3 className="text-xl font-bold">Enterprise</h3>
                  <div className="text-center">
                    <span className="text-3xl font-bold">$49.99</span>
                    <span className="text-sm text-gray-500">/month</span>
                  </div>
                  <p className="text-center text-sm text-gray-500">For schools & studios</p>
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span className="text-sm">Unlimited songs</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span className="text-sm">Premium tab generation</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span className="text-sm">Studio-quality instrument separation</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span className="text-sm">Export in all formats</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span className="text-sm">Full Tabs Studio access</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span className="text-sm">Multi-user collaboration</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span className="text-sm">Priority phone & email support</span>
                    </li>
                  </ul>
                  <Button className="mt-6 w-full bg-gradient-to-r from-indigo-950 to-purple-900 hover:opacity-90 transition-opacity">
                    Contact Sales
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Feature Comparison</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Compare all features across our different plans
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="py-4 px-6 text-left font-medium">Feature</th>
                    <th className="py-4 px-6 text-center font-medium">Free</th>
                    <th className="py-4 px-6 text-center font-medium">Basic</th>
                    <th className="py-4 px-6 text-center font-medium bg-gradient-to-r from-[#FFD700]/10 to-amber-500/10">
                      Pro
                    </th>
                    <th className="py-4 px-6 text-center font-medium">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">Songs per month</td>
                    <td className="py-4 px-6 text-center">5</td>
                    <td className="py-4 px-6 text-center">20</td>
                    <td className="py-4 px-6 text-center bg-gradient-to-r from-[#FFD700]/10 to-amber-500/10">
                      Unlimited
                    </td>
                    <td className="py-4 px-6 text-center">Unlimited</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">Song duration limit</td>
                    <td className="py-4 px-6 text-center">5 minutes</td>
                    <td className="py-4 px-6 text-center">10 minutes</td>
                    <td className="py-4 px-6 text-center bg-gradient-to-r from-[#FFD700]/10 to-amber-500/10">
                      20 minutes
                    </td>
                    <td className="py-4 px-6 text-center">Unlimited</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">Instrument separation quality</td>
                    <td className="py-4 px-6 text-center">Standard</td>
                    <td className="py-4 px-6 text-center">Improved</td>
                    <td className="py-4 px-6 text-center bg-gradient-to-r from-[#FFD700]/10 to-amber-500/10">High</td>
                    <td className="py-4 px-6 text-center">Studio</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">Tab editing</td>
                    <td className="py-4 px-6 text-center">Basic</td>
                    <td className="py-4 px-6 text-center">Standard</td>
                    <td className="py-4 px-6 text-center bg-gradient-to-r from-[#FFD700]/10 to-amber-500/10">
                      Advanced
                    </td>
                    <td className="py-4 px-6 text-center">Premium</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">Export formats</td>
                    <td className="py-4 px-6 text-center">Text</td>
                    <td className="py-4 px-6 text-center">Text, PDF</td>
                    <td className="py-4 px-6 text-center bg-gradient-to-r from-[#FFD700]/10 to-amber-500/10">
                      Text, PDF, GP, MIDI
                    </td>
                    <td className="py-4 px-6 text-center">All formats</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">Tab recording</td>
                    <td className="py-4 px-6 text-center">
                      <X className="mx-auto h-5 w-5 text-gray-300" />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <X className="mx-auto h-5 w-5 text-gray-300" />
                    </td>
                    <td className="py-4 px-6 text-center bg-gradient-to-r from-[#FFD700]/10 to-amber-500/10">
                      <Check className="mx-auto h-5 w-5 text-green-500" />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <Check className="mx-auto h-5 w-5 text-green-500" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">Collaboration</td>
                    <td className="py-4 px-6 text-center">
                      <X className="mx-auto h-5 w-5 text-gray-300" />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <X className="mx-auto h-5 w-5 text-gray-300" />
                    </td>
                    <td className="py-4 px-6 text-center bg-gradient-to-r from-[#FFD700]/10 to-amber-500/10">
                      <Check className="mx-auto h-5 w-5 text-green-500" />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <Check className="mx-auto h-5 w-5 text-green-500" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">Multi-user accounts</td>
                    <td className="py-4 px-6 text-center">
                      <X className="mx-auto h-5 w-5 text-gray-300" />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <X className="mx-auto h-5 w-5 text-gray-300" />
                    </td>
                    <td className="py-4 px-6 text-center bg-gradient-to-r from-[#FFD700]/10 to-amber-500/10">
                      <X className="mx-auto h-5 w-5 text-gray-300" />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <Check className="mx-auto h-5 w-5 text-green-500" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">Support</td>
                    <td className="py-4 px-6 text-center">Community</td>
                    <td className="py-4 px-6 text-center">Email</td>
                    <td className="py-4 px-6 text-center bg-gradient-to-r from-[#FFD700]/10 to-amber-500/10">
                      Priority Email
                    </td>
                    <td className="py-4 px-6 text-center">Phone & Email</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to know about our pricing plans
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Can I switch between plans?</AccordionTrigger>
                  <AccordionContent>
                    Yes, you can upgrade or downgrade your plan at any time. When upgrading, the new features will be
                    available immediately. When downgrading, the changes will take effect at the start of your next
                    billing cycle.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is there a free trial for paid plans?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we offer a 7-day free trial for our Basic and Pro plans. You can try out all the features
                    before committing to a subscription. No credit card is required for the trial.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>What happens if I exceed my monthly song limit?</AccordionTrigger>
                  <AccordionContent>
                    If you reach your monthly song limit on the Free or Basic plan, you'll need to wait until the next
                    billing cycle or upgrade to a higher plan to continue processing songs. Unused song credits do not
                    roll over to the next month.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Do you offer discounts for annual billing?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we offer a 20% discount when you choose annual billing for any of our paid plans. This option
                    is available during checkout or from your account settings page.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                  <AccordionContent>
                    We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and Apple
                    Pay. For Enterprise plans, we also accept bank transfers and purchase orders.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>Can I cancel my subscription at any time?</AccordionTrigger>
                  <AccordionContent>
                    Yes, you can cancel your subscription at any time from your account settings. Your subscription will
                    remain active until the end of your current billing period, after which it will not renew.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-r from-indigo-950 to-purple-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Your Music?
                </h2>
                <p className="max-w-[900px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Start with our free plan or choose the option that best fits your needs
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#FFD700] to-amber-500 text-black hover:opacity-90 transition-opacity"
                >
                  Get Started Free
                  <Download className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Contact Sales
                  <HelpCircle className="ml-2 h-4 w-4" />
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
