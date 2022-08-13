// >> Modules
import { makeStyles } from '@mui/styles';

// >> Styling
const useStyles = makeStyles({
	mainDiv: {
		width: '100%',
		height: '125px',
		position: 'relative',
		float: 'left',
		'z-index': '5',
		marginTop: '-30px',
	},

	lineDiv: {
		width: '120%',
		height: '100%',
		position: 'relative',
		left: '-50px',
		background:
			'linear-gradient(90deg, rgba(54,227,131,1) 0%, rgba(54,227,82,1) 50%, rgba(54,227,131,1) 100%)',
		transform: 'rotate(4.75deg)',

		backgroundSize: '50%',
		animation: '$gradient 5s linear infinite',
	},

	lineDiv2: {
		transform: 'rotate(-4.75deg)',
		marginTop: '100px',
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

	circleButtonDiv: {
		width: '74px',
		height: '74px',
		margin: '0 auto',
		position: 'relative',
	},

	circleButton: {
		width: '100%',
		height: '100%',
		background: '#242424',
		boxShadow: '0px 0px 0px #00000000',
		border: '1px solid #32DB74',
		transition: 'background .7s',
		marginTop: '-50px',

		'&:hover': {
			background: '#2f2f2f',
			boxShadow: '0px 0px 0px #00000000',
		},

		'& span': {
			color: '#FFFFFF',
		},
	},

	circleButton2: {
		width: '100%',
		height: '100%',
		background: '#242424',
		boxShadow: '0px 0px 0px #00000000',
		border: '1px solid #32DB74',
		transition: 'background .7s',
		marginTop: '-30px',

		'&:hover': {
			background: '#2f2f2f',
			boxShadow: '0px 0px 0px #00000000',
		},

		'& span': {
			color: '#FFFFFF',
		},
	},

	circleButtonArrow: {
		width: '24px',
		height: 'auto',
		color: '#ffffff',
	},
});

export default useStyles;
