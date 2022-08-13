// >> Modules
import { Typography } from '@mui/material';

// >> Styles
import useStyles from './footerStyle.js';

//Script
function Footer() {
	// >> Style
	const styles = useStyles();

	// >> Render
	return (
		<div className={styles.mainDiv}>
			<div className={styles.insideDiv}>
				<div className={styles.topLine}></div>
				<Typography className={styles.footerText}>
					© 2022 Web
					<span className={styles.footerTextGreen}>-Dev</span> All
					rights reserved
				</Typography>
			</div>
		</div>
	);
}

export default Footer;
