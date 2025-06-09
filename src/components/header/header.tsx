'use client';

import Link from 'next/link';
import { useState } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FiSearch, FiMenu, FiX, FiUser, FiShoppingCart } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('Chicago');

  const navItems = [
    { label: "Father's Day", slug: "/local/fathers-day" },
    { label: "Beauty & Spas", slug: "/local/beauty-and-spas" },
    { label: "Things To Do", slug: "/local/things-to-do" },
    { label: "Auto & Home", slug: "/local/auto-and-home" },
    { label: "Food & Drink", slug: "/local/food-and-drink" },
    { label: "Gifts", slug: "/local/gifts" },
    { label: "Local", slug: "/local/local" },
    { label: "Travel", slug: "/local/travel" },
    { label: "Goods", slug: "/local/goods" },
    { label: "Coupons", slug: "/local/coupons" }
  ];

  return (
    <header className="bg-background shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="container px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Mobile Menu Button and Logo */}
          <div className="flex items-center gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <FiMenu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="sm:max-w-xs">
                <ScrollArea className="h-full">
                  <div className="space-y-4 py-4">
                    <div className="px-4">
                      <Link href="/">
                        <h1 className="text-2xl font-bold text-primary">OfferSpark</h1>
                      </Link>
                    </div>
                    <div className="px-4 space-y-2">
                      <Input
                        placeholder="Search for deals"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      <Select value={location} onValueChange={setLocation}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Chicago">Chicago</SelectItem>
                          <SelectItem value="New York">New York</SelectItem>
                          <SelectItem value="Los Angeles">Los Angeles</SelectItem>
                          <SelectItem value="San Francisco">San Francisco</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <nav className="space-y-1 px-2">
                      {navItems.map((item, index) => (
                        <Button
                          key={index}
                          variant="ghost"
                          className="w-full justify-start"
                          asChild
                        >
                          <Link href={item.slug}>{item.label}</Link>
                        </Button>
                      ))}
                      <Button variant="ghost" className="w-full justify-start">
                        <FiUser className="mr-2 h-4 w-4" />
                        Sign In
                      </Button>
                    </nav>
                  </div>
                </ScrollArea>
              </SheetContent>
            </Sheet>

            <Link href="/">
              <h1 className="text-2xl font-bold text-primary">OfferSpark</h1>
            </Link>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-2xl">
            <div className="relative flex w-full">
              <Input
                placeholder="Search for deals"
                className="rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="relative">
                <Select value={location} onValueChange={setLocation}>
                  <SelectTrigger className="w-[180px] rounded-l-none border-l-0">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Chicago">Chicago</SelectItem>
                    <SelectItem value="New York">New York</SelectItem>
                    <SelectItem value="Los Angeles">Los Angeles</SelectItem>
                    <SelectItem value="San Francisco">San Francisco</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <FiUser className="h-5 w-5" />
              <span className="sr-only">Sign In</span>
            </Button>
            <Button variant="ghost" size="icon">
              <FiShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
          </div>
        </div>

        {/* Mobile Search - Visible only on mobile */}
        <div className="mt-3 space-y-2 md:hidden">
          <div className="relative">
            <Input
              placeholder="Search for deals"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FiSearch className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
          </div>
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger>
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Chicago">Chicago</SelectItem>
              <SelectItem value="New York">New York</SelectItem>
              <SelectItem value="Los Angeles">Los Angeles</SelectItem>
              <SelectItem value="San Francisco">San Francisco</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Main Navigation - Desktop */}
      <nav className="hidden md:block border-t bg-muted/40">
        <div className="container px-4">
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex space-x-6 py-2">
              {navItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="shrink-0"
                  asChild
                >
                  <Link href={item.slug}>{item.label}</Link>
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </nav>
    </header>
  );
};

export default Header;