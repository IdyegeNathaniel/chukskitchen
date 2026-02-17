import heroImage from "../assets/images/Welcome.jpg";
import Button from "./ui/Button";
import Search from "./ui/Search";

const Hero = () => {
  const backgroundStyle = {
    backgroundImage: `url(${heroImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <section className="w-full h-screen relative" style={backgroundStyle}>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 h-full flex items-center">
        <div className="max-w-[922px] flex flex-col items-start justify-center gap-6 md:gap-10 text-white">
          <h2 className="max-w-2xl text-3xl md:text-[48px] leading-tight md:leading-[61px] font-bold">
            The Heart of Nigerian Home Cooking
          </h2>
          <p className="text-base md:text-[32px] leading-snug md:leading-[42px] font-medium">
            Handcrafted with passion, delivered with care.
          </p>
          <Button variant="primary" size="lg">
            Discover what's new
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
