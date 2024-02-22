<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
$query = new WP_Query([
	'post_type' => 'staff',
	'orderby' => 'post_title',
	'order' => 'asc',
]);
?>
<div <?php echo get_block_wrapper_attributes(); ?>>
	<?php while($query->have_posts()):
	$query->the_post(); ?>

	<a class="flip-card" href="<?= get_the_permalink()?>">
		<div class="flip-card-inner">
			<div class="flip-card-front">
				<?= get_the_post_thumbnail()?>
			</div>
			<div class="flip-card-back">
				<h3 class="name"><?= get_the_title()?></h3>
				<div class="position"><?= get_post_meta(get_the_ID(), 'staff_position', true)?></div>
				<div class="bio">
					<p><?= get_the_excerpt()?></p>
				</div>
			</div>
		</div>
	</a>
<?php endwhile; ?>
</div>
