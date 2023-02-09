import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <>
      {/* create navbar with logo tailwind */}
      <nav className="flex items-center justify-around flex-wrap bg-gray-800 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6 flex-grow">
          <Link href="/">
            <span className="font-semibold text-xl tracking-tight">
              Todo App
            </span>
          </Link>
        </div>

        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow space-x-6">
            <Link
              href="/list"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
            >
              List
            </Link>
            <Link
              href="/create"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
            >
              Create
            </Link>
          </div>
          <div className="flex gap-5 align-center">
            <p className="mt-1">sadsadasdas.gmail.com</p>
            <Link
              href="#"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0"
            >
              Sign Out
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
