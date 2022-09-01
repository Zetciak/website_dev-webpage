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

	offerDiv: {
		width: '1180px',
		height: '604px',
		margin: '0 auto',
		position: 'relative',
		marginTop: '130px',
	},

	oneOffer: {
		width: '47%',
		height: '100%',
		position: 'relative',
		float: 'left',

		background:
			'linear-gradient(90deg, rgba(0, 0, 0, 0.46) 0%, rgba(0, 0, 0, 0) 100%)',

		'&:before': {
			position: 'absolute',
			content: '""',
			background:
				'linear-gradient(90deg, rgba(64, 184, 83, 1) -6.52%, rgba(36, 255, 150, 1) 137.5%)',
			opacity: '.1',
			width: '100%',
			height: '100%',
		},
	},

	rightOffer: {
		float: 'right',

		background:
			'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.46) 100%)',

		'&:before': {
			position: 'absolute',
			content: '""',
			background:
				'linear-gradient(90deg, rgba(64, 184, 83, 1) -6.52%, rgba(36, 255, 150, 1) 137.5%)',
			opacity: '.1',
			width: '100%',
			height: '100%',
		},
	},

	insideLeftOffer: {
		width: '100%',
		height: '100%',
		position: 'absolute',

		'&:before': {
			position: 'absolute',
			content: '""',
			background:
				'linear-gradient(90deg, rgba(33, 35, 34, 0.25) 0%, #33D972 51.04%, #212322 100%)',
			'z-index': '1',
			width: '720px',
			height: '2px',
			top: '0px',
			left: '-130px',
		},

		'&:after': {
			position: 'absolute',
			content: '""',
			background:
				'linear-gradient(90deg, rgba(33, 35, 34, 0.25) 0%, #33D972 51.04%, #212322 100%)',
			'z-index': '1',
			width: '720px',
			height: '2px',
			bottom: '0px',
			left: '-130px',
		},
	},

	insideRightOffer: {
		width: '100%',
		height: '100%',
		position: 'absolute',

		'&:before': {
			position: 'absolute',
			content: '""',
			background:
				'linear-gradient(90deg, rgba(33, 35, 34, 0.25) 0%, #33D972 51.04%, #212322 100%)',
			'z-index': '1',
			width: '720px',
			height: '2px',
			top: '0px',
			right: '-130px',
		},

		'&:after': {
			position: 'absolute',
			content: '""',
			background:
				'linear-gradient(90deg, rgba(33, 35, 34, 0.25) 0%, #33D972 51.04%, #212322 100%)',
			'z-index': '1',
			width: '720px',
			height: '2px',
			bottom: '0px',
			right: '-130px',
		},
	},

	insideInsideOffer: {
		width: '100%',
		height: '100%',
		position: 'absolute',

		'&:before': {
			position: 'absolute',
			content: '""',
			background:
				'linear-gradient(90deg, rgba(33, 35, 34, 0.25) 0%, #33D972 51.04%, #212322 100%)',
			'z-index': '1',
			width: '694px',
			height: '2px',
			top: '300px',
			left: '-346px',
			transform: 'rotate(90deg)',
		},

		'&:after': {
			position: 'absolute',
			content: '""',
			background:
				'linear-gradient(90deg, rgba(33, 35, 34, 0.25) 0%, #33D972 51.04%, #212322 100%)',
			'z-index': '1',
			width: '694px',
			height: '2px',
			top: '300px',
			right: '-346px',
			transform: 'rotate(90deg)',
		},
	},

	offerBanner: {
		width: '100%',
		height: '193px',
		position: 'relative',
	},

	insideOffer: {
		width: '82%',
		margin: '0 auto',
		position: 'relative',
	},

	avatarDiv: {
		width: '170px',
		height: '170px',
		position: 'relative',
		border: '4px solid #32DB74',
		background: '#1C2B20',
		borderRadius: '100%',
		marginTop: '-66px',
		float: 'left',
	},

	avatarImage: {
		width: '85%',
		height: '85%',
		marginLeft: '20px',
		marginTop: '15px',
	},

	avatarImageRight: {
		width: '85%',
		height: '85%',
		marginLeft: '15px',
		marginTop: '15px',
	},

	offerTitle: {
		float: 'left',
		width: '260px',
		marginTop: '22px',
		marginLeft: '22px',

		fontFamily: 'Clash Grotesk',
		fontStyle: 'normal',
		fontWeight: '600',
		fontSize: '22px',
		lineHeight: '120%',
	},

	offerTitleWhite: {
		fontWeight: '400',
		color: '#ffffff',
	},

	offerDesc: {
		clear: 'both',
		paddingTop: '22px',

		fontFamily: 'Readex Pro',
		fontStyle: 'normal',
		fontWeight: '200',
		fontSize: '14px',
		lineHeight: '140%',
		color: '#DFDFDF',
		minHeight: '90px',
	},

	priceDiv: {
		marginTop: '29px',
	},

	priceLeft: {
		float: 'left',

		fontFamily: 'Readex Pro',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '17px',
		lineHeight: '100%',
		letterSpacing: '0.24226px',
		color: '#ffffff',
	},

	priceRight: {
		float: 'right',

		fontFamily: 'Readex Pro',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '17px',
		lineHeight: '100%',
		letterSpacing: '0.24226px',
		color: '#ffffff',
	},

	timeDiv: {
		clear: 'both',
		paddingTop: '16px',
	},

	contactButtonDiv: {
		position: 'relative',
		width: '100%',
		height: '46px',
		marginTop: '65px',
	},

	contactButton: {
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
			fontSize: '16px',
			lineHeight: '100%',
			textTransform: 'none',
			color: '#FFFFFF',
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
			width: '90%',
			marginTop: '100px',
		},

		offerDiv: {
			width: '590px',
			marginTop: '100px',
		},

		oneOffer: {
			width: '100%',
			height: '100%',
			marginTop: '50px',

			'&:first-child': {
				marginTop: '0px',
			},
		},

		insideLeftOffer: {
			'&:before': {
				width: '140%',
				left: '-20%',
				background:
					'linear-gradient(90deg, rgba(33, 35, 34, 0) 0%, #33D972 51.04%, rgba(33, 35, 34, 0) 100%)',
			},

			'&:after': {
				width: '140%',
				left: '-20%',
				background:
					'linear-gradient(90deg, rgba(33, 35, 34, 0) 0%, #33D972 51.04%, rgba(33, 35, 34, 0) 100%)',
			},
		},

		insideRightOffer: {
			'&:before': {
				width: '140%',
				left: '-20%',
				background:
					'linear-gradient(90deg, rgba(33, 35, 34, 0) 0%, #33D972 51.04%, rgba(33, 35, 34, 0) 100%)',
			},

			'&:after': {
				width: '140%',
				left: '-20%',
				background:
					'linear-gradient(90deg, rgba(33, 35, 34, 0) 0%, #33D972 51.04%, rgba(33, 35, 34, 0) 100%)',
			},
		},

		insideInsideOffer: {
			'&:before': {
				background:
					'linear-gradient(0deg, rgba(33, 35, 34, 0) 0%, #33D972 51.04%, rgba(33, 35, 34, 0) 100%)',
				width: '2px',
				height: '120%',
				top: '-10%',
				left: '0px',
				transform: 'rotate(0deg)',
			},

			'&:after': {
				background:
					'linear-gradient(0deg, rgba(33, 35, 34, 0) 0%, #33D972 51.04%, rgba(33, 35, 34, 0) 100%)',
				width: '2px',
				height: '120%',
				top: '-10%',
				right: '0px',
				transform: 'rotate(0deg)',
			},
		},
	},

	// 800px
	['@media (max-width: 800px)']: {
		insideDiv: {
			width: '80%',
		},

		offerDiv: {
			width: '100%',
		},
	},

	// 730px
	['@media (max-width: 730px)']: {
		offerDiv: {
			height: 'auto',
		},

		contactButtonDiv: {
			marginBottom: '30px',
		},

		avatarDiv: {
			margin: '0 auto',
			marginTop: '-86px',
			float: 'none',
		},

		offerTitle: {
			float: 'none',
			width: '100%',
			margin: '0 auto',
			marginTop: '22px',
			textAlign: 'center',
		},

		offerDesc: {
			float: 'none',
			width: '100%',
			margin: '0 auto',
			paddingTop: '22px',
			textAlign: 'center',
		},
	},

	// 600px
	['@media (max-width: 600px)']: {
		avatarDiv: {
			marginTop: '-136px',
		},
	},

	// 480px
	['@media (max-width: 480px)']: {
		avatarDiv: {
			width: '120px',
			height: '120px',
		},

		avatarImage: {
			marginLeft: '15px',
			marginTop: '10px',
		},

		avatarImageRight: {
			marginLeft: '10px',
			marginTop: '10px',
		},
	},
});

export default useStyles;
