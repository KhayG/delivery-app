import React from 'react';
import Delivery from '../img/delivery.png';
import HeroBg from '../img/heroBg.png';

const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold ">Bike Delivery</p>
          <div className="w-6 h-6 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img src={Delivery} className="w-full h-full object-contain" alt="delivery" />
          </div>
        </div>

        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery in <span className="text-orange-600 text-[3rem] lg:text-[5rem]">Your City</span>
        </p>

        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid inventore provident veniam et vitae. Repudiandae rerum laborum maiores a quae suscipit! Molestias, ea et numquam praesentium iste nam explicabo!
        </p>

        <button
         type="button"
         className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1"></div>
    </section>
  );
};

export default HomeContainer