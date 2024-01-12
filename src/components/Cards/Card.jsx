import { useState } from 'react';
import TabCard from '../TabCards/TabCard';
import TabContentWrapper from '../Wrappers/TabContentWrapper';
import CardButton from './CardButton';

const Card = ({ title, icon, description, buttonLabel, id, setActiveTab, activeTab }) => {
	const [accordionIsOpen, setAccordionIsOpen] = useState(false);
	const handleClick = () => {
		setActiveTab(id);
		setAccordionIsOpen(!accordionIsOpen);
	};

	return (
		<div
			onClick={handleClick}
			className={`flex flex-col cursor-pointer rounded-lg border-[#CCCCCC] bg-white text-black overflow-hidden justify-between shadow-[0px_6px_0px_#FFD540] lg:border lg:hover:shadow-md lg:w-1/4 lg:shadow-none ${
				activeTab === id && accordionIsOpen ? `shadow-none rounded-[2.5rem] lg:rounded-lg` : ``
			}`}>
			<div className='px-8 py-6 pb-[0.625rem] lg:p-6'>
				<div className='flex flex-row-reverse items-center justify-end gap-6 pb-4 lg:justify-between lg:flex-row lg:items-start'>
					{activeTab === id && accordionIsOpen ? (
						<span className='text-[#3C479D] lg:hidden'>-</span>
					) : (
						<span className='text-[#3C479D] lg:hidden'>+</span>
					)}
					<p className='flex-grow text-xl font-semibold'>{title}</p>
					{icon}
				</div>
				<p className='hidden text-base font-medium lg:block'>{description}</p>
			</div>
			<div className='hidden lg:block'>
				<CardButton label={buttonLabel} />
			</div>

			<div className={`visible ${!accordionIsOpen ? 'h-0' : 'h-full'} transition delay-200 ease lg:hidden`}>
				<TabContentWrapper key={id} id={id} activeTab={activeTab}>
					<TabCard title={title} description={description} />
				</TabContentWrapper>
			</div>
		</div>
	);
};

export default Card;
