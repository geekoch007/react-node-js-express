import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div id="sideBar" class="relative flex flex-col flex-wrap bg-white border-r border-gray-300 p-6 flex-none w-64 md:-ml-64 md:fixed md:top-0 md:z-30 md:h-screen md:shadow-xl animated faster">


      {/* <!-- sidebar content --> */}
      <div class="flex flex-col">

        {/* <!-- sidebar toggle --> */}
        <div class="text-right hidden md:block mb-4">
          <button id="sideBarHideBtn">
            <i class="fad fa-times-circle"></i>
          </button>
        </div>
        {/* <!-- end sidebar toggle --> */}

        {/* <!-- link --> */}
        <a href="/" class="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
          <i class="fad fa-chart-pie text-xs mr-2"></i>
          Analytics dashboard
        </a>
        {/* <!-- end link --> */}

        {/* <!-- link --> */}
        <a href="/ecommerce-dashboard" class="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
          <i class="fad fa-shopping-cart text-xs mr-2"></i>
          ecommerce dashboard
        </a>
        {/* <!-- end link --> */}

        <p class="uppercase text-xs text-gray-600 mb-4 mt-4 tracking-wider">homes</p>

        {/* <!-- link --> */}
        <a href="/slider" class="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
          <i class="fa-solid fa-sliders text-xs mr-2"></i>
          slider
        </a>
        {/* <!-- end link --> */}

        {/* <!-- link --> */}
        <a href="/category" class="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
          <i class="fa-solid fa-tag text-xs mr-2"></i>
          category
        </a>
        {/* <!-- end link --> */}

        {/* <!-- link --> */}
        <a href="/instagram" class="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
          <i class="fa-brands fa-instagram text-xs mr-2"></i>
          instagram
        </a>
        {/* <!-- end link --> */}

        <p class="uppercase text-xs text-gray-600 mb-4 mt-4 tracking-wider">shops</p>

        {/* <!-- link --> */}
        <a href="/shop" class="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
          <i class="fa-solid fa-shop text-xs mr-2"></i>
          shop
        </a>
        {/* <!-- end link --> */}

        <p class="uppercase text-xs text-gray-600 mb-4 mt-4 tracking-wider">blogs</p>

        {/* <!-- link --> */}
        <a href="/blog" class="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
          <i class="fa-solid fa-cube text-xs mr-2"></i>
          blog
        </a>
        {/* <!-- end link --> */}

        <p class="uppercase text-xs text-gray-600 mb-4 mt-4 tracking-wider">contact</p>

        {/* <!-- link --> */}
        <a href="/contact" class="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
          <i class="fa-solid fa-address-book text-xs mr-2"></i>
          contact
        </a>
        {/* <!-- end link --> */}

        <p class="uppercase text-xs text-gray-600 mb-4 mt-4 tracking-wider">about</p>

        {/* <!-- link --> */}
        <a href="/about" class="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
          <i class="fa-solid fa-file-circle-question text-xs mr-2"></i>
          about
        </a>
        {/* <!-- end link --> */}


      </div>
      {/* <!-- end sidebar content --> */}

    </div>
  )
}

export default Sidebar;