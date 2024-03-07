import React from "react";

export default class AddReviewForm extends React.Component {
	state = {
		title: '',
		review: '',
		rating: 0,
	};

	addReview(e) {
		e.preventDefault();

		const newReview = {
			title: this.state.title,
			content: this.state.review,
			acf: {
				review_rating: parseInt(this.state.rating) || 0,
			},

			// maybe you should validate better before doing this?
			status: 'publish',
		}

		// we can't assume any props are provided
		// ?. only calls the method if it exists
		this.props.addReview?.(newReview);
	}

	render() {
		return (
			<form
				className="new-review-form"
				onSubmit={e => this.addReview(e)}
			>
				<div>
					<label>
						Title:
						<input type="text"
							   value={this.state.title}
							   onInput={e => this.setState({title: e.target.value})}
						/>
					</label>
				</div>

				<div>
					<label>
						Overall Rating:
						<input type="number"
							   value={this.state.rating}
							   onInput={e => this.setState({rating: e.target.value})}
						/>
					</label>
				</div>

				<div>
					<label>
						Review:
						<textarea
							value={this.state.review}
							onInput={e => this.setState({review: e.target.value})}
						/>
					</label>
				</div>

				<button type="submit">Add Review</button>
			</form>
		);
	}

};
