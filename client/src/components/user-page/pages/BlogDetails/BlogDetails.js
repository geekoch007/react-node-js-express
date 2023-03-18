import React, { useState, useEffect } from 'react';
import './blogdetails.css';
import Axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

import Menu from '../../Imports/Menu';
import Header from '../../Imports/Header';
import Footer from '../../Imports/Footer';


const BlogDetails = () => {
  const [title, setTitle] = useState("");
  const [auther, setAuther] = useState("");
  const [date, setDate] = useState("");
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }
  const [comment, setComment] = useState("");
  const [img, setImg] = useState("");
  const [description1, setDescription1] = useState("");
  const [description2, setDescription2] = useState("");
  const [description3, setDescription3] = useState("");
  const [description4, setDescription4] = useState("");
  const [note, setNote] = useState("");
  const [auther_img, setAuther_img] = useState("");
  const [tag1, setTag1] = useState("");
  const [tag2, setTag2] = useState("");
  const [tag3, setTag3] = useState("");

  let { id } = useParams();

  const fetchData = () => {
    return Axios.get(`http://localhost:8081/api/getBlog/${id}`)
      .then((data) => {
        setTitle(data.data[0].title);
        setAuther(data.data[0].auther);
        setDate(data.data[0].date);
        setComment(data.data[0].comment);
        setImg(data.data[0].img);
        setDescription1(data.data[0].describetion1);
        setDescription2(data.data[0].describetion2);
        setDescription3(data.data[0].describetion3);
        setDescription4(data.data[0].describetion4);
        setNote(data.data[0].note);
        setAuther_img(data.data[0].auther_img);
        setTag1(data.data[0].tag1);
        setTag2(data.data[0].tag2);
        setTag3(data.data[0].tag3);
      });
  }
  useEffect(() => {
    fetchData();
  }, [])

  console.log(BlogDetails);


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

      {/* Blog Details Hero Begin */}
      <section className="blog-hero spad">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-9 text-center">
              <div className="blog__hero__text">
                <h2>{title}</h2>
                <ul>
                  <li>by {auther}</li>
                  <li>{formatDate(date)}</li>
                  <li>{comment} Comment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Details Hero End  */}

      {/* Blog Details Section Begin */}
      <section className="blog-details spad">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-12">
              <div className="blog__details__pic">
                <img src={img} alt="" />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="blog__details__content">
                <div className="blog__details__share">
                  <span>share</span>
                  <ul>
                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#" className="youtube"><i className="fa fa-youtube-play"></i></a></li>
                    <li><a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a></li>
                  </ul>
                </div>
                <div className="blog__details__text">
                  <p>{description1}</p>
                  <p>{description2}</p>
                </div>
                <div className="blog__details__quote">
                  <i className="fa fa-quote-left"></i>
                  <p>{note}</p>
                  <h6>_ {auther} _</h6>
                </div>
                <div className="blog__details__text">
                  <p>{description3}</p>
                  <p>{description4}</p>
                </div>
                <div className="blog__details__option">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="blog__details__author">
                        <div className="blog__details__author__pic">
                          <img src={auther_img} alt="" />
                        </div>
                        <div className="blog__details__author__text">
                          <h5>{auther}</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="blog__details__tags">
                        <a href="#">{tag1}</a>
                        <a href="#">{tag2}</a>
                        <a href="#">{tag3}</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog__details__btns">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <a href="#" className="blog__details__btns__item">
                        <p><span className="arrow_left"></span> Previous Pod</p>
                        <h5>It S Classified How To Utilize Free Classified Ad Sites</h5>
                      </a>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <a href="#" className="blog__details__btns__item blog__details__btns__item--next">
                        <p>Next Pod <span className="arrow_right"></span></p>
                        <h5>Tips For Choosing The Perfect Gloss For Your Lips</h5>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="blog__details__comment">
                  <h4>Leave A Comment</h4>
                  <form action="#">
                    <div className="row">
                      <div className="col-lg-4 col-md-4">
                        <input type="text" placeholder="Name" />
                      </div>
                      <div className="col-lg-4 col-md-4">
                        <input type="text" placeholder="Email" />
                      </div>
                      <div className="col-lg-4 col-md-4">
                        <input type="text" placeholder="Phone" />
                      </div>
                      <div className="col-lg-12 text-center">
                        <textarea placeholder="Comment"></textarea>
                        <button type="submit" className="site-btn">Post Comment</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Details Section End */}

      {/* Footer Section Begin */}
      <Footer />
      {/* Footer Section End  */}

      {/* Search Begin */}
      <div className="search-model">
        <div className="h-100 d-flex align-items-center justify-content-center">
          <div className="search-close-switch">+</div>
          <form className="search-model-form">
            <input type="text" id="search-input" placeholder="Search here....." />
          </form>
        </div>
      </div>
      {/* Search End */}
    </>
  )
}

export default BlogDetails;