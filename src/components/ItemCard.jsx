const ItemCard = ({ title, description, price, image }) => {
    return (
        <div>
            <h3>{title}</h3>
            <ul>
                <li>{description}</li>
                <li>${price}</li>
                <li>
                    <img src={image} alt={title} />
                </li>
            </ul>
        </div>
    );
};

export default ItemCard;
