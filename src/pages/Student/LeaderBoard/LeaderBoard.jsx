import OthersScore from './OthersScore/OthersScore';
import UserScore from './UserScore/UserScore';

export default function LeaderBoard() {
	return (
		<section className='py-6 bg-primary'>
			<div className='mx-auto max-w-7xl px-5 lg:px-0'>
				<UserScore />

				<OthersScore />
			</div>
		</section>
	);
}
