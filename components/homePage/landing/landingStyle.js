// >> Modules
import { makeStyles } from '@mui/styles';

// >> Images
import landingImage from '../../../public/background/landingImage.png';

// >> Styling
const useStyles = makeStyles({
	mainDiv: {
		width: '100%',
		height: '802px',
		position: 'relative',
		float: 'left',
		'z-index': '5',
		background: `url(${landingImage.src})`,
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
		width: '1448px',
		margin: '0 auto',
		position: 'relative',
		marginTop: '227px',
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
		},
	},

	// 380px
	['@media (max-width: 380px)']: {
		insideDiv: {
			marginTop: '190px',
		},
	},
});

export default useStyles;
