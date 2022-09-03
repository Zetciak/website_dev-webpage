// >> Modules
import { Typography } from '@mui/material';
import Languages from '../../languages.js';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

// >> Styles
import useStyles from './landingStyle.js';
import useGlobalStyles from '../../globalStyle.js';

//Script
function Landing(props) {
	// >> Variables
	const getText = Languages[props.lang]['Hero'];

	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Functions
	const particlesInit = async (main) => {
		//console.log(main);
		await loadFull(main);
	};

	const particlesLoaded = (container) => {
		//console.log(container);
	};

	// >> Render
	return (
		<div className={styles.mainDiv} id="start">
			<Particles
				className={styles.particlesDiv}
				width="100%"
				height="100%"
				init={particlesInit}
				loaded={particlesLoaded}
				options={{
					fullScreen: false,
					fpsLimit: 120,
					interactivity: {
						events: {
							onHover: {
								enable: true,
								mode: 'repulse',
							},
						},
						modes: {
							repulse: {
								distance: 200,
								duration: 0.4,
							},
						},
					},
					particles: {
						color: {
							value: '#ffffff',
						},
						links: {
							color: '#ffffff',
							distance: 150,
							enable: true,
							opacity: 0.15,
							width: 1,
						},
						collisions: {
							enable: true,
						},
						move: {
							direction: 'none',
							enable: true,
							outModes: {
								default: 'bounce',
							},
							random: false,
							speed: 3,
							straight: false,
						},
						number: {
							density: {
								enable: true,
								area: 800,
							},
							value: 80,
						},
						opacity: {
							value: 0.2,
						},
						shape: {
							type: 'circle',
						},
						size: {
							value: { min: 1, max: 5 },
						},
					},
					detectRetina: true,
				}}
			/>
			<div className={styles.insideDiv} data-aos="zoom-in-up">
				<Typography className={globalStyles.borderText}>
					{getText.borderTitle}
				</Typography>
				<Typography className={globalStyles.mainTitle}>
					{getText.mainTitle}{' '}
					<span className={globalStyles.greenText}>
						{getText.mainTitleGreen}
					</span>
				</Typography>
				<Typography className={globalStyles.mainDesc}>
					{getText.mainDesc}
				</Typography>
			</div>
		</div>
	);
}

export default Landing;
