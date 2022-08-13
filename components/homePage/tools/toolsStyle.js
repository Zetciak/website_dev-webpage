// >> Modules
import { makeStyles } from '@mui/styles';

// >> Styling
const useStyles = makeStyles({
	mainDiv: {
		width: '100%',
		height: '802px',
		position: 'relative',
		float: 'left',
		'z-index': '5',
		background: 'url(https://i.imgur.com/HGv0jYL.png)',
		backgroundSize: '100% 100%',
		marginTop: '140px',
	},

	insideDiv: {
		width: '1448px',
		margin: '0 auto',
		position: 'relative',
		marginTop: '200px',
	},

	logosDiv: {
		width: '100%',
		height: '115px',
		marginTop: '105px',
		position: 'relative',
	},

	oneLogo: {
		width: '16.66%',
		height: 'auto',
		float: 'left',
		position: 'relative',

		'& .coloredLogo': {
			opacity: '0',
			transition: 'opacity .7s',
		},

		'& .normalLogo': {
			opacity: '1',
			position: 'absolute',
			top: '0px',
			left: '0px',
			width: '100%',
			height: '100%',
			transition: 'opacity 2s',
		},

		'&:hover': {
			'& .coloredLogo': {
				opacity: '1',
				cursor: 'pointer',
			},

			'& .normalLogo': {
				opacity: '0',
			},
		},
	},
});

export default useStyles;
