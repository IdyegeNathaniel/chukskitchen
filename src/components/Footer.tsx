const Footer: React.FC = () => {
  return (
    <footer className="bg-[#5c2a07] p-4 text-white">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mx-5 md:mx-20 py-10 px-2 md:px-3">
       
        <div className="">
          <h2 className="font-medium font-island text-[37px] text-primary mb-2">Chuks Kitchen</h2>
          <p className="w-full md:w-2/3 text-sm text-white leading-6 text-justify">
           Bringing the authentic flavors of Nigerian home cooking to your table, with passion and care.
          </p>
        </div>
        {/* SECOND */}
        <div className="">
          <h2 className="font-medium text-xl mb-5">Quick Links</h2>
          <ul className="flex flex-col gap-2 text-sm text-white ">
            {["Home", "Explore", "My Order", "Account", "Contact"].map(
              (item, index) => (
                <li key={index}>{item}</li>
              )
            )}
          </ul>  
        </div>

        {/* THIRD */}
        <div className="">
          <h2 className="font-medium text-xl mb-5">GET IN TOUCH</h2>
          <ul className="flex flex-col gap-2 text-sm text-white ">
            <li>+234 801 234 5678</li>
            <li>hello@chukskitchen.com</li>
            <li>123 Taste Blvd, Lagos, Nigeriat</li>
          </ul>
        </div>
       
        {/* FOURTH */}
        <div className="">
          <ul className="flex flex-col gap-2 text-sm text-white ">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Linkedin</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
      <div className="mx-5 md:mx-20">
        <p className="py-5 text-left text-xs text-neutral-300">
          © 2020 Lift Media. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer