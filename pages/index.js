// >> Modules
import { useState, useEffect } from 'react';

// >> Aos
import Aos from 'aos';
import 'aos/dist/aos.css';

// >> Styles
import useGlobalStyles from '../components/globalStyle';

// >> Pages
import HomePage from '../components/homePage/homePage.js';

export default function Home() {
	// >> Style
	const styles = useGlobalStyles();

	// >> Variables
	const [lang, setLang] = useState('PL');

	// >> Functions
	useEffect(() => {
		Aos.init({ duration: 700 });

		let lang = navigator.language || navigator.userLanguage;
		if (lang === 'pl-PL') {
			setLang('PL');
		} else {
			setLang('ENG');
		}
	}, []);

	function setOtherLang(lang) {
		setLang(lang);
	}

	// >> Render
	return (
		<div className={styles.container}>
			<HomePage lang={lang} setOtherLang={setOtherLang} />
		</div>
	);
}
