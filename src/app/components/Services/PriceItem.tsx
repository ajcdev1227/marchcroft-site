export const PriceItem = (props: any) => {
    const {planName, price, benefits} = props;
    return (
        <div className="w-full py-[70px] rounded-[20px] px-5"
             style={{
                 backgroundImage: "linear-gradient(122.31deg, rgba(0, 122, 255, 0.1) 10.23%, rgba(10, 10, 11, 0.1) 85.25%)",

                 boxShadow: 'inset 0px 57px 66.8px -30px rgba(255, 255, 255, 0.1)',
                 backdropFilter: 'blur(8.3px)',
                 borderImageSource: "linear-gradient(117.82deg, rgba(0, 122, 255, 0.5) 0.3%, rgba(10, 11, 12, 0.1) 99.7%)",
                 borderImageSlice: 10
             }}>
            <div className="flex flex-col p-[10px] gap-[28px]">
                <svg width="77" height="73" viewBox="0 0 77 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="16.7334" width="48" height="48" rx="24" fill="#F4EBFF"/>
                    <rect x="4" y="16.7334" width="48" height="48" rx="24" stroke="#F9F5FF" strokeWidth="8"/>
                    <path
                        d="M38 49.7334V47.7334C38 45.8696 36.7252 44.3035 35 43.8594M31.5 32.0242C32.9659 32.6175 34 34.0547 34 35.7334C34 37.4121 32.9659 38.8493 31.5 39.4426M33 49.7334C33 47.8696 33 46.9377 32.6955 46.2027C32.2895 45.2226 31.5108 44.4439 30.5307 44.0379C29.7956 43.7334 28.8638 43.7334 27 43.7334H24C22.1362 43.7334 21.2044 43.7334 20.4693 44.0379C19.4892 44.4439 18.7105 45.2226 18.3045 46.2027C18 46.9377 18 47.8696 18 49.7334M29.5 35.7334C29.5 37.9425 27.7091 39.7334 25.5 39.7334C23.2909 39.7334 21.5 37.9425 21.5 35.7334C21.5 33.5243 23.2909 31.7334 25.5 31.7334C27.7091 31.7334 29.5 33.5243 29.5 35.7334Z"
                        stroke="#1A40A9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="4" y="16.7334" width="48" height="48" rx="24" fill="#F4EBFF"/>
                    <rect x="4" y="16.7334" width="48" height="48" rx="24" stroke="#F9F5FF" strokeWidth="8"/>
                    <path
                        d="M38 49.7334V47.7334C38 45.8696 36.7252 44.3035 35 43.8594M31.5 32.0242C32.9659 32.6175 34 34.0547 34 35.7334C34 37.4121 32.9659 38.8493 31.5 39.4426M33 49.7334C33 47.8696 33 46.9377 32.6955 46.2027C32.2895 45.2226 31.5108 44.4439 30.5307 44.0379C29.7956 43.7334 28.8638 43.7334 27 43.7334H24C22.1362 43.7334 21.2044 43.7334 20.4693 44.0379C19.4892 44.4439 18.7105 45.2226 18.3045 46.2027C18 46.9377 18 47.8696 18 49.7334M29.5 35.7334C29.5 37.9425 27.7091 39.7334 25.5 39.7334C23.2909 39.7334 21.5 37.9425 21.5 35.7334C21.5 33.5243 23.2909 31.7334 25.5 31.7334C27.7091 31.7334 29.5 33.5243 29.5 35.7334Z"
                        stroke="#1A40A9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="22.2009" y="0.44043" width="56" height="56" rx="12" transform="rotate(15 22.2009 0.44043)" fill="#1A40A9"/>
                    <g filter="url(#filter0_b_1535_3550)">
                        <rect x="4" y="16.7334" width="56" height="56" rx="12" fill="white" fillOpacity="0.6"/>
                        <rect x="4.5" y="17.2334" width="55" height="55" rx="11.5" stroke="white" strokeOpacity="0.6"/>
                        <path
                            d="M41.3334 55.2334C41.3334 53.6052 41.3334 52.7912 41.1325 52.1287C40.68 50.6373 39.5129 49.4701 38.0214 49.0177C37.359 48.8167 36.5449 48.8167 34.9167 48.8167H29.0834C27.4553 48.8167 26.6412 48.8167 25.9787 49.0177C24.4873 49.4701 23.3201 50.6373 22.8677 52.1287C22.6667 52.7912 22.6667 53.6052 22.6667 55.2334M37.2501 39.4834C37.2501 42.3829 34.8996 44.7334 32.0001 44.7334C29.1006 44.7334 26.7501 42.3829 26.7501 39.4834C26.7501 36.5839 29.1006 34.2334 32.0001 34.2334C34.8996 34.2334 37.2501 36.5839 37.2501 39.4834Z"
                            stroke="#1A40A9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    <defs>
                        <filter id="filter0_b_1535_3550" x="-12" y="0.733398" width="88" height="88" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="8"/>
                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1535_3550"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1535_3550" result="shape"/>
                        </filter>
                    </defs>
                </svg>
                <div className="flex flex-col gap-[61px]">
                    <div className="flex flex-col gap-[32px]">
                        <div className="flex flex-col gap-[12px]">
                            <div className="flex flex-col gap-[10px]">
                                <p className="font-objective font-medium text-white text-[30px] leading-[27.9px] ">
                                    {planName} Plan
                                </p>
                                <p className="font-objective font-medium text-white text-[24px] leading-[22.32px] ">
                                    Starting at ${price} per month
                                </p>
                            </div>
                            <p className="font-objective font-medium text-white text-[20px] leading-[18.6px] ">
                                Billed monthly or annually. Cancel anytime.
                            </p>
                        </div>
                        <div className="flex flex-col gap-[32px]">
                            <a className="bg-transparent p-[10px] gap-[10px] border-[3px] border-white rounded-[29px] text-[20px] text-center">Try it free</a>
                            <div className="flex flex-col gap-[10px]">
                                {benefits.map((content: string, index: bigint) => (
                                    <div className="flex flex-row gap-[7px]" key={index}>
                                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.25033 10.7337L8.75033 13.2337L13.7503 8.23372M18.3337 10.7337C18.3337 15.3361 14.6027 19.0671 10.0003 19.0671C5.39795 19.0671 1.66699 15.3361 1.66699 10.7337C1.66699 6.13135 5.39795 2.40039 10.0003 2.40039C14.6027 2.40039 18.3337 6.13135 18.3337 10.7337Z"
                                                stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        <p className="font-objective font-medium text-white text-[20px] leading-[18.6px] ">
                                            {content}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-[60px]">
                        <p className="font-objective font-medium text-[#FFFFFF99] text-[18px] leading-[16.74px] text-center">
                            Secure purchase is guaranteed
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
