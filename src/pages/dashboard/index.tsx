import { Container } from "@mui/material";
import Header from "../components/Header";
import SideNav from "../components/SideNav";

const Dashboard = () => {
    return (
        <>
            <Header/>
            <SideNav />
            <Container style={{ marginLeft:"70px"}}>
                <h1>Dashboard Page</h1>
                <p>Página onde se encontra as principais funcionalidades do sistema</p>
            </Container>
        </>
    )
}

export default Dashboard;