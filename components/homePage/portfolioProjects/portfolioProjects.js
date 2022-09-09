// >> Modules
import Image from 'next/image';
import { Button, Typography } from '@mui/material';
import Languages from '../../languages.js';
import { useEffect, useState } from 'react';

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
import farmNftLogo from '../../../public/projects/farmNftLogo.png';
import farmNftBanner from '../../../public/projects/farmNftBanner.png';
import hookAndRoodLogo from '../../../public/projects/hookAndRoodLogo.png';
import hookAndRoodBanner from '../../../public/projects/hookAndRoodBanner.png';
import metaweb3PadLogo from '../../../public/projects/metaweb3PadLogo.png';
import metaweb3PadBanner from '../../../public/projects/metaweb3PadBanner.png';
import sinceLogo from '../../../public/projects/sinceLogo.png';
import sinceBanner from '../../../public/projects/sinceBanner.png';
import sphinxLogo from '../../../public/projects/sphinxLogo.png';
import sphinxBanner from '../../../public/projects/sphinxBanner.png';
import stargazeLogo from '../../../public/projects/stargazeLogo.png';
import stargazeBanner from '../../../public/projects/stargazeBanner.png';

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
		days: 'realizationDays',
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
		days: 'realizationDays',
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
		days: 'realizationDays',
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
		days: 'realizationDays',
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
		days: 'realizationDay',
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
		days: 'realizationDays',
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
		days: 'realizationDay',
	},
	{
		name: 'Stargaze',
		start: '15.06.2022',
		end: '20.06.2022',
		time: 5,
		logo: stargazeLogo,
		banner: stargazeBanner,
		type: 'project',
		link: 'https://www.behance.net/gallery/150385403/Stargaze-Website-UIUX',
		days: 'realizationDays',
	},
	{
		name: 'Hook & Rod',
		start: '11.11.2021',
		end: '12.11.2021',
		time: 1,
		logo: hookAndRoodLogo,
		banner: hookAndRoodBanner,
		type: 'project',
		link: 'https://www.behance.net/gallery/128299301/LOGO-HOOK-ROD',
		days: 'realizationDay',
	},
	{
		name: 'Meta3Gold',
		start: '16.07.2022',
		end: '18.07.2022',
		time: 2,
		logo: metaweb3PadLogo,
		banner: metaweb3PadBanner,
		type: 'project',
		link: 'https://www.behance.net/gallery/150385069/Meta3GOLD-Website-UI-UX',
		days: 'realizationDays',
	},
	{
		name: 'SinceRPG Roulette',
		start: '16.12.2021',
		end: '18.12.2021',
		time: 2,
		logo: sinceLogo,
		banner: sinceBanner,
		type: 'project',
		link: 'https://www.behance.net/gallery/132583637/CASINO-ROULETTE-for-MTASA-SINCERPG',
		days: 'realizationDays',
	},
	{
		name: 'Sphinx - Menu',
		start: '22.03.2022',
		end: '23.03.2022',
		time: 1,
		logo: sphinxLogo,
		banner: sphinxBanner,
		type: 'project',
		link: 'https://www.behance.net/gallery/120612353/Restaurant-menu',
		days: 'realizationDay',
	},
];

//Script
function PortfolioProjects(props) {
	// >> Variables
	const getText = Languages[props.lang]['PortfolioProjects'];
	const [drawedProject, setDrawedProjects] = useState([]);

	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Functions
	useEffect(() => {
		let drawProjects = [];
		let countSide = 0;
		projects.map((element, index) => {
			countSide = countSide + 1;
			if (countSide > 3) {
				countSide = countSide - 3;
			}
			drawProjects.push(
				<div
					key={index}
					className={
						countSide === 1
							? `${styles.oneBlock} ${styles.leftBlock}`
							: countSide === 2
							? `${styles.oneBlock} ${styles.centerBlock}`
							: `${styles.oneBlock} ${styles.rightBlock}`
					}
					data-aos="zoom-in-up"
				>
					<div className={styles.bannerDiv}>
						<Image
							src={element.banner}
							alt=""
							layout="fill"
							objectFit="cover"
							quality={100}
							//priority={true}
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
										//priority={true}
									/>
								</div>
								<div className={styles.infosDiv}>
									<Typography
										className={styles.projectTitleDiv}
									>
										{element.name}
									</Typography>
									<div className={styles.startDiv}>
										<Typography className={styles.leftDiv}>
											{getText.started}:
										</Typography>
										<Typography
											className={`${globalStyles.greenText} ${styles.rightDiv}`}
										>
											{element.start}
										</Typography>
									</div>
									<div className={styles.endDiv}>
										<Typography className={styles.leftDiv}>
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
							<div className={styles.realizationTimeDiv}>
								<Typography className={styles.realizationTime}>
									{getText.realization}: {element.time}{' '}
									<span
										className={styles.realizationTimeBold}
									>
										<span
											className={globalStyles.greenText}
										>
											{getText[element.days]}
										</span>
									</span>
								</Typography>
							</div>
							<Typography className={styles.projectDesc}>
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
		});
		setDrawedProjects(drawProjects);
	}, [styles, globalStyles, getText]);

	// >> Render
	return (
		<div className={styles.mainDiv}>
			<div className={styles.insideDiv}>
				<div className={styles.blocksDiv}>{drawedProject}</div>
			</div>
		</div>
	);
}

export default PortfolioProjects;
