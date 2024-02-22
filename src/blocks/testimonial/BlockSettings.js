import React from "react";
import {InspectorControls} from "@wordpress/block-editor";
import {PanelBody, PanelRow} from "@wordpress/components";

export class BlockSettings extends React.Component {
	render(){
		return (
			<InspectorControls>
				<PanelBody title="Basic" initialOpen={true}>
					<PanelRow>
						Starter Demo!
					</PanelRow>
				</PanelBody>
			</InspectorControls>
		)
	}
}
