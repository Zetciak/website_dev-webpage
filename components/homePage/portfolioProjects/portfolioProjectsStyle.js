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

	blocksDiv: {
		width: '1180px',
		margin: '0 auto',
		position: 'relative',
		marginTop: '222px',
	},

	oneBlock: {
		width: '29%',
		height: '400px',
		border: '2px solid #32DB74',
		borderRadius: '24px',
		overflow: 'hidden',
		position: 'relative',
		marginBottom: '50px',
	},

	leftBlock: {
		float: 'left',
		marginRight: '6.5%',
	},

	centerBlock: {
		float: 'left',
		marginRight: '6.5%',
	},

	rightBlock: {
		float: 'right',
	},

	bannerDiv: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		top: '0',
		left: '0',
		//filter: 'blur(1px)',
	},

	infoDiv: {
		width: '90%',
		height: '104px',
		margin: '0 auto',
		position: 'relative',
		marginTop: '272px',
		overflow: 'hidden',

		background: 'rgba(37, 37, 37, 0.5)',
		backdropFilter: 'blur(10px)',
		borderRadius: '24px',

		transition: 'all .7s, border-radius 0s',

		'&:hover': {
			width: '100%',
			height: '100%',
			marginTop: '0px',
			paddingTop: '16px',
			borderRadius: '0px',

			transition: 'all .7s, border-radius 3s',
		},
	},

	insideInfoDiv: {
		width: '87%',
		margin: '0 auto',
		height: '100%',
		position: 'relative',
	},

	topSection: {
		paddingTop: '16px',
		width: '100%',
		position: 'relative',
	},

	logoDiv: {
		float: 'left',
		width: '72px',
		height: '72px',
		background: 'rgba(44, 234, 131, 0.05)',
		borderRadius: '20px',
		border: '1px solid #32DB74',
	},

	infosDiv: {
		float: 'left',
		marginLeft: '16px',
		width: '66%',
		position: 'relative',
	},

	projectTitleDiv: {
		fontFamily: 'Clash Grotesk',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '18px',
		lineHeight: '100%',
		letterSpacing: '0.06em',
		color: '#ffffff',
		marginTop: '4px',
	},

	startDiv: {
		marginTop: '12px',
	},

	endDiv: {
		clear: 'both',
		paddingTop: '8px',
	},

	leftDiv: {
		fontFamily: 'Readex Pro',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '13px',
		lineHeight: '100%',
		letterSpacing: '0.03em',
		color: '#ffffff',
		float: 'left',
	},

	rightDiv: {
		fontFamily: 'Readex Pro',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '13px',
		lineHeight: '100%',
		letterSpacing: '0.03em',
		color: '#ffffff',
		float: 'right',
	},

	realizationTimeDiv: {
		clear: 'both',
		float: 'left',
		marginTop: '16px',
		padding: '6px 10px',
		background: 'rgba(255, 255, 255, 0.1)',
		borderRadius: '4px',
	},

	realizationTime: {
		fontFamily: 'Readex Pro',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '12px',
		lineHeight: '100%',
		letterSpacing: '0.03em',
		color: '#ffffff',
	},

	realizationTimeBold: {
		fontWeight: '500',
	},

	projectDesc: {
		clear: 'both',
		height: '145px',
		float: 'left',
		marginTop: '16px',
		overflow: 'hidden',

		fontFamily: 'Readex Pro',
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '12px',
		lineHeight: '150%',
		color: '#DFDFDF',
	},

	buttonDiv: {
		clear: 'both',
		float: 'left',
		marginTop: '20px',

		width: '100%',
		height: '46px',
	},

	button: {
		width: '100%',
		height: '100%',
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
			fontSize: '14px',
			lineHeight: '100%',
			textTransform: 'none',
			color: '#FFFFFF',
			letterSpacing: '0.03em',
		},

		'& span': {
			color: '#FFFFFF',
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
			width: '590px',
			marginTop: '100px',
		},

		blocksDiv: {
			width: '100%',
		},

		oneBlock: {
			width: '100%',
		},

		leftBlock: {
			float: 'none',
			marginRight: '0%',
		},

		centerBlock: {
			float: 'none',
			marginRight: '0%',
		},

		rightBlock: {
			float: 'none',
		},
	},

	// 1080px
	['@media (max-width: 1080px)']: {
		blocksDiv: {
			marginTop: '100px',
		},
	},

	// 800px
	['@media (max-width: 800px)']: {
		insideDiv: {
			width: '80%',
		},
	},

	// 445px
	['@media (max-width: 445px)']: {
		leftDiv: {
			fontSize: '11px',
		},

		rightDiv: {
			fontSize: '11px',
		},

		projectTitleDiv: {
			fontSize: '14px',
		},

		infosDiv: {
			width: '60%',
		},
	},

	// 385px
	['@media (max-width: 385px)']: {
		leftDiv: {
			fontSize: '9px',
			width: '100%',
			textAlign: 'center',
		},

		rightDiv: {
			fontSize: '9px',
			width: '100%',
			textAlign: 'center',
			marginTop: '5px',
		},

		projectTitleDiv: {
			fontSize: '12px',
			width: '100%',
			textAlign: 'center',
			marginTop: '-2px',
		},

		infosDiv: {
			width: '55%',
		},
	},

	// 345px
	['@media (max-width: 345px)']: {
		leftDiv: {
			fontSize: '8px',
		},

		rightDiv: {
			fontSize: '8px',
		},

		projectTitleDiv: {
			fontSize: '11px',
		},

		infosDiv: {
			width: '50%',
		},
	},
});

export default useStyles;
