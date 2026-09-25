<?php

$perRowField = fn(string $breakpoint, $default) => [
	'type'    => 'range',
	'min'     => 1,
	'max'     => 8,
	'step'    => 1,
	'default' => (int)$default,
	'label'   => 'kirbyblock-logocloud.per-row.' . $breakpoint,
	'help'    => 'kirbyblock-logocloud.per-row.' . $breakpoint . '.help',
	'width'   => '1/2',
];

return [
	'blocks/pwlogocloud' => pwBlueprint::main('pwlogocloud', function ($cfg) use ($perRowField) {
		$defaults = $cfg['defaults'];
		$config   = pwConfig::load('pwlogocloud');
		$perRow   = fn(string $bp) => $perRowField($bp, $defaults['logos-' . $bp]);
		return [
			'name' => 'kirbyblock-logocloud.name',
			'icon' => 'logocloud',
			'contentFields' => array_merge(
				pwBlueprint::stdContent($cfg, ['tagline', 'heading', 'editor']),
				[
					// Align button in the header of the logos field (next to upload)
					'logosAlignment' => [
						'type'         => 'pwalign',
						'align'        => $config['fields']['align-logos'] ?? 'center',
						'default'      => $config['fields']['align-logos'] ?? 'center',
						'alignOptions' => $config['field-options']['logos']['align'] ?? null,
					],
					'logos' => [
						'type'     => 'files',
						'label'    => 'kirbyblock-logocloud.logos',
						'help'     => 'kirbyblock-logocloud.logos.help',
						'empty'    => 'kirbyblock-logocloud.logos.empty',
						'layout'   => 'cards',
						'size'     => 'tiny',
						'multiple' => true,
						'uploads'  => 'pwLogo',
						'query'    => 'page.files.template("pwLogo")',
						'image'    => ['back' => 'white', 'cover' => false],
						'text'     => '',
					],
				]
			),
			'layoutExtras' => [
				'headlinePerRow' => ['type' => 'headline', 'label' => 'kirbyblock-logocloud.per-row'],
				'logosSm'        => $perRow('sm'),
				'logosMd'        => $perRow('md'),
				'logosLg'        => $perRow('lg'),
				'logosXl'        => $perRow('xl'),
			],
		];
	}),

	'files/pwLogo' => __DIR__ . '/../blueprints/files/logo.yml',
];
