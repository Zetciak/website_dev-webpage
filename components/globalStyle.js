// >> Modules
import { makeStyles } from '@mui/styles';

// >> Styling
const useGlobalStyles = makeStyles({
	container: {
		width: '100%',
		//minHeight: '3500px',
		position: 'relative',
		overflow: 'hidden',
		//background: '#272727',
		background: 'url(https://i.imgur.com/rDrCN72.png)',
	},

	pageLoader: {
		width: '100%',
		height: '100%',
		position: 'fixed',
		background: '#000000aa',
		'z-index': '6',
		top: '0',
		left: '0',
		pointerEvents: 'none',
	},

	pageLoaderTransition: {
		transition: 'opacity .7s',
	},

	loading: {
		position: 'fixed',
		width: '160px',
		height: 'auto',
		left: '50%',
		top: '50%',
		transform: 'translate(-50%,-50%)',
	},

	borderText: {
		width: '910px',
		margin: '0 auto',
		textAlign: 'center',
		position: 'relative',

		// Font
		fontFamily: 'Clash Grotesk',
		fontStyle: 'normal',
		fontWeight: '700',
		fontSize: '32px',
		lineHeight: '39px',
		letterSpacing: '.675em',

		// Color
		color: '#282828',
		background:
			'linear-gradient(90deg, rgba(54,227,131,1) 0%, rgba(54,227,82,1) 50%, rgba(54,227,131,1) 100%)',
		'-webkit-background-clip': 'text',
		'-webkit-text-stroke': '2.5px transparent',
		backgroundSize: '50%',
		animation: '$gradient 5s linear infinite',
	},

	'@keyframes gradient': {
		'0%': {
			backgroundPosition: '0%',
		},
		'50%': {
			backgroundPosition: '100%',
		},
		'100%': {
			backgroundPosition: '0%',
		},
	},

	mainTitle: {
		width: '1060px',
		margin: '0 auto',
		textAlign: 'center',
		position: 'relative',

		// Font
		fontFamily: 'Clash Grotesk',
		fontStyle: 'normal',
		fontWeight: '600',
		fontSize: '94px',
		lineHeight: '115%',

		// Color
		color: '#eeeeee',
	},

	greenText: {
		// Color
		color: '#282828',
		background:
			'linear-gradient(90deg, rgba(54,227,131,1) 0%, rgba(54,227,82,1) 50%, rgba(54,227,131,1) 100%)',
		'-webkit-background-clip': 'text',
		'-webkit-text-fill-color': 'transparent',
		backgroundSize: '200%',
		animation: '$gradient 5s linear infinite',
	},

	mainDesc: {
		width: '910px',
		margin: '0 auto',
		textAlign: 'center',
		position: 'relative',
		marginTop: '16px',

		// Font
		fontFamily: 'Readex Pro',
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '18px',
		lineHeight: '125%',

		// Color
		color: '#DFDFDF',
	},

	// <<<<<<<<<<<<<<<<<<<< Responsive scale
	// 1550px
	['@media (max-width: 1550px)']: {
		borderText: {
			width: '100%',
		},

		mainTitle: {
			width: '100%',
		},

		mainDesc: {
			width: '90%',
		},
	},

	// 1050px
	['@media (max-width: 1050px)']: {
		mainDesc: {
			width: '100%',
		},

		borderText: {
			fontSize: '28px',
			lineHeight: '125%',
		},

		mainTitle: {
			fontSize: '74px',
			lineHeight: '105%',
		},
	},

	// 620px
	['@media (max-width: 620px)']: {
		borderText: {
			fontSize: '22px',
			lineHeight: '125%',
		},

		mainTitle: {
			fontSize: '64px',
			lineHeight: '105%',
		},

		mainDesc: {
			fontWeight: '300',
			fontSize: '16px',
		},
	},

	// 550px
	['@media (max-width: 550px)']: {
		borderText: {
			fontSize: '22px',
			lineHeight: '125%',
		},

		mainTitle: {
			fontSize: '54px',
			lineHeight: '105%',
			marginTop: '15px',
		},

		mainDesc: {
			fontWeight: '300',
			fontSize: '16px',
			marginTop: '15px',
		},
	},

	// 435px
	['@media (max-width: 435px)']: {
		borderText: {
			fontSize: '20px',
			lineHeight: '125%',
		},

		mainTitle: {
			fontSize: '48px',
			lineHeight: '100%',
			marginTop: '8px',
		},

		mainDesc: {
			fontWeight: '300',
			fontSize: '15px',
			marginTop: '8px',
		},
	},

	// 380px
	['@media (max-width: 380px)']: {
		borderText: {
			fontSize: '20px',
			lineHeight: '125%',
		},

		mainTitle: {
			fontSize: '40px',
			lineHeight: '100%',
			marginTop: '8px',
		},

		mainDesc: {
			fontWeight: '300',
			fontSize: '15px',
			marginTop: '8px',
		},
	},
});

export default useGlobalStyles;
