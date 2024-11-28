// import { css } from "@emotion/css";
// import { Avatar } from "@mui/material";
// import { MParagraph } from "./Text";


// export const OurTeamCard = ({imageUrl, title, description, summary}: {imageUrl: string, title: string, description: string, summary: string}) => {
//     return (
//         <div className="flex flex-row bg-[#2D26A3] w-full md:w-1/2 mx-5 px-5 my-10 rounded-3xl" >
//             <div className={contentCss} style={{borderRight: '1px solid #FFF'}}>
//                 <div className="w-36 h-36 lg:w-48 lg:h-48">
//                 <Avatar alt="Remy Sharp" src={imageUrl} sx={{ height: '100%', width: '100%', display: 'flex'}}/>
//                 </div>
//                 <MParagraph className="font-bold text-primary-800 mx-auto mt-5 text-center"><b>{title}</b></MParagraph>
//                 <MParagraph className="text-primary-800 text-center mt-5">{description}</MParagraph>
//             </div>
//             <div className={contentCss} >
//                 <MParagraph className="ml-5 text-primary-800">
//                     {summary}
//                 </MParagraph>
//             </div>
//         </div>
//     );
// }

// const contentCss = css({
//     margin: '0 auto',
//     width: '50%',
//     alignItems: 'center',
//     justifyContent: 'center',
//     display: 'flex',
//     flexDirection: 'column',
//     height: '560px'
    
// }); 