import { ArrowUp, Truck, Utensils } from "lucide-react";
import onboard_img from "../assets/images/onbaording.png";
import Button from "./ui/Button";
import { useEffect, useState} from "react";
import Footer from "./Footer";

const Onboarding: React.FC = () => {

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
    <section className="w-full h-full">
      <div className="container max-w-[1440px] grid grid-cols-1 md:grid-cols-2 mx-6 md:mx-auto">
        {/* LEFT CONTAINER */}
        <div className="relative grow">
              <img
                src={onboard_img}
                style={{ objectFit: "cover" }}
                className=""
                alt="onboarding-image"
              />
          
          <div className=" absolute flex flex-col justify-center items-center inset-0 hover:bg-[#FF7A18B2] group">
            <div className="w-[410px] h-[210px] text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
        <div className="flex flex-col items-center justify-between my-6 mx-10">
            {/* heading */}
            <div className="w-full flex justify-between items-center px-4">
                <a href="#" className="text-primary text-[40px] font-island font-normal">Chuks Kitchen</a>
                <Button variant="outline" size="md" onClick={() => ("/signin")}>Sign In</Button>
            </div>

            <div className="w-[577px] h-[495px] flex flex-col gap-10 p-4">
                
                    <div className="flex flex-col gap-6 w-full">
                        <h2 className="text-[32px] font-bold leading-[42px]">Your Authentic Taste of Nigeria</h2>
                        <p>Experience homemade flavors delivered fresh to your desk or home. We bring the rich culinary heritage of Nigeria right to your doorstep.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {
                        services.map((service, index) => (
                            <div key={index} className="flex items-center py-1 gap-[11px]">
                                <span className="bg-[#FFE1C4] w-10 h-10 p-2.5 rounded-md mr-2 flex items-center justify-center text-primary text-[10px]">{service.icon}</span>
                                <p className="text-[16px] font-medium leading-6">{service.text}</p>
                            </div>
                        ))
                    }
                    </div>

                    <div className="flex flex-col gap-[31px]">
                        <Button variant="primary" size="md" fullWidth>Start Your Order</Button>
                        <Button variant="outline" size="md" fullWidth>Learn More About Us</Button>
                    </div>
                
            </div>
            
            {/* COPYRIGHT */}
            <div className="w-full flex items-center justify-center px-4">
                <div className="flex text-[#1F2937] text-[14px]">
                    <p className="mr-2">© 2024 Chuks Kitchen.</p>
                    <span className="flex gap-">
                        <a href="#">Privacy Policy.</a>
                        <a href="#">Terms of Service</a>
                    </span>
                </div>
            </div>
        </div>
      </div>
        {showButton && ( <button className="bg-[#1E88E5] p-2 rounded-full fixed bottom-5 right-5 cursor-pointer" onClick={scrollToTop}><ArrowUp className="text-white w-5 h-5" /></button> )}
        <Footer />
    </section>
  );
};

export default Onboarding;


const services = [
    {
        icon: <Utensils />,
        text: "Freshly Prepared"
    },
    {
        icon: <Utensils />,
        text: "Support Local Business"
    },
    {
        icon: <Truck />,
        text: "Fast & Reliable Delivery"
    }
]