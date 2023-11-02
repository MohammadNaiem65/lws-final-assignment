export default function handleDebounce(value) {
	let timeoutId;

	return new Promise((resolve) => {
		// clear timeout if exits
		clearTimeout(timeoutId);

		timeoutId = setTimeout(() => {
			resolve(value);
		}, 650);
	});
}
