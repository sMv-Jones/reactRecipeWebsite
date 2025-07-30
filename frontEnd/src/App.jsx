import { Outlet} from "react-router-dom"
import {Header, Footer} from "./components/index"
function App() {
  
  return (
    <>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

export default App
