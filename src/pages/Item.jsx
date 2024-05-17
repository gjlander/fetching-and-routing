import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../lib/fakeStore';
import ItemCard from '../components/ItemCard';

const Item = () => {
    const [item, setItem] = useState({});
    const { productId } = useParams();

    useEffect(() => {
        getProductById(productId)
            .then((data) => setItem(data))
            .catch((error) => console.error(error));
    }, [productId]);
    return (
        <div>
            <h3>Item Page</h3>
            <ItemCard {...item} />
        </div>
    );
};

export default Item;
