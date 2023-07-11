import React, { Fragment } from 'react'
import Navbar from '../../components/Navbar'
import List from './List'
import './Home.css'

const Index = () => {
    return (
        <Fragment>
            <Navbar />

            <List />
        </Fragment>
    )
}

export default Index