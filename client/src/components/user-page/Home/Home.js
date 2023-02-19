import React, { useState, useEffect } from 'react';
import './home.css';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Menu from '../Imports/Menu';
import Header from '../Imports/Header';
import Footer from '../Imports/Footer';

const Home = () => {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  let navigate = useNavigate();

  const [heroList, setHeroList] = useState([]);
  const [bannerList, setBannerList] = useState([]);
  // const [productsList, setProductsList] = useState([]);
  const [instagramList, setInstagramList] = useState([]);
  // const [blogList, setBlogList] = useState([]);

  // get hero item slider
  useEffect(() => {
    Axios.get("http://localhost:8081/api/heroitem").then((data) => {
      console.log(data)
      setHeroList(data.data)
    });
  }, []);

  // get banner item
  useEffect(() => {
    Axios.get("http://localhost:8081/api/banneritem").then((data) => {
      console.log(data)
      setBannerList(data.data)
    });
  }, []);

  // 8 Products
  // useEffect(() => {
  //   Axios.get("http://localhost:8081/api/getProducts").then((data) => {
  //     console.log(data)
  //     setProductsList(data.data)
  //   });
  // }, []);

  // get all instagram
  useEffect(() => {
    Axios.get("http://localhost:8081/api/instagram").then((data) => {
      console.log(data)
      setInstagramList(data.data)
    });
  }, []);

  // latest blog
  // useEffect(() => {
  //   Axios.get("http://localhost:8081/api/getBlog").then((data) => {
  //     console.log(data)
  //     setBlogList(data.data)
  //   });
  // }, []);

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

      {/* Hero Section Begin */}
      <section class="hero">
        <div class="hero__slider owl-carousel">
          <div class="hero__items set-bg" style={{ backgroundImage: `url(${heroList[0]?.h_image})` }}>
            <div class="container">
              <div class="row">
                <div class="col-xl-5 col-lg-7 col-md-8">
                  <div class="hero__text">
                    <h6>{heroList[0]?.h_type}</h6>
                    <h2>{heroList[0]?.h_name}</h2>
                    <p>{heroList[0]?.h_text}</p>
                    <a href={`${heroList[0]?.h_link}`} class="primary-btn">Shop now <span class="arrow_right"></span></a>
                    <div class="hero__social">
                      <a href="#"><i class="fa fa-facebook"></i></a>
                      <a href="#"><i class="fa fa-twitter"></i></a>
                      <a href="#"><i class="fa fa-pinterest"></i></a>
                      <a href="#"><i class="fa fa-instagram"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="hero__items set-bg" style={{ backgroundImage: `url(${heroList[1]?.h_image})` }}>
            <div class="container">
              <div class="row">
                <div class="col-xl-5 col-lg-7 col-md-8">
                  <div class="hero__text">
                    <h6>{heroList[1]?.h_type}</h6>
                    <h2>{heroList[1]?.h_name}</h2>
                    <p>{heroList[1]?.h_text}</p>
                    <a href={`${heroList[1]?.h_link}`} class="primary-btn">Shop now <span class="arrow_right"></span></a>
                    <div class="hero__social">
                      <a href="#"><i class="fa fa-facebook"></i></a>
                      <a href="#"><i class="fa fa-twitter"></i></a>
                      <a href="#"><i class="fa fa-pinterest"></i></a>
                      <a href="#"><i class="fa fa-instagram"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="hero__items set-bg" style={{ backgroundImage: `url(${heroList[2]?.h_image})` }}>
            <div class="container">
              <div class="row">
                <div class="col-xl-5 col-lg-7 col-md-8">
                  <div class="hero__text">
                    <h6>Summer Collection</h6>
                    <h2>Fall - Winter Collections 2030</h2>
                    <p>A specialist label creating luxury essentials. Ethically crafted with an unwavering
                      commitment to exceptional quality.</p>
                    <a href="/shop" class="primary-btn">Shop now <span class="arrow_right"></span></a>
                    <div class="hero__social">
                      <a href="#"><i class="fa fa-facebook"></i></a>
                      <a href="#"><i class="fa fa-twitter"></i></a>
                      <a href="#"><i class="fa fa-pinterest"></i></a>
                      <a href="#"><i class="fa fa-instagram"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}

      {/* Banner Section Begin */}
      <section class="banner spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-7 offset-lg-4">
              <div class="banner__item">
                <div class="banner__item__pic">
                  <img src={bannerList[0]?.b_image} alt={bannerList[0]?.b_name} />
                </div>
                <div class="banner__item__text">
                  <h2>{bannerList[0]?.b_name}</h2>
                  <a href={bannerList[0]?.b_link}>Shop now</a>
                </div>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="banner__item banner__item--middle">
                <div class="banner__item__pic">
                  <img src={bannerList[1]?.b_image} alt={bannerList[1]?.b_name} />
                </div>
                <div class="banner__item__text">
                  <h2>{bannerList[1]?.b_name}</h2>
                  <a href={bannerList[1]?.b_link}>Shop now</a>
                </div>
              </div>
            </div>
            <div class="col-lg-7">
              <div class="banner__item banner__item--last">
                <div class="banner__item__pic">
                  <img src={bannerList[2]?.b_image} alt={bannerList[2]?.b_name} />
                </div>
                <div class="banner__item__text">
                  <h2>{bannerList[2]?.b_name}</h2>
                  <a href={bannerList[2]?.b_link}>Shop now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Banner Section End */}

      {/* Product Section Begin */}
      <section class="product spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <ul class="filter__controls">
                <li class="active" data-filter="*">Best Sellers</li>
                <li data-filter=".new-arrivals">New Arrivals</li>
                <li data-filter=".hot-sales">Hot Sales</li>
              </ul>
            </div>
          </div>
          <div class="row product__filter">
            <div class="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
              <div class="product__item">
                <div class="product__item__pic set-bg" data-setbg="http://localhost:8081/mf_img/product/product-1.jpg">
                  <span class="label">New</span>
                  <ul class="product__hover">
                    <li><a href="#"><img src="http://localhost:8081/mf_img/icon/heart.png" alt="" /></a></li>
                    <li><a href="#"><img src="http://localhost:8081/mf_img/icon/compare.png" alt="" /> <span>Compare</span></a></li>
                    <li><a href="#"><img src="http://localhost:8081/mf_img/icon/search.png" alt="" /></a></li>
                  </ul>
                </div>
                <div class="product__item__text">
                  <h6>Piqué Biker Jacket</h6>
                  <a href="#" class="add-cart">+ Add To Cart</a>
                  <div class="rating">
                    <i class="fa fa-star-o"></i>&nbsp;
                    <i class="fa fa-star-o"></i>&nbsp;
                    <i class="fa fa-star-o"></i>&nbsp;
                    <i class="fa fa-star-o"></i>&nbsp;
                    <i class="fa fa-star-o"></i>&nbsp;
                  </div>
                  <h5>$67.24</h5>
                  <div class="product__color__select">
                    <label for="pc-1">
                      <input type="radio" id="pc-1" />
                    </label>
                    <label class="active black" for="pc-2">
                      <input type="radio" id="pc-2" />
                    </label>
                    <label class="grey" for="pc-3">
                      <input type="radio" id="pc-3" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix hot-sales">
              <div class="product__item">
                <div class="product__item__pic set-bg" data-setbg="http://localhost:8081/mf_img/product/product-2.jpg">
                  <ul class="product__hover">
                    <li><a href="#"><img src="http://localhost:8081/mf_img/icon/heart.png" alt="" /></a></li>
                    <li><a href="#"><img src="http://localhost:8081/mf_img/icon/compare.png" alt="" /> <span>Compare</span></a></li>
                    <li><a href="#"><img src="http://localhost:8081/mf_img/icon/search.png" alt="" /></a></li>
                  </ul>
                </div>
                <div class="product__item__text">
                  <h6>Piqué Biker Jacket</h6>
                  <a href="#" class="add-cart">+ Add To Cart</a>
                  <div class="rating">
                    <i class="fa fa-star-o"></i>&nbsp;
                    <i class="fa fa-star-o"></i>&nbsp;
                    <i class="fa fa-star-o"></i>&nbsp;
                    <i class="fa fa-star-o"></i>&nbsp;
                    <i class="fa fa-star-o"></i>&nbsp;
                  </div>
                  <h5>$67.24</h5>
                  <div class="product__color__select">
                    <label for="pc-4">
                      <input type="radio" id="pc-4" />
                    </label>
                    <label class="active black" for="pc-5">
                      <input type="radio" id="pc-5" />
                    </label>
                    <label class="grey" for="pc-6">
                      <input type="radio" id="pc-6" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
              <div class="product__item sale">
                <div class="product__item__pic set-bg" data-setbg="http://localhost:8081/mf_img/product/product-3.jpg">
                  <span class="label">Sale</span>
                  <ul class="product__hover">
                    <li><a href="#"><img src="http://localhost:8081/mf_img/icon/heart.png" alt="" /></a></li>
                    <li><a href="#"><img src="http://localhost:8081/mf_img/icon/compare.png" alt="" /> <span>Compare</span></a></li>
                    <li><a href="#"><img src="http://localhost:8081/mf_img/icon/search.png" alt="" /></a></li>
                  </ul>
                </div>
                <div class="product__item__text">
                  <h6>Multi-pocket Chest Bag</h6>
                  <a href="#" class="add-cart">+ Add To Cart</a>
                  <div class="rating">
                    <i class="fa fa-star"></i>&nbsp;
                    <i class="fa fa-star"></i>&nbsp;
                    <i class="fa fa-star"></i>&nbsp;
                    <i class="fa fa-star"></i>&nbsp;
                    <i class="fa fa-star-o"></i>&nbsp;
                  </div>
                  <h5>$43.48</h5>
                  <div class="product__color__select">
                    <label for="pc-7">
                      <input type="radio" id="pc-7" />
                    </label>
                    <label class="active black" for="pc-8">
                      <input type="radio" id="pc-8" />
                    </label>
                    <label class="grey" for="pc-9">
                      <input type="radio" id="pc-9" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix hot-sales">
              <div class="product__item">
                <div class="product__item__pic set-bg" data-setbg="http://localhost:8081/mf_img/product/product-4.jpg">
                  <ul class="product__hover">
                    <li><a href="#"><img src="http://localhost:8081/mf_img/icon/heart.png" alt="" /></a></li>
                    <li><a href="#"><img src="http://localhost:8081/mf_img/icon/compare.png" alt="" /> <span>Compare</span></a></li>
                    <li><a href="#"><img src="http://localhost:8081/mf_img/icon/search.png" alt="" /></a></li>
                  </ul>
                </div>
                <div class="product__item__text">
                  <h6>Diagonal Textured Cap</h6>
                  <a href="#" class="add-cart">+ Add To Cart</a>
                  <div class="rating">
                    <i class="fa fa-star-o"></i>&nbsp;
                    <i class="fa fa-star-o"></i>&nbsp;
                    <i class="fa fa-star-o"></i>&nbsp;
                    <i class="fa fa-star-o"></i>&nbsp;
                    <i class="fa fa-star-o"></i>&nbsp;
                  </div>
                  <h5>$60.9</h5>
                  <div class="product__color__select">
                    <label for="pc-10">
                      <input type="radio" id="pc-10" />
                    </label>
                    <label class="active black" for="pc-11">
                      <input type="radio" id="pc-11" />
                    </label>
                    <label class="grey" for="pc-12">
                      <input type="radio" id="pc-12" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
              <div class="product__item">
                <div class="product__item__pic set-bg" data-setbg="http://localhost:8081/mf_img/product/product-5.jpg">
                  <ul class="product__hover">
                    <li><a href="#"><img src="http://localhost:8081/mf_img/icon/heart.png" alt="" /></a></li>
                    <li><a href="#"><img src="http://localhost:8081/mf_img/icon/compare.png" alt="" /> <span>Compare</span></a></li>
                    <li><a href="#"><img src="http://localhost:8081/mf_img/icon/search.png" alt="" /></a></li>
                  </ul>
                </div>
                <div class="product__item__text">
                  <h6>Lether Backpack</h6>
                  <a href="#" class="add-cart">+ Add To Cart</a>
                  <div class="rating">
                    <i class="fa fa-star-o"></i>&nbsp;
                    <i class="fa fa-star-o"></i>&nbsp;
                    <i class="fa fa-star-o"></i>&nbsp;
                    <i class="fa fa-star-o"></i>&nbsp;
                    <i class="fa fa-star-o"></i>&nbsp;
                  </div>
                  <h5>$31.37</h5>
                  <div class="product__color__select">
                    <label for="pc-13">
                      <input type="radio" id="pc-13" />
                    </label>
                    <label class="active black" for="pc-14">
                      <input type="radio" id="pc-14" />
                    </label>
                    <label class="grey" for="pc-15">
                      <input type="radio" id="pc-15" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix hot-sales">
              <div class="product__item sale">
                <div class="product__item__pic set-bg" data-setbg="http://localhost:8081/mf_img/product/product-6.jpg">
                  <span class="label">Sale</span>
                  <ul class="product__hover">
                    <li><a href="#"><img src="http://localhost:8081/mf_img/icon/heart.png" alt="" /></a></li>
                    <li><a href="#"><img src="http://localhost:8081/mf_img/icon/compare.png" alt="" /> <span>Compare</span></a></li>
                    <li><a href="#"><img src="http://localhost:8081/mf_img/icon/search.png" alt="" /></a></li>
                  </ul>
                </div>
                <div class="product__item__text">
                  <h6>Ankle Boots</h6>
                  <a href="#" class="add-cart">+ Add To Cart</a>
                  <div class="rating">
                    <i class="fa fa-star"></i>&nbsp;
                    <i class="fa fa-star"></i>&nbsp;
                    <i class="fa fa-star"></i>&nbsp;
                    <i class="fa fa-star"></i>&nbsp;
                    <i class="fa fa-star-o"></i>&nbsp;
                  </div>
                  <h5>$98.49</h5>
                  <div class="product__color__select">
                    <label for="pc-16">
                      <input type="radio" id="pc-16" />
                    </label>
                    <label class="active black" for="pc-17">
                      <input type="radio" id="pc-17" />
                    </label>
                    <label class="grey" for="pc-18">
                      <input type="radio" id="pc-18" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
              <div class="product__item">
                <div class="product__item__pic set-bg" data-setbg="http://localhost:8081/mf_img/product/product-7.jpg">
                  <ul class="product__hover">
                    <li><a href="#"><img src="http://localhost:8081/mf_img/icon/heart.png" alt="" /></a></li>
                    <li><a href="#"><img src="http://localhost:8081/mf_img/icon/compare.png" alt="" /> <span>Compare</span></a></li>
                    <li><a href="#"><img src="http://localhost:8081/mf_img/icon/search.png" alt="" /></a></li>
                  </ul>
                </div>
                <div class="product__item__text">
                  <h6>T-shirt Contrast Pocket</h6>
                  <a href="#" class="add-cart">+ Add To Cart</a>
                  <div class="rating">
                    <i class="fa fa-star-o"></i>&nbsp;
                    <i class="fa fa-star-o"></i>&nbsp;
                    <i class="fa fa-star-o"></i>&nbsp;
                    <i class="fa fa-star-o"></i>&nbsp;
                    <i class="fa fa-star-o"></i>&nbsp;
                  </div>
                  <h5>$49.66</h5>
                  <div class="product__color__select">
                    <label for="pc-19">
                      <input type="radio" id="pc-19" />
                    </label>
                    <label class="active black" for="pc-20">
                      <input type="radio" id="pc-20" />
                    </label>
                    <label class="grey" for="pc-21">
                      <input type="radio" id="pc-21" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix hot-sales">
              <div class="product__item">
                <div class="product__item__pic set-bg" data-setbg="http://localhost:8081/mf_img/product/product-8.jpg">
                  <ul class="product__hover">
                    <li><a href="#"><img src="http://localhost:8081/mf_img/icon/heart.png" alt="" /></a></li>
                    <li><a href="#"><img src="http://localhost:8081/mf_img/icon/compare.png" alt="" /> <span>Compare</span></a></li>
                    <li><a href="#"><img src="http://localhost:8081/mf_img/icon/search.png" alt="" /></a></li>
                  </ul>
                </div>
                <div class="product__item__text">
                  <h6>Basic Flowing Scarf</h6>
                  <a href="#" class="add-cart">+ Add To Cart</a>
                  <div class="rating">
                    <i class="fa fa-star-o"></i>&nbsp;
                    <i class="fa fa-star-o"></i>&nbsp;
                    <i class="fa fa-star-o"></i>&nbsp;
                    <i class="fa fa-star-o"></i>&nbsp;
                    <i class="fa fa-star-o"></i>&nbsp;
                  </div>
                  <h5>$26.28</h5>
                  <div class="product__color__select">
                    <label for="pc-22">
                      <input type="radio" id="pc-22" />
                    </label>
                    <label class="active black" for="pc-23">
                      <input type="radio" id="pc-23" />
                    </label>
                    <label class="grey" for="pc-24">
                      <input type="radio" id="pc-24" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product Section End */}

      {/* Categories Section Begin */}
      <section class="categories spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <div class="categories__text">
                <h2>Clothings Hot <br /> <span>Shoe Collection</span> <br /> Accessories</h2>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="categories__hot__deal">
                <img src="http://localhost:8081/mf_img/product-sale.png" alt="" />
                <div class="hot__deal__sticker">
                  <span>Sale Of</span>
                  <h5>$29.99</h5>
                </div>
              </div>
            </div>
            <div class="col-lg-4 offset-lg-1">
              <div class="categories__deal__countdown">
                <span>Deal Of The Week</span>
                <h2>Multi-pocket Chest Bag Black</h2>
                <div class="categories__deal__countdown__timer" id="countdown">
                  <div class="cd-item">
                    <span>3</span>
                    <p>Days</p>
                  </div>
                  <div class="cd-item">
                    <span>1</span>
                    <p>Hours</p>
                  </div>
                  <div class="cd-item">
                    <span>50</span>
                    <p>Minutes</p>
                  </div>
                  <div class="cd-item">
                    <span>18</span>
                    <p>Seconds</p>
                  </div>
                </div>
                <a href="#" class="primary-btn">Shop now</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Categories Section End */}

      {/* Instagram Section Begin */}
      <section class="instagram spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="instagram__pic">
                <div class="instagram__pic__item set-bg" style={{ backgroundImage: `url(${instagramList[0]?.inst_image_1})` }}></div>
                <div class="instagram__pic__item set-bg" style={{ backgroundImage: `url(${instagramList[0]?.inst_image_2})` }}></div>
                <div class="instagram__pic__item set-bg" style={{ backgroundImage: `url(${instagramList[0]?.inst_image_3})` }}></div>
                <div class="instagram__pic__item set-bg" style={{ backgroundImage: `url(${instagramList[0]?.inst_image_4})` }}></div>
                <div class="instagram__pic__item set-bg" style={{ backgroundImage: `url(${instagramList[0]?.inst_image_5})` }}></div>
                <div class="instagram__pic__item set-bg" style={{ backgroundImage: `url(${instagramList[0]?.inst_image_6})` }}></div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="instagram__text">
                <h2>{instagramList[0]?.inst_name}</h2>
                <p>{instagramList[0]?.inst_text}</p>
                <h3>{instagramList[0]?.inst_link}</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Instagram Section End  */}

      {/* Latest Blog Section Begin */}
      <section class="latest spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title">
                <span>Latest News</span>
                <h2>Fashion New Trends</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="blog__item">
                <div class="blog__item__pic set-bg" data-setbg="http://localhost:8081/mf_img/blog/blog-1.jpg"></div>
                <div class="blog__item__text">
                  <span><img src="http://localhost:8081/mf_img/icon/calendar.png" alt="" /> 16 February 2020</span>
                  <h5>What Curling Irons Are The Best Ones</h5>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="blog__item">
                <div class="blog__item__pic set-bg" data-setbg="http://localhost:8081/mf_img/blog/blog-2.jpg"></div>
                <div class="blog__item__text">
                  <span><img src="http://localhost:8081/mf_img/icon/calendar.png" alt="" /> 21 February 2020</span>
                  <h5>Eternity Bands Do Last Forever</h5>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="blog__item">
                <div class="blog__item__pic set-bg" data-setbg="http://localhost:8081/mf_img/blog/blog-3.jpg"></div>
                <div class="blog__item__text">
                  <span><img src="http://localhost:8081/mf_img/icon/calendar.png" alt="" /> 28 February 2020</span>
                  <h5>The Health Benefits Of Sunglasses</h5>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Latest Blog Section End */}

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

export default Home;