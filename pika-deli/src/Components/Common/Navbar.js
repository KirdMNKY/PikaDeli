import React, { useState, useEffect, useContext } from 'react'
import PikaContext from '../../context/PikaContext'
import {
  Menu,
  MessageCircle,
  ShoppingCart,
  ShoppingBag,
  User,
  Facebook,
  Instagram,
  Send
} from 'react-feather'
import './Navbar.css'
import '../../App.css'



export default function Navbar({ fixed }) {
  const { state, dispatch } = useContext(PikaContext)

  const [navbarOpen, setNavbarOpen] = React.useState(false)


  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-blue-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between wendy-font">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <Menu />
            </button>
            <a
              className="text-3xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
              href="#pablo"
            >
              Pika Deli
          </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
            // onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <ShoppingCart />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center justify-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto text-center">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#products"
                >
                  <ShoppingBag className="opacity-75" /><span className="ml-2">Products</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#aboutus"
                >
                  <User className="opacity-75" /><span className="ml-2">About Us</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#contactus"
                >
                  <MessageCircle className="opacity-75" /><span className="ml-2">Contact Us</span>
                </a>
              </li>
              <li className="flex justify-around mt-10">
                <a className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#facebook"><Facebook /></a>
                <a className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#instagram"><Instagram /></a>
                <a className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#message"><Send /></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>

  )
}
