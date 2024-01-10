import CardButton from './CardButton';

const Card = ({ title, icon, description, buttonLabel, id, setActiveTab }) => {
	const handleClick = () => {
		setActiveTab(id);
	};

	return (
		<div
			id='bubble'
			onClick={handleClick}
			className='flex flex-col border rounded-lg border-[#CCCCCC] bg-white text-black w-3/12 overflow-hidden justify-between hover:shadow-md transition ease-in delay-150'>
			<div className='p-6 pb-[0.625rem]'>
				<div className='flex flex-row justify-between pb-4'>
					<p className='text-xl font-semibold'>{title}</p>
					{icon}
				</div>
				<p className='text-base font-medium'>{description}</p>
			</div>
			<CardButton label={buttonLabel} />
		</div>
	);
};

export default Card;
