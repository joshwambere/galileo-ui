import { BaseApi } from '../api/api';
import {
  IinviteContributor,
  IinviteContributorResponse,
  Project,
  ProjectRequest,
  ProjectResponse,
  ProjectsResponse
} from '../../shared/types/project.types';

const projectEndpoint = BaseApi.injectEndpoints({
  endpoints: builder => ({
    projects: builder.query<ProjectsResponse, void>({
      query: () => ({
        url: 'project',
        method: 'GET'
      }),
      providesTags: ['Project']
    }),
    oneProject: builder.query<ProjectResponse, any>({
      query: (id: any) => ({
        url: `project/${id}`,
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
    }),
    invite: builder.mutation<IinviteContributorResponse, IinviteContributor>({
      query: body => ({
        url: `project/invite`,
        method: 'POST',
        body: body,
        credentials: 'include'
      }),
      invalidatesTags: ['Project']
    })
  })
});

export const { useProjectMutation, useProjectsQuery, useOneProjectQuery, useInviteMutation } =
  projectEndpoint;
