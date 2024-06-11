"use client"
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Iitem, products } from '@/lib/mocks';
import Link from 'next/link';
import { products as ps} from '@/lib/mocks';


const containerVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.5,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

const ProductList = ({products}: {products:Iitem[]}) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    React.useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <motion.div
            className="grid grid-cols-1 min-[546px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 py-10"
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
        >
            {products.map((product, id) => (
                <motion.div
                    key={id}
                    className="group"
                    variants={itemVariants}
                >
                    <Link href={`/product/${ps.findIndex(p => p.name === product.name)}`}>
                    <div className="w-full h-52 overflow-hidden">
                        <img src={product.image} alt={product.name} className='w-full scale-95 hover:scale-100 transition-all duration-300 h-full object-contain' />
                    </div>
                    <p className='text-stone-500 text-sm mt-5 group-hover:underline'>{product.name}</p>
                    <p className='text-stone-700'>${product.price.toFixed(2)} USD</p>
                    </Link>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default ProductList;
