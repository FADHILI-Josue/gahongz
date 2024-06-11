'use client'
import ProductList from '@/components/Products'
import { products } from '@/lib/mocks'
import { FC } from 'react'

interface ProductsProps {
  
}

const Products: FC<ProductsProps> = ({}) => {
  return <div className='w-full'>
    {/* FILTERS */}
    <ProductList products={products.filter(p => p.type === 'music')} />
  </div>
}

export default Products