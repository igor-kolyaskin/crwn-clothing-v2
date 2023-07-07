/* eslint-disable no-unused-vars */
import { Routes, Route } from 'react-router-dom';
import './shop.styles.scss';

import CategoriesPreview from '../../components/categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { useEffect } from 'react';
import { getCategoryAndDocuments } from '../../utils/firebase/firebase.utils';
import { setCategories } from '../../store/categories/category.action';
import { useDispatch } from 'react-redux';

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoriesArray = await getCategoryAndDocuments();
            dispatch(setCategories(categoriesArray));
        };

        getCategoriesMap();
    }, []);

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    );
};

export default Shop;