// >> Modules
import { makeStyles } from '@mui/styles';

// >> Styling
const useStyles = makeStyles({
	mainDiv: {
		width: '100vw',
		height: '100vh',
		position: 'relative',
		float: 'left',
		'z-index': '5',
		background: 'url(https://i.imgur.com/HGv0jYL.png)',
		backgroundSize: '100% 100%',
	},

	particlesDiv: {
		width: '100%',
		height: '100%',
		position: 'absolute',
		top: '0',
		overflow: 'hidden',
	},

	insideDiv: {
		width: '100%',
		margin: '0 auto',
		position: 'relative',
		marginTop: '33vh',
	},
});

export default useStyles;
