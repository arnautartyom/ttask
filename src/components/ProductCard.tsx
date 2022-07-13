import React, { FC } from 'react'
import { IData } from '../types/types'

interface ProductsCardProps{
    id: any,
    product: IData
}

const ProductCard: FC<ProductsCardProps> = ({product, id}) => {

    return (
        <a href="/" className="products__item" key={id}>
            <img src={product.image_url} alt="" className="products__img"/>
            {product.coming_soon === true ? <span className="products__expected expected">coming soon</span> : <></>}
            <div className="products__info products-info">
                <ul className="products-info__colors colors">
                    {   product.colors.length !== 0 ? product.colors.map((e,i)=>(
                            <li key={i} className="colors__item" style={{background: e}}></li>
                        )) : <></>
                    }
                </ul>
                <div className="products-info__description">
                    <div className="products-info__main">
                        <h3 className="products-info__header">{product.name}</h3>
                        <span className="products-info__price">{product.price}</span>
                    </div>
                    {
                        !product.sold ? 
                        <ul className="products-info__sizes">
                            {product.sizes.map((e,i)=>(
                              <li className="products-info__size" key={i}>{e}</li>
                            ))}
                        </ul>
                        :
                        <span className="products-info__sold">sold out</span>
                    }
                </div>
            </div>
        </a>
    )
}

export default ProductCard