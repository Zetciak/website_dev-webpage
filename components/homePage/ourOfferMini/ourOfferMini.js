// >> Modules
import Image from 'next/image';
import { Typography } from '@mui/material';
import Languages from '../../languages.js';
import { useEffect, useState } from 'react';

// >> Styles
import useStyles from './ourOfferMiniStyle.js';
import useGlobalStyles from '../../globalStyle.js';

// >> Images
import maciekFace from '../../../public/team/maciek.webp';
import marcelFace from '../../../public/team/marcel.webp';

// >> Variables
let offers = [
	{
		who: 'marcel',
		title: 'marcel_1month',
	},
	{
		who: 'marcel',
		title: 'marcel_changes',
	},
	{
		who: 'marcel',
		title: 'marcel_languages',
	},
	{
		who: 'marcel',
		title: 'marcel_domain',
	},
	{
		who: 'marcel',
		title: 'marcel_podstrony',
	},
	{
		who: 'maciek',
		title: 'maciek_socialmedia',
	},
	{
		who: 'maciek',
		title: 'maciek_branding',
	},
	{
		who: 'maciek',
		title: 'maciek_ulotki',
	},
	{
		who: 'maciek',
		title: 'maciek_grafiki',
	},
];

//Script
function OurOfferMini(props) {
	// >> Variables
	const getText = Languages[props.lang]['OfferMini'];
	const [drawedOffers, setDrawedOffers] = useState([]);

	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Functions
	useEffect(() => {
		let drawOffers = [];
		let countSide = 0;
		offers.map((element, index) => {
			countSide = countSide + 1;
			if (countSide > 3) {
				countSide = countSide - 3;
			}
			drawOffers.push(
				<div
					key={index}
					className={
						countSide === 1
							? `${styles.oneOffer} ${styles.leftOffer}`
							: countSide === 2
							? `${styles.oneOffer} ${styles.centerOffer}`
							: `${styles.oneOffer} ${styles.rightOffer}`
					}
					data-aos="zoom-in-up"
				>
					<div className={styles.leftRight}></div>
					<div className={styles.topBottom}></div>
					<div className={styles.topOfferSection}>
						<div className={styles.faceTop}></div>
						<div className={styles.faceDiv}>
							<div className={styles.faceDivImage}>
								<Image
									src={
										element.who === 'marcel'
											? marcelFace
											: maciekFace
									}
									alt=""
									layout="responsive"
									objectFit="contain"
									quality={100}
									//priority={true}
								/>
							</div>
						</div>
						<div className={styles.titlesDiv}>
							<Typography className={styles.mainTitleText}>
								{getText[`${element.title}-title`]}{' '}
								<span className={globalStyles.greenText}>
									{getText[`${element.title}-title-green`]}
								</span>
							</Typography>
							<Typography className={styles.mainTitleDesc}>
								{element.who === 'marcel'
									? getText.devOffer
									: getText.uxOffer}
							</Typography>
						</div>
					</div>
					<div className={styles.bottomOfferSection}>
						<Typography className={styles.offerDesc}>
							{getText[`${element.title}-desc`]}
						</Typography>
						<div className={styles.bottomPrices}>
							<Typography className={styles.priceLeft}>
								{getText.price}:
							</Typography>
							<Typography className={styles.priceRight}>
								{getText[`${element.title}-price`]}{' '}
								<span className={globalStyles.greenText}>
									{getText.priceCurrency}
								</span>
							</Typography>
						</div>
					</div>
				</div>
			);
		});

		setDrawedOffers(drawOffers);
	}, [styles, globalStyles, getText]);

	// >> Render
	return (
		<div className={styles.mainDiv} id="offer">
			<div className={styles.insideDiv}>{drawedOffers}</div>
		</div>
	);
}

export default OurOfferMini;
