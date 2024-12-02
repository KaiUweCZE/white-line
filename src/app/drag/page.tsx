"use client";

import React, { useState } from "react";

// Define interfaces for our position states
interface Position {
  x: number;
  y: number;
}

const NasiPsiPage: React.FC = () => {
  // Initialize states with typed Position interface
  const [position, setPosition] = useState<Position>({ x: 100, y: 100 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragOffset, setDragOffset] = useState<Position>({ x: 0, y: 0 });

  // Event handlers with proper TypeScript event types
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (isDragging) {
      // Calculate new position while staying within window bounds
      const newX = Math.min(
        Math.max(0, e.clientX - dragOffset.x),
        window.innerWidth - 24
      );
      const newY = Math.min(
        Math.max(0, e.clientY - dragOffset.y),
        window.innerHeight - 24
      );

      setPosition({
        x: newX,
        y: newY,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <main
      className="relative h-screen w-full"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <h2 className="p-4">Drag and Drop Demo</h2>

      <div
        className="absolute bg-red-600 h-6 w-6 cursor-move"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          cursor: isDragging ? "grabbing" : "grab",
          userSelect: "none",
          touchAction: "none",
          transition: isDragging ? "none" : "all 0.3s ease",
        }}
        onMouseDown={handleMouseDown}
      />
    </main>
  );
};

export default NasiPsiPage;
