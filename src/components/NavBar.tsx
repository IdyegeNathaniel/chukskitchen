import { NavLink } from "react-router";
import Button from "./ui/Button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NavBar = () => {
  const [menu, setMenu] = useState<boolean>(false);
  return (
    <nav className="bg-white w-full h-[41px] md:h-[90px] px-[19px] md:px-12 py-[18px] flex justify-between items-center gap-[45px]">
      <div className="shrink-0 ">
        <h1 className="text-primary font-island text-[24px] md:text-[41px] font-normal">
          Chuks Kitchen
        </h1>
      </div>

      <div className="hidden md:flex flex-1 w-full justify-start items-center p-2.5 gap-10">
        {["Home", "Explore", "My Orders", "Account"].map((item, index) => (
          <NavLink
            key={index}
            to={`/${item}`.toLowerCase().replace(" ", "")}
            className={({ isActive }) =>
              `flex-1 text-base font-medium leading-4  hover:text-primary transition-colors duration-300 ${isActive ? "text-primary" : "text-[#1F2937]"}`
            }
          >
            {item}
          </NavLink>
        ))}
      </div>
      <div className="hidden md:flex">
        <Button variant="primary" size="md">
          Login
        </Button>
      </div>

      {/* NENU */}
      <button
        className="md:hidden flex z-50"
        onClick={() => setMenu((prev) => !prev)}
      >
        {menu ? (
          <X className="w-[25px] h-[25px]" />
        ) : (
          <Menu className="w-[25px] h-[25px]" />
        )}
      </button>

      {/* MOBILE MENU */}

      {menu && (
        <div className="bg-[#1A1A1A] w-full h-screen absolute top-10 right-0 z-50 flex flex-col items-center justify-center gap-6 ">
          {["Home", "Explore", "My Orders", "Account"].map((item, index) => (
            <NavLink
              key={index}
              to={`/${item}`.toLowerCase().replace(" ", "")}
              onClick={() => setMenu(false)}
              className={({ isActive }) =>
                ` text-xl font-medium leading-4  hover:text-primary transition-colors duration-300 ${isActive ? "text-primary" : "text-[#FFF]"}`
              }
            >
              {item}
            </NavLink>
          ))}
          <div className="mt-2">
            <Button variant="primary" size="sm">
              Login
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
