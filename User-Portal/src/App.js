import logo from './logo.svg';
import './App.css';
import React,{useState} from "react";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import LoginPage from "./components/Login/LoginPage";
import UserForm from "./components/UserForm/UserForm";
import Main from "./components/Main/Main";
import UserData from "./components/Main/UserData";
import NoUserCreated from "./components/Main/NoUserCreated";


const router=createBrowserRouter([
  {path:"/",element:<LoginPage/>},
  {path:"/users", element:<Main/>},
  {path:"/users/createUsers", element:<UserForm/>},
  {path:"/userData", element:<UserData/>}
  
])

function App() {
  return (
  <>
  <RouterProvider router={router}/>
  {/* <UserData></UserData> */}
  </>
  );
}

export default App;
