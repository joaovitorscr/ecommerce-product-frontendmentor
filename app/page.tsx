'use client'

import { Provider } from 'react-redux'

import Header from './components/Header'
import Product from './components/Product'
import { store } from './store'

export default function Home() {
  return (
    <Provider store={store}>
      <Header />
      <Product />
    </Provider>
  )
}

// TO DO: Configure colors, set hover effects and fix lower resolutions devices layout.
