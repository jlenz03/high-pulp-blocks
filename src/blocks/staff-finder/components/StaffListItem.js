import React from "react";

export default class StaffListItem extends React.Component {
	render() {
		const { person } = this.props;
		//const person = this.props.person

		return (
			<a className="flip-card" href={person.link}>
				<div className="flip-card-inner">
					<div className="flip-card-front">
						<img src={person._embedded['wp:featuredmedia']['0'].source_url} alt=""/>
					</div>
					<div className="flip-card-back">
						<h3 className="name">{person.title.rendered}</h3>

						<p className="position">{person.acf.staff_position}</p>

							<div className="bio" dangerouslySetInnerHTML={{ __html: person.content.rendered }} />

					</div>
				</div>
			</a>
		);
	}
}
