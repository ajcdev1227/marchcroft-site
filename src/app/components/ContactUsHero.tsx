import { MParagraph } from "./Text";
import { Fade } from "react-awesome-reveal";

export const ContactUsHero = () => {
    return (
        <div className="flex max-w-screen-2xl lg:px-14">
            <div className="h-1/3 w-full lg:order-1 order-2">
                {/* <Fade cascade delay={500}>
                    <p className="text-primary-800 mt-20 mb-16 lg:text-[73px] md:text-[45px] sm:text-[36px] text-[36px] capitalize text-center mx-auto max-w-[1111px] font-bold font-objektiv-mk2">Contact Us</p>
                </Fade>
                <Fade cascade delay={500}>
                    <MParagraph className="text-white mb-10 text-center text-[20px] mx-auto max-w-[1111px]">We know this is a huge step, and your company’s dreams - You just need someone you can trust and you’ve got us!</MParagraph>
                </Fade>   */}
            </div>
        </div>
    );
}
