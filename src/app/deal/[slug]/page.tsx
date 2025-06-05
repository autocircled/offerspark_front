import { FaWindows, FaApple, FaStar, FaRegClock, FaMapMarkerAlt, FaShare, FaHeart } from 'react-icons/fa';

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
    ]
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <div className="text-sm text-gray-500 mb-6">
        <span className="hover:text-red-600 cursor-pointer">Home</span> &gt; 
        <span className="hover:text-red-600 cursor-pointer">Software</span> &gt; 
        <span className="text-gray-700">Office Professional Plus 2021</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column - Image Gallery */}
        <div className="lg:w-1/2">
          {/* Main Image */}
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center mb-4">
            <span className="text-gray-500 text-xl">Product Image Gallery</span>
          </div>
          
          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-gray-100 h-20 rounded-md flex items-center justify-center">
                <span className="text-xs text-gray-500">Thumb {item}</span>
              </div>
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
              {deal.isMac && <FaApple className="text-gray-700" size={20} />}
            </div>
          </div>
          
          {/* Subtitle */}
          <p className="text-gray-600 text-lg mb-4">{deal.subtitle}</p>
          
          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i < Math.floor(deal.rating) ? "fill-current" : "fill-gray-300"} />
              ))}
            </div>
            <span className="text-gray-700 font-medium">{deal.rating}</span>
            <span className="text-gray-500 ml-2">({deal.reviewCount} reviews)</span>
          </div>
          
          {/* Price Information */}
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <div className="flex items-center justify-between mb-3">
              <div>
                <span className="text-gray-400 line-through text-lg">{deal.originalPrice}</span>
                <span className="text-red-600 font-bold text-2xl ml-3">{deal.discountedPrice}</span>
                <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-bold ml-3">
                  {deal.discountPercentage}
                </span>
              </div>
              <div className="flex items-center text-gray-500">
                <FaRegClock className="mr-1" />
                <span>{deal.timeLeft}</span>
              </div>
            </div>
            
            <div className="mb-4">
              <p className="text-lg">
                <span className="font-bold">{deal.finalPrice}</span> with code <span className="font-bold bg-yellow-100 px-2 py-1 rounded">{deal.couponCode}</span>
              </p>
              <p className="text-green-600 font-medium">{deal.purchased} bought</p>
            </div>
            
            <div className="flex space-x-3">
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg flex-1 transition">
                Buy Now
              </button>
              <button className="border border-red-600 text-red-600 hover:bg-red-50 font-bold py-3 px-4 rounded-lg transition">
                <FaHeart />
              </button>
              <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 py-3 px-4 rounded-lg transition">
                <FaShare />
              </button>
            </div>
          </div>
          
          {/* Location */}
          <div className="flex items-center text-gray-600 mb-6">
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
              <span className="text-gray-500">Website: </span>
              <a href="#" className="text-blue-600 hover:underline">{deal.website}</a>
            </div>
          )}
        </div>
      </div>

      {/* Deal Description Section */}
      <div className="mt-12">
        <h2 className="text-xl font-bold mb-4">About This Deal</h2>
        <div className="prose max-w-none">
          <p className="mb-4">{deal.description}</p>
          
          <h3 className="font-bold text-lg mt-6 mb-3">Features</h3>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Full version of Microsoft Office Professional Plus 2021</li>
            <li>Compatible with both Windows and macOS</li>
            <li>Includes all the essential applications: Word, Excel, PowerPoint, Outlook, and more</li>
            <li>Lifetime license - no subscription required</li>
            <li>Free updates for the 2021 version</li>
            <li>24/7 customer support</li>
          </ul>
          
          <h3 className="font-bold text-lg mt-6 mb-3">How It Works</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Purchase this deal and receive your activation code via email</li>
            <li>Download the Office installer from Microsoft&apos;s website</li>
            <li>Install and activate using your provided product key</li>
            <li>Enjoy your lifetime access to Microsoft Office</li>
          </ol>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-12">
        <h2 className="text-xl font-bold mb-6">Customer Reviews</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="flex items-center mb-6">
            <div className="text-4xl font-bold mr-4">{deal.rating}</div>
            <div>
              <div className="flex items-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < Math.floor(deal.rating) ? "text-yellow-400" : "text-gray-300"} />
                ))}
              </div>
              <p className="text-gray-600">Based on {deal.reviewCount} reviews</p>
            </div>
          </div>
          
          {/* Review Filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            {['All', '5 Star', '4 Star', '3 Star', '2 Star', '1 Star'].map((filter) => (
              <button 
                key={filter}
                className={`px-3 py-1 rounded-full text-sm ${filter === 'All' ? 'bg-red-600 text-white' : 'bg-white border border-gray-300'}`}
              >
                {filter}
              </button>
            ))}
          </div>
          
          {/* Sample Reviews */}
          <div className="space-y-6">
            {[1, 2].map((review) => (
              <div key={review} className="border-b border-gray-200 pb-6">
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < 5 ? "fill-current" : "fill-gray-300"} />
                    ))}
                  </div>
                  <span className="font-medium">Excellent!</span>
                </div>
                <p className="text-gray-700 mb-2">&quot;This is the best deal I&apos;ve found for Office. Installed perfectly and works great!&quot;</p>
                <p className="text-gray-500 text-sm">- John D. • Verified Purchase • 2 days ago</p>
              </div>
            ))}
          </div>
          
          <button className="mt-6 text-red-600 font-medium hover:underline">
            See all {deal.reviewCount} reviews
          </button>
        </div>
      </div>

      {/* Similar Deals */}
      <div className="mt-12">
        <h2 className="text-xl font-bold mb-6">Similar Deals You Might Like</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <span className="text-gray-500">Similar Product {item}</span>
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-2">Microsoft Office 2019 Professional Plus</h3>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-gray-400 line-through">$79.99</span>
                  <span className="text-red-600 font-bold">$14.90</span>
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-bold">-81%</span>
                </div>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded transition">
                  View Deal
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleDealPage;