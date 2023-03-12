import './Shop.css';
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Navbar from '../Imports/Navbar/Navbar';
import Sidebar from '../Imports/Sidebar/Sidebar';

const Shop = () => {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    return Axios.get("http://localhost:8081/api/product")
      .then((response) => setUser(response.data));
  }

  useEffect(() => {
    fetchData();
  }, [])
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "numeric", hours: "numeric", hour: '2-digit', minute: '2-digit', second: '2-digit' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }
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
                  <h1 class="font-extrabold text-lg">shop</h1>
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
                              <th class="pb-10 text-sm font-extrabold tracking-wide">No&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                              <th class="pb-10 text-sm font-extrabold tracking-wide">Price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                              <th class="pb-10 text-sm font-extrabold tracking-wide">Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                              <th class="pb-10 text-sm font-extrabold tracking-wide">Rating&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                              <th class="pb-10 text-sm font-extrabold tracking-wide">Link&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                              <th class="pb-10 text-sm font-extrabold tracking-wide">Img1</th>
                              <th class="pb-10 text-sm font-extrabold tracking-wide">Img2</th>
                              <th class="pb-10 text-sm font-extrabold tracking-wide">Img3</th>
                              <th class="pb-10 text-sm font-extrabold tracking-wide">Img4</th>
                              <th class="pb-10 text-sm font-extrabold tracking-wide">Text&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                              <th class="pb-10 text-sm font-extrabold tracking-wide">Size</th>
                              <th class="pb-10 text-sm font-extrabold tracking-wide">Color</th>
                              <th class="pb-10 text-sm font-extrabold tracking-wide">SKU</th>
                              <th class="pb-10 text-sm font-extrabold tracking-wide">Catagories&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                              <th class="pb-10 text-sm font-extrabold tracking-wide">Tag</th>
                              <th class="pb-10 text-sm font-extrabold tracking-wide">Description1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                              <th class="pb-10 text-sm font-extrabold tracking-wide">Description2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                              <th class="pb-10 text-sm font-extrabold tracking-wide">Description3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                              <th class="pb-10 text-sm font-extrabold tracking-wide">Customer_review1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                              <th class="pb-10 text-sm font-extrabold tracking-wide">Customer_review2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                              <th class="pb-10 text-sm font-extrabold tracking-wide">Addition_infomation1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                              <th class="pb-10 text-sm font-extrabold tracking-wide">Addition_infomation2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                              <th class="pb-10 text-sm font-extrabold tracking-wide">Addition_infomation3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                              <th class="pb-10 text-sm font-extrabold tracking-wide">Shop_order&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                              <th class="pb-10 text-sm font-extrabold tracking-wide">Enable&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                              <th class="pb-10 text-sm font-extrabold tracking-wide">CreatedAt&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                              <th class="pb-10 text-sm font-extrabold tracking-wide">UpdatedAt&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                              <th class="pb-10 text-sm font-extrabold tracking-wide">Action&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                            </tr>
                          </thead>
                          {/* <!-- end table head --> */}

                          {/* <!-- table body --> */}
                          <tbody class="text-left text-gray-600">


                            {/* <!-- item --> */}
                            {user && user.length > 0 && user.map((userObj, index) => (
                              <tr>
                                <th class="mb-4 text-xs font-extrabold tracking-wider">{userObj.id}</th>
                                <th class="mb-4 text-xs font-extrabold tracking-wider">{userObj.price}</th>
                                <th class="mb-4 text-xs font-extrabold tracking-wider">{userObj.name}</th>
                                <th class="mb-4 text-xs font-extrabold tracking-wider">{userObj.rating}</th>
                                <th class="mb-4 text-xs font-extrabold tracking-wider">{userObj.link}</th>
                                <th class="mb-4 text-xs font-extrabold tracking-wider">{userObj.img1}</th>
                                <th class="mb-4 text-xs font-extrabold tracking-wider">{userObj.img2}</th>
                                <th class="mb-4 text-xs font-extrabold tracking-wider">{userObj.img3}</th>
                                <th class="mb-4 text-xs font-extrabold tracking-wider">{userObj.img4}</th>
                                <th class="mb-4 text-xs font-extrabold tracking-wider">{userObj.text.substring(0, 25)}</th>
                                <th class="mb-4 text-xs font-extrabold tracking-wider">{userObj.size}</th>
                                <th class="mb-4 text-xs font-extrabold tracking-wider">{userObj.color}</th>
                                <th class="mb-4 text-xs font-extrabold tracking-wider">{userObj.sku}</th>
                                <th class="mb-4 text-xs font-extrabold tracking-wider">{userObj.catagories}</th>
                                <th class="mb-4 text-xs font-extrabold tracking-wider">{userObj.tag}</th>
                                <th class="mb-4 text-xs font-extrabold tracking-wider">{userObj.description1.substring(0, 25)}</th>
                                <th class="mb-4 text-xs font-extrabold tracking-wider">{userObj.description2.substring(0, 25)}</th>
                                <th class="mb-4 text-xs font-extrabold tracking-wider">{userObj.description3.substring(0, 25)}</th>
                                <th class="mb-4 text-xs font-extrabold tracking-wider">{userObj.customer_review1.substring(0, 25)}</th>
                                <th class="mb-4 text-xs font-extrabold tracking-wider">{userObj.customer_review2.substring(0, 25)}</th>
                                <th class="mb-4 text-xs font-extrabold tracking-wider">{userObj.addition_infomation1.substring(0, 25)}</th>
                                <th class="mb-4 text-xs font-extrabold tracking-wider">{userObj.addition_infomation2.substring(0, 25)}</th>
                                <th class="mb-4 text-xs font-extrabold tracking-wider">{userObj.addition_infomation3.substring(0, 25)}</th>
                                <th class="mb-4 text-xs font-extrabold tracking-wider">{userObj.shop_order}</th>
                                <th class="mb-4 text-xs font-extrabold tracking-wider">{userObj.enable}</th>
                                <th class="mb-4 text-xs font-extrabold tracking-wider">{formatDate(userObj.createdAt)}</th>
                                <th class="mb-4 text-xs font-extrabold tracking-wider">{formatDate(userObj.updatedAt)}</th>
                                <th class="mb-4 text-xs font-extrabold tracking-wider">
                                  <a href="" class="mb-3 capitalize font-medium text-sm hover:text-teal-700 transition ease-in-out duration-500">
                                    <i class="fa-solid fa-eye text-xs mr-2"></i>
                                  </a>
                                  <a href="" class="mb-3 capitalize font-medium text-sm hover:text-teal-700 transition ease-in-out duration-500">
                                    <i class="fa-solid fa-pen-to-square text-xs mr-2"></i>
                                  </a>
                                  <a href="" class="mb-3 capitalize font-medium text-sm hover:text-teal-700 transition ease-in-out duration-500">
                                    <i class="fa-solid fa-trash text-xs mr-2"></i>
                                  </a>
                                </th>
                              </tr>
                            ))}
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

export default Shop;