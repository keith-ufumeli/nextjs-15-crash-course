"use client";

import Image from "next/image";

function LoadingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center space-y-6">
      <div className="animate-bounce">
        <Image
          src="/logo.png"
          alt="YC Logo"
          width={100}
          height={100}
          className="drop-shadow-lg"
        />
      </div>
      <p className="text-lg font-medium text-gray-600">
        Loading, please wait...
      </p>
    </div>
  );
}

export default LoadingPage;
