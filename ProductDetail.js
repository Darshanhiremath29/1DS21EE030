import React, { useEffect, useState } from 'react';
import { getProductById } from '../utils/api';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Details = styled.div`
  padding: 16px;
`;

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const loadProduct = async () => {
            const productData = await getProductById(id);
            setProduct(productData);
        };
        loadProduct();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <Details>
            <img src={https://source.unsplash.com/random/300x300?sig=${product.id}} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Company: {product.company}</p>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>Discount: {product.discount}%</p>
            <p>Available: {product.available ? 'Yes' : 'No'}</p>
        </Details>
    );
};

export default ProductDetails;