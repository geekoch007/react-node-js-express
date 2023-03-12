import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import './Blog.css';
import { apiBlogList } from './api';
import { formatDate } from '../../utils/format';
import Navbar from '../Imports/Navbar/Navbar';
import Sidebar from '../Imports/Sidebar/Sidebar';

const Blog = () => {

  console.count('Blog');

  const [blog, setBlog] = useState([]);

  const fetchData = () => {
    return apiBlogList().then(data => setBlog(data));
  }

  useEffect(() => {
    fetchData();
  }, [])

  // useEffect(() => {
  //   console.log('blog: ', blog);
  //   setBlog(1);
  // }, [blog, setBlog]);

  return (
    <>
      {/* <!-- start navbar --> */}
      <Navbar />
      {/* end navbar */}

      {/* <!-- strat wrapper --> */}
      <div className="h-screen flex flex-row flex-wrap">

        {/* <!-- start sidebar --> */}
        <Sidebar />
        {/* <!-- end sidbar --> */}

        {/* <!-- strat content --> */}
        <div className="bg-gray-100 flex-1 p-6 md:mt-16">

          {/* <!-- best seller & traffic --> */}
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-5 mt-2">
            <div className="card">

              <div className="card-body">
                <div className="flex flex-row justify-between items-center">
                  <h1 className="font-extrabold text-lg">blog</h1>
                  <a href="#" className="btn-gray text-sm">Add New</a>
                </div>

                <div className="flex flex-col overflow-x-auto">
                  <div className="sm:-mx-2 lg:-mx-2">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                      <div className="overflow-x-auto">
                        {/* <!-- start a table --> */}
                        <table className="table-fixed mt-5 min-w-full">

                          {/* <!-- table head --> */}
                          <thead className="text-left">
                            <tr>
                              <th className="pb-10 text-sm font-extrabold tracking-wide">ID &nbsp;&nbsp;&nbsp;</th>
                              <th className="pb-10 text-sm font-extrabold tracking-wide">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Title</th>
                              <th className="pb-10 text-sm font-extrabold tracking-wide">Date</th>
                              <th className="pb-10 text-sm font-extrabold tracking-wide">Image</th>
                              <th className="pb-10 text-sm font-extrabold tracking-wide">Link</th>
                              <th className="pb-10 text-sm font-extrabold tracking-wide">Auther</th>
                              {/* <th className="pb-10 text-sm font-extrabold tracking-wide">Comment</th>
                              <th className="pb-10 text-sm font-extrabold tracking-wide">Description1</th>
                              <th className="pb-10 text-sm font-extrabold tracking-wide">Description2</th>
                              <th className="pb-10 text-sm font-extrabold tracking-wide">Description3</th>
                              <th className="pb-10 text-sm font-extrabold tracking-wide">Description4</th> */}
                              {/* <th className="pb-10 text-sm font-extrabold tracking-wide">Note</th> */}
                              <th className="pb-10 text-sm font-extrabold tracking-wide">&nbsp;&nbsp;&nbsp;&nbsp; Auther_img</th>
                              {/* <th className="pb-10 text-sm font-extrabold tracking-wide">Tag1</th>
                              <th className="pb-10 text-sm font-extrabold tracking-wide">Tag2</th>
                              <th className="pb-10 text-sm font-extrabold tracking-wide">Tag3</th> */}
                              <th className="pb-10 text-sm font-extrabold tracking-wide">Order</th>
                              <th className="pb-10 text-sm font-extrabold tracking-wide">Enable</th>
                              <th className="pb-10 text-sm font-extrabold tracking-wide">CreatedAt</th>
                              <th className="pb-10 text-sm font-extrabold tracking-wide">UpdatedAt</th>
                              <th className="pb-10 text-sm font-extrabold tracking-wide">Actions</th>
                            </tr>
                          </thead>
                          {/* <!-- end table head --> */}

                          {/* <!-- table body --> */}
                          <tbody className="text-left text-gray-600">


                            {blog && blog.length > 0 && blog.map((blogObj, index) => (
                              <tr>
                                <th className="mb-4 text-xs font-extrabold tracking-wider">{blogObj.id}</th>
                                <th className="mb-4 text-xs font-extrabold tracking-wider">{blogObj.title.substring(0, 23)}</th>
                                <th className="mb-4 text-xs font-extrabold tracking-wider">{formatDate(blogObj.date).substring(0, 11)}</th>
                                <th className="mb-4 text-xs font-extrabold tracking-wider">{blogObj.img.substring(0, 21)}</th>
                                <th className="mb-4 text-xs font-extrabold tracking-wider">{blogObj.link}</th>
                                <th className="mb-4 text-xs font-extrabold tracking-wider">{blogObj.auther}</th>
                                {/* <th className="mb-4 text-xs font-extrabold tracking-wider">{blogObj.comment}</th>
                                <th className="mb-4 text-xs font-extrabold tracking-wider">{blogObj.describetion1.substring(0, 25)}</th>
                                <th className="mb-4 text-xs font-extrabold tracking-wider">{blogObj.describetion2.substring(0, 25)}</th>
                                <th className="mb-4 text-xs font-extrabold tracking-wider">{blogObj.describetion3.substring(0, 25)}</th>
                                <th className="mb-4 text-xs font-extrabold tracking-wider">{blogObj.describetion4.substring(0, 25)}</th> */}
                                {/* <th className="mb-4 text-xs font-extrabold tracking-wider">{blogObj.note.substring(0, 25)}</th> */}
                                <th className="mb-4 text-xs font-extrabold tracking-wider">{blogObj.auther_img.substring(0, 21)}</th>
                                {/* <th className="mb-4 text-xs font-extrabold tracking-wider">{blogObj.tag1}</th>
                                <th className="mb-4 text-xs font-extrabold tracking-wider">{blogObj.tag2}</th>
                                <th className="mb-4 text-xs font-extrabold tracking-wider">{blogObj.tag3}</th> */}
                                <th className="mb-4 text-xs font-extrabold tracking-wider">{blogObj.b_order}</th>
                                <th className="mb-4 text-xs font-extrabold tracking-wider">{blogObj.enable}</th>
                                <th className="mb-4 text-xs font-extrabold tracking-wider">{formatDate(blogObj.createdAt).substring(0, 11)}</th>
                                <th className="mb-4 text-xs font-extrabold tracking-wider">{formatDate(blogObj.updatedAt).substring(0, 11)}</th>
                                <th className="mb-4 text-xs font-extrabold tracking-wider">
                                  <a href="" className="mb-3 capitalize font-medium text-sm hover:text-teal-700 transition ease-in-out duration-500">
                                    <i className="fa-solid fa-eye text-xs mr-2"></i>
                                  </a>
                                  <a href="" className="mb-3 capitalize font-medium text-sm hover:text-teal-700 transition ease-in-out duration-500">
                                    <i className="fa-solid fa-pen-to-square text-xs mr-2"></i>
                                  </a>
                                  <a href="" className="mb-3 capitalize font-medium text-sm hover:text-teal-700 transition ease-in-out duration-500">
                                    <i className="fa-solid fa-trash text-xs mr-2"></i>
                                  </a>
                                </th>
                              </tr>
                            ))}

                            {/* <!-- item --> */}

                          </tbody>
                          {/* <!-- end table body --> */}

                        </table>
                        {/* <!-- end a table --> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          {/* <!-- end best seller & traffic --> */}


        </div>
        {/* <!-- end content --> */}

      </div>
      {/* <!-- end wrapper --> */}
    </>
  )
}

export default Blog;