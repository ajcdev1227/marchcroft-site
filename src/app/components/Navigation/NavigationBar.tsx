"use client";
import {useEffect, useState} from "react";
import {usePathname} from "next/navigation"; // Import usePathname from next/navigation
import {CTAButton} from "../CTAButton";
import ReactGA from 'react-ga4';
import useGlobalContext from "../../useHooks/useShowMobileNav";
import styled from 'styled-components';
import {useTranslation} from "next-i18next";
import ReactCountryFlag from "react-country-flag";
import Link from "next/link";

interface NavLinkProps {
    children: React.ReactNode;
    url: string;
    navLinkId: string;
    scrollToId: string;
    activeNavLinkId: string;
    setActiveNavLinkId: (id: string) => void;
    navigateHome: (url: string) => Promise<void>;
    setShowMobileNav: (show: boolean) => void;
    setGlobalShowMobileNav: (show: boolean) => void;
    setBackgroundColor: (color: string) => void;
    setPositionStyle: (style: boolean) => void;
    onHover: () => void;
}

const serviceDropdownItems = [
    {
        category: "Consultancy & Strategy",
        items: ["Strategic Consultancy", "Research and Development"]
    },
    {
        category: "Technology & Engineering",
        items: ["Software Architecture", "Engineering and Technology", "Cloud"]
    },
    {
        category: "Design & User Experience",
        items: ["UX Design"]
    }
];

const lngs = [
    {code: "en", label: "English", country: "gb"},
    {code: "es", label: "Española", country: "es"},
    {code: "pt", label: "Português", country: "pt"},
];

const NavLink: React.FC<NavLinkProps> = ({
                                             children, url, navLinkId, scrollToId, activeNavLinkId,
                                             setActiveNavLinkId, navigateHome,
                                             setShowMobileNav, setGlobalShowMobileNav,
                                             setBackgroundColor, setPositionStyle, onHover
                                         }) => {
    const handleClick = async () => {
        ReactGA.initialize("G-WV5C9XS82Z");
        await navigateHome(url);
        if (scrollToId === 'ContactUs') {
            document.getElementById(scrollToId)?.click();
            return;
        }
        setActiveNavLinkId(navLinkId);
        setGlobalShowMobileNav(false);
        setShowMobileNav(false);
        setBackgroundColor('none');
        setPositionStyle(false);
    };

    return (
        <Link
            href={url}
            id={navLinkId}
            className={`text-font text-nav my-5 text-primary-800 font-objektiv-mk2 leading-10 h-11 lg:my-auto md:my-auto 
                ${activeNavLinkId === navLinkId ? 'border-b hover:border-b-2 hover:cursor-pointer' : 'hover:border-b-2 hover:cursor-pointer'}`}
            onClick={handleClick}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
        >
            {children}
        </Link>
    );
};

export const NavigationBar = () => {
    const pathname = usePathname(); // Get the current pathname
    const [showMobileNav, setShowMobileNav] = useState(false);
    const {setGlobalShowMobileNav} = useGlobalContext();
    const [country, setCountry] = useState('gb');
    const [flagLabel, setFlagLabel] = useState('English');
    const {i18n, t} = useTranslation();

    const [activeNavLinkId, setActiveNavLinkId] = useState('');
    const [backgroundColor, setBackgroundColor] = useState('none');
    const [positionStyle, setPositionStyle] = useState(false);
    const [showServicesDropdown, setShowServicesDropdown] = useState(false);
    const [navbarSolid, setNavbarSolid] = useState(false);
    const [blackBar, setBlackBar] = useState(false);
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [isIconRotated, setIconRotated] = useState(false);
    const servicesToggles = useSelector(selectServicesToggle);
    const dispatch: AppDispatch = useDispatch(); // Dispatch from Redux
    const locale = useLocale();

    // Use selector to get section content from Redux store
    const groupedServiceNav = useSelector(selectGroupedServiceNav);
    console.log(groupedServiceNav);

    // State for body background color
    const [bodyBackgroundColor, setBodyBackgroundColor] = useState("#0D1B2A");

    // Fetch content and work histories when the locale changes
    useEffect(() => {
        dispatch(fetchServiceNavigation(locale));
    }, [locale, dispatch]);

    const navLinks = [
        {navLinkId: 'Home', url: '/', scrollToId: ''},
        ...(servicesToggles ? [{navLinkId: 'services', url: '/services', scrollToId: 'WorkContainer'}] : []),
        {navLinkId: 'work', url: '/work', scrollToId: 'WorkContainer'},
        {navLinkId: 'Careers', url: '/careers', scrollToId: 'CareersContainer'},
    ];


    const handleLanguageSwitchClick = () => {
        setDropdownVisible(!isDropdownVisible);
        setIconRotated(!isIconRotated);
    };

    const handleLanguageSelect = (code: string) => {
        onChangeLang(code); // Call the function to change the language
        setDropdownVisible(false); // Close the dropdown after selection
        setIconRotated(false); // Reset the icon rotation
    };

    useEffect(() => {
        const link = navLinks.find(e => e.url === pathname)?.navLinkId || '';
        setActiveNavLinkId(link);

        // Check if the current path starts with /services/
        const isServicesPath = pathname!.startsWith('/services');
        console.log(pathname, isServicesPath);

        // Update navbarSolid and blackBar based on the path
        setNavbarSolid(isServicesPath);
        setBlackBar(isServicesPath); // Set black bar for services path

        // If not on services path, set navbarSolid based on scroll position
        const handleScroll = () => {
            if (!isServicesPath) {
                setNavbarSolid(window.scrollY > 50);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [pathname]); // Add pathname as a dependency

    const handleShowMobileNav = () => {
        setPositionStyle(!positionStyle);
        setShowMobileNav(!showMobileNav);
        setBackgroundColor('#0D1B2A');
        setGlobalShowMobileNav(!positionStyle);
    };

    const onHoverServices = (isEntering: boolean | ((prevState: boolean) => boolean)) => {
        setShowServicesDropdown(isEntering);
    };

    const onChangeLang = (e: any) => {
        const lang_code = e?.target?.value ?? e;
        i18n.changeLanguage(lang_code);
        switch (lang_code) {
            case 'en':
                setCountry('gb');
                setFlagLabel('English');
                break;
            case 'es':
                setCountry('es');
                setFlagLabel('Española');
                break;
            case 'pt':
                setCountry('pt');
                setFlagLabel('Português');
                break;
            default:
                break;
        }
    };

    return (
        <section className={`flex justify-center sticky top-0 z-50 lg:px-14 md:px-5 sm:px-5 px-5 w-full ${navbarSolid ? (blackBar ? 'bg-[#010101]' : 'bg-[#0D1B2A]') : 'bg-transparent'}`}
                 style={{transition: 'background-color 0.3s ease'}}>
            <nav className="flex flex-col w-full max-w-[1111px]">
                <div className="flex w-full justify-between">
                    <a href="/" className="h-[80px]">
                        <img className="py-5 h-full my-auto" src='/img/logo-flat-nobkground-dark.png' alt="logo"/>
                    </a>

                    <div className="hidden px-5 lg:flex lg:w-5/12 lg:flex-row justify-around flex-col" id="navbar-default">
                        {navLinks.map(
                            ({navLinkId, scrollToId, url}) =>
                                <NavLink
                                    key={navLinkId}
                                    url={url}
                                    navLinkId={navLinkId}
                                    scrollToId={scrollToId}
                                    activeNavLinkId={activeNavLinkId}
                                    setActiveNavLinkId={setActiveNavLinkId}
                                    navigateHome={() => Promise.resolve()}
                                    setShowMobileNav={() => {
                                    }}
                                    setBackgroundColor={setBackgroundColor}
                                    setPositionStyle={setPositionStyle}
                                    setGlobalShowMobileNav={setGlobalShowMobileNav}
                                    onHover={() => navLinkId === 'services' ? onHoverServices(true) : onHoverServices(false)}
                                    // onMouseLeave={() => navLinkId === 'services' ? onHoverServices(false) : onHoverServices(true)}
                                >
                                    {t(`navLinks.${navLinkId.toLowerCase()}`)}
                                </NavLink>
                        )}
                    </div>

                    {showServicesDropdown && (
                        <DropdownMenu className={blackBar ? 'bg-[#010101]' : 'bg-[#0D1B2A]'}
                                      onMouseEnter={() => onHoverServices(true)}
                                      onMouseLeave={() => onHoverServices(false)}
                        >
                            <div className="">
                                <DropdownHeader className={`${blackBar ? 'bg[#010101]' : 'bg-[#0D1B2A]'}`}>
                                    Services We Offer
                                    <img
                                        className={`ml-3 w-4 transition-transform duration-300 ${isIconRotated ? 'rotate-180' : ''}`}
                                        src='/img/icons/we_offer.png'
                                        alt="language icon"
                                    />
                                </DropdownHeader>
                                <DropdownContent>

                                    {Object?.keys(groupedServiceNav).map((category, index) => (
                                        <DropdownColumn key={index}>
                                            <CategoryTitle>{category}</CategoryTitle>
                                            {groupedServiceNav[category].map((item: any, idx: number) => (
                                                <DropdownItem key={idx}>
                                                    <Link href={`/services/${item.title}`}>
                                                        {item.title}
                                                    </Link>
                                                </DropdownItem>
                                            ))}
                                        </DropdownColumn>

                                    ))}
                                </DropdownContent>

                            </div>
                        </DropdownMenu>
                    )}

                    <div className="lg:flex hidden">
                        <CTAButton id='ContactUs' text={"contact us"} href={"/contactus"}/>
                    </div>

                    {/* remove hard coded url */}
                    <div className="relative h-[42px] w-32 my-auto lg:flex hidden">
                        <div
                            className="flex cursor-pointer w-5"
                            id="languages-switch"
                            onClick={handleLanguageSwitchClick}
                            aria-haspopup="true"
                            aria-expanded={isDropdownVisible}
                        >
                            <img className="" src='/img/icons/globe-03.svg' alt="logo"/>
                            <p className="text-font text-nav ml-2 text-primary-800 font-objektiv-mk2 leading-10 h-11 lg:my-auto md:my-auto">{flagLabel}</p>
                            <img
                                className={`ml-3 w-4 transition-transform duration-300 ${isIconRotated ? 'rotate-180' : ''}`}
                                src='https://public-content-s3.s3.eu-west-1.amazonaws.com/Icon_e1f5bc657a.svg'
                                alt="language icon"
                            />
                        </div>
                        {isDropdownVisible && (
                            <div className={`absolute top-[100%] left-0 z-40 ${navbarSolid ? (blackBar ? 'bg-[#010101]' : 'bg-[#0D1B2A]') : 'bg-transparent'}`}>
                                {lngs.map(({code, label}) => (
                                    <div
                                        key={code}
                                        className="px-4 py-2 cursor-pointer hover:text-gray-100 text-font text-nav ml-2 text-primary-800 font-objektiv-mk2"
                                        onClick={() => handleLanguageSelect(code)} // Call function on language selection
                                    >
                                        {label}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <button onClick={handleShowMobileNav} className="inline-flex items-center p-2 ml-5 text-sm text-gray-500 rounded-lg lg:hidden dark:text-gray-400" aria-controls="navbar-default"
                            aria-expanded={showMobileNav}>
                        <svg className="w-6 h-6 hover:fill-current" aria-hidden="true" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
                        </svg>
                    </button>
                </div>

                {showMobileNav &&
                    <div className="flex lg:hidden flex-col" id="navbar-default">
                        {navLinks.map(
                            ({navLinkId, scrollToId, url}) =>
                                <NavLink
                                    key={navLinkId}
                                    url={url}
                                    navLinkId={navLinkId}
                                    scrollToId={scrollToId}
                                    activeNavLinkId={activeNavLinkId}
                                    setActiveNavLinkId={setActiveNavLinkId}
                                    navigateHome={() => Promise.resolve()}
                                    setBackgroundColor={setBackgroundColor}
                                    setShowMobileNav={setShowMobileNav}
                                    setPositionStyle={setPositionStyle}
                                    setGlobalShowMobileNav={setGlobalShowMobileNav}
                                    onHover={() => {
                                    }}
                                >
                                    {t(`navLinks.${navLinkId.toLowerCase()}`)}
                                </NavLink>
                        )}
                        {/* remove hard coded url */}
                        <div className="my-5">
                            <div className="flex items-center" onClick={handleLanguageSwitchClick}>
                                <ReactCountryFlag countryCode={country} style={{verticalAlign: 'unset'}} id="flag"/>
                                <span className="ml-1">{flagLabel}</span>
                                <img
                                    className={`ml-3 w-4 transition-transform duration-300 ${isIconRotated ? 'rotate-180' : ''}`}
                                    src='https://public-content-s3.s3.eu-west-1.amazonaws.com/Icon_e1f5bc657a.svg'
                                    alt="language icon"
                                />
                            </div>
                            <select defaultValue={i18n.language} onChange={onChangeLang} className="h-[42px] text-base font-[objektiv-mk2] rounded-[29px] w-full my-2">
                                {lngs.map(({code, label}) => (
                                    <option key={code} value={code} className="inline-block">
                                        {label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mt-20">
                            <p className="text-black text-base font-objektiv-mk2 font-bold mt-5">Get In Touch</p>
                            <div className="flex my-2">
                                <img src="/img/phone.png" alt="phone"/>
                                <p className="ml-2">+44 20 3286 8065</p>
                            </div>
                            <div className="flex my-2">
                                <img src="/img/mail.png" alt="mail"/>
                                <p className="ml-2">Contactus@marchcroft.com</p>
                            </div>
                        </div>
                    </div>
                }
            </nav>
            {blackBar && (
                <div className="absolute flex flex-row mt-[80px] w-full bg-[#1A40A9] h-[52px] justify-center">
                    <div className="flex flex-col max-w-[1111px] w-full">
                        <a className="text-white pl-[94px] leading-[52px] text-[16px] items-center "
                           style={{
                               textDecoration: 'underline',
                               textDecorationThickness: '1px'
                           }}>
                            Download Report
                        </a>
                    </div>
                </div>)
            }
        </section>
    );
};

import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {selectServicesToggle, selectTalkToUsSection} from "@/store/contentSlice";
import {useDispatch, useSelector} from "react-redux";
import {useLocale} from "@/app/utils/Constants";
import {AppDispatch} from "@/store";
import {fetchServiceNavigation, selectGroupedServiceNav} from "@/store/servicesNavSlice";

// Add a header for the dropdown
const DropdownHeader = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 40px;
    color: #fff;
    font-weight: bold;
    font-size: 1.2rem;
    border-bottom: 1px solid #333;
`;

const ArrowIcon = styled(ArrowRightIcon)`
    color: #fff;
    margin-left: 8px;
`;

const DropdownMenu = styled.div`
    position: absolute;
    top: 100%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    width: 100%;
    max-width: 1111px;
    margin-left: auto;
    margin-right: auto;
    color: #fff;
    z-index: 1000;
    display: flex;
    flex-direction: column;
`;

const DropdownContent = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
`;

const DropdownColumn = styled.div`
    flex: 1;
    padding: 0 20px;
`;

const CategoryTitle = styled.h3`
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 10px;
`;

const DropdownItem = styled.div`
    padding: 5px 0;
    color: #B0B0B0;

    &:hover {
        color: #fff;
        cursor: pointer;
    }
`;

export default NavigationBar;
