import { useState } from "react";
import Marquee from "react-fast-marquee";
import { CiMenuFries } from "react-icons/ci";
import { FaApple, FaArrowRight, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa6";
import img1 from '../src/assets/1.png'
import img2 from '../src/assets/2.png'
import img3 from '../src/assets/3.png'
import img4 from '../src/assets/4.png'
import video from '../src/assets/Hybrid Work Management_ Collaborate Across Teams, Workstyles & Locations..mp4'

function App() {
  const arr = [img1, img2, img3, img4];
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={` w-44 text-white ${open ? 'flex' : "hidden"} z-30 bg-black fixed h-screen`}>

      </div>
      <div className="max-w-screen-2xl mx-auto bg-slate-200">
        {/* header */}
        <div className="bg-[#161C2D] text-blue-500 py-4 h-screen">
          {/* navbar */}
          <nav className="flex items-center justify-between fixed z-20 w-full">
            <div className="lg:ml-24 md:ml-16">
              <h1 className="text-xl font-bold">Brainwave.io</h1>
            </div>
            <div className="flex items-center gap-6">
              {/* menu item */}
              <ul className="hidden items-center md:flex gap-6 text-sm font-medium ">
                <li>Demos</li>
                <li>
                  <a href="#pages">Pages</a>
                </li>
                <li>Support </li>
                <li>Contact</li>
              </ul>
              <div className="flex items-center gap-2">
                <button className="bg-blue-800 text-sm px-4 py-2 font-medium text-white rounded-lg">
                  Start a free trial
                </button>
                <button onClick={()=>setOpen(!open)} className="md:hidden">
                  <CiMenuFries className="text-3xl font-bold mr-4" />
                </button>
              </div>
            </div>
          </nav>
          {/* banner */}
          <div className="grid grid-cols-1 md:grid-cols-2 mt-24 items-center">
            <div className="grid grid-rows-1 justify-center">
              <h1 className="text-3xl font-bold text-white">
                Get more visitors,
                <br />
                get more sales.
              </h1>
              <p className="text-balance opacity-70 text-sm my-5">
                With lots of unique blocks, you can easily build a page <br />{' '}
                without coding. Build your next consultancy website within{' '}
                <br /> few minutes.
              </p>
              {/* explore more button  */}
              <button className="py-3 text-sm font-medium text-green-500 hover:scale-105 rounded-lg mb-8 flex items-center gap-2">
                Start a free trial <FaArrowRight />
              </button>
              <div>
                <h6 className="text-[10px] mb-4 font-medium uppercase">
                  Download our app
                </h6>
                <div className="flex items-center gap-2">
                  {/* apple  */}
                  <div className="bg-black px-4 py-1 flex items-center gap-2 rounded-lg">
                    <FaApple className="text-white text-3xl" />
                    <h6 className="font-medium flex flex-col">
                      <span className="!text-[12px] opacity-80">
                        Download on the
                      </span>
                      <span> App Store</span>
                    </h6>
                  </div>
                  {/* google play */}
                  <div className="bg-black px-4 py-1 flex items-center gap-2 rounded-lg">
                    <FaGooglePlay className="text-white text-2xl" />
                    <h6 className="font-medium flex flex-col">
                      <span className="!text-[12px] opacity-80">GET IT ON</span>
                      <span>Google Play</span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            {/* Design part of responsive */}
            <div className="border-2 mt-8 md:mt-0 border-blue-700 md:mr-5">
              <video
                src={`${video}`}
                controls
              ></video>
            </div>
          </div>
        </div>
        {/* marquee section */}
        <div className="mt-12 mb-24">
          <Marquee>
            <h1 className="text-3xl font-bold mr-6 border-2 p-4 border-red-500">
              MakeLess
            </h1>
            <h1 className="text-3xl font-bold mr-6 border-2 p-4 border-red-500">
              coworks
            </h1>
            <h1 className="text-3xl font-bold mr-6 border-2 p-4 border-red-500">
              greener
            </h1>
            <h1 className="text-3xl font-bold mr-6 border-2 p-4 border-red-500">
              SAAS TODAY
            </h1>
            <h1 className="text-3xl font-bold mr-6 border-2 p-4 border-red-500">
              Dorfus
            </h1>
            <h1 className="text-3xl font-bold mr-6 border-2 p-4 border-red-500">
              askimat
            </h1>
          </Marquee>
        </div>
        {/* innovation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* organize */}
          <div className="flex gap-4">
            <span>
              <img
                className="w-16"
                src="/src/assets/ic_layers_48px.png"
                alt=""
              />
            </span>

            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-bold">Organize your campaigns</h1>
              <p className="opacity-80">
                With lots of unique blocks, you can easily build a page without
                coding. Build your next consultancy website within few minutes.
              </p>
            </div>
          </div>
          {/* manage customer  */}
          <div className="flex gap-4">
            <span>
              <img className="w-16" src="/src/assets/a-sync.png" alt="" />
            </span>

            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-bold">Manage customers</h1>
              <p className="opacity-80">
                With lots of unique blocks, you can easily build a page without
                coding. Build your next consultancy website within few minutes.
              </p>
            </div>
          </div>
          {/* track progress fast */}
          <div className="flex gap-4">
            <span>
              <img className="w-16" src="/src/assets/chart-bar-33.png" alt="" />
            </span>

            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-bold">Track progress fast</h1>
              <p className="opacity-80">
                With lots of unique blocks, you can easily build a page without
                coding. Build your next consultancy website within few minutes.
              </p>
            </div>
          </div>
        </div>
        {/* dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-16">
          <div>
            <img className="size-full" src="/src/assets/Image.png" alt="" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="grid grid-rows-1 items-center justify-center gap-3 w-3/4 border-2 rounded-md drop-shadow-xl p-4 shadow-xl">
              <h1 className="text-4xl font-bold">
                Track your progress with <br /> our advanced site.
              </h1>
              <p className="opacity-75">
                we share common trends and strategies for improving your rental
                income and making sure you stay in high demand.
              </p>
              <button className="text-[#473BF0] text-center justify-center flex items-center gap-4 font-bold text-sm">
                Start a free trial <FaArrowRight className="mt-1" />
              </button>
            </div>
          </div>
        </div>

        {/* mark section */}
        <div
          id="pages"
          className="grid grid-cols-1 md:grid-cols-2 gap-12 my-16"
        >
          <div className="flex flex-col items-center justify-center">
            <div className="grid grid-rows-1 items-center justify-center gap-3 w-3/4 border-2 rounded-md drop-shadow-xl p-4 shadow-xl">
              <h1 className="text-4xl font-bold">
                Understand your visitors <br />
                fast. take quick actions.
              </h1>
              <p className="opacity-75">
                we share common trends and strategies for improving your rental
                income and making sure you stay in high demand.
              </p>
              <button className="text-[#473BF0] text-center justify-center flex items-center gap-4 font-bold text-sm">
                Start a free trial <FaArrowRight className="mt-1" />
              </button>
            </div>
          </div>

          <div>
            <img className="size-full" src="/src/assets/Img.png" alt="" />
          </div>
        </div>

        {/* customer happy and giving services */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-16">
          <div className="grid grid-cols-2 gap-4">
            {arr.map((img, index) => (
              <img
                key={index}
                className="size-full"
                src={`${img}`}
                alt=""
              />
            ))}
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="grid grid-rows-1 items-center justify-center gap-3 w-3/4 border-2 rounded-md drop-shadow-xl p-4 shadow-xl">
              <h1 className="text-4xl font-bold">
                Make your customers <br />
                happy by giving services.
              </h1>
              <p className="opacity-75">
                we share common trends and strategies for improving your rental
                income and making sure you stay in high demand.
              </p>
              <button className="text-[#473BF0] text-center justify-center flex items-center gap-4 font-bold text-sm">
                Start a free trial <FaArrowRight className="mt-1" />
              </button>
            </div>
          </div>
        </div>

        {/* pricing & plan  */}
        <div className="my-32">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-2xl font-bold">Pricing & Plans</h1>
            <p className="opacity-80 text-balance text-center lg:mx-96">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </p>
            <span className="flex items-center gap-6">
              <h6>Monthly</h6>
              <input type="checkbox" name="" id="" />
              <h6>Yearly</h6>
              <h6 className="text-blue-600 bg-slate-200 px-2 rounded-full">
                save 25%
              </h6>
            </span>
          </div>
          {/* plan */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <div className="border-2 bg-white mx-12 my-8 rounded-lg">
              <div className="flex flex-col gap-4 mx-12 my-8">
                <h1 className="uppercase text-blue-500">starter</h1>
                <div className="flex items-center">
                  <span className="text-lg font-black mt-8">$</span>
                  <h3 className="text-6xl font-black uppercase">19</h3>
                  <h1 className="mt-5 font-medium">/ month</h1>
                </div>
                <h6 className="text-sm font-sm opacity-80">billed monthly</h6>
                <div>
                  <ol className="space-y-2 my-4 font-medium opacity-70">
                    <li>Commercial li</li>
                    <li>100+ HTML UI</li>
                    <li>01 Domain Sup</li>
                    <li>6 Month Premium</li>
                    <li>Lifetime Update</li>
                  </ol>
                </div>
                <button className="flex items-center gap-4 hover:scale-105 rounded-md duration-300 text-blue-600 bg-slate-300 px-6 justify-center py-2">
                  Start Free Trial <FaArrowRight />
                </button>
                <span className="opacity-85 text-sm">
                  No credit cart required
                </span>
              </div>
            </div>

            <div className="border-2 scale-110 bg-white mx-12 my-8 rounded-lg">
              <div className="flex flex-col gap-4 mx-12 my-8">
                <h1 className="uppercase text-blue-500">Standard</h1>
                <div className="flex items-center">
                  <span className="text-lg font-black mt-8">$</span>
                  <h3 className="text-6xl font-black uppercase">49</h3>
                  <h1 className="mt-5 font-medium">/ month</h1>
                </div>
                <h6 className="text-sm font-sm opacity-80">billed monthly</h6>
                <div>
                  <ol className="space-y-2 my-4 font-medium opacity-70">
                    <li>Commercial li</li>
                    <li>100+ HTML UI</li>
                    <li>01 Domain Sup</li>
                    <li>6 Month Premium</li>
                    <li>Lifetime Update</li>
                  </ol>
                </div>
                <button className="flex items-center gap-4 hover:scale-105 rounded-md duration-300 text-white bg-blue-600 px-6 justify-center py-2">
                  Start Free Trial <FaArrowRight />
                </button>
                <span className="opacity-85 text-sm">
                  No credit cart required
                </span>
              </div>
            </div>

            <div className="border-2 bg-white mx-12 my-8 rounded-lg">
              <div className="flex flex-col gap-4 mx-12 my-8">
                <h1 className="uppercase text-blue-500">premium</h1>
                <div className="flex items-center">
                  <span className="text-lg font-black mt-8">$</span>
                  <h3 className="text-6xl font-black uppercase">99</h3>
                  <h1 className="mt-5 font-medium">/ month</h1>
                </div>
                <h6 className="text-sm font-sm opacity-80">billed monthly</h6>
                <div>
                  <ol className="space-y-2 my-4 font-medium opacity-70">
                    <li>Commercial li</li>
                    <li>100+ HTML UI</li>
                    <li>01 Domain Sup</li>
                    <li>6 Month Premium</li>
                    <li>Lifetime Update</li>
                  </ol>
                </div>
                <button className="flex items-center gap-4 hover:scale-105 rounded-md duration-300 text-blue-600 bg-slate-300 px-6 justify-center py-2">
                  Start Free Trial <FaArrowRight />
                </button>
                <span className="opacity-85 text-sm">
                  No credit cart required
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* credit of managers  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="w-3/4 border-2 bg-white rounded-xl flex flex-col mx-12 p-4 justify-center">
            <h1 className="text-5xl font-bold text-blue-500">“</h1>
            <h4 className="text-lg font-bold">
              “OMG! I cannot believe that I have got a brand new landing page
              after getting Omega. It was super easy to edit and publish.“
            </h4>
            <span className="font-bold text-sm ">Diego: web developer</span>
          </div>

          <div className="w-3/4 border-2 bg rounded-xl bg-white flex  flex-col mx-12 p-4 justify-center">
            <h1 className="text-5xl font-bold text-blue-500">“</h1>
            <h4 className="text-lg font-bold">
              “OMG! I cannot believe that I have got a brand new landing page
              after getting Omega. It was super easy to edit and publish.“
            </h4>
            <span className="font-bold text-sm ">Diego: web designer</span>
          </div>
        </div>
        <footer className=" bg-slate-900 text-white py-12 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            <div className="space-y-4 flex flex-col items-center justify-center flex-1">
              {/* company */}
              <h5 className="opacity-60">Company</h5>
              <ul className="space-y-2">
                <li>About us</li>
                <li>Contact us </li>
                <li>Careers </li>
                <li>Press</li>
              </ul>
            </div>
            <div className="space-y-4 flex flex-col items-center justify-center flex-1">
              {/* Product */}
              <h5 className="opacity-60">Product</h5>
              <ul className="space-y-2">
                <li>Features </li>
                <li>Pricing </li>
                <li>News</li>
                <li>Help desk </li>
                <li>Support</li>
              </ul>
            </div>
            <div className="space-y-4 flex flex-col items-center justify-center flex-1">
              {/* Services */}
              <h5 className="opacity-60">Services</h5>
              <ul className="space-y-3">
                <li>Digital Marketing </li>
                <li>Content Writing </li>
                <li>SEO for Business </li>
                <li>UI Design</li>
              </ul>
            </div>
            <div className="space-y-4 flex flex-col items-center justify-center flex-1">
              {/* Legal */}
              <h5 className="opacity-60">Legal</h5>
              <ul className="space-y-2">
                <li>Privacy Policy </li>
                <li>Terms & Conditions</li>
                <li>Return Policy</li>
              </ul>
            </div>
            <div className="space-y-4 flex flex-col items-center justify-center flex-1">
              {/* Contact us */}
              <h5 className="opacity-60">Contact us</h5>
              <ul className="space-y-2">
                <li>Support@brainwabe.io</li>
                <li>+133-394-3449-1435</li>
              </ul>
            </div>
          </div>
          <div className="my-12 mx-12">
            <hr />
          </div>
          <div className="flex items-center justify-between px-4 mx-12 mt-12">
            <h5 className="text-sm font-bold">
              2024 Copyright, All Right Reserved
            </h5>
            <ul className="flex items-center gap-6">
              <a href="#">
                <FaTwitter />
              </a>
              <a href="">
                <FaFacebook />
              </a>
              <a href="">
                <FaInstagram />
              </a>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App
