import React, { useState } from "react";
import map from "../assets/images/Mapmaroc.png";
import vector from "../assets/icons/Vector.svg";
import vectorgrp from "../assets/icons/groupvect.svg";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/user/authSlice";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    location: "UM Amezmiz",
    box: "BOX 1",
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setUserData({
      ...userData,
      [e.target.id]: e.target.value,
    });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginUser(userData));
    navigate("/patients");
  };

  return (
    <div className="relative flex  w-full mt-10">
      <div className="flex justify-start">
        <img src={map} alt="Map" className="h-[82%] mr-[-10vr]" />
      </div>
      <form
        onSubmit={handleLogin}
        className="w-[30%] bg-white rounded-lg shadow-lg p-8 flex flex-col  h-[80%] mt-16 ml-[17rem]"
      >
        <h1 className="text-center text-steel-blue text-[21px] p-4">
          Connectez-vous à votre compte
        </h1>
        <div className="mb-4 relative">
          <select
            id="location"
            className="w-full p-2 border-[1.67px] border-steel-blue rounded-[7px] h-[50px] text-cyan appearance-none focus:outline-none focus:border-steel-blue focus:border-[2px]"
            value={userData.location}
            onChange={handleChange}
          >
            <option value="UM Amezmiz">UM Amezmiz</option>
            <option value="CASA">Casablanca</option>
            <option value="RAB">Rabat</option>
            <option value="MAR">Marrakech</option>
          </select>
          <div className="absolute top-1/2 right-4 w-[11.11px] h-[19.28px]  transform  clip-path-triangle">
            <img src={vector} alt="vector" />
          </div>
        </div>

        <div className="mb-4 relative">
          <select
            id="box"
            className="w-full p-2 border-[1.67px] border-steel-blue rounded-[7px] h-[50px] text-cyan appearance-none focus:outline-none focus:border-steel-blue focus:border-[2px]"
            value={userData.box}
            onChange={handleChange}
          >
            <option value="BOX 1">BOX 1</option>
            <option value="BOX 2">BOX 2</option>
            <option value="BOX 3">BOX 3</option>
            <option value="BOX 4">BOX 4</option>
          </select>
          <div className="absolute top-1/2 right-4 w-[11.11px] h-[19.28px]  transform  clip-path-triangle">
            <img src={vector} alt="vector" />
          </div>
        </div>

        <hr className="border-[1.5px] border-light-grey rounded-[4px]" />
        <br />
        <div className="mb-4 relative">
          <input
            id="username"
            type="text"
            placeholder="Entrez votre identifiant"
            className="w-full p-2 border border-steel-blue placeholder-custom-placeholder rounded-[7px] h-[50px] focus:outline-none focus:border-steel-blue focus:border-[2px] "
            value={userData.username}
            onChange={handleChange}
            required
          />
      
        </div>

        <div className="mb-4 relative">
          <input
            id="password"
            type="password"
            placeholder="Tapez votre mot de passe"
            className="w-full p-2 border border-steel-blue placeholder-custom-placeholder rounded-[7px] h-[50px] focus:outline-none focus:border-steel-blue focus:border-[2px]"
            value={userData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button className="w-full bg-custom-gradient-button text-white py-2 rounded-lg h-12 flex items-center justify-center">
          Connexion
          <img src={vectorgrp} alt="vectorgrp" className="ml-2 mt-[3px] h-[15px] w-[15px]" />
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
