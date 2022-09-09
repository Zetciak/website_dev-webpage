// >> Modules
import Image from 'next/image';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-scroll';
import Languages from '../../languages.js';

// >> Styles
import useStyles from './navBarStyle.js';

// >> Images
import textLogo from '../../../public/textLogo.svg';
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

//Script
function Landing(props) {
	// >> Variables
	const getText = Languages[props.lang]['Navigation'];
	let mainLang;
	let secondLang;
	if (props.lang === 'PL') {
		mainLang = Languages['PL']['Main'];
		secondLang = Languages['ENG']['Main'];
	} else {
		mainLang = Languages['ENG']['Main'];
		secondLang = Languages['PL']['Main'];
	}

	// >> Style
	const styles = useStyles();

	// >> Render
	return (
		<div className={styles.mainDiv} data-aos="fade-down">
			<div className={styles.insideDiv}>
				<div className={styles.leftDiv}>
					<a href=".">
						<Image
							src={textLogo}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							//priority={true}
						/>
					</a>
				</div>
				<div className={styles.centerDiv}>
					<Typography className={styles.oneNavigationElement}>
						<Link to="start">{getText.start}</Link>
					</Typography>
					<Typography className={styles.oneNavigationElement}>
						<Link to="team">{getText.team}</Link>
					</Typography>
					<Typography className={styles.oneNavigationElement}>
						<Link to="offer">{getText.offer}</Link>
					</Typography>
					<Typography className={styles.oneNavigationElement}>
						<Link to="portfolio">{getText.portfolio}</Link>
					</Typography>
					<Typography className={styles.oneNavigationElement}>
						<Link to="tools">{getText.tools}</Link>
					</Typography>
				</div>
				<div className={styles.rightDiv}>
					<div className={styles.languageButtonDiv}>
						<div className={styles.mainLang}>
							<div className={styles.flagDiv}>
								<Image
									src={mainLang.flag}
									alt=""
									layout="responsive"
									objectFit="contain"
									quality={100}
									//priority={true}
								/>
							</div>
							<Typography className={styles.langName}>
								{mainLang.name}
							</Typography>
							<KeyboardArrowDownRoundedIcon className="langArrow" />
						</div>
						<div
							className={styles.secondLang}
							onClick={() => {
								props.setOtherLang(secondLang.name);
							}}
						>
							<div className={styles.flagDiv}>
								<Image
									src={secondLang.flag}
									alt=""
									layout="responsive"
									objectFit="contain"
									quality={100}
									//priority={true}
								/>
							</div>
							<Typography className={styles.langName}>
								{secondLang.name}
							</Typography>
						</div>
					</div>
					<div className={styles.contactButtonDiv}>
						<Link to="contact">
							<Button
								variant="contained"
								className={styles.contactButton}
							>
								<Typography>
									<LocalPostOfficeOutlinedIcon
										className={styles.contactButtonIcon}
									/>
									{getText.contact}
								</Typography>
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Landing;
