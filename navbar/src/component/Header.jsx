import React from 'react'

function Header({ activeTab, setActiveTab, theme }) {

    const navItems = [
        { id: "home", lable: "Home" },
        { id: "todo", lable: "Todo" },
        { id: "User", lable: "User" },
        { id: "count", lable: "Count" },
        { id: "List", lable: "List" },
      ];

     
    
  return (
    <>
<nav className='button-container' style={{color:theme==="light"?"white":"black"}}>
    {navItems.map((item)=>(
        <button  onClick={() => setActiveTab(item.id)} className='button' key={item.id} style={{
            backgroundColor:activeTab === item.id ?"#F54990": "transparent", color:theme==="light"?"white":"black"} } >{item.lable}</button>
    ))

    }
    {/* ((prevthm)=> (theme==prevthm?"F54990":"#DC143C")) */}

</nav>


    
  
    </>
  )
}

export default Header