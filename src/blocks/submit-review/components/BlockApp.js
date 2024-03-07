import React from "react";
import AddReviewForm from "./AddReviewForm";

export default class BlockApp extends React.Component {
	state = {
		reviews: [],
		loggedIn: null,
	};

	render() {
		return (
			<div>
				<h3>Latest Reviews</h3>
				<div>TODO</div>
				<hr />
				<h3>Submit a Review</h3>
				<AddReviewForm />
			</div>
		);
	}
}
