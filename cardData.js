import FirstCardIcon from './components/Icons/CardIcons/FirstCardIcon.jsx';
import FourthCardIcon from './components/Icons/CardIcons/FourthCardIcon.jsx';
import SecondCardIcon from './components/Icons/CardIcons/SecondCardIcon.jsx';
import ThirdCardIcon from './components/Icons/CardIcons/ThirdCardIcon.jsx';

const cardData = [
	{
		id: 'tab1',
		title: 'Card Title',
		icon: FirstCardIcon(),
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		button: {
			title: 'Discover',
		},
		content: {
			title: 'Product Title 1',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque risus id ante maximus blandit. ',
		},
	},
	{
		id: 'tab2',
		title: 'Card title that goes 2 lines',
		icon: SecondCardIcon(),
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		button: {
			title: 'Discover',
		},
		content: {
			title: 'Product Title 2',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque risus id ante maximus blandit.',
		},
	},
	{
		id: 'tab3',

		title: 'Card Title',
		icon: ThirdCardIcon(),
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		button: {
			title: 'Discover',
		},
		content: {
			title: 'Product Title 3',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque risus id ante maximus blandit.',
		},
	},
	{
		id: 'tab4',

		title: 'Card title that goes 2 lines',
		icon: FourthCardIcon(),
		description: 'Lorem ipsum dolor sit amet',
		button: {
			title: 'Discover',
		},
		content: {
			title: 'Product Title 4',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque risus id ante maximus blandit.',
		},
	},
];

export default cardData;
