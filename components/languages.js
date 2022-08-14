// >> Images
import flagPL from '../public/flags/PL.svg';
import flagENG from '../public/flags/ENG.svg';

// >> Variables
const Languages = {
	// >> COLLECTIONS << //
	['PL']: {
		['Main']: {
			flag: flagPL,
			uni: 'pl-PL',
			name: 'PL',
			fullName: 'Polski',
		},

		['Navigation']: {
			start: 'Start',
			team: 'Zespół',
			offer: 'Oferta',
			portfolio: 'Portfolio',
			tools: 'Narzędzia',
			contact: 'Kontakt',
		},

		['Hero']: {
			borderTitle: 'TWORZENIE STRON WWW',
			mainTitle: 'Stwórz swoją stronę',
			mainTitleGreen: 'razem z nami!',
			mainDesc:
				'Skontaktuj się z nami aby stworzyć swoją nowoczesną stronę internetową. Tworzymy strony indywidualne, informacyjne oraz dla firm! Posiadasz już swoją stronę i chcesz ją przebudować? To nie problem!',
		},

		['Team']: {
			borderTitle: 'POZNAJ NASZ ZESPÓŁ',
			mainTitle: 'Krótko o',
			mainTitleGreen: 'nas',

			maciekRole: 'Junior UI/UX Designer',
			maciekName: 'Maciek Stradowski',
			maciekDesc:
				'Grafiką zajmuję się od 2017 roku z przerwami, od około półtora roku robię to na codzień. Zaczynając od prostych grafik na YouTube, kończąc aktualnie na projektach stron, lub aplikacji. Tworzę nowoczesne strony dla firm z wszelakich branży. Głównie tworzę projekty w Figmie.',

			marcelRole: 'Front-end Developer',
			marcelName: 'Marcel Mikosza',
			marcelDesc:
				"Od 6 lat tworzę strony internetowe, od 2 lat robię to profesjonalnie. Zaczynałem od prostych stron w HTML'u tworzonych dla serwerów gier, od jakiegoś czasu tworzę nowoczesne strony dla firm oraz branży krypto. Tworzę strony internetowe w technologii NextJS + MUI.",
		},

		['Offer']: {
			borderTitle: 'OFERTA',
			mainTitle: 'Jakie oferujemy',
			mainTitleGreen: 'usługi?',

			offerPrice: 'Cena',
			offerTime: 'Czas Realizacji',
			offerTimeDay: 'Dni',
			offerCurrency: 'PLN',
			offerContact: 'Skontaktuj się',

			firstOfferTitle1: 'Projekt Graficzny',
			firstOfferTitle2: 'lub',
			firstOfferTitle3: 'Usługa Programistyczna',
			firstOfferDesc:
				'Jeżeli posiadasz swojego programistę lub grafika możesz zlecić nam tylko jedną z usług, w celu ustalenia większej ilości szczegółów skontaktuj się z nami.',
			firstOfferPrice: '2000-5600',
			firstOfferTime: '7-21',

			secondOfferTitle1: 'Projekt Graficzny',
			secondOfferTitle2: '&',
			secondOfferTitle3: 'Usługa Programistyczna',
			secondOfferDesc:
				'Jeżeli nie posiadasz w zespole ani programisty ani grafika to usługa dla ciebie! Stworzymy dla ciebie nowoczesną stronę internetową według twoich preferencji. Skontaktuj się z nami w celu ustalenia szczegółów.',
			secondOfferPrice: '1000-4200',
			secondOfferTime: '7-14',
		},

		['PortfolioCounters']: {
			borderTitle: 'PORTFOLIO',
			mainTitle: 'Nasze',
			mainTitleGreen: 'osiągnięcia',

			pages: 'Stron',
			clients: 'Klientów',
			projects: 'Projekty',
		},

		['PortfolioProjects']: {
			realization: 'Czas realizacji',
			realizationDays: 'dni',
			visitWeb: 'Odwiedź stronę',
			visitProject: 'Odwiedź projekt',
			started: 'Zlecone',
			finished: 'Ukończone',

			['CO2it-Desc']:
				'Home Page + Podstrona polityki prywatności stworzona dla firmy zajmującej się mierzeniem śladu węglowego.',

			['Loopy Loris Tribe-Desc']:
				'Ozdobna strona w stylu kreskówkowym stworzona dla projektu NFT.',

			['Omnite-Desc']:
				'Strona internetowa stworzona dla cross-chain systemu NFT - Omnite.',

			['Crappo-Desc']:
				'Strona dotycząca firmy powiązanej z kryptowalutami i ich "kopaniu". Na stronie został równierz utworzony kalkulator obliczający średni dzienny zarobek.',

			['Cosmo Band-Desc']:
				'Strona internetowa utworzona dla projekt NFT prowadzonego przez zespół gitarzystów.',

			['NFT Blueprint-Desc']:
				'Strona internetowa stworzona dla Agencji NFT.',

			['Foo-Desc']: 'Landing page dla firmy "Foo".',
		},

		['Tools']: {
			borderTitle: 'NARZĘDZIA',
			mainTitle: 'W czym wykonujemy',
			mainTitleGreen: 'nasze prace?',
			mainDesc:
				'Nasze projekty wykonywane są w nowoczesnych programach jak i technologiach, nie używamy przestarzałych modułów, działamy najlepiej jak możemy.',
		},

		['ContactUs']: {
			borderTitle: 'KONTAKT',
			mainTitle: 'Jak możesz się z nami',
			mainTitleGreen: 'skontaktować?',
			mainDesc:
				'Uzupełnij poniższy formularz kontaktowy lub napisz do nas wiadomość prywatną na jednym z social mediów. Odpiszemy najszybciej jak możemy. Dla ułatwienia naszej pracy nie ograniczaj się do minimum.',

			panelTitle: 'Formularz',
			panelTitleGreen: 'kontaktowy',
			panelDesc:
				'Uzupełnij go poprawnymi informacjami w celu poprawnej komunikacji, nie ograniczaj się do minimum.',
			panelMailPlaceholder: 'Twój adres e-mail',
			panelTitlePlaceholder: 'Tytuł wiadomości',
			panelDescPlaceholder: 'Opis wiadomości',

			buttonSendMessage: 'Wyślij wiadomość',
			buttonSendMessageSending: 'Wysyłanie wiadomości...',
			buttonSendMessageDisabled: 'Wiadomość wysłana!',
			buttonSendMessageError: 'Wystąpił błąd!',

			socialMediaTitle: 'Nasze',
			socialMediaTitleGreen: 'Social Media',
			socialMediaDesc:
				'Jeżeli masz możliwość napisz do nas tutaj, odpowiedź jest zawsze szybsza niż poprzez formularz.',

			clickOpen: 'Kliknij aby otworzyć',
			clickCopy: 'Kliknij aby skopiować',
			clickCopyCopied: 'Skopiowano!',
		},

		['404']: {
			borderTitle: 'ERROR 404',
			mainTitle: 'Strona nie została',
			mainTitleGreen: 'znaleziona!',
			mainDesc:
				'Strona na którą próbujesz wejść nie istnieje, wróć na stronę główną!',
		},
	},

	['ENG']: {
		['Main']: {
			flag: flagENG,
			uni: 'en-US',
			name: 'ENG',
			fullName: 'English',
		},

		['Navigation']: {
			start: 'Start',
			team: 'Team',
			offer: 'Offer',
			portfolio: 'Portfolio',
			tools: 'Tools',
			contact: 'Contact',
		},

		['Hero']: {
			borderTitle: 'CREATING WEB PAGES',
			mainTitle: 'Create your website',
			mainTitleGreen: 'together!',
			mainDesc:
				"Contact us to create your modern website. We create individual, informational and corporate websites! Do you already have your website and want to rebuild it? It's not a problem!",
		},

		['Team']: {
			borderTitle: 'MEET OUR TEAM',
			mainTitle: 'Briefly about',
			mainTitleGreen: 'us',

			maciekRole: 'Junior UI/UX Designer',
			maciekName: 'Maciek Stradowski',
			maciekDesc:
				'I have been dealing with graphics since 2017, for about a year and a half I have been doing it daily. Starting with simple YouTube graphics, ending with website & application designs. I create modern websites for companies from all industries. I mainly create projects in Figma.',

			marcelRole: 'Front-end Developer',
			marcelName: 'Marcel Mikosza',
			marcelDesc:
				'I have been creating websites for 6 years, I have been doing it professionally for 2 years. I started with simple HTML pages for game servers, for some time I have been creating modern websites for companies and the crypto industry. I create websites in NextJS + MUI technology.',
		},

		['Offer']: {
			borderTitle: 'OFFER',
			mainTitle: 'What services do',
			mainTitleGreen: 'we offer?',

			offerPrice: 'Price',
			offerTime: 'Realization Time',
			offerTimeDay: 'Days',
			offerCurrency: '$',
			offerContact: 'Contact us',

			firstOfferTitle1: 'Graphic design',
			firstOfferTitle2: 'or',
			firstOfferTitle3: 'Development Service',
			firstOfferDesc:
				'If you have your own programmer or graphic designer, you can commission us with only one of the services, in order to arrange more details, please contact us.',
			firstOfferPrice: '450-1200',
			firstOfferTime: '7-21',

			secondOfferTitle1: 'Graphic design',
			secondOfferTitle2: '&',
			secondOfferTitle3: 'Development Service',
			secondOfferDesc:
				'If you do not have a programmer or a graphic designer in your team, this service is for you! We will create a modern website for you according to your preferences. Contact us for details.',
			secondOfferPrice: '220-920',
			secondOfferTime: '7-14',
		},

		['PortfolioCounters']: {
			borderTitle: 'PORTFOLIO',
			mainTitle: 'Our',
			mainTitleGreen: 'achievements',

			pages: 'Websites',
			clients: 'Customers',
			projects: 'Designs',
		},

		['PortfolioProjects']: {
			realization: 'Lead time',
			realizationDays: 'days',
			visitWeb: 'Visit website',
			visitProject: 'Visit design',
			started: 'Started',
			finished: 'Finished',

			['CO2it-Desc']:
				'Home Page + Privacy policy subpage created for a company that measures the carbon footprint.',

			['Loopy Loris Tribe-Desc']:
				'Decorative cartoon style page created for the NFT project.',

			['Omnite-Desc']:
				'Website created for the cross-chain of the NFT system - Omnite.',

			['Crappo-Desc']:
				'Website about a company related to cryptocurrencies and their "mining". The website has also created a calculator that calculates the average daily earnings.',

			['Cosmo Band-Desc']:
				'Website created for the NFT project run by a team of guitarists.',

			['NFT Blueprint-Desc']: 'Website created for the NFT Agency.',

			['Foo-Desc']: 'Landing page for the "Foo" company.',
		},

		['Tools']: {
			borderTitle: 'TOOLS',
			mainTitle: 'What do we do our',
			mainTitleGreen: 'work in?',
			mainDesc:
				'Our projects are made in modern programs and technologies, we do not use outdated modules, we work the best we can.',
		},

		['ContactUs']: {
			borderTitle: 'CONTACT',
			mainTitle: 'How can you',
			mainTitleGreen: 'contact us?',
			mainDesc:
				'Fill in the contact form below or write us a private message on one of the social media. We will write back as soon as we can. To make our work easier, do not limit yourself to the minimum.',

			panelTitle: 'Contact',
			panelTitleGreen: 'form',
			panelDesc:
				'Complete it with the correct information for correct communication, do not limit yourself to a minimum.',
			panelMailPlaceholder: 'Your e-mail address',
			panelTitlePlaceholder: 'Title',
			panelDescPlaceholder: 'Description',

			buttonSendMessage: 'Send message',
			buttonSendMessageSending: 'Sending a message...',
			buttonSendMessageDisabled: 'Message sent!',
			buttonSendMessageError: 'Error occured!',

			socialMediaTitle: 'Our',
			socialMediaTitleGreen: 'Social Media',
			socialMediaDesc:
				'If you have the option, write to us here, the answer is always faster than using the form.',

			clickOpen: 'Click to open',
			clickCopy: 'Click to copy',
			clickCopyCopied: 'Copied!',
		},

		['404']: {
			borderTitle: 'ERROR 404',
			mainTitle: 'This page does',
			mainTitleGreen: 'not exist!',
			mainDesc:
				'The page you are trying to access does not exist, please go back to the main page!',
		},
	},
};

export default Languages;
