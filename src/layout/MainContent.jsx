import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

const MainContent = () => {
  return (
    <div className='p-6 maincontent-height'>
      <ToastContainer />
        <Outlet />
    </div>
  )
}

export default MainContent