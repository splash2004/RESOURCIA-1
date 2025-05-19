
export type ResourceType = 'food' | 'shelter' | 'health' | 'mental' | 'education' | 'job';

export interface Resource {
  id: string;
  name: string;
  type: ResourceType;
  description: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  website?: string;
  email?: string;
  hours: string;
  eligibility?: string;
  languages: string[];
  services: string[];
  lastUpdated: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  availability?: {
    status: 'high' | 'medium' | 'low';
    message?: string;
  };
}

export const resources: Resource[] = [
  {
    id: "1",
    name: "Akshaya Patra Foundation",
    type: "food",
    description: "Providing mid-day meals to school children and food relief during emergencies to vulnerable communities.",
    address: "No. 72, 3rd Floor, 3rd Main Road, 1st & 2nd Stage",
    city: "Bangalore",
    state: "Karnataka",
    zip: "560038",
    phone: "+91 80 3022 7777",
    website: "https://www.akshayapatra.org",
    email: "info@akshayapatra.org",
    hours: "Monday-Friday: 9am-5pm",
    eligibility: "Open to all in need during relief operations, school children for mid-day meal program",
    languages: ["English", "Hindi", "Kannada"],
    services: ["Food distribution", "Mid-day meal program", "Disaster relief"],
    lastUpdated: "2023-12-15",
    coordinates: {
      lat: 12.9716,
      lng: 77.5946
    },
    availability: {
      status: "high",
      message: "Currently distributing food in multiple locations"
    }
  },
  {
    id: "2",
    name: "Feeding India by Zomato",
    type: "food",
    description: "A Zomato initiative working to end hunger and food waste by redistributing surplus food to those in need.",
    address: "Ground Floor, 12A, Zodiac Building, Sector 54",
    city: "Gurugram",
    state: "Haryana",
    zip: "122001",
    phone: "+91 124 426 8565",
    website: "https://www.feedingindia.org",
    email: "contact@feedingindia.org",
    hours: "24/7 through the Feeding India app",
    eligibility: "Anyone in need can access food through their nearest Happiness Center",
    languages: ["English", "Hindi"],
    services: ["Food rescue", "Distribution drives", "Community fridges"],
    lastUpdated: "2023-10-05",
    coordinates: {
      lat: 28.4595,
      lng: 77.0266
    },
    availability: {
      status: "high",
      message: "Active food distribution across multiple cities"
    }
  },
  {
    id: "3",
    name: "Aashray Adhikar Abhiyan",
    type: "shelter",
    description: "Working with homeless populations to provide shelter, rehabilitation and reintegration services.",
    address: "2/16, Saidulajab, Saket",
    city: "New Delhi",
    state: "Delhi",
    zip: "110030",
    phone: "+91 11 2953 3451",
    website: "https://www.homelesspeople.in",
    email: "info@homelesspeople.in",
    hours: "24/7",
    eligibility: "Homeless individuals and families",
    languages: ["Hindi", "English", "Punjabi"],
    services: ["Night shelters", "Rehabilitation", "Legal aid", "Healthcare"],
    lastUpdated: "2023-11-20",
    coordinates: {
      lat: 28.6139,
      lng: 77.2090
    },
    availability: {
      status: "medium",
      message: "Limited beds available tonight"
    }
  },
  {
    id: "4",
    name: "St+art India Foundation",
    type: "shelter",
    description: "Providing temporary housing and rehabilitation services for women and children in distress.",
    address: "F-320, Old MB Road, Lado Sarai",
    city: "New Delhi",
    state: "Delhi",
    zip: "110030",
    phone: "+91 95606 99836",
    website: "https://www.startindia.org",
    hours: "24/7 for emergency shelter",
    eligibility: "Women and children in distress situations",
    languages: ["Hindi", "English"],
    services: ["Emergency shelter", "Counseling", "Legal assistance", "Skill development"],
    lastUpdated: "2023-09-15",
    coordinates: {
      lat: 28.5244,
      lng: 77.1855
    },
    availability: {
      status: "medium",
      message: "Currently operating at 80% capacity"
    }
  },
  {
    id: "5",
    name: "Apollo Hospitals",
    type: "health",
    description: "Multi-specialty healthcare provider offering comprehensive medical services.",
    address: "Plot No. C-1, Bandra Kurla Complex",
    city: "Mumbai",
    state: "Maharashtra",
    zip: "400051",
    phone: "+91 22 6669 0000",
    website: "https://www.apollohospitals.com",
    email: "customercare@apollohospitals.com",
    hours: "24/7",
    eligibility: "All patients accepted, various insurance plans accepted",
    languages: ["English", "Hindi", "Marathi", "Gujarati"],
    services: ["Emergency care", "General medicine", "Surgery", "Diagnostic services", "Specialist consultations"],
    lastUpdated: "2024-01-10",
    coordinates: {
      lat: 19.0607,
      lng: 72.8778
    },
    availability: {
      status: "high",
      message: "Emergency services available 24/7"
    }
  },
  {
    id: "6",
    name: "Narayana Health",
    type: "health",
    description: "Affordable healthcare institution providing quality medical care to all segments of society.",
    address: "258/A, Bommasandra Industrial Area",
    city: "Bangalore",
    state: "Karnataka",
    zip: "560099",
    phone: "+91 80 2783 2772",
    website: "https://www.narayanahealth.org",
    email: "info@narayanahealth.org",
    hours: "24/7 for emergency services, OPD: 9am-5pm",
    eligibility: "All patients, sliding scale fees for those in need",
    languages: ["English", "Hindi", "Kannada", "Tamil"],
    services: ["Cardiology", "Oncology", "Orthopedics", "General medicine", "Pediatrics"],
    lastUpdated: "2023-12-05",
    coordinates: {
      lat: 12.8190,
      lng: 77.6975
    },
    availability: {
      status: "high",
      message: "Accepting new patients for all departments"
    }
  },
  {
    id: "7",
    name: "Sangath Mental Health NGO",
    type: "mental",
    description: "Community-based organization providing mental health services and support.",
    address: "H No. 451 (168), Bhatkar Waddo",
    city: "Porvorim",
    state: "Goa",
    zip: "403501",
    phone: "+91 832 2414 916",
    website: "https://www.sangath.in",
    email: "contactus@sangath.in",
    hours: "Monday-Friday: 9am-5pm",
    eligibility: "Open to all, sliding scale fees available",
    languages: ["English", "Hindi", "Konkani", "Marathi"],
    services: ["Counseling", "Mental health assessments", "Support groups", "Child development services"],
    lastUpdated: "2023-08-22",
    coordinates: {
      lat: 15.4909,
      lng: 73.8278
    },
    availability: {
      status: "low",
      message: "Currently waitlisting new clients"
    }
  },
  {
    id: "8",
    name: "The Live Love Laugh Foundation",
    type: "mental",
    description: "Foundation focused on reducing stigma around mental health and providing resources for depression.",
    address: "8th Floor, Shobha Pearl, Commissariat Rd",
    city: "Bangalore",
    state: "Karnataka",
    zip: "560025",
    phone: "+91 80 2522 1709",
    website: "https://www.thelivelovelaughfoundation.org",
    email: "outreach@thelivelovelaughfoundation.org",
    hours: "Monday-Friday: 10am-6pm",
    languages: ["English", "Hindi", "Kannada"],
    services: ["Free counseling services", "Mental health awareness", "Crisis support"],
    lastUpdated: "2024-02-10",
    coordinates: {
      lat: 12.9716,
      lng: 77.5946
    }
  },
  {
    id: "9",
    name: "Pratham Education Foundation",
    type: "education",
    description: "Improving quality of education for underprivileged children across India.",
    address: "E-1/164, Arera Colony",
    city: "Bhopal",
    state: "Madhya Pradesh",
    zip: "462016",
    phone: "+91 755 4220 335",
    website: "https://www.pratham.org",
    email: "info@pratham.org",
    hours: "Monday-Saturday: 9am-5pm",
    languages: ["English", "Hindi"],
    services: ["Early childhood education", "Primary education", "Digital literacy", "Vocational training"],
    lastUpdated: "2023-12-12",
    coordinates: {
      lat: 23.2599,
      lng: 77.4126
    }
  },
  {
    id: "10",
    name: "NIIT Foundation",
    type: "education",
    description: "Providing skill-based education to underserved students and youth.",
    address: "Plot No. 85, Sector 32",
    city: "Gurugram",
    state: "Haryana",
    zip: "122001",
    phone: "+91 124 4112000",
    website: "https://www.niitfoundation.org",
    email: "info@niitfoundation.org",
    hours: "Monday-Friday: 10am-6pm",
    languages: ["English", "Hindi"],
    services: ["Digital literacy", "Career development", "Skill training", "Computer education"],
    lastUpdated: "2023-10-30",
    coordinates: {
      lat: 28.4595,
      lng: 77.0266
    }
  },
  {
    id: "11",
    name: "Naukri Learning Center",
    type: "job",
    description: "Career development center providing job training and placement services.",
    address: "B-8, Sector 132",
    city: "Noida",
    state: "Uttar Pradesh",
    zip: "201304",
    phone: "+91 120 4300400",
    website: "https://learning.naukri.com",
    email: "help@naukri.com",
    hours: "Monday-Friday: 9:30am-6:30pm",
    languages: ["English", "Hindi"],
    services: ["Resume building", "Interview preparation", "Job search assistance", "Skill development"],
    lastUpdated: "2024-01-15",
    coordinates: {
      lat: 28.5355,
      lng: 77.3910
    }
  },
  {
    id: "12",
    name: "SEWA Bharat",
    type: "job",
    description: "Organization working for the rights and livelihood of women in the informal sector.",
    address: "7/5, South Patel Nagar",
    city: "New Delhi",
    state: "Delhi",
    zip: "110008",
    phone: "+91 11 2574 1370",
    website: "https://www.sewabharat.org",
    email: "mail@sewabharat.org",
    hours: "Monday-Saturday: 10am-5pm",
    eligibility: "Focus on women in informal sector",
    languages: ["Hindi", "English", "Gujarati"],
    services: ["Vocational training", "Microfinance", "Self-employment support", "Market linkages"],
    lastUpdated: "2023-11-05",
    coordinates: {
      lat: 28.6517,
      lng: 77.1784
    }
  }
];

export const resourceCategories = [
  { id: "food", name: "Food Banks", color: "resource-food" },
  { id: "shelter", name: "Shelters", color: "resource-shelter" },
  { id: "health", name: "Health Clinics", color: "resource-health" },
  { id: "mental", name: "Mental Health", color: "resource-mental" },
  { id: "education", name: "Education", color: "resource-education" },
  { id: "job", name: "Job Resources", color: "resource-job" }
];

export function getResourcesByCity(city: string): Resource[] {
  return resources.filter(resource => 
    resource.city.toLowerCase() === city.toLowerCase()
  );
}

export function getResourcesByType(type: ResourceType): Resource[] {
  return resources.filter(resource => resource.type === type);
}

export function getResourceById(id: string): Resource | undefined {
  return resources.find(resource => resource.id === id);
}
