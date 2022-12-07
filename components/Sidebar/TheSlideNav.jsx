import React from "react";
import {
  FaTable,
  FaRegKeyboard,
  FaTh,
  FaTachometerAlt,
  FaUserEdit,
  FaLaptop,
  FaRegFileAlt,
  FaRegChartBar,
  FaBars,
  FaFunnelDollar,
  FaUser,
  FaShoppingCart,
} from "react-icons/fa";
import { Image, Dropdown, Button } from "react-bootstrap";
import { BsFillBagFill } from "react-icons/bs";

import Link from "next/link";

export default function TheSlideNav() {
  return (
    <>
      <div className="sidebar pe-4 pb-3 ">
        <nav className="navbar bg-secondary navbar-dark">
          <Link href="/">
            <a className="navbar-brand mx-4 mb-3">
              <h3 className="text-primary">
                <FaUserEdit className="fa me-2" />
                PigJungle
              </h3>
            </a>
          </Link>
          <div className="d-flex align-items-center ms-4 mb-4">
            <div className="position-relative">
              <Image
                className="rounded-circle"
                src={"images/user.jpg"}
                alt=""
                style={{ width: "40px", height: "40px" }}
              />
              <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1" />
            </div>
            <div className="ms-3">
              <h6 className="mb-0">Jhon Doe</h6>
              <span>Admin</span>
            </div>
          </div>
          <div className="navbar-nav w-100">
            <Link href="/">
              <a className="nav-item nav-link ">
                <i className="me-2">
                  <FaTachometerAlt />
                </i>
                Home
              </a>
            </Link>

            <Dropdown.Toggle className="nav-link" id="dropdown-custom-components" >
              <i className="me-2">
                <BsFillBagFill />
              </i>
              จัดการออเดอร์
            </Dropdown.Toggle>
            <Dropdown.Menu className="bg-transparent border-0" show>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
            </Dropdown.Menu>
            {/* <Dropdown id="managerProduct" bsPrefix="nav-item">
              <Dropdown.Toggle className="nav-link" variant="">
                <i className="me-2">
                  <FaShoppingCart />
                </i>
                จัดการสินค้า
              </Dropdown.Toggle>
              <Dropdown.Menu className="bg-transparent border-0">
                <Link id="buttons" href="/products">
                  <a className="dropdown-item">สินค้า</a>
                </Link>
                <Link id="typographys" href="/promotions">
                  <a className="dropdown-item">รายการเข้าร่วม</a>
                </Link>
              </Dropdown.Menu>
            </Dropdown> */}
            {/* <Dropdown bsPrefix="nav-item">
              <Dropdown.Toggle className="nav-link" variant="">
                <i className="me-2">
                  <FaUser />
                </i>
                จัดการสมาขิก
              </Dropdown.Toggle>
              <Dropdown.Menu className="bg-transparent border-0">
                <Link id="buttons" href="/user">
                  <a className="dropdown-item">เพิ่ม/ลบ/แก้ไข สมาชิก</a>
                </Link>
                <Link id="typographys" href="/address">
                  <a className="dropdown-item">ที่อยู่สมาชิก</a>
                </Link>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown bsPrefix="nav-item">
              <Dropdown.Toggle className="nav-link" variant="">
                <i className="me-2">
                  <FaLaptop />
                </i>
                จัดการเว็บไซต์
              </Dropdown.Toggle>
              <Dropdown.Menu className="bg-transparent border-0">
                <Link id="knowledge" href="knowledge">
                  <a className="dropdown-item">เกร็ดความรู้</a>
                </Link>
                <Link id="about" href="/about">
                  <a className="dropdown-item">เกี่ยวกับเรา</a>
                </Link>
                <Link id="contact" href="/contact">
                  <a className="dropdown-item">ข้อมูลติดต่อ</a>
                </Link>
                <Link id="sliderpicture" href="/sliderpicture">
                  <a className="dropdown-item">สไลด์รูป</a>
                </Link>
              </Dropdown.Menu>
            </Dropdown> */}
          </div>
        </nav>
      </div>
    </>
  );
}
export function ButtonSlideNav() {
  const [slideOpen, setSlideOpen] = React.useState("");
  return (
    <Button
      bsPrefix="sidebar-toggler flex-shrink-0 bar-slide"
      onClick={() => setSlideOpen(slideOpen == "close" ? "open" : "close")}
    >
      <FaBars />
    </Button>
  );
}
