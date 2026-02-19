import Hero from '../components/Hero'
import NavBar from '../components/NavBar'
import Popular from '../components/Popular'
import Search from '../components/ui/Search'
import Special from '../components/Special'
import Footer from '../components/Footer'
import Banner from '../components/Banner'


const HomePage = () => {
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
    </>
  )
}

export default HomePage