// >> Modules
import Image from 'next/image';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Typography,
	Button,
} from '@mui/material';
import Languages from '../../languages.js';
import { withStyles } from '@mui/styles';
import { useState } from 'react';

// >> Styles
import useStyles from './faqStyle.js';
import useGlobalStyles from '../../globalStyle.js';

const StyledAccordion = withStyles({
	root: {
		'&:before': {
			display: 'none',
		},

		background: 'none',
		border: 'none',
		boxShadow: 'none',
		transition: 'all .3s',

		'&$expanded': {
			marginTop: '0px',
		},
	},

	expanded: {},
})(Accordion);

// >> Variables
const data = [
	{
		id: 'faq1',
	},
	{
		id: 'faq2',
	},
	{
		id: 'faq3',
	},
	{
		id: 'faq4',
	},
	{
		id: 'faq5',
	},
	{
		id: 'faq6',
	},
];

// >> Script
function Faq(props) {
	// >> Variables
	const getText = Languages[props.lang]['FAQ'];
	const [expanded, setExpanded] = useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Render
	return (
		<div className={styles.mainDiv} id="faq">
			<div className={styles.insideDiv}>
				<Typography
					className={globalStyles.borderText}
					data-aos="zoom-in-up"
				>
					{getText.borderTitle}
				</Typography>
				<Typography
					className={globalStyles.mainTitle}
					data-aos="zoom-in-up"
				>
					{getText.mainTitle}{' '}
					<span className={globalStyles.greenText}>
						{getText.mainTitleGreen}
					</span>
				</Typography>
				<div className={styles.faqPoints} data-aos="zoom-in-up">
					<div className={styles.borderTop}></div>
					<div className={styles.borderLeft}></div>
					<div className={styles.faqPointsInside}>
						{data.map((accordion) => {
							const { id } = accordion;
							return (
								<div key={id} className={styles.oneAccordion}>
									<StyledAccordion
										expanded={expanded === id}
										key={id}
										onChange={handleChange(id)}
										square
									>
										<AccordionSummary
											expandIcon={
												<div
													className={
														expanded === id
															? `${styles.expandButton} ${styles.expandButtonExpanded}`
															: `${styles.expandButton}`
													}
												></div>
											}
										>
											<Typography
												className={
													expanded === id
														? `${styles.accordionTitleExpanded} ${styles.accordionTitle}`
														: `${styles.accordionTitle}`
												}
											>
												{getText[`${id}-title`]}
											</Typography>
										</AccordionSummary>
										<AccordionDetails>
											<Typography
												className={styles.accordionDesc}
											>
												{getText[`${id}-desc`]}
											</Typography>
										</AccordionDetails>
									</StyledAccordion>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Faq;
