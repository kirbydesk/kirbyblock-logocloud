<template>
	<div
		class="pwPreview"
		data-kirbyblock="logocloud"
		@dblclick="open"
		:style="colorVars"
		:data-margintop="content.margintop === true ? 'true' : null"
		:data-marginbottom="content.marginbottom === true ? 'true' : null"
		>

		<pwBlockinfo
			:value="$t('kirbyblock-logocloud.name')"
			icon="logocloud"
		/>

		<div class="pwGrid">
			<div
				class="pwGridItem"
				:style="gridVars"
				:data-paddingtop="content.paddingtop || defaults['padding-top'] || null"
				:data-paddingright="(content.paddingright !== undefined ? content.paddingright : defaults['padding-right']) === true ? 'true' : null"
				:data-paddingbottom="content.paddingbottom || defaults['padding-bottom'] || null"
				:data-paddingleft="(content.paddingleft !== undefined ? content.paddingleft : defaults['padding-left']) === true ? 'true' : null"
				>

				<div class="contents">

					<!-- Tagline -->
					<pwTagline v-if="settings.tagline" :value="content.tagline" :alignDefault="fieldDefaults['align-tagline']" />

					<!-- Heading -->
					<pwHeading v-if="settings.heading" :value="content.heading" :data-level="content.level" :alignDefault="fieldDefaults['align-heading']" :sizeDefault="fieldDefaults['size-heading']" :textbackgroundDefault="fieldDefaults['textbackground-heading']" :multilineDefault="fieldDefaults['multiline-heading']" :flourishDefault="fieldDefaults['flourish-heading']" />

					<!-- Editor -->
					<pwEditor v-if="settings.editor" :content="content" :alignDefault="fieldDefaults['align-editor']" />

					<!-- Logos -->
					<div v-if="logos.length" class="pwLogos" :data-shape="defaults['item-shape'] || 'round'" :data-align="content.logosalignment || fieldDefaults['align-logos'] || 'center'">
						<div v-for="logo in logos" :key="logo.id" class="pwLogo" :style="logoStyle">
							<img :src="logo.url" alt="">
						</div>
					</div>
					<div v-else class="pwLogos placeholder">{{ $t('kirbyblock-logocloud.logos.empty') }}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import pwBlockinfo from '@/../../kirby-pagewizard/src/components/blockinfo.vue';
import pwTagline from '@/../../kirby-pagewizard/src/components/tagline.vue';
import pwHeading from '@/../../kirby-pagewizard/src/components/heading.vue';
import pwEditor from '@/../../kirby-pagewizard/src/components/editor.vue';
import pwGridStyle from '@/../../kirby-pagewizard/src/mixins/gridStyle.js';
import pwColorStyle from '@/../../kirby-pagewizard/src/mixins/colorStyle.js';

export default {
	components: {
		pwBlockinfo,
		pwTagline,
		pwHeading,
		pwEditor
	},
	mixins: [pwGridStyle, pwColorStyle],
	data() {
		return {
			settings: {},
			fieldDefaults: {},
			defaults: {},
			blockValues: {}
		}
	},
	computed: {
		logos() {
			return (this.content.logos || []).filter(logo => logo.url);
		},
		// Custom shape: every corner with a radius above 0 is shown round (like
		// "round"), corners with 0 stay square — the exact size is not previewed
		logoStyle() {
			if ((this.defaults['item-shape'] || 'round') !== 'custom') return {};
			const def = this.blockValues.defaults?.items?.vars?.['item-radius'];
			const ov = this.blockValues.overrides?.['item-radius'];
			const values = Array.isArray(ov) ? ov : (def?.value || []);
			const corners = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
			const style = {};
			corners.forEach((corner, i) => {
				style[`border-${corner}-radius`] = parseFloat(values[i]) > 0 ? '50%' : '0';
			});
			return style;
		}
	},
	async created() {
		try {
			const response = await this.$api.get('pagewizard/settings/pwlogocloud');
			this.settings = response.settings;
			this.fieldDefaults = response.fields || {};
			this.defaults = response.defaults || {};
			this.blockValues = await this.$api.get('projectwizard/values/pwlogocloud');
		} catch (e) {
			this.settings = {};
		}
	}
}
</script>

<style scoped>
div.pwLogos {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 0.5rem;
	margin-top: 1rem;
}
div.pwLogo {
	flex: 0 0 4rem;
	aspect-ratio: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.6rem;
	box-sizing: border-box;
	background: var(--pwlogocloud-item-background, #FFFFFF);
	overflow: hidden;

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
}
div.pwLogos[data-align="left"]  { justify-content: flex-start; }
div.pwLogos[data-align="right"] { justify-content: flex-end; }
div.pwLogos[data-shape="round"] div.pwLogo  { border-radius: 50%; }
</style>
