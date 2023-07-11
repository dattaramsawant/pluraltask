import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTodos } from '../../redux/reducers/todoReducer'

const Item = (props) => {
    const duplicateTodoData=useSelector(state=>state?.todo?.duplicateTodoData)
    const dispatch = useDispatch()

    const handleCompleted = (e) => {
        const updatedData=duplicateTodoData?.map(data=>{
            if(data.id === props?.data?.id){
                return{
                    ...data,
                    isCompleted: e.target.checked
                }
            }else{
                return data
            }
        })
        dispatch(setTodos(updatedData))
    }

    return (
        <div className='itemContainer'>
            <div className='itemHeader'>
                <input
                    type='checkbox'
                    checked={props?.data?.isCompleted}
                    onChange={handleCompleted}
                />
                <p
                    className='deleteIcon'
                    onClick={props?.handleDelete}
                >
                    Delete
                </p>
            </div>

            <div className='detailsBox'>
                <p className="dataText">Name: {props?.data?.name}</p>
                <p className="dataText">Description: {props?.data?.description}</p>
                <p className="dataText">Status: {props?.data?.status}</p>
                <p className="dataText">Date Created: {props?.data?.dateCreated}</p>
            </div>
        </div>
    )
}

export default memo(Item)