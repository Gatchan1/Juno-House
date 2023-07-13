import { useEffect, useState, useRef } from "react";
import NavbarD from "../components/NavbarD";
import NavbarM from "../components/NavbarM";
import CommunityGalleryD from "../components/CommunityGalleryD";
import CommunityGalleryM from "../components/CommunityGalleryM";
import MembershipsD from "../components/MembershipsD";
import MembershipsM from "../components/MembershipsM";
import AgendaD from "../components/AgendaD";
import AgendaM from "../components/AgendaM";
import HouseD from "../components/HouseD";
import HouseM from "../components/HouseM";
import CafeD from "../components/CafeD";
import CafeM from "../components/CafeM";
import ContactD from "../components/ContactD";
import ContactM from "../components/ContactM";

export default function Home() {
  const [width, setWidth] = useState(window.innerWidth);
  const [viewport, setViewport] = useState("");
  const breakpoint = 700;
  const viewportDivRef = useRef();

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  useEffect(() => {
    if (width > breakpoint) {
      // desktop view
      setViewport("d");
    }
    if (width < breakpoint) {
      //mobile view
      setViewport("m");
    }
  }, [width]);

  // Change css classes depending on viewport width
  useEffect(() => {
    if (viewport === "d") {
      viewportDivRef.current.classList.add("d");
      viewportDivRef.current.classList.remove("m");
    }
    if (viewport === "m") {
      viewportDivRef.current.classList.add("m");
      viewportDivRef.current.classList.remove("d");
    }
  }, [viewport]);

  // creo que tengo taggeados los div y las sections

  return (
    <div id="Home">
      {viewport === "m" && <NavbarM />}
      {viewport === "d" && <NavbarD />}

      <div className="facility">
        <img src="/ondarreta_proyect_juno_house_3.jpg" alt="facility photo" />
        <div id="main-title" ref={viewportDivRef}>
          <div>
            {/* <h1>juno</h1> <img src="./logo_arcs_w.png" alt="logo" /> <h1>house</h1> */}
            <img src="/BIG LOGO.png" />
          </div>
        </div>
      </div>

      <section id="about" >
        <div className="paragraphs">
          {viewport === "m" && <h2>manifesto</h2>}
          {viewport === "d" && <h2>about</h2>}
          <p className="playground">playground</p>
          <div className="first">
            <p>
              Home to <span className="inspire">women who inspire</span>,
            </p>
            <p>Juno House is the place where synergies</p>
            <p>and wellness merge,</p>
            <p>and where New York meets Barcelona,</p>
            <p>in design, lifestyle and mood.</p>
          </div>
          {viewport === "d" && (
            <div className="second">
              <p>Located on Diagonal and Aribau,</p>
              <p>Juno House is the place for local</p>
              <p>and international women to collaborate,</p>
              <p>create synergies and thrive.</p>
            </div>
          )}
        </div>
        <div className="drawing">
          <img src="./drawing.png" alt="two women holding hands" />
          <div className="text">
            <p className="first">
              <span className="first">Collaboration</span>
              <span className="second"> versus </span>
              <span className="third">competition</span>
            </p>
            <p className="second">The philosophy that unites us, our north star.</p>
          </div>
        </div>
      </section>

      <section id="community">
        <h2>community</h2>
        {viewport === "m" && <CommunityGalleryM />}
        {viewport === "d" && <CommunityGalleryD />}
      </section>

      <section id="memberships">
        <h2>memberships</h2>
        {viewport === "m" && <MembershipsM />}
        {viewport === "d" && <MembershipsD />}
      </section>

      <section id="juno-agenda">
        <h2>juno agenda</h2>
        {viewport === "m" && <AgendaM />}
        {viewport === "d" && <AgendaD />}
      </section>

      <section id="the-house">
        <h2>the house</h2>
        {viewport === "m" && <HouseM />}
        {viewport === "d" && <HouseD />}
      </section>

      <div id="juno-cafe">
        {viewport === "m" && <CafeM />}
        {viewport === "d" && <CafeD />}
      </div>
      <div id="contact">
        {viewport === "m" && <ContactM />}
        {viewport === "d" && <ContactD />}
      </div>
      {viewport === "m" && <footer>
        <div className="logo">
            <img src="./logo_arcs_b.png"/>
        </div>
        <div className="links">
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Get involved</a>
            <a href="#">Press room</a>
            <a href="#">Partners</a>
            <a href="#">Manifesto</a>
            <a href="#">FAQ</a>
        </div>
      </footer>}
    </div>
  );
}
