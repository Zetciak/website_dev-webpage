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
		width: '1180px',
		margin: '0 auto',
		position: 'relative',
		marginTop: '50px',
	},

	oneOffer: {
		width: '30%',
		height: '195px',
		position: 'relative',
		background:
			'linear-gradient(90deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.3) 100%)',

		'&:before': {
			position: 'absolute',
			content: '""',
			background:
				'linear-gradient(90deg, #40B853 -6.52%, #24FF96 137.5%)',
			opacity: '.1',
			width: '100%',
			height: '100%',
		},
		marginTop: '50px',
	},

	leftOffer: {
		float: 'left',
		marginRight: '5%',
	},

	centerOffer: {
		float: 'left',
	},

	rightOffer: {
		float: 'right',
	},

	leftRight: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		left: '-10%',

		'&:before': {
			position: 'absolute',
			content: '""',
			background:
				'linear-gradient(90deg, rgba(33, 35, 34, 0) 0%, #33D972 51.04%, rgba(33, 35, 34, 0) 100%)',
			width: '120%',
			height: '2px',
		},

		'&:after': {
			position: 'absolute',
			content: '""',
			background:
				'linear-gradient(90deg, rgba(33, 35, 34, 0) 0%, #33D972 51.04%, rgba(33, 35, 34, 0) 100%)',
			width: '120%',
			height: '2px',
			bottom: '0px',
		},
	},

	topBottom: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		top: '-10%',

		'&:before': {
			position: 'absolute',
			content: '""',
			background:
				'linear-gradient(0deg, rgba(33, 35, 34, 0) 0%, #33D972 51.04%, rgba(33, 35, 34, 0) 100%)',
			width: '2px',
			height: '120%',
			left: '0px',
		},

		'&:after': {
			position: 'absolute',
			content: '""',
			background:
				'linear-gradient(0deg, rgba(33, 35, 34, 0) 0%, #33D972 51.04%, rgba(33, 35, 34, 0) 100%)',
			width: '2px',
			height: '120%',
			right: '0px',
		},
	},

	topOfferSection: {
		width: '88%',
		margin: '0 auto',
		position: 'relative',
		marginTop: '15px',
	},

	faceDiv: {
		float: 'left',
		position: 'relative',
		width: '80px',
		height: '80px',
		border: '2px solid #32DB74',
		background: '#1C2B20',
		borderRadius: '100%',
	},

	faceDivImage: {
		position: 'relative',
		width: '95%',
		marginLeft: '5px',
		marginTop: '3px',
	},

	titlesDiv: {
		position: 'relative',
		marginTop: '25px',
		marginLeft: '14px',
		float: 'left',
	},

	mainTitleText: {
		fontFamily: 'Clash Grotesk',
		fontStyle: 'normal',
		fontWeight: '700',
		fontSize: '17.4958px',
		lineHeight: '100%',
		letterSpacing: '1px',
		color: 'rgba(255, 255, 255, 0.88)',
	},

	mainTitleDesc: {
		fontFamily: 'Readex Pro',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '14px',
		lineHeight: '100%',
		letterSpacing: '0.24226px',
		color: '#DFDFDF',
		marginTop: '5px',
	},

	bottomOfferSection: {
		clear: 'both',
		width: '88%',
		margin: '0 auto',
		position: 'relative',
		paddingTop: '11px',
	},

	offerDesc: {
		fontFamily: 'Readex Pro',
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '11.5px',
		lineHeight: '14px',
		color: '#DFDFDF',
		height: '44px',
	},

	bottomPrices: {
		marginTop: '11px',
	},

	priceLeft: {
		fontFamily: 'Readex Pro',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '15px',
		lineHeight: '100%',
		letterSpacing: '0.24226px',
		color: '#FFFFFF',
		float: 'left',
	},

	priceRight: {
		fontFamily: 'Readex Pro',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '15px',
		lineHeight: '100%',
		letterSpacing: '0.179896px',
		color: '#FFFFFF',
		float: 'right',
	},
});

export default useStyles;
