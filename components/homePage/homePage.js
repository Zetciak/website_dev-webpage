// >> Modules
import Image from 'next/image';
import Head from 'next/head';
import getVariable from '../globalVariables';

// >> Styles
import useStyles from './homePageStyle';

// >> Components
import NavBar from './navBar/navBar.js';
import Landing from './landing/landing.js';
import RotateLine from './rotateLine/rotateLine.js';
import OurTeam from './ourTeam/ourTeam.js';
import OurOffer from './ourOffer/ourOffer.js';
import OurOfferMini from './ourOfferMini/ourOfferMini';
import PortfolioCounters from './portfolioCounters/portfolioCounters.js';
import PortfolioProjects from './portfolioProjects/portfolioProjects.js';
import Tools from './tools/tools.js';
import ContactUs from './contactUs/contactUs.js';
import Footer from './footer/footer.js';
import Faq from './faq/faq.js';

// >> Images
import circle from '../../public/background/circle.png';

//Script
function HomePage(props) {
	// >> Style
	const styles = useStyles();

	// >> Render
	return (
		<>
			<Head>
				<title>{getVariable[props.lang]['pageTitle']}</title>
				<meta charSet="utf-8" />
				<meta
					name="theme-color"
					content={getVariable['colors']['pageMainColor']}
				/>
				<meta
					name="description"
					content={getVariable[props.lang]['pageDesc']}
				/>
				<meta
					property="og:url"
					content={`https://${getVariable[props.lang]['pageLink']}/`}
				/>
				<meta property="og:type" content="website" />
				<meta
					property="og:title"
					content={getVariable[props.lang]['pageTitle']}
				/>
				<meta
					property="og:description"
					content={getVariable[props.lang]['pageDesc']}
				/>
				<meta
					property="og:image"
					content={getVariable[props.lang]['pageImage']}
				/>

				<meta name="twitter:card" content="summary_large_image" />
				<meta
					property="twitter:domain"
					content={getVariable[props.lang]['pageLink']}
				/>
				<meta
					property="twitter:url"
					content={`https://${getVariable[props.lang]['pageLink']}/`}
				/>
				<meta
					name="twitter:title"
					content={getVariable[props.lang]['pageTitle']}
				/>
				<meta
					name="twitter:description"
					content={getVariable[props.lang]['pageDesc']}
				/>
				<meta
					name="twitter:image"
					content={getVariable[props.lang]['pageImage']}
				/>
			</Head>

			<div className={styles.mainDiv}>
				<div className={styles.bgDiv}>
					<div className={styles.bgDivInside}>
						<div className={` ${styles.circle} ${styles.circle1}`}>
							<Image
								src={circle}
								alt=""
								layout="responsive"
								objectFit="contain"
								quality={100}
								//priority={true}
							/>
						</div>
						<div className={` ${styles.circle} ${styles.circle2}`}>
							<Image
								src={circle}
								alt=""
								layout="responsive"
								objectFit="contain"
								quality={100}
								//priority={true}
							/>
						</div>
						<div className={` ${styles.circle} ${styles.circle3}`}>
							<Image
								src={circle}
								alt=""
								layout="responsive"
								objectFit="contain"
								quality={100}
								//priority={true}
							/>
						</div>
						<div className={` ${styles.circle} ${styles.circle4}`}>
							<Image
								src={circle}
								alt=""
								layout="responsive"
								objectFit="contain"
								quality={100}
								//priority={true}
							/>
						</div>
						<div className={` ${styles.circle} ${styles.circle5}`}>
							<Image
								src={circle}
								alt=""
								layout="responsive"
								objectFit="contain"
								quality={100}
								//priority={true}
							/>
						</div>
						<div className={` ${styles.circle} ${styles.circle6}`}>
							<Image
								src={circle}
								alt=""
								layout="responsive"
								objectFit="contain"
								quality={100}
								//priority={true}
							/>
						</div>
						<div className={` ${styles.circle} ${styles.circle7}`}>
							<Image
								src={circle}
								alt=""
								layout="responsive"
								objectFit="contain"
								quality={100}
								//priority={true}
							/>
						</div>
						<div className={` ${styles.circle} ${styles.circle8}`}>
							<Image
								src={circle}
								alt=""
								layout="responsive"
								objectFit="contain"
								quality={100}
								//priority={true}
							/>
						</div>
						<div className={` ${styles.circle} ${styles.circle9}`}>
							<Image
								src={circle}
								alt=""
								layout="responsive"
								objectFit="contain"
								quality={100}
								//priority={true}
							/>
						</div>
					</div>
				</div>
				<div className={styles.compoDiv}>
					<NavBar
						lang={props.lang}
						setOtherLang={props.setOtherLang}
					/>
					<Landing lang={props.lang} />
					<RotateLine side="1" />
					<OurTeam lang={props.lang} />
					<OurOffer lang={props.lang} />
					<OurOfferMini lang={props.lang} />
					<PortfolioCounters lang={props.lang} />
					<PortfolioProjects lang={props.lang} />
					<RotateLine side="2" />
					<Tools lang={props.lang} />
					<Faq lang={props.lang} />
					<ContactUs lang={props.lang} />
					<Footer />
				</div>
			</div>
		</>
	);
}

export default HomePage;
