'use client'

import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import Image from 'next/image'

import { open, close } from '../store/reducers/cart'
import { RootReducer } from '../store'

import Menu from './Menu'
import Cart from './Cart'

import logo from '../../public/images/logo.svg'
import iconAvatar from '../../public/images/image-avatar.png'
import iconCart from '../../public/images/icon-cart.svg'
import iconMenu from '../../public/images/icon-menu.svg'

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  function handleMenu() {
    setMenuIsOpen(!menuIsOpen)
  }

  function handleCart() {
    if (isOpen) {
      dispatch(close())
    } else {
      dispatch(open())
    }
  }

  return (
    <>
      <header className="header__container container">
        <nav className="header__container__nav">
          <div className="header__container__nav__content">
            <button
              onClick={handleMenu}
              type="button"
              className="button header__container__nav__content__menu"
            >
              <Image src={iconMenu} alt="Menu" />
            </button>
            <h1 className="title">
              <Image src={logo} alt="Sneakers" />
            </h1>
            <nav className="header__container__nav__content__navDesktop">
              <ul className="header__container__nav__content__navDesktop__list">
                <li className="header__container__nav__content__navDesktop__list__item">
                  Collections
                </li>
                <li className="header__container__nav__content__navDesktop__list__item">
                  Men
                </li>
                <li className="header__container__nav__content__navDesktop__list__item">
                  Women
                </li>
                <li className="header__container__nav__content__navDesktop__list__item">
                  About
                </li>
                <li className="header__container__nav__content__navDesktop__list__item">
                  Contact
                </li>
              </ul>
            </nav>
          </div>
          <div className="header__container__nav__content">
            <div className="header__container__nav__content__cart">
              <button
                onClick={handleCart}
                type="button"
                className="header__container__nav__content__cart__button button"
              >
                <Image src={iconCart} alt="Cart" />
                <div
                  className={
                    items.map((item) => item.quantity).length > 0
                      ? 'quantityIcon--isActive'
                      : 'quantityIcon'
                  }
                >
                  {items.map((item) => item.quantity)}
                </div>
              </button>
              <Cart />
            </div>
            <Image
              className="header__container__nav__content__avatar"
              src={iconAvatar}
              alt="Avatar"
            />
          </div>
        </nav>
      </header>
      <Menu isOpen={menuIsOpen} handleMenu={handleMenu} />
    </>
  )
}
