import React from 'react'

const CartAmountToggle = ({amount, setDecrease, setIncrease}) => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className='flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 text-lg items-center mt-4 ml-4'>
        <button 
          onClick={setDecrease} 
          className='text-2xl sm:text-3xl md:text-4xl lg:text-4xl transition-all duration-300 hover:scale-110'
        >
          -
        </button>
        <div className='text-blue-600 font-mono text-xl sm:text-2xl md:text-3xl lg:text-2xl'>
          {amount}
        </div>
        <button 
          onClick={setIncrease} 
          className='text-2xl sm:text-3xl md:text-4xl lg:text-3xl transition-all duration-300 hover:scale-110'
        >
          +
        </button>
      </div>
    </div>
  )
}

export default CartAmountToggle;
