// >> Modules
import Image from 'next/image';
import { Button, Typography } from '@mui/material';
import Languages from '../../languages.js';
import { Link } from 'react-scroll';

// >> Styles
import useStyles from './ourOfferStyle.js';
import useGlobalStyles from '../../globalStyle.js';

// >> Images
import maciekFace from '../../../public/team/maciek.webp';
import bothFace from '../../../public/team/both.webp';
import codeBanner from '../../../public/background/codeBanner.png';
import figmaBanner from '../../../public/background/figmaBanner.png';

//Script
function OurOffer(props) {
	// >> Variables
	const getText = Languages[props.lang]['Offer'];

	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Render
	return (
		<div className={styles.mainDiv} id="offer">
			<div className={styles.insideDiv}>
				<h2 className={globalStyles.borderText} data-aos="zoom-in-up">
					{getText.borderTitle}
				</h2>
				<h3 className={globalStyles.mainTitle} data-aos="zoom-in-up">
					{getText.mainTitle}{' '}
					<span className={globalStyles.greenText}>
						{getText.mainTitleGreen}
					</span>
				</h3>

				<div className={styles.offerDiv}>
					<div className={styles.oneOffer} data-aos="zoom-in-up">
						<div className={styles.insideLeftOffer}>
							<div className={styles.insideInsideOffer}></div>
						</div>
						<div className={styles.offerBanner}>
							<Image
								src={figmaBanner}
								alt=""
								layout="responsive"
								objectFit="contain"
								quality={100}
								//priority={true}
							/>
						</div>
						<div className={styles.insideOffer}>
							<div className={styles.avatarDiv}>
								<div className={styles.avatarImage}>
									<Image
										src={maciekFace}
										alt=""
										layout="responsive"
										objectFit="contain"
										quality={100}
										//priority={true}
									/>
								</div>
							</div>

							<Typography className={styles.offerTitle}>
								<span className={globalStyles.greenText}>
									{getText.firstOfferTitle1}{' '}
								</span>
								<span className={styles.offerTitleWhite}>
									{getText.firstOfferTitle2}{' '}
								</span>
								<span className={globalStyles.greenText}>
									{getText.firstOfferTitle3}
								</span>
							</Typography>

							<Typography className={styles.offerDesc}>
								{getText.firstOfferDesc}
							</Typography>

							<div className={styles.priceDiv}>
								<Typography className={styles.priceLeft}>
									{getText.offerPrice}:
								</Typography>
								<Typography className={styles.priceRight}>
									{getText.firstOfferPrice}{' '}
									<span className={globalStyles.greenText}>
										{getText.offerCurrency}
									</span>
								</Typography>
							</div>
							<div className={styles.timeDiv}>
								<Typography className={styles.priceLeft}>
									{getText.offerTime}:
								</Typography>
								<Typography className={styles.priceRight}>
									{getText.firstOfferTime}{' '}
									<span className={globalStyles.greenText}>
										{getText.offerTimeDay}
									</span>
								</Typography>
							</div>
							<div className={styles.contactButtonDiv}>
								<Link to="contact">
									<Button
										variant="contained"
										className={styles.contactButton}
									>
										<Typography>
											{getText.offerContact}
										</Typography>
									</Button>
								</Link>
							</div>
						</div>
					</div>
					<div
						className={`${styles.oneOffer} ${styles.rightOffer}`}
						data-aos="zoom-in-up"
					>
						<div className={styles.insideRightOffer}>
							<div className={styles.insideInsideOffer}></div>
						</div>
						<div className={styles.offerBanner}>
							<Image
								src={codeBanner}
								alt=""
								layout="responsive"
								objectFit="contain"
								quality={100}
								//priority={true}
							/>
						</div>
						<div className={styles.insideOffer}>
							<div className={styles.avatarDiv}>
								<div className={styles.avatarImageRight}>
									<Image
										src={bothFace}
										alt=""
										layout="responsive"
										objectFit="contain"
										quality={100}
										//priority={true}
									/>
								</div>
							</div>

							<Typography className={styles.offerTitle}>
								<span className={globalStyles.greenText}>
									{getText.secondOfferTitle1}{' '}
								</span>
								<span className={styles.offerTitleWhite}>
									{getText.secondOfferTitle2}{' '}
								</span>
								<span className={globalStyles.greenText}>
									{getText.secondOfferTitle3}
								</span>
							</Typography>

							<Typography className={styles.offerDesc}>
								{getText.secondOfferDesc}
							</Typography>

							<div className={styles.priceDiv}>
								<Typography className={styles.priceLeft}>
									{getText.offerPrice}:
								</Typography>
								<Typography className={styles.priceRight}>
									{getText.secondOfferPrice}{' '}
									<span className={globalStyles.greenText}>
										{getText.offerCurrency}
									</span>
								</Typography>
							</div>
							<div className={styles.timeDiv}>
								<Typography className={styles.priceLeft}>
									{getText.offerTime}:
								</Typography>
								<Typography className={styles.priceRight}>
									{getText.secondOfferTime}{' '}
									<span className={globalStyles.greenText}>
										{getText.offerTimeDay}
									</span>
								</Typography>
							</div>
							<div className={styles.contactButtonDiv}>
								<Link to="contact">
									<Button
										variant="contained"
										className={styles.contactButton}
									>
										<Typography>
											{getText.offerContact}
										</Typography>
									</Button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default OurOffer;
