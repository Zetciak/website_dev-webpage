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
});

export default useGlobalStyles;
