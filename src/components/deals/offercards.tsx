import Image from 'next/image';
import Link from 'next/link';
import { FaWindows, FaApple } from 'react-icons/fa';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

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
          <Card key={offer.id} className="pt-0 hover:shadow-lg transition-shadow">
            <Link href={`/deal/${offer.slug}`}>
              {offer.imageUrl ? (
                <div className="relative h-48 w-full">
                  <Image 
                    src={offer.imageUrl} 
                    alt={offer.title}
                    priority={false}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
              ) : (
                <div className="bg-muted h-48 flex items-center justify-center rounded-t-lg">
                  <span className="text-muted-foreground">Product Image</span>
                </div>
              )}
            </Link>
            
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg hover:underline">
                    <Link href={`/deal/${offer.slug}`}>{offer.title}</Link>
                  </CardTitle>
                  {offer.subtitle && (
                    <CardDescription className="mt-1">{offer.subtitle}</CardDescription>
                  )}
                </div>
                {(offer.isWindows || offer.isMac) && (
                  <div className="flex space-x-2">
                    {offer.isWindows && <FaWindows className="text-blue-500" size={20} />}
                    {offer.isMac && <FaApple className="text-gray-700" size={20} />}
                  </div>
                )}
              </div>
            </CardHeader>
            
            <CardContent>
              {offer.description && (
                <p className="text-sm text-muted-foreground mb-3">{offer.description}</p>
              )}
              
              {offer.location && (
                <p className="text-xs text-muted-foreground mb-4">{offer.location}</p>
              )}
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm line-through text-muted-foreground">{offer.originalPrice}</span>
                  <span className="font-bold text-primary">{offer.discountedPrice}</span>
                  <Badge variant="destructive">{offer.discountPercentage}</Badge>
                </div>
                <p className="text-sm">
                  <span className="font-medium">{offer.finalPrice}</span> with code{' '}
                  <span className="font-bold text-primary">{offer.couponCode}</span>
                </p>
              </div>
            </CardContent>
            
            <CardFooter className="flex justify-between">
              {offer.whatsIncluded && (
                <Button variant="link" className="p-0 h-auto text-primary">
                  {offer.whatsIncluded}
                </Button>
              )}
              {offer.website && (
                <a href="#" className="text-sm text-muted-foreground hover:underline">
                  {offer.website}
                </a>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OfferCards;