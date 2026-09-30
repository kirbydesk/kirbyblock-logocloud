<template>
	<!-- the block in the panel: its info bar and the shared preview of the
	     Project Wizard (the project's look, the real logos); a double click
	     opens the block -->
	<div class="pwPreview" data-kirbyblock="logocloud" @dblclick="open">

		<pwBlockinfo
			:value="$t('kirbyblock-logocloud.name')"
			:design="'pwlogocloud'"
			icon="logocloud"
		/>

		<pw-block-panel-preview type="pwlogocloud" :content="content" />

	</div>
</template>

<script>
import pwBlockinfo from '@/../../kirby-pagewizard/src/components/blockinfo.vue';

export default {
	components: {
		pwBlockinfo
	}
}
</script>
