"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { FiUser } from "react-icons/fi";

export function SignInDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="hover:bg-gray-100">
            <FiUser className="h-5 w-5" />
          Sign In
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 p-4">
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Welcome to OfferSpark</h3>
          <p className="text-sm text-muted-foreground">
            Access all OfferSpark has to offer
          </p>

          <div className="space-y-2">
            <Button variant="outline" className="w-full">
              <FaFacebook className="mr-2 text-blue-600" />
              Continue with Facebook
            </Button>
            <Button variant="outline" className="w-full">
              <FaGoogle className="mr-2 text-red-500" />
              Continue with Google
            </Button>
            <Button variant="outline" className="w-full">
              <FaApple className="mr-2 text-black" />
              Continue with Apple
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or sign in with email
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Enter your email" />
            <Button className="w-full">Continue</Button>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              By clicking an option above, I agree to the Terms and Conditions and
              have read the Privacy Statement.
            </label>
          </div>

          <Separator />

          <div className="flex justify-between text-sm">
            <Button variant="link" className="p-0 h-auto text-muted-foreground">
              My Wishlist
            </Button>
            <Button variant="link" className="p-0 h-auto text-muted-foreground">
              Recently Viewed
            </Button>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}