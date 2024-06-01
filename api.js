import axios from 'axios';
const API_URL = 'http://api.yourserver.com';
export const getProducts = async(filters) =>{
    const response = await axios.get('${API_URL}/products',{params:filters});
    return response.data;
};
export const getProductById = async(id) >={
    const response = await axios.get('${API_URL}/PRODUCTS/${id}');
    const response.data;
};