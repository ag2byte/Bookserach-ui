
import { Container } from "reactstrap";
import '../css/home.css'
import LoginButton from "./loginbutton";


function Home(){
return (
    <Container>
        <h1>React Book Store</h1>   
        <div className="singinbutton">
            <LoginButton/>
        </div>
        

    </Container>
)

}
export default Home