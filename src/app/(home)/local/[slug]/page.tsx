import Image from 'next/image';
import Link from 'next/link';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FiSearch, FiChevronDown, FiFilter, FiClock, FiGift } from 'react-icons/fi';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

interface Deal {
  id: number;
  title: string;
  slug: string;
  image?: string;
  subtitle?: string;
  originalPrice: string;
  discountedPrice: string;
  discountPercentage: string;
  finalPrice: string;
  couponCode: string;
  isLimitedTime: boolean;
  isPopularGift: boolean;
}

const CategoryView = () => {
  const categories = [
    { name: "All", count: null },
    { name: "Personalized Items", count: 449 },
    { name: "Health & Beauty Products", count: "500+" },
    { name: "For the Home", count: "500+" },
    { name: "Women's Fashion", count: "500+" },
    { name: "Electronics", count: "500+" },
  ];

  const brands = [
    "MountTek",
    "Paris Jewelry",
    "Calvin Klein",
    "Samsung",
    "Nike",
    "Adidas",
    "Apple",
    "Sony"
  ];

  const deals: Deal[] = [
    {
      id: 1,
      title: "Up to 94% Off Custom Canvas",
      slug: "up-to-94-off-custom-canvas",
      image: "https://images.unsplash.com/photo-1694395998892-5225e95b8a47?q=80&w=400",
      subtitle: "Custom Canvas",
      originalPrice: "$69.40",
      discountedPrice: "$6",
      discountPercentage: "-84%",
      finalPrice: "$4.86",
      couponCode: "DAD25",
      isLimitedTime: true,
      isPopularGift: false
    },
    {
      id: 2,
      title: "Elegant Canvas Prints for the Perfect Home Accent",
      slug: "elegant-canvas-prints-for-the-perfect-home-accent",
      image: "https://images.unsplash.com/photo-1694395998892-5225e95b8a47?q=80&w=400",
      subtitle: "Custom Premium Canvas from ★ Canvas ...",
      originalPrice: "$35",
      discountedPrice: "$7.50",
      discountPercentage: "-81%",
      finalPrice: "$6.07",
      couponCode: "DAD25",
      isLimitedTime: true,
      isPopularGift: false
    },
    {
      id: 3,
      title: "Up to 85% Off a Custom Canvas Print from CanvasOnSale",
      slug: "up-to-85-off-a-custom-canvas-print-from-canvasonsale",
      // image: "https://images.unsplash.com/photo-1694395998892-5225e95b8a47?q=80&w=400",
      subtitle: "One Custom 24\"x16\", 30\"x24\", 36\"x24\" C...",
      originalPrice: "$109",
      discountedPrice: "$20.99",
      discountPercentage: "-83%",
      finalPrice: "$17",
      couponCode: "DAD25",
      isLimitedTime: true,
      isPopularGift: true
    },
    {
      id: 4,
      title: "Personalized Photo Blanket - 50\"x60\"",
      slug: "personalized-photo-blanket-50x60",
      image: "https://images.unsplash.com/photo-1694395998892-5225e95b8a47?q=80&w=400",
      subtitle: "Custom Printed Fleece Blanket",
      originalPrice: "$89",
      discountedPrice: "$29.99",
      discountPercentage: "-66%",
      finalPrice: "$25.49",
      couponCode: "DAD25",
      isLimitedTime: false,
      isPopularGift: true
    },
    {
      id: 5,
      title: "Wireless Bluetooth Earbuds - Noise Cancelling",
      slug: "wireless-bluetooth-earbuds-noise-cancelling",
      image: "https://images.unsplash.com/photo-1694395998892-5225e95b8a47?q=80&w=400",
      subtitle: "Premium Sound Quality, 30hr Battery",
      originalPrice: "$129.99",
      discountedPrice: "$39.99",
      discountPercentage: "-69%",
      finalPrice: "$33.99",
      couponCode: "DAD25",
      isLimitedTime: true,
      isPopularGift: false
    },
    {
      id: 6,
      title: "Luxury Skincare Set - Anti-Aging Collection",
      slug: "luxury-skincare-set-anti-aging-collection",
      image: "https://images.unsplash.com/photo-1694395998892-5225e95b8a47?q=80&w=400",
      subtitle: "Includes Serum, Moisturizer & Eye Cream",
      originalPrice: "$199",
      discountedPrice: "$59.99",
      discountPercentage: "-70%",
      finalPrice: "$50.99",
      couponCode: "DAD25",
      isLimitedTime: false,
      isPopularGift: true
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <div className="text-sm text-muted-foreground mb-4">
        <Link href="/" className="hover:text-primary hover:underline">Home</Link> &gt; 
        <span className="text-foreground"> Goods</span>
      </div>

      {/* Page Title */}
      <h1 className="text-2xl font-bold mb-6">&lt; Groupon Goods in Chicago &gt;</h1>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Filters Sidebar */}
        <div className="lg:w-1/4">
          <Card className="sticky top-4">
            <CardContent className="pt-6">
              {/* Categories */}
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3">Categories</h3>
                <ScrollArea className="h-[200px]">
                  <ul className="space-y-1">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <Button
                          variant={index === 0 ? "secondary" : "ghost"}
                          className={`w-full justify-between ${index === 0 ? "font-medium" : ""}`}
                        >
                          <span>{category.name}</span>
                          {category.count && <span className="text-muted-foreground text-sm">{category.count}</span>}
                        </Button>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>

              <Separator className="my-4" />

              {/* Filters Header */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">Filters</h3>
                <Button variant="link" className="text-primary p-0 h-auto">
                  Hide filters
                </Button>
              </div>

              {/* Brand Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-2">Brand</h4>
                <div className="relative mb-3">
                  <Input
                    placeholder="Search"
                    className="pl-8"
                  />
                  <FiSearch className="absolute left-3 top-3 text-muted-foreground" />
                </div>
                <ScrollArea className="h-[200px]">
                  <div className="space-y-2">
                    {brands.map((brand, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Checkbox id={`brand-${index}`} />
                        <label
                          htmlFor={`brand-${index}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {brand}
                        </label>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                <Button variant="link" className="text-primary p-0 h-auto mt-2">
                  Show more
                </Button>
              </div>

              <Separator className="my-4" />

              {/* Price Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-2">Price</h4>
                <div className="space-y-2">
                  {['Under $25', '$25 to $50', '$50 to $100', 'Over $100'].map((range, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Checkbox id={`price-${index}`} />
                      <label
                        htmlFor={`price-${index}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {range}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator className="my-4" />

              {/* Special Filters */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <FiClock className="text-muted-foreground" />
                  <span>On Time for Father&apos;s Day</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FiGift className="text-muted-foreground" />
                  <span>Popular Gift</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Deals Grid */}
        <div className="lg:w-3/4">
          {/* Results Info */}
          <div className="flex justify-between items-center mb-4">
            <p className="text-muted-foreground">1,000+ deals</p>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Most Popular" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Deals Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {deals.map((deal) => (
              <Card key={deal.id} className="pt-0 hover:shadow-lg transition-shadow ">
                {/* Deal Image */}
                <Link href={`/deal/${deal.slug}`}>
                  <div className="relative h-48 w-full">
                    {deal.image ? (
                      <Image
                        src={deal.image}
                        alt={deal.title}
                        priority={false}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    ) : (
                      <div className="bg-muted h-48 flex items-center justify-center rounded-t-lg">
                        <span className="text-muted-foreground">Product Image</span>
                      </div>
                    )}
                    {deal.isPopularGift && (
                      <Badge variant="secondary" className="absolute top-2 left-2">
                        <FiGift className="mr-1 h-3 w-3 text-primary" />
                        Popular Gift
                      </Badge>
                    )}
                  </div>
                </Link>

                {/* Deal Info */}
                <CardHeader>
                  <CardTitle className="text-lg line-clamp-2">
                    <Link href={`/deal/${deal.slug}`}>{deal.title}</Link>
                  </CardTitle>
                  {deal.subtitle && (
                    <CardDescription className="line-clamp-1">{deal.subtitle}</CardDescription>
                  )}
                </CardHeader>

                <CardContent>
                  {/* Price Info */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm line-through text-muted-foreground">{deal.originalPrice}</span>
                      <span className="font-bold text-primary">{deal.discountedPrice}</span>
                      <Badge variant="destructive">{deal.discountPercentage}</Badge>
                    </div>
                    {deal.isLimitedTime && (
                      <Badge variant="outline" className="text-destructive">
                        Limited time
                      </Badge>
                    )}
                    <p className="text-sm">
                      <span className="font-medium">{deal.finalPrice}</span> with code{' '}
                      <span className="font-bold text-primary">{deal.couponCode}</span>
                    </p>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href={`/deal/${deal.slug}`}>View Deal</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center space-x-2">
              <Button variant="outline">
                Previous
              </Button>
              {[1, 2, 3, 4, 5].map((page) => (
                <Button
                  key={page}
                  variant={page === 1 ? "default" : "outline"}
                >
                  {page}
                </Button>
              ))}
              <Button variant="outline">
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryView;