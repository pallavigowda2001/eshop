import React,{createContext, useMemo, useState} from 'react'

export const AuthContext = createContext()

function AuthProvider(props) {
    const [token , setToken] = useState(false)

    let contextData = useMemo(() => ({
        token
    }),[token])
  return (
    <AuthContext.Provider value={{contextData,setToken}}>
        {
            props.children
        }
    </AuthContext.Provider>
  )
}

export default AuthProvider
