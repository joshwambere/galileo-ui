import { BaseApi } from '../api/api';
import {
  Project,
  ProjectRequest,
  ProjectResponse, ProjectsResponse
} from "../../shared/types/project.types";

const projectEndpoint = BaseApi.injectEndpoints({
  endpoints: builder => ({
    projects: builder.query<ProjectsResponse, void>({
      query: () => ({
        url: 'project',
        method: 'GET'
      }),
      providesTags: ['Project']
    }),
    project: builder.mutation<ProjectResponse, ProjectRequest>({
      query: credentials => ({
        url: `project/create`,
        method: 'POST',
        body: credentials,
        credentials: 'include'
      }),
      invalidatesTags: ['Project']
    })
  })
});

export const { useProjectMutation, useProjectsQuery } = projectEndpoint;
