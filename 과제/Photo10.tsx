// import { useSelector } from 'react-redux';
// import { RootState } from '../../store';

// const Photo = () => {
//   const photo = useSelector((state:RootState) => state.photo)
  
//   return (
//     <div>
//       <h2 className= "text-name">Photos</h2>
//       <div className="d-flex flex-wrap">
//         {photo.data.map((item, index) => (
//           <div
//             className="card"
//             style={{
//               width: "calc((100% - 3rem) / 4)", //3rem이 나온거는 4 -1rem
//               marginLeft: index % 4 === 0 ? "0" : "1rem"
//               marginTop: index > 4 ? "1rem" : "0",
//             }}
//           >
            
//         <div className="card-header">
//               <img
//                 width={24}
//                 height={16}
//                 src={item.profileUrl}
//                 alt={item.username}
                
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>;
//   )
// };


// export default Photo;