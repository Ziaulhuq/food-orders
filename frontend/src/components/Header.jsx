import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <div className="flex justify-center items-center gap-2">
        <img
          src="/logo.jpg"
          alt="logo"
          width={70}
          height={70}
          className="rounded-full border border-white\/100"
        />
        <h2 className="text-orange-400 text-xl font-semibold">Food App</h2>
      </div>
      <nav>cart (0)</nav>
    </header>
  );
};

export default Header;
