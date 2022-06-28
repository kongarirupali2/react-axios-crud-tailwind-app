import React from 'react'

function Navbar() {
  return (
    <div className='w-full h-16 bg-blue-600 flex item-center px-10 py-2 justify-between'>
        <h1 className='text-white text-3xl font-semibold  font-montserrat'>Crud</h1>
        <button className='w-48 bg-white text-blue-300 text-semibold'>Add User</button>
    </div>
  )
}

export default Navbar
