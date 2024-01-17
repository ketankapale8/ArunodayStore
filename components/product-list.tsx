import React from 'react';
import { Product } from '@/types';
import NoResults from '@/components/ui/no-results';
import ProductCard from '@/components/ui/product-card';


interface ProductListProps {
    title: string;
    items: Product[];

};

const ProductList : React.FC<ProductListProps> = ({
    title ,
    items
}) => {
    return (
        <div className='space-y-7'>
            <h3 className='font-bold text-3xl'>{title}</h3>
            {items.length === 0 && <NoResults/>}
            <div className='grid grid-cols-1 sm:grid-cols-2 mg:grid-cols-3 lg:grid-cols-4 gap-6'>
                {items.map((item)=> (
                    <ProductCard key={item.id} data={item}/>
                    // <div key={item.id}>
                    //     {item.name}
                    // </div>
                ))}
            </div>

        </div>
    )
}

export default ProductList;
