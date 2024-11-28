
"use client";

import React, { useEffect, useRef } from 'react';
import { Divider } from "@mui/material";
import styled from 'styled-components'
import {debounce} from 'lodash'
import { useTranslation } from 'react-i18next';

export const AboutUsSection = (props: any) => { 
    const { aboutUsTitle, aboutUsDescription } = props;
    const sectionRef = useRef<HTMLElement>(null)
    const aboutUsRef = useRef<HTMLDivElement>(null);
    const dividerRef = useRef<HTMLDivElement>(null);
    const paragraph1 = useRef<HTMLDivElement>(null);
    const aboutUsBack = useRef<HTMLDivElement>(null);

    const {t, i18n} = useTranslation();

  useEffect(() => {
    let isScrolling = false;

    if(sectionRef.current) {
      if(window.innerWidth >= 768) {
        sectionRef.current.style.height = '1000px';
      } else if(window.innerWidth <= 767) {
        sectionRef.current.style.height = '1000px';
      }
    } 

    if(dividerRef.current) {
      dividerRef.current.style.display = 'none';
      dividerRef.current.style.transform = `translateY(${0}px)`;
    }
    if(paragraph1.current) {
      paragraph1.current.style.display = 'none';
    }
    if(aboutUsRef.current) {
      aboutUsRef.current.style.position = "";
      aboutUsRef.current.style.transform = `translateY(${0}px)`;
      if(window.innerWidth >= 768 && i18n.language === 'es') {
        aboutUsRef.current.style.width = '120px'
      } else {
        aboutUsRef.current.style.width = 'auto'
      }

    }
    console.log(props)

    if(aboutUsBack.current) {
      aboutUsBack.current.style.background = 'none';
      aboutUsBack.current.style.position = "none";
      aboutUsBack.current.style.width = "0";
      aboutUsBack.current.style.height = "0";
    }


    const handleScroll = debounce( () => {
      if(!isScrolling) {
        isScrolling = true;
        requestAnimationFrame(() => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          if (paragraph1.current) {
            paragraph1.current.style.display = 'block'
            if(window.innerWidth > 767) {
              paragraph1.current.style.transform = `translateY(${1100 + -1 * scrollTop * 0.5}px)`;
            } else if(window.innerWidth <=767 && window.innerWidth > 500) {
              paragraph1.current.style.transform = `translateY(${1300 + -1 * scrollTop * 0.5}px)`;
            } else if(window.innerWidth <= 500 && window.innerWidth > 300) {
              paragraph1.current.style.transform = `translateY(${900 + -1 * scrollTop * 0.5}px)`;
            } 
            else if(window.innerWidth <=300) {
              paragraph1.current.style.transform = `translateY(${1100 + -1 * scrollTop * 0.5}px)`;
            }
          }
    
          if(aboutUsRef.current) {
            if(window.innerWidth >= 768 && i18n.language === 'es') {
              aboutUsRef.current.style.width = '120px'
            } else {
              aboutUsRef.current.style.width = 'auto'
            }
      
              if(window.innerWidth <= 767 && window.innerWidth > 539) {
                if(i18n.language === 'en' || i18n.language === 'pt') {
                  aboutUsRef.current.style.left = "40%"
                } else {
                  aboutUsRef.current.style.left = "34%"
                }
              } else if(window.innerWidth <= 539 && window.innerWidth > 480) {
                if(i18n.language === 'en' || i18n.language === 'pt') {
                  aboutUsRef.current.style.left = "38%"
                } else {
                  aboutUsRef.current.style.left = "30%"
                }
              } else if(window.innerWidth <=480 && window.innerWidth > 426) {
                if(i18n.language === 'en' || i18n.language === 'pt') {
                  aboutUsRef.current.style.left = "36%"
                } else {
                  aboutUsRef.current.style.left = "28%"
                }
              } else if(window.innerWidth <= 426 && window.innerWidth > 380) {
                if(i18n.language === 'en' || i18n.language === 'pt') {
                  aboutUsRef.current.style.left = "34%"
                } else {
                  aboutUsRef.current.style.left = "24%"
                }
              } else if(window.innerWidth <= 380 && window.innerWidth > 325) {
                if(i18n.language === 'en' || i18n.language === 'pt') {
                  aboutUsRef.current.style.left = "32%"
                } else {
                  aboutUsRef.current.style.left = "22%"
                }
              } else if(window.innerWidth <= 325 && window.innerWidth > 290) {
                if(i18n.language === 'en' || i18n.language === 'pt') {
                  aboutUsRef.current.style.left = "30%"
                } else {
                  aboutUsRef.current.style.left = "18%"
                }
              } else if(window.innerWidth <= 290) {
                aboutUsRef.current.style.left = "25%"
              } 
              else if(window.innerWidth > 767) {
                aboutUsRef.current.style.left = "none"
              }
    
            if(window.innerWidth <= 767 && window.innerWidth > 500) {
              if(scrollTop >=480 && scrollTop < 1622) {
                aboutUsRef.current.style.position = 'fixed';
                aboutUsRef.current.style.top = "150px";
                aboutUsRef.current.style.transform = `translateY(${0}px)`;
              } else if(scrollTop >= 1622 && scrollTop < 2250) {
                aboutUsRef.current.style.top = "150px";
                aboutUsRef.current.style.position = 'fixed';
                aboutUsRef.current.style.transform = `translateY(${1622 + -1 * scrollTop * 1.0}px)`;
              } else {
                aboutUsRef.current.style.transform = `translateY(${0}px)`;
                aboutUsRef.current.style.position = '';
              }
            } 
            else if(window.innerWidth <= 500 && window.innerWidth > 375) {
              if(scrollTop >= 480 && scrollTop < 1320) {
                aboutUsRef.current.style.position = 'fixed';
                aboutUsRef.current.style.left = "none";
                aboutUsRef.current.style.top =  '150px';
                aboutUsRef.current.style.transform = `translateY(${0}px)`;
              } else if(scrollTop >= 1320) {
                aboutUsRef.current.style.position = 'fixed';
                aboutUsRef.current.style.top =  '150px';
                aboutUsRef.current.style.left = "none";
                aboutUsRef.current.style.transform = `translateY(${1320 + -1 * scrollTop * 1.0}px)`;
              } else {
                aboutUsRef.current.style.transform = `translateY(${0}px)`;
                aboutUsRef.current.style.position = '';
              }
            }

             else if(window.innerWidth <= 375) {
              if(scrollTop >= 725 && scrollTop < 1320) {
                aboutUsRef.current.style.position = 'fixed';
                aboutUsRef.current.style.left = "none";
                aboutUsRef.current.style.top =  '100px';
                aboutUsRef.current.style.transform = `translateY(${0}px)`;
              } else if(scrollTop >= 1320) {
                aboutUsRef.current.style.position = 'fixed';
                aboutUsRef.current.style.top =  '100px';
                aboutUsRef.current.style.left = "none";
                aboutUsRef.current.style.transform = `translateY(${1320 + -1 * scrollTop * 1.0}px)`;
              } else {
                aboutUsRef.current.style.transform = `translateY(${0}px)`;
                aboutUsRef.current.style.position = '';
              }
            }
            else if(window.innerWidth > 767) {
              if(scrollTop >= 480 && scrollTop < 1200) {
                aboutUsRef.current.style.position = 'fixed';
                aboutUsRef.current.style.left = "none";
                aboutUsRef.current.style.top = "350px";
                aboutUsRef.current.style.transform = `translateY(${0}px)`;
              } else if(scrollTop >= 1200 && scrollTop < 1560) {
                aboutUsRef.current.style.position = 'fixed';
                aboutUsRef.current.style.left = "none";
                aboutUsRef.current.style.top = "350px";
                aboutUsRef.current.style.transform = `translateY(${1200 + -1 * scrollTop * 1.0}px)`;
              } else {
                aboutUsRef.current.style.position = '';
                aboutUsRef.current.style.transform = `translateY(${0}px)`;
              }
            }
          }
    
          if(aboutUsBack.current) {
            if(window.innerWidth <= 767 && window.innerWidth > 375) {
              if(scrollTop >= 720 && scrollTop < 1560) {
                  aboutUsBack.current.style.background = '#0D1B2A';
                  aboutUsBack.current.style.position = "fixed";
                  aboutUsBack.current.style.top = '5px';
                  aboutUsBack.current.style.left = "0";
                  aboutUsBack.current.style.width = "100%";
                  aboutUsBack.current.style.height = "200px";
                  aboutUsBack.current.style.zIndex = '9'
                
              } else {
                aboutUsBack.current.style.background = 'none';
                aboutUsBack.current.style.position = "none";
                aboutUsBack.current.style.width = "0";
                aboutUsBack.current.style.height = "0";
              }
            } else if(window.innerWidth <= 375 ){
              if(scrollTop >= 840 && scrollTop < 1800) {
                aboutUsBack.current.style.background = '#0D1B2A';
                aboutUsBack.current.style.position = "fixed";
                aboutUsBack.current.style.top = '5px';
                aboutUsBack.current.style.left = "0";
                aboutUsBack.current.style.width = "100%";
                aboutUsBack.current.style.height = "150px";
                aboutUsBack.current.style.zIndex = '9'
            } else {
              aboutUsBack.current.style.background = 'none';
              aboutUsBack.current.style.position = "none";
              aboutUsBack.current.style.width = "0";
              aboutUsBack.current.style.height = "0";
            }
            }
          }
         
          if(dividerRef.current) {
            dividerRef.current.style.display = 'block'
            let dividerWidth = 0;
    
            if(window.innerWidth <= 767 && window.innerWidth > 539) {
              dividerRef.current.style.left = "41%"
            } else if(window.innerWidth <= 539 && window.innerWidth > 480) {
              dividerRef.current.style.left = "39%"
            } else if(window.innerWidth <=480 && window.innerWidth > 426) {
              dividerRef.current.style.left = "37%"
            } else if(window.innerWidth <= 426 && window.innerWidth > 380) {
              dividerRef.current.style.left = "35%"
            } else if(window.innerWidth <= 380 && window.innerWidth > 325) {
              dividerRef.current.style.left = "35%"
            } else if(window.innerWidth <= 325 && window.innerWidth > 290) {
              dividerRef.current.style.left = "31%"
            } else if(window.innerWidth <= 290) {
              dividerRef.current.style.left = "27%"
            } 
            else if(window.innerWidth > 767 && window.innerWidth <= 1023) {
              dividerRef.current.style.left = "28%"
            } else if(window.innerWidth > 1023) {
              dividerRef.current.style.left = "35%"
            }
    
            if(window.innerWidth <= 767 && window.innerWidth > 500) {
              dividerRef.current.style.position = 'fixed';
              if(scrollTop > 480 && scrollTop < 1622) {
                dividerRef.current.style.top = `200px`;
                dividerRef.current.style.transform = `translateY(${0}px)`;
                dividerWidth = (scrollTop - 480) * (117 / (1622 - 480));
              } else if(scrollTop >= 1622 && scrollTop < 1986) {
                dividerWidth = 117;
                dividerRef.current.style.transform = `translateY(${1622 + -1 * scrollTop * 1.0}px)`;
              } else {
                dividerRef.current.style.position = '';
                dividerRef.current.style.transform = `translateY(${0}px)`;
              }
    
            }
            else if(window.innerWidth <=500 && window.innerWidth > 375) {
              dividerRef.current.style.position = 'fixed';
              if(scrollTop > 600 && scrollTop < 1320) {
                dividerRef.current.style.top = `200px`;
                dividerRef.current.style.transform = `translateY(${0}px)`;
                dividerWidth = (scrollTop - 600) * (117 / (1320 - 600));
              } else if(scrollTop >= 1320 && scrollTop < 1500) {
                dividerWidth = 117;
                dividerRef.current.style.transform = `translateY(${1320 + -1 * scrollTop * 1.0}px)`;
              } else {
                dividerRef.current.style.position = '';
                dividerRef.current.style.transform = `translateY(${0}px)`;
              }
            }

            else if(window.innerWidth <=375) {
              dividerRef.current.style.position = 'fixed';
              if(scrollTop > 725 && scrollTop < 1320) {
                dividerRef.current.style.top = `150px`;
                dividerRef.current.style.transform = `translateY(${0}px)`;
                dividerWidth = (scrollTop - 725) * (100 / (1320 - 725));
              } else if(scrollTop >= 1320 && scrollTop < 1350) {
                dividerWidth = 100;
                dividerRef.current.style.transform = `translateY(${1320 + -1 * scrollTop * 1.0}px)`;
              } else {
                dividerRef.current.style.position = '';
                dividerRef.current.style.transform = `translateY(${0}px)`;
              }
            }
             else if(window.innerWidth > 767) {
              dividerRef.current.style.position = 'fixed';
              if(scrollTop > 720 && scrollTop < 1200) {
                dividerRef.current.style.top = `380px`;
                dividerRef.current.style.transform = `translateY(${0}px)`;
                dividerWidth = (scrollTop - 720) * (117 / (1200 - 720));
              } else if(scrollTop >= 1200 && scrollTop < 1800) {
                dividerWidth = 117;
                dividerRef.current.style.transform = `translateY(${1200 + -1 * scrollTop * 1.0}px)`;
              } else {
                dividerRef.current.style.position = '';
                dividerRef.current.style.transform = `translateY(${0}px)`;
              }
            }
            dividerRef.current.style.width = `${dividerWidth}px`;
          }
          isScrolling = false;
        })
        
      }
     
    }, 1);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    return (
      <AboutUsContainer
          className="flex flex-col lg:scroll-mt-24 mt-44 max-w-[1111px] w-full"
          id='AboutUsContainer'
          ref={sectionRef}
        >
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1">
            <div>
              <div ref={aboutUsBack}></div>
              <div className="my-auto z-20 " ref={aboutUsRef}>
                <div className="font-objektiv-mk2 text-center lg:text-left sm:text-center md:text-left lg:text-[40px] md:text-[30px] sm:text-[30px] text-[30px] text-white font-medium">{aboutUsTitle}</div>
              </div>
      
              <div className="m-auto z-20" ref={dividerRef}>
                <Divider style={{borderColor: 'white'}} />
              </div>
            </div>
            <div></div>

            <div className="my-auto md:col-span-2 lg:col-span-2">
              <div ref={paragraph1} className='px-3'>
                <p className="font-objektiv-mk2 mt-2 mb-24 text-white text-[16px]" >
                  {t(aboutUsDescription?.[0])}
                </p>
                  <p className="font-objektiv-mk2 mt-20 mb-5 text-white text-[16px]">
                    {t(aboutUsDescription?.[1])}
                  </p>
              </div>
              
            </div>
          </div>
        </AboutUsContainer>
    );
}

const AboutUsContainer = styled.section`
    @media (min-width: 628px) {
        margin-bottom: 8rem
    }
    @media (max-width: 627px) {
        margin-bottom: 2rem;
    }
`;
