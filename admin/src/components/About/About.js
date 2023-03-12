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
                  <h1 className="font-extrabold text-lg">About</h1>
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
                              <th className="pb-10 text-sm font-extrabold tracking-wide">customer</th>
                              <th className="pb-10 text-sm font-extrabold tracking-wide">Product</th>
                              <th className="pb-10 text-sm font-extrabold tracking-wide">Invoice</th>
                              <th className="pb-10 text-sm font-extrabold tracking-wide">price</th>
                              <th className="pb-10 text-sm font-extrabold tracking-wide">status</th>
                              <th className="pb-10 text-sm font-extrabold tracking-wide">status</th>
                              <th className="pb-10 text-sm font-extrabold tracking-wide">status</th>
                              <th className="pb-10 text-sm font-extrabold tracking-wide">status</th>
                            </tr>
                          </thead>
                          {/* <!-- end table head --> */}

                          {/* <!-- table body --> */}
                          <tbody className="text-left text-gray-600">

                            <tr>
                              <th className="mb-4 text-xs font-extrabold tracking-wider">1</th>
                              {/* <th className="mb-4 text-xs font-extrabold tracking-wider flex flex-row items-center w-full">
                                <div className="w-8 h-8 overflow-hidden rounded-full">
                                  <img src="./assets/img/user2.jpg" className="object-cover" />
                                </div>
                                <p className="ml-3 name-1">user name</p>
                              </th> */}
                              <th className="mb-4 text-xs font-extrabold tracking-wider">Hunuman</th>
                              <th className="mb-4 text-xs font-extrabold tracking-wider">Nike Sport</th>
                              <th className="mb-4 text-xs font-extrabold tracking-wider">#<span className="num-4"></span></th>
                              <th className="mb-4 text-xs font-extrabold tracking-wider">$<span className="num-2"></span></th>
                              <th className="mb-4 text-xs font-extrabold tracking-wider">shipped</th>
                              <th className="mb-4 text-xs font-extrabold tracking-wider">shipped</th>
                              <th className="mb-4 text-xs font-extrabold tracking-wider">shipped</th>
                              <th className="mb-4 text-xs font-extrabold tracking-wider">shipped</th>

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