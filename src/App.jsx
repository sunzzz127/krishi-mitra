import { useState } from 'react'
import { useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import DistrictSelector from './components/DistrictSelector'
import CropDetail from './components/CropDetail'
import Footer from './components/Footer'

export default function App() {
  const { theme, toggle } = useTheme()
  const [selectedKey, setSelectedKey] = useState('anantapur')

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar theme={theme} onToggleTheme={toggle} />

      <main className="flex-1">
        <Hero />

        <section id="tool" className="max-w-[1080px] mx-auto px-6 py-4 md:py-8 scroll-mt-16">
          <DistrictSelector selectedKey={selectedKey} onSelect={setSelectedKey} />
          <div className="mt-8">
            <CropDetail districtKey={selectedKey} />
          </div>
        </section>

        <HowItWorks />
      </main>

      <Footer />
    </div>
  )
}
