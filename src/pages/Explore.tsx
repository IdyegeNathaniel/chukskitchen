import ExploreHero from "../components/explore/ExploreHero"
import ExplorePopular from "../components/explore/ExplorePopular"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

const Explore = () => {
  return (
    <>
        <NavBar />
          <ExploreHero />
          <ExplorePopular />
        <Footer />
    </>
  )
}

export default Explore