import React from "react";
import {InspectorControls} from "@wordpress/block-editor";
import {ColorPalette, ColorPicker, PanelBody, PanelRow, SelectControl} from "@wordpress/components";

export class BlockSettings extends React.Component {
	render(){
		const {attributes, setAttributes} = this.props;
		return (
			<InspectorControls>
				<PanelBody title="Basic" initialOpen={true}>
					<PanelRow>
						<SelectControl
						label="Quote Background Color"
						value={attributes.backgroundColorClass}
						onChange={backgroundColorClass => setAttributes ({backgroundColorClass})}
						options={[
						{value: '', label: 'Default'},
						{value: 'bg-primary-blue', label: 'Primary Blue'},
						{value: 'bg-primary-red', label: 'Primary Red'},
						{value: 'pretty-lilac', label: 'Lilac'},
						{value: 'baby-blue', label: 'Baby Blue'},
						]}

						/>
					</PanelRow>
					<PanelRow>
						Border Color
						<ColorPalette
							colors={[
								{name: 'lilac', color: '#b1b1f5'},
								{name: 'baby blue', color: '#60aff1'}
							]}
							value={attributes.borderColor}
							onChange={borderColor => setAttributes({borderColor})}
							disableCustomColors = {true}
						/>

					</PanelRow>
					<PanelRow>
						textColor
					</PanelRow>
					<PanelRow>
						<ColorPicker
							color={attributes.textColor}
							onChange={textColor => setAttributes({textColor})} />
					</PanelRow>
				</PanelBody>
			</InspectorControls>
		)
	}
}
