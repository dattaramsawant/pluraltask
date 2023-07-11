import { createSlice } from "@reduxjs/toolkit"

const initialState={
    todoData: [],
    duplicateTodoData:[]
}

const todoSlice = createSlice({
    name:'todo',
    initialState:initialState,
    reducers:{
        setTodos: (state, action)=>{
            state.todoData = action?.payload
            state.duplicateTodoData = action?.payload
        },
        setFilterTodos: (state, action)=>{
            state.todoData = action.payload
        },  
        setSearchTodos: (state, action)=>{
            state.todoData = action.payload
        }
    }
})

export const { setTodos, setFilterTodos, setSearchTodos } = todoSlice.actions

export default todoSlice.reducer;