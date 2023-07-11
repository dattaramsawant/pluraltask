import React, { memo, useMemo } from 'react'
import './Navbar.css'
import { useSelector } from 'react-redux'

const Index = () => {
    const todoData = useSelector(state => state?.todo?.duplicateTodoData);

    const completedData = useMemo(()=>{
        return todoData?.filter(data=>data?.isCompleted)
    },[todoData])

    console.log('completedData', completedData)
    return (
        <div className='navbarContainer'>
            <div className='navbar'>
                <p className='logo'>LOGO</p>
                <div>
                    <p className='count'>Total Records: {todoData?.length}</p>   
                    <p className='count'>Total Completed Records: {completedData?.length}</p>
                </div>
            </div>
        </div>
    )
}

export default memo(Index)