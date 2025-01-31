/* eslint-disable react/no-unescaped-entities */
"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Headphones, Code, Calculator, Database, Users, Shield, ArrowRight, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"
import localFont from "next/font/local"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"

gsap.registerPlugin(ScrollTrigger)

const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
})

const FloatingElement = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{
      y: [0, -15, 0],
      rotate: [0, -2, 0, 2, 0],
    }}
    transition={{
      duration: 6,
      delay,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    }}
  >
    {children}
  </motion.div>
)

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}

const ServiceCard = ({ icon, title, description, index }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative p-8 bg-coral-400/5 rounded-lg border-2 border-terra-600/10 transition-all duration-500"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        scale: 1.02,
        backgroundColor: "rgba(255, 123, 95, 0.1)",
      }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-coral-400/20 to-transparent rounded-lg opacity-0 transition-opacity duration-500"
        animate={{ opacity: isHovered ? 1 : 0 }}
      />
      <div className="relative z-10">
        <motion.div
          className="text-coral-400 mb-6 p-4 bg-terra-600/10 rounded-full inline-block"
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.div>
        <h3 className={cn("text-xl font-bold mb-3 text-terra-600", satoshi.className)}>{title}</h3>
        <p className="text-terra-600/80 mb-4">{description}</p>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
          transition={{ duration: 0.3 }}
          className="flex items-center text-coral-400 font-semibold"
        >
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </motion.div>
      </div>
    </motion.div>
  )
}

// const CircularText = ({ radius = 100 }) => {
//   const [rotation, setRotation] = useState(0)
//   const characters = "BUSINESS PROCESS OUTSOURCING • ".split("")

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setRotation((prev) => (prev + 1) % 360)
//     }, 50)
//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
//       {characters.map((char, i) => {
//         const angle = (i * 360) / characters.length + rotation
//         const radian = (angle * Math.PI) / 180
//         const x = radius * Math.cos(radian)
//         const y = radius * Math.sin(radian)

//         return (
//           <motion.div
//             key={i}
//             className={cn("absolute text-terra-600/60 text-sm font-bold tracking-wider", satoshi.className)}
//             style={{
//               transform: `translate(${x}px, ${y}px) rotate(${angle + 90}deg)`,
//               transformOrigin: "0 0",
//             }}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: i * 0.05 }}
//           >
//             {char}
//           </motion.div>
//         )
//       })}
//     </div>
//   )
// }

const BackgroundPattern = () => (
  <div className="fixed inset-0 z-0 opacity-20">
    <div className="absolute inset-0 bg-terra-600/20 bg-[radial-gradient(circle_at_2px_2px,_var(--tw-bg-opacity)_1px,transparent_0)] bg-[size:32px_32px]" />
  </div>
)

const ParallaxImage = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <motion.div ref={ref} style={{ y }} className={cn("relative", className)}>
      <Image src={src || "/placeholder.svg"} alt={alt} width={500} height={500} className="w-full h-auto" />
    </motion.div>
  )
}

const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imageContainerRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (
      !containerRef.current ||
      !videoRef.current ||
      !overlayRef.current ||
      !contentRef.current ||
      !imageContainerRef.current
    )
      return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
      },
    })

    tl.fromTo(imageContainerRef.current, { scale: 1, y: 0 }, { scale: 5, y: -50, duration: 1 })
      .to(imageContainerRef.current, { opacity: 0.5, duration: 0.5 }, ">-0.5")
      .fromTo(videoRef.current, { scale: 1.2, opacity: 0 }, { scale: 1, opacity: 1, duration: 1 }, ">-0.5")
      .to(overlayRef.current, { opacity: 0.6, duration: 0.5 }, "<")
      .to(contentRef.current, { y: -30, opacity: 0, duration: 0.5 }, "<")
  }, [])

  const handleStartJourney = () => {
    if (containerRef.current) {
      const containerHeight = containerRef.current.offsetHeight
      window.scrollTo({
        top: containerHeight,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className={cn("bg-coral-50 text-terra-600 overflow-hidden", satoshi.className)}>
      <BackgroundPattern />

      {/* Updated Hero Section with Video Background and Image Container */}
      <div ref={containerRef} className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-20">
          <video ref={videoRef} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BPO-ind5rSTKYOSgslIwm5FHYWtETHh4qi.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <div
          ref={overlayRef}
          className="absolute inset-0 bg-gradient-to-b from-coral-400/50 to-terra-600/50 mix-blend-overlay z-40"
        />

        <div ref={contentRef} className="relative z-50 h-full flex items-center justify-center">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative mb-16"
            ></motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <InteractiveHoverButton onClick={handleStartJourney} className="relative rounded-full">
                <span className="relative z-10">Start Your Journey</span>
              </InteractiveHoverButton>
            </motion.div>
          </div>
        </div>

        {/* Image Container */}
        <div ref={imageContainerRef} className="absolute inset-0 z-30 flex items-center justify-center overflow-hidden">
          <Image
            src="/old2.png"
            alt="BPO Services Illustration"
            width={1000}
            height={600}
            className="w-full h-auto max-w-none"
          />
        </div>
      </div>

      {/* Services Section with Enhanced Animations */}
      <section ref={servicesRef} className="py-32 relative bg-coral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-4 text-terra-600">Our Services</h2>
            <p className="text-lg text-terra-600/80 max-w-2xl mx-auto">
              Transforming businesses through innovative solutions and exceptional service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Headphones size={28} />,
                title: "Human Touch Support",
                description:
                  "We don't just answer calls, we create conversations that matter and build lasting relationships.",
              },
              {
                icon: <Code size={28} />,
                title: "Code Artistry",
                description: "We craft digital experiences that push boundaries and inspire innovation.",
              },
              {
                icon: <Calculator size={28} />,
                title: "Number Whispering",
                description: "We transform complex financial data into clear, actionable insights.",
              },
              {
                icon: <Database size={28} />,
                title: "Data Alchemy",
                description: "We turn raw data into golden opportunities for growth and success.",
              },
              {
                icon: <Users size={28} />,
                title: "People Empowerment",
                description: "We nurture talent and build teams that drive extraordinary results.",
              },
              {
                icon: <Shield size={28} />,
                title: "Digital Guardianship",
                description: "We protect your digital assets with unwavering vigilance and expertise.",
              },
            ].map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 relative bg-coral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-4 text-terra-600">Our Process</h2>
            <p className="text-lg text-terra-600/80 max-w-2xl mx-auto">
              A streamlined approach to revolutionize your business operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {[
                { title: "Discovery", description: "We dive deep into understanding your unique business needs" },
                { title: "Strategy", description: "Crafting a tailored plan to optimize your processes" },
                { title: "Implementation", description: "Seamless integration of our solutions into your workflow" },
                { title: "Optimization", description: "Continuous improvement and refinement of our services" },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-coral-400 text-coral-50">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-terra-600">{step.title}</h3>
                    <p className="text-terra-600/80">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <ParallaxImage
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Programming%20Concept%20Character%20Illustration_Programming%20Concept%20Character%20Illustration-08-ygv7XwcXBr2VnMNSe3jUlrM8qxDljV.svg"
              alt="BPO Process Illustration"
              className="hidden md:block"
            />
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-32 relative bg-coral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-4 text-terra-600">Our Technology</h2>
            <p className="text-lg text-terra-600/80 max-w-2xl mx-auto">
              Cutting-edge solutions that drive efficiency and innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <ParallaxImage
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Programming%20Concept%20Character%20Illustration_Programming%20Concept%20Character%20Illustration-05-CLqzIabvvDV0ZORU8raTuZWd8I79zT.svg"
              alt="BPO Technology Illustration"
              className="hidden md:block"
            />
            <div className="space-y-8">
              {[
                {
                  title: "AI-Powered Analytics",
                  description: "Harness the power of artificial intelligence for deep insights",
                },
                {
                  title: "Cloud Integration",
                  description: "Seamless connectivity and scalability for your operations",
                },
                {
                  title: "Robotic Process Automation",
                  description: "Streamline repetitive tasks for maximum efficiency",
                },
                { title: "Cybersecurity", description: "State-of-the-art protection for your valuable data" },
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-coral-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-terra-600">{tech.title}</h3>
                    <p className="text-terra-600/80">{tech.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-32 relative bg-coral-400">
        <motion.div
          className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <FloatingElement delay={0.2}>
            <h2 className="text-5xl font-bold mb-6 text-coral-50">Ready to Transform?</h2>
          </FloatingElement>
          <p className="text-xl text-coral-50/90 mb-8 max-w-xl mx-auto">
            Let's create something extraordinary together. Your journey to efficiency starts here.
          </p>
          <motion.button
            className="group relative px-8 py-4 rounded-full bg-terra-600 text-coral-50 hover:bg-terra-700 transition-all duration-300 text-lg font-bold overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Begin the Adventure
            <motion.span className="absolute right-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </section>
    </div>
  )
}

export default Home

