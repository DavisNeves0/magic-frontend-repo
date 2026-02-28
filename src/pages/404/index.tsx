import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl  mr-2 text-amber-50">404</h1>
        <h2 className="text-xl text-amber-50">Page not found</h2>
      </div>
      <div>
        <p className="text-gray-300 mt-8">
          we've looked everywhere but couldn't find the page you were looking
          for.
        </p>
      </div>
      <div className="mt-8">
        <button
          onClick={() => navigate("/")}
          className="bg-green-500 text-white p-2 w-70 rounded hover:cursor-pointer flex items-center justify-center gap-2"
        >
          <span className="text-amber-50">Go Back</span>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
