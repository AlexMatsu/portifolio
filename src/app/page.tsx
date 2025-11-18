'use client'
import Menu from "@/src/components/Menu";
import Footer from "@/src/components/Footer";
import User from "../components/User";
import { useState } from "react";

const Home = () => {

  const [nameUser,setNameUser] = useState("Alex");
  
  return (
    <div>
      <Menu /><br />


      <User name={nameUser}>
        <p> este é conteudo extra </p>
      </User><br />

      <button onClick={() => setNameUser ("Luiz")}>Alterar</button>

      <h2>Bem vindo Alex</h2><br />
      <Footer />
    </div>
  );
}


export default Home;