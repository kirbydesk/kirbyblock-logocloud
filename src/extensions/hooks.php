<?php

use Kirby\Filesystem\F;

/**
 * SVGs without width/height have no intrinsic size when used in an <img>,
 * so Kirby's file preview collapses them. Missing dimensions are taken
 * from the viewBox.
 */
$addSvgDimensions = function ($file): void {
	if ($file->template() !== 'pwLogo' || $file->extension() !== 'svg') return;

	$svg = F::read($file->root());
	if ($svg === false || !preg_match('/<svg\b[^>]*>/i', $svg, $tag)) return;

	$tag = $tag[0];
	$hasWidth  = preg_match('/\swidth\s*=/i', $tag) === 1;
	$hasHeight = preg_match('/\sheight\s*=/i', $tag) === 1;
	if ($hasWidth && $hasHeight) return;
	if (!preg_match('/\sviewBox\s*=\s*["\']\s*[-\d.]+[\s,]+[-\d.]+[\s,]+([\d.]+)[\s,]+([\d.]+)\s*["\']/i', $tag, $viewBox)) return;

	$attrs = '';
	if (!$hasWidth)  $attrs .= ' width="' . $viewBox[1] . '"';
	if (!$hasHeight) $attrs .= ' height="' . $viewBox[2] . '"';

	F::write($file->root(), str_replace($tag, preg_replace('/^<svg\b/i', '<svg' . $attrs, $tag), $svg));
};

return [
	'file.create:after'  => fn ($file) => $addSvgDimensions($file),
	'file.replace:after' => fn ($newFile) => $addSvgDimensions($newFile),
];
