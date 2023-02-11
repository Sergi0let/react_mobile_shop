import React from 'react'
import Categories from '../categories'

import BasketCard from '../basketCart'
import Search from '../search'

const Sidebar = () => {
  return (
    <div>
      <BasketCard />
      <Search />
      <Categories />
    </div>
  )
}

export default Sidebar
