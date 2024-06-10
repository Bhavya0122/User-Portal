import React,{useState} from "react";
import {Link} from "react-router-dom";
import classes from "./UserForm.module.css";

const UserForm=({onFormSubmit})=>
{
  const[formData,setFormData]=useState({
   name:"",
   username:"",
   employeeId:"",
   email:""
   })
// function handleInputChange(identifier,value){
// console.log("Inside handleInputChange");
// setFormData((prevValues)=>({
//   ...prevValues,
//   [identifier]:value,
// }))
// }
const handleInputChange=(identifier,value)=>{
  console.log("Inside handleInputChange");
  setFormData({
    ...formData,
    [identifier]:value,
})
}
const formHandler=(event)=>{
event.preventDefault();
console.log(formData);
onFormSubmit(formData);

}

    return (
        <div className={classes.modal}>
          <div className={classes.modalContent}>
            <span className={classes.closeButton}>&times;</span>
            <h2>Create New User</h2>
            <div className={classes.avatarContainer}>
              <img src="avatar-placeholder.png" alt="Avatar" className="avatar" />
              <span className="upload-icon">📷</span>
            </div>
            <form className={classes.frmUser} onSubmit={formHandler}>
              <div className={classes.formGroup}>
                <label htmlFor="name">Enter Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={(event)=>handleInputChange("name",event.target.value)}/>
              </div>
              <div className={classes.formGroup}>
                <label htmlFor="username">Enter User Name</label>
                <input type="text" id="username" name="username" value={formData.username} onChange={(event)=>handleInputChange("username",event.target.value)} />
              </div>
              <div className={classes.formGroup}>
                <label htmlFor="email">Enter E-Mail ID</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={(event)=>handleInputChange("email",event.target.value)}/>
              </div>
              {/* <div className={classes.formGroup}>
                <label htmlFor="role">Select Role</label>
                <select id="role" name="role" onChange={(event)=>handleInputChange("role",event.target.value)}>
                  <option value="" disabled selected>Select Role</option>
                  <option value="Admin">Admin</option>
                  <option value="User">User</option>
                </select>
              </div> */}
              <div className={classes.formGroup}>
                <label htmlFor="employee-id">Employee ID</label>
                <input type="text" id="employee-id" name="employeeId" value={formData.employeeId} onChange={(event)=>handleInputChange("employeeId",event.target.value)}/>
              </div>
               {/* <div className={classes.formGroup}>
                <label htmlFor="group">Select Group</label>
                <select id="group" name="group">
                  <option value="" disabled selected>Select Group</option>
                  
                </select>
              </div> */}
              <div className={classes.formGroup}>
                <label htmlFor="password">Enter Password</label>
                <input type="password" id="password" name="password"  />
              </div>
              <div className={classes.formGroup}>
                <label htmlFor="confirm-password">Re-Enter Password</label>
                <input type="password" id="confirm-password" name="confirm-password" />
              </div>
              <button type="submit" className={classes.submitButton}>Submit</button>
            </form>
          </div>
        </div>
      );
    };


export default UserForm;