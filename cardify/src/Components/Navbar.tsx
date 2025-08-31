import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activePath, setActivePath] = useState('');

  // Update active path on mount and when navigation occurs
  useEffect(() => {
    setActivePath(window.location.pathname);

    const handleLocationChange = () => {
      setActivePath(window.location.pathname);
    };

    // Listen for popstate (back/forward button)
    window.addEventListener('popstate', handleLocationChange);
    // In case other scripts trigger a manual navigation
    window.addEventListener('pushState', handleLocationChange);
    window.addEventListener('replaceState', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('pushState', handleLocationChange);
      window.removeEventListener('replaceState', handleLocationChange);
    };
  }, []);

  // Helper to determine if link is active
  const isActive = (path: string) => {
    if (path === '/') return activePath === '/';
    return activePath.startsWith(path);
  };

  return (
    <>
      <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700 fixed w-full top-0 z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo */}
         <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                       <div className="bg-indigo-600 p-2 rounded-lg">

  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-white"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M7 10h10M7 14h6" />
                </svg>
</div>
  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
    Cardify
  </span>
</a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* Navigation Links */}
          <div
            className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/About' },
                { name: 'Features', path: '/Features' },
                { name: 'Marketplace', path: '/Marketplace' },
                { name: 'Contact', path: '/Contact' },
              ].map((item) => (
                <li key={item.path}>
                  <a
                    href={item.path}
                    className={`block py-2 px-3 rounded-sm md:p-0 dark:text-white ${
                      isActive(item.path)
                        ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500'
                        : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="pt-20"></div>
    </>
  );
}