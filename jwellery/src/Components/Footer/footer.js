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
          <CDBBox style={{ padding: "5rem 11rem",fontSize:"1.7rem"}}>
            <a href="/" style={{ padding: "0", margin: "0",textDecoration:"none",color:"#0E333D",letterSpacing:".8rem" }}>
              <h1 style={{fontSize:"4rem"}}> J BABUBHAI </h1>
              {/* <span className="ml-3 h5 font-weight-bold">  Resolute Consultants</span> */}
            </a>
            <p className="my-3" style={{ width: "40rem" ,letterSpacing:".2rem" ,color:"#0E333D"}}>
            Gujarat’s top 10 achiever of Hallmark licence for providing assured quality gold. We offers best craftsmanship on customized /ordered ornaments for 99.99% customer’s satisfaction.
            </p>
            <CDBBox display="flex" className="mt-4">
              <CDBBtn
                flat
                href="https://www.facebook.com/J.BabubhaiJewellers/"
                color="dark"
                target="_blank"
                style={{fontSize:"2rem",textDecoration:"none"}}
              >
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn flat style={{fontSize:"2rem",textDecoration:"none"}} href="https://twitter.com/jbabubhaijewel1" color="dark" className="mx-3" target="_blank">
                <CDBIcon fab icon="twitter" />
              </CDBBtn>
              <CDBBtn flat style={{fontSize:"2rem",textDecoration:"none"}} href="https://www.instagram.com/jbabubhaijewellers/" color="dark" className="p-2" target="_blank">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </CDBBox>
          </CDBBox>
          <CDBBox style={{fontSize:"2rem",paddingTop:"5rem",color:"#0E333D"}}>
            <p
              className="h5 mb-4"
              style={{ fontWeight: "600", padding: "0 25rem",fontSize:"2rem" }}
            >
              J Babubhai Jewellers
            </p>
            <CDBBox
              flex="column"
              style={{  padding: "0 25rem" }}
            >
              
              <CDBFooterLink href="/home">Home</CDBFooterLink>
              <CDBFooterLink href="/about">AboutUs</CDBFooterLink>
              <CDBFooterLink href="/contact">Contact Us</CDBFooterLink>
              <CDBFooterLink href="/gallery">Gallery</CDBFooterLink>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <small className="text-center mt-5" style={{fontSize:"1.4rem"}}>
          &copy; JBJ website, 2022. All rights reserved.
        </small>
      </CDBBox>
    </CDBFooter>
  );
};

export default Footer;
