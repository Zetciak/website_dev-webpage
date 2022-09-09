// >> Modules
import { makeStyles } from '@mui/styles';

// >> Styling
const useStyles = makeStyles({
	mainDiv: {
		width: '100%',
		height: '802px',
		position: 'relative',
		float: 'left',
		'z-index': '5',
		marginTop: '140px',
	},

	divBg: {
		width: '100%',
		maxWidth: '2000px',
		height: '123%',
		position: 'absolute',
		'z-index': '-1',
		left: '50%',
		top: '50%',
		transform: 'translate(-50%,-50%)',
	},

	insideDiv: {
		width: '1448px',
		margin: '0 auto',
		position: 'relative',
		marginTop: '200px',
	},

	logosDiv: {
		width: '100%',
		height: '115px',
		marginTop: '105px',
		position: 'relative',
	},

	oneLogo: {
		width: '16.66%',
		height: 'auto',
		float: 'left',
		position: 'relative',

		'& .coloredLogo': {
			opacity: '0',
			transition: 'opacity .7s',
		},

		'& .normalLogo': {
			opacity: '1',
			position: 'absolute',
			top: '0px',
			left: '0px',
			width: '100%',
			height: '100%',
			transition: 'opacity 2s',
		},

		'&:hover': {
			'& .coloredLogo': {
				opacity: '1',
				cursor: 'pointer',
			},

			'& .normalLogo': {
				opacity: '0',
			},
		},
	},

	// <<<<<<<<<<<<<<<<<<<< Responsive scale
	// 1550px
	['@media (max-width: 1550px)']: {
		insideDiv: {
			width: '1184px',
		},
	},

	// 1340px
	['@media (max-width: 1340px)']: {
		insideDiv: {
			width: '90%',
			marginTop: '100px',
		},
	},

	// 1155px
	['@media (max-width: 1155px)']: {
		logosDiv: {
			marginTop: '70px',
			width: '90%',
			margin: '0 auto',
		},

		oneLogo: {
			width: '50%',
			height: '300px',
		},

		mainDiv: {
			height: 'auto',
		},
	},

	// 900px
	['@media (max-width: 900px)']: {
		oneLogo: {
			height: '200px',
		},
	},

	// 550px
	['@media (max-width: 550px)']: {
		oneLogo: {
			height: '120px',
		},
	},
});

export default useStyles;
