import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import AddToCart from "./_components/AddToCart";
import { Icons } from "@/components/ui/Icons";
import ProductList from "@/components/Products";
import { products } from "@/lib/mocks";

export default function Home() {
  return (
    <main className="w-full bg-primary-bg">
      <div className="w-full bg-black h-[37rem] relative mt-16">
        <img src="/banner.png" alt="banner image" className="absolute z-0 top-0 left-0 opacity-50 w-full h-full object-cover" />
        <div className="relative z-10 text-white h-full w-full flex flex-col justify-end items-center">
          <h1 className="text-5xl">NEW ALBUM</h1>
          <h5 className="font-bold text-xl text-white/80 my-8">Available Now</h5>
          <div className="flex items-center gap-3 mb-28">
            <Link className={"bg-white px-24 py-4 font-light text-lg border border-white hover:scale-[1.01] transition-all text-black"} href="/products/more-than-this-cd-preorder">ORDER CD</Link>
            <Link className={"bg-white px-24 py-4 font-light text-lg border border-white hover:scale-[1.01] transition-all text-black"} href="https://cece.lnk.to/MTT">STREAM</Link>
          </div>
        </div>i
      </div>
      <MaxWidthWrapper className="">
        <div className="flex items-center">
          <div className="flex-1">
            <img src="/more.webp" alt="more than this" className="w-full h-full flex-1 object-contain" />
          </div>
          <div className="flex-1 ml-20 flex text-stone-600 flex-col text-lg">
            <h1 className="text-4xl ">More Than This - CD</h1>
            <span className=" my-7">$10.00 USD</span>
            <p className=" mb-3">Pay in 4 interest-free installments for orders over <span className="text-stone-900 font-bold">$50.00</span></p>
            <p className="flex items-center gap-2 mb-5">with <Icons.Shoppay className="text-[#5A31F4]" height={16}/> <span className="underline"> Learn more</span></p>
            <AddToCart />
          </div>
        </div>

        <div className="mt-20">
          <h1 className="text-2xl font-light text-stone-600">Featured Merchandise</h1>
          <ProductList products={products} />

        </div>
      </MaxWidthWrapper>
    </main>
  );
}
