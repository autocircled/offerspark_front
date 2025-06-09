import { FaWindows, FaApple, FaStar, FaRegClock, FaMapMarkerAlt, FaShare, FaHeart } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';
import ReviewModal from '@/components/deals/review-popup';

const SingleDealPage = () => {
  const deal = {
    id: 1,
    title: "Office Professional Plus 2021",
    subtitle: "Office 2021, 2019, 2018 Lifetime Use for Windows or MAC",
    description: "Get lifetime access to Microsoft Office for one PC or Mac. Includes all essential Office applications with regular updates.",
    location: "El Paso, Dover",
    originalPrice: "$99",
    discountedPrice: "$12.90",
    discountPercentage: "-87%",
    finalPrice: "$10.32",
    couponCode: "DA025",
    whatsIncluded: [
      "Word, Excel, PowerPoint, Outlook, OneNote",
      "Lifetime license for 1 device",
      "Free updates",
      "24/7 customer support"
    ],
    website: "www.wmrc.com",
    isWindows: true,
    isMac: true,
    rating: 4.8,
    reviewCount: 1243,
    timeLeft: "23:45:12",
    purchased: 5820,
    highlights: [
      "Instant digital download",
      "Money-back guarantee",
      "Works with Windows 10/11 and macOS",
      "No subscription required"
    ],
    features: [
      "Full version of Microsoft Office Professional Plus 2021",
      "Compatible with both Windows and macOS",
      "Includes all the essential applications",
      "Lifetime license - no subscription required",
      "Free updates for the 2021 version",
      "24/7 customer support"
    ],
    howItWorks: [
      "Purchase this deal and receive your activation code via email",
      "Download the Office installer from Microsoft's website",
      "Install and activate using your provided product key",
      "Enjoy your lifetime access to Microsoft Office"
    ]
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <div className="text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-primary hover:underline">Home</Link> &gt; 
        <Link href="/software" className="hover:text-primary hover:underline">Software</Link> &gt; 
        <span className="text-foreground">Office Professional Plus 2021</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column - Image Gallery */}
        <div className="lg:w-1/2">
          {/* Main Image */}
          <Card className="h-96 p-0">
            <div className="flex items-center justify-center h-full bg-muted rounded-t-lg">
              <span className="text-muted-foreground text-xl">Product Image Gallery</span>
            </div>
          </Card>
          
          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-2 mt-4">
            {[1, 2, 3, 4].map((item) => (
              <Button 
                key={item} 
                variant="outline" 
                className="h-20 bg-muted/50 hover:bg-muted"
              >
                <span className="text-xs text-muted-foreground">Thumb {item}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Right Column - Deal Info */}
        <div className="lg:w-1/2">
          {/* Title and Icons */}
          <div className="flex justify-between items-start mb-2">
            <h1 className="text-2xl font-bold">{deal.title}</h1>
            <div className="flex space-x-2">
              {deal.isWindows && <FaWindows className="text-blue-500" size={20} />}
              {deal.isMac && <FaApple className="text-foreground" size={20} />}
            </div>
          </div>
          
          {/* Subtitle */}
          <p className="text-muted-foreground text-lg mb-4">{deal.subtitle}</p>
          
          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <FaStar 
                  key={i} 
                  className={i < Math.floor(deal.rating) ? "fill-current" : "fill-muted"} 
                />
              ))}
            </div>
            <span className="font-medium">{deal.rating}</span>
            <span className="text-muted-foreground ml-2">({deal.reviewCount} reviews)</span>
          </div>
          
          {/* Price Information */}
          <Card className="mb-6 p-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="line-through text-muted-foreground text-lg">{deal.originalPrice}</span>
                  <span className="text-primary font-bold text-2xl">{deal.discountedPrice}</span>
                  <Badge variant="destructive" className="text-sm">
                    {deal.discountPercentage}
                  </Badge>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <FaRegClock className="mr-1" />
                  <span>{deal.timeLeft}</span>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-lg">
                  <span className="font-bold">{deal.finalPrice}</span> with code{' '}
                  <Badge variant="secondary" className="px-2 py-1">
                    {deal.couponCode}
                  </Badge>
                </p>
                <p className="text-green-600 font-medium">{deal.purchased} bought</p>
              </div>
              
              <div className="flex gap-3">
                <Button className="flex-1" size="lg">
                  Buy Now
                </Button>
                <Button variant="outline" size="icon" className="h-10 w-12">
                  <FaHeart className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="h-10 w-12">
                  <FaShare className="h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Location */}
          <div className="flex items-center text-muted-foreground mb-6">
            <FaMapMarkerAlt className="mr-2" />
            <span>{deal.location}</span>
          </div>
          
          {/* Highlights */}
          <div className="mb-6">
            <h3 className="font-bold text-lg mb-2">Highlights</h3>
            <ul className="list-disc list-inside space-y-1">
              {deal.highlights.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          
          {/* What's Included */}
          <div className="mb-6">
            <h3 className="font-bold text-lg mb-2">What&apos;s Included</h3>
            <ul className="list-disc list-inside space-y-1">
              {deal.whatsIncluded.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          
          {/* Website */}
          {deal.website && (
            <div className="text-sm">
              <span className="text-muted-foreground">Website: </span>
              <Link href="#" className="text-primary hover:underline">{deal.website}</Link>
            </div>
          )}
        </div>
      </div>

      {/* Deal Description Section */}
      <Tabs defaultValue="description" className="mt-12">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="how-it-works">How It Works</TabsTrigger>
        </TabsList>
        
        <TabsContent value="description">
          <Card>
            <CardContent className="pt-6">
              <p className="mb-4">{deal.description}</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="features">
          <Card>
            <CardContent className="pt-6">
              <ul className="list-disc list-inside space-y-2">
                {deal.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="how-it-works">
          <Card>
            <CardContent className="pt-6">
              <ol className="list-decimal list-inside space-y-2">
                {deal.howItWorks.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Reviews Section */}
      <div className="mt-12">
        <h2 className="text-xl font-bold mb-6">Customer Reviews</h2>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center mb-6">
              <div className="text-4xl font-bold mr-4">{deal.rating}</div>
              <div>
                <div className="flex items-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={i < Math.floor(deal.rating) ? "text-yellow-400" : "text-muted"} 
                    />
                  ))}
                </div>
                <p className="text-muted-foreground">Based on {deal.reviewCount} reviews</p>
              </div>
            </div>
            
            {/* Review Filters */}
            <div className="flex flex-wrap gap-2 mb-6">
              {['All', '5 Star', '4 Star', '3 Star', '2 Star', '1 Star'].map((filter) => (
                <Button 
                  key={filter}
                  variant={filter === 'All' ? 'default' : 'outline'}
                  size="sm"
                >
                  {filter}
                </Button>
              ))}
            </div>
            
            <Separator className="my-6" />
            
            {/* Sample Reviews */}
            <div className="space-y-6">
              {[1, 2].map((review) => (
                <div key={review} className="pb-6">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="fill-current" />
                      ))}
                    </div>
                    <span className="font-medium">Excellent!</span>
                  </div>
                  <p className="mb-2">&quot;This is the best deal I&apos;ve found for Office. Installed perfectly and works great!&quot;</p>
                  <p className="text-sm text-muted-foreground">- John D. • Verified Purchase • 2 days ago</p>
                  {review < 2 && <Separator className="mt-6" />}
                </div>
              ))}
            </div>
            <Separator className="my-6" />
            {/* <ReviewPopup /> */}
            <ReviewModal 
              totalReviews={1243} 
              averageRating={4.8} 
            />
          </CardContent>
        </Card>
      </div>

      {/* Similar Deals */}
      <div className="mt-12">
        <h2 className="text-xl font-bold mb-6">Similar Deals You Might Like</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <Card key={item} className='pt-0'>
              <div className="h-48 bg-muted flex items-center justify-center">
                <span className="text-muted-foreground">Similar Product {item}</span>
              </div>
              <CardHeader>
                <CardTitle>Microsoft Office 2019 Professional Plus</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <span className="line-through text-muted-foreground">$79.99</span>
                  <span className="text-primary font-bold">$14.90</span>
                  <Badge variant="destructive">-81%</Badge>
                </div>
                <Button className="w-full">View Deal</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleDealPage;