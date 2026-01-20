import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
    
  return (
    <div className="home">
      <div className="absolute2">
      <Link to="/practice">Click To get Started</Link>
      </div>
    </div>
  );
}
