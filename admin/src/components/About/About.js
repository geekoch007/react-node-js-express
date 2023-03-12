import React from 'react';
import './About.css';
import Navbar from '../Imports/Navbar/Navbar';
import Sidebar from '../Imports/Sidebar/Sidebar';

const About = () => {
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
                  <h1 class="font-extrabold text-lg">About</h1>
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
                              <th class="pb-10 text-sm font-extrabold tracking-wide">customer</th>
                              <th class="pb-10 text-sm font-extrabold tracking-wide">Product</th>
                              <th class="pb-10 text-sm font-extrabold tracking-wide">Invoice</th>
                              <th class="pb-10 text-sm font-extrabold tracking-wide">price</th>
                              <th class="pb-10 text-sm font-extrabold tracking-wide">status</th>
                              <th class="pb-10 text-sm font-extrabold tracking-wide">status</th>
                              <th class="pb-10 text-sm font-extrabold tracking-wide">status</th>
                              <th class="pb-10 text-sm font-extrabold tracking-wide">status</th>
                            </tr>
                          </thead>
                          {/* <!-- end table head --> */}

                          {/* <!-- table body --> */}
                          <tbody class="text-left text-gray-600">

                            <tr>
                              <th class="mb-4 text-xs font-extrabold tracking-wider">1</th>
                              {/* <th class="mb-4 text-xs font-extrabold tracking-wider flex flex-row items-center w-full">
                                <div class="w-8 h-8 overflow-hidden rounded-full">
                                  <img src="./assets/img/user2.jpg" class="object-cover" />
                                </div>
                                <p class="ml-3 name-1">user name</p>
                              </th> */}
                              <th class="mb-4 text-xs font-extrabold tracking-wider">Hunuman</th>
                              <th class="mb-4 text-xs font-extrabold tracking-wider">Nike Sport</th>
                              <th class="mb-4 text-xs font-extrabold tracking-wider">#<span class="num-4"></span></th>
                              <th class="mb-4 text-xs font-extrabold tracking-wider">$<span class="num-2"></span></th>
                              <th class="mb-4 text-xs font-extrabold tracking-wider">shipped</th>
                              <th class="mb-4 text-xs font-extrabold tracking-wider">shipped</th>
                              <th class="mb-4 text-xs font-extrabold tracking-wider">shipped</th>
                              <th class="mb-4 text-xs font-extrabold tracking-wider">shipped</th>

                            </tr>
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

export default About;