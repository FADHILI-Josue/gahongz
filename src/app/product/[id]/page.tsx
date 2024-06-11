import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Icons } from '@/components/ui/Icons'
import { Iitem, getRandomProducts, products } from '@/lib/mocks'
import { FC } from 'react'
import AddToCart from './_components/AddToCart'
import ProductList from '@/components/Products'
import { notFound } from 'next/navigation'

interface pageProps {
    params: {
        id: string | number
    }
}

const page: FC<pageProps> = ({ params }) => {
    const product = products.find((_,i) => i === Number(params.id))
    if (!product) return notFound()
    return <div>
        <MaxWidthWrapper className="mt-20">
            <div className="flex">
                <div className="flex-[0.7] mt-20">
                    <img src={product?.image ?? ""} alt="more than this" className="w-full h-full scale-[.8] flex-1 object-contain" />
                </div>
                <div className="flex-[0.3] ml-5 mt-40 flex text-stone-600 flex-col text-sm">
                    <p className='text-xs text-stone-400 mb-3'>CECE WINANS STORE</p>
                    <h1 className="text-4xl ">{product?.name}</h1>
                    <span className="text-lg my-7">${product?.price.toFixed(2)} USD</span>
                    <p className=" mb-3">Pay in 4 interest-free installments for orders over <span className="text-stone-900 font-bold">$50.00</span></p>
                    <p className="flex items-center gap-2 mb-5">with <Icons.Shoppay className="text-[#5A31F4]" height={16} /> <span className="underline"> Learn more</span></p>
                    <AddToCart product={product!} />
                </div>
            </div>
            <h1 className='text-stone-600 my-6'>You may also like</h1>
            <ProductList products={getRandomProducts(products, 3, Number(params.id))} />
        </MaxWidthWrapper>
    </div>
}

export default page