export interface Experience {
  id: number;
  company: string;
  position: string;
  startDate: string;
  endDate: string | null;
  description: string;
  skills: string[];
  logo?: string;
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string;
  startYear: number;
  endYear: number;
  description?: string;
}

export interface Profile {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
  avatar?: string;
}

