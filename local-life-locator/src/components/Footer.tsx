
import { MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card dark:bg-card border-t mt-auto">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <MapPin className="h-6 w-6 text-primary mr-2" />
              <h2 className="text-lg font-bold">Community Resource Finder</h2>
            </div>
            <p className="text-sm text-muted-foreground">
              Helping connect people with essential community resources since 2023.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/resources?type=food" className="text-muted-foreground hover:text-foreground transition-colors">Food Banks</a></li>
              <li><a href="/resources?type=shelter" className="text-muted-foreground hover:text-foreground transition-colors">Shelters</a></li>
              <li><a href="/resources?type=health" className="text-muted-foreground hover:text-foreground transition-colors">Health Clinics</a></li>
              <li><a href="/resources?type=mental" className="text-muted-foreground hover:text-foreground transition-colors">Mental Health</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">Our Mission</a></li>
              <li><a href="/about#team" className="text-muted-foreground hover:text-foreground transition-colors">Our Team</a></li>
              <li><a href="/about#partners" className="text-muted-foreground hover:text-foreground transition-colors">Partners</a></li>
              <li><a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Get Involved</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/suggest" className="text-muted-foreground hover:text-foreground transition-colors">Suggest a Resource</a></li>
              <li><a href="/volunteer" className="text-muted-foreground hover:text-foreground transition-colors">Volunteer</a></li>
              <li><a href="/donate" className="text-muted-foreground hover:text-foreground transition-colors">Donate</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2023 Community Resource Finder. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground">Terms</a>
            <a href="#" className="text-muted-foreground hover:text-foreground">Privacy</a>
            <a href="#" className="text-muted-foreground hover:text-foreground">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
