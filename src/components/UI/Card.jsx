import React from 'react'

const Card = ({children}) => {
  return (
    <div className='rounded p-5 border shadow-sm hover:shadow-md my-5'>
        {children}
    </div>
  )
}

export default Card