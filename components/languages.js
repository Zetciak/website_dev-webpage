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
			firstOfferPrice: '1000-2000',
			firstOfferTime: '3-7',

			secondOfferTitle1: 'Projekt Graficzny',
			secondOfferTitle2: 'i',
			secondOfferTitle3: 'Usługa Programistyczna',
			secondOfferDesc:
				'Jeżeli nie posiadasz w zespole ani programisty ani grafika to usługa dla ciebie! Stworzymy dla ciebie nowoczesną stronę internetową według twoich preferencji. Skontaktuj się z nami w celu ustalenia szczegółów.',
			secondOfferPrice: '1700-3400',
			secondOfferTime: '5-14',
		},

		['OfferMini']: {
			price: 'Cena',
			priceCurrency: 'PLN',

			devOffer: 'Usługa programistyczna',
			uxOffer: 'Usługa graficzna',

			// MARCEL
			// >> 1 Month support
			['marcel_1month-title']: 'Miesięczne',
			['marcel_1month-title-green']: 'wsparcie',
			['marcel_1month-desc']:
				'Obsługa w zakresie aktualizacji i rozszerzania treści oraz bezpieczeństwa strony internetowej według twoich preferencji.',
			['marcel_1month-price']: '250',

			// >> Pojedyńcze zmiany
			['marcel_changes-title']: 'Pojedyńcze',
			['marcel_changes-title-green']: 'zmiany (1h)',
			['marcel_changes-desc']:
				'Jeżeli nie masz wykupionej opcji miesięcznego wsparcia strony możesz wybrać tę usługę. Podana kwota podlega każdej rozpoczętej godziny pracy.',
			['marcel_changes-price']: '50',

			// >> Dodatkowe języki
			['marcel_languages-title']: 'Wielojęzyczność',
			['marcel_languages-title-green']: 'strony',
			['marcel_languages-desc']:
				'Jeżeli działasz na rynku światowym możesz zrobić stronę wielojęzyczną. Podana kwota to cena za pierwszy dodatkowy język. Każdy następny to 150zł.',
			['marcel_languages-price']: '350',

			// >> Domena
			['marcel_domain-title']: 'Twoja własna',
			['marcel_domain-title-green']: 'domena',
			['marcel_domain-desc']:
				'Jeżeli nie masz wykupionej domeny dla swojej strony możesz zrobić to u nas. Podana kwota to cena rocznej opłaty domeny.',
			['marcel_domain-price']: '150',

			// >> Podstrony
			['marcel_podstrony-title']: 'Dodatkowa',
			['marcel_podstrony-title-green']: 'podstrona',
			['marcel_podstrony-desc']:
				'Jeżeli posiadasz już u nas stronę i chcesz ją rozszerzyć o dodatkową podstrone skontaktuj się z nami w celu wyceny.',
			['marcel_podstrony-price']: 'X',

			// MACIEK
			// >> Social Media
			['maciek_socialmedia-title']: 'Social',
			['maciek_socialmedia-title-green']: 'Media',
			['maciek_socialmedia-desc']:
				'Wykonam projekty na Twoje Social Media. (Posty, banery itp.) Cena może różnić się w zależności od skomplikowania grafik.',
			['maciek_socialmedia-price']: '50-150',

			// >> Branding
			['maciek_branding-title']: 'Branding',
			['maciek_branding-title-green']: 'firmy',
			['maciek_branding-desc']:
				'Wykonam branding dla Twojej firmy. (Logo, logotyp, sygnet)',
			['maciek_branding-price']: '100-500',

			// >> Ulotki
			['maciek_ulotki-title']: 'Materiały',
			['maciek_ulotki-title-green']: 'drukowane',
			['maciek_ulotki-desc']:
				'Przygotuję materiały drukowane. (Ulotki, wizytówki, katalogi, roll up, banery itp.)',
			['maciek_ulotki-price']: '50-300',

			// >> Grafiki
			['maciek_grafiki-title']: 'Nietypowe',
			['maciek_grafiki-title-green']: 'grafiki',
			['maciek_grafiki-desc']:
				'Przygotuję wszelakie różnorodne grafiki, które nie zostały wymienione poprzednio.',
			['maciek_grafiki-price']: '100-500',
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
			realizationDay: 'dzień',
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

			['Hook & Rod-Desc']:
				'Projekt logotypu dla działalności zajmującej się rezerwacją stanowisk wędkarskich.',

			['Meta3Gold-Desc']: "Projekt Landing page'a dla projektu NFT.",

			['SinceRPG Roulette-Desc']:
				'Projekt ruletki do kasyna na serwer do gry Multi Theft Auto na tryb RPG.',

			['Sphinx - Menu-Desc']: 'Projekt menu dla restauracji Sphinx.',

			['Stargaze-Desc']:
				"Projekt UI/UX Landing page'a dla NFT Launchpad'u, oraz marketplace'u Stargaze.zone.",
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

			clickOpen: 'Kliknij, aby otworzyć',
			clickCopy: 'Kliknij, aby skopiować',
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
			firstOfferPrice: '200-400',
			firstOfferTime: '3-7',

			secondOfferTitle1: 'Graphic design',
			secondOfferTitle2: '&',
			secondOfferTitle3: 'Development Service',
			secondOfferDesc:
				'If you do not have a programmer or a graphic designer in your team, this service is for you! We will create a modern website for you according to your preferences. Contact us for details.',
			secondOfferPrice: '350-700',
			secondOfferTime: '5-14',
		},

		['OfferMini']: {
			price: 'Price',
			priceCurrency: '$',

			devOffer: 'Development service',
			uxOffer: 'Graphics service',

			// MARCEL
			// >> 1 Month support
			['marcel_1month-title']: 'Monthly',
			['marcel_1month-title-green']: 'support',
			['marcel_1month-desc']:
				'Support for updating and expanding the content and website security according to your preferences.',
			['marcel_1month-price']: '55',

			// >> Pojedyńcze zmiany
			['marcel_changes-title']: 'Single',
			['marcel_changes-title-green']: 'changes (1hr)',
			['marcel_changes-desc']:
				'If you do not have a monthly website support option, you can choose this service. The given amount is subject to each commenced working hour.',
			['marcel_changes-price']: '15',

			// >> Dodatkowe języki
			['marcel_languages-title']: 'Multilingual',
			['marcel_languages-title-green']: 'website',
			['marcel_languages-desc']:
				'If you operate on the world market, you can make a multilingual website. The amount shown is the price for the first additional language. Each subsequent is $30.',
			['marcel_languages-price']: '75',

			// >> Domena
			['marcel_domain-title']: 'Your own',
			['marcel_domain-title-green']: 'domain',
			['marcel_domain-desc']:
				'If you do not have a domain name for your website, you can do it with us. The amount given is the price of the annual domain fee.',
			['marcel_domain-price']: '50',

			// >> Podstrony
			['marcel_podstrony-title']: 'Additional',
			['marcel_podstrony-title-green']: 'subpage',
			['marcel_podstrony-desc']:
				'If you already have a website with us and want to extend it with an additional subpage, please contact us for a pricing.',
			['marcel_podstrony-price']: 'X',

			// MACIEK
			// >> Social Media
			['maciek_socialmedia-title']: 'Social',
			['maciek_socialmedia-title-green']: 'Media',
			['maciek_socialmedia-desc']:
				'I will make projects for your Social Media. (Posts, banners, etc.) The price may vary depending on the complexity of the graphics.',
			['maciek_socialmedia-price']: '10-30',

			// >> Branding
			['maciek_branding-title']: 'Company',
			['maciek_branding-title-green']: 'branding',
			['maciek_branding-desc']:
				'I will make branding for your company. (Logo, logotype, signet)',
			['maciek_branding-price']: '20-100',

			// >> Ulotki
			['maciek_ulotki-title']: 'Printed',
			['maciek_ulotki-title-green']: 'materials',
			['maciek_ulotki-desc']:
				'I will prepare printed materials. (Flyers, business cards, catalogs, roll ups, banners, etc.)',
			['maciek_ulotki-price']: '10-60',

			// >> Grafiki
			['maciek_grafiki-title']: 'Unusual',
			['maciek_grafiki-title-green']: 'graphics',
			['maciek_grafiki-desc']:
				'I will prepare all kinds of graphics that have not been mentioned previously.',
			['maciek_grafiki-price']: '20-100',
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
			realizationDay: 'day',
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

			['Hook & Rod-Desc']:
				'Logo design for the activity dealing with the booking of fishing positions.',

			['Meta3Gold-Desc']: 'Landing page project for the NFT project.',

			['SinceRPG Roulette-Desc']:
				'Casino roulette project for Multi Theft Auto server for RPG mode.',

			['Sphinx - Menu-Desc']: 'Menu design for Sphinx restaurants.',

			['Stargaze-Desc']:
				'UI / UX Landing page project for NFT Launchpad and Stargaze.zone marketplace.',
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
