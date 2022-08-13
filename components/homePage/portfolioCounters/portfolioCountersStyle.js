// >> Modules
import { makeStyles } from '@mui/styles';

// >> Styling
const useStyles = makeStyles({
	mainDiv: {
		width: '100%',
		position: 'relative',
		float: 'left',
		'z-index': '5',
	},

	insideDiv: {
		width: '1440px',
		margin: '0 auto',
		position: 'relative',
		marginTop: '200px',
	},

	threeBlocks: {
		width: '1180px',
		height: '407px',
		margin: '0 auto',
		position: 'relative',
		marginTop: '180px',

		background:
			'linear-gradient(90deg, rgba(64, 184, 83, .1) -6.52%, rgba(36, 255, 150, .1) 137.5%)',

		'&:before': {
			position: 'absolute',
			content: '""',
			background:
				'linear-gradient(90deg, rgba(33, 35, 34, 0.25) 0%, #33D972 51.04%, #212322 100%)',
			'z-index': '2',
			width: '1440px',
			height: '2px',
			left: '-128px',
		},

		'&:after': {
			position: 'absolute',
			content: '""',
			background:
				'linear-gradient(90deg, rgba(33, 35, 34, 0.25) 0%, #33D972 51.04%, #212322 100%)',
			'z-index': '2',
			width: '1440px',
			height: '2px',
			bottom: '0px',
			left: '-128px',
		},
	},

	oneBlock: {
		width: '33.3%',
		height: '100%',
		position: 'relative',
		float: 'left',

		'&:before': {
			position: 'absolute',
			content: '""',
			background:
				'linear-gradient(90deg, rgba(33, 35, 34, 0.25) 0%, #33D972 51.04%, #212322 100%)',
			'z-index': '1',
			width: '693px',
			height: '2px',
			transform: 'rotate(90deg)',
			top: '200px',
			left: '-346.5px',
		},
	},

	firstBlock: {
		background:
			'linear-gradient(90deg, rgba(0, 0, 0, 0.46) 0%, rgba(0, 0, 0, 0) 100%)',
	},

	thirdBlock: {
		background:
			'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.46) 100%)',
		float: 'right',

		'&:after': {
			position: 'absolute',
			content: '""',
			background:
				'linear-gradient(90deg, rgba(33, 35, 34, 0.25) 0%, #33D972 51.04%, #212322 100%)',
			'z-index': '1',
			width: '693px',
			height: '2px',
			transform: 'rotate(90deg)',
			top: '200px',
			right: '-346.5px',
		},
	},

	borderTextLocal: {
		width: '70%',
		marginTop: '80px',

		// Font
		fontSize: '200px',
		lineHeight: '100%',
		letterSpacing: '0px',

		// Color
		color: '#1f3024',
	},

	greenTextLocal: {
		width: '70%',
		margin: '0 auto',
		textAlign: 'center',
		marginTop: '80px',

		// Font
		fontFamily: 'Clash Grotesk',
		fontStyle: 'normal',
		fontWeight: '700',
		fontSize: '200px',
		lineHeight: '100%',
	},

	whiteDesc: {
		width: '90%',
		margin: '0 auto',
		marginTop: '-10px',

		// Font
		fontFamily: 'Clash Grotesk',
		fontStyle: 'normal',
		fontWeight: '600',
		fontSize: '54px',
		lineHeight: '100%',
		textAlign: 'center',

		// Color
		color: '#ffffff',
	},
});

export default useStyles;
