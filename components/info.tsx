"use client"

import { Product } from "@/types";
import Currency from "@/components/ui/currency";
import Button from '@/components/ui/Button';
import { ShoppingCart } from "lucide-react";
import useCart from "@/hooks/use-cart";

interface InfoProps {
    data : Product;
}


const Info : React.FC<InfoProps> = ({
    data

    
}) =>{
    const cart = useCart();
    const onAddToCart = () => {
        cart.addItem(data);

    }

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
            <div className="mt-3 flex items-end justify-between">
                <p className="text-2xl text-gray-900">
                    <Currency value={data?.price}/>
                </p>
            </div>
            <hr className="my-4"/>
            <div className="flex flex-col gap-y-6">
            <div className="flex-col items-center gap-x-4 ">
                <h3 className="font-semibold text-black">Desc</h3>
                <div className="text-2xl">
                    {data?.brand.value}
                </div>
            </div>

            
            <div className="flex-col items-center gap-x-4 py-4">
                <h3 className="font-semibold text-black">Category</h3>
                <div className="text-2xl" >
                    {data?.category.name}
                </div>
            </div>

            </div>

            <div className="mt-10 flex items-center gap-x-3">
                <Button onClick={onAddToCart} className="flex items-center gap-x-2">
                    Add To Cart
                    <ShoppingCart/>
                </Button>
            </div>
        </div>
    )
}

export default Info