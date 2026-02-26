import { Truck, Utensils } from "lucide-react";
import onboard_img from "../assets/images/onbaording.png";
import Button from "./ui/Button";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router";

const Onboarding: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full min-h-screen">
      <div className="container max-w-[1440px] grid grid-cols-1 lg:grid-cols-2 mx-auto px-4 md:px-6">
        {/* LEFT CONTAINER */}
        <div className="relative h-[400px] md:h-[500px] lg:h-auto">
          <img
            src={onboard_img}
            className="w-full h-full object-cover rounded-lg lg:rounded-none"
            alt="onboarding-image"
          />

          <div className=" absolute hidden lg:flex flex-col justify-center items-center inset-0 hover:bg-[#FF7A18B2] group">
            <div className="max-w-[410px] h-[210px] text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-5xl font-bold leading-14 mb-3">
                Chuks Kitchen
              </h2>
              <p className="text-2xl font-medium leading-[34px]">
                Your journey to delicious, authentic Nigerian meals starts here.
                Sign up or log in to order your favorites today!
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT CONTAINER */}
        <div className="flex flex-col items-center justify-between py-6 lg:py-10 px-4 md:px-6 lg:px-10">
          {/* heading */}
          <div className="w-full flex justify-between items-center mb-6 lg:mb-0">
            <a
              href="#"
              className="text-primary text-2xl md:text-3xl lg:text-[40px] font-island font-normal"
            >
              Chuks Kitchen
            </a>
            <Button
              variant="outline"
              size="md"
              onClick={() => navigate("/signin")}
            >
              Sign In
            </Button>
          </div>

          <div className="w-full max-w-[577px] h-[] flex flex-col gap-6 md:gap-8 lg:gap-10">
            <div className="flex flex-col gap-4 md:gap-6 w-full">
              <h2 className="text-2xl md:text-3xl lg:text-[32px] font-bold leading-tight">
                Your Authentic Taste of Nigeria
              </h2>
              <p className="text-sm md:text-base leading-relaxed">
                Experience homemade flavors delivered fresh to your desk or
                home. We bring the rich culinary heritage of Nigeria right to
                your doorstep.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-200 md:bg-transparent flex items-center py-1.5 px-[9px] gap-3 rounded-lg">
                  <span className="shrink-0 bg-[#FFE1C4] w-10 h-10 p-2.5 rounded-md mr-2 flex items-center justify-center text-primary text-[10px]">
                    {service.icon}
                  </span>
                  <p className="text-sm md:text-base font-medium leading-6">
                    {service.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 md:gap-[31px]">
              <Link to={"/home"}>
                <Button variant="primary" size="md" fullWidth>
                  Start Your Order
                </Button>
              </Link>
              <Button variant="outline" size="md" fullWidth>
                Learn More About Us
              </Button>
            </div>
          </div>

          {/* COPYRIGHT */}
          <div className="w-full flex items-center justify-center mt-6 lg:mt-0">
            <div className="flex flex-col sm:flex-row text-center sm:text-left text-[#1F2937] text-xs md:text-sm gap-1 sm:gap-0">
              <p className="sm:mr-2">© 2024 Chuks Kitchen.</p>
              <span className="flex gap-2 justify-center sm:justify-start">
                <a href="#">Privacy Policy.</a>
                <a href="#">Terms of Service</a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Onboarding;

const services = [
  {
    icon: <Utensils />,
    text: "Freshly Prepared",
  },
  {
    icon: <Utensils />,
    text: "Support Local Business",
  },
  {
    icon: <Truck />,
    text: "Fast & Reliable Delivery",
  },
];
