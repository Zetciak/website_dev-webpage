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
				src={`https://www.googletagmanager.com/ns.html?id=GTM-5CVF23B`}
			/>

			<Script id="google" strategy="lazyOnload">
				{`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
			new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
			j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
			'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
			})(window,document,'script','dataLayer','GTM-5CVF23B');
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
