import FifthAccordionIcon from './components/Icons/AccordionIcons/FifthAccordionIcon.jsx';
import FirstAccordionIcon from './components/Icons/AccordionIcons/FirstAccordionIcon.jsx';
import ForthAccordionIcon from './components/Icons/AccordionIcons/ForthAccordionIcon.jsx';
import SecondAccordionIcon from './components/Icons/AccordionIcons/SecondAccordionIcon.jsx';
import ThirdAccordionIcon from './components/Icons/AccordionIcons/ThirdAccordionIcon.jsx';

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
		icon: ForthAccordionIcon(),
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
