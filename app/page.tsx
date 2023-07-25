import { Provider } from 'react-redux'

import { store } from './store'

import Header from './components/Header'
import Product from './components/Product'

export default function Home() {
  return (
    <Provider store={store}>
      <Header />
      <Product />
    </Provider>
  )
}
