// >> Modules
import { makeStyles } from '@mui/styles';

// >> Images
import hover from '../../../public/background/hover.png';

// >> Styling
const useStyles = makeStyles({
	mainDiv: {
		width: '100%',
		position: 'relative',
		float: 'left',
		'z-index': '5',
	},

	bottomStartLine: {
		width: '100%',
		height: '183px',
		background: 'rgba(255, 255, 255, 0.05)',
		backdropFilter: 'blur(5px)',
		position: 'absolute',
		bottom: '0px',
		'z-index': '3',
	},

	insideDiv: {
		width: '1448px',
		margin: '0 auto',
		position: 'relative',
		marginTop: '120px',
		'z-index': '4',
		paddingBottom: '75px',
	},

	contactForm: {
		width: '90%',
		height: '537px',
		margin: '0 auto',
		marginTop: '80px',

		background: 'rgba(255, 255, 255, 0.05)',
		border: '1px solid rgba(255, 255, 255, 0.18)',
		backdropFilter: 'blur(5px)',
		borderRadius: '20px',
		position: 'relative',
	},

	insideContactForm: {
		width: '85%',
		margin: '0 auto',
		marginTop: '50px',
		position: 'relative',
	},

	leftSection: {
		width: '45%',
		float: 'left',
		position: 'relative',
	},

	rightSection: {
		width: '45%',
		float: 'right',
		position: 'relative',
		transform: 'rotate(172.77deg)',
	},

	panelTitle: {
		fontFamily: 'Clash Grotesk',
		fontStyle: 'normal',
		fontWeight: '600',
		fontSize: '40px',
		lineHeight: '100%',
		letterSpacing: '-0.728992px',
		color: '#ffffff',
	},

	panelDesc: {
		fontFamily: 'Readex Pro',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '13.12px',
		lineHeight: '140%',
		letterSpacing: '0.145798px',
		color: '#ffffff',
		marginTop: '12px',
	},

	formDiv: {
		width: '100%',
		position: 'relative',
		marginTop: '25px',
	},

	socialMediaDiv: {
		float: 'left',
		width: '100%',
		position: 'relative',
		marginTop: '34px',
	},

	emailDiv: {
		width: '48%',
		marginRight: '4%',
		height: '32px',
		position: 'relative',
		float: 'left',

		background: 'rgba(255, 255, 255, 0.07)',
		borderRadius: '5.83193px',

		'& input': {
			fontFamily: 'Readex Pro',
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '10.20px',
			lineHeight: '100%',
			letterSpacing: '0.145798px',
			textTransform: 'none',
			color: 'rgba(255, 255, 255, 1)',
			marginLeft: '11px',
			marginTop: '4px',
		},

		'& ::placeholder': {
			color: 'rgba(255, 255, 255, 0.8)',
		},
	},

	titleDiv: {
		width: '48%',
		height: '32px',
		position: 'relative',
		float: 'left',

		background: 'rgba(255, 255, 255, 0.07)',
		borderRadius: '5.83193px',

		'& input': {
			fontFamily: 'Readex Pro',
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '10.20px',
			lineHeight: '100%',
			letterSpacing: '0.145798px',
			textTransform: 'none',
			color: 'rgba(255, 255, 255, 1)',
			marginLeft: '11px',
			marginTop: '4px',
		},

		'& ::placeholder': {
			color: 'rgba(255, 255, 255, 0.8)',
		},
	},

	messageDiv: {
		width: '100%',
		height: '122px',
		position: 'relative',
		float: 'left',
		marginTop: '10px',

		background: 'rgba(255, 255, 255, 0.07)',
		borderRadius: '5.83193px',

		'& textarea': {
			fontFamily: 'Readex Pro',
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '10.20px',
			lineHeight: '120%',
			letterSpacing: '0.145798px',
			textTransform: 'none',
			color: 'rgba(255, 255, 255, 1)',
			marginLeft: '11px',
			marginTop: '4px',
		},

		'& ::placeholder': {
			color: 'rgba(255, 255, 255, 0.8)',
		},
	},

	buttonDiv: {
		position: 'relative',
		float: 'left',
		marginTop: '13px',

		width: '100%',
		height: '34px',
	},

	button: {
		width: '100%',
		height: '100%',
		background:
			'linear-gradient(90deg, rgba(64, 184, 83, 1) -6.52%, rgba(36, 255, 150, 1) 137.5%)',
		boxShadow: '0px 0px 0px #00000000',
		borderRadius: '5.83193px',
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
			fontSize: '11px',
			lineHeight: '100%',
			textTransform: 'none',
			color: '#FFFFFF',
			letterSpacing: '1px',
		},

		'& span': {
			color: '#FFFFFF',
		},

		'&:disabled': {
			opacity: '.6',
		},
	},

	socialMediaLine: {
		width: '100%',
		height: '1px',
		background: 'rgba(255, 255, 255, 0.1)',
	},

	socialMediaLeft: {
		width: '50%',
		float: 'left',
		marginTop: '12px',
		position: 'relative',
	},

	socialMediaRight: {
		width: '50%',
		float: 'right',
		marginTop: '20px',
		position: 'relative',
	},

	socialMediaTitle: {
		fontFamily: 'Clash Grotesk',
		fontStyle: 'normal',
		fontWeight: '700',
		fontSize: '17.5px',
		lineHeight: '100%',
		color: '#FFFFFF',
	},

	socialMediaDesc: {
		fontFamily: 'Readex Pro',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '10px',
		lineHeight: '135%',
		color: '#FFFFFF',
		letterSpacing: '0.145798px',

		marginTop: '8px',
	},

	oneSocialMedia: {
		width: '45px',
		height: '45px',
		background: 'rgba(255, 255, 255, 0.1)',
		borderRadius: '5.83193px',
		float: 'right',
		transition: 'background .5s',
		marginLeft: '12px',
		position: 'relative',

		'&:hover': {
			background: 'rgba(255, 255, 255, 0.075)',
			cursor: 'pointer',

			'& span': {
				opacity: '1',
			},
		},

		'& span': {
			opacity: '0',
			transition: 'opacity .7s',
		},
	},

	hoverText: {
		background: `url(${hover.src})`,
		backgroundSize: '100% 100%',
		height: '38px',
		width: '138px',
		position: 'absolute',
		left: '-100%',
		marginTop: '2px',
		pointerEvents: 'none',

		'& p': {
			fontFamily: 'Readex Pro',
			fontStyle: 'normal',
			fontWeight: '500',
			fontSize: '10px',
			lineHeight: '100%',
			color: '#FFFFFF',
			letterSpacing: '0.145798px',
			textAlign: 'center',
			marginTop: '17px',
		},
	},

	// <<<<<<<<<<<<<<<<<<<< Responsive scale
	// 1550px
	['@media (max-width: 1550px)']: {
		insideDiv: {
			width: '90%',
		},
	},

	// 1350px
	['@media (max-width: 1350px)']: {
		rightSection: {
			display: 'none',
		},

		leftSection: {
			width: '100%',
		},
	},

	// 900px
	['@media (max-width: 900px)']: {
		panelTitle: {
			width: '100%',
			textAlign: 'center',
		},

		panelDesc: {
			width: '100%',
			textAlign: 'center',
		},
	},

	// 630px
	['@media (max-width: 630px)']: {
		panelTitle: {
			fontSize: '30px',
		},

		panelDesc: {
			fontSize: '11px',
		},

		socialMediaLeft: {
			width: '100%',
		},

		socialMediaTitle: {
			textAlign: 'center',
			width: '100%',
		},

		socialMediaDesc: {
			textAlign: 'center',
			width: '100%',
		},

		socialMediaRight: {
			width: '171px',
			float: 'none',
			margin: '0 auto',
			marginTop: '80px',
		},

		insideContactForm: {
			marginTop: '30px',
		},
	},

	// 460px
	['@media (max-width: 460px)']: {
		insideContactForm: {
			marginTop: '10px',
		},
	},

	// 335px
	['@media (max-width: 335px)']: {
		contactForm: {
			height: '550px',
		},
	},
});

export default useStyles;
