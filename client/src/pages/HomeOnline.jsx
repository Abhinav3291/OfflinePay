import  { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import DemoCarousel from "../components/Carousel";
import axios from "axios";
import Hero from "../components/HeroOnline";

const HomeOnline = () => {
  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const user = localStorage.getItem("userId");
    if (!user) {
      window.location.href = "/login";
    }
    const res = await axios.get(
      "https://localhost:8000/users/getUser",
      {
        headers: {
          Authorization: `${localStorage.getItem("userId")}`,
        },
      }
    );
    console.log(res.data.user);
  };

  return (
    <>
      <Navbar />
      <DemoCarousel />
      <Hero />
    </>
  );
};

export default HomeOnline;
