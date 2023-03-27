import { AccountBalance, AccountBalanceWalletRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from '@mui/icons-material';
import { useEffect } from 'react';
import './App.css';
import Header from './component/Header';
import MenuContainer from './component/MenuContainer';

function App() {
  useEffect(() =>  {
    const menuLi = document.querySelectorAll("#menu Li");

    function setMenuActive(){
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

      
    

    menuLi.forEach((n) =>n.addEventListener("click",setMenuActive));

  },[]);
  return (
    <div className="App">

      {/* Header section*/}
      <Header />
      {/* Main Container*/}
      <main>
      
        <div className="mainContainer">
             {/*banner*/}
           <div className="banner">
              <bannerName name={"Devanad"} discount={"20"} link={"#"} />
              <img
              src=""

              alt=""
              className="delivarypic"
              />
        

           </div>

        </div>
      
