import React from "react";
import ReviewCard from "./ReviewCard";

export default class ReviewList extends React.Component {
	render(){
		return (
			<div className="review-list">
				{this.props.reviews2.map(review2 => (
					<ReviewCard title={review2.attributes.title.rendered}
								review={review2.attributes.content.rendered}
								rating = {review2.attributes.acf.review_rating}
								// key = {this.attributes.id}
					/>
				))}
			</div>
		)
	}

}
