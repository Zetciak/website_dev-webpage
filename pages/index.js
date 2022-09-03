// >> Modules
import { useState, useEffect } from 'react';
import { Triangle } from 'react-loader-spinner';

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
	const [loading, setLoading] = useState(true);

	// >> Functions
	useEffect(() => {
		Aos.init({ duration: 700, once: true });

		let lang = navigator.language || navigator.userLanguage;
		if (lang === 'pl-PL') {
			setLang('PL');
		} else {
			setLang('ENG');
		}

		fetch('https://jsonplaceholder.typicode.com/posts/1').then(() => {
			setLoading(false);
		});
	}, []);

	function setOtherLang(lang) {
		setLang(lang);
	}

	// >> Render
	return (
		<div className={styles.container}>
			<HomePage lang={lang} setOtherLang={setOtherLang} />

			{loading === true ? (
				<div className={styles.pageLoader} style={{ opacity: '1' }}>
					<div className={styles.loading}>
						<Triangle color="#7dc752" width="100%" />
					</div>
				</div>
			) : (
				<div
					className={`${styles.pageLoader} ${styles.pageLoaderTransition}`}
					style={{ opacity: '0' }}
				>
					<div className={styles.loading}>
						<Triangle color="#7dc752" width="100%" />
					</div>
				</div>
			)}
		</div>
	);
}
