// >> Modules
import Image from 'next/image';
import { Typography } from '@mui/material';
import Languages from '../../languages.js';

// >> Styles
import useStyles from './ourTeamStyle.js';
import useGlobalStyles from '../../globalStyle.js';

// >> Images
import maciekFace from '../../../public/team/maciek.webp';
import marcelFace from '../../../public/team/marcel.webp';
import grayTwitter from '../../../public/icons/grayTwitter.svg';

//Script
function OurTeam(props) {
	// >> Variables
	const getText = Languages[props.lang]['Team'];

	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Render
	return (
		<div className={styles.mainDiv} id="team">
			<div className={styles.insideDiv}>
				<Typography className={globalStyles.borderText}>
					{getText.borderTitle}
				</Typography>
				<Typography className={globalStyles.mainTitle}>
					{getText.mainTitle}{' '}
					<span className={globalStyles.greenText}>
						{getText.mainTitleGreen}
					</span>
				</Typography>

				<div className={styles.teamSection}>
					<div className={styles.maciekDiv}>
						<div className={styles.insideMaciekDiv}></div>
						<div className={styles.faceDiv}>
							<div className={styles.faceImage}>
								<Image
									src={maciekFace}
									alt=""
									layout="responsive"
									objectFit="contain"
									quality={100}
									priority={true}
								/>
							</div>
						</div>
						<div className={styles.textsDiv}>
							<Typography
								className={`${styles.roleText} ${globalStyles.greenText}`}
							>
								{getText.maciekRole}
							</Typography>
							<div className={styles.nameText}>
								{getText.maciekName}
							</div>
							<a
								className={styles.twitterDiv}
								href="https://twitter.com/47maciek47"
								target="_blank"
								rel="noreferrer"
							>
								<Image
									src={grayTwitter}
									alt=""
									layout="responsive"
									objectFit="contain"
									quality={100}
									priority={true}
								/>
							</a>
							<Typography className={styles.descText}>
								{getText.maciekDesc}
							</Typography>
						</div>
					</div>
					<div className={styles.marcelDiv}>
						<div className={styles.insideMarcelDiv}></div>
						<div className={styles.faceDiv}>
							<div className={styles.faceImage}>
								<Image
									src={marcelFace}
									alt=""
									layout="responsive"
									objectFit="contain"
									quality={100}
									priority={true}
								/>
							</div>
						</div>
						<div className={styles.textsDiv}>
							<Typography
								className={`${styles.roleText} ${globalStyles.greenText}`}
							>
								{getText.marcelRole}
							</Typography>
							<div className={styles.nameText}>
								{getText.marcelName}
							</div>
							<a
								className={styles.twitterDiv}
								href="https://twitter.com/Zetciak"
								target="_blank"
								rel="noreferrer"
							>
								<Image
									src={grayTwitter}
									alt=""
									layout="responsive"
									objectFit="contain"
									quality={100}
									priority={true}
								/>
							</a>
							<Typography className={styles.descText}>
								{getText.marcelDesc}
							</Typography>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default OurTeam;
