import React from 'react';

const ProductCard = ({ imgUrl, name}) => {
    return (
        <div className='product_card text-center'>
            <img src={imgUrl} alt={name} />
            <h4>{name}</h4>
            <p>00000 UGX</p>
            <button className="btn-outline">Add to Cart</button>
        </div>
    );
}

export default ProductCard;
