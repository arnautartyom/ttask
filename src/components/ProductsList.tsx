import React, { FC, memo } from 'react'
import { IData } from '../types/types'
import ProductCard from './ProductCard'

interface ProductsListProps{
    products: IData[]
}

const ProductsList: FC<ProductsListProps> = ({products}) => {
    return (
        <ul className="products__list">
            {products.map((e,i)=>(
                <ProductCard product={e} id={i} key={i}/>
            ))}
        </ul>
    )
}

export default memo(ProductsList)