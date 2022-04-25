import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext);
  let averege =
    feedback.reduce((acc, cur) => acc + cur.rating, 0) / feedback.length;

  averege = averege.toFixed(1).replace(/[.,]0$/, "");
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(averege) ? 0 : averege}</h4>
    </div>
  );
};

export default FeedbackStats;
