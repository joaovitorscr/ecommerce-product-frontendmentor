'use client'

import Image from 'next/image'

import iconAvatar from '../../public/images/image-avatar.png'
import iconCart from '../../public/images/icon-cart.svg'
import iconMenu from '../../public/images/icon-menu.svg'
import Menu from './Menu'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  function handleMenu() {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <header className="container header__container">
        <nav className="header__container__nav">
          <div className="header__container__nav__content">
            <button onClick={handleMenu} type="button" className="button">
              <Image src={iconMenu} alt="Menu" />
            </button>
            <h1 className="title">Sneakers</h1>
          </div>
          <div className="header__container__nav__content">
            <button type="button" className="button">
              <Image width={24} height={24} src={iconCart} alt="Cart" />
            </button>
            <Image width={24} height={24} src={iconAvatar} alt="Avatar" />
          </div>
        </nav>
      </header>
      <Menu isOpen={isOpen} handleMenu={handleMenu} />
    </>
  )
}
