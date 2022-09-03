// >> Modules
import { IconButton } from '@mui/material';
import { Link } from 'react-scroll';

// >> Images
import SouthRoundedIcon from '@mui/icons-material/SouthRounded';

// >> Styles
import useStyles from './rotateLineStyle.js';

//Script
function RotateLine(props) {
	// >> Style
	const styles = useStyles();

	// >> Render
	return (
		<div className={styles.mainDiv} data-aos="fade-up">
			<div
				className={
					props.side === '1'
						? `${styles.lineDiv}`
						: `${styles.lineDiv} ${styles.lineDiv2}`
				}
			></div>
			<div className={styles.circleButtonDiv}>
				<Link to={props.side === '1' ? 'team' : 'tools'}>
					<IconButton
						className={
							props.side === '1'
								? `${styles.circleButton}`
								: `${styles.circleButton} ${styles.circleButton2}`
						}
					>
						<SouthRoundedIcon
							className={styles.circleButtonArrow}
						/>
					</IconButton>
				</Link>
			</div>
		</div>
	);
}

export default RotateLine;
