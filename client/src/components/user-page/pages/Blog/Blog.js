import React, { useState, useEffect } from "react";
import "./blog.css";
import Axios from "axios";

import PageLayout from "../../layouts/PageLayout";

import { formatDate } from "../../../../utils/format";

const { REACT_APP_API_URL } = process.env || {};

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      return Axios.get(`${REACT_APP_API_URL}/api/blog`)
        .then((response) => setPosts(response.data))
        .catch((error) => console.log(error));
    };

    fetchData();
  }, []);

  return (
    <PageLayout>
      {/* Breadcrumb Section Begin  */}
      <section
        className="breadcrumb-blog set-bg"
        data-setbg="http://localhost:8081/mf_img/breadcrumb-bg.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Our Blog</h2>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb Section End */}

      {/* Blog Section Begin */}
      <section className="blog spad">
        <div className="container">
          <div className="row">
            {Array.isArray(posts) && posts.length > 0 ? (
              posts.map((blogObj, index) => (
                <div key={index} className="col-lg-4 col-md-6 col-sm-6">
                  <div className="blog__item">
                    <div
                      className="blog__item__pic set-bg"
                      style={{ backgroundImage: `url("${blogObj.img}")` }}
                    ></div>
                    <div className="blog__item__text">
                      <span>
                        <img
                          src="http://localhost:8081/mf_img/icon/calendar.png"
                          alt=""
                        />{" "}
                        {formatDate(blogObj.date)}
                      </span>
                      <h5>{blogObj.title}</h5>
                      <a href={`/blog/${blogObj.id} `}>Read More</a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="alert">No data ...</div>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Blog Section End */}
    </PageLayout>
  );
};

export default Blog;
