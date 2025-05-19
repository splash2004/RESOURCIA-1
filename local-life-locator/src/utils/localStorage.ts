
import { Resource, ResourceType } from "@/data/resources";

const STORAGE_KEY = "user-suggested-resources";

export function getSuggestedResources(): Resource[] {
  try {
    const storedResources = localStorage.getItem(STORAGE_KEY);
    return storedResources ? JSON.parse(storedResources) : [];
  } catch (error) {
    console.error("Error retrieving resources from localStorage:", error);
    return [];
  }
}

export function saveResource(resource: Resource): void {
  try {
    const currentResources = getSuggestedResources();
    const updatedResources = [...currentResources, resource];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedResources));
  } catch (error) {
    console.error("Error saving resource to localStorage:", error);
  }
}

export function clearSuggestedResources(): void {
  localStorage.removeItem(STORAGE_KEY);
}
