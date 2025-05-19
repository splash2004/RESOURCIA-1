import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { resourceCategories, ResourceType } from "@/data/resources";
import { toast } from "@/components/ui/use-toast";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { saveResource } from "@/utils/localStorage";
import { v4 as uuidv4 } from "uuid";

const SuggestResource = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form state
  const [name, setName] = useState("");
  const [type, setType] = useState<ResourceType | "">("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [hours, setHours] = useState("");
  const [services, setServices] = useState("");
  const [eligibility, setEligibility] = useState("");
  const [languages, setLanguages] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !type || !description || !address || !city || !state || !zip || !phone || !hours) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Create new resource object
    const newResource = {
      id: uuidv4(),
      name,
      type: type as ResourceType,
      description,
      address,
      city,
      state,
      zip,
      phone,
      website: website || undefined,
      email: email || undefined,
      hours,
      eligibility: eligibility || undefined,
      languages: languages ? languages.split(",").map(lang => lang.trim()) : ["English"],
      services: services ? services.split("\n").filter(service => service.trim()) : [],
      lastUpdated: new Date().toISOString().split("T")[0],
      coordinates: {
        // Using placeholder coordinates - in a real app, would use geocoding API
        lat: 20.5937 + Math.random() * 0.5,
        lng: 78.9629 + Math.random() * 0.5
      },
      availability: {
        status: "high",
        message: "Recently added resource"
      }
    };
    
    // Save to localStorage
    saveResource(newResource);
    
    // Show success toast
    toast({
      title: "Resource submitted",
      description: "Your resource has been added to the community directory.",
    });
    
    // Navigate to resources page
    setTimeout(() => {
      setIsSubmitting(false);
      navigate("/resources");
    }, 1000);
  };
  
  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-2">Suggest a Resource</h1>
        <p className="text-muted-foreground mb-8">
          Know of a helpful resource that's not in our directory? Help us grow our database by suggesting it below.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-medium">Resource Information</h2>
            
            <div className="space-y-2">
              <Label htmlFor="name">Resource Name *</Label>
              <Input 
                id="name" 
                placeholder="Enter the name of the resource" 
                required 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="type">Resource Type *</Label>
              <Select 
                required
                value={type}
                onValueChange={setType}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select resource type" />
                </SelectTrigger>
                <SelectContent>
                  {resourceCategories.map(category => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea 
                id="description" 
                placeholder="Briefly describe what services this resource provides"
                className="min-h-[100px]"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-xl font-medium">Contact & Location</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="address">Street Address *</Label>
                <Input 
                  id="address" 
                  placeholder="123 Main St" 
                  required 
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="city">City *</Label>
                <Input 
                  id="city" 
                  placeholder="Springfield" 
                  required 
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="state">State *</Label>
                <Input 
                  id="state" 
                  placeholder="IL" 
                  required 
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="zip">ZIP Code *</Label>
                <Input 
                  id="zip" 
                  placeholder="62701" 
                  required 
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input 
                  id="phone" 
                  placeholder="(555) 123-4567" 
                  required 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input 
                  id="website" 
                  placeholder="https://example.org" 
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  placeholder="contact@example.org" 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="hours">Hours of Operation *</Label>
                <Input 
                  id="hours" 
                  placeholder="Mon-Fri: 9am-5pm" 
                  required 
                  value={hours}
                  onChange={(e) => setHours(e.target.value)}
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-xl font-medium">Additional Information</h2>
            
            <div className="space-y-2">
              <Label htmlFor="services">Services Provided</Label>
              <Textarea 
                id="services" 
                placeholder="List the services this resource provides (one per line)"
                value={services}
                onChange={(e) => setServices(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="eligibility">Eligibility Requirements</Label>
              <Textarea 
                id="eligibility" 
                placeholder="Describe who is eligible for these services"
                value={eligibility}
                onChange={(e) => setEligibility(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="languages">Languages Supported</Label>
              <Input 
                id="languages" 
                placeholder="English, Spanish, etc." 
                value={languages}
                onChange={(e) => setLanguages(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea 
                id="notes" 
                placeholder="Anything else we should know about this resource?"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="submitter">Your Name</Label>
              <Input id="submitter" placeholder="Your name (optional)" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="submitter_email">Your Email</Label>
              <Input id="submitter_email" placeholder="Your email (optional)" type="email" />
            </div>
          </div>
          
          <div className="pt-4 flex justify-end">
            <Button type="submit" size="lg" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Resource"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SuggestResource;
