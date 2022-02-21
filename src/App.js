import React from "react";
import Topbar from "./components/topbar/Topbar";
import MainSideBar from "./components/mainSideBar/MainSideBar";
import HomeDashBoard from "./components/homeDashBoard/HomeDashBoard";
import "./App.css"
import ActiveUserDetails from "./components/homeDashBoard/activeUserDetails/ActiveUserDetails";
import MembersTransactions from "./components/homeDashBoard/membersTransactionsComponent/MembersTransactions";

function App() {
  return (
    <div>
      <Topbar />
      
      <div className="container">
        {/* <div className="left">
          hello
        </div> */}
        <MainSideBar />
        
        <div className="right">
          <HomeDashBoard />
          <ActiveUserDetails/>
          <MembersTransactions/>
          
        </div>
        
      </div>
      
      
       
    </div>
  );
}

export default App;