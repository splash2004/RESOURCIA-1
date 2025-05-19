
import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import ResourceCard from "@/components/ResourceCard";
import { resources } from "@/data/resources";
import { Button } from "@/components/ui/button";
import { MapPin, Search, ArrowLeft } from "lucide-react";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const location = searchParams.get("location") || "";
  const navigate = useNavigate();
  
  const [filteredResources, setFilteredResources] = useState(resources);
  
  // Filter resources based on location
  useEffect(() => {
    if (location) {
      const locationLower = location.toLowerCase();
      const filtered = resources.filter(resource => 
        resource.city.toLowerCase().includes(locationLower) || 
        resource.zip.includes(locationLower) ||
        resource.state.toLowerCase().includes(locationLower)
      );
      setFilteredResources(filtered);
    } else {
      setFilteredResources(resources);
    }
  }, [location]);
  
  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <Button 
        variant="ghost" 
        size="sm" 
        className="mb-6 -ml-2" 
        onClick={() => navigate('/')}
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Home
      </Button>
      
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">
          Search Results for "{location}"
        </h1>
        <p className="text-muted-foreground mb-4">
          Found {filteredResources.length} resources
        </p>
        
        <div className="bg-muted p-4 rounded-lg flex items-center">
          <MapPin className="h-5 w-5 text-primary mr-2" />
          <span className="text-muted-foreground">Showing resources near </span>
          <span className="font-medium ml-1">{location}</span>
          
          <Button variant="ghost" size="sm" className="ml-auto" onClick={() => navigate("/")}>
            <Search className="h-4 w-4 mr-2" />
            New Search
          </Button>
        </div>
      </div>
      
      {filteredResources.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map(resource => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-muted/30 rounded-lg">
          <h2 className="text-xl font-medium mb-2">No resources found</h2>
          <p className="text-muted-foreground mb-6">
            We couldn't find any resources matching "{location}"
          </p>
          <Button onClick={() => navigate("/")}>Try a different location</Button>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
