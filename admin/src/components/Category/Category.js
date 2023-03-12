import React, { useState, useEffect } from 'react';
import './Category.css';
import Axios from 'axios';
import Navbar from '../Imports/Navbar/Navbar';
import Sidebar from '../Imports/Sidebar/Sidebar';

const Category = () => {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "numeric", hours: "numeric", hour: '2-digit', minute: '2-digit', second: '2-digit' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  const [categoryList, setCategoryList] = useState([]);
  let i = 0;

  // get hero item slider
  useEffect(() => {
    Axios.get("http://localhost:8081/api/banneritem").then((data) => {
      console.log(data)
      setCategoryList(data.data)
    });
  }, []);
  
  return (
    <>
      {/* <!-- start navbar --> */}
      <Navbar />
      {/* end navbar */}

      {/* <!-- strat wrapper --> */}
      <div class="h-screen flex flex-row flex-wrap">

        {/* <!-- start sidebar --> */}
        <Sidebar />
        {/* <!-- end sidbar --> */}

        {/* <!-- strat content --> */}
        <div class="bg-gray-100 flex-1 p-6 md:mt-16">

          {/* <!-- best seller & traffic --> */}
          <div class="grid grid-cols-1 lg:grid-cols-1 gap-5 mt-2">
            <div class="card">

              <div class="card-body">
                <div class="flex flex-row justify-between items-center">
                  <h1 class="font-extrabold text-lg">category</h1>
                  <a href="#" class="btn-gray text-sm">Add New</a>
                </div>

                <div class="flex flex-col overflow-x-auto">
                  <div class="sm:-mx-2 lg:-mx-2">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                      <div class="overflow-x-auto">
                        {/* <!-- start a table --> */}
                        <table class="table-fixed mt-5 min-w-full">

                          {/* <!-- table head --> */}
                          <thead class="text-left">
                            <tr>
                              <th class="pb-10 text-sm font-extrabold tracking-wide">No</th>
                              <th class="pb-10 text-sm font-extrabold tracking-wide">Name</th>
                              <th class="pb-10 text-sm font-extrabold tracking-wide">Image</th>
                              <th class="pb-10 text-sm font-extrabold tracking-wide">Link</th>
                              <th class="pb-10 text-sm font-extrabold tracking-wide">Published</th>
                              <th class="pb-10 text-sm font-extrabold tracking-wide">CreatedAt</th>
                              <th class="pb-10 text-sm font-extrabold tracking-wide">UpdatedAt</th>
                              <th class="pb-10 text-sm font-extrabold tracking-wide text-right">Actions</th>
                            </tr>
                          </thead>
                          {/* <!-- end table head --> */}

                          {/* <!-- table body --> */}
                          <tbody class="text-left text-gray-600">

                            {/* <!-- item --> */}
                            {
                              categoryList.map((items, key) => {
                                i++;
                                return (
                                  <tr>

                                    <th class="mb-4 text-xs font-extrabold tracking-wider">{i}</th>
                                    <th class="mb-4 text-xs font-extrabold tracking-wider">{(items.b_name.length < 25) ? items.b_name : items.b_name.substring(0, 25) + " ..."}</th>
                                    <th class="mb-4 text-xs font-extrabold tracking-wider">{(items.b_image.length < 25) ? items.b_image : items.b_image.substring(0, 25) + " ..."}</th>
                                    <th class="mb-4 text-xs font-extrabold tracking-wider">{(items.b_link.length < 25) ? items.b_link : items.b_link.substring(0, 25) + " ..."}</th>
                                    <th class="mb-4 text-xs font-extrabold tracking-wider text-center">{items.published}</th>
                                    <th class="mb-4 text-xs font-extrabold tracking-wider">{formatDate(items.createdAt)}</th>
                                    <th class="mb-4 text-xs font-extrabold tracking-wider">{formatDate(items.updatedAt)}</th>
                                    <th class="mb-4 text-xs font-extrabold tracking-wider text-right">
                                      {
                                        (items.published == 1) ? <a href="" class="mb-3 capitalize font-medium text-sm hover:text-teal-700 transition ease-in-out duration-500">
                                          <i class="fa-solid fa-eye text-xs mr-2"></i>
                                        </a> : <a href="" class="mb-3 capitalize font-medium text-sm hover:text-teal-700 transition ease-in-out duration-500">
                                          <i class="fa-solid fa-eye-slash text-xs mr-2"></i>
                                        </a>
                                      }
                                      <a href="" class="mb-3 capitalize font-medium text-sm hover:text-teal-700 transition ease-in-out duration-500">
                                        <i class="fa-solid fa-pen-to-square text-xs mr-2"></i>
                                      </a>
                                      <a href="" class="mb-3 capitalize font-medium text-sm hover:text-teal-700 transition ease-in-out duration-500">
                                        <i class="fa-solid fa-trash text-xs mr-2"></i>
                                      </a>
                                    </th>

                                  </tr>
                                );
                              })
                            }
                            {/* <!-- end item --> */}

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

export default Category;