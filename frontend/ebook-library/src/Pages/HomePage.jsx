import FrontHome from '../components/FrontHome'
import EbookContainer from '../components/ebook/EbookContainer'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import '../App.css'
// import { data } from '../components/Data';


const HomePage = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 600,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // };

  return (
    <>

      <FrontHome />
      <EbookContainer />
    </>
  )
}

export default HomePage