
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <section className="max-w-3xl mx-auto mb-16">
        <h1 className="text-3xl font-bold mb-4">About Community Resource Finder</h1>
        <p className="text-lg mb-6">
          Community Resource Finder is a platform dedicated to connecting individuals with essential resources in their community.
        </p>
        <p className="text-muted-foreground mb-8">
          We believe that everyone should have easy access to information about local resources that can help them meet their basic needs, improve their health and wellbeing, and build a better life.
        </p>
        
        <h2 id="mission" className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="mb-4">
          Our mission is to empower underserved communities by making vital resources more accessible through technology.
        </p>
        <p className="text-muted-foreground mb-8">
          By providing a centralized, easy-to-use platform for finding food banks, shelters, health clinics, mental health services, and other essential resources, we aim to reduce barriers to access and help people get the support they need.
        </p>
      </section>
      
      <section className="bg-muted/30 py-12 px-4 rounded-lg mb-16">
        <div className="max-w-3xl mx-auto">
          <h2 id="team" className="text-2xl font-bold mb-6">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-center">Sarah Johnson</h3>
                <p className="text-center text-muted-foreground">Founder & Executive Director</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-center">Miguel Rodriguez</h3>
                <p className="text-center text-muted-foreground">Technology Director</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-center">Aisha Williams</h3>
                <p className="text-center text-muted-foreground">Community Outreach</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="max-w-3xl mx-auto mb-16">
        <h2 id="partners" className="text-2xl font-bold mb-6">Our Partners</h2>
        <p className="mb-6">
          We collaborate with a wide range of organizations to ensure our resource directory is comprehensive, accurate, and up-to-date.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="border rounded-lg p-4 flex items-center justify-center h-24 bg-white">
            <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded">
              Partner Logo
            </div>
          </div>
          
          <div className="border rounded-lg p-4 flex items-center justify-center h-24 bg-white">
            <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded">
              Partner Logo
            </div>
          </div>
          
          <div className="border rounded-lg p-4 flex items-center justify-center h-24 bg-white">
            <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded">
              Partner Logo
            </div>
          </div>
          
          <div className="border rounded-lg p-4 flex items-center justify-center h-24 bg-white">
            <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded">
              Partner Logo
            </div>
          </div>
        </div>
      </section>
      
      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
        <p className="mb-6">
          Have questions or suggestions? We'd love to hear from you!
        </p>
        
        <div className="border rounded-lg p-6 bg-card">
          <h3 className="font-medium mb-2">Email</h3>
          <p className="text-muted-foreground mb-4">info@communityresourcefinder.org</p>
          
          <h3 className="font-medium mb-2">Phone</h3>
          <p className="text-muted-foreground mb-4">(555) 123-4567</p>
          
          <h3 className="font-medium mb-2">Address</h3>
          <p className="text-muted-foreground">
            123 Community Way<br />
            Springfield, IL 62701
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
