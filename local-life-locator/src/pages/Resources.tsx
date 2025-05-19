
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ResourceCard from "@/components/ResourceCard";
import { resources as staticResources, resourceCategories, ResourceType } from "@/data/resources";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { getSuggestedResources } from "@/utils/localStorage";

const Resources = () => {
  const [searchParams] = useSearchParams();
  const typeFilter = searchParams.get("type") as ResourceType | null;
  const locationFilter = searchParams.get("location");
  
  const [allResources, setAllResources] = useState([...staticResources]);
  const [filteredResources, setFilteredResources] = useState([...staticResources]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategories, setActiveCategories] = useState<string[]>(
    typeFilter ? [typeFilter] : []
  );
  
  // Load resources on mount including localStorage resources
  useEffect(() => {
    const userSuggestedResources = getSuggestedResources();
    const combinedResources = [...staticResources, ...userSuggestedResources];
    setAllResources(combinedResources);
  }, []);

  // Apply filters when they change or resources change
  useEffect(() => {
    let result = [...allResources];
    
    // Filter by type if selected
    if (activeCategories.length > 0) {
      result = result.filter(resource => 
        activeCategories.includes(resource.type)
      );
    }
    
    // Filter by location if provided
    if (locationFilter) {
      const locationLower = locationFilter.toLowerCase();
      result = result.filter(resource => 
        resource.city.toLowerCase().includes(locationLower) || 
        resource.zip.includes(locationLower)
      );
    }
    
    // Filter by search term
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      result = result.filter(resource => 
        resource.name.toLowerCase().includes(term) || 
        resource.description.toLowerCase().includes(term) ||
        (resource.services && resource.services.some(service => 
          service.toLowerCase().includes(term)
        ))
      );
    }
    
    setFilteredResources(result);
  }, [typeFilter, locationFilter, searchTerm, activeCategories, allResources]);

  const toggleCategory = (categoryId: string) => {
    if (activeCategories.includes(categoryId)) {
      setActiveCategories(activeCategories.filter(id => id !== categoryId));
    } else {
      setActiveCategories([...activeCategories, categoryId]);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start mb-8">
        <div>
          <h1 className="text-2xl font-bold mb-2">Community Resources</h1>
          {locationFilter && (
            <p className="text-muted-foreground">
              Showing resources near <span className="font-medium">{locationFilter}</span>
            </p>
          )}
          <p className="text-muted-foreground">
            Showing {filteredResources.length} resources 
            {activeCategories.length > 0 && " in selected categories"}
            {(allResources.length > staticResources.length) && (
              <span> including {allResources.length - staticResources.length} community-contributed resources</span>
            )}
          </p>
        </div>
        
        <div className="w-full md:w-auto mt-4 md:mt-0">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              type="search"
              placeholder="Search resources..." 
              className="pl-8 w-full md:w-[300px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>
      
      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {resourceCategories.map(category => (
          <Button 
            key={category.id}
            variant={activeCategories.includes(category.id) ? "default" : "outline"}
            className={activeCategories.includes(category.id) 
              ? `bg-resource-${category.id} hover:bg-resource-${category.id}/90` 
              : `hover:bg-resource-${category.id}/10 hover:text-resource-${category.id}`}
            onClick={() => toggleCategory(category.id)}
          >
            {category.name}
          </Button>
        ))}
        
        {activeCategories.length > 0 && (
          <Button 
            variant="ghost"
            onClick={() => setActiveCategories([])}
          >
            Clear filters
          </Button>
        )}
      </div>
      
      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.length > 0 ? (
          filteredResources.map(resource => (
            <ResourceCard key={resource.id} resource={resource} />
          ))
        ) : (
          <div className="col-span-3 text-center py-12">
            <h3 className="text-xl font-medium mb-2">No resources found</h3>
            <p className="text-muted-foreground mb-4">Try adjusting your filters or search criteria</p>
            <Button onClick={() => {
              setActiveCategories([]);
              setSearchTerm("");
            }}>
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resources;
