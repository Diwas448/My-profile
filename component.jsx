/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Kn46oD3kkhA
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white py-4 px-6 md:px-8 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link className="text-2xl font-bold animate-typing" href="#">
            Vibrant Color Palette
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            className="hover:text-gray-300 transition-colors duration-300 ease-in-out transform hover:-translate-y-1 animate-typing"
            href="#"
          >
            Home
          </Link>
          <Link
            className="hover:text-gray-300 transition-colors duration-300 ease-in-out transform hover:-translate-y-1 animate-typing"
            href="#"
          >
            Palettes
          </Link>
          <Link
            className="hover:text-gray-300 transition-colors duration-300 ease-in-out transform hover:-translate-y-1 animate-typing"
            href="#"
          >
            About
          </Link>
          <Link
            className="hover:text-gray-300 transition-colors duration-300 ease-in-out transform hover:-translate-y-1 animate-typing"
            href="#"
          >
            Contact
          </Link>
        </nav>
        <Button className="md:hidden animate-typing" size="icon" variant="ghost">
          <MenuIcon className="w-6 h-6" />
        </Button>
      </header>
      <main className="flex-1">
        <section className="bg-gradient-to-r from-indigo-500 to-pink-500 py-20 px-6 md:px-8 flex flex-col items-center justify-center">
          <div className="relative w-48 h-48 rounded-full bg-white shadow-lg animate-spin-slow">
            <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-gray-900 animate-typing">
              JD
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4 mt-8 animate-typing">Welcome to My Portfolio</h1>
          <p className="text-lg text-white mb-8 animate-typing delay-200">Explore my creative work and get in touch.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-typing delay-400" />
        </section>
        <section className="bg-white py-20 px-6 md:px-8 animate-typing">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 animate-typing delay-200">About Me</h2>
            <p className="text-lg mb-6 animate-typing delay-400">
              Hi, I'm John Doe, a passionate designer and developer. I create visually stunning and interactive websites
              that captivate users. My portfolio showcases a range of projects that demonstrate my expertise in design,
              front-end development, and user experience.
            </p>
            <p className="text-lg mb-6 animate-typing delay-600">
              I'm constantly exploring new technologies and design trends to stay ahead of the curve. My goal is to
              deliver exceptional digital experiences that not only look great but also provide seamless functionality
              and intuitive navigation.
            </p>
            <p className="text-lg mb-6 animate-typing delay-800">
              Whether you're looking to build a new website, revamp an existing one, or need help with a specific design
              or development task, I'm here to help. Let's collaborate and bring your vision to life.
            </p>
            <div className="flex justify-center animate-typing delay-1000">
              <Button
                className="bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-pink-500 hover:to-indigo-500 text-white animate-typing"
                size="lg"
                variant="primary"
              >
                View My Work
              </Button>
            </div>
          </div>
        </section>
        <section className="bg-white py-20 px-6 md:px-8 animate-typing">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 animate-typing delay-200">Contact Me</h2>
            <p className="text-lg mb-6 animate-typing delay-400">
              I'd love to hear from you! Whether you have a project in mind or just want to say hello, feel free to
              reach out.
            </p>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-typing delay-600">
              <div>
                <label className="block text-gray-700 font-bold mb-2 animate-typing" htmlFor="name">
                  Name
                </label>
                <Input id="name" placeholder="Enter your name" type="text" />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2 animate-typing" htmlFor="email">
                  Email
                </label>
                <Input id="email" placeholder="Enter your email" type="email" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-bold mb-2 animate-typing" htmlFor="message">
                  Message
                </label>
                <Textarea id="message" placeholder="Enter your message" />
              </div>
              <div className="md:col-span-2 flex justify-end animate-typing delay-800">
                <Button
                  className="bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-pink-500 hover:to-indigo-500 text-white animate-typing"
                  size="lg"
                  type="submit"
                  variant="primary"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </section>
        <section className="bg-white py-20 px-6 md:px-8 animate-typing">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 animate-typing delay-200">My Work</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 ease-in-out hover:scale-105 hover:rotate-2 animate-typing delay-400">
                <img alt="Project 1" className="w-full h-48 object-cover" src="/placeholder.svg" />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 animate-typing">Project 1</h3>
                  <p className="text-gray-500 animate-typing">A visually stunning website with interactive features.</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 ease-in-out hover:scale-105 hover:rotate-2 animate-typing delay-600">
                <img alt="Project 2" className="w-full h-48 object-cover" src="/placeholder.svg" />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 animate-typing">Project 2</h3>
                  <p className="text-gray-500 animate-typing">A responsive and user-friendly web application.</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 ease-in-out hover:scale-105 hover:rotate-2 animate-typing delay-800">
                <img alt="Project 3" className="w-full h-48 object-cover" src="/placeholder.svg" />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 animate-typing">Project 3</h3>
                  <p className="text-gray-500 animate-typing">A modern and visually appealing e-commerce website.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white py-20 px-6 md:px-8 animate-typing">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 animate-typing delay-200">Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 animate-typing delay-400">
                <div className="flex items-center mb-4">
                  <Avatar className="w-12 h-12 mr-4">
                    <AvatarImage alt="Client 1" src="/client1.jpg" />
                    <AvatarFallback>C1</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 animate-typing">Client 1</h3>
                    <p className="text-gray-500 animate-typing">CEO, Company A</p>
                  </div>
                </div>
                <p className="text-gray-700 animate-typing">
                  "John's work is exceptional. He delivered a stunning website that exceeded our expectations. Highly
                  recommended!"
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 animate-typing delay-600">
                <div className="flex items-center mb-4">
                  <Avatar className="w-12 h-12 mr-4">
                    <AvatarImage alt="Client 2" src="/client2.jpg" />
                    <AvatarFallback>C2</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 animate-typing">Client 2</h3>
                    <p className="text-gray-500 animate-typing">Marketing Manager, Company B</p>
                  </div>
                </div>
                <p className="text-gray-700 animate-typing">
                  "Working with John was a pleasure. He was responsive, creative, and delivered a website that perfectly
                  captured our brand."
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white py-20 px-6 md:px-8 animate-typing">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 animate-typing delay-200">Latest Blog Posts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 ease-in-out hover:scale-105 hover:rotate-2 animate-typing delay-400">
                <img alt="Blog Post 1" className="w-full h-48 object-cover" src="/placeholder.svg" />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 animate-typing">Designing for Accessibility</h3>
                  <p className="text-gray-500 animate-typing">
                    Explore best practices for creating inclusive digital experiences.
                  </p>
                  <Link className="text-indigo-500 font-bold animate-typing" href="#">
                    Read More
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 ease-in-out hover:scale-105 hover:rotate-2 animate-typing delay-600">
                <img alt="Blog Post 2" className="w-full h-48 object-cover" src="/placeholder.svg" />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 animate-typing">The Future of Web Development</h3>
                  <p className="text-gray-500 animate-typing">
                    Insights on emerging technologies and trends shaping the web.
                  </p>
                  <Link className="text-indigo-500 font-bold animate-typing" href="#">
                    Read More
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 ease-in-out hover:scale-105 hover:rotate-2 animate-typing delay-800">
                <img alt="Blog Post 3" className="w-full h-48 object-cover" src="/placeholder.svg" />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 animate-typing">Mastering CSS Grid</h3>
                  <p className="text-gray-500 animate-typing">
                    A comprehensive guide to leveraging the power of CSS Grid.
                  </p>
                  <Link className="text-indigo-500 font-bold animate-typing" href="#">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
      }
