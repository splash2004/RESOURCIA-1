
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Resource, resourceCategories } from "@/data/resources";
import { MapPin, Clock, Phone, ExternalLink } from "lucide-react";

interface ResourceCardProps {
  resource: Resource;
  detailed?: boolean;
}

export function ResourceCard({ resource, detailed = false }: ResourceCardProps) {
  const category = resourceCategories.find(c => c.id === resource.type);
  const bgColorClass = `bg-${resource.type}`;
  
  const getAvailabilityBadge = () => {
    if (!resource.availability) return null;
    
    let badgeVariant: "default" | "outline" | "secondary" | "destructive" = "default";
    
    switch (resource.availability.status) {
      case "high":
        badgeVariant = "default";
        break;
      case "medium":
        badgeVariant = "secondary";
        break;
      case "low":
        badgeVariant = "destructive";
        break;
    }
    
    return (
      <Badge variant={badgeVariant} className="ml-2">
        {resource.availability.status === "high" ? "Available" : 
         resource.availability.status === "medium" ? "Limited" : "Low"}
      </Badge>
    );
  };

  return (
    <Card className="resource-card h-full animate-fade-in">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center">
            <div className={`resource-icon bg-resource-${resource.type} mr-3`}>
              {resource.type === "food" && "🍎"}
              {resource.type === "shelter" && "🏠"}
              {resource.type === "health" && "🏥"}
              {resource.type === "mental" && "🧠"}
              {resource.type === "education" && "📚"}
              {resource.type === "job" && "💼"}
            </div>
            <div>
              <CardTitle className="text-lg">{resource.name}</CardTitle>
              <CardDescription className="flex items-center mt-1">
                <MapPin className="h-3 w-3 mr-1" />
                {resource.city}, {resource.state}
              </CardDescription>
            </div>
          </div>
          <div>
            <Badge variant="outline" className={`bg-resource-${resource.type}/10 text-resource-${resource.type} border-resource-${resource.type}/20`}>
              {category?.name || resource.type}
            </Badge>
            {getAvailabilityBadge()}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
        
        {detailed && (
          <>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 text-muted-foreground shrink-0 mt-0.5" />
                <p className="text-sm">{resource.address}, {resource.city}, {resource.state} {resource.zip}</p>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-4 w-4 mr-2 text-muted-foreground shrink-0 mt-0.5" />
                <p className="text-sm">{resource.phone}</p>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-4 w-4 mr-2 text-muted-foreground shrink-0 mt-0.5" />
                <p className="text-sm">{resource.hours}</p>
              </div>
              
              {resource.eligibility && (
                <div className="mt-4">
                  <h4 className="text-sm font-medium mb-1">Eligibility</h4>
                  <p className="text-sm text-muted-foreground">{resource.eligibility}</p>
                </div>
              )}
              
              {resource.services && resource.services.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-sm font-medium mb-1">Services</h4>
                  <div className="flex flex-wrap gap-1">
                    {resource.services.map((service, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              
              {resource.languages && resource.languages.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-sm font-medium mb-1">Languages</h4>
                  <div className="flex flex-wrap gap-1">
                    {resource.languages.map((language, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {language}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </CardContent>
      
      <CardFooter className="pt-2">
        {detailed ? (
          <div className="flex flex-wrap gap-2 w-full">
            <Button asChild className="flex-1">
              <a href={`tel:${resource.phone.replace(/[^\d]/g, '')}`}>
                <Phone className="h-4 w-4 mr-2" />
                Call
              </a>
            </Button>
            
            {resource.website && (
              <Button variant="outline" asChild className="flex-1">
                <a href={resource.website} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Visit Website
                </a>
              </Button>
            )}
            
            <Button variant="secondary" asChild className="flex-1">
              <a href={`https://maps.google.com/?q=${resource.address}, ${resource.city}, ${resource.state} ${resource.zip}`} target="_blank" rel="noopener noreferrer">
                <MapPin className="h-4 w-4 mr-2" />
                Directions
              </a>
            </Button>
          </div>
        ) : (
          <div className="w-full flex justify-end">
            <Button asChild variant="ghost" size="sm">
              <a href={`/resource/${resource.id}`}>View Details</a>
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}

export default ResourceCard;
