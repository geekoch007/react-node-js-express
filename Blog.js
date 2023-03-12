import React, { useState, useEffect } from 'react';
import './blog.css';
import Axios from 'axios';
import SweetPagination from "sweetpagination";
import { useNavigate } from 'react-router-dom';
import Menu from '../Imports/Menu';
import Header from '../Imports/Header';
import Footer from '../Imports/Footer';

const Blog = () => {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  let navigate = useNavigate();

  const [blog, setBlog] = useState([]);
  const [currentPageData, setCurrentPageData] = useState([]);

  const fetchData = () => {
    return Axios.get("http://localhost:8081/api/blog")
      .then((response) => setBlog(response.data));
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      {/* Page Preloder */}
      <div id="preloder">
        <div class="loader"></div>
      </div>

      {/* Offcanvas Menu Begin */}
      <Menu />
      {/* Offcanvas Menu End */}

      {/* Header Section Begin */}
      <Header />
      {/* Header Section End  */}

      {/* Breadcrumb Section Begin  */}
      <section class="breadcrumb-blog set-bg" data-setbg="http://localhost:8081/mf_img/breadcrumb-bg.jpg">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h2>Our Blog</h2>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb Section End */}

      {/* Blog Section Begin */}
      <section class="blog spad">
        <div class="container">
          <div class="row">

            {currentPageData && currentPageData.length > 0 && currentPageData.map((blogObj, index) => (
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="blog__item">
                  <div class="blog__item__pic set-bg" style={{ backgroundImage: `url("${blogObj.img}")` }}></div>
                  <div class="blog__item__text">
                    <span><img src="http://localhost:8081/mf_img/icon/calendar.png" alt="" /> {formatDate(blogObj.date)}</span>
                    <h5>{blogObj.title}</h5>
                    <a href={`/blog-details/${blogObj.id} `}>Read More</a>
                  </div>
                </div>
              </div>

            ))}
          </div>
          <div class="row">
            {/* <div class="col-lg-12">
              <div class="product__pagination">
                <a class="active" href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <span>...</span>
                <a href="#">21</a>
              </div>
            </div> */}
            <div class="col-lg-12">
              <div class="product__pagination">
                <SweetPagination
                  currentPageData={setCurrentPageData}
                  dataPerPage={6}
                  getData={blog}
                  navigation={false}
                  getStyle={'style-3'}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Section End */}

      {/* Footer Section Begin */}
      <Footer />
      {/* Footer Section End  */}

      {/* Search Begin */}
      <div class="search-model">
        <div class="h-100 d-flex align-items-center justify-content-center">
          <div class="search-close-switch">+</div>
          <form class="search-model-form">
            <input type="text" id="search-input" placeholder="Search here....." />
          </form>
        </div>
      </div>
      {/* Search End */}
    </>
  )
}

export default Blog;