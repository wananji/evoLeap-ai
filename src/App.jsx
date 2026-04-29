import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import NewsSection from './components/NewsSection'
import SolutionsSection from './components/SolutionsSection'
import SearchSection from './components/SearchSection'
import FooterCTA from './components/FooterCTA'
import Footer from './components/Footer'

function App() {
  return (
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
  )
}

export default App
