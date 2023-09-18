import Apple from "../Pages/home/Apple";
import Region from "../Pages/home/Region";
import Samsung from "../Pages/home/Samsung";
import Xiaomi from "../Pages/home/Xiaomi";
import Realme from "../Pages/home/Realme";
import Service from "../Pages/home/Service";
import Slider from "../Pages/home/Slider";
import Subscribe from "../Pages/home/Subscribe";


function Home(props) {
  return (
    <>
    <div className="container">
      <Slider/>
      <Apple/>
      <Samsung/>
      <Xiaomi/>
      <Realme/>
    </div>
   
    </>
  );
}

export default Home;