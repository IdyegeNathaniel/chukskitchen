import { useState } from "react"
import sample from "../../assets/images/Variant1.png"
import { Minus, Plus, X } from "lucide-react"
import Button from "../ui/Button"

const Cart = () => {
    const[quantity, setQuantity] = useState<number>(1)

    const minQty = 1

    const increaseQuantity = () => ( 
        setQuantity(quantity + 1)
    )

    const decreaseQuantity = () => (
        setQuantity(Math.max(quantity - 1, minQty))
    )

  return (
    <section className='py-10 px-[44px]'>
        <div className="bg-white max-w-[1352px] h-[915px] flex flex-col gap-[11px] py-[21px] px-2.5 rounded-sm shadow-md">
            <h2 className='text-[32px] leading-[42px] font-bold'>Your Cart</h2>
            <div className="flex items-center gap-[47px] px-6 py-[7px] border border-[#BDBDBD] rounded-[5px]">
                <img src={sample} className='w-[190px] h-[174px] inset-0' alt='sample' />
                <div className="grid grid-cols-1 md:grid-cols-[3fr,1fr,1fr]">

                <div className="flex flex-col items- gap-2">
                    <h3 className="text-base md:text-[32px] font-bold leading-[24px] md:leading-[42px]">Jollof Rice & Fried Chicken</h3>
                    <p className="text-xs md:text-2xl leading-[16px] md:leading-[34px]">With plantain, extra pepper sauce</p>
                </div>
                <div className="flex justify-center items-center gap-[47px]">
                    <button className="w-[30px] h-[30px] flex items-center justify-center rounded-sm cursor-pointer bg-[#BDBDBD] p-1" onClick={decreaseQuantity}>
                            <Minus className="text-[#000000] font-bold w-4 h-4" />
                    </button>
                        <p className="text-3xl font-medium">{quantity}</p>
                    <button className="w-[30px] h-[30px] flex items-center justify-center rounded-sm cursor-pointer bg-[#BDBDBD] p-1" onClick={increaseQuantity}>
                            <Plus className="text-[#000000] font-bold w-4 h-4" />
                    </button>
                    
                </div>

                <div className="flex-1 flex items-center justify-between">
                    <p className="text-primary text text-2xl font-bold">₦3,200</p>
                    <Button variant="primary" size="sm"><X className="w-3 h-3" /></Button>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Cart