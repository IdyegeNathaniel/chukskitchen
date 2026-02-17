import { ArrowUp } from 'lucide-react'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Popular from './components/Popular'
import Search from './components/ui/Search'
import { useEffect, useState } from 'react'
import Special from './components/Special'
import Footer from './components/Footer'
import Banner from './components/Banner'

const App = () => {
   const[showButton, setShowButton] = useState<boolean>(false)
  
      useEffect(() => {
          const toggleButton = () => {
              if(window.scrollY > 50) {
                  setShowButton(true)
              }else{
                  setShowButton(false)
              }
          }
          window.addEventListener("scroll", toggleButton)
          return () => window.removeEventListener("scroll", toggleButton)
      }, [])
  
      const scrollToTop = () => {
          window.scrollTo({
              top: 0,
              behavior: "smooth"
          })
      }
  return (
    <>
      <NavBar />
      <Hero />
      <div className="relative flex items-center justify-center -mt-8 max-w-7xl mx-auto px-6 md:px-12">
        <Search />
      </div>
      <Popular />
      <Special />
      <Banner />
      <Footer />
      {showButton && ( <button className="bg-[#1E88E5] p-2 rounded-full fixed bottom-5 right-5 cursor-pointer" onClick={scrollToTop}><ArrowUp className="text-white w-5 h-5" /></button> )}
    </>
  )
}

export default App