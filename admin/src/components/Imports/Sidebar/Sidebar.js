import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div id="sideBar" className="relative flex flex-col flex-wrap bg-white border-r border-gray-300 p-6 flex-none w-64 md:-ml-64 md:fixed md:top-0 md:z-30 md:h-screen md:shadow-xl animated faster">


      {/* <!-- sidebar content --> */}
      <div className="flex flex-col">

        {/* <!-- sidebar toggle --> */}
        <div className="text-right hidden md:block mb-4">
          <button id="sideBarHideBtn">
            <i className="fad fa-times-circle"></i>
          </button>
        </div>
        {/* <!-- end sidebar toggle --> */}

        {/* <!-- link --> */}
        <a href="/" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
          <i className="fad fa-chart-pie text-xs mr-2"></i>
          Analytics dashboard
        </a>
        {/* <!-- end link --> */}

        {/* <!-- link --> */}
        <a href="/ecommerce-dashboard" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
          <i className="fad fa-shopping-cart text-xs mr-2"></i>
          ecommerce dashboard
        </a>
        {/* <!-- end link --> */}

        <p className="uppercase text-xs text-gray-600 mb-4 mt-4 tracking-wider">homes</p>

        {/* <!-- link --> */}
        <a href="/slider" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
          <i className="fa-solid fa-sliders text-xs mr-2"></i>
          slider
        </a>
        {/* <!-- end link --> */}

        {/* <!-- link --> */}
        <a href="/category" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
          <i className="fa-solid fa-tag text-xs mr-2"></i>
          category
        </a>
        {/* <!-- end link --> */}

        {/* <!-- link --> */}
        <a href="/instagram" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
          <i className="fa-brands fa-instagram text-xs mr-2"></i>
          instagram
        </a>
        {/* <!-- end link --> */}

        <p className="uppercase text-xs text-gray-600 mb-4 mt-4 tracking-wider">shops</p>

        {/* <!-- link --> */}
        <a href="/shop" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
          <i className="fa-solid fa-shop text-xs mr-2"></i>
          shop
        </a>
        {/* <!-- end link --> */}

        <p className="uppercase text-xs text-gray-600 mb-4 mt-4 tracking-wider">blogs</p>

        {/* <!-- link --> */}
        <a href="/blog" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
          <i className="fa-solid fa-cube text-xs mr-2"></i>
          blog
        </a>
        {/* <!-- end link --> */}

        <p className="uppercase text-xs text-gray-600 mb-4 mt-4 tracking-wider">contact</p>

        {/* <!-- link --> */}
        <a href="/contact" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
          <i className="fa-solid fa-address-book text-xs mr-2"></i>
          contact
        </a>
        {/* <!-- end link --> */}

        <p className="uppercase text-xs text-gray-600 mb-4 mt-4 tracking-wider">about</p>

        {/* <!-- link --> */}
        <a href="/about" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
          <i className="fa-solid fa-file-circle-question text-xs mr-2"></i>
          about
        </a>
        {/* <!-- end link --> */}


      </div>
      {/* <!-- end sidebar content --> */}

    </div>
  )
}

export default Sidebar;