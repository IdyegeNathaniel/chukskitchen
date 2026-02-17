import { popularItems } from "../const"

const Popular = () => {
  return (
    <section className="bg-[#F3F4F6] w-full h-[1222px] py-[137px] px-[55px]">
        <div className="container mx-auto p-2.5 flex flex-col gap-2.5">
            <h2 className="text-center font-bold text-3xl leading-[42px]">Popular Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    popularItems.map((item) => (
                        <div key={item.id} className="h-[393px] bg-white flex flex-col items-center justify-center gap-5 p-2">
                            <img src={item.image} alt={item.name} className="w-full h-1/2 object-cover rounded-lg" />
                            <h3 className="text-[24px] font-semibold">{item.name}</h3>
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

