export default function Error({error}) {
    return (
		<p className='px-3 py-2 font-medium bg-red-500/40 text-red-600 rounded'>
			{error}
		</p>
	);
}