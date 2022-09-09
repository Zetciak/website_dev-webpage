// >> Modules
import Image from 'next/image';
import { Typography, Button, Input } from '@mui/material';
import Languages from '../../languages.js';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

// >> Styles
import useStyles from './contactUsStyle.js';
import useGlobalStyles from '../../globalStyle.js';

// >> Images
import contact from '../../../public/icons/contact.png';
import whiteDiscord from '../../../public/icons/whiteDiscord.svg';
import whiteFacebook from '../../../public/icons/whiteFacebook.svg';
import whiteMail from '../../../public/icons/whiteMail.svg';
import hover from '../../../public/background/hover.webp';

//Script
function ContactUs(props) {
	// >> Variables
	const getText = Languages[props.lang]['ContactUs'];
	const [email, setEmail] = useState('');
	const [title, setTitle] = useState('');
	const [message, setMessage] = useState('');
	const [disabledButton, setDisabledButton] = useState(0);
	const [dcCopied, setDcCopied] = useState(false);

	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Functions
	const handleChangeEmail = (event) => {
		setEmail(event.target.value);
	};

	const handleChangeTitle = (event) => {
		setTitle(event.target.value);
	};

	const handleChangeMessage = (event) => {
		setMessage(event.target.value);
	};

	const sendEmail = () => {
		setDisabledButton(1);
		let templateParams = {
			subject: title,
			email_from: email,
			message: message,
			email_to: 'contact.webdev.pl@gmail.com',
		};

		emailjs
			.send(
				'web-dev_nn53fc9',
				'template_5wr772g',
				templateParams,
				'HYtZp6Oq-dRpdKvMV'
			)
			.then(
				function (response) {
					console.log('email sended!');
					setDisabledButton(2);
				},
				function (error) {
					console.log('email fail!');
					setDisabledButton(3);
				}
			);
	};

	// >> Render
	return (
		<div className={styles.mainDiv} id="contact">
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
				<div className={styles.contactForm} data-aos="zoom-in-up">
					<div className={styles.insideContactForm}>
						<div className={styles.leftSection}>
							<Typography className={styles.panelTitle}>
								{getText.panelTitle}{' '}
								<span className={globalStyles.greenText}>
									{getText.panelTitleGreen}
								</span>
							</Typography>
							<Typography className={styles.panelDesc}>
								{getText.panelDesc}
							</Typography>
							<div className={styles.formDiv}>
								<div className={styles.emailDiv}>
									<Input
										disableUnderline={true}
										fullWidth={true}
										placeholder={
											getText.panelMailPlaceholder
										}
										onChange={handleChangeEmail}
										value={email}
									></Input>
								</div>
								<div className={styles.titleDiv}>
									<Input
										disableUnderline={true}
										fullWidth={true}
										placeholder={
											getText.panelTitlePlaceholder
										}
										onChange={handleChangeTitle}
										value={title}
									></Input>
								</div>
								<div className={styles.messageDiv}>
									<Input
										disableUnderline={true}
										fullWidth={true}
										placeholder={
											getText.panelDescPlaceholder
										}
										onChange={handleChangeMessage}
										value={message}
										multiline={true}
										maxRows={9}
									></Input>
								</div>
								<div className={styles.buttonDiv}>
									<Button
										variant="contained"
										className={styles.button}
										onClick={sendEmail}
										disabled={
											disabledButton === 0 ? false : true
										}
									>
										<Typography>
											{disabledButton === 0
												? getText.buttonSendMessage
												: disabledButton === 1
												? getText.buttonSendMessageSending
												: disabledButton === 2
												? getText.buttonSendMessageDisabled
												: getText.buttonSendMessageError}
										</Typography>
									</Button>
								</div>
							</div>
							<div className={styles.socialMediaDiv}>
								<div className={styles.socialMediaLine}></div>
								<div className={styles.socialMediaLeft}>
									<Typography
										className={styles.socialMediaTitle}
									>
										{getText.socialMediaTitle}
										{'  '}
										<span
											className={globalStyles.greenText}
										>
											{getText.socialMediaTitleGreen}
										</span>
									</Typography>
									<Typography
										className={styles.socialMediaDesc}
									>
										{getText.socialMediaDesc}
									</Typography>
								</div>
								<div className={styles.socialMediaRight}>
									<div className={styles.oneSocialMedia}>
										<a
											href="mailto:contact.webdev.pl@gmail.com"
											target="_blank"
											rel="noreferrer"
										>
											<Image
												src={whiteMail}
												alt=""
												layout="responsive"
												objectFit="contain"
												quality={100}
												//priority={true}
											/>
											<span className={styles.hoverText}>
												<div
													className={
														styles.hoverTextBg
													}
												>
													<Image
														src={hover}
														alt=""
														layout="responsive"
														objectFit="contain"
														quality={100}
														//priority={true}
													/>
												</div>
												<Typography>
													{getText.clickOpen}
												</Typography>
											</span>
										</a>
									</div>
									<div className={styles.oneSocialMedia}>
										<a
											href="https://www.facebook.com/people/Web-Dev/100084555517563/"
											target="_blank"
											rel="noreferrer"
										>
											<Image
												src={whiteFacebook}
												alt=""
												layout="responsive"
												objectFit="contain"
												quality={100}
												//priority={true}
											/>
											<span className={styles.hoverText}>
												<div
													className={
														styles.hoverTextBg
													}
												>
													<Image
														src={hover}
														alt=""
														layout="responsive"
														objectFit="contain"
														quality={100}
														//priority={true}
													/>
												</div>
												<Typography>
													{getText.clickOpen}
												</Typography>
											</span>
										</a>
									</div>
									<div className={styles.oneSocialMedia}>
										<a
											//href="Zetty#0741"
											//target="_blank"
											//rel="noreferrer"
											onClick={() => {
												navigator.clipboard.writeText(
													'Zetty#0741'
												);
												setDcCopied(true);
											}}
										>
											<Image
												src={whiteDiscord}
												alt=""
												layout="responsive"
												objectFit="contain"
												quality={100}
												//priority={true}
											/>
											<span className={styles.hoverText}>
												<div
													className={
														styles.hoverTextBg
													}
												>
													<Image
														src={hover}
														alt=""
														layout="responsive"
														objectFit="contain"
														quality={100}
														//priority={true}
													/>
												</div>
												<Typography>
													{dcCopied === false
														? getText.clickCopy
														: getText.clickCopyCopied}
												</Typography>
											</span>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className={styles.rightSection}>
							<Image
								src={contact}
								alt=""
								layout="responsive"
								objectFit="contain"
								quality={100}
								//priority={true}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.bottomStartLine}></div>
		</div>
	);
}

export default ContactUs;
