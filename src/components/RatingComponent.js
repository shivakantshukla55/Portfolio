import styled from "styled-components";
import StarRatings from "react-star-ratings";
import { STYLE_VAR } from "../constants/cssVariables";

export const RatingComponent = ({ rating }) => {
  return (
    <Conatiner>
      <StarRatings
        rating={rating}
        starRatedColor={STYLE_VAR.goldColor}
        isSelectable={false}
        starDimension={STYLE_VAR.starDimension}
      />
    </Conatiner>
  );
};

//style
const Conatiner = styled.div`
  //
`;
