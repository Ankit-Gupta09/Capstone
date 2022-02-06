import React from "react"
import { Admin, Resource } from "react-admin"
import fakeDataProvider from "ra-data-fakerest"
import PostList from "./components/PostList"
import PostCreate from "./components/PostCreate"
import PostEdit from "./components/PostEdit"
import PostShow from "./components/Show"
import MyPostList from "./components/MyPosts"
import Grid from "./Grid";
import SignIn from "./pages/home/SignIn"
import Profile from "./components/Admin"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext"
import ResetPassword from "./pages/home/ResetPassword"
import SignUp from "./pages/home/SignUp"


// const LoginPage = () => {
//   return <div> Login </div>
// }

// const authProvider = {
//   // authentication
//   login: (params) => Promise.resolve(),
//   checkError: (error) => Promise.resolve(),
//   checkAuth: (params) => Promise.resolve(),
//   logout: () => Promise.resolve(),
//   getIdentity: () => Promise.resolve(),
//   // authorization
//   getPermissions: (params) => Promise.resolve(),
// }

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route path="/" exact component={SignIn} />
          <Route path="/profile" component={Profile} />    
          <Route path="/accounts/password/reset" component={ResetPassword} />    
          <Route path="/accounts/signup" component={SignUp} />  
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
