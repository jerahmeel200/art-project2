import React from "react";
import styles from "./Contact.module.css";

function index() {
  return (
    <div className="main">
      <div>
        <section className="text-gray-700 body-font relative">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-4xl   title-font mb-4 text-gray-900">
                CONTACT
              </h1>
            </div>
            <h1
              // style={{ fontSize: "20px" }}
              className="lg:w-2/3 mx-auto leading-relaxed mb-5 sm:text-1xl text-[20px] title-font    "
            >
              GET IN TOUCH
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base mb-5">
              Greetings! Here Is Where You’ll Be Able To Make Inquiries
              Regarding Any Art Or Apparel.
            </p>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base mb-10 pb-5">
              You Can Also Inquire About Commission Work, Project Or Ask A
              Question It’s All Welcomed.
            </p>
            <div className="lg:w-3/3 md:w-2/3 mx-auto pt-3">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      for="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full    border border-gray-300 focus:border-black black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      for="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full    border border-gray-300 focus:border-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      for="message"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full   border border-gray-300 focus:border-black h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className=" text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600   text-lg">
                    send
                  </button>
                </div>
              </div>
              <p className="leading-normal my-5">
                This site is protected by reCAPTCHA and the Google Privacy
                Policy and Terms of Service apply.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default index;
