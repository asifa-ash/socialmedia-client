import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import PostSide from "../../components/Post/PostSide";
import ProfileSide from "../../components/Profile-side/ProfileSide";
import Right from "../../components/Right/Right";

function Home() {
  const [responsive, setResponsive] = useState("");
  useEffect(() => {
    if (window.innerWidth <= 500) {
      setResponsive("sm");
    } else if(window.innerWidth >= 500) {
      setResponsive("lg");
    }
  });
  return (
    <>
      <Container>
        <div className="Home ">
          {responsive === "lg" ? <ProfileSide />:"" }

          <PostSide />
          {responsive === "lg" ? <Right /> :"" }
        </div>
      </Container>
    </>
  );
}

export default Home;
