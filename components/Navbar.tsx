import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="px-x py-ny flex justify-between items-center border-b-4 border-opacity-10 border-floralWhite">
      <Link href="/">
        <a>
          <h1 className="font-bold font-montserrat text-h1 cursor-pointer select-none">
            Moviz
          </h1>
        </a>
      </Link>

      <ul className="flex gap-x-links-y text-h3 cursor-pointer">
        <li className=" ease-in-out duration-150 hover:text-shadowBlue">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className=" ease-in-out duration-150 hover:text-shadowBlue">
          <Link href="/movies">
            <a>Movies</a>
          </Link>
        </li>
        <li className=" ease-in-out duration-150 hover:text-shadowBlue">
          <Link href="/genres">
            <a>Genres</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
