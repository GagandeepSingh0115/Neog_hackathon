import React from "react";
import { Main } from "../../Components/Main/Main";
import { Sidebar } from "../../Components/Sidebar";
import "./Dashboard.css";
import { Routes, Route } from "react-router-dom";
import { Channels } from "../../Components/Channels";
import { Channel } from "../Channel/Channel";

export const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/create" element={<Channels />}></Route>
        <Route path="/channelName" element={<Channel />}></Route>
      </Routes>
    </>
  );
};
