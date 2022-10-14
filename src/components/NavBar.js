import React from 'react'
import {AppBar, Toolbar,styled} from '@mui/material';
import { NavLink } from 'react-router-dom';
import './index.css';

const Header=styled(AppBar)`
background:#0000FF;
color: #000000;
font-weight:bold;

`
const Tabs=styled(NavLink)`
font-size:18px;
margin-right:50px;
margin-left:50px;
color:inherit;
text-decoration:none;
`

const NavBar=()=> {
  return (
    <div>

<Header position='static'>
        <Toolbar>
            <Tabs to={"/"}>Products</Tabs>
            <Tabs to={"/all"}>All Customers</Tabs>
            <Tabs to={"/add"}>Add Customers</Tabs>

        </Toolbar>
        
    </Header>

<div className='div1'>
        
        <img src={'https://i0.wp.com/logotaglines.com/wp-content/uploads/2017/08/samsung-Logo.jpg?fit=1600%2C1188&ssl=1'} width='300px'  />
        
      <p className='imgg'><h1> SAMSUNG</h1>
        </p>
      </div>
    </div>
    
  )
}
export default NavBar;