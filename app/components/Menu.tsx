import Image from 'next/image'

import iconClose from '../../public/images/icon-close.svg'

type Props = {
  isOpen: boolean
  handleMenu: any
}

export default function Menu({ isOpen, handleMenu }: Props) {
  return (
    <div className={isOpen ? 'menu--isOpen' : 'menu'}>
      <div onClick={handleMenu} className="overlay" />
      <nav className="sidebar">
        <button onClick={handleMenu} type="button" className="button">
          <Image src={iconClose} alt="Close" />
        </button>
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  )
}
