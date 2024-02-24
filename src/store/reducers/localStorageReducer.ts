const initialState: LocalStoragStateType = {
  page: '1',
};

export const localStorageReducer = (
  state: LocalStoragStateType = initialState,
  action: ActionsType,
) => {
  switch (action.type) {
    case 'SET-PAGE':
      return { ...state, page: action.payload.pageNumber };
    default:
      return state;
  }
};

// actions

export const setPageAC = (pageNumber: string) => {
  return { type: 'SET-PAGE', payload: { pageNumber } } as const;
};

// types
export type LocalStoragStateType = {
  page: string;
};
type SetPage = ReturnType<typeof setPageAC>;

type ActionsType = SetPage;
