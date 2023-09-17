import { Component } from "react";
import {Link} from "react-router-dom";
class Header extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <header className="section-header">
        <section className="header-main border-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-3 col-md-12">
                <Link to="http://bootstrap-ecommerce.com" className="brand-wrap">
                  <img className="logo" src={require("../assets/images/logo.png" )}/>
                </Link>
                {/* brand-wrap.// */}
              </div>
              <div className="col-xl-6 col-lg-5 col-md-6">
                <form action="#" className="search-header">
                  <div className="input-group w-100">
                    <select
                      className="custom-select border-right"
                      name="category_name"
                    >
                      <option value>All type</option>
                      <option value="codex">Special</option>
                      <option value="comments">Only best</option>
                      <option value="content">Latest</option>
                    </select>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="submit">
                        <i className="fa fa-search" /> Search
                      </button>
                    </div>
                  </div>
                </form>
                {/* search-wrap .end// */}
              </div>
              {/* col.// */}
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="widgets-wrap float-md-right">
                  <div className="widget-header mr-3">
                    <Link to="/page-profile-main" className="widget-view">
                      <div className="icon-area">
                        <i className="fa fa-user" />
                        <span className="notify">3</span>
                      </div>
                      <small className="text"> My profile </small>
                    </Link>
                  </div>{" "}
                  <div className="widget-header mr-3">
                    <Link to="#" className="widget-view">
                      <div className="icon-area">
                        <i className="fa fa-comment-dots" />
                        <span className="notify">1</span>
                      </div>
                      <small className="text"> Message </small>
                    </Link>
                  </div>{" "}
                  <div className="widget-header mr-3">
                    <Link to="/page-profile-orders" className="widget-view">
                      <div className="icon-area">
                        <i className="fa fa-store" />
                      </div>
                      <small className="text"> Orders </small>
                    </Link>
                  </div>{" "}
                  <div className="widget-header">
                    <Link to="/page-shopping-cart" className="widget-view">
                      <div className="icon-area">
                        <i className="fa fa-shopping-cart" />
                      </div>
                      <small className="text"> Cart </small>
                    </Link>
                  </div>
                </div>
                {/* widgets-wrap.// */}
              </div>
              {/* col.// */}
            </div>
            {/* row.// */}
          </div>
          {/* container.// */}
        </section>
        {/* header-main .// */}
        
      </header>
    );
  }
}

export default Header;
