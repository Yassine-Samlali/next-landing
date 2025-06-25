// components/GlassWrapper.jsx
"use client";

export default function GlassWrapper({ children }) {
  return (
    <div className="backdrop-blur-md bg-white/10 border border-white/30 rounded-2xl shadow-lg p-6 max-w-xl mx-auto">
      {children}
    </div>
  );
}
