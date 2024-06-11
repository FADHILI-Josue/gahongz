"use client"
import { Icons } from '@/components/ui/Icons'
import { cn } from '@/lib/utils'
import { MoveRight, Share } from 'lucide-react'
import { FC, useState } from 'react'

interface AddToCartProps {

}

const AddToCart: FC<AddToCartProps> = ({ }) => {
  const [count, setCount] = useState<number>(1)
  return <div className='max-w-lg'>
    <span className="text-sm">Qantity</span>
    <div className="border w-fit flex items-center px-5 py-2 mt-2 gap-10 text-2xl border-stone-600">
      <button className='border-none outline-none text-stone-900 disabled:text-stone-500 disabled:cursor-not-allowed' disabled={count < 2} onClick={() => setCount(e => e - 1)}>-</button>
      <span>{count}</span>
      <button className='border-none outline-none text-stone-900' onClick={() => setCount(e => e + 1)}>+</button>
    </div>
    <button className="w-full py-2 border border-black hover:border-2 transition-all duration-300 text-center mt-5">Add to cart</button>
    <button className="w-full py-2 bg-[#5A31F4] text-white text-center mt-5 flex items-center justify-center gap-2">Buy with <Icons.Shoppay height={20} /></button>
    <p className="text-center text-sm mt-4 text-stone-950 underline">More payment options</p>

    <div className="flex items-center justify-between mt-10">
      <div className="flex items-center gap-2 text-sm text-black">
        <Share size={16} />Share
      </div>
      <div className="flex items-center gap-2 text-sm text-stone-700 hover:underline cursor-pointer">View full details<MoveRight size={16} />
      </div>
    </div>
  </div>
}

export default AddToCart