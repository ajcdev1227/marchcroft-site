"use client";
import localFont from "next/font/local";
import "./globals.css";
import './components/i18n'; // Ensure the i18n file is imported
import {Provider} from "react-redux";
import store from '../store'; // Make sure to import your Redux store

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {

    return (
        <html lang="en">
        <head>
            <link rel="icon" href="/img/alpha.png"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="theme-color" content="#000000"/>
            {/* <meta name="Marchcroft" content="Transforming Enterprises with AI-Driven, Compliant Solutions" />
        <meta property="og:type" content="portfolio" />
        <meta property="og:title" content="Marchcroft Limited" />
        <meta property="og:description" content="Transforming Enterprises with AI-Driven, Compliant Solutions" />
        <meta name="twitter:card" content="portfolio" />
        <meta name="twitter:title" content="MarchCroft Limited" />
        <meta name="twitter:description" content="Transforming Enterprises with AI-Driven, Compliant Solutions" /> */}
            <link rel="stylesheet" href="https://use.typekit.net/buo5ijh.css"/>
        </head>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <Provider store={store}>
            {children}
        </Provider>
        </body>
        </html>
    );
}

export default RootLayout;
