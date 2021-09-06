// import React, { useRef, useState } from "react";

// interface PhotoState {
//   id: number;
//   url: string | undefined;
//   type: string | undefined;
//   content?: string | undefined;
//   dataUrl?: string | undefined;
//   createTime: number;
//   modifytime?: number;
//   isEdit?: boolean;
// }

// const getTimeString = (unixTime: number) => {
//   const dateTime = new Date(unixTime);
//   return `${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`;
// };

// const Photo = () => {
//   const [PhotoList, setPhotoList] = useState<PhotoState[]>([]);
//   const formRef = useRef<HTMLFormElement>(null);
//   const fileRef = useRef<HTMLInputElement>(null);
//   const textareaRef = useRef<HTMLTextAreaElement>(null);

//   console.log(textareaRef);
//   console.log(textareaRef.current?.value);

//   const add = (e: React.KeyboardEvent<HTMLInputElement> | null) => {
//     if (e) {
//       if (e.code !== "Enter") return; 
//     }

//     if (fileRef.current?.files?.length) {
//       const text = textareaRef.current?.value;
//       const file = fileRef.current?.files[0];
//       const reader = new FileReader(); 
//       reader.readAsDataURL(file); 

//       reader.onload = () => {
//         post(
//           reader.result?.toString(),
//           file.type,
//           text
//         );
//       };
//     } else {
//       post(undefined, undefined, undefined);
//     }
//   };



//   const post = (
//     dataUrl: string | undefined, 
//     fileType: string | undefined, 
//     inputText: string | undefined 
//   ) => {
//     const data: PhotoState = {
//       id: PhotoList.length > 0 ? PhotoList[0].id + 1 : 1,
//       url: dataUrl?.toString(),
//       createTime: new Date().getTime(),
//       type: fileType,
//       content: inputText,
//     };
//     console.log(data);

//     setPhotoList([data, ...PhotoList]);
//   };

//   const del = (id: number) => {
//     setPhotoList(PhotoList.filter(item => item.id !== id));
//   };

//   return (
//     <>
//       <h2 className="text-center my-5">Photos</h2>
//       <form 
//         ref={formRef}
//         className="mt-5"
//         onSubmit={(e) => {
//           e.preventDefault();
//         }}
//       >
//         <textarea 
//           box-sizing="border-box"
//           className="form-control mb-1 w-100"
//           placeholder="Title of image"
//           ref={textareaRef}
//         >
//         </textarea>
//         <div className="d-flex">
//           <input
//             ref={fileRef}
//             type="file"
//             className="form-control me-1"
//             accept="image/*, video/*"
//           />
//           <button
//             className="btn btn-primary text-nowrap"
//             type="button"
//             onClick={() => {
//               add(null);
//             }}
//           >
//             입력
//           </button>
//         </div>
//       </form>
//       {PhotoList.map((item) => (
//         <div className="card mt-1" key={item.id}>
//           {item.type &&
//             (item.type?.includes("image") ? (
//               <img src={item.url} className="card-img-top" alt={item.content} />
//             ) : (
//               <video className="card-img-top" controls>
//                 <source src={item.url} type="video/mp4"></source>
//               </video>
//             ))}

//           <div className="card-body">
//             <p className="card-text">{item.content}</p>

//             <span className="text-secondary">
//               {getTimeString(
//                 item.modifytime ? item.modifytime : item.createTime
//               )}
//             </span>
//           </div>
//           {!item.isEdit && (
//             <button
//               className="btn btn-outline-secondary btn-sm text-nowrap"
//               onClick={() => {
//                 del(item.id);
//               }}
//             >
//               삭제
//             </button>
//           )}
//           <a
//             href="#!"
//             onClick={(e) => {
//               e.preventDefault();
//               del(item.id);
//             }}
//             className="link-secondary fs-6 text-nowrap"
//           >
//           </a>
//           {!item.isEdit && (
//               <button
//                 className="btn btn-outline-secondary btn-sm text-nowrap"
//                 onClick={() => {
//                   del(item.id);
//                 }}
//               >
                
//               </button>
//             )}
//         </div>
//       ))}
//     </>
//   );
// };

// export default Photo;