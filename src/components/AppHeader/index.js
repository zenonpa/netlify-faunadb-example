import React from 'react'
import deployButton from '../../assets/deploy-to-netlify.svg'
import logo from '../../assets/logo.svg'
import github from '../../assets/github.svg'
import styles from './AppHeader.css' // eslint-disable-line
import { Button } from '@material-ui/core';

const AppHeader = (props) => {
    return ( <header className = 'app-header' >
        <div className = 'app-title-wrapper' >
        <div className = 'app-title-wrapper' >
        <div className = 'app-left-nav' >
        <img src = { logo }
        className = 'app-logo'
        alt = 'logo' / >
        <div className = 'app-title-text' >
        <h1 className = 'app-title' > Consulta </h1> 
        <p className = 'app-intro' >
        Usando FaunaDB & Netlify functions 2023 </p> </div> </div> </div >
        <Button color="primary">Hello World</Button>
        </div> </header >
    )
}

export default AppHeader