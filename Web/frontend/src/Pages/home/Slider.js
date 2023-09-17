import React from "react";
import {BsPhone} from "react-icons/bs"
import {TbDeviceIpad} from "react-icons/tb"
import {CgAppleWatch} from "react-icons/cg"
import {SiXiaomi} from "react-icons/si"
import {BiLogoStripe} from "react-icons/bi"

const Slider = () => (
  <section className="section-main padding-y">
    <main className="card">
      <div className="card-body">
        <div className="row">
          <aside className="col-lg col-md-3 flex-lg-grow-0">
            <nav className="nav-home-aside">
              <h6 className="title-category">
                 <i className="d-md-none icon fa fa-chevron-down" />
              </h6>
              <ul className="menu-category">
                <li>
                  <a href="#"> <BsPhone/> iPhone</a>
                </li>
                <li>
                  <a href="#"> <TbDeviceIpad/> iPad</a>
                </li>
                <li>
                  <a href="#"> <CgAppleWatch/> Apple Watch</a>
                </li>
                <li>
                  <a href="#"> <SiXiaomi/> Xiaomi</a>
                </li>
                <li>
                  <a href="#"> <BiLogoStripe/> Samsung</a>
                </li>
                <li>
                  <a href="#"> <BsPhone/> Realme</a>
                </li>
                
                <li className="has-submenu">
                  <a href="#">Phụ kiện</a>
                  <ul className="submenu">
                    <li>
                      <a href="#">Tai nghe</a>
                    </li>
                    <li>
                      <a href="#">Cục sạc</a>
                    </li>
                    
                  </ul>
                </li>
              </ul>
            </nav>
          </aside>
          {/* col.// */}
          <div className="col-md-9 col-xl-7 col-lg-7">
            {/* ================== COMPONENT SLIDER  BOOTSTRAP  ==================  */}
            <div
              id="carousel1_indicator"
              className="slider-home-banner carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carousel1_indicator"
                  data-slide-to={0}
                  className="active"
                />
                <li data-target="#carousel1_indicator" data-slide-to={1} />
                <li data-target="#carousel1_indicator" data-slide-to={2} />
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={require("../../assets/images/banners/banner_iphone.jpg")}
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require("../../assets/images/banners/slide2.jpg")}
                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require("../../assets/images/banners/slide3.jpg")}
                    alt="Third slide"
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carousel1_indicator"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carousel1_indicator"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Next</span>
              </a>
            </div>
            {/* ==================  COMPONENT SLIDER BOOTSTRAP end.// ==================  .// */}
          </div>
          {/* col.// */}
          <div className="col-md d-none d-lg-block flex-grow-1">
            <aside className="special-home-right">
             
              <div className="card-banner border-bottom">
                <img
                  src={require("../../assets/images/banners/qc_redmi_note_11_pro.jpg")}
                  height={100}
                  className="img-bg"
                  alt=""
                />
              </div>
              <div className="card-banner border-bottom">
                <img
                  src={require("../../assets/images/banners/qc_redmi_note 12r.jpg")}
                  height={100}
                  className="img-bg"
                  alt=""
                />
              </div>
              <div className="card-banner border-bottom">
                <img
                  src={require("../../assets/images/banners/qc_redmi_note_11s.jpg")}
                  height={100}
                  className="img-bg"
                  alt=""
                />
              </div>
            </aside>
          </div>
          {/* col.// */}
        </div>
        {/* row.// */}
      </div>
      {/* card-body.// */}
    </main>
    {/* card.// */}
  </section>
);
export default Slider;
