import React from 'react'
import Container from './container/Container'
import Sidebar from './sidebar/Sidebar'

const Center = () => {
    return (
        <div style={{backgroundColor:"lightgrey"}}>
            <div style={{height:"6vh"}}></div>
            <Sidebar/>
            <Container />
        </div>
    )
}

export default Center
