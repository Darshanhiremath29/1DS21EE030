import React from 'react';
import ProductCard from './ProductCard';
import styled from 'styled-components';

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ProductGrid = ({ products }) => {
    return (
        <Grid>
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </Grid>
    );
};

export default ProductGrid;