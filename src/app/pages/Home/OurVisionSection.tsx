"use client";

/** @format */

import { Divider } from "@mui/material";
import { useEffect, useRef } from "react";
import { debounce } from "lodash";
import { useTranslation } from "react-i18next";

export const OurVisionSection = (props: any) => {
  const { ourVisionTitle, ourVisionDescription } = props;

  // Ref Elements
  const paragraph1 = useRef<HTMLDivElement>(null);
  const ourVisionBack = useRef<HTMLDivElement>(null);
  const dividerVisionRef = useRef<HTMLDivElement>(null);
  const ourVisionRef = useRef<HTMLDivElement>(null);

  const { t, i18n } = useTranslation();

  // Effect to handle scrolling interactions
  useEffect(() => {
    let isScrolling = false;

    // Check if the dividerVisionRef exists
    if (dividerVisionRef.current) {
      dividerVisionRef.current.style.display = "none";
      dividerVisionRef.current.style.transform = `translateY(${0}px)`;
    }
    // Check if the dividerVisionRef exists
    if (paragraph1.current) {
      paragraph1.current.style.display = "none";
    }
    // Check if the ourVisionRef exists
    if (ourVisionRef.current) {
      ourVisionRef.current.style.position = "";
      if (window.innerWidth >= 768 && i18n.language === "es") {
        ourVisionRef.current.style.width = "120px";
      } else {
        ourVisionRef.current.style.width = "auto";
      }
    }
    // Check if the ourVisionBack ref exists
    if (ourVisionBack.current) {
      ourVisionBack.current.style.background = "none";
      ourVisionBack.current.style.position = "none";
      ourVisionBack.current.style.width = "0";
      ourVisionBack.current.style.height = "0";
    }

    // Function to handle scrolling
    const handleScroll = debounce(() => {
      if (!isScrolling) {
        isScrolling = true;
        requestAnimationFrame(() => {
          const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;

          // Handle paragraph1 scrolling animation
          if (paragraph1.current) {
            paragraph1.current.style.display = "block";
            if (window.innerWidth > 767) {
              paragraph1.current.style.transform = `translateY(${
                1800 + -1 * scrollTop * 0.5
              }px)`;
            } else if (window.innerWidth <= 767 && window.innerWidth > 500) {
              paragraph1.current.style.transform = `translateY(${
                1700 + -1 * scrollTop * 0.5
              }px)`;
            } else if (window.innerWidth <= 500 && window.innerWidth > 300) {
              paragraph1.current.style.transform = `translateY(${
                1700 + -1 * scrollTop * 0.5
              }px)`;
            } else if (window.innerWidth <= 300) {
              paragraph1.current.style.transform = `translateY(${
                1650 + -1 * scrollTop * 0.5
              }px)`;
            }
          }

          // Handle ourVisionRef scrolling animation
          if (ourVisionRef.current) {
            if (window.innerWidth >= 768 && i18n.language === "es") {
              ourVisionRef.current.style.width = "120px";
            } else {
              ourVisionRef.current.style.width = "auto";
            }
            if (window.innerWidth <= 767 && window.innerWidth > 539) {
              if (i18n.language === "en" || i18n.language === "pt") {
                ourVisionRef.current.style.left = "38%";
              } else {
                ourVisionRef.current.style.left = "33%";
              }
            } else if (window.innerWidth <= 539 && window.innerWidth > 480) {
              if (i18n.language === "en" || i18n.language === "pt") {
                ourVisionRef.current.style.left = "38%";
              } else {
                ourVisionRef.current.style.left = "33%";
              }
            } else if (window.innerWidth <= 480 && window.innerWidth > 426) {
              if (i18n.language === "en" || i18n.language === "pt") {
                ourVisionRef.current.style.left = "36%";
              } else {
                ourVisionRef.current.style.left = "31%";
              }
            } else if (window.innerWidth <= 426 && window.innerWidth > 380) {
              if (i18n.language === "en" || i18n.language === "pt") {
                ourVisionRef.current.style.left = "31%";
              } else {
                ourVisionRef.current.style.left = "27%";
              }
            } else if (window.innerWidth <= 380 && window.innerWidth > 325) {
              if (i18n.language === "en" || i18n.language === "pt") {
                ourVisionRef.current.style.left = "30%";
              } else {
                ourVisionRef.current.style.left = "23%";
              }
            } else if (window.innerWidth <= 325 && window.innerWidth > 290) {
              ourVisionRef.current.style.left = "28%";
            } else if (window.innerWidth <= 290) {
              ourVisionRef.current.style.left = "25%";
            } else if (window.innerWidth > 767) {
              ourVisionRef.current.style.left = "none";
            }

            if (window.innerWidth <= 767 && window.innerWidth > 539) {
              if (scrollTop >= 1920 && scrollTop < 2460) {
                ourVisionRef.current.style.position = "fixed";
                ourVisionRef.current.style.transform = `translateY(${0}px)`;
                ourVisionRef.current.style.top = "100px";
              } else if (scrollTop >= 2460 && scrollTop < 2600) {
                ourVisionRef.current.style.top = "150px";
                ourVisionRef.current.style.position = "fixed";
                ourVisionRef.current.style.transform = `translateY(${
                  2460 + -1 * scrollTop * 1.0
                }px)`;
              } else {
                ourVisionRef.current.style.transform = `translateY(${0}px)`;
                ourVisionRef.current.style.position = "";
              }
            } else if (window.innerWidth <= 539 && window.innerWidth > 375) {
              if (scrollTop >= 1800 && scrollTop < 2520) {
                ourVisionRef.current.style.position = "fixed";
                ourVisionRef.current.style.transform = `translateY(${0}px)`;
                ourVisionRef.current.style.left = "none";
                ourVisionRef.current.style.top = "145px";
              } else if (scrollTop >= 2520 && scrollTop < 2600) {
                ourVisionRef.current.style.position = "fixed";
                ourVisionRef.current.style.top = "145px";
                ourVisionRef.current.style.left = "none";
                ourVisionRef.current.style.transform = `translateY(${
                  2520 + -1 * scrollTop * 1.0
                }px)`;
              } else {
                ourVisionRef.current.style.transform = `translateY(${0}px)`;
                ourVisionRef.current.style.position = "";
              }
            } else if (window.innerWidth <= 375 && window.innerWidth > 300) {
              if (scrollTop >= 1900 && scrollTop < 2640) {
                ourVisionRef.current.style.position = "fixed";
                ourVisionRef.current.style.left = "none";
                ourVisionRef.current.style.transform = `translateY(${0}px)`;
                ourVisionRef.current.style.top = "100px";
              } else if (scrollTop >= 2640 && scrollTop < 2900) {
                ourVisionRef.current.style.position = "fixed";
                ourVisionRef.current.style.left = "none";
                ourVisionRef.current.style.top = "100px";
                ourVisionRef.current.style.transform = `translateY(${
                  2640 + -1 * scrollTop * 1.0
                }px)`;
              } else {
                ourVisionRef.current.style.transform = `translateY(${0}px)`;
                ourVisionRef.current.style.position = "";
              }
            } else if (window.innerWidth <= 300) {
              if (scrollTop >= 2400 && scrollTop < 3360) {
                ourVisionRef.current.style.position = "fixed";
                ourVisionRef.current.style.left = "none";
                ourVisionRef.current.style.transform = `translateY(${0}px)`;
                ourVisionRef.current.style.top = "100px";
              } else if (scrollTop >= 3360) {
                ourVisionRef.current.style.top = "100px";
                ourVisionRef.current.style.position = "fixed";
                ourVisionRef.current.style.left = "none";
                ourVisionRef.current.style.transform = `translateY(${
                  3360 + -1 * scrollTop * 1.0
                }px)`;
              } else {
                ourVisionRef.current.style.transform = `translateY(${0}px)`;
                ourVisionRef.current.style.position = "";
              }
            } else if (window.innerWidth > 767) {
              if (scrollTop >= 1700 && scrollTop < 2500) {
                ourVisionRef.current.style.transform = `translateY(${0}px)`;
                ourVisionRef.current.style.position = "fixed";
                ourVisionRef.current.style.left = "none";
                ourVisionRef.current.style.top = "350px";
              } else if (scrollTop >= 2500 && scrollTop < 2820) {
                ourVisionRef.current.style.top = "350px";
                ourVisionRef.current.style.left = "none";
                ourVisionRef.current.style.position = "fixed";
                ourVisionRef.current.style.transform = `translateY(${
                  2500 + -1 * scrollTop * 1.0
                }px)`;
              } else {
                ourVisionRef.current.style.position = "";
                ourVisionRef.current.style.transform = `translateY(${0}px)`;
              }
            }
          }

          if (dividerVisionRef.current) {
            dividerVisionRef.current.style.display = "block";
            let dividerWidth = 0;

            if (window.innerWidth <= 767 && window.innerWidth > 539) {
              dividerVisionRef.current.style.left = "41%";
            } else if (window.innerWidth <= 539 && window.innerWidth > 480) {
              dividerVisionRef.current.style.left = "40%";
            } else if (window.innerWidth <= 480 && window.innerWidth > 426) {
              dividerVisionRef.current.style.left = "38%";
            } else if (window.innerWidth <= 426 && window.innerWidth > 380) {
              dividerVisionRef.current.style.left = "35%";
            } else if (window.innerWidth <= 380 && window.innerWidth > 325) {
              dividerVisionRef.current.style.left = "33%";
            } else if (window.innerWidth <= 325 && window.innerWidth > 290) {
              dividerVisionRef.current.style.left = "33%";
            } else if (window.innerWidth <= 290) {
              dividerVisionRef.current.style.left = "28%";
            } else if (window.innerWidth > 767 && window.innerWidth <= 1023) {
              dividerVisionRef.current.style.left = "30%";
            } else if (window.innerWidth > 1023) {
              dividerVisionRef.current.style.left = "35%";
            }

            if (window.innerWidth <= 767 && window.innerWidth > 539) {
              dividerVisionRef.current.style.position = "fixed";
              if (scrollTop >= 1920 && scrollTop < 2460) {
                dividerVisionRef.current.style.top = `150px`;
                dividerVisionRef.current.style.transform = `translateY(${0}px)`;
                dividerWidth = (scrollTop - 1920) * (117 / (2460 - 1920));
              } else if (scrollTop >= 2460 && scrollTop < 2600) {
                dividerWidth = 117;
                dividerVisionRef.current.style.transform = `translateY(${
                  2460 + -1 * scrollTop * 1.0
                }px)`;
              } else {
                dividerVisionRef.current.style.position = "";
                dividerVisionRef.current.style.transform = `translateY(${0}px)`;
              }
            } else if (window.innerWidth <= 539 && window.innerWidth > 375) {
              dividerVisionRef.current.style.position = "fixed";
              if (scrollTop > 2040 && scrollTop < 2520) {
                dividerVisionRef.current.style.top = `195px`;
                dividerVisionRef.current.style.transform = `translateY(${0}px)`;
                dividerWidth = (scrollTop - 2040) * (117 / (2520 - 2040));
              } else if (scrollTop >= 2520 && scrollTop < 2650) {
                dividerWidth = 117;
                dividerVisionRef.current.style.transform = `translateY(${
                  2520 + -1 * scrollTop * 1.0
                }px)`;
              } else {
                dividerVisionRef.current.style.position = "";
                dividerVisionRef.current.style.transform = `translateY(${0}px)`;
              }
            } else if (window.innerWidth <= 375 && window.innerWidth > 300) {
              dividerVisionRef.current.style.position = "fixed";
              if (scrollTop > 1900 && scrollTop < 2640) {
                dividerVisionRef.current.style.top = `150px`;
                dividerVisionRef.current.style.transform = `translateY(${0}px)`;
                dividerWidth = (scrollTop - 1900) * (117 / (2640 - 1900));
              } else if (scrollTop >= 2640 && scrollTop < 3000) {
                dividerWidth = 117;
                dividerVisionRef.current.style.transform = `translateY(${
                  2640 + -1 * scrollTop * 1.0
                }px)`;
              } else {
                dividerVisionRef.current.style.position = "";
                dividerVisionRef.current.style.transform = `translateY(${0}px)`;
              }
            } else if (window.innerWidth <= 300) {
              dividerVisionRef.current.style.position = "fixed";
              if (scrollTop > 2400 && scrollTop < 3360) {
                dividerVisionRef.current.style.top = `150px`;
                dividerVisionRef.current.style.transform = `translateY(${0}px)`;
                dividerWidth = (scrollTop - 2400) * (117 / (3360 - 2400));
              } else if (scrollTop >= 3360) {
                dividerWidth = 117;
                dividerVisionRef.current.style.transform = `translateY(${
                  3360 + -1 * scrollTop * 1.0
                }px)`;
              } else {
                dividerVisionRef.current.style.position = "";
                dividerVisionRef.current.style.transform = `translateY(${0}px)`;
              }
            } else if (window.innerWidth > 767) {
              dividerVisionRef.current.style.position = "fixed";
              if (scrollTop > 2040 && scrollTop < 2500) {
                dividerVisionRef.current.style.top = `380px`;
                dividerVisionRef.current.style.transform = `translateY(${0}px)`;
                dividerWidth = (scrollTop - 2040) * (117 / (2500 - 2040));
              } else if (scrollTop >= 2500 && scrollTop < 2820) {
                dividerWidth = 117;
                dividerVisionRef.current.style.transform = `translateY(${
                  2500 + -1 * scrollTop * 1.0
                }px)`;
              } else {
                dividerVisionRef.current.style.position = "";
                dividerWidth = 0;
                dividerVisionRef.current.style.transform = `translateY(${0}px)`;
              }
            }

            dividerVisionRef.current.style.width = `${dividerWidth}px`;
          }

          if (ourVisionBack.current) {
            if (window.innerWidth <= 767 && window.innerWidth > 500) {
              if (scrollTop >= 2250 && scrollTop < 3200) {
                ourVisionBack.current.style.background = "#0D1B2A";
                ourVisionBack.current.style.position = "fixed";
                ourVisionBack.current.style.top = "5px";
                ourVisionBack.current.style.left = "0";
                ourVisionBack.current.style.width = "100%";
                ourVisionBack.current.style.height = "200px";
                ourVisionBack.current.style.zIndex = "9";
              } else {
                ourVisionBack.current.style.background = "none";
                ourVisionBack.current.style.position = "none";
                ourVisionBack.current.style.width = "0";
                ourVisionBack.current.style.height = "0";
              }
            } else if (window.innerWidth <= 500 && window.innerWidth > 300) {
              if (scrollTop >= 2040 && scrollTop < 2650) {
                ourVisionBack.current.style.background = "#0D1B2A";
                ourVisionBack.current.style.position = "fixed";
                ourVisionBack.current.style.top = "5px";
                ourVisionBack.current.style.left = "0";
                ourVisionBack.current.style.width = "100%";
                ourVisionBack.current.style.height = "200px";
                ourVisionBack.current.style.zIndex = "9";
              } else {
                ourVisionBack.current.style.background = "none";
                ourVisionBack.current.style.position = "none";
                ourVisionBack.current.style.width = "0";
                ourVisionBack.current.style.height = "0";
              }
            } else if (window.innerWidth <= 300) {
              if (scrollTop >= 2718 && scrollTop < 3360) {
                ourVisionBack.current.style.background = "#0D1B2A";
                ourVisionBack.current.style.position = "fixed";
                ourVisionBack.current.style.top = "5px";
                ourVisionBack.current.style.left = "0";
                ourVisionBack.current.style.width = "100%";
                ourVisionBack.current.style.height = "150px";
                ourVisionBack.current.style.zIndex = "9";
              } else {
                ourVisionBack.current.style.background = "none";
                ourVisionBack.current.style.position = "none";
                ourVisionBack.current.style.width = "0";
                ourVisionBack.current.style.height = "0";
              }
            }
          }

          isScrolling = false;
        });
      }
    }, 1);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="flex flex-col lg:scroll-mt-24 mt-36 mb-36 max-w-[1111px] h-[1280px] w-full"
      id="OurVisionContainer"
    >
      {/* Our Vision section content */}
      <div className="w-full flex justify-between">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1">
          <div>
            {/* Background for Our Vision title */}
            <div ref={ourVisionBack}></div>
            <div className="my-auto z-20" ref={ourVisionRef}>
              <div className="font-objektiv-mk2 text-center lg:text-left md:text-left lg:text-[40px] md:text-[30px] sm:text-[30px] text-[30px] text-white font-[500px]">
                {ourVisionTitle}
              </div>
            </div>
            <div className="m-auto z-20" ref={dividerVisionRef}>
              {/* Divider below the Our Vision title */}
              <Divider className="bg-white" sx={{ borderColor: "white" }} />
            </div>
          </div>
          <div></div>
          <div className="my-auto md:col-span-2 lg:col-span-2">
            <div className="px-3" ref={paragraph1}>
              <p className="font-objektiv-mk2 mt-2 mb-5 text-white text-[16px]">
                {ourVisionDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
