// >> Modules
import Image from 'next/image';
import { Button, Typography } from '@mui/material';
import Languages from '../../languages.js';

// >> Styles
import useStyles from './portfolioProjectsStyle.js';
import useGlobalStyles from '../../globalStyle.js';

// >> Images
import co2ItLogo from '../../../public/projects/co2ItLogo.png';
import co2ItBanner from '../../../public/projects/co2ItBanner.png';
import cosmoBandLogo from '../../../public/projects/cosmoBandLogo.png';
import cosmoBandBanner from '../../../public/projects/cosmoBandBanner.png';
import crappoLogo from '../../../public/projects/crappoLogo.png';
import crappoBanner from '../../../public/projects/crappoBanner.png';
import fooLogo from '../../../public/projects/fooLogo.png';
import fooBanner from '../../../public/projects/fooBanner.png';
import loopyLogo from '../../../public/projects/loopyLogo.png';
import loopyBanner from '../../../public/projects/loopyBanner.png';
import nftBlueprintLogo from '../../../public/projects/nftBlueprintLogo.png';
import nftBlueprintBanner from '../../../public/projects/nftBlueprintBanner.png';
import omniteLogo from '../../../public/projects/omniteLogo.png';
import omniteBanner from '../../../public/projects/omniteBanner.png';

// >> Variables
let projects = [
	{
		name: 'CO2it',
		start: '23.07.2022',
		end: '30.07.2022',
		time: 7,
		logo: co2ItLogo,
		banner: co2ItBanner,
		type: 'web',
		link: 'https://zetty-co2it.vercel.app/',
		float: 'left',
	},
	{
		name: 'Loopy Loris Tribe',
		start: '10.06.2022',
		end: '20.06.2022',
		time: 10,
		logo: loopyLogo,
		banner: loopyBanner,
		type: 'web',
		link: 'https://zetty-loopy.vercel.app/',
		float: 'center',
	},
	{
		name: 'Omnite',
		start: '13.05.2022',
		end: '21.05.2022',
		time: 8,
		logo: omniteLogo,
		banner: omniteBanner,
		type: 'web',
		link: 'https://zetty-omnite.vercel.app/',
		float: 'right',
	},
	{
		name: 'Crappo',
		start: '01.08.2022',
		end: '04.08.2022',
		time: 3,
		logo: crappoLogo,
		banner: crappoBanner,
		type: 'web',
		link: 'https://zetty-crappo.vercel.app/',
		float: 'left',
	},
	{
		name: 'Cosmo Band',
		start: '08.06.2022',
		end: '09.06.2022',
		time: 1,
		logo: cosmoBandLogo,
		banner: cosmoBandBanner,
		type: 'web',
		link: 'https://zetty-cosmoband.vercel.app/',
		float: 'center',
	},
	{
		name: 'NFT Blueprint',
		start: '21.04.2022',
		end: '24.04.2022',
		time: 3,
		logo: nftBlueprintLogo,
		banner: nftBlueprintBanner,
		type: 'web',
		link: 'https://zetty-nftblueprint.vercel.app/',
		float: 'right',
	},
	{
		name: 'Foo',
		start: '25.04.2022',
		end: '26.04.2022',
		time: 1,
		logo: fooLogo,
		banner: fooBanner,
		type: 'web',
		link: 'https://zetty-foo.vercel.app/',
		float: 'left',
	},
];

//Script
function PortfolioProjects(props) {
	// >> Variables
	const getText = Languages[props.lang]['PortfolioProjects'];

	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Render
	return (
		<div className={styles.mainDiv}>
			<div className={styles.insideDiv}>
				<div className={styles.blocksDiv}>
					{projects.map((element, index) => {
						return (
							<div
								key={index}
								className={
									element.float === 'left'
										? `${styles.oneBlock} ${styles.leftBlock}`
										: element.float === 'center'
										? `${styles.oneBlock} ${styles.centerBlock}`
										: `${styles.oneBlock} ${styles.rightBlock}`
								}
							>
								<div className={styles.bannerDiv}>
									<Image
										src={element.banner}
										alt=""
										layout="fill"
										objectFit="cover"
										quality={100}
										priority={true}
									/>
								</div>
								<div className={styles.infoDiv}>
									<div className={styles.insideInfoDiv}>
										<div className={styles.topSection}>
											<div className={styles.logoDiv}>
												<Image
													src={element.logo}
													alt=""
													layout="responsive"
													objectFit="contain"
													quality={100}
													priority={true}
												/>
											</div>
											<div className={styles.infosDiv}>
												<Typography
													className={
														styles.projectTitleDiv
													}
												>
													{element.name}
												</Typography>
												<div
													className={styles.startDiv}
												>
													<Typography
														className={
															styles.leftDiv
														}
													>
														{getText.started}:
													</Typography>
													<Typography
														className={`${globalStyles.greenText} ${styles.rightDiv}`}
													>
														{element.start}
													</Typography>
												</div>
												<div className={styles.endDiv}>
													<Typography
														className={
															styles.leftDiv
														}
													>
														{getText.finished}:
													</Typography>
													<Typography
														className={`${globalStyles.greenText} ${styles.rightDiv}`}
													>
														{element.end}
													</Typography>
												</div>
											</div>
										</div>
										<div
											className={
												styles.realizationTimeDiv
											}
										>
											<Typography
												className={
													styles.realizationTime
												}
											>
												{getText.realization}:{' '}
												{element.time}{' '}
												<span
													className={
														styles.realizationTimeBold
													}
												>
													<span
														className={
															globalStyles.greenText
														}
													>
														{
															getText.realizationDays
														}
													</span>
												</span>
											</Typography>
										</div>
										<Typography
											className={styles.projectDesc}
										>
											{getText[`${element.name}-Desc`]}
										</Typography>
										<div className={styles.buttonDiv}>
											<Button
												variant="contained"
												className={styles.button}
												href={element.link}
												target="_blank"
											>
												<Typography>
													{element.type === 'web'
														? getText.visitWeb
														: getText.visitProject}
												</Typography>
											</Button>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default PortfolioProjects;
