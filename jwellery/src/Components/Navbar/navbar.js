import React from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  function handleClickAbout() {
    navigate("/about");
  }
  function handleClickHome() {
    navigate("/home");
  }
  function handleClickContact() {
    navigate("/contact");
  }
  function handleClickRate() {
    navigate("/rates");
  }
  function handleClickGallery() {
    navigate("/gallery");
  }

  return (
    <div className="Nav__container">
      <div className="Nav__container__1">
        <h6
          onClick={() => {
            handleClickHome();
          }}
        >
          home
        </h6>
        <h6
          onClick={() => {
            handleClickAbout();
          }}
        >
          about
        </h6>
      </div>
      <div className="Nav__container__2">
        <h3 style={{ fontSize: "3rem" }}>j babubhai</h3>
      </div>
      <div className="Nav__container__3">
        <h6 onClick={() => {
            handleClickGallery();
          }}>Gallery</h6>
        <h6 onClick={() => {
            handleClickRate();
          }}>Rate</h6>
        <h6
        onClick={() => {
            handleClickContact();
          }}>Contact us</h6>
      </div>
    </div>
  );
};

export default Navbar;
