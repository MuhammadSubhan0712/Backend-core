import React from 'react'
import { Outlet } from 'react-router-dom'
import { Theme } from "@radix-ui/themes";
import Home from './Component/Home';


const Layout = () => {
  return (
    <>
    <Outlet/>
    <Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%">
		<Home/>
		</Theme>
    </>
  )
}

export default Layout