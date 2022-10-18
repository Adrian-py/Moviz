import { Row, Col } from "antd";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="px-16 py-12 flex justify-between items-center border-b-4 border-opacity-10 border-floralWhite">
      <Row className="w-full ">
        <Col span={8}>
          <Link href="/">
            <a>
              <h1 className="font-bold font-montserrat text-h1 text-floralWhite cursor-pointer select-none">
                Moviz
              </h1>
            </a>
          </Link>
        </Col>

        <Col span={6} offset={10} className="flex items-center">
          <ul className="w-full flex gap-x-links-y text-h3 cursor-pointer">
            <Row className="w-full">
              <Col span={6} className="flex justify-center">
                <li className=" ease-in-out duration-150 hover:text-shadowBlue">
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
              </Col>

              <Col span={6} offset={12} className="flex justify-center">
                <li className=" ease-in-out duration-150 hover:text-shadowBlue">
                  <Link href="/movies">
                    <a>Movies</a>
                  </Link>
                </li>
              </Col>
            </Row>
          </ul>
        </Col>
      </Row>
    </nav>
  );
}
