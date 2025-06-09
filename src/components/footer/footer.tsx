import { FaApple, FaGooglePlay, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-muted text-foreground mt-12">
      {/* App Download Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-3 max-w-lg">
            <h2 className="text-2xl font-bold tracking-tight">Get the OfferSpark App</h2>
            <h3 className="text-lg font-semibold">
              Unlock up to 90% discounts on the go with the OfferSpark app!
            </h3>
            <p className="text-muted-foreground">
              Exclusive deals, push notifications, and digital vouchers at your fingertips.
            </p>
            <Button size="lg">Get the App</Button>
            <p className="text-sm text-muted-foreground">***** 100%+ downloads</p>
          </div>
          <div className="flex gap-4">
            <Button variant="secondary" className="gap-2">
              <FaApple className="h-5 w-5" />
              App Store
            </Button>
            <Button variant="secondary" className="gap-2">
              <FaGooglePlay className="h-5 w-5" />
              Google Play
            </Button>
          </div>
        </div>
      </div>

      <Separator />

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Support Column */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary hover:underline">Customer Support</a></li>
              <li><a href="#" className="hover:text-primary hover:underline">Report Infringement</a></li>
              <li><a href="#" className="hover:text-primary hover:underline">Refund Policies</a></li>
              <li><a href="#" className="text-primary font-medium hover:underline">Get 20% Off</a></li>
            </ul>
          </div>

          {/* OfferSpark Sites */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">OfferSpark Sites</h3>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="usa">USA</SelectItem>
                <SelectItem value="canada">Canada</SelectItem>
                <SelectItem value="uk">UK</SelectItem>
                <SelectItem value="australia">Australia</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Sign up for the latest deals</h3>
            <Input type="email" placeholder="Email Address" />
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                By subscribing, I agree to the Terms of Use and have read the Privacy Statement.
              </label>
            </div>
            <Button className="w-full">Subscribe</Button>
          </div>

          {/* Support for Merchants */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Support</h3>
            <h4 className="font-medium">Select a OfferSpark</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary hover:underline">Join OfferSpark Marketplace</a></li>
              <li><a href="#" className="hover:text-primary hover:underline">Run a OfferSpark Campaign</a></li>
              <li><a href="#" className="hover:text-primary hover:underline">How does OfferSpark work for Merchants</a></li>
              <li><a href="#" className="hover:text-primary hover:underline">Sponsor your Campaign</a></li>
              <li><a href="#" className="hover:text-primary hover:underline">Affiliate Program</a></li>
              <li><a href="#" className="hover:text-primary hover:underline">Vendor Code of Conduct</a></li>
            </ul>
          </div>
        </div>

        {/* Additional Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 pt-8 border-t">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary hover:underline">About OfferSpark</a></li>
              <li><a href="#" className="hover:text-primary hover:underline">Jobs</a></li>
              <li><a href="#" className="hover:text-primary hover:underline">Press</a></li>
              <li><a href="#" className="hover:text-primary hover:underline">Investor Relations</a></li>
              <li><a href="#" className="hover:text-primary hover:underline">Management Team</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="font-medium hover:text-primary hover:underline">Treat Yourself</a></li>
              <li><a href="#" className="font-medium hover:text-primary hover:underline">Things To Do</a></li>
              <li><a href="#" className="font-medium hover:text-primary hover:underline">Coupons</a></li>
              <li><a href="#" className="font-medium hover:text-primary hover:underline">Gifts for Occasions</a></li>
            </ul>
          </div>

          {/* Social/Additional Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Follow Us</h3>
            <div className="flex gap-4">
              <Button variant="outline" size="icon">
                <FaFacebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="outline" size="icon">
                <FaTwitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="outline" size="icon">
                <FaInstagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-muted/50 py-4">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} OfferSpark. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;