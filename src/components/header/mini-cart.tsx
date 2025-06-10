"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export function CartDropdown() {
  // Sample cart data - replace with your actual cart state
  const cartItems = [
    {
      id: 1,
      name: "Office Professional Plus 2021",
      price: "$12.90",
      quantity: 1,
      image: "https://images.unsplash.com/photo-1694395998892-5225e95b8a47?q=80&w=400"
    },
    {
      id: 2,
      name: "Wireless Bluetooth Earbuds",
      price: "$39.99",
      quantity: 2,
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=400"
    }
  ];

  const cartTotal = cartItems.reduce((total, item) => {
    return total + (parseFloat(item.price.replace('$', '')) * item.quantity);
  }, 0);

  const isCartEmpty = cartItems.length === 0;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {!isCartEmpty && (
            <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 p-4" align="end">
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Your Cart</h3>

          {isCartEmpty ? (
            <div className="space-y-4 text-center">
              <p className="text-muted-foreground">Your shopping cart is empty</p>
              <Button asChild className="w-full">
                <Link href="/deals">Continue Shopping</Link>
              </Button>
              <Separator />
              <Button variant="link" className="w-full">
                Sign In
              </Button>
            </div>
          ) : (
            <>
              <div className="max-h-60 overflow-y-auto space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {item.price} × {item.quantity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <Separator />
                <div className="flex justify-between font-medium">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <Button asChild className="w-full">
                  <Link href="/checkout">Proceed to Checkout</Link>
                </Button>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/cart">View Cart</Link>
                </Button>
              </div>
            </>
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}