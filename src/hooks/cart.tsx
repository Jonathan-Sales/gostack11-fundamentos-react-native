import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
  quantity: number;
}

interface CartContext {
  products: Product[];
  addToCart(item: Omit<Product, 'quantity'>): void;
  increment(id: string): void;
  decrement(id: string): void;
}

const CartContext = createContext<CartContext | null>(null);

const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const storagedProducts = await AsyncStorage.getItem(
        '@GOMARKETPLACE/products',
      );

      if (storagedProducts) {
        setProducts(JSON.parse(storagedProducts));
      }
    }

    loadProducts();
  }, []);

  useEffect(() => {
    products.length > 0
      ? AsyncStorage.setItem(
          '@GOMARKETPLACE/products',
          JSON.stringify(products),
        )
      : AsyncStorage.removeItem('@GOMARKETPLACE/products');
  }, [products]);

  const addToCart = useCallback(
    async product => {
      const productAlreadyAdded = products.find(item => item.id === product.id);

      if (productAlreadyAdded) {
        const addedQuantityToProduct = products.map(item => {
          return item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
        setProducts(addedQuantityToProduct);
      } else {
        const newProduct = {
          ...product,
          quantity: 1,
        };

        setProducts([...products, newProduct]);
      }
    },
    [products],
  );

  const increment = useCallback(
    async id => {
      const incrementProductQuantity = products.map(item => {
        return item.id === id ? { ...item, quantity: item.quantity + 1 } : item;
      });
      setProducts(incrementProductQuantity);
    },
    [products],
  );

  const decrement = useCallback(
    async id => {
      const productToDecrement = products.find(item => item.id === id);

      if (!productToDecrement) return;

      if (productToDecrement.quantity === 1) {
        const productsUpdated = products.filter(item => item.id !== id);

        setProducts(productsUpdated);
        return;
      }

      const decrementProductQuantity = products.map(item => {
        return item.id === id ? { ...item, quantity: item.quantity - 1 } : item;
      });

      setProducts(decrementProductQuantity);
    },
    [products],
  );

  const value = React.useMemo(
    () => ({ addToCart, increment, decrement, products }),
    [products, addToCart, increment, decrement],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart(): CartContext {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}

export { CartProvider, useCart };
