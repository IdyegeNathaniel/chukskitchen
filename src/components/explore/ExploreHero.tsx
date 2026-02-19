import exploreImage from "../../assets/images/explore.png";

const ExploreHero = () => {
  const backgroundStyle = {
    backgroundImage: `url(${exploreImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <section className="w-full h-[586px] relative" style={backgroundStyle}>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 h-full flex items-center">
        <div className="max-w-[922px] flex flex-col items-start justify-center gap-6 md:gap-[11px] text-white">
          <h2 className="max-w-2xl text-3xl md:text-[48px] leading-tight md:leading-[61px] font-bold">
            Chuks Kitchen
          </h2>
          <p className="text-base md:text-[24px] leading-snug md:leading-[34px] font-medium">
           Chuks  Kitchen Nigerian Home Cooking 4.8 (1.2k)
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExploreHero;
