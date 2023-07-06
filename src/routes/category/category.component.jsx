/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selector';

import { useParams } from 'react-router-dom';
import './category.styles.scss';
import { useEffect, useState } from 'react';
import ProductCard from '../../components/product-card/product-card.component';

const Category = () => {
    const { category } = useParams();
    console.log('Catefory render')
    const categoriesMap = useSelector(selectCategoriesMap);

    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        console.log('from Category effect setProducts')
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (<>
        <h2 className='category-title'>{category.toUpperCase()}</h2>
        <div className="category-container">

            {products && products.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
    </>
    );
};

export default Category;