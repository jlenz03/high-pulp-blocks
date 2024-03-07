import React from "react";
import AddReviewForm from "./AddReviewForm";
import ReviewList from "./ReviewList";

export default class BlockApp extends React.Component {
	state = {
		reviews2: [],
		loggedIn: null,
	};
 	addReview(newReview){
		 const review2 = new wp.api.models.Review2(newReview);
		 review2.save().done(data => {
			 console.log('saved!', data);
			this.getReviews();
		 }).fail(jqXHR => {
			 console.error('failed!', jqXHR)
		 });
	}

	getReviews(){
		// by default, it gives you 10
		 const reviewCollection = new wp.api.collections.Review2();
		 reviewCollection.fetch()
			 .done(data => {
				 console.log('reviews!!', data, reviewCollection);
				 //store models in our state
				 this.setState({reviews2: reviewCollection.models})
			 })
			 .fail(jqXHR => {
				 this.getReviews();
			 })
	}
	getLoggedInUser() {
		 const user =  new wp.api.models.UsersMe();
		 user.fetch()
			 .done(user => {
				 this.setState({loggedIn: true});

			 })
			 .fail(jqXHR => {
			 //not logged in
				 this.setState({loggedIn: false});
	})
	}

	componentDidMount() {
		 this.getReviews();
		 this.getLoggedInUser()
	}


	render() {
		return (
			<div>
				<h3>Latest Reviews</h3>
				<ReviewList reviews2={this.state.reviews2}/>
				<hr />
				<h3>Submit a Review</h3>
				{this.state.loggedIn === true && <AddReviewForm  addReview={reviewObj => this.addReview(reviewObj)}/>}
				{this.state.loggedIn === false && <AddReviewForm  addReview={reviewObj => this.addReview(reviewObj)}/>}
			</div>
		);
	}
}
