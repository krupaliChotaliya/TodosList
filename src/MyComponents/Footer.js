import React from "react";

export default function Footer() {
    const style={
        top:"30vh",
        position:"relative",
        width:"100%"
    }
  return (
    <>
      <footer className="bg-dark text-white py-3" style={style}>
        <p className="text-center">Copy Right &copy; By TodosList.com</p>
      </footer>
    </>
  );
}
