// >> Modules
import { makeStyles } from '@mui/styles';

// >> Styling
const useStyles = makeStyles({
	mainDiv: {
		width: '100%',
		position: 'relative',
		float: 'left',
		'z-index': '5',
		background: 'rgba(255, 255, 255, 0.05)',
		backdropFilter: 'blur(5px)',
	},

	insideDiv: {
		width: '1448px',
		margin: '0 auto',
		position: 'relative',
		marginTop: '0px',
		'z-index': '4',
		paddingBottom: '8px',
	},

	topLine: {
		width: '100%',
		height: '1px',
		background: 'rgba(255, 255, 255, 0.2)',
	},

	footerText: {
		width: '100%',
		height: '40px',
		textAlign: 'center',
		marginTop: '32px',

		fontFamily: 'Readex Pro',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '16px',
		lineHeight: '100%',
		letterSpacing: '0.2px',
		color: '#FFFFFF',
	},

	footerTextGreen: {
		color: '#32DB74',
	},
});

export default useStyles;
