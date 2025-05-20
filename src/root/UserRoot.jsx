import React from 'react'
import { Outlet } from 'react-router'

import Header from '../components/Header'
const UserRoot = () => {
  return (
    <div>
<Header/>
<div className='container mx-auto'>
<Outlet/>
</div>

    </div>
  )
}

export default UserRoot