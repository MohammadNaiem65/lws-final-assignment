import { portalLogo } from '../../../assets';
import Form from './Form/Form';

export default function Login() {
	return (
		<section className='py-6 bg-primary h-screen grid place-items-center'>
			<div className='mx-auto max-w-md px-5 lg:px-0'>
				<div>
					<img className='h-12 mx-auto' src={portalLogo} />
					<h2 className='mt-6 text-center text-3xl font-extrabold text-slate-100'>
						Sign in to Admin Account
					</h2>
				</div>

				{/* Form */}
				<Form />
			</div>
		</section>
	);
}
