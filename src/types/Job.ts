export interface Job {
  id: number;
  company: Company;
  title: string;
  description: string;
  yearsOfExperience: number;
  stack: string[];
  jobType: string[];
  remote: boolean;
  date: Date;
  dayPosted: number;
  expired: boolean;
  salary: string;
}

export interface Company {
  name: string;
  city: string;
  state: string;
  country: string;
  logo: string;
  email: string;
}
