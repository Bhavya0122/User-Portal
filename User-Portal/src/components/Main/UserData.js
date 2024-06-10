import React from 'react';
import classes from "./UserData.module.css";
import {Link} from "react-router-dom";

function UserData(props,{onUserSelect}) {
    return (
        <div className={classes.userTable}>
          <div className={classes.header}>
            <input type="text" placeholder="Search by user name, user ID/email ID" />
            <button onClick={onUserSelect}>Create User</button>
            <button>Add to Group</button>
          </div>
          <table className={classes.tbl}>
            <thead>
              <tr>
                <th>Select</th>
                <th>Name</th>
                <th>User Name</th>
                <th>Employee ID</th>
                {/* <th>Role</th> */}
                <th>E-Mail</th>
                {/* <th>Group</th> */}
              </tr>
            </thead>
            <tbody>
              {props.data.map((user, index) => (
                <tr key={index}>
                  <td><input type="checkbox" /></td>
                  <td className={classes.fnt}>{user.name}</td>
                  <td className={classes.fnt}>{user.username}</td>
                  <td className={classes.fnt}>{user.employeeId}</td>
                  {/* <td className={classes.fnt}>{user.role}</td> */}
                  <td className={classes.clr}>{user.email}</td>
                  {/* <td>
                    {user.groups.map((group, idx) => (
                      <button key={idx} className={`group-btn group-${group.replace(' ', '-').toLowerCase()}`}>{group}</button>
                    ))}
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}

export default UserData