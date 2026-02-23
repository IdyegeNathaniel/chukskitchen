import { Routes, Route } from 'react-router-dom';
import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import HomePage from './pages/HomePage'
import Explore from './pages/Explore';
import Order from './pages/Order';
import Onboarding from './components/Onboarding';

const App = () => {
   const[showButton, setShowButton] = useState<boolean>(false)
  
      useEffect(() => {
          const toggleButton = () => {
              if(window.scrollY > 300) {
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
        <Routes>
            <Route path="/" element={<Onboarding />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/myorders" element={<Order />} />
        </Routes>
    {showButton && ( <button className="bg-[#1E88E5] p-2 rounded-full fixed bottom-5 right-5 cursor-pointer" onClick={scrollToTop}><ArrowUp className="text-white w-5 h-5" /></button> )}
   </> 
  )
}

export default App