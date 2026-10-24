import { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext(null);

const STORAGE_KEY = 'bigdaddy_cart';

function loadCart() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

function saveCart(items) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // Storage unavailable
  }
}

function cartReducer(state, action) {
  let newState;

  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, size, color, quantity = 1 } = action.payload;
      const itemKey = `${product.id}-${size}-${color}`;
      const existingIndex = state.findIndex((item) => item.key === itemKey);

      if (existingIndex >= 0) {
        newState = state.map((item, i) =>
          i === existingIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        newState = [
          ...state,
          {
            key: itemKey,
            product,
            size,
            color,
            quantity,
          },
        ];
      }
      break;
    }
    case 'REMOVE_ITEM': {
      newState = state.filter((item) => item.key !== action.payload);
      break;
    }
    case 'UPDATE_QUANTITY': {
      const { key, quantity } = action.payload;
      if (quantity <= 0) {
        newState = state.filter((item) => item.key !== key);
      } else {
        newState = state.map((item) =>
          item.key === key ? { ...item, quantity } : item
        );
      }
      break;
    }
    case 'CLEAR_CART': {
      newState = [];
      break;
    }
    default:
      return state;
  }

  saveCart(newState);
  return newState;
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, [], loadCart);

  useEffect(() => {
    saveCart(items);
  }, [items]);

  const addItem = (product, size, color, quantity = 1) => {
    dispatch({ type: 'ADD_ITEM', payload: { product, size, color, quantity } });
  };

  const removeItem = (key) => {
    dispatch({ type: 'REMOVE_ITEM', payload: key });
  };

  const updateQuantity = (key, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { key, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const subtotal = items.reduce((sum, item) => {
    const price = item.product.price ?? 0;
    return sum + price * item.quantity;
  }, 0);

  const hasConfiguredPrices = items.every((item) => item.product.price != null);

  return (
    <CartContext.Provider
      value={{
        items,
        itemCount,
        subtotal,
        hasConfiguredPrices,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
