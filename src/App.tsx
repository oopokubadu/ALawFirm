import React, { useEffect } from 'react'
import StartUp from './utils/StartUp'
import AOS from "aos";

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div><StartUp/></div>
  )
}

export default App