import React from 'react';
import Delivery from '../img/delivery.png'

const MainContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <div className="py-2 flex-1 flex flex-col items-start md:items-center justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold ">Bike Delivery</p>
          <div className="w-6 h-6 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img src={Delivery} className="w-full h-full object-contain" alt="delivery" />
          </div>
        </div>

        <p className="text-[2.5rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery in <span className="text-orange-600 text-[3rem]">Your City</span>
        </p>

        <p className="text-base text-textColor text-center md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid inventore provident veniam et vitae. Repudiandae rerum laborum maiores a quae suscipit! Molestias, ea et numquam praesentium iste nam explicabo!
        </p>
      </div>
      <div className="py-2 flex-1"></div>
    </div>
  )
}

export default MainContainer