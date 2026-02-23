import React from 'react'
import Card from "./components/card" ;

const App = () => {
  return (
    <div className = "parent" >
      <Card imgsrc = "https://images.unsplash.com/photo-1444492696363-332accfd40c0?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name = "Devansh" age = {22} />
      <Card imgsrc="https://plus.unsplash.com/premium_photo-1709579654090-3f3ca8f8416b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name = "sar" age = {20} />
      <Card imgsrc = "https://plus.unsplash.com/premium_photo-1764699345499-50440f0bfb17?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name = "awara" age = {22} /> 
    </div>
  )
}

export default App