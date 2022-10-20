import { Row, Col } from "antd";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="px-16 py-12 flex justify-between items-center border-b-4 border-opacity-10 border-floralWhite ph:flex-col ph:pb-8">
      <Row className="w-full ">
        <Col span={8} xs={24}>
          <Link href="/">
            <a>
              <h1 className="font-bold font-montserrat text-h1 text-floralWhite cursor-pointer select-none ph:text-center">
                Moviz
              </h1>
            </a>
          </Link>
        </Col>

        <Col
          span={6}
          offset={10}
          xs={{ span: 24, offset: 0 }}
          className="flex items-center ph:mt-[4vh]"
        >
          <ul className="w-full flex justify-end gap-[6vw] font-bold text-h3 cursor-pointer ph:justify-around">
            <li className=" ease-in-out duration-150 hover:text-shadowBlue">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className=" ease-in-out duration-150 hover:text-shadowBlue">
              <Link href="/discover">
                <a>Discover</a>
              </Link>
            </li>
          </ul>
        </Col>
      </Row>
    </nav>
  );
}
