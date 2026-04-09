import { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';

const FoodDisplay = ({ category }) => {
    const context = useContext(StoreContext);

    if (!context) return <div>Loading...</div>;

    const { food_list } = context;

    return (
        <div className='food-display' id='food-display'>
            <h2>Top dishes near you</h2>

            {food_list.map((item, index) => {
                if (category === "All" || category === item.category) {
                    return (
                        <div key={index}>
                            <img src={item.image} alt={item.name} width="100" />
                            <p>{item.name}</p>
                        </div>
                    );
                }
                return null;
            })}
        </div>
    );
};

export default FoodDisplay;