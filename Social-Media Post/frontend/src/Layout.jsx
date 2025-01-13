import { Outlet } from 'react-router-dom'
import App from './App'

const Layout = () => {
  return (
    <>
    <div><Outlet/></div>
    <div><App/></div>
    </>
  )
}

export default Layout