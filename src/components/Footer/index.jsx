import React from "react";
import { Link } from "react-router-dom";
import { Typography, Space } from "antd";
import "./style.css";

const Footer = () => {
  return (
    <div className="footer">
      <Typography.Title
        level={5}
        style={{ color: "#00748A", textAlign: "center" }}
      >
        The Crypto Grid
      </Typography.Title>
      <Space>
        <Link to="/">Home</Link>
        <Link to="/exchanges">Exchanges</Link>
        <Link to="/news">News</Link>
      </Space>
    </div>
  );
};

export default Footer;
