import React from 'react';
import './AnalyticsDashboard.css';
import Navbar from '../Imports/Navbar/Navbar';
import Sidebar from '../Imports/Sidebar/Sidebar';

const AnalyticsDashboard = () => {
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


          {/* <!-- General Report --> */}
          <div className="grid grid-cols-4 gap-6 xl:grid-cols-1">


            {/* <!-- card --> */}
            <div className="report-card">
              <div className="card">
                <div className="card-body flex flex-col">

                  {/* <!-- top --> */}
                  <div className="flex flex-row justify-between items-center">
                    <div className="h6 text-indigo-700 fad fa-shopping-cart"></div>
                    <span className="rounded-full text-white badge bg-teal-400 text-xs">
                      12%
                      <i className="fal fa-chevron-up ml-1"></i>
                    </span>
                  </div>
                  {/* <!-- end top --> */}

                  {/* <!-- bottom --> */}
                  <div className="mt-8">
                    <h1 className="h5 num-4"></h1>
                    <p>items sales</p>
                  </div>
                  {/* <!-- end bottom --> */}

                </div>
              </div>
              <div className="footer bg-white p-1 mx-4 border border-t-0 rounded rounded-t-none"></div>
            </div>
            {/* <!-- end card --> */}


            {/* <!-- card --> */}
            <div className="report-card">
              <div className="card">
                <div className="card-body flex flex-col">

                  {/* <!-- top --> */}
                  <div className="flex flex-row justify-between items-center">
                    <div className="h6 text-red-700 fad fa-store"></div>
                    <span className="rounded-full text-white badge bg-red-400 text-xs">
                      6%
                      <i className="fal fa-chevron-down ml-1"></i>
                    </span>
                  </div>
                  {/* <!-- end top --> */}

                  {/* <!-- bottom --> */}
                  <div className="mt-8">
                    <h1 className="h5 num-4"></h1>
                    <p>new orders</p>
                  </div>
                  {/* <!-- end bottom --> */}

                </div>
              </div>
              <div className="footer bg-white p-1 mx-4 border border-t-0 rounded rounded-t-none"></div>
            </div>
            {/* <!-- end card --> */}


            {/* <!-- card --> */}
            <div className="report-card">
              <div className="card">
                <div className="card-body flex flex-col">

                  {/* <!-- top --> */}
                  <div className="flex flex-row justify-between items-center">
                    <div className="h6 text-yellow-600 fad fa-sitemap"></div>
                    <span className="rounded-full text-white badge bg-teal-400 text-xs">
                      72%
                      <i className="fal fa-chevron-up ml-1"></i>
                    </span>
                  </div>
                  {/* <!-- end top --> */}

                  {/* <!-- bottom --> */}
                  <div className="mt-8">
                    <h1 className="h5 num-4"></h1>
                    <p>total Products</p>
                  </div>
                  {/* <!-- end bottom --> */}

                </div>
              </div>
              <div className="footer bg-white p-1 mx-4 border border-t-0 rounded rounded-t-none"></div>
            </div>
            {/* <!-- end card --> */}


            {/* <!-- card --> */}
            <div className="report-card">
              <div className="card">
                <div className="card-body flex flex-col">

                  {/* <!-- top --> */}
                  <div className="flex flex-row justify-between items-center">
                    <div className="h6 text-green-700 fad fa-users"></div>
                    <span className="rounded-full text-white badge bg-teal-400 text-xs">
                      150%
                      <i className="fal fa-chevron-up ml-1"></i>
                    </span>
                  </div>
                  {/* <!-- end top --> */}

                  {/* <!-- bottom --> */}
                  <div className="mt-8">
                    <h1 className="h5 num-4"></h1>
                    <p>new Visitor</p>
                  </div>
                  {/* <!-- end bottom --> */}

                </div>
              </div>
              <div className="footer bg-white p-1 mx-4 border border-t-0 rounded rounded-t-none"></div>
            </div>
            {/* <!-- end card --> */}


          </div>
          {/* <!-- End General Report --> */}

          {/* <!-- strat Analytics --> */}
          <div className="mt-6 grid grid-cols-2 gap-6 xl:grid-cols-1">

            {/* <!-- update section --> */}
            <div className="card bg-teal-400 border-teal-400 shadow-md text-white">
              <div className="card-body flex flex-row">

                {/* <!-- image --> */}
                <div className="img-wrapper w-40 h-40 flex justify-center items-center">
                  <img src="./assets/img/happy.svg" alt="img title" />
                </div>
                {/* <!-- end image --> */}

                {/* <!-- info --> */}
                <div className="py-2 ml-10">
                  <h1 className="h6">Good Job, Mohamed!</h1>
                  <p className="text-white text-xs">You've finished all of your tasks for this week.</p>

                  <ul className="mt-4">
                    <li className="text-sm font-light"><i className="fad fa-check-double mr-2 mb-2"></i> Finish Dashboard Design</li>
                    <li className="text-sm font-light"><i className="fad fa-check-double mr-2 mb-2"></i> Fix Issue #74</li>
                    <li className="text-sm font-light"><i className="fad fa-check-double mr-2"></i> Publish version 1.0.6</li>
                  </ul>
                </div>
                {/* <!-- end info --> */}

              </div>
            </div>
            {/* <!-- end update section --> */}

            {/* <!-- carts --> */}
            <div className="flex flex-col">

              {/* <!-- alert --> */}
              <div className="alert alert-dark mb-6">
                Hi! Wait A Minute . . . . . . Follow Me On Twitter
                <a className="ml-2" target="_blank" href="https://twitter.com/MohamedSaid__">@moesaid</a>
              </div>
              {/* <!-- end alert --> */}

              {/* <!-- charts --> */}
              <div className="grid grid-cols-2 gap-6 h-full">

                <div className="card">
                  <div className="py-3 px-4 flex flex-row justify-between">
                    <h1 className="h6">
                      <span className="num-4"></span>k
                      <p>page view</p>
                    </h1>

                    <div className="bg-teal-200 text-teal-700 border-teal-300 border w-10 h-10 rounded-full flex justify-center items-center">
                      <i className="fad fa-eye"></i>
                    </div>
                  </div>
                  <div className="analytics_1"></div>
                </div>

                <div className="card">
                  <div className="py-3 px-4 flex flex-row justify-between">
                    <h1 className="h6">
                      <span className="num-2"></span>k
                      <p>Unique Users</p>
                    </h1>

                    <div className="bg-indigo-200 text-indigo-700 border-indigo-300 border w-10 h-10 rounded-full flex justify-center items-center">
                      <i className="fad fa-users-crown"></i>
                    </div>
                  </div>
                  <div className="analytics_1"></div>
                </div>

              </div>
              {/* <!-- charts    --> */}

            </div>
            {/* <!-- end charts --> */}


          </div>
          {/* <!-- end Analytics --> */}

          {/* <!-- Sales Overview --> */}
          <div className="card mt-6">

            {/* <!-- header --> */}
            <div className="card-header flex flex-row justify-between">
              <h1 className="h6">Sales Overview</h1>

              <div className="flex flex-row justify-center items-center">

                <a href="">
                  <i className="fad fa-chevron-double-down mr-6"></i>
                </a>

                <a href="">
                  <i className="fad fa-ellipsis-v"></i>
                </a>

              </div>

            </div>
            {/* <!-- end header --> */}

            {/* <!-- body --> */}
            <div className="card-body grid grid-cols-2 gap-6 lg:grid-cols-1">

              <div className="p-8">
                <h1 className="h2">5,337</h1>
                <p className="text-black font-medium">Sales this month</p>

                <div className="mt-20 mb-2 flex items-center">
                  <div className="py-1 px-3 rounded bg-green-200 text-green-900 mr-3">
                    <i className="fa fa-caret-up"></i>
                  </div>
                  <p className="text-black"><span className="num-2 text-green-400"></span><span className="text-green-400">% more sales</span> in comparison to last month.</p>
                </div>

                <div className="flex items-center">
                  <div className="py-1 px-3 rounded bg-red-200 text-red-900 mr-3">
                    <i className="fa fa-caret-down"></i>
                  </div>
                  <p className="text-black"><span className="num-2 text-red-400"></span><span className="text-red-400">% revenue per sale</span> in comparison to last month.</p>
                </div>

                <a href="#" className="btn-shadow mt-6">view details</a>

              </div>

              <div className="">
                <div id="sealsOverview"></div>
              </div>

            </div>
            {/* <!-- end body --> */}

          </div>
          {/* <!-- end Sales Overview --> */}

          {/* <!-- start numbers --> */}
          <div className="grid grid-cols-5 gap-6 xl:grid-cols-2">

            {/* <!-- card --> */}
            <div className="card mt-6">
              <div className="card-body flex items-center">

                <div className="px-3 py-2 rounded bg-indigo-600 text-white mr-3">
                  <i className="fad fa-wallet"></i>
                </div>

                <div className="flex flex-col">
                  <h1 className="font-semibold"><span className="num-2"></span> Sales</h1>
                  <p className="text-xs"><span className="num-2"></span> payments</p>
                </div>

              </div>
            </div>
            {/* <!-- end card --> */}

            {/* <!-- card --> */}
            <div className="card mt-6">
              <div className="card-body flex items-center">

                <div className="px-3 py-2 rounded bg-green-600 text-white mr-3">
                  <i className="fad fa-shopping-cart"></i>
                </div>

                <div className="flex flex-col">
                  <h1 className="font-semibold"><span className="num-2"></span> Orders</h1>
                  <p className="text-xs"><span className="num-2"></span> items</p>
                </div>

              </div>
            </div>
            {/* <!-- end card --> */}

            {/* <!-- card --> */}
            <div className="card mt-6 xl:mt-1">
              <div className="card-body flex items-center">

                <div className="px-3 py-2 rounded bg-yellow-600 text-white mr-3">
                  <i className="fad fa-blog"></i>
                </div>

                <div className="flex flex-col">
                  <h1 className="font-semibold"><span className="num-2"></span> posts</h1>
                  <p className="text-xs"><span className="num-2"></span> active</p>
                </div>

              </div>
            </div>
            {/* <!-- end card --> */}

            {/* <!-- card --> */}
            <div className="card mt-6 xl:mt-1">
              <div className="card-body flex items-center">

                <div className="px-3 py-2 rounded bg-red-600 text-white mr-3">
                  <i className="fad fa-comments"></i>
                </div>

                <div className="flex flex-col">
                  <h1 className="font-semibold"><span className="num-2"></span> comments</h1>
                  <p className="text-xs"><span className="num-2"></span> approved</p>
                </div>

              </div>
            </div>
            {/* <!-- end card --> */}

            {/* <!-- card --> */}
            <div className="card mt-6 xl:mt-1 xl:col-span-2">
              <div className="card-body flex items-center">

                <div className="px-3 py-2 rounded bg-pink-600 text-white mr-3">
                  <i className="fad fa-user"></i>
                </div>

                <div className="flex flex-col">
                  <h1 className="font-semibold"><span className="num-2"></span> memebrs</h1>
                  <p className="text-xs"><span className="num-2"></span> online</p>
                </div>

              </div>
            </div>
            {/* <!-- end card --> */}

          </div>
          {/* <!-- end nmbers --> */}

          {/* <!-- start quick Info --> */}
          <div className="grid grid-cols-3 gap-6 mt-6 xl:grid-cols-1">


            {/* <!-- Browser Stats --> */}
            <div className="card">
              <div className="card-header">Browser Stats</div>

              {/* <!-- brawser --> */}
              <div className="p-6 flex flex-row justify-between items-center text-gray-600 border-b">
                <div className="flex items-center">
                  <i className="fab fa-chrome mr-4"></i>
                  <h1>google chrome</h1>
                </div>
                <div>
                  <span className="num-2"></span>%
                </div>
              </div>
              {/* <!-- end brawser --> */}

              {/* <!-- brawser --> */}
              <div className="p-6 flex flex-row justify-between items-center text-gray-600 border-b">
                <div className="flex items-center">
                  <i className="fab fa-firefox mr-4"></i>
                  <h1>firefox</h1>
                </div>
                <div>
                  <span className="num-2"></span>%
                </div>
              </div>
              {/* <!-- end brawser --> */}

              {/* <!-- brawser --> */}
              <div className="p-6 flex flex-row justify-between items-center text-gray-600 border-b">
                <div className="flex items-center">
                  <i className="fab fa-internet-explorer mr-4"></i>
                  <h1>internet explorer</h1>
                </div>
                <div>
                  <span className="num-2"></span>%
                </div>
              </div>
              {/* <!-- end brawser --> */}

              {/* <!-- brawser --> */}
              <div className="p-6 flex flex-row justify-between items-center text-gray-600 border-b-0">
                <div className="flex items-center">
                  <i className="fab fa-safari mr-4"></i>
                  <h1>safari</h1>
                </div>
                <div>
                  <span className="num-2"></span>%
                </div>
              </div>
              {/* <!-- end brawser --> */}

            </div>
            {/* <!-- end Browser Stats --> */}

            {/* <!-- Start Recent Sales --> */}
            <div className="card col-span-2 xl:col-span-1">
              <div className="card-header">Recent Sales</div>

              <table className="table-auto w-full text-left">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border-r"></th>
                    <th className="px-4 py-2 border-r">product</th>
                    <th className="px-4 py-2 border-r">price</th>
                    <th className="px-4 py-2">date</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">

                  <tr>
                    <td className="border border-l-0 px-4 py-2 text-center text-green-500"><i className="fad fa-circle"></i></td>
                    <td className="border border-l-0 px-4 py-2">Lightning to USB-C Adapter Lightning.</td>
                    <td className="border border-l-0 px-4 py-2">$<span className="num-2"></span></td>
                    <td className="border border-l-0 border-r-0 px-4 py-2"><span className="num-2"></span> minutes ago</td>
                  </tr>
                  <tr>
                    <td className="border border-l-0 px-4 py-2 text-center text-yellow-500"><i className="fad fa-circle"></i></td>
                    <td className="border border-l-0 px-4 py-2">Apple iPhone 8.</td>
                    <td className="border border-l-0 px-4 py-2">$<span className="num-2"></span></td>
                    <td className="border border-l-0 border-r-0 px-4 py-2"><span className="num-2"></span> minutes ago</td>
                  </tr>
                  <tr>
                    <td className="border border-l-0 px-4 py-2 text-center text-green-500"><i className="fad fa-circle"></i></td>
                    <td className="border border-l-0 px-4 py-2">Apple MacBook Pro.</td>
                    <td className="border border-l-0 px-4 py-2">$<span className="num-2"></span></td>
                    <td className="border border-l-0 border-r-0 px-4 py-2"><span className="num-2"></span> minutes ago</td>
                  </tr>
                  <tr>
                    <td className="border border-l-0 px-4 py-2 text-center text-red-500"><i className="fad fa-circle"></i></td>
                    <td className="border border-l-0 px-4 py-2">Samsung Galaxy S9.</td>
                    <td className="border border-l-0 px-4 py-2">$<span className="num-2"></span></td>
                    <td className="border border-l-0 border-r-0 px-4 py-2"><span className="num-2"></span> minutes ago</td>
                  </tr>
                  <tr>
                    <td className="border border-l-0 px-4 py-2 text-center text-yellow-500"><i className="fad fa-circle"></i></td>
                    <td className="border border-l-0 px-4 py-2">Samsung Galaxy S8 256GB.</td>
                    <td className="border border-l-0 px-4 py-2">$<span className="num-2"></span></td>
                    <td className="border border-l-0 border-r-0 px-4 py-2"><span className="num-2"></span> minutes ago</td>
                  </tr>
                  <tr>
                    <td className="border border-l-0 border-b-0 px-4 py-2 text-center text-green-500"><i className="fad fa-circle"></i></td>
                    <td className="border border-l-0 border-b-0 px-4 py-2">apple watch.</td>
                    <td className="border border-l-0 border-b-0 px-4 py-2">$<span className="num-2"></span></td>
                    <td className="border border-l-0 border-b-0 border-r-0 px-4 py-2"><span className="num-2"></span> minutes ago</td>
                  </tr>

                </tbody>
              </table>
            </div>
            {/* <!-- End Recent Sales --> */}


          </div>
          {/* <!-- end quick Info --> */}


        </div>
        {/* <!-- end content --> */}

      </div>
      {/* <!-- end wrapper --> */}
    </>
  )
}

export default AnalyticsDashboard;