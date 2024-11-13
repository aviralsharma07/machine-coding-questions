import React from "react";

const HolyGrailLayout = () => {
  return (
    <div className="w-screen text-xl flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-[#333] text-white text-center p-5">
        <h1>Header</h1>
      </header>

      {/* Main Content */}
      <div className="flex-col md:flex-row flex flex-1">
        <aside className="p-5 flex items-center justify-center text-center bg-pink-400">
          <h2>Left Sidebar</h2>
        </aside>
        <main className="flex-1 flex items-center justify-center text-center p-5">Main Content</main>
        <aside className="p-5 flex items-center justify-center text-center bg-blue-400">
          <h2>Right Sidebar</h2>
        </aside>
      </div>

      {/* Footer */}
      <footer className="bg-[#333] text-white text-center p-5">
        <h3>Footer</h3>
      </footer>
    </div>
  );
};

export default HolyGrailLayout;
