import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { vars } from "../variables.jsx";
import axios from "axios";

const Header = () => {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);

  const getWeather = async (city) => {
    try {
      const response = await axios(
        `${vars.WeatherApi}${city}&appid=${vars.apiKey}`
      );
      console.log(response);
      localStorage.setItem("weather", response.data);
      dispatch({
        type: "SUCCESS",
        data: response.data,
      });
    } catch (e) {
      // setError("");
      // setError(e.message);
      dispatch({
        type: "FAIL",
      });

      localStorage.setItem("weather", "");
    }
  };
  React.useEffect(() => {
    getWeather("tbilisi");
  }, []);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto" activeKey="/">
          <Link to="/" className="nav-link">
            Home
          </Link>

          <Link to="/about" className="nav-link">
            About us
          </Link>

          <Link to="/search" className="nav-link">
            Search
          </Link>
          <div>
            {Object.keys(weather).length > 0 && (
              <span className="temp">
                {Math.round(weather.main.temp - 273.15) + "°C"} {weather.name}
              </span>
            )}
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
