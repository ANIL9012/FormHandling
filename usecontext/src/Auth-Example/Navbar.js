import React, { useContext } from 'react'
import { AuthContext } from './AuthContext'

function Navbar() {

    const {isloggedIn, login, logout} = useContext(AuthContext)

  return (
    <>
      <nav>
        {isloggedIn ? (
            <button onClick={logout}>Logout</button>
        ) : (
            <button onClick={login}>Login</button>

        ) }
      </nav>
    </>
  )
}

export default Navbar
