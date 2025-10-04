import React from "react";
export default function Header() {
  return (
    <header className="app-header">
      <svg>
        <use href="../assets/react.svg"></use>
      </svg>
      <h1 className="text-4xl font-bold text-center ">The React Quiz App</h1>
    </header>
  );
}
