import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { useAuth } from "./AuthContext";

type CartItem = { id: string; name: string; qty: number };
type FavoriteItem = { id: string; name: string };

type CartContextType = {
  cart: CartItem[];
  favorites: FavoriteItem[];
  addToCart: (id: string, name: string, qty?: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  toggleFavorite: (id: string, name: string) => void;
  cartCount: number;
  isFavorite: (id: string) => boolean;
};

const CartContext = createContext<CartContextType>({} as CartContextType);

export function CartProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();

  
  const cartKey = user ? `cart:${user.id}` : null;
  const favKey = user ? `favorites:${user.id}` : null;

  const [cart, setCart] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

 
  useEffect(() => {
    if (!cartKey || !favKey) {
      setCart([]);
      setFavorites([]);
      return;
    }

    setCart(JSON.parse(localStorage.getItem(cartKey) || "[]"));
    setFavorites(JSON.parse(localStorage.getItem(favKey) || "[]"));
  }, [cartKey, favKey]);


  useEffect(() => {
    if (!cartKey) return;
    localStorage.setItem(cartKey, JSON.stringify(cart));
  }, [cart, cartKey]);

  useEffect(() => {
    if (!favKey) return;
    localStorage.setItem(favKey, JSON.stringify(favorites));
  }, [favorites, favKey]);

  const addToCart = (id: string, name: string, qty = 1) => {
    if (!user) return;
    setCart((prev) => {
      const found = prev.find((x) => x.id === id);
      return found
        ? prev.map((x) => (x.id === id ? { ...x, qty: x.qty + qty } : x))
        : [...prev, { id, name, qty }];
    });
  };

  const removeFromCart = (id: string) => {
    if (!user) return;
    setCart((prev) => prev.filter((x) => x.id !== id));
  };

  const clearCart = () => {
    if (!user) return;
    setCart([]);
  };

  const toggleFavorite = (id: string, name: string) => {
    if (!user) return;
    setFavorites((prev) =>
      prev.some((f) => f.id === id)
        ? prev.filter((f) => f.id !== id)
        : [...prev, { id, name }]
    );
  };

  const isFavorite = (id: string) => favorites.some((f) => f.id === id);
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        favorites,
        addToCart,
        removeFromCart,
        clearCart,
        toggleFavorite,
        cartCount,
        isFavorite,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
