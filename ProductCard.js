import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  margin: 16px;
  text-align: center;
`;

const ProductCard = ({ product }) => {
    return (
        <Card>
            <img src={https://source.unsplash.com/random/150x150?sig=${product.id}} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Company: {product.company}</p>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>Discount: {product.discount}%</p>
            <p>Available: {product.available ? 'Yes' : 'No'}</p>
            <Link to={/product/${product.id}}>View Details</Link>
        </Card>
    );
};

export default ProductCard;