import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { FC } from 'react'
import Products from './Products'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
    return <main className='w-full'>
        <MaxWidthWrapper className='mt-44'>
            <h1 className="text-4xl font-light mb-20">ALL ITEMS</h1>
            <Products />
        </MaxWidthWrapper>
    </main>
}

export default page