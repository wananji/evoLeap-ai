import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import NewsSection from './components/NewsSection'
import SolutionsSection from './components/SolutionsSection'
import SearchSection from './components/SearchSection'
import FooterCTA from './components/FooterCTA'
import Footer from './components/Footer'
import MedicalAgentOS from './components/MedicalAgentOS'

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <div className="bg-surface-canvas text-on-surface font-body-main selection:bg-secondary-container">
          <Navbar />
          <main>
            <HeroSection />
            <NewsSection />
            <SolutionsSection />
            <SearchSection />
            <FooterCTA />
          </main>
          <Footer />
        </div>
      } />
      <Route path="/medical-agent-os" element={<MedicalAgentOS />} />
    </Routes>
  )
}

export default App
