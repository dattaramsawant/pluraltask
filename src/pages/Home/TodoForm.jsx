import React, { memo, useMemo, useState } from 'react'
import { STATUS_OPTIONS } from '../../utils/constants';

const TodoForm = (props) => {
    const [values, setValues] = useState({
        name: '',
        description: '',
        status: 'Incomplete'
    })

    const handleChange = (e) => {
        const {name,value}=e.target;

        setValues(prev=>({
            ...prev,
            [name]:value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        
        props?.handleSubmit(values)
    }

    return (
        <div className='formContainer'>
            <form
                onSubmit={onSubmit}
                className='formMain'
            >
                <div className='field'>
                    <label className='label'>
                        Name
                    </label>
                    <input
                        type='text'
                        name="name"
                        value={values?.name}
                        onChange={handleChange}
                        className='inputBox'
                    />
                </div>

                <div className='field'>
                    <label className='label'>
                        Description
                    </label>
                    <input
                        type='text'
                        name="description"
                        value={values?.description}
                        onChange={handleChange}
                        className='inputBox'
                    />
                </div>

                <div className='field'>
                    <label className='label'>
                        Status
                    </label>
                    <select 
                        className='inputBox'
                        value={values?.status}
                        onChange={handleChange}
                        name="status"
                    >
                        {STATUS_OPTIONS?.map(op=>{
                            return(
                                <option key={op.id} value={op.name}>
                                    {op.name}
                                </option>
                            )
                        })}
                    </select>
                </div>

                <button
                    type='submit'
                    className='submitBtn'
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default memo(TodoForm)