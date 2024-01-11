import TabCard from '../TabCards/TabCard';
import TabContentWrapper from '../Wrappers/TabContentWrapper';
import CardButton from './CardButton';

const Card = ({ title, icon, description, buttonLabel, id, setActiveTab, activeTab }) => {
	const handleClick = () => {
		setActiveTab(id);
	};

	return (
		<div
			onClick={handleClick}
			className={`flex flex-col lg:border rounded-lg border-[#CCCCCC] bg-white text-black overflow-hidden justify-between lg:hover:shadow-md transition ease-in delay-150 lg:w-1/4 shadow-[0px_6px_0px_#FFD540] lg:shadow-none ${
				activeTab === id ? `shadow-none rounded-[2.5rem] lg:rounded-lg` : ``
			}`}>
			<div className='lg:p-6 px-8 py-6 pb-[0.625rem]'>
				<div className='flex flex-row-reverse items-center justify-end gap-6 pb-4 lg:justify-between lg:flex-row lg:items-start'>
					<div className='lg:hidden text-[#3C479D]'>+</div>
					<p className='flex-grow text-xl font-semibold'>{title}</p>
					{icon}
				</div>
				<p className='hidden text-base font-medium lg:block'>{description}</p>
			</div>
			<div className='hidden lg:block'>
				<CardButton label={buttonLabel} />
			</div>

			<div className='visible transition delay-200 lg:hidden ease'>
				<TabContentWrapper key={id} id={id} activeTab={activeTab}>
					<TabCard title={title} description={description} />
				</TabContentWrapper>
			</div>
		</div>
	);
};

export default Card;
