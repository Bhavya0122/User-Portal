import React,{useState} from "react";
import {Link} from "react-router-dom";
import classes from "./MainContent.module.css";
import UserData from "./UserData";
import UserForm from "../UserForm/UserForm";
import NoUserCreated from "./NoUserCreated";
const MainContent=()=>
{
  // const [showForm,setShowForm]=useState(false);

  const[tableData,setTableData]=useState({
    userSelected:undefined,
    userdata:[]
  });

  const formHandler=(newData)=>
  {
  setTableData((prevState)=>{
    const info={...newData};
    return{
      ...prevState,
      userSelected:undefined,
      userdata:[...prevState.userdata,info]
    }

  })
  }
  const onStartUserSelect=()=>
  {
    setTableData(prevState=>
    {
      return{
        ...prevState,
        userSelected:null,
      }

    });
  }
  let content;
  if(tableData.userSelected===null)
  {
    content=<UserForm onFormSubmit={formHandler}></UserForm>
  }
  else if(tableData.userSelected===undefined ||tableData.userdata.length===0)
  {
    content=<NoUserCreated onUserSelect={onStartUserSelect} />
  }

    return (
        <div className={classes.mainContent}>
          <h1>User Management</h1>
          {content}
         {tableData.userdata.length>0 &&<UserData data={tableData.userdata}/>}
         
         </div>
      );

}
export default MainContent;