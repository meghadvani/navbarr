import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header'
import Todo from './component/Todo'
import DataList from './component/DataList'
import Counter from './component/Count'
import UserPage from './component/UserPage'
function App() {
  const styles = {
    light: {
      bg: "#F8F9FA",
      text: "black",
      card: "#F54990",
      border: "2px solid black",
    },
    dark: {
      bg: "#222222",
      text: "white",
      card: "#DC143C",
      border: "2 px solid #FF78AA",
    },
  };
  
  const [theme, settheme] = useState("light")
  const[activeTab,setActiveTab]=useState("home")
  const toggleTab=()=>{
    settheme((prevtheme)=>(prevtheme==="light"?"dark":"light"))
  }
  useEffect(()=>{
    document.body.style.backgroundColor = styles[theme].bg;
    document.body.style.color = styles[theme].text;
  },[theme])


  return (
    <div style={{minHeight:"100vh"}}>
    <div style={{  height:"600px" }}>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} theme={theme}/>
      {activeTab === "home" && (
          <div style={{border:"2px solid black"}}>
            <h1>React Concept</h1>
            <p>todo</p>
            <p>userProfile</p>
            <p>count</p>
            <p>contact list</p>
          
          </div>
        )}
        {activeTab==="todo" &&(<Todo theme={theme}/>)}
        {activeTab==="List" &&(<DataList theme={theme}/>)}
      {activeTab==="count" && <Counter theme={theme}/>} 
      {activeTab==="User"&&   <UserPage theme={theme}/>}
   

    </div>
    <div className="theme-button">
  <input id="checkbox" type="checkbox"  onClick={ ()=>toggleTab()}/>
  <label className="switch" htmlFor="checkbox">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="slider">
      <path
        d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"
      ></path>
    </svg>
  </label>
  </div>
  
    </div>
  )
}

export default App
