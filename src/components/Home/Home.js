import React from "react";
import { Grid, styled } from "@mui/material";
import bkImg1 from "../../resources/bk1.png";
import bkImg2 from "../../resources/bk2.png";

import HoverButton from "../CustomButtonWHover/HoverButton";
import { Link } from "react-router-dom";

const HomeWrapper = styled("div")({
  height: "100vh",
  width: "100vw",
  position: "relative",
});

const SectionWrapper = styled("div")({
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  zIndex: 1, // Asegura que el contenido esté encima del fondo
});

const LeftSection = styled(SectionWrapper)({
  backgroundImage: `url(${bkImg1})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  height: "100dvh",
});

const RightSection = styled(SectionWrapper)({
  backgroundImage: `url(${bkImg2})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  height: "100dvh",
});

const Overlay = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0, 0, 0, 0.4)", // Negro con opacidad del 30%
  zIndex: 0, // Asegura que el fondo esté detrás del contenido
});

const ButtonWrapper = styled("div")({
  padding: "10px 20px",
  fontSize: "1.2rem",
  zIndex: 2, // Asegura que el contenido esté encima del fondo
});

const Home = () => {
  return (
    <HomeWrapper>
      <Grid container>
        {/* Sección Izquierda */}
        <Grid item xs={6}>
          <LeftSection>
            <Overlay />
            <ButtonWrapper>
              <Link to={"/my-projects"}>
                <HoverButton buttonText={"My Projects"} />
              </Link>
            </ButtonWrapper>
          </LeftSection>
        </Grid>

        {/* Sección Derecha */}
        <Grid item xs={6}>
          <RightSection>
            <Overlay />
            <ButtonWrapper>
              <Link to={"/about-me"}>
                <HoverButton buttonText={"About Me"} />
              </Link>
            </ButtonWrapper>
          </RightSection>
        </Grid>
      </Grid>
    </HomeWrapper>
  );
};

export default Home;
