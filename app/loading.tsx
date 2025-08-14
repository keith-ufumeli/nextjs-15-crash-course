"use client";

function LoadingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center space-y-4">
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      <p className="text-lg font-medium text-gray-600">
        Loading, please wait...
      </p>
    </div>
  );
}

export default LoadingPage;
