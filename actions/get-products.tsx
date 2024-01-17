import qs from 'query-string';
import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query{
    categoryId?:string;
    brandId?: string;
    typeId?: string;  /// need to check ///
    isFeatured?:boolean


}

const getProducts = async (query: Query): Promise<Product[]> => {

    const url = qs.stringifyUrl({     ///check this too
        url : URL,
        query : {
            brandId: query.brandId,
            typeId : query.typeId,
            category: query.categoryId,
            isFeatured : query.isFeatured
            
        }

    })
    const res = await fetch(url);

    return res.json()
};

export default getProducts;