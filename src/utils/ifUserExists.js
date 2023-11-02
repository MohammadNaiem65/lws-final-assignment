import userApi from '../features/user/userApi';

export default function ifUserExists(email, dispatch) {
	return dispatch(userApi.endpoints.getUser.initiate(email)).unwrap();
}
