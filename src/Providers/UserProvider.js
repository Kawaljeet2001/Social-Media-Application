import React, { useState, useEffect, createContext } from "react";
import { auth } from "../firebase";
export const UserContext = createContext({ user: null })
export default ({children}) => {
  const [user, setuser] = useState(null)

  useEffect(() => {
      auth.onAuthStateChanged((user) => {
        // const { displayName, email } = user;
        // setuser({
        //   displayName,
        //   email
        // })
        setuser(user);
      })

  }, [])
  return (
    <UserContext.Provider value={user}>{children}</UserContext.Provider>
  )
}