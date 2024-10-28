import React, { createContext, useContext, useState } from 'react';


const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    const addItem = (product) => {
        setItems((prevItems) => {
            const existingItem = prevItems.find(item => item.id === product.id);

            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }

            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    const removeItem = (productId) => {
        setItems((prevItems) => {
            const existingItem = prevItems.find(item => item.id === productId);

            if (existingItem.quantity > 1) {
                return prevItems.map(item =>
                    item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
                );
            }

            return prevItems.filter(item => item.id !== productId);
        });
    };

    const getTotalItems = () => {
        return items.reduce((total, item) => total + item.quantity, 0);
    };

    const valorTotal = () => {
        return items.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    return (
        <CartContext.Provider value={{ items, addItem, removeItem, getTotalItems, valorTotal }}>
            {children}
        </CartContext.Provider>
    );
};
