import React, { useEffect, useRef, useState } from "react";
import pdf from "../pdf/Resume.pdf";
import hero from "./data/hero.json";
import Typed from "typed.js";
import axios from "axios";

const Home = () => {
  const [greetings, setGreetings] = useState([]);
  const typedRef = useRef(null);

  useEffect(() => {
    // Fetch greetings data from the backend
    const fetchGreetings = async () => {
      try {
        const response = await axios.get("/api/profile");
        if (response.data && response.data.greetings) {
          setGreetings(response.data.greetings);
        } else {
          // Fallback to default greetings if backend data is missing
          setGreetings([
            "Welcome to my profile",
            "My Name is Prachi Jadhav",
            "I'm a full stack developer",
            "Android Developer (React Native)"
          ]);
        }
      } catch (error) {
        console.error("Error fetching greetings:", error);
        setGreetings([
          "Welcome to my profile",
          "My Name is Prachi Jadhav",
          "I'm a full stack developer",
          "Android Developer (React Native)"
        ]);
      }
    };

    fetchGreetings();
  }, []);

  useEffect(() => {
    const options = {
      strings: greetings,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, [greetings]);

  return (
    <div className="container home" id="home">
      <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
        <h1 ref={typedRef}></h1>

        <a
          href={pdf}
          download="Resume.pdf"
          className="btn btn-outline-warning my-3"
          aria-label="Download Resume"
        >
          Download Resume
        </a>
      </div>
      <div className="right">
        <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
          <img
            src={`/assets/${hero.imgSrc || "defaultHero.jpg"}`}
            alt="Profile Hero"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
