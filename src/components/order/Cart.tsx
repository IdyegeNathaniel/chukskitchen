import { useState } from "react";
import cartImage from "../../assets/images/Variant1.png";
import cartImage2 from "../../assets/images/Variant5.png";
import { Minus, Plus, X } from "lucide-react";
import { Link } from "react-router";

const Cart = () => {
  const [quantity, setQuantity] = useState<number>(1);

  const minQty = 1;

  const increaseQuantity = () => setQuantity(quantity + 1);

  const decreaseQuantity = () => setQuantity(Math.max(quantity - 1, minQty));

  return (
    <section className="py-10 px-[7px] md:px-[44px]">
      <div className="bg-white max-w-[1352px] h-[915px] flex flex-col gap-[11px] py-[21px] md:px-2.5 rounded-sm shadow-md">
        <h2 className="text-[32px] leading-[42px] font-bold">Your Cart</h2>
        
        {/* ITEM DETAILS */}

         {cartItems.map((item, index) => (
            <div key={index} className="flex md:flex-row items-start md:items-center gap-3 md:gap-12 px-2 md:px-6 py-[7px] border border-[#BDBDBD] rounded-[5px]">
            
            <div className="shrink-0">
                <img
                src={item.image}
                className="w-[108.14px] h-[99px] md:w-[190px] md:h-[173.93] object-cover"
                alt={item.item}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] items-center gap-3 md:gap-[47px] w-full">
                <div className="flex flex-col gap-1 items-center md:items-start justify-center">
                <h2 className="font-semibold text-[20px] md:text-[32px] leading-6 md:leading-[42px] mb-2">
                    {item.item}
                </h2>
                <p className="text-base md:text-2xl leading-4 md:leading-8">
                    {item.condiment}
                </p>
                </div>

                <div className="flex justify-between items-center gap-3 md:gap-4 w-full">
                <button
                    className="w-8 h-8 md:w-[30px] md:h-[30px] flex items-center justify-center rounded-md cursor-pointer bg-gray-200 hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={decreaseQuantity}
                    disabled={quantity <= minQty}
                    aria-label="Decrease quantity"
                >
                    <Minus className="w-4 h-4" />
                </button>

                <p className="text-xl md:text-2xl font-medium min-w-[2ch] text-center">
                    {quantity}
                </p>

                <button
                    className="w-8 h-8 md:w-[30px] md:h-[30px] flex items-center justify-center rounded-md cursor-pointer bg-gray-200 hover:bg-gray-300 transition-colors"
                    onClick={increaseQuantity}
                    aria-label="Increase quantity"
                >
                    <Plus className="w-4 h-4" />
                </button>
                </div>

                <div className="w-full flex justify-between md:justify- gap-4 md:gap-6 items-center">
                <p className="text-xl text-primary leading-6 font-medium">
                    ₦{(item.price).toLocaleString()}
                </p>
                <button
                    className="w-8 h-8 md:w-[30px] md:h-[30px] flex items-center justify-center rounded-md cursor-pointer bg-primary hover:bg-primary transition-colors"
                    aria-label="Remove item"
                >
                    <X className="w-4 h-4 text-white" />
                </button>
                </div>
            </div>
            </div>
         ))}
         <div className="flex items-center p-[3px] gap-2 text-main font-medium">
            <Plus className="w-4 h-4" />
            <Link to={"/explore"} className="text-base leading-6 ">Add more items from Chuks Kitchen</Link>
         </div>
      </div>
    </section>
  );
};

export default Cart;

const cartItems = [
    {
        image: cartImage,
        item: "Jollof Rice & Fried Chicken",
        condiment: "With plantain, extra pepper sauce",
        price: 3500
    },
    {
        image: cartImage2,
        item: "Jollof Rice & Fried Chicken",
        condiment: "With plantain, extra pepper sauce",
        price: 3500
    },
    {
        image: cartImage,
        item: "Jollof Rice & Fried Chicken",
        condiment: "With plantain, extra pepper sauce",
        price: 3500
    },
    {
        image: cartImage2,
        item: "Jollof Rice & Fried Chicken",
        condiment: "With plantain, extra pepper sauce",
        price: 3500
    },
]
