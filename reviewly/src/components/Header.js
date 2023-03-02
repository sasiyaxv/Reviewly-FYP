import React from "react";

export default function Header() {
  return (
    <div>
      <nav className="relative container mx-auto p-6">
        <flex className="flex item-center justify-between">
          <div className="pt-2">
            {/* <img src="review.png" alt="logo" /> */}
            <h1 className="text-4xl font-extrabold dark:text-black">
              Reviewly
            </h1>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="analyse" className="hover:text-gray-400">
              Analyze
            </a>
            <a href="#" className="hover:text-gray-400">
              About
            </a>
            <a href="#" className="hover:text-gray-400">
              Contact
            </a>
          </div>
          <a
            href="#"
            className="hidden md:block p-3 px-6 pt-2 text-white bg-red-500 rounded-full baseline hover:bg-red-800"
          >
            Get Started
          </a>
        </flex>
      </nav>
      {/* <header class="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4">
        <div class="flex items-center justify-between mb-4 md:mb-0">
          <h1 class="leading-none text-2xl text-grey-darkest">
            <a class="no-underline text-grey-darkest hover:text-black" href="#">
              Reviewly
            </a>
          </h1>

          <a class="text-black hover:text-orange md:hidden" href="#">
            <i class="fa fa-2x fa-bars"></i>
          </a>
        </div>
        <nav>
          <ul class="list-reset md:flex md:items-center">
            <li class="md:ml-4">
              <a
                class="block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0"
                href="#"
              >
                Products
              </a>
            </li>
            <li class="md:ml-4">
              <a
                class="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0"
                href="#"
              >
                About
              </a>
            </li>
            <li class="md:ml-4">
              <a
                class="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0"
                href="#"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header> */}
    </div>
  );
}
