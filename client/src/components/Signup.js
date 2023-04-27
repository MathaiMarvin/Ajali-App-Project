import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import image from "../img/roadaccident.jpg"
import imgtestimonial2 from "../img/testimonial2.jpeg"
import '../index.css'
const Signup = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState ({
        email: "",
        username: "",
        password: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleSignUp = (e) => {
        e.preventDefault();

        setIsLoading(true);

        fetch("https://ajalireports.onrender.com/users/register",{
            method: "POST",
            headers:{
                "Content-type": "application/json",
            },
            body: JSON.stringify(formData),
        }).then((response)=>{
            if(response.ok){
                response.json().then((data) => {
                    localStorage.setItem("Authorization", data.token);
                    localStorage.setItem("user", JSON.stringify(data.user));
                    console.log("Signed Up Successfully")
                    navigate("/");
                    setIsLoading(false)
                  });
            }else{
                console.log("Error in Signup");
            }
        })
    }

    return ( 
        <div>
            <nav
            className=" flex w-full flex-wrap items-center justify-between bg-neutral-100 py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4 fixed top-0 h-20 ">
            <div className="flex w-full flex-wrap items-center justify-between px-3">
                <div>
                <Link className="text-xl text-neutral-800 dark:text-neutral-200 uppercase" to="/" 
                    >AJALI REPORT</Link>
                </div>
            </div>
            </nav>
            <section className="h-screen">
                <div className="container h-full px-6 py-24">
                    <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                        {/* left container with background */}
                        <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                        <img
                            src={image}
                            class="w-full h-70"
                            alt="Phone image" />
                        </div>
                        {/* right container with form */}
                        <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
                            <h1 className="text-base font-normal flex justify-center mb-5 border-b border-gray-100 uppercase pb-3"> 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                            Register Now</h1>
                            <form action="" onSubmit={(e) => handleSignUp(e)}>
                                {/* email input */}
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                <input
                                    type="text"
                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="exampleFormControlInput3"
                                    placeholder="Email address" 
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                    <label
                                    for="exampleFormControlInput3"
                                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >Email address
                                    </label>
                                </div>
                                {/* username input */}
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                <input
                                    type="text"
                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="exampleFormControlInput3"
                                    placeholder="Username" 
                                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                    />
                                    <label
                                    for="exampleFormControlInput3"
                                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >Username
                                    </label>
                                </div>
                                {/* Password input */}
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <input
                                    type="password"
                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="exampleFormControlInput33"
                                    placeholder="Password" 
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    />
                                    <label
                                    for="exampleFormControlInput33"
                                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >Password
                                    </label>
                                </div>
                                

                                {/* Remember me checkbox */}
                                {/* <div className="mb-6 flex items-center justify-between">
                                    <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                                    <input
                                        className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                        type="checkbox"
                                        value=""
                                        id="exampleCheck3"
                                        checked 
                                        />
                                    <label
                                        className="inline-block pl-[0.15rem] hover:cursor-pointer"
                                        for="exampleCheck3">
                                        Remember me
                                    </label>
                                    </div> */}

                                    {/* forgot password link */}
                                    {/* <a
                                        href="#!"
                                        className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                                        >Forgot password?
                                    </a> */}

                                {/* </div> */}

                                {/* submit button */}
                                { !isLoading &&
                                <button
                                    type="submit"
                                    className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    style={{backgroundColor: "#3b5998"}}
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                        {" "}
                                    Sign up
                                </button>}
                                {isLoading &&
                                <button
                                    type="submit"
                                    className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    style={{backgroundColor: "#3b5998"}}
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                        {" "}
                                    Redirecting to Login
                                </button>}
                                 {/* Divider  */}
                                <div
                                    className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                    <p
                                    className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                                    OR
                                    </p>
                                </div>

                                


                                {/* Register link */}
                                <p className="mb-0 mt-4 pt-1 text-sm font-semibold">
                                Already have an account?
                                <Link
                                    to="/"
                                    className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700 ml-2 hover:cursor-pointer"
                                    >Login</Link>
                                </p>

                            </form>
                        </div>
                    </div>
                </div>

            </section>
            <section class="text-neutral-700 dark:text-neutral-300 w-screen px-6 border-t border-gray-200 py-4">
                <div class="mx-auto text-center md:max-w-xl lg:max-w-3xl">
                    <h3 class="mb-6 text-3xl font-bold">Testimonials</h3>
                    <p class="mb-6 pb-2 md:mb-12 md:pb-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                    error amet numquam iure provident voluptate esse quasi, veritatis
                    totam voluptas nostrum quisquam eum porro a pariatur veniam.
                    </p>
                </div>

                {/* First Testimonial */}
                <div class="grid gap-6 text-center md:grid-cols-3 ">
                    <div>
                    <div
                        class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30 transition duration-300 ease-in-out hover:scale-110 m-2 motion-reduce:transform-none ">
                        <div class="h-28 overflow-hidden rounded-t-lg bg-[#7a81a8]"></div>
                        <div
                        class="mx-auto -mt-12 w-20 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                        <img
                            src={imgtestimonial2} />
                        </div>
                        <div class="p-6">
                        <h4 class="mb-4 text-2xl font-semibold">James Kiragu</h4>
                        <hr />
                        <p class="mt-4">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            class="inline-block h-7 w-7 pr-2"
                            viewBox="0 0 24 24">
                            <path
                                d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                            </svg>
                            Lorem ipsum dolor sit amet eos adipisci, consectetur
                            adipisicing elit.
                        </p>
                        </div>
                    </div>
                    </div>

                    {/* Second Testimonial */}
                    <div>
                    <div
                        class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30 transition duration-300 ease-in-out hover:scale-110 m-2 motion-reduce:transform-none">
                        <div class="h-28 overflow-hidden rounded-t-lg bg-[#7a81a8]"></div>
                        <div
                        class="mx-auto -mt-12 w-20 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                        <img
                            src={imgtestimonial2} />
                        </div>
                        <div class="p-6">
                        <h4 class="mb-4 text-2xl font-semibold">Miriam Kioko</h4>
                        <hr />
                        <p class="mt-4">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            class="inline-block h-7 w-7 pr-2"
                            viewBox="0 0 24 24">
                            <path
                                d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                            </svg>
                            Neque cupiditate assumenda in maiores repudi mollitia
                            architecto.
                        </p>
                        </div>
                    </div>
                    </div>

                    {/* Third Testimonial */}
                    <div>
                    <div
                        class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30 transition duration-300 ease-in-out hover:scale-110 m-2 motion-reduce:transform-none">
                        <div class="h-28 overflow-hidden rounded-t-lg bg-[#7a81a8]"></div>
                        <div
                        class="mx-auto -mt-12 w-20 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                        <img
                            src={imgtestimonial2} />
                        </div>
                        <div class="p-6">
                        <h4 class="mb-4 text-2xl font-semibold">John Maina</h4>
                        <hr />
                        <p class="mt-4">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            class="inline-block h-7 w-7 pr-2"
                            viewBox="0 0 24 24">
                            <path
                                d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                            </svg>
                            Delectus impedit saepe officiis ab aliquam repellat rem.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                 {/* Footer container  */}
                <footer
                class="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
                <div
                    class="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
                    <div class="mr-12 hidden lg:block">
                    <span>Get connected with us on social networks:</span>
                    </div>
                    {/* Social network icons container  */}
                    <div class="flex justify-center">
                    <a href="#!" class="mr-6 text-neutral-600 dark:text-neutral-200">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path
                            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                    </a>
                    <a href="#!" class="mr-6 text-neutral-600 dark:text-neutral-200">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path
                            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                    </a>
                    <a href="#!" class="mr-6 text-neutral-600 dark:text-neutral-200">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path
                            d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                            fill-rule="evenodd"
                            clip-rule="evenodd" />
                        </svg>
                    </a>
                    <a href="#!" class="mr-6 text-neutral-600 dark:text-neutral-200">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path
                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                    </a>
                    <a href="#!" class="mr-6 text-neutral-600 dark:text-neutral-200">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path
                            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                    </a>
                    <a href="#!" class="text-neutral-600 dark:text-neutral-200">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path
                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                    </div>
                </div>
{/* 
                Main container div: holds the entire content of the footer, including four sections (Tailwind Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. */}
                <div class="mx-6 py-10 text-center md:text-left">
                    <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Tailwind Elements section */}
                    <div class="">
                        <h6
                        class="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="mr-3 h-4 w-4">
                            <path
                            d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                        </svg>
                        AJALI REPORTS
                        </h6>
                        <p>
                        Ajali reports is an incident report app designed to help organizations and individuals track and report incidents that occur within their environment. 
                        </p>
                    </div>
                    {/* Products section  */}
                    <div class="">
                        <h6
                        class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                        Incidents
                        </h6>
                        <p class="mb-4">
                        <a href="#!" class="text-neutral-600 dark:text-neutral-200"
                            >Car Accidents</a>
                        </p>
                        <p class="mb-4">
                        <a href="#!" class="text-neutral-600 dark:text-neutral-200"
                            >Fires</a>
                        </p>
                        <p class="mb-4">
                        <a href="#!" class="text-neutral-600 dark:text-neutral-200"
                            >Domestic Violence</a >
                        </p>
                        <p>
                        <a href="#!" class="text-neutral-600 dark:text-neutral-200"
                            >Floods</a>
                        </p>
                    </div>
                    {/* Useful links section  */}
                    <div class="">
                        <h6
                        class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                        Useful links
                        </h6>
                        <p class="mb-4">
                        <a href="#!" class="text-neutral-600 dark:text-neutral-200"
                            >About</a>
                        </p>
                        <p class="mb-4">
                        <a href="#!" class="text-neutral-600 dark:text-neutral-200"
                            >Settings</a>
                        </p>
                        <p class="mb-4">
                        <a href="#!" class="text-neutral-600 dark:text-neutral-200"
                            >Contact Us</a>
                        </p>
                        <p>
                        <a href="#!" class="text-neutral-600 dark:text-neutral-200"
                            >Help</a>
                        </p>
                    </div>
                    {/* Contact section  */}
                    <div>
                        <h6
                        class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                        Contact
                        </h6>
                        <p class="mb-4 flex items-center justify-center md:justify-start">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="mr-3 h-5 w-5">
                            <path
                            d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                            <path
                            d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                        </svg>
                        Moringa School, Ngong Road, Nairobi
                        </p>
                        <p class="mb-4 flex items-center justify-center md:justify-start">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="mr-3 h-5 w-5">
                            <path
                            d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                            <path
                            d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                        </svg>
                        ajalireports@gmail.com
                        </p>
                        <p class="mb-4 flex items-center justify-center md:justify-start">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="mr-3 h-5 w-5">
                            <path
                            fill-rule="evenodd"
                            d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                            clip-rule="evenodd" />
                        </svg>
                        +254726896783
                        </p>
                        <p class="flex items-center justify-center md:justify-start">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="mr-3 h-5 w-5">
                            <path
                            fill-rule="evenodd"
                            d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 003 3h.27l-.155 1.705A1.875 1.875 0 007.232 22.5h9.536a1.875 1.875 0 001.867-2.045l-.155-1.705h.27a3 3 0 003-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0018 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM16.5 6.205v-2.83A.375.375 0 0016.125 3h-8.25a.375.375 0 00-.375.375v2.83a49.353 49.353 0 019 0zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 01-.374.409H7.232a.375.375 0 01-.374-.409l.526-5.784a.373.373 0 01.333-.337 41.741 41.741 0 018.566 0zm.967-3.97a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H18a.75.75 0 01-.75-.75V10.5zM15 9.75a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V10.5a.75.75 0 00-.75-.75H15z"
                            clip-rule="evenodd" />
                        </svg>
                        +254746268085
                        </p>
                    </div>
                    </div>
                </div>

                {/* Copyright section */}
                <div class="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
                    <span>© 2023 Copyright:</span>
                    <Link
                    class="font-semibold text-neutral-600 dark:text-neutral-400"
                    to="/"
                    >Ajali Reports</Link >
                </div>
                </footer>


        </div>
     );
}
 
export default Signup;