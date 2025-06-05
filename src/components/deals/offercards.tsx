import Image from 'next/image';
import Link from 'next/link';
import { FaWindows, FaApple } from 'react-icons/fa';

interface Offer {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  location: string;
  originalPrice: string;
  discountedPrice: string;
  discountPercentage: string;
  finalPrice: string;
  couponCode: string;
  whatsIncluded?: string;
  website?: string;
  isWindows?: boolean;
  isMac?: boolean;
  imageUrl?: string;
}

const OfferCards = () => {
  const offers: Offer[] = [
  {
    id: 1,
    slug: "office-professional-plus-2021",
    title: "Office Professional Plus 2021",
    subtitle: "Office 2021, 2019, 2018 Lifetime Use for Windows or MAC",
    description: "Office Lifetime Access for One PC or Mac",
    location: "El Paso, Dover",
    originalPrice: "$99",
    discountedPrice: "$12.90",
    discountPercentage: "-87%",
    finalPrice: "$10.32",
    couponCode: "DA025",
    whatsIncluded: "What's included",
    website: "www.wmrc.com",
    isWindows: true,
    isMac: true,
    imageUrl: "https://images.unsplash.com/photo-1694395998892-5225e95b8a47?q=80&w=400"
  },
  {
    id: 2,
    slug: "microsoft-windows-11-professional",
    title: "Microsoft Windows 11 Professional",
    subtitle: "Microsoft Windows 11 Professional or Home – Lifetime Activation",
    description: "Microsoft Windows 11 Professional",
    location: "", // added
    originalPrice: "$169.99",
    discountedPrice: "$11.90",
    discountPercentage: "-84%",
    finalPrice: "$9.52",
    couponCode: "DA025",
    isWindows: true,
    imageUrl: "https://images.unsplash.com/photo-1611403570720-162d8829689a?q=80&w=400"
  },
  {
    id: 3,
    slug: "microsoft-office-lifetime-for-pc-or-mac",
    title: "Microsoft Office Lifetime for PC or Mac",
    subtitle: "Up to 92% Off on Microsoft Office Lifetime 2019 or 2021 for PC or Mac",
    description: "", // added
    location: "11380 Palazzo Rosta San Diego",
    originalPrice: "$149",
    discountedPrice: "$12.50",
    discountPercentage: "-37%",
    finalPrice: "$10",
    couponCode: "DA025",
    isWindows: true,
    isMac: true,
    // imageUrl: "https://images.unsplash.com/photo-1694395998892-5225e95b8a47?q=80&w=400"
  },
  {
    id: 4,
    slug: "semaglutide-or-tirzepatide-weight-loss-program-with-consultation",
    title: "Semaglutide or Tirzepatide Weight Loss Program with Consultation",
    subtitle: "GameloRX",
    description: "", // added
    location: "", // added
    originalPrice: "$299",
    discountedPrice: "$60",
    discountPercentage: "-48%",
    finalPrice: "$45",
    couponCode: "DA025",
    imageUrl: "https://images.unsplash.com/photo-1609017604163-e4ca9c619b9b?q=80&w=400"
  },
  {
    id: 5,
    slug: "up-to-90-off-on-house-room-cleaning-at-small-home-sweet-home-cleaning-services",
    title: "Up to 90% Off on House / Room Cleaning at Small Home Sweet Home Cleaning Services*",
    subtitle: "Small Home Sweet Home Cleaning Services",
    description: "", // added
    location: "", // added
    originalPrice: "$125",
    discountedPrice: "$85",
    discountPercentage: "-33%",
    finalPrice: "$68",
    couponCode: "DA025",
    imageUrl: "https://images.unsplash.com/photo-1527264935190-1401c51b5bbc?q=80&w=400"
  },
  {
    id: 6,
    slug: "elegant-canvas-prints-for-the-perfect-home-accent",
    title: "Elegant Canvas Prints for the Perfect Home Accent",
    subtitle: "Custom Premium Canvas from Canvas On Demand",
    description: "", // added
    location: "", // added
    originalPrice: "$95",
    discountedPrice: "$7.50",
    discountPercentage: "-27%",
    finalPrice: "$6",
    couponCode: "DA025",
    imageUrl: "https://images.unsplash.com/photo-1694395998892-5225e95b8a47?q=80&w=400"
  }
];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Today&apos;s Top Deals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {offers.map((offer) => (
          <div key={offer.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            {/* Offer Image Placeholder */}
            <Link href={`/deal/${offer.slug}`}>
              {offer.imageUrl 
              ? <Image src={offer.imageUrl} alt="Offer Image" width={400} height={400} className="w-full h-48 object-cover" />
              : <div className="bg-gray-200 h-48 flex items-center justify-center">
                <span className="text-gray-500">Product Image</span>
              </div>}
            </Link>
            <div className="p-4">
              {/* Title and Icons */}
              <div className="flex justify-between items-start mb-2">
                <Link href={`/deal/${offer.slug}`}><h3 className="font-bold text-lg">{offer.title}</h3></Link>
                {(offer.isWindows || offer.isMac) && (
                  <div className="flex space-x-2">
                    {offer.isWindows && <FaWindows className="text-blue-500" size={20} />}
                    {offer.isMac && <FaApple className="text-gray-700" size={20} />}
                  </div>
                )}
              </div>
              
              {/* Subtitle */}
              {offer.subtitle && (
                <p className="text-gray-600 text-sm mb-2">{offer.subtitle}</p>
              )}
              
              {/* Description */}
              {offer.description && (
                <p className="text-gray-700 mb-2">{offer.description}</p>
              )}
              
              {/* Location */}
              {offer.location && (
                <p className="text-gray-500 text-sm mb-3">{offer.location}</p>
              )}
              
              {/* Price Information */}
              <div className="mb-3">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400 line-through">{offer.originalPrice}</span>
                  <span className="text-red-600 font-bold">{offer.discountedPrice}</span>
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-bold">
                    {offer.discountPercentage}
                  </span>
                </div>
                <p className="text-sm mt-1">
                  <span className="font-medium">{offer.finalPrice}</span> with code <span className="font-bold">{offer.couponCode}</span>
                </p>
              </div>
              
              {/* Additional Info */}
              <div className="flex justify-between items-center text-sm">
                {offer.whatsIncluded && (
                  <a href="#" className="text-blue-600 hover:underline">{offer.whatsIncluded}</a>
                )}
                {offer.website && (
                  <a href="#" className="text-gray-500 hover:underline">{offer.website}</a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferCards;