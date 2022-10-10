export interface Project {
  _id: string;
  name: string;
  description: string;
  __v: number;
  createdAt: string;
  status: string;
}
export interface ProjectRequest {
  name: string;
  description: string;
}

export interface ProjectResponse {
  data: Project;
  message: string;
}
export interface ProjectsResponse {
  data: Project[];
  message: string;
}
