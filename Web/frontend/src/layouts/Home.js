import Apple from "../Pages/home/Apple";
import Region from "../Pages/home/Region";
import Samsung from "../Pages/home/Samsung";
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
      <Service/>
      <Region/>
    </div>
    <Subscribe/>
    </>
  );
}

export default Home;