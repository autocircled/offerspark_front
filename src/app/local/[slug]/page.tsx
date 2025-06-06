/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Image from 'next/image';
import Link from 'next/link';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FiSearch, FiChevronDown, FiFilter, FiClock, FiGift } from 'react-icons/fi';

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
      <div className="text-sm text-gray-500 mb-4">
        <span className="hover:text-red-600 cursor-pointer">Home</span> &gt; 
        <span className="text-gray-700"> Goods</span>
      </div>

      {/* Page Title */}
      <h1 className="text-2xl font-bold mb-6">&lt; Groupon Goods in Chicago &gt;</h1>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Filters Sidebar */}
        <div className="lg:w-1/4">
          <div className="bg-white rounded-lg shadow-sm p-4 sticky top-4">
            {/* Categories */}
            <div className="mb-6">
              <h3 className="font-bold text-lg mb-3">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <button className={`flex justify-between items-center w-full text-left py-1 px-2 rounded ${index === 0 ? 'bg-red-100 text-red-600 font-medium' : 'hover:bg-gray-50'}`}>
                      <span>{category.name}</span>
                      {category.count && <span className="text-gray-500 text-sm">{category.count}</span>}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Filters Header */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg">Filters</h3>
              <button className="text-sm text-red-600 hover:underline">Hide filters</button>
            </div>

            {/* Brand Filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-2">Brand</h4>
              <div className="relative mb-3">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md text-sm"
                />
                <FiSearch className="absolute left-3 top-3 text-gray-400" />
              </div>
              <ul className="space-y-2 max-h-60 overflow-y-auto">
                {brands.map((brand, index) => (
                  <li key={index}>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded text-red-600" />
                      <span>{brand}</span>
                    </label>
                  </li>
                ))}
              </ul>
              <button className="text-sm text-red-600 hover:underline mt-2">Show more</button>
            </div>

            {/* Price Filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-2">Price</h4>
              <div className="space-y-2">
                {['Under $25', '$25 to $50', '$50 to $100', 'Over $100'].map((range, index) => (
                  <div key={index}>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded text-red-600" />
                      <span>{range}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Special Filters */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <FiClock className="text-gray-500" />
                <span>On Time for Father's Day</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiGift className="text-gray-500" />
                <span>Popular Gift</span>
              </div>
            </div>
          </div>
        </div>

        {/* Deals Grid */}
        <div className="lg:w-3/4">
          {/* Results Info */}
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-600">1,000+ deals</p>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <button className="flex items-center text-sm font-medium">
                Most Popular <FiChevronDown className="ml-1" />
              </button>
            </div>
          </div>

          {/* Deals Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {deals.map((deal) => (
              <div key={deal.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                {/* Deal Image */}
                <div className="bg-gray-200 h-48 flex items-center justify-center relative">
                  <Link href={`/deal/${deal.slug}`} className="absolute top-0 left-0 w-full h-full">
                    {deal.image ? <Image src={deal.image} alt={deal.title} width={400} height={400} /> : <span className="text-gray-500">Product Image</span>}
                    
                    {deal.isPopularGift && (
                      <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded-full text-xs flex items-center">
                        <FiGift className="mr-1 text-red-500" />
                        <span>Popular Gift</span>
                      </div>
                    )}
                  </Link>
                </div>

                {/* Deal Info */}
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1 line-clamp-2">{deal.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-1">{deal.subtitle}</p>
                  
                  {/* Price Info */}
                  <div className="mb-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-400 line-through">{deal.originalPrice}</span>
                      <span className="text-red-600 font-bold">{deal.discountedPrice}</span>
                      <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded text-xs font-bold">
                        {deal.discountPercentage}
                      </span>
                    </div>
                    {deal.isLimitedTime && (
                      <p className="text-xs text-red-600 mt-1">Limited time</p>
                    )}
                    <p className="text-sm mt-1">
                      <span className="font-medium">{deal.finalPrice}</span> with code <span className="font-bold">{deal.couponCode}</span>
                    </p>
                  </div>

                  {/* View Deal Button */}
                  <Link href={`/deal/${deal.slug}`} className="w-full block text-center bg-red-600 hover:bg-red-700 text-white font-medium py-2 rounded transition">View Deal</Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <nav className="flex items-center space-x-2">
              <button className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-50">
                Previous
              </button>
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={`px-3 py-1 rounded ${page === 1 ? 'bg-red-600 text-white' : 'border border-gray-300 text-gray-600 hover:bg-gray-50'}`}
                >
                  {page}
                </button>
              ))}
              <button className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-50">
                Next
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryView;