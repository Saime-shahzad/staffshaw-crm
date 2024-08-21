import React, { 
    // useRef,
     useState } from 'react'
import Tables from '../../components/tables/Tables'
import { Buttons } from '../../assets/button/Buttons'
import Modals from '../../assets/modals/Modals'
// import { Inputs } from '../../assets/input/Inputs'

export const Users = () => {
    const [isModalOpen , setIsModalOpen] =useState(false)
    const handleuserAddModal=(() =>{
        setIsModalOpen(true)
    })
    // const inputRef=useRef(null)
    // const bodyContent =(() =>{
        
    //     return(
    //         <div>
    //             <Inputs ref={inputRef} placeholder="Add User" />
    //         </div>
    //     )
    // })
  return (
    <div className='User-parrent'>
        <div className='button-parrent my-2'>
        <Buttons className="text-white border-0" onClick={handleuserAddModal} text="Add User"  />
        </div>
        <div className='table-parrent'>
        <Tables />
        </div>
        {isModalOpen && <Modals isModalOpen={isModalOpen} title="Add User" setIsModalOpen={setIsModalOpen}  />}

    </div>
  )
}
