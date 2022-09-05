// >> Modules
import { makeStyles } from '@mui/styles';

// >> Styling
const useStyles = makeStyles({
	mainDiv: {
		width: '100%',
		margin: '0 auto',
		position: 'relative',
	},

	compoDiv: {
		position: 'relative',
		'z-index': '3',
	},

	bgDiv: {
		width: '100%',
		position: 'absolute',
		top: '0',
		left: '0',
		'z-index': '2',
	},

	bgDivInside: {
		width: '1440px',
		margin: '0 auto',
		position: 'relative',
	},

	circle: {
		width: '1683px',
		height: '1683px',
		position: 'absolute',
	},

	circle1: {
		left: '-841px',
		top: '500px',
	},

	circle2: {
		right: '-841px',
		top: '1500px',
	},

	circle3: {
		left: '-841px',
		top: '2500px',
	},

	circle4: {
		right: '-841px',
		top: '3500px',
	},

	circle5: {
		left: '-841px',
		top: '4500px',
	},

	circle6: {
		right: '-841px',
		top: '5500px',
	},

	circle7: {
		left: '-841px',
		top: '6500px',
	},

	circle8: {
		right: '-841px',
		top: '7500px',
	},

	circle9: {
		left: '-841px',
		top: '8500px',
	},

	// <<<<<<<<<<<<<<<<<<<< Responsive scale
	// 1920px
	['@media (max-width: 1920px)']: {
		bgDivInside: {
			width: '100%',
		},
	},

	// 1450px
	['@media (max-width: 1450px)']: {
		bgDivInside: {
			width: '100%',
		},
	},
});

export default useStyles;
