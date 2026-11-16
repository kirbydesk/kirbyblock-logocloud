<?php

// Config
$config   = pwConfig::load('pwlogocloud');
$settings = $config['content'];
$defaults = $config['defaults'];

// Custom Background
pwSnippet::customCss($block);

// Section + Grid open
echo pwSnippet::sectionOpen('logocloud', $block, $settings);
echo pwSnippet::gridOpen($block);

// Tagline
if (!empty($settings['tagline'])):
	snippet('tagline', ['content' => $block]);
endif;

// Heading
if (!empty($settings['heading'])):
	snippet('heading', ['content' => $block]);
endif;

// Editor
if (!empty($settings['editor'])):
	snippet('editor', ['content' => $block]);
endif;

// Logos (SVG files)
$logos = $block->logos()->toFiles();
if ($logos->count() > 0):

	// grid, or one row running endlessly (marquee)
	$display = $block->logodisplay()->or($defaults['logo-display'] ?? 'grid')->value() === 'marquee' ? 'marquee' : 'grid';

	echo '<div data-block="items"';
	echo ' data-display="'.$display.'"';
	if ($display === 'marquee'):
		echo ' data-edges="'.(($defaults['item-marquee-edges'] ?? 'soft') === 'hard' ? 'hard' : 'soft').'"';
	endif;
	foreach (['sm', 'md', 'lg', 'xl'] as $bp):
		echo ' data-per-row-'.$bp.'="'.$block->content()->get('logos'.$bp)->or($defaults['logos-'.$bp] ?? 4)->value().'"';
	endforeach;
	echo ' data-shape="'.($defaults['item-shape'] ?? 'round').'"';
	echo ' data-format="'.($defaults['item-format'] ?? 'square').'"';
	echo ' data-align="'.$block->logosalignment()->or($config['fields']['align-logos'] ?? 'center')->value().'"';
	echo '>'."\n";

	// the marquee: the logos repeated until the row is surely wider than the
	// screen, then all of it once more – the track moves by half its length,
	// the jump back can't be seen (the copies hidden from screen readers)
	$tiles = [];
	foreach ($logos as $file):
		$name = esc($file->logoName()->value(), 'attr');
		// SVGs as they are, raster images as a small WebP thumb
		$src  = $file->extension() === 'svg' ? $file->url() : $file->thumb(['width' => 480, 'format' => 'webp'])->url();
		$img  = '<img data-field="logo" src="'.$src.'" alt="'.$name.'"'.($name !== '' ? ' title="'.$name.'"' : '').' loading="lazy">';

		// With a website the whole circle links to it (new tab)
		$tiles[] = $file->logoLink()->isNotEmpty()
			? ['<a data-block="item" href="'.esc($file->logoLink()->value(), 'attr').'" target="_blank" rel="noopener"', '>'.$img.'</a>']
			: ['<div data-block="item"', '>'.$img.'</div>'];
	endforeach;

	if ($display === 'marquee'):
		$repeat = (int) ceil(12 / count($tiles));
		// (the logos in one half: the speed is per logo, the same for every block)
		echo '<div data-marquee-track style="--pwlogocloud-marquee-count:'.($repeat * count($tiles)).'">'."\n";
		for ($copy = 0; $copy < $repeat * 2; $copy++):
			foreach ($tiles as [$open, $close]):
				// (copies: hidden, their links out of the tab order)
				echo $copy === 0 ? $open.$close : $open.' aria-hidden="true" tabindex="-1"'.$close;
				echo "\n";
			endforeach;
		endfor;
		echo '</div>'."\n";
	else:
		foreach ($tiles as [$open, $close]):
			echo $open.$close."\n";
		endforeach;
	endif;

	echo '</div>'."\n"; // End Items
endif;

// Close
echo pwSnippet::gridClose();
echo pwSnippet::sectionClose();
