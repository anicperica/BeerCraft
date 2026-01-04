import { useNavigate } from "react-router-dom";

export default function NotAuthorized() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/"); 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-900 text-gray-300">
      <h1 className="text-4xl font-bold mb-4">❌ Not Authorized</h1>
      <p className="mb-6 text-lg text-center">
        You do not have permission to view this page.
      </p>
      <button
        onClick={handleGoHome}
        className="px-6 py-3 bg-amber-400 text-black font-bold rounded-lg hover:bg-black hover:text-white transition"
      >
        Return to Home
      </button>
    </div>
  );
}
