// import IndexNavbar from "components/Navbars/IndexNavbar";
// import Footer from "../Footers/Footer";
// import { Container } from 'react-bootstrap';
// import { FaArrowUp } from "react-icons/fa";
// import TheSlideNav from "../Sidebar/TheSlideNav";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      {/* <IndexNavbar /> */}
      {/* <TheSlideNav /> */}
      {/* <Container> */}
        {children}
      {/* </Container> */}
      {/* <Footer /> */}
    </>
  );
}