import {
  searchGHRepositories,
  getCollaborators,
} from '../../API/repositories.services'
import {
  DispatchRepositoryType,
  IRepositoryOwner,
} from '../../interfaces/repositories.interfaces'
import {
  getAllRepositories,
  handleError,
  loadingRequest,
  getCollaboratorsAction,
  handleCollaboratorsError,
  loadingCollaborators,
} from './constants/Repositories.action'

export const fetchRepositories =  (query = '', page = 1, per_page = 100) => async (dispatch: DispatchRepositoryType) => {
      try {
        dispatch(loadingRequest());
        const { data } = await searchGHRepositories(query, page, per_page);

        dispatch(getAllRepositories(data.items));
    } catch (error) {
      dispatch(
          handleError({ Errormessage: 'Failed to retrieve data', isError: true }),
      )
      }
    };

export const fetchCollaborators =
  (url: string) => async (dispatch: DispatchRepositoryType) => {
  dispatch(loadingCollaborators())
  try {
    const { data } = await getCollaborators(url)
    dispatch(getCollaboratorsAction(data))
  } catch (error) {
    dispatch(
      handleCollaboratorsError({
        CollaboratorsErrorsMessage: 'Failed to retrieve collaborators data',
        collaboratorsError: true,
      })
    );
  }
}

export const searchCollaborators = (
  query: string,
  collaborator: IRepositoryOwner[]
) =>
  collaborator.filter((collaborator: IRepositoryOwner) => collaborator.login.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
  )