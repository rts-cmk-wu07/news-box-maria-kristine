// /** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react";
// import SwipeToDelete from "react-swipe-to-delete-ios";

// const NewsPost = ({ article }) => {
//   const styles = {
//     newsPost: css`
//       display: flex;

//       gap: 20px;
//       margin: 24px 0 0 0;
//       align-items: center;
//       border-bottom: 1px solid #e0e1e2;
//       padding: 0 21px 24px 20px;
//       background-color: #fff;
//       & img {
//         width: 70px;
//         height: 70px;
//       }
//       & div {
//       }
//       & h3 {
//         font-size: 0.8rem;
//       }
//       & p {
//         font-size: 0.6rem;
//         color: #6e8ca0;
//         font-weight: lighter;
//       }
//     `,
//   };
//   console.log(article);
//   return (
//     <div>
//       {article.results.map((article, i) => {
//         return (
          
//           <div css={styles.newsPost} key={i}>
            
//               {article.multimedia !== null ? (
//                 <img src={article.multimedia[2].url} alt="" />
//               ) : (
//                 <img src="images/placement.png" alt="" />
//               )}
//               <div>
//                 <h3>{article.title}</h3>
//                 <p>{article.abstract}</p>
//               </div>
//               <SwipeToDelete/>
            
//           </div>
          
//         );
//       })}
//     </div>
//   );
// };

// export default NewsPost;
