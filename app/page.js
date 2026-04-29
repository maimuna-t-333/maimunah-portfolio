import Navbar  from '@/components/Navbar'
import Hero    from '@/components/Hero'
import Marquee from '@/components/Marquee'
import About   from '@/components/About'
import Work    from '@/components/Work'
import Skills  from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer  from '@/components/Footer'
import Cursor  from '@/components/Cursor'

export default function Home() {
  return (
    <main>
      <Cursor />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Work />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}