<?php
function jl_add_borders( $block_content = '', $block = [] ) {
	//get the attributes while setting defaults
	$defaults =[
		'borderStyle' => 'none',
		'borderPadding' => 10,
		'borderWidth' => 2,
		'borderRadius' => 0,
		'borderColor' => ''
	];
	$attrs = array_merge($defaults, $block['attrs']);
	//only do this for blocks that have borders
	if($attrs['borderStyle'] !== 'none'){
		$style = "
		border-style: {$attrs['borderStyle']};
		padding: {$attrs['borderPadding']}px;
		border-width: {$attrs['borderWidth']}px;
		border-radius: {$attrs['borderRadius']}px;
		border-color:  {$attrs['borderColor']};
		";
		return '<div style="' . $style . '">' . $block_content . '</div>';
	}

	// return unmodified block content
	return $block_content;
}

add_filter( 'render_block', 'jl_add_borders', 10, 2 );
