export const SET_POST_MODAL_LIKE_REFRESH_ID = 'SET_POST_MODAL_LIKE_REFRESH_ID';
export const FETCH_CAR_FREAK_POSTS = 'FETCH_CAR_FREAK_POSTS';
export const FETCH_EDITED_POST = 'FETCH_EDITED_POST';
export const FETCH_SELECTED_POST = 'FETCH_SELECTED_POST';
export const FETCH_USER_POST_LIKE_IDS = 'FETCH_USER_POST_LIKES';

export function setPostModalLikeRefreshId(data){
  return (dispatch) => {
    dispatch({
      type: SET_POST_MODAL_LIKE_REFRESH_ID,
      payload:data,
    });
  }
}

export function fetchCarFreakPosts(data){
  return (dispatch) => {
    dispatch({
      type: FETCH_CAR_FREAK_POSTS,
      payload:data,
    });
  }
}

export function fetchEditedPost(data){
  return (dispatch) => {
    dispatch({
      type: FETCH_EDITED_POST,
      payload:data,
    });
  }
}

export function fetchUserPostLikeIds(data){
  return (dispatch) => {
    dispatch({
      type: FETCH_USER_POST_LIKE_IDS,
      payload:data,
    });
  }
}

export function fetchSelectedPost(data){
  return (dispatch) => {
    dispatch({
      type: FETCH_SELECTED_POST,
      payload:data,
    });
  }
}