//App.jsx
"use client"

import { useState, useEffect } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import RecentWorks from "./components/RecentWorks"
import About from "./components/About"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Services from "./components/Services"
import Footer from "./components/Footer"
import CustomCursor from "./components/CustomCursor"
import LoadingCounter from "./components/LoadingCounter"
import BackgroundWrapper from "./components/BackgroundWrapper"

function App() {
  const [loading, setLoading] = useState(true)
  const [showCustomCursor, setShowCustomCursor] = useState(false)

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      // Update cursor visibility based on screen size
      setShowCustomCursor(window.innerWidth > 768)
    }
    
    // Add event listener
    window.addEventListener("resize", handleResize)
    
    // Call handler right away so state gets updated with initial window size
    handleResize()
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleLoadingComplete = () => {
    setLoading(false)
  }

  return (
    <>
      {loading ? (
        <LoadingCounter onComplete={handleLoadingComplete} />
      ) : (
        <BackgroundWrapper>
          <div className="bg-black bg-opacity-90 text-pink-200 min-h-screen font-scto">
            {showCustomCursor && <CustomCursor />}
            <Header />
            <main className="px-4 md:px-8 lg:px-16 overflow-x-hidden">
              <Hero />
              <RecentWorks />
              <About />
              <Experience />
              <Skills />
              <Services />
              <Footer />
            </main>
          </div>
        </BackgroundWrapper>
      )}
    </>
  )
}

export default App