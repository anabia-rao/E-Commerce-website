
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-orange-500">Mughal Foods</h2>

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-400">
              Delicious food made fresh with quality ingredients. Enjoy our
              famous Zinger Burgers, crispy Chicken and mouth-watering Pizzas.
            </p>

            <div className="mt-5 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-orange-500"
                aria-label="Facebook"
              >
                f
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-orange-500"
                aria-label="Instagram"
              >
                ◎
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-orange-500"
                aria-label="TikTok"
              >
                ♪
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li>
                <a href="/" className="transition hover:text-orange-500">
                  Home
                </a>
              </li>
              <li>
                <a href="/menu" className="transition hover:text-orange-500">
                  Menu
                </a>
              </li>
              <li>
                <a href="/about" className="transition hover:text-orange-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="transition hover:text-orange-500">
                  Contact
                </a>
              </li>
              <li>
                <a href="/order" className="transition hover:text-orange-500">
                  Order Now
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold">Opening Hours</h3>

            <div className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between gap-4 text-gray-400">
                <span>Monday - Thursday</span>
                <span className="text-white">12 PM - 11 PM</span>
              </div>

              <div className="flex justify-between gap-4 text-gray-400">
                <span>Friday</span>
                <span className="text-white">2 PM - 12 AM</span>
              </div>

              <div className="flex justify-between gap-4 text-gray-400">
                <span>Saturday - Sunday</span>
                <span className="text-white">12 PM - 12 AM</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>

            <div className="mt-4 space-y-4 text-sm text-gray-400">
              <p className="flex gap-3">
                <span>📍</span>
                <span>Your Restaurant Address, Karachi</span>
              </p>

              <p className="flex gap-3">
                <span>📞</span>
                <a
                  href="tel:+923001234567"
                  className="transition hover:text-orange-500"
                >
                  +92 300 1234567
                </a>
              </p>

              <p className="flex gap-3">
                <span>✉️</span>
                <a
                  href="mailto:info@mughalfoods.com"
                  className="transition hover:text-orange-500"
                >
                  info@mughalfoods.com
                </a>
              </p>
            </div>

            <a
              href="/order"
              className="order"
            >
              Order Now 🍔
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="bottom">
          <div className="name">
            <p>
              © {new Date().getFullYear()} Mughal Foods. All rights reserved.
            </p>

            <div className="flex gap-5">
              <a href="/privacy" className="hover:text-orange-500">
                Privacy Policy
              </a>

              <a href="/terms" className="text">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
