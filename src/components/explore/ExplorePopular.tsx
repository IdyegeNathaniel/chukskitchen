
import { explorePopular, jollof, swallow } from "../../const";
import { Plus } from "lucide-react";

const ExplorePopular = () => {
  return (
    <section className="bg-[#F3F4F6] w-full py-[96px] md:py-[137px] px-[16px] md:px-[55px]">
      <div className="container mx-auto my-5 p-2.5 flex flex-col gap-10">
        <div className="">
          
        <h2 className="font-bold text-3xl leading-[42px]">Popular</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 md:gap-10">
          {explorePopular.map((item) => (
            <div
              key={item.id}
              className="h-[487px] bg-white flex flex-col gap-6 rounded-lg"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-1/2 object-cover rounded-lg"
              />
              <div className="h-[113px] p-[17px] flex flex-col gap-[7px]">
                <h3 className="text-[22px] font-semibold">{item.name}</h3>
                <p className="text-base leading-[24px] font-normal">
                  {item.text}
                </p>
              </div>
              <div className="flex items-center justify-between p-[17px]">
                <p className="text-base leading-6 text-primary font-medium">
                  ₦3,500
                </p>
                <button className="rounded-full bg-primary p-2">
                  <Plus className="text-white font-bold w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
        </div>

        {/* JOLLOF AND ENTREES */}

        <div className="">
          <h2 className="font-bold text-3xl leading-[42px]">Jollof Rice & Entrees</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 md:gap-10">
                    {jollof.map((item) => (
                      <div
                        key={item.id}
                        className="h-[487px] bg-white flex flex-col gap-6 rounded-lg"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-1/2 object-cover rounded-lg"
                        />
                        <div className="h-[113px] p-[17px] flex flex-col gap-[7px]">
                          <h3 className="text-[22px] font-semibold">{item.name}</h3>
                          <p className="text-base leading-[24px] font-normal">
                            {item.text}
                          </p>
                        </div>
                        <div className="flex items-center justify-between p-[17px]">
                          <p className="text-base leading-6 text-primary font-medium">
                            ₦3,500
                          </p>
                          <button className="rounded-full bg-primary p-2">
                            <Plus className="text-white font-bold w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
        </div>

        {/* SWALLOW AND SOUPS */}

        <div className="">
          <h2 className="font-bold text-3xl leading-[42px]">Swallow & Soups</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 md:gap-10">
                    {swallow.map((item) => (
                      <div
                        key={item.id}
                        className="h-[487px] bg-white flex flex-col gap-6 rounded-lg"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-1/2 object-cover rounded-lg"
                        />
                        <div className="h-[113px] p-[17px] flex flex-col gap-[7px]">
                          <h3 className="text-[22px] font-semibold">{item.name}</h3>
                          <p className="text-base leading-[24px] font-normal">
                            {item.text}
                          </p>
                        </div>
                        <div className="flex items-center justify-between p-[17px]">
                          <p className="text-base leading-6 text-primary font-medium">
                            ₦3,500
                          </p>
                          <button className="rounded-full bg-primary p-2">
                            <Plus className="text-white font-bold w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
        </div>
      </div>
    </section>
  );
};

export default ExplorePopular;
