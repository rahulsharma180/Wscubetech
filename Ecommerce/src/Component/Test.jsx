import React, { useEffect, useState } from 'react';
import Products from '/src/Component/Products';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';

const sortOptions = [
  { name: 'Most Popular', value: 'most-popular', current: true },
  { name: 'Best Rating', value: 'best-rating', current: false },
  { name: 'Newest', value: 'newest', current: false },
  { name: 'Price: Low to High', value: 'price-low-to-high', current: false },
  { name: 'Price: High to Low', value: 'price-high-to-low', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Test() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [sortOption, setSortOption] = useState(sortOptions[0].value); // State to track the selected sort option

  const filterCategory = (option) => {
    setLoading(true);
    setCategoryName(option);
  };

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then((res) => res.json())
      .then((result) => {
        setCategories(result);
      });
  }, []);

  useEffect(() => {
    let APIURL = categoryName === '' ? 'https://dummyjson.com/products' : `https://dummyjson.com/products/category/${categoryName}`;

    fetch(APIURL)
      .then((res) => res.json())
      .then((result) => {
        setProducts(result.products);
        setLoading(false);
      });
  }, [categoryName]);

  // Sort Products Function
  useEffect(() => {
    if (products.length > 0) {
      const sortedProducts = [...products];
      if (sortOption === 'price-low-to-high') {
        sortedProducts.sort((a, b) => a.price - b.price);
      } else if (sortOption === 'price-high-to-low') {
        sortedProducts.sort((a, b) => b.price - a.price);
      }
      setProducts(sortedProducts);
    }
  }, [sortOption, products]);

  return (
    <div className="bg-white">
      <div>
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon aria-hidden="true" className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
                  </MenuButton>
                </div>

                <MenuItems className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <MenuItem key={option.value}>
                        <button
                          onClick={() => setSortOption(option.value)}
                          className={classNames(
                            option.value === sortOption ? 'font-medium text-gray-900' : 'text-gray-500',
                            'block w-full px-4 py-2 text-left text-sm'
                          )}
                        >
                          {option.name}
                        </button>
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                {/* Filters Logic Here */}
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                <Products allProduct={products} loading={loading} />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
