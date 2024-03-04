import React from "react";
import StaffListItem from "./StaffListItem";
export default class StaffList extends React.Component {
	render() {
		return (
			<ul>
				{this.props.staff.map(person => (
					<StaffListItem person={person}/>
				))}

			</ul>
		)
	}
}
