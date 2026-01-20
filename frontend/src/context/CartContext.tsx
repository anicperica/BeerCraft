import { createContext, useContext, useEffect, useMemo, useState } from "react";
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

 
  const cartKey = useMemo(() => (user ? `cart:${user.id}` : "cart:guest"), [user]);
  const favKey = useMemo(
    () => (user ? `favorites:${user.id}` : "favorites:guest"),
    [user]
  );


  const [cart, setCart] = useState<CartItem[]>(
    () => JSON.parse(localStorage.getItem(cartKey) || "[]")
  );

  const [favorites, setFavorites] = useState<FavoriteItem[]>(
    () => JSON.parse(localStorage.getItem(favKey) || "[]")
  );


  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem(cartKey) || "[]"));
    setFavorites(JSON.parse(localStorage.getItem(favKey) || "[]"));
  }, [cartKey, favKey]);

 
  useEffect(() => {
    localStorage.setItem(cartKey, JSON.stringify(cart));
  }, [cart, cartKey]);

  useEffect(() => {
    localStorage.setItem(favKey, JSON.stringify(favorites));
  }, [favorites, favKey]);

  const addToCart = (id: string, name: string, qty = 1) => {
    setCart((prev) => {
      const found = prev.find((x) => x.id === id);
      return found
        ? prev.map((x) => (x.id === id ? { ...x, qty: x.qty + qty } : x))
        : [...prev, { id, name, qty }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((x) => x.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleFavorite = (id: string, name: string) => {
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
