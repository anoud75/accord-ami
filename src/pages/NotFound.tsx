import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center px-6">
    <div className="text-center max-w-md">
      <p className="eyebrow mb-4">404</p>
      <h1 className="display-2 mb-4">This path doesn&rsquo;t exist yet.</h1>
      <p className="text-foreground/70 mb-8">The page you&rsquo;re looking for has moved or never existed.</p>
      <Button asChild><Link to="/">Return home</Link></Button>
    </div>
  </div>
);

export default NotFound;
