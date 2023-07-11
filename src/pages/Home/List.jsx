import React, { Fragment, useEffect, useState } from 'react'
import Modal from '../../components/Modal'
import TodoForm from './TodoForm'
import Item from './Item'
import { useDispatch, useSelector } from 'react-redux'
import { setFilterTodos, setSearchTodos, setTodos } from '../../redux/reducers/todoReducer'
import { STATUS_OPTIONS } from '../../utils/constants'

const List = () => {
    const [todoFormModal, setTodoFormModal] = useState(false)
    const [search,setSearch]=useState('')

    const todoData = useSelector(state => state?.todo?.todoData)
    const duplicateTodoData = useSelector(state => state?.todo?.duplicateTodoData)

    const dispatch = useDispatch()

    const onClickAddTodoBtn = () => {
        setTodoFormModal(!todoFormModal)
    }

    const onSearch=(e)=>{
        setSearch(e.target.value)
    }

    const handleSubmit = (values) => {
        const newData = {
            ...values,
            id: duplicateTodoData.length + 1,
            dateCreated: new Date().toISOString(),
            isCompleted: false
        }
        dispatch(setTodos([...duplicateTodoData, newData]))
        setTodoFormModal(false)
    }

    const handleDeleteTodo = (id) => {
        const updatedData = duplicateTodoData.filter(data => data?.id !== id)
        dispatch(setTodos(updatedData))
    }

    const handleSelectOption=(e)=>{
        const {value}=e.target

        const filterData = value !== "All" ?  duplicateTodoData?.filter(data=> data?.status === value) : duplicateTodoData
        dispatch(setFilterTodos(filterData))
    }

    useEffect(()=>{
        const searchFunc = setTimeout(()=>{
            if(search){
                const searchData=duplicateTodoData?.filter(data=>{
                    if(data?.name?.toLowerCase().includes(search?.toLowerCase())){
                        return data;
                    }
                })

                dispatch(setSearchTodos(searchData))
            }else if(search.length === 0){
                dispatch(setSearchTodos(duplicateTodoData))
            }

        },1000)

        return()=>{
            clearTimeout(searchFunc)
        }
    },[search])

    return (
        <Fragment>
            <div className='header'>
                <select
                    // value={selectedOption}
                    onChange={handleSelectOption}
                >
                    <option value="All">
                        All
                    </option>
                    {STATUS_OPTIONS?.map(op=>{
                        return(
                            <option key={op?.id} value={op?.name}>
                                {op?.name}
                            </option>
                        )
                    })}
                </select>
                <input type='text' onChange={onSearch} value={search} placeholder='Search Todos' />
                <button
                    className='addTodoBtn'
                    onClick={onClickAddTodoBtn}
                >
                    Add Todo
                </button>
            </div>

            <div className='todoListContainer'>
                {todoData?.map(data => {
                    return (
                        <Fragment>
                            <Item
                                data={data}
                                handleDelete={() => handleDeleteTodo(data?.id)}
                            />
                        </Fragment>
                    )
                })}
            </div>

            {todoFormModal &&
                <Modal
                    closeModal={() => setTodoFormModal(false)}
                >
                    <TodoForm
                        handleSubmit={handleSubmit}
                    />
                </Modal>
            }
        </Fragment>
    )
}

export default List