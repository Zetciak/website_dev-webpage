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
		width: '1448px',
		margin: '0 auto',
		position: 'relative',
		marginTop: '100px',
	},

	faqPoints: {
		width: '1180px',
		margin: '0 auto',
		marginTop: '80px',
		//minHeight: '500px',
		position: 'relative',
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

	borderTop: {
		position: 'absolute',
		width: '100%',
		height: '100%',

		'&:before': {
			position: 'absolute',
			content: '""',
			background:
				'linear-gradient(90deg, rgba(33, 35, 34, 0) 0%, #33D972 51.04%, rgba(33, 35, 34, 0) 100%)',
			width: '120%',
			height: '2px',
			left: '-10%',
			top: '0px',
		},

		'&:after': {
			position: 'absolute',
			content: '""',
			background:
				'linear-gradient(90deg, rgba(33, 35, 34, 0) 0%, #33D972 51.04%, rgba(33, 35, 34, 0) 100%)',
			width: '120%',
			height: '2px',
			left: '-10%',
			bottom: '0px',
		},
	},

	borderLeft: {
		position: 'absolute',
		width: '100%',
		height: '100%',

		'&:before': {
			position: 'absolute',
			content: '""',
			background:
				'linear-gradient(0deg, rgba(33, 35, 34, 0) 0%, #33D972 51.04%, rgba(33, 35, 34, 0) 100%)',
			width: '2px',
			height: '120%',
			left: '0px',
			top: '-10%',
		},

		'&:after': {
			position: 'absolute',
			content: '""',
			background:
				'linear-gradient(0deg, rgba(33, 35, 34, 0) 0%, #33D972 51.04%, rgba(33, 35, 34, 0) 100%)',
			width: '2px',
			height: '120%',
			right: '0px',
			top: '-10%',
		},
	},

	faqPointsInside: {
		width: '92%',
		margin: '0 auto',
		paddingTop: '10px',
		paddingBottom: '15px',
		position: 'relative',
	},

	oneAccordion: {
		minHeight: '80px',
		paddingTop: '15px',
		paddingBottom: '10px',
		position: 'relative',

		'&:before': {
			position: 'absolute',
			content: '""',
			background: '#FFFFFF',
			opacity: '0.1',
			width: '100%',
			height: '1px',
			left: '0px',
			top: '0px',
		},

		'&:first-child': {
			'&:before': {
				opacity: '0',
			},
		},
	},

	accordionTitle: {
		fontFamily: 'Clash Grotesk',
		fontStyle: 'normal',
		fontWeight: '600',
		fontSize: '27px',
		lineHeight: '120%',
		color: '#ffffff',
		transition: 'color .5s',
		marginLeft: '-15px',
	},

	accordionTitleExpanded: {
		color: '#32DB74',
	},

	accordionDesc: {
		fontFamily: 'Readex Pro',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '14px',
		lineHeight: '120%',
		color: '#ffffff',

		marginLeft: '-15px',
	},

	expandButton: {
		width: '21px',
		height: '3px',
		background: '#FFFFFF',
		transition: 'background .5s',

		'&:before': {
			position: 'absolute',
			content: '""',
			background: '#FFFFFF',
			width: '3px',
			height: '21px',
			left: '9px',
			top: '-9px',
			opacity: '1',
			transition: 'background .5s',
		},
	},

	expandButtonExpanded: {
		background: '#32DB74',

		'&:before': {
			opacity: '0',
			background: '#32DB74',
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

		faqPoints: {
			width: '100%',
		},
	},

	// 750px
	['@media (max-width: 750px)']: {
		accordionTitle: {
			fontSize: '22px',
		},

		accordionDesc: {
			fontSize: '14px',
		},
	},

	// 520px
	['@media (max-width: 520px)']: {
		accordionTitle: {
			fontSize: '20px',
		},

		accordionDesc: {
			fontSize: '12px',
		},
	},
});

export default useStyles;
