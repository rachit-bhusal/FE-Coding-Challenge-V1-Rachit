import { useState } from 'react';
import DownArrowAccordion from '../Icons/AccordionIcons/DownArrowAccordion';

const Accordion = ({ title, icon, description }) => {
	const [isOpen, setIsOpen] = useState(false);
	const handleClick = (e) => {
		e.stopPropagation();
		setIsOpen(!isOpen);
	};

	return (
		<div className='border-b-[0.062rem] border-black'>
			<button className='flex flex-row items-center justify-between w-full h-14' onClick={handleClick}>
				<div className='flex gap-2'>
					{icon}
					<span className='text-lg font-medium'>{title}</span>
				</div>
				<DownArrowAccordion accordionIsOpen={isOpen} />
			</button>
			<div
				className={`grid overflow-hidden transition-all duration-300 ease-in-out text-sm text-gray-800 ${
					isOpen ? `grid-rows-[1fr] opacity 100` : `grid-rows-[0fr] opacity-0`
				}`}>
				<div className='overflow-hidden'>{description}</div>
			</div>
		</div>
	);
};

export default Accordion;
