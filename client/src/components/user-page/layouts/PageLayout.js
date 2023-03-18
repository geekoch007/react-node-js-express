import React from "react";

import Menu from "../Imports/Menu";
import Header from "../Imports/Header";
import Footer from "../Imports/Footer";

const PageLayout = ({ children }) => {
  return (
    <>
      {/* Page Preloder */}
      <div id="preloder">
        <div className="loader"></div>
      </div>

      {/* Offcanvas Menu Begin */}
      <Menu />
      {/* Offcanvas Menu End */}

      {/* Header Section Begin */}
      <Header />
      {/* Header Section End  */}

      <>{children}</>

      {/* Footer Section Begin */}
      <Footer />
      {/* Footer Section End  */}

      {/* Search Begin */}
      <div className="search-model">
        <div className="h-100 d-flex align-items-center justify-content-center">
          <div className="search-close-switch">+</div>
          <form className="search-model-form">
            <input
              type="text"
              id="search-input"
              placeholder="Search here....."
            />
          </form>
        </div>
      </div>
      {/* Search End */}
    </>
  );
};

export default PageLayout;
