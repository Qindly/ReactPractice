import {createContext } from "react"

const UserContext = createContext({
  id:0,
  username:"",
  email:"",
  displayName:"", 
})

export default UserContext