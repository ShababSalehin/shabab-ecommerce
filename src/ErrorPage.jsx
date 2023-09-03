import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./styles/Button";

const ErrorPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <div>          
          <h2>Hello!</h2>
          <h3>Welcome to Shabab Mart</h3>
          <p>
              Your Ultimate Shopping Destination! <br/> We're more than just an online store; we're your one-stop-shop for all things fabulous, trendy, and affordable! Discover an enchanting world of fashion, electronics, home essentials, and so much more right at your fingertips.
            </p>
          <NavLink to="/">
            <Button>Go to Home</Button>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
    text-align: center;

    h2 {
      font-size: 10rem;
    }

    h3 {
      font-size: 4.2rem;
    }

    p {
      margin: 2rem 0;
    }
  }

  background-image: url('/public/images/indexbg.jpg'); 
  background-size: cover; 
  background-repeat: no-repeat; 
  background-attachment: fixed;
  min-height: 100vh; 
`;

export default ErrorPage;
