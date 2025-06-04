import { FaApple, FaGooglePlay } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-12">
      {/* App Download Section */}
      <div className="container mx-auto px-4 py-8 border-b border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Get the OfferSpark App</h2>
            <h3 className="text-lg font-semibold mb-2">Unlock up to 90% discounts on the go with the OfferSpark app!</h3>
            <p className="mb-4">Exclusive deals, push notifications, and digital vouchers at your fingertips.</p>
            <button className="bg-black text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800 transition">
              Get the App
            </button>
            <p className="mt-2 text-sm">***** 100%+ downloads</p>
          </div>
          <div className="flex space-x-4">
            <button className="flex items-center bg-black text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800 transition">
              <FaApple className="mr-2" size={20} />
              App Store
            </button>
            <button className="flex items-center bg-black text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800 transition">
              <FaGooglePlay className="mr-2" size={20} />
              Google Play
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Support Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-600">Customer Support</a></li>
              <li><a href="#" className="hover:text-red-600">Report Infringement</a></li>
              <li><a href="#" className="hover:text-red-600">Refund Policies</a></li>
              <li><a href="#" className="text-red-600 font-medium">Get 20% Off</a></li>
            </ul>
          </div>

          {/* OfferSpark Sites */}
          <div>
            <h3 className="font-bold text-lg mb-4">OfferSpark Sites</h3>
            <select className="w-full p-2 border border-gray-300 rounded-md mb-4">
              <option>USA</option>
              <option>Canada</option>
              <option>UK</option>
              <option>Australia</option>
            </select>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">Sign up for the latest deals</h3>
            <div className="mb-4">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex items-start mb-4">
              <input type="checkbox" id="terms" className="mt-1 mr-2" />
              <label htmlFor="terms" className="text-sm">
                By subscribing, I agree to the Terms of Use and have read the Privacy Statement.
              </label>
            </div>
          </div>

          {/* Support for Merchants */}
          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <h4 className="font-medium mb-2">Select a OfferSpark</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-600">Join OfferSpark Marketplace</a></li>
              <li><a href="#" className="hover:text-red-600">Run a OfferSpark Campaign</a></li>
              <li><a href="#" className="hover:text-red-600">How does OfferSpark work for Merchants</a></li>
              <li><a href="#" className="hover:text-red-600">Sponsor your Campaign</a></li>
              <li><a href="#" className="hover:text-red-600">Affiliate Program</a></li>
              <li><a href="#" className="hover:text-red-600">Vendor Code of Conduct</a></li>
            </ul>
          </div>
        </div>

        {/* Additional Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 pt-8 border-t border-gray-200">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-600">About OfferSpark</a></li>
              <li><a href="#" className="hover:text-red-600">Jobs</a></li>
              <li><a href="#" className="hover:text-red-600">Press</a></li>
              <li><a href="#" className="hover:text-red-600">Investor Relations</a></li>
              <li><a href="#" className="hover:text-red-600">Management Team</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="font-medium hover:text-red-600">Treat Yourself</a></li>
              <li><a href="#" className="font-medium hover:text-red-600">Things To Do</a></li>
              <li><a href="#" className="font-medium hover:text-red-600">Coupons</a></li>
              <li><a href="#" className="font-medium hover:text-red-600">Gifts for Occasions</a></li>
            </ul>
          </div>

          {/* Social/Additional Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
                <span className="sr-only">Facebook</span>
                {/* Icon would go here */}
              </a>
              <a href="#" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
                <span className="sr-only">Twitter</span>
                {/* Icon would go here */}
              </a>
              <a href="#" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
                <span className="sr-only">Instagram</span>
                {/* Icon would go here */}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-200 py-4">
        <div className="container mx-auto px-4 text-center text-sm">
          © {new Date().getFullYear()} OfferSpark. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;