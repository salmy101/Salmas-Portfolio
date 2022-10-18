import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import "./index.scss";
import 'animate.css';


export default function Layout() {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>

        <Outlet />

        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tags-html">&lt;html&gt;</span>
        </span>
      </div>
    </div>
  );
}
