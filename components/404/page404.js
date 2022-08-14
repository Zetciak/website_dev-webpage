// >> Modules
import Image from 'next/image';
import Head from 'next/head';

// >> Styles
import useStyles from './page404Style.js';

// >> Components
import Landing from './landing/landing.js';

// >> Images
import circle from '../../public/background/circle.png';

//Script
function Page404(props) {
	// >> Style
	const styles = useStyles();

	// >> Render
	return (
		<>
			<Head>
				<title>Web-Dev</title>
				<meta charSet="utf-8" />
				<meta name="theme-color" content="#35d26c" />
				<meta
					name="keywords"
					content="TWORZENIE STRON INTERNETOWYCH, STRONY INTERNETOWE, STRONY, WEB DEVELOPMENT, WEB-DEV, WEB DEVELOPER, DEVELOPER, PROGRAMISTA, TWORZENIE STRON WWW, TWORZENIE STRON INTERNETOWYCH KOBYŁKA"
				/>
				<meta
					name="description"
					content="Tworzymy nowoczesne strony internetowe dostosowane pod twoje oczekiwania. Dwuosobowy zespół grafika oraz programisty zaprasza do kontaktu."
				/>

				<meta property="og:url" content="https://website-dev.pl/" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Web-Dev" />
				<meta
					property="og:description"
					content="Tworzymy nowoczesne strony internetowe dostosowane pod twoje oczekiwania. Dwuosobowy zespół grafika oraz programisty zaprasza do kontaktu."
				/>
				<meta
					property="og:image"
					content="https://i.imgur.com/FiXHqhR.png"
				/>

				<meta name="twitter:card" content="summary_large_image" />
				<meta property="twitter:domain" content="website-dev.pl" />
				<meta
					property="twitter:url"
					content="https://website-dev.pl/"
				/>
				<meta name="twitter:title" content="Web-Dev" />
				<meta
					name="twitter:description"
					content="Tworzymy nowoczesne strony internetowe dostosowane pod twoje oczekiwania. Dwuosobowy zespół grafika oraz programisty zaprasza do kontaktu."
				/>
				<meta
					name="twitter:image"
					content="https://i.imgur.com/FiXHqhR.png"
				/>
			</Head>
			<div className={styles.mainDiv}>
				<div className={styles.compoDiv}>
					<Landing lang={props.lang} />
				</div>
			</div>
		</>
	);
}

export default Page404;
