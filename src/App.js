/* JSX for App Component Start */

import React, { useState} from "react";
import "./App.css";
import Top from './Components/Top';

function App() {

//logged
   const [isLoggedIn,setIsLoggedIn]=useState(false);

  const loginHandler=(email,password)=>{
   setIsLoggedIn(true);

  }

  const logoutHandler=()=>{
    setIsLoggedIn(false);
  }

  return (
    <React.Fragment>
    <div>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler}/>
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler}/>}
        {isLoggedIn && <Top onLogout={logoutHandler}/>}
      </main>
    </div>
</React.Fragment>
  );
};

export default App;

/* JSX for App Component End */

