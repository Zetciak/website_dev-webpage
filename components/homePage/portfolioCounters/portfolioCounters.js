// >> Modules
import { Typography } from '@mui/material';
import Languages from '../../languages.js';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { useState } from 'react';

// >> Styles
import useStyles from './portfolioCountersStyle.js';
import useGlobalStyles from '../../globalStyle.js';

//Script
function PortfolioCounters(props) {
	// >> Variables
	const getText = Languages[props.lang]['PortfolioCounters'];
	const [focus, setFocus] = useState(false);

	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Render
	return (
		<div className={styles.mainDiv} id="portfolio">
			<div className={styles.insideDiv}>
				<Typography className={globalStyles.borderText}>
					{getText.borderTitle}
				</Typography>
				<Typography className={globalStyles.mainTitle}>
					{getText.mainTitle}{' '}
					<span className={globalStyles.greenText}>
						{getText.mainTitleGreen}
					</span>
				</Typography>

				<div className={styles.threeBlocks}>
					<div className={`${styles.oneBlock} ${styles.firstBlock}`}>
						<Typography
							className={`${globalStyles.borderText} ${styles.borderTextLocal}`}
						>
							<CountUp
								start={0}
								end={focus ? 28 : 0}
								duration={4}
								useEasing={true}
							>
								{({ countUpRef }) => (
									<VisibilitySensor
										onChange={(isVisible) => {
											if (isVisible) {
												setFocus(true);
											}
										}}
									>
										<span ref={countUpRef}></span>
									</VisibilitySensor>
								)}
							</CountUp>
						</Typography>
						<Typography className={styles.whiteDesc}>
							{getText.pages}
						</Typography>
					</div>
					<div className={`${styles.oneBlock} ${styles.secondBlock}`}>
						<Typography
							className={`${globalStyles.greenText} ${styles.greenTextLocal}`}
						>
							<CountUp
								start={0}
								end={focus ? 34 : 0}
								duration={4}
								useEasing={true}
							>
								{({ countUpRef }) => (
									<VisibilitySensor
										onChange={(isVisible) => {
											if (isVisible) {
												setFocus(true);
											}
										}}
									>
										<span ref={countUpRef}></span>
									</VisibilitySensor>
								)}
							</CountUp>
						</Typography>
						<Typography className={styles.whiteDesc}>
							{getText.clients}
						</Typography>
					</div>
					<div className={`${styles.oneBlock} ${styles.thirdBlock}`}>
						<Typography
							className={`${globalStyles.borderText} ${styles.borderTextLocal}`}
						>
							<CountUp
								start={0}
								end={focus ? 43 : 0}
								duration={4}
								useEasing={true}
							>
								{({ countUpRef }) => (
									<VisibilitySensor
										onChange={(isVisible) => {
											if (isVisible) {
												setFocus(true);
											}
										}}
									>
										<span ref={countUpRef}></span>
									</VisibilitySensor>
								)}
							</CountUp>
						</Typography>
						<Typography className={styles.whiteDesc}>
							{getText.projects}
						</Typography>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PortfolioCounters;
