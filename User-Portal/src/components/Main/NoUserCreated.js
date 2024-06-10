import React from 'react';
import classes from "./NoUserCreated.module.css";
import {Link} from "react-router-dom";
import nouser from "./nouser.png";

function NoUserCreated({onUserSelect}) {
  return (
    <div className={classes.mainContent}>
          <div className={classes.noUsers}>
            <img src={nouser} alt="No Users Created" className={classes.noUsersImage} />
            <p>No Users Created</p>
            <button className={classes.createUsersButton} onClick={onUserSelect}>Create Users</button>
          </div>
    </div>
  )
}

export default NoUserCreated