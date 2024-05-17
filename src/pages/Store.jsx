import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../lib/fakeStore';
import ItemCard from '../components/ItemCard';

const Store = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then((data) => setProducts(data))
            .catch((error) => console.error(error));
    }, []);
    return (
        <div>
            <h1>Store Page</h1>
            {products &&
                products.map((product) => {
                    return (
                        <div key={product.id}>
                            <Link to={`/store/${product.id}`}>
                                <ItemCard {...product} />
                            </Link>
                        </div>
                    );
                })}
        </div>
    );
};

export default Store;
