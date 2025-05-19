
import { Button } from "@/components/ui/button";
import ResourceCategoryCard from "@/components/ResourceCategoryCard";
import ResourceCard from "@/components/ResourceCard";
import { resources } from "@/data/resources";
import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [location, setLocation] = useState("");
  const navigate = useNavigate();
  
  const featuredResources = resources.slice(0, 3);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (location.trim()) {
      navigate(`/search?location=${encodeURIComponent(location)}`);
    }
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Essential Resources In Your Community</h1>
            <p className="text-xl mb-8">Locate food banks, shelters, health clinics, and more - all in one place.</p>
            
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="text"
                placeholder="Enter your city or zip code"
                className="px-4 py-3 rounded-md flex-grow text-foreground"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <Button type="submit" size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Search className="h-5 w-5 mr-2" />
                Search
              </Button>
            </form>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-2">Resource Categories</h2>
          <p className="text-muted-foreground mb-8">Browse resources by category</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <ResourceCategoryCard categoryId="food" />
            <ResourceCategoryCard categoryId="shelter" />
            <ResourceCategoryCard categoryId="health" />
            <ResourceCategoryCard categoryId="mental" />
            <ResourceCategoryCard categoryId="education" />
            <ResourceCategoryCard categoryId="job" />
          </div>
        </div>
      </section>
      
      {/* Featured Resources */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-2">Featured Resources</h2>
          <p className="text-muted-foreground mb-8">Highly rated resources in your community</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {featuredResources.map(resource => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Button asChild size="lg">
              <a href="/resources">View All Resources</a>
            </Button>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-2 text-center">How It Works</h2>
          <p className="text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
            Our platform makes it easy to find the resources you need in just a few steps
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Search by Location</h3>
              <p className="text-muted-foreground">Enter your city or zip code to find resources near you</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Filter Results</h3>
              <p className="text-muted-foreground">Narrow down options by category, services, or availability</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Connect</h3>
              <p className="text-muted-foreground">Get all the details you need to access the resources</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call To Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Know of a resource we should add?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Help us grow our directory by suggesting new resources in your community</p>
          <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-gray-100">
            <a href="/suggest">Suggest a Resource</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
