export interface TechnologyType {
  id: string;
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Language" | "Styling" | "DevOps" | "Tools";
  description: string;
  icon: string;
  rating: boolean;
  difficulty: "Beginner-Friendly" | "Intermediate" | "Advanced";
  badge: "Popular" | "Fast"| "Essential" | "Containers";
  badgeColor:string;
  addedOrNot:boolean
}