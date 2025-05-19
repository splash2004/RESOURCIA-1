
import { Card, CardContent } from "@/components/ui/card";
import { resourceCategories } from "@/data/resources";
import { Link } from "react-router-dom";

interface ResourceCategoryProps {
  categoryId: string;
}

export function ResourceCategoryCard({ categoryId }: ResourceCategoryProps) {
  const category = resourceCategories.find(cat => cat.id === categoryId);
  
  if (!category) {
    return null;
  }
  
  const getEmoji = () => {
    switch (categoryId) {
      case "food": return "🍎";
      case "shelter": return "🏠";
      case "health": return "🏥"; 
      case "mental": return "🧠";
      case "education": return "📚";
      case "job": return "💼";
      default: return "📍";
    }
  };
  
  return (
    <Link to={`/resources?type=${categoryId}`}>
      <Card className="hover:shadow-md transition-shadow duration-300 cursor-pointer overflow-hidden h-full">
        <div className={`h-2 bg-resource-${categoryId}`} />
        <CardContent className="p-6 text-center">
          <div className={`resource-icon mx-auto bg-resource-${categoryId} mb-4`}>
            {getEmoji()}
          </div>
          <h3 className="font-medium">{category.name}</h3>
          <p className="text-sm text-muted-foreground mt-2">Find {category.name.toLowerCase()} in your area</p>
        </CardContent>
      </Card>
    </Link>
  );
}

export default ResourceCategoryCard;
