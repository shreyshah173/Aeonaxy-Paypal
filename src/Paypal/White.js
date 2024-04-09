import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
const White = () => {
  return (
    <div  className='w-6/12'>
      <div className='w-7/12 pl-16 pt-20'>
        <h2 className='text-3xl'>Some other ways  to connect with us</h2>
        <div>
        <p className='pt-8'>Want to speak with us right away?</p>
        <p className='text-blue-600 font-bold pt-3'>Call 877-794-7639</p>
        </div>
        <div>
        <p className='pt-8'>Need  help with your exisitng account</p>
        <p className='  flex flex-wrap text-blue-600 font-bold pt-3 '>Visit our Help Center <span className='mt-2 ml-1'><FaLongArrowAltRight /></span>  </p>
        </div>
        <div>
        <p className='pt-8'>Want helpful business insights?</p>
        <p className='flex flex-wrap  text-blue-600 font-bold pt-3'>Visit our Busniess  Resource Center <span className='mt-2 ml-1'><FaLongArrowAltRight /></span> </p>
        </div>
      </div>
    </div>
  )
}

export default White
