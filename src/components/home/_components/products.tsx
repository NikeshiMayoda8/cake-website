import React from "react";

export const Product: React.FC = () => {
  const products = [
    {
      name: "Chocolate Delight",
      image: "/images/chocolate_delight.jpg",
      pound: "1KG",
      amount: "Rs 4,500",
      buttonLabel: "Order Now",
    },
    {
      name: "Vanilla Dream",
      image: "/images/vanila_dream.jpg",
      pound: "1KG",
      amount: "Rs 4,000",
      buttonLabel: "Order Now",
    },
    {
      name: "Strawberry Surprise",
      image: "/images/cofee.jpg",
      pound: "1KG",
      amount: "Rs 4,900",
      buttonLabel: "Order Now",
    },
    {
      name: "Chocolate Delight",
      image: "/images/choco.jpg",
      pound: "1KG",
      amount: "Rs 4,500",
      buttonLabel: "Order Now",
    },
    {
      name: "Vanilla Dream",
      image: "/images/oreo.jpg",
      pound: "1KG",
      amount: "Rs 4,000",
      buttonLabel: "Order Now",
    },
    {
      name: "Strawberry Surprise",
      image: "/images/strawberry-cake.jpg",
      pound: "1KG",
      amount: "Rs 4,900",
      buttonLabel: "Order Now",
    },
  ];

  return (
    <div className="products-container">
      <div className="product-title">
        <h3>
          <b>Select Your Choice</b>
        </h3>
      </div>
      <div className="products">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3>{product.name}</h3>
            <h4>{product.pound}</h4>
            <h4>{product.amount}</h4>
            <button>{product.buttonLabel}</button>
          </div>
        ))}
      </div>
    </div>
  );
};
