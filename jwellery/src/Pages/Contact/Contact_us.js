import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 30rem 0;
  margin-top: -20rem;
  /* background-color: #eee; */
  height: 90rem;
`;
const HeroImage = styled.img`
  position: relative;
  width: 99.4vw;
  height: 80vh;
  object-fit: cover;
  @media screen and (max-width: 768px) {
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
  }
  @media screen and (max-width: 460px) {
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
  }
`;

const SectionHeading = styled.div`
  text-align: center;
  margin-bottom: 8rem;
  h1 {
    font-size: clamp(3.5rem, 8vh, 2rem);
    font-weight: 400;
    color: #555;
    text-transform: uppercase;
    text-shadow: 0px 0px 2rem rgba(0, 0, 0, 0.2);
    margin-bottom: 0.8rem;
    transition: all 0.2s;
    letter-spacing: 0.5rem;
    span {
      background-image: linear-gradient(to right, #3a5b64, #3a5b64);
      color: transparent;
      background-clip: text;
      -webkit-background-clip: text;
      display: inline-block;
      font-size: inherit;
    }
    &:hover {
      transform: translateY(-1rem);
      text-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.4);
      cursor: pointer;
    }
  }
`;

const SectionRow = styled.section`
  max-width: 114rem;
  min-width: 76.9rem;
  margin: 12rem auto;
  &::after {
    content: "";
    display: table;
    clear: both;
  }
`;

const Container1 = styled.div`
  float: left;
  width: calc((100% - 60px) / 2);
  h1 {
    &:nth-child(4) {
      margin-top: 10rem;
    }
    margin-bottom: 1rem;
    margin-top: 2rem;
    font-size: 2.6rem;
    letter-spacing: 0.5rem;
    font-weight: 600;
    color: #444;
    text-shadow: #777 0px 0px 3rem;
  }
  h3 {
    &:nth-child(2) {
      margin-top: 3rem;
    }
    &:nth-child(5) {
      margin-top: 3rem;
      line-height: 2rem;
    }
    margin-bottom: 1.2rem;

    font-size: 1.5rem;
    letter-spacing: 0.3rem;
    /* font-weight: 600; */
    color: #444;

    /* text-shadow: #777 0px 0px 3rem; */
  }
  p {
    margin-bottom: 5rem;
    letter-spacing: 0.2rem;
    color: #777;
    font-size: 1.3rem;
    &:nth-child(2) {
      margin-bottom: 3rem;
    }
  }
`;
const HeroAbout = styled.div`
  position: absolute;

  text-align: center;
  bottom: 8rem;

  max-width: 1600px;
  width: calc(100%-100px);

  padding: 20px;
  overflow: hidden;
  h1 {
    font-size: 3rem;
    letter-spacing: 1rem;
    text-shadow: 0px 0px 30px #fff;
    color: #eee;
  }
`;

const Container2 = styled.div`
  float: left;
  margin-top: 0rem;
  width: calc((100% - 60px) / 2);
`;

const ContactUs = () => {
  return (
    <>
      <HeroImage src="https://images.unsplash.com/photo-1586878341340-1971696a9b71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
      <HeroAbout>
        <h1>CONTACT US </h1>
      </HeroAbout>
      <Section>
        <SectionHeading>
          <h1>
            Contact <span>J BABUBHAI</span>
          </h1>
        </SectionHeading>
        <SectionRow>
          <Container1>
            <h1>CONTACT DETAILS</h1>
            <h3>Contact No. - +91 9825222408</h3>
            <h3>Email id - jbjgold@gmail.com</h3>
            <h1>SHOP ADDRESS</h1>
            <h3>1st FLOOR, JENILI SHOPPING CENTER, M.G.ROAD, JUNAGADH</h3>
          </Container1>
          <Container2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d475106.96893394954!2d70.461863!3d21.516602!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf5f436680cad1a64!2sJ%20Babubhai%20Jewellers!5e0!3m2!1sen!2sus!4v1667929204278!5m2!1sen!2sus"
              title="address"
              style={{
                height: "50vh",
                width: "100%",
                border: "0.1px #C59D5F solid",
                borderRadius: "2rem",
              }}
            ></iframe>
          </Container2>
        </SectionRow>
      </Section>
    </>
  );
};

export default ContactUs;
