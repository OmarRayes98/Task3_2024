import { Outlet } from "react-router-dom"
import UpperBar from "../components/Layout/UpperBar/UpperBar"
import Container from "../components/Common/Container/Container"
import Header from "../components/Layout/Header/Header"
import Footer from "../components/Layout/Footer/Footer"

const MainLayout = () => {
  return (
    <>
    <UpperBar/>
    <Container>
      <Header/>
    </Container>

    <Outlet/>

    <Footer/>
    </>
  )
}

export default MainLayout
