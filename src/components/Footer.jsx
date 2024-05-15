import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={
            "https://avatars.githubusercontent.com/u/114827556?s=400&u=882f9f445e1f116201e3526d96007e3e5b056f29&v=4"
          }
          alt="Founder"
        />

        <h2>Suraj Patankar</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a
            href="https://youtube.com/@suraj_patankar_?si=ybpQze84YakRgPkY"
            target={"blank"}>
            <AiFillYoutube />
          </a>
          <a
            href="https://www.instagram.com/suraj_patankar_?igsh=MTZyN2E4ZW52emJ4cQ=="
            target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/Surajpatankar" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
