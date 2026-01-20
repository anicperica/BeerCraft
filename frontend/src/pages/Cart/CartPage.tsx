
import { useCart } from "../../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div className="min-h-screen bg-zinc-950 pt-[120px] px-4 py-8 text-gray-200">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Cart</h1>

        {cart.length === 0 ? (
          <p className="text-zinc-400">Cart is empty.</p>
        ) : (
          <>
            <div className="space-y-3">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-zinc-900 border border-zinc-800 rounded-xl p-4"
                >
                  <div>
                    <div className="font-semibold text-white">{item.name}</div>
                    <div className="text-sm text-zinc-400">Quantity: {item.qty}</div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="px-3 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white"
                    type="button"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={clearCart}
              className="mt-6 w-full py-3 rounded-xl bg-amber-400 text-black font-semibold hover:bg-amber-500"
              type="button"
            >
              Check-out (clear cart)
            </button>
          </>
        )}
      </div>
    </div>
  );
}
