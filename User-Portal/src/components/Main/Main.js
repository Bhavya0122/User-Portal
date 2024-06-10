import React from "react";
import classes from "./Main.module.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import MainContent from "./MainContent";
 const Main=()=>
 {
    return (
        <div className={classes.appContainer}>
          <Sidebar />
          <div className={classes.mainSection}>
            <Header />
            <MainContent />
          </div>
        </div>
      );

 }
 export default Main;