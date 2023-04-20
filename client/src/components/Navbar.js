import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <div>
            {/* Main navigation container */}

            <nav
            class="flex-no-wrap relative flex w-full items-center justify-between bg-neutral-100 py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4 h-20"
            data-te-navbar-ref>
            <div class="flex w-full flex-wrap items-center justify-between px-3">
                {/* Hamburger button for mobile view */}
                <button
                class="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                type="button"
                data-te-collapse-init
                data-te-target="#navbarSupportedContent1"
                aria-controls="navbarSupportedContent1"
                aria-expanded="false"
                aria-label="Toggle navigation">
                {/* Hamburger icon */}
                <span class="[&>svg]:w-7">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="h-7 w-7">
                    <path
                        fill-rule="evenodd"
                        d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                        clip-rule="evenodd" />
                    </svg>
                </span>
                </button>

                 {/* Collapsible navigation container  */}
                <div
                class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
                id="navbarSupportedContent1"
                data-te-collapse-item>
                 {/* Logo  */}
                <Link
                    class="mb-4 mr-2 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
                    href="#">
                </Link>
                {/* Left navigation links  */}
                <ul
                    class="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
                    data-te-navbar-nav-ref>
                    <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                    {/* Dashboard link */}
                    <Link
                        class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
                        href="#"
                        data-te-nav-link-ref
                        >Ajali Report</Link>
                    </li>
                    {/* Team link  */}
                    <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                    <a
                        class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                        href="#"
                        data-te-nav-link-ref
                        >All Incidents</a>
                    </li>
                     {/* Projects link  */}
                    <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                    <a
                        class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                        href="#"
                        data-te-nav-link-ref
                        >Create Incident</a>
                    </li>
                </ul>
                </div>

                {/* Right elements  */}
                <div class="relative flex items-center">

                <div class="relative" data-te-dropdown-ref>
                     
                    <a
                    class="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                    href="#"
                    id="dropdownMenuButton2"
                    role="button"
                    data-te-dropdown-toggle-ref
                    aria-expanded="false">
                    {/* User avatar  */}
                    <img
                        src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
                        class="rounded-full"
                        style={{height: "25px", width: "25px"}}
                        alt=""
                        loading="lazy" />

                    <span className="ml-2"> Log Out</span>
                    </a>
                </div>
                </div>
            </div>
            </nav>
        </div>
     );
}
 
export default Navbar;