'use client'

import { useState } from 'react'
import Image from 'next/image'

import Menu from './Menu'
import Cart from './Cart'

import logo from '../../public/images/logo.svg'
import iconAvatar from '../../public/images/image-avatar.png'
import iconCart from '../../public/images/icon-cart.svg'
import iconMenu from '../../public/images/icon-menu.svg'

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [cartIsOpen, setCartIsOpen] = useState(false)

  function handleMenu() {
    setMenuIsOpen(!menuIsOpen)
  }

  function handleCart() {
    setCartIsOpen(!cartIsOpen)
  }

  return (
    <>
      <header className="container header__container">
        <nav className="header__container__nav">
          <div className="header__container__nav__content">
            <button onClick={handleMenu} type="button" className="button">
              <Image src={iconMenu} alt="Menu" />
            </button>
            <h1 className="title">
              <Image src={logo} alt="Sneakers" />
            </h1>
          </div>
          <div className="header__container__nav__content">
            <button onClick={handleCart} type="button" className="button">
              <Image width={24} height={24} src={iconCart} alt="Cart" />
            </button>
            <Image width={24} height={24} src={iconAvatar} alt="Avatar" />
          </div>
        </nav>
      </header>
      <Menu isOpen={menuIsOpen} handleMenu={handleMenu} />
      <Cart isOpen={cartIsOpen} />
    </>
  )
}
