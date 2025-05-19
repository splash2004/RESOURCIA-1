
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-4 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-medium mb-6">Page Not Found</h2>
      <h3 className="text-2xl font-medium mb-6">Haam Ispe Kaam Kar Rhe Hai </h3>
      <p className="text-muted-foreground max-w-md mb-8">
        The page you are looking for might have been not created yet, or is temporarily unavailable.
      </p>
      <Button onClick={() => navigate('/')}>Return Home</Button>
    </div>
  );
};

export default NotFound;
