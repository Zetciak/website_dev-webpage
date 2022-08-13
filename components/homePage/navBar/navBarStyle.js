// >> Modules
import { makeStyles } from '@mui/styles';

// >> Styling
const useStyles = makeStyles({
	mainDiv: {
		width: '100%',
		height: '90px',
		position: 'fixed',
		float: 'left',
		background: 'rgba(40, 40, 40, 0.8)',
		backdropFilter: 'blur(5px)',
		borderBottom: '1px solid #ffffff11',
		'z-index': '6',
	},

	insideDiv: {
		width: '1448px',
		margin: '0 auto',
		position: 'relative',
	},

	leftDiv: {
		position: 'relative',
		width: '103px',
		height: '24px',
		marginTop: '36px',
		float: 'left',
	},

	centerDiv: {
		position: 'relative',
		marginLeft: '266.5px',
		marginTop: '36px',
		float: 'left',
	},

	oneNavigationElement: {
		position: 'relative',
		float: 'left',
		marginLeft: '56px',
		transition: 'color .7s',

		// Font
		fontFamily: 'Readex Pro',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '16px',
		lineHeight: '150%',
		color: 'rgba(255, 255, 255, 0.75)',

		'&:hover': {
			color: 'rgba(255, 255, 255, 1)',
			cursor: 'pointer',

			'&:before': {
				opacity: '1',
			},
		},

		'&:before': {
			position: 'absolute',
			content: '""',
			background:
				'linear-gradient(90deg, rgba(64, 184, 83, 1) -6.52%, rgba(36, 255, 150, 1) 137.5%)',
			borderRadius: '30px',
			height: '3px',
			width: '100%',
			top: '52px',
			opacity: '0',
			transition: 'opacity .7s',
		},

		'&:first-child': {
			marginLeft: '0px',
		},
	},

	rightDiv: {
		position: 'relative',
		float: 'right',
		marginTop: '24px',
	},

	languageButtonDiv: {
		position: 'relative',
		width: '130px',
		height: '51px',
		marginRight: '24px',
		background: 'rgba(255, 255, 255, 0.07)',
		borderRadius: '10px',
		transition: 'height 1s, background 1s',
		overflow: 'hidden',
		float: 'left',

		'&:hover': {
			background: 'rgba(255, 255, 255, 0.1)',
			height: '100px',
			cursor: 'pointer',

			'& .langArrow': {
				transform: 'rotate(180deg)',
			},
		},

		'& p': {
			fontFamily: 'Clash Grotesk',
			fontStyle: 'normal',
			fontWeight: '500',
			fontSize: '16px',
			lineHeight: '100%',
			textTransform: 'none',
			color: '#FFFFFF',
			float: 'left',
			marginLeft: '12px',
			marginTop: '4px',
		},

		'& .langArrow': {
			width: '19px',
			height: 'auto',
			color: '#FFFFFF',
			marginLeft: '4px',
			marginTop: '2px',
			float: 'left',
			transition: 'transform .7s',
		},
	},

	flagDiv: {
		width: '24px',
		height: '24px',
		float: 'left',
	},

	contactButtonDiv: {
		position: 'relative',
		float: 'left',
	},

	mainLang: {
		float: 'none',
		clear: 'both',
		width: '91px',
		margin: '0 auto',
		marginTop: '13.5px',

		opacity: '1',
		transition: '.7s',
		'&:hover': {
			opacity: '.7',
		},

		'&:before': {
			position: 'absolute',
			content: '""',
			background: 'rgba(255, 255, 255, 0.07)',
			height: '1px',
			width: '66px',
			top: '51px',
		},
	},

	secondLang: {
		float: 'none',
		clear: 'both',
		width: '91px',
		margin: '0 auto',
		paddingTop: '25.5px',

		opacity: '1',
		transition: '.7s',
		'&:hover': {
			opacity: '.7',
		},
	},

	contactButton: {
		padding: '16px 24px',
		background:
			'linear-gradient(90deg, rgba(64, 184, 83, 1) -6.52%, rgba(36, 255, 150, 1) 137.5%)',
		boxShadow: '0px 0px 0px #00000000',
		borderRadius: '10px',
		transition: 'opacity .7s',
		opacity: '1',

		'&:hover': {
			background:
				'linear-gradient(90deg, rgba(64, 184, 83, 1) -6.52%, rgba(36, 255, 150, 1) 137.5%)',
			boxShadow: '0px 0px 0px #00000000',
			opacity: '.8',
		},

		'& p': {
			fontFamily: 'Clash Grotesk',
			fontStyle: 'normal',
			fontWeight: '600',
			fontSize: '16px',
			lineHeight: '100%',
			textTransform: 'none',
			color: '#FFFFFF',
			float: 'left',
		},

		'& span': {
			color: '#FFFFFF',
		},
	},

	contactButtonIcon: {
		width: '19px',
		height: 'auto',
		color: '#FFFFFF',
		marginRight: '8px',
		marginTop: '-1px',
		float: 'left',
	},
});

export default useStyles;
