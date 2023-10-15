import { Container } from "@mui/material";
import Header from "../components/Header";

const Dashboard = () => {
    return (
        <>
            <Header/>
            <Container>
                <h1>Dashboard Page</h1>
                <p>Página onde se encontra as principais funcionalidades do sistema</p>
            </Container>
        </>
    )
}

export default Dashboard;