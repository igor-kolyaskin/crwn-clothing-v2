/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from 'react';
import {
    addCollectionAndDocuments,
    getCategoryAndDocuments
} from '../utils/firebase/firebase.utils';

// import SHOP_DATA from '../shop-data.js';

export const ProductsContext = createContext({
    products: []
});
export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // }, []);

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoryAndDocuments();
            console.log('done', categoryMap);
        };
        
        getCategoriesMap()
    }, []);

    const value = { products };
    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    );
};