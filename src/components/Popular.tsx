import { popularItems } from "../const"

const Popular = () => {
  return (
    <section className="bg-[#F3F4F6] w-full py-[96px] md:py-[137px] px-[16px] md:px-[55px]">
        <div className="container mx-auto p-2.5 flex flex-col gap-10">
            <h2 className="text-center font-bold text-3xl leading-[42px]">Popular Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 md:gap-10">
                {
                    popularItems.map((item) => (
                        <div key={item.id} className="w-[358px] md:w-[] h-[272px] md:h-[390px] bg-white flex flex-col gap-5 rounded-lg">
                            <img src={item.image} alt={item.name} className="w-[350px] h-[222px] md:w-full md:h-1/2 object-cover rounded-lg" />
                            <h3 className="text-sm md:text-[24px] font-semibold text-center">{item.name}</h3>
                        </div>
                     )
                    )
                }
            </div>
        </div>
    </section>
  )
}

export default Popular

