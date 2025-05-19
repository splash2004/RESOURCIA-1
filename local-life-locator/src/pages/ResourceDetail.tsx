
import { useParams, useNavigate } from "react-router-dom";
import { getResourceById } from "@/data/resources";
import ResourceCard from "@/components/ResourceCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const ResourceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const resource = id ? getResourceById(id) : undefined;
  
  if (!resource) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Resource Not Found</h1>
        <p className="text-muted-foreground mb-8">The resource you're looking for doesn't exist or has been removed.</p>
        <Button onClick={() => navigate('/resources')}>
          View All Resources
        </Button>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <Button 
        variant="ghost" 
        size="sm" 
        className="mb-6 -ml-2" 
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back
      </Button>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <ResourceCard resource={resource} detailed />
        </div>
        
        <div>
          <div className="border rounded-lg p-6 sticky top-4">
            <h3 className="font-medium mb-2">Last Updated</h3>
            <p className="text-sm text-muted-foreground mb-4">{resource.lastUpdated}</p>
            
            <h3 className="font-medium mb-2">Verify Information</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Is this information incorrect or outdated? 
              <a href="/suggest-update" className="text-primary ml-1 hover:underline">
                Suggest an update
              </a>
            </p>
            
            <h3 className="font-medium mb-2">Share</h3>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="flex-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="mr-1.5">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                </svg>
                Twitter
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="mr-1.5">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
                Facebook
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceDetail;
