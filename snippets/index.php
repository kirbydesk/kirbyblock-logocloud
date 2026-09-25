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

	echo '<div data-block="items"';
	foreach (['sm', 'md', 'lg', 'xl'] as $bp):
		echo ' data-per-row-'.$bp.'="'.$block->content()->get('logos'.$bp)->or($defaults['logos-'.$bp] ?? 4)->value().'"';
	endforeach;
	echo ' data-shape="'.($defaults['item-shape'] ?? 'round').'"';
	echo ' data-align="'.$block->logosalignment()->or($config['fields']['align-logos'] ?? 'center')->value().'"';
	echo '>'."\n";

	foreach ($logos as $file):
		$name = esc($file->logoName()->value(), 'attr');
		$img  = '<img data-field="logo" src="'.$file->url().'" alt="'.$name.'"'.($name !== '' ? ' title="'.$name.'"' : '').' loading="lazy">';

		// With a website the whole circle links to it (new tab)
		if ($file->logoLink()->isNotEmpty()):
			echo '<a data-block="item" href="'.esc($file->logoLink()->value(), 'attr').'" target="_blank" rel="noopener">'.$img.'</a>'."\n";
		else:
			echo '<div data-block="item">'.$img.'</div>'."\n";
		endif;
	endforeach;

	echo '</div>'."\n"; // End Items
endif;

// Close
echo pwSnippet::gridClose();
echo pwSnippet::sectionClose();
