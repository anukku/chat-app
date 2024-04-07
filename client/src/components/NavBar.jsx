import "bootstrap/dist/css/bootstrap.min.css";
import{Container, Navbar, Nav, Stack} from "react-bootstrap";
import {Link} from "react-router-dom";

const NavigationBar = () => {
return ( 
    <Navbar bg = "dark" className="NavBar">
        <Container>
            <h2>
                <Link to = "/" className="chatNavLink"> Chat </Link>
            </h2>
            <span className="text-warning">Logged in as Matthew</span>
            <Nav>
                <Stack direction="horizontal" gap = {3}>
                    <Link to = "/login" className="chatNavLink"> Login </Link>
                    <Link to = "/register" className="chatNavLink"> Register </Link>
                </Stack>
            </Nav>
   
        </Container>
    </Navbar>
    );
}
 
export default NavigationBar;