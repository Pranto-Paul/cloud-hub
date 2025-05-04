// app/page.tsx or app/page.jsx
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8 px-4 bg-[var(--background-light)] text-[var(--foreground-light)]">
      <h1 className="text-4xl font-bold">Welcome to Our SaaS App</h1>
      <p className="text-lg text-center max-w-md">
        This is a quick preview of your vibrant brand colors inspired by your
        logo.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <button className="btn btn-primary">Primary Button</button>
        <button className="btn btn-secondary">Secondary Button</button>
        <button className="btn btn-accent">Accent Button</button>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-10 text-center">
        <div className="w-40 h-24 rounded-xl shadow-md bg-[var(--primary-light)] flex items-center justify-center text-white font-medium">
          Primary
        </div>
        <div className="w-40 h-24 rounded-xl shadow-md bg-[var(--secondary-light)] flex items-center justify-center text-white font-medium">
          Secondary
        </div>
        <div className="w-40 h-24 rounded-xl shadow-md bg-[var(--accent-light)] flex items-center justify-center text-white font-medium">
          Accent
        </div>
      </div>
    </div>
  );
};

export default Page;
