import React, { useState, useEffect } from 'react';
import './Slider.css';
import Axios from 'axios';
import Navbar from '../Imports/Navbar/Navbar';
import Sidebar from '../Imports/Sidebar/Sidebar';

const Slider = () => {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "numeric", hours: "numeric", hour: '2-digit', minute: '2-digit', second: '2-digit' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  const [heroList, setHeroList] = useState([]);
  let i = 0;

  // get hero item slider
  useEffect(() => {
    Axios.get("http://localhost:8081/api/heroitem").then((data) => {
      console.log(data)
      setHeroList(data.data)
    });
  }, []);

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
                  <h1 className="font-extrabold text-lg">sliders</h1>
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
                              <th className="pb-10 text-sm font-extrabold tracking-wide">No</th>
                              <th className="pb-10 text-sm font-extrabold tracking-wide">Name</th>
                              <th className="pb-10 text-sm font-extrabold tracking-wide">Type</th>
                              <th className="pb-10 text-sm font-extrabold tracking-wide">Image</th>
                              <th className="pb-10 text-sm font-extrabold tracking-wide">Text</th>
                              <th className="pb-10 text-sm font-extrabold tracking-wide">Link</th>
                              <th className="pb-10 text-sm font-extrabold tracking-wide">Published</th>
                              <th className="pb-10 text-sm font-extrabold tracking-wide">CreatedAt</th>
                              <th className="pb-10 text-sm font-extrabold tracking-wide">UpdatedAt</th>
                              <th className="pb-10 text-sm font-extrabold tracking-wide text-right">Actions</th>
                            </tr>
                          </thead>
                          {/* <!-- end table head --> */}

                          {/* <!-- table body --> */}
                          <tbody className="text-left text-gray-600">

                            {/* <th className="mb-4 text-xs font-extrabold tracking-wider flex flex-row items-center w-full">
                                <div className="w-8 h-8 overflow-hidden rounded-full">
                                  <img src="./assets/img/user2.jpg" className="object-cover" />
                                </div>
                                <p className="ml-3 name-1">user name</p>
                              </th> */}

                            {
                              heroList.map((items, key) => {
                                i++;
                                return (
                                  <tr key={key}>

                                    <th className="mb-4 text-xs font-extrabold tracking-wider">{i} </th>
                                    <th className="mb-4 text-xs font-extrabold tracking-wider">{(items.h_name.length < 25) ? items.h_name : items.h_name.substring(0, 25) + " ..."}</th>
                                    <th className="mb-4 text-xs font-extrabold tracking-wider">{(items.h_type.length < 25) ? items.h_type : items.h_type.substring(0, 25) + " ..."}</th>
                                    <th className="mb-4 text-xs font-extrabold tracking-wider">{(items.h_image.length < 25) ? items.h_image : items.h_image.substring(0, 25) + " ..."}</th>
                                    <th className="mb-4 text-xs font-extrabold tracking-wider">{(items.h_text.length < 25) ? items.h_text : items.h_text.substring(0, 25) + " ..."}</th>
                                    <th className="mb-4 text-xs font-extrabold tracking-wider">{(items.h_link.length < 25) ? items.h_link : items.h_link.substring(0, 25) + " ..."}</th>
                                    <th className="mb-4 text-xs font-extrabold tracking-wider text-center">{items.published}</th>
                                    <th className="mb-4 text-xs font-extrabold tracking-wider">{formatDate(items.createdAt)}</th>
                                    <th className="mb-4 text-xs font-extrabold tracking-wider">{formatDate(items.updatedAt)}</th>
                                    <th className="mb-4 text-xs font-extrabold tracking-wider text-right">
                                      {
                                        (items.published == 1) ? <a href="" className="mb-3 capitalize font-medium text-sm hover:text-teal-700 transition ease-in-out duration-500">
                                          <i className="fa-solid fa-eye text-xs mr-2"></i>
                                        </a> : <a href="" className="mb-3 capitalize font-medium text-sm hover:text-teal-700 transition ease-in-out duration-500">
                                          <i className="fa-solid fa-eye-slash text-xs mr-2"></i>
                                        </a>
                                      }
                                      <a href="" className="mb-3 capitalize font-medium text-sm hover:text-teal-700 transition ease-in-out duration-500">
                                        <i className="fa-solid fa-pen-to-square text-xs mr-2"></i>
                                      </a>
                                      <a href="" className="mb-3 capitalize font-medium text-sm hover:text-teal-700 transition ease-in-out duration-500">
                                        <i className="fa-solid fa-trash text-xs mr-2"></i>
                                      </a>
                                    </th>

                                  </tr>
                                );
                              })
                            }

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

export default Slider;