import React, { useState } from 'react';

export type context = {
    activeNavLinkId: string,
	globalShowMobileNav: boolean,
    setActiveNavLinkId: React.Dispatch<React.SetStateAction<string>>
	setGlobalShowMobileNav: React.Dispatch<React.SetStateAction<boolean>>
}
const iUserContextState = {
    activeNavLinkId: '',
	globalShowMobileNav: false,
    setActiveNavLinkId: () => {},
	setGlobalShowMobileNav: () => {}
}
export const NavContext = React.createContext<context>(iUserContextState);
interface Props {
	children: React.ReactNode;
  }
  
export const NavProvider = ({ children }: Props) => {
	const [activeNavLinkId, setActiveNavLinkId] = useState('');
	const [globalShowMobileNav, setGlobalShowMobileNav] = useState(false);

	const providerValue = {
		activeNavLinkId,
		setActiveNavLinkId,
		globalShowMobileNav,
		setGlobalShowMobileNav
	};

	return (
		<NavContext.Provider value={providerValue}>{children}</NavContext.Provider>
	);
};
