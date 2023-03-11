import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="fixed bottom-0 left-0 z-18 w-full p-5 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
        <span className="text-sm text-gray-600 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Reviewly™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-400 dark:text-gray-300 sm:mt-0">
          <li>
            <a href="analyse" className="mr-4 hover:underline md:mr-6 ">
              Analyze
            </a>
          </li>
          <li>
            <a
              href="https://github.com/sasiyaxv"
              className="mr-4 hover:underline md:mr-6"
            >
              Access code
            </a>
          </li>

          <li>
            <a
              href="https://sashmindaps4.wixsite.com/portfolio"
              className="hover:underline"
            >
              Contact
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
