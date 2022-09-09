// >> Modules
import { CssBaseline } from '@mui/material';
import Script from 'next/script';
import { useEffect } from 'react';

// >> Styling
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	// >> Render
	return (
		<>
			<Script
				strategy="lazyOnload"
				src={`https://www.googletagmanager.com/gtag/js?id=G-C6HL3658EW`}
			/>

			<Script id="google" strategy="lazyOnload">
				{`
            window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
		  
			gtag('config', 'G-C6HL3658EW');
                `}
			</Script>
			<div>
				<CssBaseline />
				<Component {...pageProps} />
			</div>
		</>
	);
}

export default MyApp;
