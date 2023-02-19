import React, { useState, useEffect } from 'react';
import './shop-details.css';
import { useParams, useNavigate } from 'react-router-dom';
import 'assets/css/bootstrap.min.css';
import 'assets/css/elegant-icons.css';
import 'assets/css/font-awesome.min.css';
import 'assets/css/style.css';
import 'assets/css/style.css.map';
import Axios from 'axios';
import $ from 'jquery';
import Menu from '../../Imports/Menu';
import Header from '../../Imports/Header';
import Footer from '../../Imports/Footer';

setTimeout(function () {
    $(".loader").fadeOut();
    $("#preloder").delay(200).fadeOut("slow");
  
    //Canvas Menu
    $(".canvas__open").on('click', function () {
      $(".offcanvas-menu-wrapper").addClass("active");
      $(".offcanvas-menu-overlay").addClass("active");
    });
  
    $(".offcanvas-menu-overlay").on('click', function () {
      $(".offcanvas-menu-wrapper").removeClass("active");
      $(".offcanvas-menu-overlay").removeClass("active");
    });
  }, 10);


const ShopDetails = () => {
    const[ user, setUser] = useState([]);
    const [name, setname] = useState("");
    const [rating, setrating] = useState("");
    const [price, setprice] = useState("");
    const [img1, setimg1] = useState("");
    const [img2, setimg2] = useState("");
    const [img3, setimg3] = useState("");
    const [img4, setimg4] = useState("");
    const [text, settext] = useState("");
    const [sku, setsku] = useState("");
    const [catagories, setcatagories] = useState("");
    const [tag, settag] = useState("");
    const [description1, setdescription1] = useState("");
    const [description2, setdescription2] = useState("");
    const [description3, setdescription3] = useState("");
    const [customer_review1, setcustomer_review1] = useState("");
    const [customer_review2, setcustomer_review2] = useState("");
    const [addition_infomation1, setaddition_infomation1] = useState("");
    const [addition_infomation2, setaddition_infomation2] = useState("");
    const [addition_infomation3, setaddition_infomation3] = useState("");


    const fetchData = () => {
        return Axios.get(`http://localhost:8081/api/getshop/${id}`)
              .then((data) => {
                setname(data.data[0].name);
                setrating(data.data[0].rating);
                setprice(data.data[0].price);
                setimg1(data.data[0].img1);
                setimg2(data.data[0].img2);
                setimg3(data.data[0].img3);
                setimg4(data.data[0].img4);
                settext(data.data[0].text);
                setsku(data.data[0].sku);
                setcatagories(data.data[0].catagories);
                settag(data.data[0].tag);
                setdescription1(data.data[0].description1);
                setdescription2(data.data[0].description2);
                setdescription3(data.data[0].description3);
                setcustomer_review1(data.data[0].customer_review1);
                setcustomer_review2(data.data[0].customer_review2);
                setaddition_infomation1(data.data[0].addition_infomation1);
                setaddition_infomation2(data.data[0].addition_infomation2);
                setaddition_infomation3(data.data[0].addition_infomation3);
              });
      }
      useEffect(() => {
        fetchData();
      },[])
      let { id } = useParams();

      const[ user1, setUser1] = useState([]);

  const fetchData1 = () => {
    return Axios.get("http://localhost:8081/api/product")
          .then((response) => setUser1(response.data));
  }

  useEffect(() => {
    fetchData1();
  },[])
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

            {/* Shop Details Section Begin */}
            <section class="shop-details">
                <div class="product__details__pic">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="product__details__breadcrumb">
                                    <a href="/">Home</a>
                                    <a href="/shop">Shop</a>
                                    <span>Product Details</span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-3 col-md-3">
                                <ul class="nav nav-tabs" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">
                                            <div class="product__thumb__pic set-bg" style={{backgroundImage: `url("${img1}") `}}>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" data-toggle="tab" href="#tabs-2" role="tab">
                                            <div class="product__thumb__pic set-bg" style={{backgroundImage: `url("${img2}") `}}>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" data-toggle="tab" href="#tabs-3" role="tab">
                                            <div class="product__thumb__pic set-bg" style={{backgroundImage: `url("${img3}") `}}>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" data-toggle="tab" href="#tabs-4" role="tab">
                                            <div class="product__thumb__pic set-bg" style={{backgroundImage: `url("${img4}") `}}>
                                                <i class="fa fa-play"></i>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-lg-6 col-md-9">
                                <div class="tab-content">
                                    <div class="tab-pane active" id="tabs-1" role="tabpanel">
                                        <div class="product__details__pic__item">
                                            <img src={img1} alt="" />
                                        </div>
                                    </div>
                                    <div class="tab-pane" id="tabs-2" role="tabpanel">
                                        <div class="product__details__pic__item">
                                            <img src={img2} alt="" />
                                        </div>
                                    </div>
                                    <div class="tab-pane" id="tabs-3" role="tabpanel">
                                        <div class="product__details__pic__item">
                                            <img src={img3} alt="" />
                                        </div>
                                    </div>
                                    <div class="tab-pane" id="tabs-4" role="tabpanel">
                                        <div class="product__details__pic__item">
                                            <img src={img4} alt="" />
                                            <a href="https://www.youtube.com/watch?v=8PJ3_p7VqHw&list=RD8PJ3_p7VqHw&start_radio=1" class="video-popup"><i class="fa fa-play"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="product__details__content">
                    <div class="container">
                        <div class="row d-flex justify-content-center">
                            <div class="col-lg-8">
                                <div class="product__details__text">
                                    <h4>{name}</h4>
                                    <div class="rating">
                                        <i class="fa fa-star"></i>&nbsp;
                                        <i class="fa fa-star"> </i>&nbsp;
                                        <i class="fa fa-star"> </i>&nbsp;
                                        <i class="fa fa-star"> </i>&nbsp;
                                        <i class="fa fa-star-o"> </i>&nbsp;
                                        <span>{rating} review</span>
                                    </div>
                                    <h3>${price}</h3>
                                    <p>{text}</p>
                                    <div class="product__details__option">
                                        <div class="product__details__option__size">
                                            <span>Size:</span>
                                            <label for="xxl">xxl
                                                <input type="radio" id="xxl" />
                                            </label>
                                            <label class="active" for="xl">xl
                                                <input type="radio" id="xl" />
                                            </label>
                                            <label for="l">l
                                                <input type="radio" id="l" />
                                            </label>
                                            <label for="sm">s
                                                <input type="radio" id="sm" />
                                            </label>
                                        </div>
                                        <div class="product__details__option__color">
                                            <span>Color:</span>
                                            <label class="c-1" for="sp-1">
                                                <input type="radio" id="sp-1" />
                                            </label>
                                            <label class="c-2" for="sp-2">
                                                <input type="radio" id="sp-2" />
                                            </label>
                                            <label class="c-3" for="sp-3">
                                                <input type="radio" id="sp-3" />
                                            </label>
                                            <label class="c-4" for="sp-4">
                                                <input type="radio" id="sp-4" />
                                            </label>
                                            <label class="c-9" for="sp-9">
                                                <input type="radio" id="sp-9" />
                                            </label>
                                        </div>
                                    </div>
                                    <div class="product__details__cart__option">
                                        <div class="quantity">
                                            <div class="pro-qty">
                                                <input type="text" value="1" />
                                            </div>
                                        </div>
                                        <a href="#" class="primary-btn">add to cart</a>
                                    </div>
                                    <div class="product__details__btns__option">
                                        <a href="#"><i class="fa fa-heart"></i> add to wishlist</a>
                                        <a href="#"><i class="fa fa-exchange"></i> Add To Compare</a>
                                    </div>
                                    <div class="product__details__last__option">
                                        <h5><span>Guaranteed Safe Checkout</span></h5>
                                        <img src="assets/img/shop-details/details-payment.png" alt="" />
                                        <ul>
                                            <li><spam>SKU:        </spam>{sku}</li>
                                            <li><spam>Catagories:      </spam>{catagories}</li>
                                            <li><spam>Tag:       </spam>{tag}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="product__details__tab">
                                    <ul class="nav nav-tabs" role="tablist">
                                        <li class="nav-item">
                                            <a class="nav-link active" data-toggle="tab" href="#tabs-5"
                                                role="tab">Description</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" data-toggle="tab" href="#tabs-6" role="tab">Customer
                                                Previews(5)</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" data-toggle="tab" href="#tabs-7" role="tab">Additional
                                                information</a>
                                        </li>
                                    </ul>
                                    <div class="tab-content">
                                        <div class="tab-pane active" id="tabs-5" role="tabpanel">
                                            <div class="product__details__tab__content">
                                                <p class="note">{description1}</p>
                                                <div class="product__details__tab__content__item">
                                                    <h5>Products Infomation</h5>
                                                    <p>{description2}</p>
                                                </div>
                                                <div class="product__details__tab__content__item">
                                                    <h5>Material used</h5>
                                                    <p>{description3}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane" id="tabs-6" role="tabpanel">
                                            <div class="product__details__tab__content">
                                                <div class="product__details__tab__content__item">
                                                    <h5>Products Infomation</h5>
                                                    <p>{customer_review1}</p>
                                                </div>
                                                <div class="product__details__tab__content__item">
                                                    <h5>Material used</h5>
                                                    <p>{customer_review2}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane" id="tabs-7" role="tabpanel">
                                            <div class="product__details__tab__content">
                                                <p class="note">{addition_infomation1}</p>
                                                <div class="product__details__tab__content__item">
                                                    <h5>Products Infomation</h5>
                                                    <p>{addition_infomation2}</p>
                                                </div>
                                                <div class="product__details__tab__content__item">
                                                    <h5>Material used</h5>
                                                    <p>{addition_infomation3}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Shop Details Section End  */}

            {/* Related Section Begin */}
            <section class="related spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <h3 class="related-title">Related Product</h3>
                        </div>
                    </div>
                    <div class="row">
                    {user1 && user1.length > 0 && user1.slice(0, 4).map((userObj, index) => (
                   <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
                   <div class="product__item">
                     <div class="product__item__pic set-bg" style={{backgroundImage: `url("${userObj.img1}") `}}>
                       <ul class="product__hover">
                         <li><a href="#"><img src="http://localhost:8081/mf_img/icon/heart.png" alt="" /></a></li>
                         <li><a href="#"><img src="http://localhost:8081/mf_img/icon/compare.png" alt="" /> <span>Compare</span></a>
                         </li>
                         <li><a href={`/shop-details/${userObj.id} `}><img src="http://localhost:8081/mf_img/icon/search.png" alt="" /></a></li>
                       </ul>
                     </div>
                     <div class="product__item__text">
                       <h6>{userObj.name}</h6>
                       <a href="#" class="add-cart">+ Add To Cart</a>
                       <div class="rating">
                         <i class="fa fa-star-o"></i>&nbsp;
                         <i class="fa fa-star-o"></i>&nbsp;
                         <i class="fa fa-star-o"></i>&nbsp;
                         <i class="fa fa-star-o"></i>&nbsp;
                         <i class="fa fa-star-o"></i>&nbsp;
                       </div>
                       <h5>${userObj.price}</h5>
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
                 ))}
                    </div>
                </div>
            </section>
            {/* Related Section End */}


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

export default ShopDetails;