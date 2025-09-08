import { Linkedin, Facebook, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#CA8787] mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-white">
              <li>
                <a href="#" className="hover:text-white">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Our Blogs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Store Locator
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Jewellery Care
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Join Us
                </a>
              </li>
            </ul>
          </div>

          {/* Details */}
          <div>
            <h3 className="font-semibold text-white mb-4">Details</h3>
            <ul className="space-y-2 text-sm text-[#CA8787]-white">
              <li>
                <a href="#" className="hover:text-white">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  International Shipping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQ's and Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Details (Second Column) */}
          <div>
            <h3 className="font-semibold text-white mb-4">Details</h3>
            <ul className="space-y-2 text-sm text-[#CA8787]-white">
              <li>
                <a href="#" className="hover:text-white">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  International Shipping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQ's and Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <div className="text-sm text-[#CA8787]-white space-y-2">
              <p className="font-medium">Elegant Jewels</p>
              <p>SF-11, Artsal Fortune Arcade, A Block, K-27,</p>
              <p>Sector 18, Noida, Uttar Pradesh 201301</p>
              <p className="mt-4">For any suggestions, queries or</p>
              <p>complaints please contact us.</p>
              <p className="font-medium mt-2">Elegantjewel Private Limited</p>
              <p className="mt-2">contact@elegantjewels.com</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-white mb-2">Our Social Links:</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-[#CA8787]-white hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-[#CA8787]-white hover:text-white">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-[#CA8787]-white hover:text-white">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-[#CA8787]-white">
            © 2024 Elegant Jewels. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
