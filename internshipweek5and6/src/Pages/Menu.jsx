import React, { useState, useEffect } from 'react';
import '../Styles/Menu.css';

const menuItems = [
  {
    id: 1,
    name: "Chicken Biryani",
    price: "150",
    description: "Aromatic basmati rice cooked with tender chicken pieces and a blend of spices.",
    image: "https://content.jdmagicbox.com/comp/coimbatore/w4/0422px422.x422.190516165526.g6w4/catalogue/hyderabad-biriyani-hotel-gandhipuram-coimbatore-coimbatore-caterers-upto-50-persons--qin8rdeifa.jpg"
  },
  {
    id: 2,
    name: "Paneer Butter Masala",
    price: "120",
    description: "Soft paneer cubes cooked in a rich and creamy tomato-based gravy.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShiA0yHJbLqyIFgIiOfQVlvk2r8Q50fyU02w&s"
  },
  {
    id: 3,
    name: "Veg Thali",
    price: "100",
    description: "A wholesome meal with rice, roti, dal, and vegetable curries.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2N3Y4SFml2nuT6680LYZ2VaUnlbNiUI3Xdg&s"
  },
  {
    id: 4,
    name: "Chicken Curry",
    price: "130",
    description: "Spicy chicken curry cooked with a blend of Indian spices.",
    image: "https://example.com/images/chicken_curry.jpg"
  },
  {
    id: 5,
    name: "Dal Makhani",
    price: "90",
    description: "Creamy and buttery black lentil curry.",
    image: "https://example.com/images/dal_makhani.jpg"
  },
  {
    id: 6,
    name: "Aloo Paratha",
    price: "50",
    description: "Stuffed Indian flatbread with spiced potato filling.",
    image: "https://example.com/images/aloo_paratha.jpg"
  },
  {
    id: 7,
    name: "Butter Naan",
    price: "40",
    description: "Soft and fluffy Indian flatbread with butter.",
    image: "https://example.com/images/butter_naan.jpg"
  },
  {
    id: 8,
    name: "Gulab Jamun",
    price: "60",
    description: "Soft and spongy milk-based sweets soaked in sugar syrup.",
    image: "https://example.com/images/gulab_jamun.jpg"
  }
];

function Menu() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setItems(menuItems);
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="menu-container">
      <h2>Menu</h2>
      <input
        type="text"
        placeholder="Search for dishes..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar"
      />
      <ul className="menu-list">
        {filteredItems.map((item) => (
          <li key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} className="menu-item-image" />
            <div className="menu-item-details">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p><strong>Price:</strong> ₹{item.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
