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
		marginTop: '150px',
	},

	teamSection: {
		width: '1180px',
		height: '407px',
		margin: '0 auto',
		position: 'relative',
		marginTop: '180px',

		'&:before': {
			position: 'absolute',
			content: '""',
			background:
				'linear-gradient(90deg, rgba(33, 35, 34, 0) 0%, #33D972 51.04%, rgba(33, 35, 34, 0) 100%)',
			'z-index': '2',
			width: '1440px',
			height: '2px',
			left: '-128px',
		},

		'&:after': {
			position: 'absolute',
			content: '""',
			background:
				'linear-gradient(90deg, rgba(33, 35, 34, 0) 0%, #33D972 51.04%, rgba(33, 35, 34, 0) 100%)',
			'z-index': '2',
			width: '1440px',
			height: '2px',
			bottom: '0px',
			left: '-128px',
		},
	},

	maciekDiv: {
		float: 'left',
		position: 'relative',
		width: '50%',
		height: '100%',
		background:
			'linear-gradient(90deg, rgba(0, 0, 0, 0.46) 0%, rgba(0, 0, 0, 0) 100%)',

		'&:before': {
			position: 'absolute',
			content: '""',
			background:
				'linear-gradient(90deg, #40B853 -6.52%, #24FF96 137.5%)',
			opacity: '.1',
			width: '100%',
			height: '100%',
		},
	},

	insideMaciekDiv: {
		width: '100%',
		height: '100%',
		position: 'absolute',

		'&:before': {
			position: 'absolute',
			content: '""',
			background:
				'linear-gradient(90deg, rgba(33, 35, 34, 0) 0%, #33D972 51.04%, rgba(33, 35, 34, 0) 100%)',
			'z-index': '1',
			width: '693px',
			height: '2px',
			transform: 'rotate(90deg)',
			top: '200px',
			left: '-346.5px',
		},

		'&:after': {
			position: 'absolute',
			content: '""',
			background:
				'linear-gradient(90deg, rgba(33, 35, 34, 0) 0%, #33D972 51.04%, rgba(33, 35, 34, 0) 100%)',
			'z-index': '1',
			width: '693px',
			height: '2px',
			transform: 'rotate(90deg)',
			top: '200px',
			right: '-346.5px',
		},
	},

	insideMarcelDiv: {
		width: '100%',
		height: '100%',
		position: 'absolute',

		'&:before': {
			position: 'absolute',
			content: '""',
			background:
				'linear-gradient(90deg, rgba(33, 35, 34, 0) 0%, #33D972 51.04%, rgba(33, 35, 34, 0) 100%)',
			'z-index': '1',
			width: '693px',
			height: '2px',
			transform: 'rotate(90deg)',
			top: '200px',
			right: '-346.5px',
			opacity: '0',
		},

		'&:after': {
			position: 'absolute',
			content: '""',
			background:
				'linear-gradient(90deg, rgba(33, 35, 34, 0) 0%, #33D972 51.04%, rgba(33, 35, 34, 0) 100%)',
			'z-index': '1',
			width: '693px',
			height: '2px',
			transform: 'rotate(90deg)',
			top: '200px',
			right: '-346.5px',
		},
	},

	marcelDiv: {
		float: 'left',
		position: 'relative',
		width: '50%',
		height: '100%',
		background:
			'linear-gradient(90deg, rgba(64, 184, 83, .1) -6.52%, rgba(36, 255, 150, .1) 137.5%)',

		'&:before': {
			position: 'absolute',
			content: '""',
			background:
				'linear-gradient(90deg, rgba(0, 0, 0, 0.46) 0%, rgba(0, 0, 0, 0) 100%)',
			width: '100%',
			height: '100%',
			transform: 'rotate(-180deg)',
		},

		'&:after': {
			position: 'absolute',
			content: '""',
			background:
				'linear-gradient(90deg, rgba(33, 35, 34, 0) 0%, #33D972 51.04%, rgba(33, 35, 34, 0) 100%)',
			'z-index': '1',
			width: '140%',
			height: '2px',
			opacity: '0',

			bottom: '0px',
			right: '-20%',
		},
	},

	faceDiv: {
		width: '110px',
		height: '110px',
		position: 'relative',
		border: '2.5px solid #32DB74',
		background:
			'linear-gradient(90deg, rgba(64, 184, 83, .1) -6.52%, rgba(36, 255, 150, .1) 137.5%)',
		borderRadius: '100%',
		marginTop: '49px',
		marginLeft: '61px',
	},

	faceImage: {
		width: '90%',
		height: '90%',
		marginLeft: '10px',
		marginTop: '8px',
	},

	textsDiv: {
		width: '78%',
		margin: '0 auto',
		marginTop: '26px',
		position: 'relative',
	},

	roleText: {
		width: '100%',
		position: 'relative',

		// Font
		fontFamily: 'Clash Grotesk',
		fontStyle: 'normal',
		fontWeight: '600',
		fontSize: '32px',
		lineHeight: '100%',
	},

	nameText: {
		position: 'relative',
		marginTop: '4px',
		float: 'left',

		// Font
		fontFamily: 'Clash Grotesk',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '28px',
		lineHeight: '100%',

		// Color
		color: '#eeeeee',
	},

	twitterDiv: {
		float: 'left',
		marginLeft: '12px',
		marginTop: '8px',
		width: '25px',
		height: '20px',
		opacity: '1',
		transition: 'opacity .7s',

		'&:hover': {
			opacity: '.8',
		},
	},

	descText: {
		width: '100%',
		position: 'relative',
		marginTop: '18px',
		float: 'left',
		clear: 'both',

		// Font
		fontFamily: 'Readex Pro',
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '16px',
		lineHeight: '125%',

		// Color
		color: '#DFDFDF',
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
			width: '590px',
			marginTop: '100px',
		},

		teamSection: {
			marginTop: '100px',
			width: '100%',

			'&:before': {
				width: '140%',
				left: '-20%',
			},

			'&:after': {
				width: '140%',
				left: '-20%',
			},
		},

		maciekDiv: {
			width: '100%',
		},

		marcelDiv: {
			width: '100%',

			'&:after': {
				opacity: '1',
			},
		},

		insideMaciekDiv: {
			'&:before': {
				width: '2px',
				height: '140%',
				top: '-20%',
				left: '0px',
				transform: 'rotate(0deg)',
				background:
					'linear-gradient(0deg, rgba(33, 35, 34, 0) 0%, #33D972 51.04%, rgba(33, 35, 34, 0) 100%)',
			},

			'&:after': {
				width: '2px',
				height: '140%',
				top: '-20%',
				right: '0px',
				transform: 'rotate(0deg)',
				background:
					'linear-gradient(0deg, rgba(33, 35, 34, 0) 0%, #33D972 51.04%, rgba(33, 35, 34, 0) 100%)',
			},
		},

		insideMarcelDiv: {
			'&:before': {
				width: '2px',
				height: '140%',
				transform: 'rotate(0deg)',
				top: '-20%',
				left: '0px',
				opacity: '1',
				background:
					'linear-gradient(0deg, rgba(33, 35, 34, 0) 0%, #33D972 51.04%, rgba(33, 35, 34, 0) 100%)',
			},

			'&:after': {
				width: '2px',
				height: '140%',
				transform: 'rotate(0deg)',
				top: '-20%',
				right: '0px',
				background:
					'linear-gradient(0deg, rgba(33, 35, 34, 0) 0%, #33D972 51.04%, rgba(33, 35, 34, 0) 100%)',
			},
		},

		faceDiv: {
			margin: '0 auto',
			marginTop: '45px',
		},

		textsDiv: {
			width: '90%',
		},

		roleText: {
			textAlign: 'center',
		},

		nameText: {
			float: 'none',
			width: '100%',
			textAlign: 'center',
		},

		twitterDiv: {
			display: 'none',
		},

		descText: {
			textAlign: 'center',
		},
	},

	// 800px
	['@media (max-width: 800px)']: {
		insideDiv: {
			width: '80%',
		},
	},

	// 570px
	['@media (max-width: 570px)']: {
		descText: {
			fontSize: '14px',
		},

		roleText: {
			fontSize: '26px',
		},

		nameText: {
			fontSize: '24px',
		},
	},

	// 450px
	['@media (max-width: 450px)']: {
		faceDiv: {
			marginTop: '25px',
		},
	},

	// 400px
	['@media (max-width: 400px)']: {
		descText: {
			fontSize: '12px',
		},

		roleText: {
			fontSize: '24px',
		},

		nameText: {
			fontSize: '22px',
		},

		faceDiv: {
			marginTop: '35px',
		},
	},

	// 350px
	['@media (max-width: 350px)']: {
		faceDiv: {
			marginTop: '25px',
		},
	},
});

export default useStyles;
