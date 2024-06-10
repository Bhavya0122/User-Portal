import React from "react";
import classes from "./Header.module.css";
const Header=()=>
{
    return (
        <div className={classes.header}>
          <div className={classes.userProfile}>
            <img src="https://via.placeholder.com/40" alt="Profile" className={classes.profilePicture}/>
            <div className={classes.userInfo}>
              <span className={classes.userName}>Krishna Kumar</span>
              {/* <a href="#" className={classes.viewProfile}>View Profile</a> */}
            </div>
          </div>
        </div>
      );

}
export default Header;