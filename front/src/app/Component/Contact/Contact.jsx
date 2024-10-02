import React from "react";

const Page = () => {
  return (
    <section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 antialiased">
      <div class=" bg-green-200 flex mx-auto px-4 lg:px-16  ">
          <form action="#" method="post" class=" m-5 ">
            <div class="grid grid-cols-8 ">
              <div class="col-span-2 flex ">
                <label class="mt-3">نام </label>
                <input
                  class="m-2  bg-gray-200 border border-slate-400
                    text-red-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2.5 
                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 
                      dark:focus:border-primary-500"
                ></input>
              </div>
              <div class="col-span-2 flex ">
                <label class="mt-3">نام خانوادگی </label>
                <input
                  class="m-2  bg-gray-200 border border-slate-400
                    text-red-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 
                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 
                      dark:focus:border-primary-500"
                ></input>
              </div>
              <div class="col-span-2 flex ">
                <label class="mt-3 ">کد ملی </label>
                <input
                  class="m-2 bg-gray-200 border border-slate-400
                    text-red-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2.5 
                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 
                      dark:focus:border-primary-500"
                ></input>
              </div>
              <div class="col-span-2 flex ">
                <label class="mt-3 ">کد پرسنلی </label>
                <input
                  class="m-2  bg-gray-200 border border-slate-400
                    text-red-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2.5 
                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 
                      dark:focus:border-primary-500"
                ></input>
              </div>
              <div class="col-span-2 flex ">
                <label class="mt-3 ">شماره موبایل</label>
                <input
                  class="m-2  bg-gray-200 border border-slate-400
                    text-red-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2.5 
                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 
                      dark:focus:border-primary-500"
                ></input>
              </div>
              <div class="col-span-2 flex ">
                <label class="m-2 ">جنسیت</label>
                <select
                  class="m-2  w-48  bg-gray-200 border border-slate-400
                    text-red-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2.5 
                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 
                      dark:focus:border-primary-500"
                >
                  <option>انتخاب کنید </option>
                  <option>مرد </option>
                  <option>زن </option>
                </select>
              </div>
              <div class="col-span-2 flex ">
                <label class="m-2 ">استان</label>
                <select
                  class="m-2  w-48  bg-gray-200 border border-slate-400
                    text-red-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2.5 
                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 
                    dark:focus:border-primary-500"
                >
                  <option>انتخاب کنید </option>
                  <option>تهران </option>
                  <option>خراسان رضوی </option>
                  <option>اصفهان </option>
                  <option>آذربایجان شرقی </option>
                  <option>کرمانشاه </option>
                  <option>فارس </option>
                  <option>گیلان </option>
                  <option>مازندران </option>
                  <option>گلستان </option>
                  <option>یزد </option>
                </select>
              </div>
              <div class="col-span-2 flex ">
                <label class="m-2 ">شهرستان</label>
                <select
                  class="m-2 w-48 bg-gray-200 border border-slate-400
                    text-red-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2.5 
                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 
                    dark:focus:border-primary-500"
                >
                  <option>انتخاب کنید </option>
                  <option>کرج </option>
                  <option>کرمان </option>
                  <option>بابلسر </option>
                  <option>تبریز </option>
                  <option>زاهدان</option>
                  <option>شیراز </option>
                  <option>رشت </option>
                  <option>ساری </option>
                  <option>گرگان </option>
                  <option>اردبیل </option>
                </select>
              </div>
            </div>
          </form>
        </div>
    
    </section>
  );
};

export default Page;

// {/* <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg "> */}

// <div class="box-border h-auto   bg-slate-200  flex justify-start gap-3 ">
// <form action="#" method="post" class="mx-auto mt-5 max-w-xl sm:mt-10">
// <div class="flex   " >
// <label for="name" class="  text-sm font-medium text-gray-900 dark:text-white  mt-5">نام</label>
//   <input
//     type="text"
//     name="name"
//     id="name"
//     class="bg-gray-200 border border-slate-400
// text-red-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2.5
// dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500
// dark:focus:border-primary-500  mt-3 "
//     placeholder="نام وارد کنید "
//     required=""
//   />
//     <label for="name" class=" mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5  ">  نام خانوادگی</label>
//   <input
//     type="text"
//     name="name"
//     id="name"
//     class="bg-gray-200 border border-slate-400
// text-red-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-64 p-2.5
// dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500
// dark:focus:border-primary-500 mt-3 "
//     placeholder="نام وارد کنید "
//     required=""
//   />
//    <label for="name" class="  text-sm font-medium text-gray-900 dark:text-white  mt-5 ">نام</label>
//   <input
//     type="text"
//     name="name"
//     id="name"
//     class="bg-gray-200 border border-slate-400
// text-red-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-64 p-2.5
// dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500
// dark:focus:border-primary-500  mt-3 "
//     placeholder="نام وارد کنید "
//     required=""
//   />
//     <label for="name" class=" mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5  ">  نام خانوادگی</label>
//   <input
//     type="text"
//     name="name"
//     id="name"
//     class="bg-gray-200 border border-slate-400
// text-red-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-64 p-2.5
// dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500
// dark:focus:border-primary-500 mt-3 "
//     placeholder="نام وارد کنید "
//     required=""
//   />
//    <label for="name" class="  text-sm font-medium text-gray-900 dark:text-white  mt-5 ">نام</label>
//   <input
//     type="text"
//     name="name"
//     id="name"
//     class="bg-gray-200 border border-slate-400
// text-red-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-64 p-2.5
// dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500
// dark:focus:border-primary-500  mt-3 "
//     placeholder="نام وارد کنید "
//     required=""
//   />
//     <label for="name" class=" mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5  ">  نام خانوادگی</label>
//   <input
//     type="text"
//     name="name"
//     id="name"
//     class="bg-gray-200 border border-slate-400
// text-red-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-64 p-2.5
// dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500
// dark:focus:border-primary-500 mt-3 "
//     placeholder="نام وارد کنید "
//     required=""
//   />
//        </div>
// </form>
// </div>
