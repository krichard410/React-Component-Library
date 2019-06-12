import React, { useState } from "react";
import StarRatingComponent from "react-star-rating-component";

// class Rating extends React.Component {
//     constructor() {
//       super();
  
//       this.state = {
//         rating: 1
//       };
//     }
  
//     onStarClick(nextValue, prevValue, name) {
//       this.setState({ rating: nextValue });
//     }
  
//     render() {
//       const { rating } = this.state;
  
//       return (
//         <div>
//           <h2 style={{ fontSize: 25 }}>Rating value: {rating}</h2>
//           <StarRatingComponent
//             name="rating"
//             starCount={5}
//             value={rating}
//             renderStarIcon={() => <span style={{ fontSize: 35}}></span>}
//             onStarClick={this.onStarClick.bind(this)}
//           />
//         </div>
//       );
//     }
//   }

const Rating = () => {
    const [rating, setRating] = useState(1); 
    const starClick = ({nextValue, prevValue, name}) => setRating(nextValue, prevValue, name)
    return(
        <div>
           <h2 style={{ fontSize: 25 }}>Rating value: {rating}</h2>
           <StarRatingComponent
            name="rating"
             starCount={5}
             value={rating}
             renderStarIcon={() => <span style={{ fontSize: 35}}></span>}
             onStarClick = {starClick}
           />
         </div>
    )
}

  export default Rating;