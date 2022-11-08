// import './footer.css';
import React from "react";
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from "cdbreact";

const Footer = () => {
  return (
    <CDBFooter className="shadow" style={{ backgroundColor: "#eee" }}>
      <CDBBox
        display="flex"
        flex="column"
        className="mx-auto py-5"
        style={{ width: "90%" }}
      >
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox style={{ padding: "0 24.4rem" }}>
            <a href="/" style={{ padding: "0", margin: "0" }}>
              <h1> J BABUBHAI </h1>
              {/* <span className="ml-3 h5 font-weight-bold">  Resolute Consultants</span> */}
            </a>
            <p className="my-3" style={{ width: "250px" }}>
              Resolute Consultant is an Architecture and Engineering consultancy
              firm established in 2017.
            </p>
            <CDBBox display="flex" className="mt-4">
              <CDBBtn
                flat
                href="https://www.youtube.com/watch?v=WwECTqK6oY4&t=600s"
                color="dark"
                target="_blank"
              >
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-3">
                <CDBIcon fab icon="twitter" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p
              className="h5 mb-4"
              style={{ fontWeight: "600", padding: "0 25rem" }}
            >
              Resolute Consultants
            </p>
            <CDBBox
              flex="column"
              style={{ cursor: "pointer", padding: "0 25rem" }}
            >
              <CDBFooterLink href="/">Home</CDBFooterLink>
              <CDBFooterLink href="/home">Home</CDBFooterLink>
              <CDBFooterLink href="/about">AboutUs</CDBFooterLink>
              <CDBFooterLink href="/contact">Contact Us</CDBFooterLink>
              <CDBFooterLink href="/gallery">Gallery</CDBFooterLink>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <small className="text-center mt-5">
          &copy; Resolute Consultants, 2022. All rights reserved.
        </small>
      </CDBBox>
    </CDBFooter>
  );
};

export default Footer;
