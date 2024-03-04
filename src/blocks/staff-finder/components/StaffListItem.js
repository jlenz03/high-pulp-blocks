import React from "react";
export default class StaffListItem extends React.Component {
	render() {
		const {person} = this.props;
		//const person = this.props.person
		return (
			<li>
				{person.title.rendered}
			</li>
		)
	}
}
