import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex px-4vw py-4vh">
      <Link href="/">
        <a>
          <h1 className="font-bold font-montserrat text-h1 cursor-pointer select-none">
            Moviz
          </h1>
        </a>
      </Link>
    </nav>
  );
}
