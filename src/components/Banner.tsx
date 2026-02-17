import bannerImage from '../assets/images/banner.png'
import Button from './ui/Button'

const Banner: React.FC = () => {
    const backgroundStyle = {
    backgroundImage: `url(${bannerImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  return (
   <section className="w-full h-[610px] relative" style={backgroundStyle}>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 h-full flex items-center">
        <div className="max-w-[922px] flex flex-col items-start justify-center gap-6 md:gap-10 text-white">
          <h2 className="text-3xl md:text-[48px] leading-tight md:leading-[61px] font-extrabold">
            Introducing Our New Menu Additions!
          </h2>
          <p className="max-w-4xl text-xl md:text-[32px] leading-snug md:leading-[42px] font-medium">
            Explore exciting new dishes, crafted with the freshest
            ingredients and authentic Nigerian flavors. Limited time
            offer!
          </p>
          <Button variant="primary" size="lg">
            Discover what's new
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Banner