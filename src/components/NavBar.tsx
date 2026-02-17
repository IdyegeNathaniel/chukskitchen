import { NavLink } from "react-router"
import Button from "./ui/Button"
import { Menu, X } from "lucide-react"
import { useState } from "react"


const NavBar = () => {

    const[menu, setMenu] = useState<boolean>(false)
  return (
    <nav className="bg-white w-full h-[90px] px-12 py-[18px] flex justify-between items-center gap-[45px]">
        <div className="shrink-0 ">
            <h1 className="text-[#FF7A18] font-family-sec text-[24px] md:text-[41px] font-normal">Chuks Kitchen</h1>
        </div>

        
        <div className="hidden md:flex flex-1 w-full justify-start items-center p-2.5 gap-10">
            {
                ["Home","Explore","My Orders", "Account"].map((item, index) => (
                    <NavLink key={index} to={`/${item}`.toLowerCase().replace(" ","")} className={({isActive}) => `flex-1 text-base font-medium leading-4  hover:text-[#FF7A18] transition-colors duration-300 ${ isActive ? "text-[#FF7A18]" : "text-[#1F2937]"}` }>{item}</NavLink>
                ))
            }
        </div>
        <div className="hidden md:flex">
            <Button variant="primary" size="md">Login</Button>
        </div>

        {/* SMALLER SCREEN */}
        <div className="md:hidden flex" onClick={() => setMenu(prev => !prev)}>
           { menu ? (<X className="w-[25px] h-[25px]" />) : (<Menu className="w-[25px] h-[25px]" />) }
        </div>
    </nav>
  )
}

export default NavBar