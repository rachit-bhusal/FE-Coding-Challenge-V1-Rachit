import FifthAccordionIcon from './src/components/Icons/AccordionIcons/FifthAccordionIcon.jsx';
import FirstAccordionIcon from './src/components/Icons/AccordionIcons/FirstAccordionIcon.jsx';
import FourthAccordionIcon from './src/components/Icons/AccordionIcons/FourthAccordionIcon.jsx';
import SecondAccordionIcon from './src/components/Icons/AccordionIcons/SecondAccordionIcon.jsx';
import ThirdAccordionIcon from './src/components/Icons/AccordionIcons/ThirdAccordionIcon.jsx';

const accordionData = [
	{
		id: '1',
		title: 'Accordion Title 1',
		icon: FirstAccordionIcon(),
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		id: '2',
		title: 'Accordion title 2',
		icon: SecondAccordionIcon(),
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		id: '3',
		title: 'Accordion Title 3',
		icon: ThirdAccordionIcon(),
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		id: '4',
		title: 'Accordion title 4',
		icon: FourthAccordionIcon(),
		description: 'Lorem ipsum dolor sit amet',
	},
	{
		id: '5',
		title: 'Accordion title 4',
		icon: FifthAccordionIcon(),
		description: 'Lorem ipsum dolor sit amet',
	},
];

export default accordionData;
