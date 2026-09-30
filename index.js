(function() {
  "use strict";
  function normalizeComponent(scriptExports, render, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
    var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
    if (render) {
      options.render = render;
      options.staticRenderFns = staticRenderFns;
      options._compiled = true;
    }
    if (scopeId) {
      options._scopeId = "data-v-" + scopeId;
    }
    return {
      exports: scriptExports,
      options
    };
  }
  const _sfc_main$6 = {
    props: {
      value: String,
      icon: String,
      layout: String,
      // the block type: a button to its design in the Project Wizard
      design: String
    },
    methods: {
      go(event) {
        if (!this.design) return;
        event.stopPropagation();
        this.$go("projectwizard/block/" + this.design);
      }
    }
  };
  var _sfc_render$6 = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("div", { staticClass: "blockinfo" }, [_c("div", { class: { "is-link": _vm.design }, attrs: { "title": _vm.design ? _vm.$t("pw.blockinfo.design") : null, "role": _vm.design ? "link" : null }, on: { "click": _vm.go } }, [_c("svg", { staticClass: "k-icon", attrs: { "aria-hidden": "true" } }, [_c("use", { attrs: { "xlink:href": "#icon-" + _vm.icon } })]), _vm._v(" " + _vm._s(_vm.value) + " "), _vm.layout ? _c("span", [_vm._v("(" + _vm._s(_vm.layout) + ")")]) : _vm._e()])]);
  };
  var _sfc_staticRenderFns$6 = [];
  _sfc_render$6._withStripped = true;
  var __component__$6 = /* @__PURE__ */ normalizeComponent(
    _sfc_main$6,
    _sfc_render$6,
    _sfc_staticRenderFns$6,
    false,
    null,
    "26526d24"
  );
  __component__$6.options.__file = "/Users/christian/Projects/pluginsources/kirby-pagewizard/src/components/blockinfo.vue";
  const pwBlockinfo = __component__$6.exports;
  const _sfc_main$5 = {
    props: {
      value: String,
      content: {
        type: Object,
        default: () => ({})
      },
      alignDefault: { type: String, default: "left" }
    },
    computed: {
      parsedData() {
        var _a;
        const val = ((_a = this.content) == null ? void 0 : _a.tagline) || this.value;
        if (!val) return { text: "", align: this.alignDefault };
        try {
          return typeof val === "string" ? JSON.parse(val) : val;
        } catch (e) {
          return { text: val, align: this.alignDefault };
        }
      },
      text() {
        const { text = "" } = this.parsedData;
        return text;
      },
      align() {
        const { align = this.alignDefault } = this.parsedData;
        return align;
      }
    }
  };
  var _sfc_render$5 = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("div", { staticClass: "pwTagline", attrs: { "data-align": _vm.align } }, [_vm.text ? _c("div", { domProps: { "innerHTML": _vm._s(_vm.text) } }) : _c("div", { staticClass: "placeholder" }, [_vm._v(" " + _vm._s(_vm.$t("pw.field.tagline.placeholder")) + " ")])]);
  };
  var _sfc_staticRenderFns$5 = [];
  _sfc_render$5._withStripped = true;
  var __component__$5 = /* @__PURE__ */ normalizeComponent(
    _sfc_main$5,
    _sfc_render$5,
    _sfc_staticRenderFns$5,
    false,
    null,
    "2287a490"
  );
  __component__$5.options.__file = "/Users/christian/Projects/pluginsources/kirby-pagewizard/src/components/tagline.vue";
  const pwTagline = __component__$5.exports;
  const _sfc_main$4 = {
    props: {
      value: String,
      content: {
        type: Object,
        default: () => ({})
      },
      alignDefault: { type: String, default: null },
      sizeDefault: { type: String, default: null },
      textbackgroundDefault: { type: String, default: null },
      multilineDefault: { type: String, default: null },
      flourishDefault: { type: String, default: null }
    },
    computed: {
      parsedData() {
        var _a;
        const val = ((_a = this.content) == null ? void 0 : _a.heading) || this.value;
        if (!val) return { text: "", align: this.alignDefault };
        try {
          return typeof val === "string" ? JSON.parse(val) : val;
        } catch (e) {
          return { text: val, align: this.alignDefault };
        }
      },
      text() {
        const { text = "" } = this.parsedData;
        return text;
      },
      align() {
        const { align = this.alignDefault } = this.parsedData;
        return align;
      },
      size() {
        const { size = this.sizeDefault } = this.parsedData;
        return size;
      },
      textbackground() {
        const { textbackground = this.textbackgroundDefault } = this.parsedData;
        return textbackground;
      },
      multiline() {
        const { multiline = this.multilineDefault } = this.parsedData;
        return multiline;
      },
      flourish() {
        const { flourish = this.flourishDefault } = this.parsedData;
        return flourish;
      },
      textLines() {
        return this.text.split(/\r\n|\r|\n/).filter((l) => l !== "");
      }
    }
  };
  var _sfc_render$4 = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("div", { staticClass: "pwHeading", attrs: { "data-align": _vm.align, "data-size": _vm.size } }, [_vm.text ? _c("div", [_vm.multiline === "enabled" ? [_vm._l(_vm.textLines, function(line, i) {
      return [i > 0 ? _c("br", { key: "br-" + i }) : _vm._e(), _vm.textbackground === "enabled" ? _c("span", { key: i, attrs: { "data-textbackground": "" }, domProps: { "innerHTML": _vm._s(line) } }) : _c("span", { key: i, domProps: { "innerHTML": _vm._s(line) } })];
    })] : [_vm.textbackground === "enabled" ? _c("span", { attrs: { "data-textbackground": "" }, domProps: { "innerHTML": _vm._s(_vm.text) } }) : _c("span", { domProps: { "innerHTML": _vm._s(_vm.text) } })], _vm.flourish === "enabled" ? _c("div", { attrs: { "data-flourish": "", "data-align": _vm.align } }) : _vm._e()], 2) : _c("div", { staticClass: "placeholder" }, [_vm._v(" " + _vm._s(_vm.$t("pw.field.heading.placeholder")) + " ")])]);
  };
  var _sfc_staticRenderFns$4 = [];
  _sfc_render$4._withStripped = true;
  var __component__$4 = /* @__PURE__ */ normalizeComponent(
    _sfc_main$4,
    _sfc_render$4,
    _sfc_staticRenderFns$4,
    false,
    null,
    "ad832d63"
  );
  __component__$4.options.__file = "/Users/christian/Projects/pluginsources/kirby-pagewizard/src/components/heading.vue";
  const pwHeading = __component__$4.exports;
  const _sfc_main$3 = {
    props: {
      value: String,
      align: { type: String, default: "left" },
      size: { type: String, default: null }
    },
    computed: {
      text() {
        return this.value || "";
      }
    },
    methods: {
      nl2br(text) {
        if (!text) return "";
        return text.replace(/\n/g, "<br>");
      }
    }
  };
  var _sfc_render$3 = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("div", { staticClass: "pwtext", attrs: { "data-align": _vm.align, "data-size": _vm.size } }, [_vm.text ? _c("div", { domProps: { "innerHTML": _vm._s(_vm.nl2br(_vm.text)) } }) : _c("div", { staticClass: "placeholder" }, [_vm._v(" " + _vm._s(_vm.$t("pw.field.text-textarea.placeholder")) + " ")])]);
  };
  var _sfc_staticRenderFns$3 = [];
  _sfc_render$3._withStripped = true;
  var __component__$3 = /* @__PURE__ */ normalizeComponent(
    _sfc_main$3,
    _sfc_render$3,
    _sfc_staticRenderFns$3,
    false,
    null,
    "05c2d6ed"
  );
  __component__$3.options.__file = "/Users/christian/Projects/pluginsources/kirby-pagewizard/src/components/textarea.vue";
  const PwTextarea = __component__$3.exports;
  const _sfc_main$2 = {
    props: {
      value: String,
      align: { type: String, default: "left" },
      size: { type: String, default: null }
    }
  };
  var _sfc_render$2 = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("div", { staticClass: "pwtext", attrs: { "data-align": _vm.align, "data-size": _vm.size } }, [_vm.value ? _c("div", { domProps: { "innerHTML": _vm._s(_vm.value) } }) : _c("div", { staticClass: "placeholder" }, [_vm._v(" " + _vm._s(_vm.$t("pw.field.text-writer.placeholder")) + " ")])]);
  };
  var _sfc_staticRenderFns$2 = [];
  _sfc_render$2._withStripped = true;
  var __component__$2 = /* @__PURE__ */ normalizeComponent(
    _sfc_main$2,
    _sfc_render$2,
    _sfc_staticRenderFns$2,
    false,
    null,
    "fa3feda4"
  );
  __component__$2.options.__file = "/Users/christian/Projects/pluginsources/kirby-pagewizard/src/components/writer.vue";
  const PwWriter = __component__$2.exports;
  const _sfc_main$1 = {
    components: { PwTextarea, PwWriter },
    props: {
      content: {
        type: Object,
        default: () => ({})
      },
      alignDefault: { type: String, default: "left" }
    },
    computed: {
      parsed() {
        var _a;
        const val = (_a = this.content) == null ? void 0 : _a.editor;
        if (!val) return { mode: "textarea", text: "", align: this.alignDefault };
        try {
          const data = typeof val === "string" ? JSON.parse(val) : val;
          const mode = data.mode || "textarea";
          return { mode, text: data[mode] || "", align: data.align || this.alignDefault, size: data.size || null };
        } catch (e) {
          return { mode: "textarea", text: "", align: this.alignDefault };
        }
      },
      mode() {
        return this.parsed.mode;
      },
      text() {
        return this.parsed.text;
      },
      align() {
        return this.parsed.align || this.alignDefault;
      },
      size() {
        return this.parsed.size || null;
      }
    }
  };
  var _sfc_render$1 = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("div", { staticClass: "pwEditor" }, [_vm.mode === "textarea" ? _c("pw-textarea", { attrs: { "value": _vm.text, "align": _vm.align, "size": _vm.size } }) : _vm.mode === "writer" ? _c("pw-writer", { attrs: { "value": _vm.text, "align": _vm.align, "size": _vm.size } }) : _c("div", { staticClass: "placeholder" }, [_vm._v(" " + _vm._s(_vm.$t("pw.field.text-textarea.placeholder")) + " ")])], 1);
  };
  var _sfc_staticRenderFns$1 = [];
  _sfc_render$1._withStripped = true;
  var __component__$1 = /* @__PURE__ */ normalizeComponent(
    _sfc_main$1,
    _sfc_render$1,
    _sfc_staticRenderFns$1,
    false,
    null,
    null
  );
  __component__$1.options.__file = "/Users/christian/Projects/pluginsources/kirby-pagewizard/src/components/editor.vue";
  const pwEditor = __component__$1.exports;
  const pwGridStyle = {
    computed: {
      gridVars() {
        const offset = (val) => {
          const n = Number(val);
          return n === 0 ? "auto" : n + 1;
        };
        return {
          "--grid-start-sm": offset(this.content.gridoffsetsm),
          "--grid-span-sm": Number(this.content.gridsizesm),
          "--grid-start-md": offset(this.content.gridoffsetmd),
          "--grid-span-md": Number(this.content.gridsizemd),
          "--grid-start-lg": offset(this.content.gridoffsetlg),
          "--grid-span-lg": Number(this.content.gridsizelg),
          "--grid-start-xl": offset(this.content.gridoffsetxl),
          "--grid-span-xl": Number(this.content.gridsizexl)
        };
      }
    }
  };
  const pwColorStyle = {
    data() {
      return {
        colors: null
      };
    },
    async created() {
      try {
        this.colors = await this.$api.get("pagewizard/colors");
      } catch (e) {
        this.colors = null;
      }
    },
    computed: {
      colorVars() {
        if (!this.colors) return {};
        const style = this.content.theme || "default";
        const vars = {};
        if (style === "custom") {
          for (const [key, value] of Object.entries(this.colors.default)) {
            vars["--" + key] = value;
          }
          if (this.content.textcolor) {
            vars["--pw-color-text"] = this.content.textcolor;
            vars["--pw-color-heading"] = this.content.textcolor;
            vars["--pw-color-tagline"] = this.content.textcolor;
            vars["--pw-color-link"] = this.content.textcolor;
            vars["--pw-color-quote"] = this.content.textcolor;
            vars["--pw-color-cite"] = this.content.textcolor;
          }
          if (this.content.backgroundcolor) {
            vars["--pw-color-block-background"] = this.content.backgroundcolor;
          }
          const btnStyle = this.content.buttonstyle || "default";
          if (btnStyle !== "default" && this.colors[btnStyle]) {
            const btnKeys = Object.keys(this.colors[btnStyle]).filter((k) => k.startsWith("pw-color-button"));
            for (const key of btnKeys) {
              vars["--" + key] = this.colors[btnStyle][key];
            }
          }
        } else {
          const themePalette = this.colors[style];
          const palette = themePalette ? { ...this.colors.default, ...themePalette } : this.colors.default;
          for (const [key, value] of Object.entries(palette)) {
            vars["--" + key] = value;
          }
        }
        return vars;
      }
    }
  };
  const _sfc_main = {
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
      };
    },
    computed: {
      logos() {
        return (this.content.logos || []).filter((logo) => logo.url);
      },
      // Custom shape: every corner with a radius above 0 is shown round (like
      // "round"), corners with 0 stay square — the exact size is not previewed
      logoStyle() {
        var _a, _b, _c, _d;
        if ((this.defaults["item-shape"] || "round") !== "custom") return {};
        const def = (_c = (_b = (_a = this.blockValues.defaults) == null ? void 0 : _a.items) == null ? void 0 : _b.vars) == null ? void 0 : _c["item-radius"];
        const ov = (_d = this.blockValues.overrides) == null ? void 0 : _d["item-radius"];
        const values = Array.isArray(ov) ? ov : (def == null ? void 0 : def.value) || [];
        const corners = ["top-left", "top-right", "bottom-left", "bottom-right"];
        const style = {};
        corners.forEach((corner, i) => {
          style[`border-${corner}-radius`] = parseFloat(values[i]) > 0 ? "50%" : "0";
        });
        return style;
      }
    },
    async created() {
      try {
        const response = await this.$api.get("pagewizard/settings/pwlogocloud");
        this.settings = response.settings;
        this.fieldDefaults = response.fields || {};
        this.defaults = response.defaults || {};
        this.blockValues = await this.$api.get("projectwizard/values/pwlogocloud");
      } catch (e) {
        this.settings = {};
      }
    }
  };
  var _sfc_render = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("div", { staticClass: "pwPreview", style: _vm.colorVars, attrs: { "data-kirbyblock": "logocloud", "data-margintop": _vm.content.margintop === true ? "true" : null, "data-marginbottom": _vm.content.marginbottom === true ? "true" : null }, on: { "dblclick": _vm.open } }, [_c("pwBlockinfo", { attrs: { "value": _vm.$t("kirbyblock-logocloud.name"), "icon": "logocloud" } }), _c("div", { staticClass: "pwGrid" }, [_c("div", { staticClass: "pwGridItem", style: _vm.gridVars, attrs: { "data-paddingtop": _vm.content.paddingtop || _vm.defaults["padding-top"] || null, "data-paddingright": (_vm.content.paddingright !== void 0 ? _vm.content.paddingright : _vm.defaults["padding-right"]) === true ? "true" : null, "data-paddingbottom": _vm.content.paddingbottom || _vm.defaults["padding-bottom"] || null, "data-paddingleft": (_vm.content.paddingleft !== void 0 ? _vm.content.paddingleft : _vm.defaults["padding-left"]) === true ? "true" : null } }, [_c("div", { staticClass: "contents" }, [_vm.settings.tagline ? _c("pwTagline", { attrs: { "value": _vm.content.tagline, "alignDefault": _vm.fieldDefaults["align-tagline"] } }) : _vm._e(), _vm.settings.heading ? _c("pwHeading", { attrs: { "value": _vm.content.heading, "data-level": _vm.content.level, "alignDefault": _vm.fieldDefaults["align-heading"], "sizeDefault": _vm.fieldDefaults["size-heading"], "textbackgroundDefault": _vm.fieldDefaults["textbackground-heading"], "multilineDefault": _vm.fieldDefaults["multiline-heading"], "flourishDefault": _vm.fieldDefaults["flourish-heading"] } }) : _vm._e(), _vm.settings.editor ? _c("pwEditor", { attrs: { "content": _vm.content, "alignDefault": _vm.fieldDefaults["align-editor"] } }) : _vm._e(), _vm.logos.length ? _c("div", { staticClass: "pwLogos", attrs: { "data-shape": _vm.defaults["item-shape"] || "round", "data-align": _vm.content.logosalignment || _vm.fieldDefaults["align-logos"] || "center" } }, _vm._l(_vm.logos, function(logo) {
      return _c("div", { key: logo.id, staticClass: "pwLogo", style: _vm.logoStyle }, [_c("img", { attrs: { "src": logo.url, "alt": "" } })]);
    }), 0) : _c("div", { staticClass: "pwLogos placeholder" }, [_vm._v(_vm._s(_vm.$t("kirbyblock-logocloud.logos.empty")))])], 1)])])], 1);
  };
  var _sfc_staticRenderFns = [];
  _sfc_render._withStripped = true;
  var __component__ = /* @__PURE__ */ normalizeComponent(
    _sfc_main,
    _sfc_render,
    _sfc_staticRenderFns,
    false,
    null,
    "823ce87b"
  );
  __component__.options.__file = "/Users/christian/Projects/pluginsources/kirbyblock-logocloud/src/blocks/index.vue";
  const pwlogocloud = __component__.exports;
  panel.plugin("kirbydesk/kirbyblock-logocloud", {
    blocks: {
      pwlogocloud
    },
    icons: {
      "logocloud": '<path d="M7 3C9.20914 3 11 4.79086 11 7C11 9.20914 9.20914 11 7 11C4.79086 11 3 9.20914 3 7C3 4.79086 4.79086 3 7 3ZM7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5ZM17 3C19.2091 3 21 4.79086 21 7C21 9.20914 19.2091 11 17 11C14.7909 11 13 9.20914 13 7C13 4.79086 14.7909 3 17 3ZM17 5C15.8954 5 15 5.89543 15 7C15 8.10457 15.8954 9 17 9C18.1046 9 19 8.10457 19 7C19 5.89543 18.1046 5 17 5ZM7 13C9.20914 13 11 14.7909 11 17C11 19.2091 9.20914 21 7 21C4.79086 21 3 19.2091 3 17C3 14.7909 4.79086 13 7 13ZM7 15C5.89543 15 5 15.8954 5 17C5 18.1046 5.89543 19 7 19C8.10457 19 9 18.1046 9 17C9 15.8954 8.10457 15 7 15ZM17 13C19.2091 13 21 14.7909 21 17C21 19.2091 19.2091 21 17 21C14.7909 21 13 19.2091 13 17C13 14.7909 14.7909 13 17 13ZM17 15C15.8954 15 15 15.8954 15 17C15 18.1046 15.8954 19 17 19C18.1046 19 19 18.1046 19 17C19 15.8954 18.1046 15 17 15Z"/>'
    }
  });
})();
