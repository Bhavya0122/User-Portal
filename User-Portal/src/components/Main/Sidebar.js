import React from "react";
import classes from "./Sidebar.module.css";
const Sidebar=()=>
{
    return (
        <div className={classes.sidebar}>
          <div className={classes.menuItem}>
            <div className={classes.menuTitle}>User Management</div>
            <ul className={classes.menuList}>
              <li className={classes.menuListItem}>
                <i className={classes.icon}>⚙️</i>
                <span>Users</span>
              </li>
              <li className={classes.menuListItem}>
                <i className={classes.icon}>⚙️</i>
                <span>Groups</span>
              </li>
            </ul>
          </div>
        </div>
      );

}
export default Sidebar;