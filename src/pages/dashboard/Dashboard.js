import React, { useContext } from "react";

import Info from "../../components/info/Info";
import Repos from "../../components/repos/Repos";
import User from "../../components/user/User";
import Search from "../../components/search/Search";
import Navbar from "../../components/navbar/Navbar";

import loadingImage from "../../assets/loading.gif";

import { GithubContext } from "../../context/context";

import "./dashboard.style.css";

const Dashboard = () => {
  const { loading } = useContext(GithubContext);
  if (loading) {
    return (
      <main>
        <Navbar />
        <Search />
        <img src={loadingImage} className="loading-img" alt="Loading" />
      </main>
    );
  }
  return (
    <main>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;
