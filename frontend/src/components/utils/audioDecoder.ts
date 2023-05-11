import React, { useRef, useEffect } from 'react';

// const AudioPlayer = ({ base64Audio }) => {
//   const audioRef = useRef(null);

//   const decodeBase64Audio = () => {
//     const binaryString = window.atob(base64Audio);
//     const bytes = new Uint8Array(binaryString.length);
//     for (let i = 0; i < binaryString.length; i++) {
//       bytes[i] = binaryString.charCodeAt(i);
//     }
//     return bytes.buffer;
//   };

//   useEffect(() => {
//     if (audioRef.current) {
//       audioRef.current.play();
//     }
//   }, []);

//   return (
//     <audio ref={audioRef} controls>
//       <source src={URL.createObjectURL(new Blob([decodeBase64Audio()], { type: 'audio/mpeg' }))} type="audio/mpeg" />
//     </audio>
//   );
// };

// export default AudioPlayer;
