"use client"
import { Icons } from '@/components/ui/Icons'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Iitem, Size } from '@/lib/mocks'
import { cn } from '@/lib/utils'
import { ChevronDown, MoveRight, Share } from 'lucide-react'
import { FC, useState } from 'react'

interface AddToCartProps {
  product: Iitem
}

const AddToCart: FC<AddToCartProps> = ({ product }) => {
  const [count, setCount] = useState<number>(1)
  const [size, setSize] = useState<Size>(Size.MEDIUM)
  const handleValueChange = (value: string) => {
    if (Object.values(Size).includes(value as Size)) {
      setSize(value as Size);
    } else {
      console.error('Invalid size value:', value);
    }
  };

  return <div className='max-w-lg'>
    {product?.type === "cloth" && <>
      <span className="text-sm">Size</span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="w-full text-stone-600 p-4 border border-black hover:border-2 transition-all duration-300 text-center my-3 flex justify-between items-center">{size} <ChevronDown /></button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={size} onValueChange={handleValueChange}>
            {Object.values(Size).map((e, i) => <DropdownMenuRadioItem key={i} value={e}>{e}</DropdownMenuRadioItem>)}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>}
    <span className="text-sm">Qantity</span>
    <div className="border w-fit flex items-center px-5 py-2 mt-2 gap-10 text-2xl border-stone-600">
      <button className='border-none outline-none text-stone-900 disabled:text-stone-500 disabled:cursor-not-allowed' disabled={count < 2} onClick={() => setCount(e => e - 1)}>-</button>
      <span>{count}</span>
      <button className='border-none outline-none text-stone-900' onClick={() => setCount(e => e + 1)}>+</button>
    </div>
    <button className="w-full py-4 border border-black hover:border-2 transition-all duration-300 text-center mt-5">Add to cart</button>
    <button className="w-full py-4 bg-[#5A31F4] text-white text-center mt-5 flex items-center justify-center gap-2">Buy with <Icons.Shoppay height={20} /></button>
    <p className="text-center text-sm mt-4 text-stone-950 underline">More payment options</p>
    {product?.type == "music" && <div className="my-10 text-stone-500 space-y-1">
      {product?.tracklist?.map((e, i) => <p key={i} className='text-base'>{i+1}. {e}</p>)}
    </div>}
    <div className="flex items-center justify-between mt-10">
      <div className="flex items-center gap-2 text-sm text-black">
        <Share size={16} />Share
      </div>
    </div>
  </div>
}

export default AddToCart