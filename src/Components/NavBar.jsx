import React from 'react'
import { useNavigate } from 'react-router'

const NavBar = (props) => {
    const nav = useNavigate()
    const AllOnClick = () => {
        nav('/all')
    }
    const ActiveOnClick = () => {
        nav('/active')
    }
    const CompletedOnClick = () => {
        nav('/completed')
    }

    return (
        <>
        <div className='p-3 text-4xl font-bold w-full text-center'>#todo</div>
            <div className='flex flex-row text-gray-600 justify-between text-xl text-center px-10 pt-1.5 border-b-4 border-gray-200'>
                <p onClick={AllOnClick} className={(props.pageStatus === 1) ? 'border-b-4 border-blue-500 w-[120px] py-2' : 'w-[120px] py-2'} >All</p>
                <p onClick={ActiveOnClick} className={(props.pageStatus === 2) ? 'border-b-4 border-blue-500 w-[120px] py-2' : 'w-[120px] py-2'} >Active</p>
                <p onClick={CompletedOnClick} className={(props.pageStatus === 3) ? 'border-b-4 border-blue-500 w-[120px] py-2' : 'w-[120px] py-2'} >Completed</p>
            </div>
        </>

    )
}

export default NavBar