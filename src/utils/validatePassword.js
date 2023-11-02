export default function validatePassword(pass, confPass) {
	const result = {};

	if (pass.length < 6 || confPass.length < 6) {
		result.error = 'Password much be 6 character long.';
	} else if (pass !== confPass) {
		result.error = 'Password did not matched.';
	} else {
		result.password = pass;
	}

	return result;
}
