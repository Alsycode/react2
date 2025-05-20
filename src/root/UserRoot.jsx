import React from 'react'
import { Outlet } from 'react-router'

import Header from '../components/Header'
import Footer from '../components/Footer'
const UserRoot = () => {
  return (
    <div>
<Header/>
<div className='container mx-auto'>
<Outlet/>
<Footer/>
</div>

    </div>
  )
}

export default UserRoot