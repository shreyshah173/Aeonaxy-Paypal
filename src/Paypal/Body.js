import React from 'react'
import Blue from './Blue'
import White from './White'
import Form from './Form'
import Footer from './Footer'

const Body = () => {
  return (
    <div>
      <Blue />
      <div className='flex'>
      <White />
      <Form />

      </div>
      <Footer />
    </div>
  )
}

export default Body
