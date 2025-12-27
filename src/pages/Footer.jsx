const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Foodie Recipes</h2>
          <p className="text-sm leading-relaxed">
            Discover, share, and enjoy delicious homemade recipes from around
            the world. Cook with love 
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-orange-400">Home</a></li>
            <li><a href="/browse" className="hover:text-orange-400">All Recipes</a></li>
            <li><a href="/" className="hover:text-orange-400">Categories</a></li>
            <li><a href="/" className="hover:text-orange-400">About Us</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Popular Categories
          </h3>
          <ul className="space-y-2 text-sm">
            <li> Fast Food</li>
            <li> Healthy</li>
            <li> Desserts</li>
            <li> Pakistani</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Newsletter
          </h3>
          <p className="text-sm mb-3">
            Get latest recipes straight to your inbox.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-l-md bg-gray-800 text-white text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="bg-orange-500 px-4 py-2 rounded-r-md text-white text-sm hover:bg-orange-600"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 py-4 text-center text-sm">
        © {new Date().getFullYear()} Foodie Recipes. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
