// >> Modules
import Image from 'next/image';
import { Typography } from '@mui/material';
import Languages from '../../languages.js';

// >> Styles
import useStyles from './toolsStyle.js';
import useGlobalStyles from '../../globalStyle.js';

// >> Images
import vsc from '../../../public/icons/vsc.png';
import vsc2 from '../../../public/icons/vsc2.png';
import figma from '../../../public/icons/figma.png';
import figma2 from '../../../public/icons/figma2.png';
import ps from '../../../public/icons/ps.png';
import ps2 from '../../../public/icons/ps2.png';
import nextjs from '../../../public/icons/nextjs.png';
import nextjs2 from '../../../public/icons/nextjs2.png';
import mui from '../../../public/icons/mui.png';
import mui2 from '../../../public/icons/mui2.png';
import vercel from '../../../public/icons/vercel.png';
import vercel2 from '../../../public/icons/vercel2.png';
import landingImage from '../../../public/background/landingImage.webp';

// >> Variables
let projects = [
	{
		colored: vsc,
		white: vsc2,
		link: 'https://code.visualstudio.com/',
		last: false,
	},
	{
		colored: figma,
		white: figma2,
		link: 'https://www.figma.com/',
		last: false,
	},
	{
		colored: ps,
		white: ps2,
		link: 'https://www.adobe.com/pl/products/photoshop.html',
		last: false,
	},
	{
		colored: nextjs,
		white: nextjs2,
		link: 'https://nextjs.org/',
		last: false,
	},
	{
		colored: mui,
		white: mui2,
		link: 'https://mui.com/',
		last: false,
	},
	{
		colored: vercel,
		white: vercel2,
		link: 'https://vercel.com/',
		last: true,
	},
];

//Script
function Tools(props) {
	// >> Variables
	const getText = Languages[props.lang]['Tools'];

	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Render
	return (
		<div className={styles.mainDiv} id="tools">
			<div className={styles.divBg}>
				<Image
					src={landingImage}
					alt=""
					layout="fill"
					objectFit="cover"
					quality={100}
					priority={true}
				/>
			</div>
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
				<h4 className={globalStyles.mainDesc} data-aos="zoom-in-up">
					{getText.mainDesc}
				</h4>
				<div className={styles.logosDiv}>
					{projects.map((element, index) => {
						return (
							<a
								className={styles.oneLogo}
								href={element.link}
								target="_blank"
								rel="noreferrer"
								key={index}
								data-aos="zoom-in-up"
							>
								<div className="normalLogo">
									<Image
										src={element.white}
										alt=""
										layout="responsive"
										objectFit="contain"
										quality={100}
										//priority={true}
									/>
								</div>
								<div className="coloredLogo">
									<Image
										src={element.colored}
										alt=""
										layout="responsive"
										objectFit="contain"
										quality={100}
										//priority={true}
									/>
								</div>
							</a>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Tools;
