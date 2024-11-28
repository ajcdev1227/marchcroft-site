// import { OurTeamCard } from "../../components/OurTeamCard";
// import { MTitle } from "../../components/Text";

// export const OurTeamSection = () => {
//     const data = [
//         {
//             imageUrl: '/img/015.jpg',
//             title: 'David Osseo-Asare',
//             description: 'Senior Consultant and Software Architecture expert',
//             summary: 'David has extensive experience helping all size companies achieve digital excellence and generate value.'


//         }
//     ]
//     return (
//         <div>
//             <div className="">
//                 <div className="">
//                     <MTitle className="mx-5 lg:mx-0">Speak to our team of friendly experts today…</MTitle>
//                     <div className="flex mb-10 justify-center">
//                         {data.map((data, i) => 
//                         <OurTeamCard
//                             key={data.title}
//                             imageUrl={data.imageUrl} 
//                             title={data.title} 
//                             description={data.description} 
//                             summary={data.summary} />
//                             )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }