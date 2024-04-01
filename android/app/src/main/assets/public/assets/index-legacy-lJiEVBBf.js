System.register([], (function (t, e) {
  "use strict";
  return {
    execute: function () {
      var o = document.createElement("style");

      /**
       * @vue/shared v3.4.21
       * (c) 2018-present Yuxi (Evan) You and Vue contributors
       * @license MIT
       **/
      function n(t, e) {
        const o = new Set(t.split(","));
        return e ? t => o.has(t.toLowerCase()) : t => o.has(t)
      }

      o.textContent = 'html.ios{--ion-default-font: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Roboto", sans-serif}html.md{--ion-default-font: "Roboto", "Helvetica Neue", sans-serif}html{--ion-default-dynamic-font: -apple-system-body;--ion-font-family: var(--ion-default-font)}body{background:var(--ion-background-color)}body.backdrop-no-scroll{overflow:hidden}html.ios ion-modal.modal-card ion-header ion-toolbar:first-of-type,html.ios ion-modal.modal-sheet ion-header ion-toolbar:first-of-type,html.ios ion-modal ion-footer ion-toolbar:first-of-type{padding-top:6px}html.ios ion-modal.modal-card ion-header ion-toolbar:last-of-type,html.ios ion-modal.modal-sheet ion-header ion-toolbar:last-of-type{padding-bottom:6px}html.ios ion-modal ion-toolbar{padding-right:calc(var(--ion-safe-area-right) + 8px);padding-left:calc(var(--ion-safe-area-left) + 8px)}@media screen and (min-width: 768px){html.ios ion-modal.modal-card:first-of-type{--backdrop-opacity: .18}}ion-modal.modal-default.show-modal~ion-modal.modal-default{--backdrop-opacity: 0;--box-shadow: none}html.ios ion-modal.modal-card .ion-page{border-top-left-radius:var(--border-radius)}.ion-color-primary{--ion-color-base: var(--ion-color-primary, #3880ff) !important;--ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;--ion-color-contrast: var(--ion-color-primary-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade: var(--ion-color-primary-shade, #3171e0) !important;--ion-color-tint: var(--ion-color-primary-tint, #4c8dff) !important}.ion-color-secondary{--ion-color-base: var(--ion-color-secondary, #3dc2ff) !important;--ion-color-base-rgb: var(--ion-color-secondary-rgb, 61, 194, 255) !important;--ion-color-contrast: var(--ion-color-secondary-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade: var(--ion-color-secondary-shade, #36abe0) !important;--ion-color-tint: var(--ion-color-secondary-tint, #50c8ff) !important}.ion-color-tertiary{--ion-color-base: var(--ion-color-tertiary, #5260ff) !important;--ion-color-base-rgb: var(--ion-color-tertiary-rgb, 82, 96, 255) !important;--ion-color-contrast: var(--ion-color-tertiary-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade: var(--ion-color-tertiary-shade, #4854e0) !important;--ion-color-tint: var(--ion-color-tertiary-tint, #6370ff) !important}.ion-color-success{--ion-color-base: var(--ion-color-success, #2dd36f) !important;--ion-color-base-rgb: var(--ion-color-success-rgb, 45, 211, 111) !important;--ion-color-contrast: var(--ion-color-success-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;--ion-color-shade: var(--ion-color-success-shade, #28ba62) !important;--ion-color-tint: var(--ion-color-success-tint, #42d77d) !important}.ion-color-warning{--ion-color-base: var(--ion-color-warning, #ffc409) !important;--ion-color-base-rgb: var(--ion-color-warning-rgb, 255, 196, 9) !important;--ion-color-contrast: var(--ion-color-warning-contrast, #000) !important;--ion-color-contrast-rgb: var(--ion-color-warning-contrast-rgb, 0, 0, 0) !important;--ion-color-shade: var(--ion-color-warning-shade, #e0ac08) !important;--ion-color-tint: var(--ion-color-warning-tint, #ffca22) !important}.ion-color-danger{--ion-color-base: var(--ion-color-danger, #eb445a) !important;--ion-color-base-rgb: var(--ion-color-danger-rgb, 235, 68, 90) !important;--ion-color-contrast: var(--ion-color-danger-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;--ion-color-shade: var(--ion-color-danger-shade, #cf3c4f) !important;--ion-color-tint: var(--ion-color-danger-tint, #ed576b) !important}.ion-color-light{--ion-color-base: var(--ion-color-light, #f4f5f8) !important;--ion-color-base-rgb: var(--ion-color-light-rgb, 244, 245, 248) !important;--ion-color-contrast: var(--ion-color-light-contrast, #000) !important;--ion-color-contrast-rgb: var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;--ion-color-shade: var(--ion-color-light-shade, #d7d8da) !important;--ion-color-tint: var(--ion-color-light-tint, #f5f6f9) !important}.ion-color-medium{--ion-color-base: var(--ion-color-medium, #92949c) !important;--ion-color-base-rgb: var(--ion-color-medium-rgb, 146, 148, 156) !important;--ion-color-contrast: var(--ion-color-medium-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;--ion-color-shade: var(--ion-color-medium-shade, #808289) !important;--ion-color-tint: var(--ion-color-medium-tint, #9d9fa6) !important}.ion-color-dark{--ion-color-base: var(--ion-color-dark, #222428) !important;--ion-color-base-rgb: var(--ion-color-dark-rgb, 34, 36, 40) !important;--ion-color-contrast: var(--ion-color-dark-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;--ion-color-shade: var(--ion-color-dark-shade, #1e2023) !important;--ion-color-tint: var(--ion-color-dark-tint, #383a3e) !important}.ion-page{left:0;right:0;top:0;bottom:0;display:flex;position:absolute;flex-direction:column;justify-content:space-between;contain:layout size style;z-index:0}ion-modal>.ion-page{position:relative;contain:layout style;height:100%}.split-pane-visible>.ion-page.split-pane-main{position:relative}ion-route,ion-route-redirect,ion-router,ion-select-option,ion-nav-controller,ion-menu-controller,ion-action-sheet-controller,ion-alert-controller,ion-loading-controller,ion-modal-controller,ion-picker-controller,ion-popover-controller,ion-toast-controller,.ion-page-hidden{display:none!important}.ion-page-invisible{opacity:0}.can-go-back>ion-header ion-back-button{display:block}html.plt-ios.plt-hybrid,html.plt-ios.plt-pwa{--ion-statusbar-padding: 20px}@supports (padding-top: 20px){html{--ion-safe-area-top: var(--ion-statusbar-padding)}}@supports (padding-top: env(safe-area-inset-top)){html{--ion-safe-area-top: env(safe-area-inset-top);--ion-safe-area-bottom: env(safe-area-inset-bottom);--ion-safe-area-left: env(safe-area-inset-left);--ion-safe-area-right: env(safe-area-inset-right)}}ion-card.ion-color .ion-inherit-color,ion-card-header.ion-color .ion-inherit-color{color:inherit}.menu-content{transform:translateZ(0)}.menu-content-open{cursor:pointer;touch-action:manipulation;pointer-events:none;overflow-y:hidden}.menu-content-open ion-content{--overflow: hidden}.menu-content-open .ion-content-scroll-host{overflow:hidden}.ios .menu-content-reveal{box-shadow:-8px 0 42px rgba(0,0,0,.08)}[dir=rtl].ios .menu-content-reveal{box-shadow:8px 0 42px rgba(0,0,0,.08)}.md .menu-content-reveal,.md .menu-content-push{box-shadow:4px 0 16px rgba(0,0,0,.18)}ion-accordion-group.accordion-group-expand-inset>ion-accordion:first-of-type{border-top-left-radius:8px;border-top-right-radius:8px}ion-accordion-group.accordion-group-expand-inset>ion-accordion:last-of-type{border-bottom-left-radius:8px;border-bottom-right-radius:8px}ion-accordion-group>ion-accordion:last-of-type ion-item[slot=header]{--border-width: 0px}ion-accordion.accordion-animated>[slot=header] .ion-accordion-toggle-icon{transition:.3s transform cubic-bezier(.25,.8,.5,1)}@media (prefers-reduced-motion: reduce){ion-accordion .ion-accordion-toggle-icon{transition:none!important}}ion-accordion.accordion-expanding>[slot=header] .ion-accordion-toggle-icon,ion-accordion.accordion-expanded>[slot=header] .ion-accordion-toggle-icon{transform:rotate(180deg)}ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-previous ion-item[slot=header]{--border-width: 0px;--inner-border-width: 0px}ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-expanding:first-of-type,ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-expanded:first-of-type{margin-top:0}ion-input input::-webkit-date-and-time-value{text-align:start}.ion-datetime-button-overlay{--width: fit-content;--height: fit-content}.ion-datetime-button-overlay ion-datetime.datetime-grid{width:320px;min-height:320px}audio,canvas,progress,video{vertical-align:baseline}audio:not([controls]){display:none;height:0}b,strong{font-weight:700}img{max-width:100%}hr{height:1px;border-width:0;box-sizing:content-box}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}label,input,select,textarea{font-family:inherit;line-height:normal}textarea{overflow:auto;height:auto;font:inherit;color:inherit}textarea::placeholder{padding-left:2px}form,input,optgroup,select{margin:0;font:inherit;color:inherit}html input[type=button],input[type=reset],input[type=submit]{cursor:pointer;-webkit-appearance:button}a,a div,a span,a ion-icon,a ion-label,button,button div,button span,button ion-icon,button ion-label,.ion-tappable,[tappable],[tappable] div,[tappable] span,[tappable] ion-icon,[tappable] ion-label,input,textarea{touch-action:manipulation}a ion-label,button ion-label{pointer-events:none}button{padding:0;border:0;border-radius:0;font-family:inherit;font-style:inherit;font-variant:inherit;line-height:1;text-transform:none;cursor:pointer;-webkit-appearance:button}[tappable]{cursor:pointer}a[disabled],button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{padding:0;border:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}*{box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none}html{width:100%;height:100%;-webkit-text-size-adjust:100%;text-size-adjust:100%}html:not(.hydrated) body{display:none}html.ion-ce body{display:block}html.plt-pwa{height:100vh}body{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:0;padding:0;position:fixed;width:100%;max-width:100%;height:100%;max-height:100%;transform:translateZ(0);text-rendering:optimizeLegibility;overflow:hidden;touch-action:manipulation;-webkit-user-drag:none;-ms-content-zooming:none;word-wrap:break-word;overscroll-behavior-y:none;-webkit-text-size-adjust:none;text-size-adjust:none}html{font-family:var(--ion-font-family)}@supports (-webkit-touch-callout: none){html{font:var(--ion-dynamic-font, 16px var(--ion-font-family))}}a{background-color:transparent;color:var(--ion-color-primary, #3880ff)}h1,h2,h3,h4,h5,h6{margin-top:16px;margin-bottom:10px;font-weight:500;line-height:1.2}h1{margin-top:20px;font-size:1.625rem}h2{margin-top:18px;font-size:1.5rem}h3{font-size:1.375rem}h4{font-size:1.25rem}h5{font-size:1.125rem}h6{font-size:1rem}small{font-size:75%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}.ion-no-padding{--padding-start: 0;--padding-end: 0;--padding-top: 0;--padding-bottom: 0;padding:0}.ion-padding{--padding-start: var(--ion-padding, 16px);--padding-end: var(--ion-padding, 16px);--padding-top: var(--ion-padding, 16px);--padding-bottom: var(--ion-padding, 16px);-webkit-padding-start:var(--ion-padding, 16px);padding-inline-start:var(--ion-padding, 16px);-webkit-padding-end:var(--ion-padding, 16px);padding-inline-end:var(--ion-padding, 16px);padding-top:var(--ion-padding, 16px);padding-bottom:var(--ion-padding, 16px)}.ion-padding-top{--padding-top: var(--ion-padding, 16px);padding-top:var(--ion-padding, 16px)}.ion-padding-start{--padding-start: var(--ion-padding, 16px);-webkit-padding-start:var(--ion-padding, 16px);padding-inline-start:var(--ion-padding, 16px)}.ion-padding-end{--padding-end: var(--ion-padding, 16px);-webkit-padding-end:var(--ion-padding, 16px);padding-inline-end:var(--ion-padding, 16px)}.ion-padding-bottom{--padding-bottom: var(--ion-padding, 16px);padding-bottom:var(--ion-padding, 16px)}.ion-padding-vertical{--padding-top: var(--ion-padding, 16px);--padding-bottom: var(--ion-padding, 16px);padding-top:var(--ion-padding, 16px);padding-bottom:var(--ion-padding, 16px)}.ion-padding-horizontal{--padding-start: var(--ion-padding, 16px);--padding-end: var(--ion-padding, 16px);-webkit-padding-start:var(--ion-padding, 16px);padding-inline-start:var(--ion-padding, 16px);-webkit-padding-end:var(--ion-padding, 16px);padding-inline-end:var(--ion-padding, 16px)}.ion-no-margin{--margin-start: 0;--margin-end: 0;--margin-top: 0;--margin-bottom: 0;margin:0}.ion-margin{--margin-start: var(--ion-margin, 16px);--margin-end: var(--ion-margin, 16px);--margin-top: var(--ion-margin, 16px);--margin-bottom: var(--ion-margin, 16px);-webkit-margin-start:var(--ion-margin, 16px);margin-inline-start:var(--ion-margin, 16px);-webkit-margin-end:var(--ion-margin, 16px);margin-inline-end:var(--ion-margin, 16px);margin-top:var(--ion-margin, 16px);margin-bottom:var(--ion-margin, 16px)}.ion-margin-top{--margin-top: var(--ion-margin, 16px);margin-top:var(--ion-margin, 16px)}.ion-margin-start{--margin-start: var(--ion-margin, 16px);-webkit-margin-start:var(--ion-margin, 16px);margin-inline-start:var(--ion-margin, 16px)}.ion-margin-end{--margin-end: var(--ion-margin, 16px);-webkit-margin-end:var(--ion-margin, 16px);margin-inline-end:var(--ion-margin, 16px)}.ion-margin-bottom{--margin-bottom: var(--ion-margin, 16px);margin-bottom:var(--ion-margin, 16px)}.ion-margin-vertical{--margin-top: var(--ion-margin, 16px);--margin-bottom: var(--ion-margin, 16px);margin-top:var(--ion-margin, 16px);margin-bottom:var(--ion-margin, 16px)}.ion-margin-horizontal{--margin-start: var(--ion-margin, 16px);--margin-end: var(--ion-margin, 16px);-webkit-margin-start:var(--ion-margin, 16px);margin-inline-start:var(--ion-margin, 16px);-webkit-margin-end:var(--ion-margin, 16px);margin-inline-end:var(--ion-margin, 16px)}.ion-float-left{float:left!important}.ion-float-right{float:right!important}.ion-float-start{float:left!important}:host-context([dir=rtl]) .ion-float-start{float:right!important}[dir=rtl] .ion-float-start{float:right!important}@supports selector(:dir(rtl)){.ion-float-start:dir(rtl){float:right!important}}.ion-float-end{float:right!important}:host-context([dir=rtl]) .ion-float-end{float:left!important}[dir=rtl] .ion-float-end{float:left!important}@supports selector(:dir(rtl)){.ion-float-end:dir(rtl){float:left!important}}@media (min-width: 576px){.ion-float-sm-left{float:left!important}.ion-float-sm-right{float:right!important}.ion-float-sm-start{float:left!important}:host-context([dir=rtl]) .ion-float-sm-start{float:right!important}[dir=rtl] .ion-float-sm-start{float:right!important}@supports selector(:dir(rtl)){.ion-float-sm-start:dir(rtl){float:right!important}}.ion-float-sm-end{float:right!important}:host-context([dir=rtl]) .ion-float-sm-end{float:left!important}[dir=rtl] .ion-float-sm-end{float:left!important}@supports selector(:dir(rtl)){.ion-float-sm-end:dir(rtl){float:left!important}}}@media (min-width: 768px){.ion-float-md-left{float:left!important}.ion-float-md-right{float:right!important}.ion-float-md-start{float:left!important}:host-context([dir=rtl]) .ion-float-md-start{float:right!important}[dir=rtl] .ion-float-md-start{float:right!important}@supports selector(:dir(rtl)){.ion-float-md-start:dir(rtl){float:right!important}}.ion-float-md-end{float:right!important}:host-context([dir=rtl]) .ion-float-md-end{float:left!important}[dir=rtl] .ion-float-md-end{float:left!important}@supports selector(:dir(rtl)){.ion-float-md-end:dir(rtl){float:left!important}}}@media (min-width: 992px){.ion-float-lg-left{float:left!important}.ion-float-lg-right{float:right!important}.ion-float-lg-start{float:left!important}:host-context([dir=rtl]) .ion-float-lg-start{float:right!important}[dir=rtl] .ion-float-lg-start{float:right!important}@supports selector(:dir(rtl)){.ion-float-lg-start:dir(rtl){float:right!important}}.ion-float-lg-end{float:right!important}:host-context([dir=rtl]) .ion-float-lg-end{float:left!important}[dir=rtl] .ion-float-lg-end{float:left!important}@supports selector(:dir(rtl)){.ion-float-lg-end:dir(rtl){float:left!important}}}@media (min-width: 1200px){.ion-float-xl-left{float:left!important}.ion-float-xl-right{float:right!important}.ion-float-xl-start{float:left!important}:host-context([dir=rtl]) .ion-float-xl-start{float:right!important}[dir=rtl] .ion-float-xl-start{float:right!important}@supports selector(:dir(rtl)){.ion-float-xl-start:dir(rtl){float:right!important}}.ion-float-xl-end{float:right!important}:host-context([dir=rtl]) .ion-float-xl-end{float:left!important}[dir=rtl] .ion-float-xl-end{float:left!important}@supports selector(:dir(rtl)){.ion-float-xl-end:dir(rtl){float:left!important}}}.ion-text-center{text-align:center!important}.ion-text-justify{text-align:justify!important}.ion-text-start{text-align:start!important}.ion-text-end{text-align:end!important}.ion-text-left{text-align:left!important}.ion-text-right{text-align:right!important}.ion-text-nowrap{white-space:nowrap!important}.ion-text-wrap{white-space:normal!important}@media (min-width: 576px){.ion-text-sm-center{text-align:center!important}.ion-text-sm-justify{text-align:justify!important}.ion-text-sm-start{text-align:start!important}.ion-text-sm-end{text-align:end!important}.ion-text-sm-left{text-align:left!important}.ion-text-sm-right{text-align:right!important}.ion-text-sm-nowrap{white-space:nowrap!important}.ion-text-sm-wrap{white-space:normal!important}}@media (min-width: 768px){.ion-text-md-center{text-align:center!important}.ion-text-md-justify{text-align:justify!important}.ion-text-md-start{text-align:start!important}.ion-text-md-end{text-align:end!important}.ion-text-md-left{text-align:left!important}.ion-text-md-right{text-align:right!important}.ion-text-md-nowrap{white-space:nowrap!important}.ion-text-md-wrap{white-space:normal!important}}@media (min-width: 992px){.ion-text-lg-center{text-align:center!important}.ion-text-lg-justify{text-align:justify!important}.ion-text-lg-start{text-align:start!important}.ion-text-lg-end{text-align:end!important}.ion-text-lg-left{text-align:left!important}.ion-text-lg-right{text-align:right!important}.ion-text-lg-nowrap{white-space:nowrap!important}.ion-text-lg-wrap{white-space:normal!important}}@media (min-width: 1200px){.ion-text-xl-center{text-align:center!important}.ion-text-xl-justify{text-align:justify!important}.ion-text-xl-start{text-align:start!important}.ion-text-xl-end{text-align:end!important}.ion-text-xl-left{text-align:left!important}.ion-text-xl-right{text-align:right!important}.ion-text-xl-nowrap{white-space:nowrap!important}.ion-text-xl-wrap{white-space:normal!important}}.ion-text-uppercase{text-transform:uppercase!important}.ion-text-lowercase{text-transform:lowercase!important}.ion-text-capitalize{text-transform:capitalize!important}@media (min-width: 576px){.ion-text-sm-uppercase{text-transform:uppercase!important}.ion-text-sm-lowercase{text-transform:lowercase!important}.ion-text-sm-capitalize{text-transform:capitalize!important}}@media (min-width: 768px){.ion-text-md-uppercase{text-transform:uppercase!important}.ion-text-md-lowercase{text-transform:lowercase!important}.ion-text-md-capitalize{text-transform:capitalize!important}}@media (min-width: 992px){.ion-text-lg-uppercase{text-transform:uppercase!important}.ion-text-lg-lowercase{text-transform:lowercase!important}.ion-text-lg-capitalize{text-transform:capitalize!important}}@media (min-width: 1200px){.ion-text-xl-uppercase{text-transform:uppercase!important}.ion-text-xl-lowercase{text-transform:lowercase!important}.ion-text-xl-capitalize{text-transform:capitalize!important}}.ion-align-self-start{align-self:flex-start!important}.ion-align-self-end{align-self:flex-end!important}.ion-align-self-center{align-self:center!important}.ion-align-self-stretch{align-self:stretch!important}.ion-align-self-baseline{align-self:baseline!important}.ion-align-self-auto{align-self:auto!important}.ion-wrap{flex-wrap:wrap!important}.ion-nowrap{flex-wrap:nowrap!important}.ion-wrap-reverse{flex-wrap:wrap-reverse!important}.ion-justify-content-start{justify-content:flex-start!important}.ion-justify-content-center{justify-content:center!important}.ion-justify-content-end{justify-content:flex-end!important}.ion-justify-content-around{justify-content:space-around!important}.ion-justify-content-between{justify-content:space-between!important}.ion-justify-content-evenly{justify-content:space-evenly!important}.ion-align-items-start{align-items:flex-start!important}.ion-align-items-center{align-items:center!important}.ion-align-items-end{align-items:flex-end!important}.ion-align-items-stretch{align-items:stretch!important}.ion-align-items-baseline{align-items:baseline!important}.ion-hide,.ion-hide-up,.ion-hide-down{display:none!important}@media (min-width: 576px){.ion-hide-sm-up{display:none!important}}@media (max-width: 575.98px){.ion-hide-sm-down{display:none!important}}@media (min-width: 768px){.ion-hide-md-up{display:none!important}}@media (max-width: 767.98px){.ion-hide-md-down{display:none!important}}@media (min-width: 992px){.ion-hide-lg-up{display:none!important}}@media (max-width: 991.98px){.ion-hide-lg-down{display:none!important}}@media (min-width: 1200px){.ion-hide-xl-up{display:none!important}}@media (max-width: 1199.98px){.ion-hide-xl-down{display:none!important}}:root{--ion-color-primary: #222428;--ion-color-primary-rgb: 34, 36, 40;--ion-color-primary-contrast: #ffffff;--ion-color-primary-contrast-rgb: 255, 255, 255;--ion-color-primary-shade: #1e2023;--ion-color-primary-tint: #383a3e;--ion-color-secondary: #3dc2ff;--ion-color-secondary-rgb: 61, 194, 255;--ion-color-secondary-contrast: #ffffff;--ion-color-secondary-contrast-rgb: 255, 255, 255;--ion-color-secondary-shade: #36abe0;--ion-color-secondary-tint: #50c8ff;--ion-color-tertiary: #5260ff;--ion-color-tertiary-rgb: 82, 96, 255;--ion-color-tertiary-contrast: #ffffff;--ion-color-tertiary-contrast-rgb: 255, 255, 255;--ion-color-tertiary-shade: #4854e0;--ion-color-tertiary-tint: #6370ff;--ion-color-success: #2dd36f;--ion-color-success-rgb: 45, 211, 111;--ion-color-success-contrast: #ffffff;--ion-color-success-contrast-rgb: 255, 255, 255;--ion-color-success-shade: #28ba62;--ion-color-success-tint: #42d77d;--ion-color-warning: #ffc409;--ion-color-warning-rgb: 255, 196, 9;--ion-color-warning-contrast: #000000;--ion-color-warning-contrast-rgb: 0, 0, 0;--ion-color-warning-shade: #e0ac08;--ion-color-warning-tint: #ffca22;--ion-color-danger: #eb445a;--ion-color-danger-rgb: 235, 68, 90;--ion-color-danger-contrast: #ffffff;--ion-color-danger-contrast-rgb: 255, 255, 255;--ion-color-danger-shade: #cf3c4f;--ion-color-danger-tint: #ed576b;--ion-color-dark: #222428;--ion-color-dark-rgb: 34, 36, 40;--ion-color-dark-contrast: #ffffff;--ion-color-dark-contrast-rgb: 255, 255, 255;--ion-color-dark-shade: #1e2023;--ion-color-dark-tint: #383a3e;--ion-color-medium: #92949c;--ion-color-medium-rgb: 146, 148, 156;--ion-color-medium-contrast: #ffffff;--ion-color-medium-contrast-rgb: 255, 255, 255;--ion-color-medium-shade: #808289;--ion-color-medium-tint: #9d9fa6;--ion-color-light: #f4f5f8;--ion-color-light-rgb: 244, 245, 248;--ion-color-light-contrast: #000000;--ion-color-light-contrast-rgb: 0, 0, 0;--ion-color-light-shade: #d7d8da;--ion-color-light-tint: #f5f6f9}@media (prefers-color-scheme: dark){body{--ion-color-primary: #f4f5f8;--ion-color-primary-rgb: 244, 245, 248;--ion-color-primary-contrast: #000000;--ion-color-primary-contrast-rgb: 0, 0, 0;--ion-color-primary-shade: #d7d8da;--ion-color-primary-tint: #f5f6f9;--ion-color-secondary: #50c8ff;--ion-color-secondary-rgb: 80,200,255;--ion-color-secondary-contrast: #ffffff;--ion-color-secondary-contrast-rgb: 255,255,255;--ion-color-secondary-shade: #46b0e0;--ion-color-secondary-tint: #62ceff;--ion-color-tertiary: #6a64ff;--ion-color-tertiary-rgb: 106,100,255;--ion-color-tertiary-contrast: #ffffff;--ion-color-tertiary-contrast-rgb: 255,255,255;--ion-color-tertiary-shade: #5d58e0;--ion-color-tertiary-tint: #7974ff;--ion-color-success: #2fdf75;--ion-color-success-rgb: 47,223,117;--ion-color-success-contrast: #000000;--ion-color-success-contrast-rgb: 0,0,0;--ion-color-success-shade: #29c467;--ion-color-success-tint: #44e283;--ion-color-warning: #ffd534;--ion-color-warning-rgb: 255,213,52;--ion-color-warning-contrast: #000000;--ion-color-warning-contrast-rgb: 0,0,0;--ion-color-warning-shade: #e0bb2e;--ion-color-warning-tint: #ffd948;--ion-color-danger: #ff4961;--ion-color-danger-rgb: 255,73,97;--ion-color-danger-contrast: #ffffff;--ion-color-danger-contrast-rgb: 255,255,255;--ion-color-danger-shade: #e04055;--ion-color-danger-tint: #ff5b71;--ion-color-dark: #f4f5f8;--ion-color-dark-rgb: 244,245,248;--ion-color-dark-contrast: #000000;--ion-color-dark-contrast-rgb: 0,0,0;--ion-color-dark-shade: #d7d8da;--ion-color-dark-tint: #f5f6f9;--ion-color-medium: #989aa2;--ion-color-medium-rgb: 152,154,162;--ion-color-medium-contrast: #000000;--ion-color-medium-contrast-rgb: 0,0,0;--ion-color-medium-shade: #86888f;--ion-color-medium-tint: #a2a4ab;--ion-color-light: #222428;--ion-color-light-rgb: 34,36,40;--ion-color-light-contrast: #ffffff;--ion-color-light-contrast-rgb: 255,255,255;--ion-color-light-shade: #1e2023;--ion-color-light-tint: #383a3e}.ios body{--ion-background-color: #000000;--ion-background-color-rgb: 0,0,0;--ion-text-color: #ffffff;--ion-text-color-rgb: 255,255,255;--ion-color-step-50: #0d0d0d;--ion-color-step-100: #1a1a1a;--ion-color-step-150: #262626;--ion-color-step-200: #333333;--ion-color-step-250: #404040;--ion-color-step-300: #4d4d4d;--ion-color-step-350: #595959;--ion-color-step-400: #666666;--ion-color-step-450: #737373;--ion-color-step-500: #808080;--ion-color-step-550: #8c8c8c;--ion-color-step-600: #999999;--ion-color-step-650: #a6a6a6;--ion-color-step-700: #b3b3b3;--ion-color-step-750: #bfbfbf;--ion-color-step-800: #cccccc;--ion-color-step-850: #d9d9d9;--ion-color-step-900: #e6e6e6;--ion-color-step-950: #f2f2f2;--ion-item-background: #000000;--ion-card-background: #1c1c1d}.ios ion-modal{--ion-background-color: var(--ion-color-step-100);--ion-toolbar-background: var(--ion-color-step-150);--ion-toolbar-border-color: var(--ion-color-step-250)}.md body{--ion-background-color: #121212;--ion-background-color-rgb: 18,18,18;--ion-text-color: #ffffff;--ion-text-color-rgb: 255,255,255;--ion-border-color: #222222;--ion-color-step-50: #1e1e1e;--ion-color-step-100: #2a2a2a;--ion-color-step-150: #363636;--ion-color-step-200: #414141;--ion-color-step-250: #4d4d4d;--ion-color-step-300: #595959;--ion-color-step-350: #656565;--ion-color-step-400: #717171;--ion-color-step-450: #7d7d7d;--ion-color-step-500: #898989;--ion-color-step-550: #949494;--ion-color-step-600: #a0a0a0;--ion-color-step-650: #acacac;--ion-color-step-700: #b8b8b8;--ion-color-step-750: #c4c4c4;--ion-color-step-800: #d0d0d0;--ion-color-step-850: #dbdbdb;--ion-color-step-900: #e7e7e7;--ion-color-step-950: #f3f3f3;--ion-item-background: #1e1e1e;--ion-toolbar-background: #1f1f1f;--ion-tab-bar-background: #1f1f1f;--ion-card-background: #1e1e1e}}html{--ion-dynamic-font: var(--ion-default-dynamic-font)}\n', document.head.appendChild(o), t({
        c: Vn,
        d: ho,
        e: Yn,
        i: function (t, e, o, n, i, r) {
          return Nn(Un(t, e, o, n, i, r, !0))
        },
        j: Un,
        k: function () {
          Ye = null
        },
        o: jn,
        p: function (t) {
          Ye = t
        },
        u: ke,
        w: Ze
      });
      const i = {}, r = [], a = () => {
        }, s = () => !1,
        l = t => 111 === t.charCodeAt(0) && 110 === t.charCodeAt(1) && (t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97),
        c = t => t.startsWith("onUpdate:"), d = Object.assign, u = (t, e) => {
          const o = t.indexOf(e);
          o > -1 && t.splice(o, 1)
        }, p = Object.prototype.hasOwnProperty, h = (t, e) => p.call(t, e), f = Array.isArray,
        m = t => "[object Map]" === $(t), g = t => "[object Set]" === $(t), b = t => "function" == typeof t,
        v = t => "string" == typeof t, y = t => "symbol" == typeof t, x = t => null !== t && "object" == typeof t,
        w = t => (x(t) || b(t)) && b(t.then) && b(t.catch), k = Object.prototype.toString, $ = t => k.call(t),
        _ = t => $(t).slice(8, -1), C = t => "[object Object]" === $(t),
        S = t => v(t) && "NaN" !== t && "-" !== t[0] && "" + parseInt(t, 10) === t,
        E = n(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
        T = t => {
          const e = Object.create(null);
          return o => e[o] || (e[o] = t(o))
        }, z = /-(\w)/g, A = T((t => t.replace(z, ((t, e) => e ? e.toUpperCase() : "")))), R = /\B([A-Z])/g,
        I = T((t => t.replace(R, "-$1").toLowerCase())), O = T((t => t.charAt(0).toUpperCase() + t.slice(1))),
        L = T((t => t ? `on${O(t)}` : "")), P = (t, e) => !Object.is(t, e), j = (t, e) => {
          for (let o = 0; o < t.length; o++) t[o](e)
        }, B = (t, e, o) => {
          Object.defineProperty(t, e, { configurable: !0, enumerable: !1, value: o })
        }, M = t => {
          const e = parseFloat(t);
          return isNaN(e) ? t : e
        };
      let N;
      const V = () => N || (N = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});

      function F(t) {
        if (f(t)) {
          const e = {};
          for (let o = 0; o < t.length; o++) {
            const n = t[o], i = v(n) ? q(n) : F(n);
            if (i) for (const t in i) e[t] = i[t]
          }
          return e
        }
        if (v(t) || x(t)) return t
      }

      const H = /;(?![^(]*\))/g, D = /:([^]+)/, W = /\/\*[^]*?\*\//g;

      function q(t) {
        const e = {};
        return t.replace(W, "").split(H).forEach((t => {
          if (t) {
            const o = t.split(D);
            o.length > 1 && (e[o[0].trim()] = o[1].trim())
          }
        })), e
      }

      function U(t) {
        let e = "";
        if (v(t)) e = t; else if (f(t)) for (let o = 0; o < t.length; o++) {
          const n = U(t[o]);
          n && (e += n + " ")
        } else if (x(t)) for (const o in t) t[o] && (e += o + " ");
        return e.trim()
      }

      const G = n("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");

      function X(t) {
        return !!t || "" === t
      }

      t("t", (t => v(t) ? t : null == t ? "" : f(t) || x(t) && (t.toString === k || !b(t.toString)) ? JSON.stringify(t, Y, 2) : String(t)));
      const Y = (t, e) => e && e.__v_isRef ? Y(t, e.value) : m(e) ? { [`Map(${e.size})`]: [...e.entries()].reduce(((t, [e, o], n) => (t[K(e, n) + " =>"] = o, t)), {}) } : g(e) ? { [`Set(${e.size})`]: [...e.values()].map((t => K(t))) } : y(e) ? K(e) : !x(e) || f(e) || C(e) ? e : String(e),
        K = (t, e = "") => {
          var o;
          return y(t) ? `Symbol(${null != (o = t.description) ? o : e})` : t
        };
      /**
       * @vue/reactivity v3.4.21
       * (c) 2018-present Yuxi (Evan) You and Vue contributors
       * @license MIT
       **/
      let Z, Q;

      class J {
        constructor(t = !1) {
          this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = Z, !t && Z && (this.index = (Z.scopes || (Z.scopes = [])).push(this) - 1)
        }

        get active() {
          return this._active
        }

        run(t) {
          if (this._active) {
            const e = Z;
            try {
              return Z = this, t()
            } finally {
              Z = e
            }
          }
        }

        on() {
          Z = this
        }

        off() {
          Z = this.parent
        }

        stop(t) {
          if (this._active) {
            let e, o;
            for (e = 0, o = this.effects.length; e < o; e++) this.effects[e].stop();
            for (e = 0, o = this.cleanups.length; e < o; e++) this.cleanups[e]();
            if (this.scopes) for (e = 0, o = this.scopes.length; e < o; e++) this.scopes[e].stop(!0);
            if (!this.detached && this.parent && !t) {
              const t = this.parent.scopes.pop();
              t && t !== this && (this.parent.scopes[this.index] = t, t.index = this.index)
            }
            this.parent = void 0, this._active = !1
          }
        }
      }

      class tt {
        constructor(t, e, o, n) {
          this.fn = t, this.trigger = e, this.scheduler = o, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, function (t, e = Z) {
            e && e.active && e.effects.push(t)
          }(this, n)
        }

        get dirty() {
          if (2 === this._dirtyLevel || 3 === this._dirtyLevel) {
            this._dirtyLevel = 1, st();
            for (let t = 0; t < this._depsLength; t++) {
              const e = this.deps[t];
              if (e.computed && (e.computed.value, this._dirtyLevel >= 4)) break
            }
            1 === this._dirtyLevel && (this._dirtyLevel = 0), lt()
          }
          return this._dirtyLevel >= 4
        }

        set dirty(t) {
          this._dirtyLevel = t ? 4 : 0
        }

        run() {
          if (this._dirtyLevel = 0, !this.active) return this.fn();
          let t = it, e = Q;
          try {
            return it = !0, Q = this, this._runnings++, et(this), this.fn()
          } finally {
            ot(this), this._runnings--, Q = e, it = t
          }
        }

        stop() {
          var t;
          this.active && (et(this), ot(this), null == (t = this.onStop) || t.call(this), this.active = !1)
        }
      }

      function et(t) {
        t._trackId++, t._depsLength = 0
      }

      function ot(t) {
        if (t.deps.length > t._depsLength) {
          for (let e = t._depsLength; e < t.deps.length; e++) nt(t.deps[e], t);
          t.deps.length = t._depsLength
        }
      }

      function nt(t, e) {
        const o = t.get(e);
        void 0 !== o && e._trackId !== o && (t.delete(e), 0 === t.size && t.cleanup())
      }

      let it = !0, rt = 0;
      const at = [];

      function st() {
        at.push(it), it = !1
      }

      function lt() {
        const t = at.pop();
        it = void 0 === t || t
      }

      function ct() {
        rt++
      }

      function dt() {
        for (rt--; !rt && pt.length;) pt.shift()()
      }

      function ut(t, e, o) {
        if (e.get(t) !== t._trackId) {
          e.set(t, t._trackId);
          const o = t.deps[t._depsLength];
          o !== e ? (o && nt(o, t), t.deps[t._depsLength++] = e) : t._depsLength++
        }
      }

      const pt = [];

      function ht(t, e, o) {
        ct();
        for (const n of t.keys()) {
          let o;
          n._dirtyLevel < e && (null != o ? o : o = t.get(n) === n._trackId) && (n._shouldSchedule || (n._shouldSchedule = 0 === n._dirtyLevel), n._dirtyLevel = e), n._shouldSchedule && (null != o ? o : o = t.get(n) === n._trackId) && (n.trigger(), n._runnings && !n.allowRecurse || 2 === n._dirtyLevel || (n._shouldSchedule = !1, n.scheduler && pt.push(n.scheduler)))
        }
        dt()
      }

      const ft = (t, e) => {
        const o = new Map;
        return o.cleanup = t, o.computed = e, o
      }, mt = new WeakMap, gt = Symbol(""), bt = Symbol("");

      function vt(t, e, o) {
        if (it && Q) {
          let e = mt.get(t);
          e || mt.set(t, e = new Map);
          let n = e.get(o);
          n || e.set(o, n = ft((() => e.delete(o)))), ut(Q, n)
        }
      }

      function yt(t, e, o, n, i, r) {
        const a = mt.get(t);
        if (!a) return;
        let s = [];
        if ("clear" === e) s = [...a.values()]; else if ("length" === o && f(t)) {
          const t = Number(n);
          a.forEach(((e, o) => {
            ("length" === o || !y(o) && o >= t) && s.push(e)
          }))
        } else switch (void 0 !== o && s.push(a.get(o)), e) {
          case"add":
            f(t) ? S(o) && s.push(a.get("length")) : (s.push(a.get(gt)), m(t) && s.push(a.get(bt)));
            break;
          case"delete":
            f(t) || (s.push(a.get(gt)), m(t) && s.push(a.get(bt)));
            break;
          case"set":
            m(t) && s.push(a.get(gt))
        }
        ct();
        for (const l of s) l && ht(l, 4);
        dt()
      }

      const xt = n("__proto__,__v_isRef,__isVue"),
        wt = new Set(Object.getOwnPropertyNames(Symbol).filter((t => "arguments" !== t && "caller" !== t)).map((t => Symbol[t])).filter(y)),
        kt = $t();

      function $t() {
        const t = {};
        return ["includes", "indexOf", "lastIndexOf"].forEach((e => {
          t[e] = function (...t) {
            const o = de(this);
            for (let e = 0, i = this.length; e < i; e++) vt(o, 0, e + "");
            const n = o[e](...t);
            return -1 === n || !1 === n ? o[e](...t.map(de)) : n
          }
        })), ["push", "pop", "shift", "unshift", "splice"].forEach((e => {
          t[e] = function (...t) {
            st(), ct();
            const o = de(this)[e].apply(this, t);
            return dt(), lt(), o
          }
        })), t
      }

      function _t(t) {
        const e = de(this);
        return vt(e, 0, t), e.hasOwnProperty(t)
      }

      class Ct {
        constructor(t = !1, e = !1) {
          this._isReadonly = t, this._isShallow = e
        }

        get(t, e, o) {
          const n = this._isReadonly, i = this._isShallow;
          if ("__v_isReactive" === e) return !n;
          if ("__v_isReadonly" === e) return n;
          if ("__v_isShallow" === e) return i;
          if ("__v_raw" === e) return o === (n ? i ? ee : te : i ? Jt : Qt).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
          const r = f(t);
          if (!n) {
            if (r && h(kt, e)) return Reflect.get(kt, e, o);
            if ("hasOwnProperty" === e) return _t
          }
          const a = Reflect.get(t, e, o);
          return (y(e) ? wt.has(e) : xt(e)) ? a : (n || vt(t, 0, e), i ? a : be(a) ? r && S(e) ? a : a.value : x(a) ? n ? ie(a) : oe(a) : a)
        }
      }

      class St extends Ct {
        constructor(t = !1) {
          super(!1, t)
        }

        set(t, e, o, n) {
          let i = t[e];
          if (!this._isShallow) {
            const e = se(i);
            if (le(o) || se(o) || (i = de(i), o = de(o)), !f(t) && be(i) && !be(o)) return !e && (i.value = o, !0)
          }
          const r = f(t) && S(e) ? Number(e) < t.length : h(t, e), a = Reflect.set(t, e, o, n);
          return t === de(n) && (r ? P(o, i) && yt(t, "set", e, o) : yt(t, "add", e, o)), a
        }

        deleteProperty(t, e) {
          const o = h(t, e);
          t[e];
          const n = Reflect.deleteProperty(t, e);
          return n && o && yt(t, "delete", e, void 0), n
        }

        has(t, e) {
          const o = Reflect.has(t, e);
          return y(e) && wt.has(e) || vt(t, 0, e), o
        }

        ownKeys(t) {
          return vt(t, 0, f(t) ? "length" : gt), Reflect.ownKeys(t)
        }
      }

      class Et extends Ct {
        constructor(t = !1) {
          super(!0, t)
        }

        set(t, e) {
          return !0
        }

        deleteProperty(t, e) {
          return !0
        }
      }

      const Tt = new St, zt = new Et, At = new St(!0), Rt = t => t, It = t => Reflect.getPrototypeOf(t);

      function Ot(t, e, o = !1, n = !1) {
        const i = de(t = t.__v_raw), r = de(e);
        o || (P(e, r) && vt(i, 0, e), vt(i, 0, r));
        const { has: a } = It(i), s = n ? Rt : o ? he : pe;
        return a.call(i, e) ? s(t.get(e)) : a.call(i, r) ? s(t.get(r)) : void (t !== i && t.get(e))
      }

      function Lt(t, e = !1) {
        const o = this.__v_raw, n = de(o), i = de(t);
        return e || (P(t, i) && vt(n, 0, t), vt(n, 0, i)), t === i ? o.has(t) : o.has(t) || o.has(i)
      }

      function Pt(t, e = !1) {
        return t = t.__v_raw, !e && vt(de(t), 0, gt), Reflect.get(t, "size", t)
      }

      function jt(t) {
        t = de(t);
        const e = de(this);
        return It(e).has.call(e, t) || (e.add(t), yt(e, "add", t, t)), this
      }

      function Bt(t, e) {
        e = de(e);
        const o = de(this), { has: n, get: i } = It(o);
        let r = n.call(o, t);
        r || (t = de(t), r = n.call(o, t));
        const a = i.call(o, t);
        return o.set(t, e), r ? P(e, a) && yt(o, "set", t, e) : yt(o, "add", t, e), this
      }

      function Mt(t) {
        const e = de(this), { has: o, get: n } = It(e);
        let i = o.call(e, t);
        i || (t = de(t), i = o.call(e, t)), n && n.call(e, t);
        const r = e.delete(t);
        return i && yt(e, "delete", t, void 0), r
      }

      function Nt() {
        const t = de(this), e = 0 !== t.size, o = t.clear();
        return e && yt(t, "clear", void 0, void 0), o
      }

      function Vt(t, e) {
        return function (o, n) {
          const i = this, r = i.__v_raw, a = de(r), s = e ? Rt : t ? he : pe;
          return !t && vt(a, 0, gt), r.forEach(((t, e) => o.call(n, s(t), s(e), i)))
        }
      }

      function Ft(t, e, o) {
        return function (...n) {
          const i = this.__v_raw, r = de(i), a = m(r), s = "entries" === t || t === Symbol.iterator && a,
            l = "keys" === t && a, c = i[t](...n), d = o ? Rt : e ? he : pe;
          return !e && vt(r, 0, l ? bt : gt), {
            next() {
              const { value: t, done: e } = c.next();
              return e ? { value: t, done: e } : { value: s ? [d(t[0]), d(t[1])] : d(t), done: e }
            }, [Symbol.iterator]() {
              return this
            }
          }
        }
      }

      function Ht(t) {
        return function (...e) {
          return "delete" !== t && ("clear" === t ? void 0 : this)
        }
      }

      function Dt() {
        const t = {
          get(t) {
            return Ot(this, t)
          }, get size() {
            return Pt(this)
          }, has: Lt, add: jt, set: Bt, delete: Mt, clear: Nt, forEach: Vt(!1, !1)
        }, e = {
          get(t) {
            return Ot(this, t, !1, !0)
          }, get size() {
            return Pt(this)
          }, has: Lt, add: jt, set: Bt, delete: Mt, clear: Nt, forEach: Vt(!1, !0)
        }, o = {
          get(t) {
            return Ot(this, t, !0)
          }, get size() {
            return Pt(this, !0)
          }, has(t) {
            return Lt.call(this, t, !0)
          }, add: Ht("add"), set: Ht("set"), delete: Ht("delete"), clear: Ht("clear"), forEach: Vt(!0, !1)
        }, n = {
          get(t) {
            return Ot(this, t, !0, !0)
          }, get size() {
            return Pt(this, !0)
          }, has(t) {
            return Lt.call(this, t, !0)
          }, add: Ht("add"), set: Ht("set"), delete: Ht("delete"), clear: Ht("clear"), forEach: Vt(!0, !0)
        };
        return ["keys", "values", "entries", Symbol.iterator].forEach((i => {
          t[i] = Ft(i, !1, !1), o[i] = Ft(i, !0, !1), e[i] = Ft(i, !1, !0), n[i] = Ft(i, !0, !0)
        })), [t, o, e, n]
      }

      const [Wt, qt, Ut, Gt] = Dt();

      function Xt(t, e) {
        const o = e ? t ? Gt : Ut : t ? qt : Wt;
        return (e, n, i) => "__v_isReactive" === n ? !t : "__v_isReadonly" === n ? t : "__v_raw" === n ? e : Reflect.get(h(o, n) && n in e ? o : e, n, i)
      }

      const Yt = { get: Xt(!1, !1) }, Kt = { get: Xt(!1, !0) }, Zt = { get: Xt(!0, !1) }, Qt = new WeakMap,
        Jt = new WeakMap, te = new WeakMap, ee = new WeakMap;

      function oe(t) {
        return se(t) ? t : re(t, !1, Tt, Yt, Qt)
      }

      function ne(t) {
        return re(t, !1, At, Kt, Jt)
      }

      function ie(t) {
        return re(t, !0, zt, Zt, te)
      }

      function re(t, e, o, n, i) {
        if (!x(t)) return t;
        if (t.__v_raw && (!e || !t.__v_isReactive)) return t;
        const r = i.get(t);
        if (r) return r;
        const a = (s = t).__v_skip || !Object.isExtensible(s) ? 0 : function (t) {
          switch (t) {
            case"Object":
            case"Array":
              return 1;
            case"Map":
            case"Set":
            case"WeakMap":
            case"WeakSet":
              return 2;
            default:
              return 0
          }
        }(_(s));
        var s;
        if (0 === a) return t;
        const l = new Proxy(t, 2 === a ? n : o);
        return i.set(t, l), l
      }

      function ae(t) {
        return se(t) ? ae(t.__v_raw) : !(!t || !t.__v_isReactive)
      }

      function se(t) {
        return !(!t || !t.__v_isReadonly)
      }

      function le(t) {
        return !(!t || !t.__v_isShallow)
      }

      function ce(t) {
        return ae(t) || se(t)
      }

      function de(t) {
        const e = t && t.__v_raw;
        return e ? de(e) : t
      }

      function ue(t) {
        return Object.isExtensible(t) && B(t, "__v_skip", !0), t
      }

      const pe = t => x(t) ? oe(t) : t, he = t => x(t) ? ie(t) : t;

      class fe {
        constructor(t, e, o, n) {
          this.getter = t, this._setter = e, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new tt((() => t(this._value)), (() => ge(this, 2 === this.effect._dirtyLevel ? 2 : 3))), this.effect.computed = this, this.effect.active = this._cacheable = !n, this.__v_isReadonly = o
        }

        get value() {
          const t = de(this);
          return t._cacheable && !t.effect.dirty || !P(t._value, t._value = t.effect.run()) || ge(t, 4), me(t), t.effect._dirtyLevel >= 2 && ge(t, 2), t._value
        }

        set value(t) {
          this._setter(t)
        }

        get _dirty() {
          return this.effect.dirty
        }

        set _dirty(t) {
          this.effect.dirty = t
        }
      }

      function me(t) {
        var e;
        it && Q && (t = de(t), ut(Q, null != (e = t.dep) ? e : t.dep = ft((() => t.dep = void 0), t instanceof fe ? t : void 0)))
      }

      function ge(t, e = 4, o) {
        const n = (t = de(t)).dep;
        n && ht(n, e)
      }

      function be(t) {
        return !(!t || !0 !== t.__v_isRef)
      }

      function ve(t) {
        return xe(t, !1)
      }

      function ye(t) {
        return xe(t, !0)
      }

      function xe(t, e) {
        return be(t) ? t : new we(t, e)
      }

      class we {
        constructor(t, e) {
          this.__v_isShallow = e, this.dep = void 0, this.__v_isRef = !0, this._rawValue = e ? t : de(t), this._value = e ? t : pe(t)
        }

        get value() {
          return me(this), this._value
        }

        set value(t) {
          const e = this.__v_isShallow || le(t) || se(t);
          t = e ? t : de(t), P(t, this._rawValue) && (this._rawValue = t, this._value = e ? t : pe(t), ge(this, 4))
        }
      }

      function ke(t) {
        return be(t) ? t.value : t
      }

      const $e = {
        get: (t, e, o) => ke(Reflect.get(t, e, o)), set: (t, e, o, n) => {
          const i = t[e];
          return be(i) && !be(o) ? (i.value = o, !0) : Reflect.set(t, e, o, n)
        }
      };

      function _e(t) {
        return ae(t) ? t : new Proxy(t, $e)
      }

      /**
       * @vue/runtime-core v3.4.21
       * (c) 2018-present Yuxi (Evan) You and Vue contributors
       * @license MIT
       **/function Ce(t, e, o, n) {
        try {
          return n ? t(...n) : t()
        } catch (i) {
          Ee(i, e, o)
        }
      }

      function Se(t, e, o, n) {
        if (b(t)) {
          const i = Ce(t, e, o, n);
          return i && w(i) && i.catch((t => {
            Ee(t, e, o)
          })), i
        }
        const i = [];
        for (let r = 0; r < t.length; r++) i.push(Se(t[r], e, o, n));
        return i
      }

      function Ee(t, e, o, n = !0) {
        if (e && e.vnode, e) {
          let n = e.parent;
          const i = e.proxy, r = `https://vuejs.org/error-reference/#runtime-${o}`;
          for (; n;) {
            const e = n.ec;
            if (e) for (let o = 0; o < e.length; o++) if (!1 === e[o](t, i, r)) return;
            n = n.parent
          }
          const a = e.appContext.config.errorHandler;
          if (a) return void Ce(a, null, 10, [t, i, r])
        }
        !function (t, e, o, n = !0) {
          console.error(t)
        }(t, 0, 0, n)
      }

      let Te = !1, ze = !1;
      const Ae = [];
      let Re = 0;
      const Ie = [];
      let Oe = null, Le = 0;
      const Pe = Promise.resolve();
      let je = null;

      function Be(t) {
        const e = je || Pe;
        return t ? e.then(this ? t.bind(this) : t) : e
      }

      function Me(t) {
        Ae.length && Ae.includes(t, Te && t.allowRecurse ? Re + 1 : Re) || (null == t.id ? Ae.push(t) : Ae.splice(function (t) {
          let e = Re + 1, o = Ae.length;
          for (; e < o;) {
            const n = e + o >>> 1, i = Ae[n], r = He(i);
            r < t || r === t && i.pre ? e = n + 1 : o = n
          }
          return e
        }(t.id), 0, t), Ne())
      }

      function Ne() {
        Te || ze || (ze = !0, je = Pe.then(We))
      }

      function Ve(t, e, o = (Te ? Re + 1 : 0)) {
        for (; o < Ae.length; o++) {
          const e = Ae[o];
          if (e && e.pre) {
            if (t && e.id !== t.uid) continue;
            Ae.splice(o, 1), o--, e()
          }
        }
      }

      function Fe(t) {
        if (Ie.length) {
          const t = [...new Set(Ie)].sort(((t, e) => He(t) - He(e)));
          if (Ie.length = 0, Oe) return void Oe.push(...t);
          for (Oe = t, Le = 0; Le < Oe.length; Le++) Oe[Le]();
          Oe = null, Le = 0
        }
      }

      const He = t => null == t.id ? 1 / 0 : t.id, De = (t, e) => {
        const o = He(t) - He(e);
        if (0 === o) {
          if (t.pre && !e.pre) return -1;
          if (e.pre && !t.pre) return 1
        }
        return o
      };

      function We(t) {
        ze = !1, Te = !0, Ae.sort(De);
        try {
          for (Re = 0; Re < Ae.length; Re++) {
            const t = Ae[Re];
            t && !1 !== t.active && Ce(t, null, 14)
          }
        } finally {
          Re = 0, Ae.length = 0, Fe(), Te = !1, je = null, (Ae.length || Ie.length) && We()
        }
      }

      function qe(t, e, ...o) {
        if (t.isUnmounted) return;
        const n = t.vnode.props || i;
        let r = o;
        const a = e.startsWith("update:"), s = a && e.slice(7);
        if (s && s in n) {
          const t = `${"modelValue" === s ? "model" : s}Modifiers`, { number: e, trim: a } = n[t] || i;
          a && (r = o.map((t => v(t) ? t.trim() : t))), e && (r = o.map(M))
        }
        let l, c = n[l = L(e)] || n[l = L(A(e))];
        !c && a && (c = n[l = L(I(e))]), c && Se(c, t, 6, r);
        const d = n[l + "Once"];
        if (d) {
          if (t.emitted) {
            if (t.emitted[l]) return
          } else t.emitted = {};
          t.emitted[l] = !0, Se(d, t, 6, r)
        }
      }

      function Ue(t, e, o = !1) {
        const n = e.emitsCache, i = n.get(t);
        if (void 0 !== i) return i;
        const r = t.emits;
        let a = {}, s = !1;
        if (!b(t)) {
          const n = t => {
            const o = Ue(t, e, !0);
            o && (s = !0, d(a, o))
          };
          !o && e.mixins.length && e.mixins.forEach(n), t.extends && n(t.extends), t.mixins && t.mixins.forEach(n)
        }
        return r || s ? (f(r) ? r.forEach((t => a[t] = null)) : d(a, r), x(t) && n.set(t, a), a) : (x(t) && n.set(t, null), null)
      }

      function Ge(t, e) {
        return !(!t || !l(e)) && (e = e.slice(2).replace(/Once$/, ""), h(t, e[0].toLowerCase() + e.slice(1)) || h(t, I(e)) || h(t, e))
      }

      let Xe = null, Ye = null;

      function Ke(t) {
        const e = Xe;
        return Xe = t, Ye = t && t.type.__scopeId || null, e
      }

      function Ze(t, e = Xe, o) {
        if (!e) return t;
        if (t._n) return t;
        const n = (...o) => {
          n._d && Mn(-1);
          const i = Ke(e);
          let r;
          try {
            r = t(...o)
          } finally {
            Ke(i), n._d && Mn(1)
          }
          return r
        };
        return n._n = !0, n._c = !0, n._d = !0, n
      }

      function Qe(t) {
        const {
          type: e,
          vnode: o,
          proxy: n,
          withProxy: i,
          props: r,
          propsOptions: [a],
          slots: s,
          attrs: l,
          emit: d,
          render: u,
          renderCache: p,
          data: h,
          setupState: f,
          ctx: m,
          inheritAttrs: g
        } = t;
        let b, v;
        const y = Ke(t);
        try {
          if (4 & o.shapeFlag) {
            const t = i || n, e = t;
            b = Kn(u.call(e, t, p, r, f, h, m)), v = l
          } else {
            const t = e;
            b = Kn(t.length > 1 ? t(r, { attrs: l, slots: s, emit: d }) : t(r, null)), v = e.props ? l : Je(l)
          }
        } catch (w) {
          Ln.length = 0, Ee(w, t, 1), b = Gn(In)
        }
        let x = b;
        if (v && !1 !== g) {
          const t = Object.keys(v), { shapeFlag: e } = x;
          t.length && 7 & e && (a && t.some(c) && (v = to(v, a)), x = Xn(x, v))
        }
        return o.dirs && (x = Xn(x), x.dirs = x.dirs ? x.dirs.concat(o.dirs) : o.dirs), o.transition && (x.transition = o.transition), b = x, Ke(y), b
      }

      const Je = t => {
        let e;
        for (const o in t) ("class" === o || "style" === o || l(o)) && ((e || (e = {}))[o] = t[o]);
        return e
      }, to = (t, e) => {
        const o = {};
        for (const n in t) c(n) && n.slice(9) in e || (o[n] = t[n]);
        return o
      };

      function eo(t, e, o) {
        const n = Object.keys(e);
        if (n.length !== Object.keys(t).length) return !0;
        for (let i = 0; i < n.length; i++) {
          const r = n[i];
          if (e[r] !== t[r] && !Ge(o, r)) return !0
        }
        return !1
      }

      const oo = Symbol.for("v-ndc"), no = Symbol.for("v-scx"), io = () => tn(no), ro = {};

      function ao(t, e, o) {
        return so(t, e, o)
      }

      function so(t, e, { immediate: o, deep: n, flush: r, once: s, onTrack: l, onTrigger: c } = i) {
        if (e && s) {
          const t = e;
          e = (...e) => {
            t(...e), S()
          }
        }
        const d = oi, p = t => !0 === n ? t : uo(t, !1 === n ? 1 : void 0);
        let h, m, g = !1, v = !1;
        if (be(t) ? (h = () => t.value, g = le(t)) : ae(t) ? (h = () => p(t), g = !0) : f(t) ? (v = !0, g = t.some((t => ae(t) || le(t))), h = () => t.map((t => be(t) ? t.value : ae(t) ? p(t) : b(t) ? Ce(t, d, 2) : void 0))) : h = b(t) ? e ? () => Ce(t, d, 2) : () => (m && m(), Se(t, d, 3, [x])) : a, e && n) {
          const t = h;
          h = () => uo(t())
        }
        let y, x = t => {
          m = _.onStop = () => {
            Ce(t, d, 4), m = _.onStop = void 0
          }
        };
        if (di) {
          if (x = a, e ? o && Se(e, d, 3, [h(), v ? [] : void 0, x]) : h(), "sync" !== r) return a;
          {
            const t = io();
            y = t.__watcherHandles || (t.__watcherHandles = [])
          }
        }
        let w = v ? new Array(t.length).fill(ro) : ro;
        const k = () => {
          if (_.active && _.dirty) if (e) {
            const t = _.run();
            (n || g || (v ? t.some(((t, e) => P(t, w[e]))) : P(t, w))) && (m && m(), Se(e, d, 3, [t, w === ro ? void 0 : v && w[0] === ro ? [] : w, x]), w = t)
          } else _.run()
        };
        let $;
        k.allowRecurse = !!e, "sync" === r ? $ = k : "post" === r ? $ = () => bn(k, d && d.suspense) : (k.pre = !0, d && (k.id = d.uid), $ = () => Me(k));
        const _ = new tt(h, a, $), C = Z, S = () => {
          _.stop(), C && u(C.effects, _)
        };
        return e ? o ? k() : w = _.run() : "post" === r ? bn(_.run.bind(_), d && d.suspense) : _.run(), y && y.push(S), S
      }

      function lo(t, e, o) {
        const n = this.proxy, i = v(t) ? t.includes(".") ? co(n, t) : () => n[t] : t.bind(n, n);
        let r;
        b(e) ? r = e : (r = e.handler, o = e);
        const a = ai(this), s = so(i, r.bind(n), o);
        return a(), s
      }

      function co(t, e) {
        const o = e.split(".");
        return () => {
          let e = t;
          for (let t = 0; t < o.length && e; t++) e = e[o[t]];
          return e
        }
      }

      function uo(t, e, o = 0, n) {
        if (!x(t) || t.__v_skip) return t;
        if (e && e > 0) {
          if (o >= e) return t;
          o++
        }
        if ((n = n || new Set).has(t)) return t;
        if (n.add(t), be(t)) uo(t.value, e, o, n); else if (f(t)) for (let i = 0; i < t.length; i++) uo(t[i], e, o, n); else if (g(t) || m(t)) t.forEach((t => {
          uo(t, e, o, n)
        })); else if (C(t)) for (const i in t) uo(t[i], e, o, n);
        return t
      }

      function po(t, e, o, n) {
        const i = t.dirs, r = e && e.dirs;
        for (let a = 0; a < i.length; a++) {
          const s = i[a];
          r && (s.oldValue = r[a].value);
          let l = s.dir[n];
          l && (st(), Se(l, o, 8, [t.el, s, t, e]), lt())
        }
      }/*! #__NO_SIDE_EFFECTS__ */
      function ho(t, e) {
        return b(t) ? (() => d({ name: t.name }, e, { setup: t }))() : t
      }

      const fo = t => !!t.type.__asyncLoader, mo = t => t.type.__isKeepAlive;

      function go(t, e) {
        vo(t, "a", e)
      }

      function bo(t, e) {
        vo(t, "da", e)
      }

      function vo(t, e, o = oi) {
        const n = t.__wdc || (t.__wdc = () => {
          let e = o;
          for (; e;) {
            if (e.isDeactivated) return;
            e = e.parent
          }
          return t()
        });
        if (xo(e, n, o), o) {
          let t = o.parent;
          for (; t && t.parent;) mo(t.parent.vnode) && yo(n, e, o, t), t = t.parent
        }
      }

      function yo(t, e, o, n) {
        const i = xo(e, t, n, !0);
        Eo((() => {
          u(n[e], i)
        }), o)
      }

      function xo(t, e, o = oi, n = !1) {
        if (o) {
          const i = o[t] || (o[t] = []), r = e.__weh || (e.__weh = (...n) => {
            if (o.isUnmounted) return;
            st();
            const i = ai(o), r = Se(e, o, t, n);
            return i(), lt(), r
          });
          return n ? i.unshift(r) : i.push(r), r
        }
      }

      const wo = t => (e, o = oi) => (!di || "sp" === t) && xo(t, ((...t) => e(...t)), o), ko = wo("bm"), $o = wo("m"),
        _o = wo("bu"), Co = wo("u"), So = wo("bum"), Eo = wo("um"), To = wo("sp"), zo = wo("rtg"), Ao = wo("rtc");

      function Ro(t, e = oi) {
        xo("ec", t, e)
      }

      const Io = t => t ? li(t) ? hi(t) || t.proxy : Io(t.parent) : null, Oo = d(Object.create(null), {
        $: t => t,
        $el: t => t.vnode.el,
        $data: t => t.data,
        $props: t => t.props,
        $attrs: t => t.attrs,
        $slots: t => t.slots,
        $refs: t => t.refs,
        $parent: t => Io(t.parent),
        $root: t => Io(t.root),
        $emit: t => t.emit,
        $options: t => Fo(t),
        $forceUpdate: t => t.f || (t.f = () => {
          t.effect.dirty = !0, Me(t.update)
        }),
        $nextTick: t => t.n || (t.n = Be.bind(t.proxy)),
        $watch: t => lo.bind(t)
      }), Lo = (t, e) => t !== i && !t.__isScriptSetup && h(t, e), Po = {
        get({ _: t }, e) {
          const { ctx: o, setupState: n, data: r, props: a, accessCache: s, type: l, appContext: c } = t;
          let d;
          if ("$" !== e[0]) {
            const l = s[e];
            if (void 0 !== l) switch (l) {
              case 1:
                return n[e];
              case 2:
                return r[e];
              case 4:
                return o[e];
              case 3:
                return a[e]
            } else {
              if (Lo(n, e)) return s[e] = 1, n[e];
              if (r !== i && h(r, e)) return s[e] = 2, r[e];
              if ((d = t.propsOptions[0]) && h(d, e)) return s[e] = 3, a[e];
              if (o !== i && h(o, e)) return s[e] = 4, o[e];
              Bo && (s[e] = 0)
            }
          }
          const u = Oo[e];
          let p, f;
          return u ? ("$attrs" === e && vt(t, 0, e), u(t)) : (p = l.__cssModules) && (p = p[e]) ? p : o !== i && h(o, e) ? (s[e] = 4, o[e]) : (f = c.config.globalProperties, h(f, e) ? f[e] : void 0)
        }, set({ _: t }, e, o) {
          const { data: n, setupState: r, ctx: a } = t;
          return Lo(r, e) ? (r[e] = o, !0) : n !== i && h(n, e) ? (n[e] = o, !0) : !(h(t.props, e) || "$" === e[0] && e.slice(1) in t || (a[e] = o, 0))
        }, has({ _: { data: t, setupState: e, accessCache: o, ctx: n, appContext: r, propsOptions: a } }, s) {
          let l;
          return !!o[s] || t !== i && h(t, s) || Lo(e, s) || (l = a[0]) && h(l, s) || h(n, s) || h(Oo, s) || h(r.config.globalProperties, s)
        }, defineProperty(t, e, o) {
          return null != o.get ? t._.accessCache[e] = 0 : h(o, "value") && this.set(t, e, o.value, null), Reflect.defineProperty(t, e, o)
        }
      };

      function jo(t) {
        return f(t) ? t.reduce(((t, e) => (t[e] = null, t)), {}) : t
      }

      let Bo = !0;

      function Mo(t) {
        const e = Fo(t), o = t.proxy, n = t.ctx;
        Bo = !1, e.beforeCreate && No(e.beforeCreate, t, "bc");
        const {
          data: i,
          computed: r,
          methods: s,
          watch: l,
          provide: c,
          inject: d,
          created: u,
          beforeMount: p,
          mounted: h,
          beforeUpdate: m,
          updated: g,
          activated: v,
          deactivated: y,
          beforeDestroy: w,
          beforeUnmount: k,
          destroyed: $,
          unmounted: _,
          render: C,
          renderTracked: S,
          renderTriggered: E,
          errorCaptured: T,
          serverPrefetch: z,
          expose: A,
          inheritAttrs: R,
          components: I,
          directives: O,
          filters: L
        } = e;
        if (d && function (t, e, o = a) {
          f(t) && (t = qo(t));
          for (const n in t) {
            const o = t[n];
            let i;
            i = x(o) ? "default" in o ? tn(o.from || n, o.default, !0) : tn(o.from || n) : tn(o), be(i) ? Object.defineProperty(e, n, {
              enumerable: !0,
              configurable: !0,
              get: () => i.value,
              set: t => i.value = t
            }) : e[n] = i
          }
        }(d, n, null), s) for (const a in s) {
          const t = s[a];
          b(t) && (n[a] = t.bind(o))
        }
        if (i) {
          const e = i.call(o, o);
          x(e) && (t.data = oe(e))
        }
        if (Bo = !0, r) for (const f in r) {
          const t = r[f], e = b(t) ? t.bind(o, o) : b(t.get) ? t.get.bind(o, o) : a,
            i = !b(t) && b(t.set) ? t.set.bind(o) : a, s = fi({ get: e, set: i });
          Object.defineProperty(n, f, { enumerable: !0, configurable: !0, get: () => s.value, set: t => s.value = t })
        }
        if (l) for (const a in l) Vo(l[a], n, o, a);
        if (c) {
          const t = b(c) ? c.call(o) : c;
          Reflect.ownKeys(t).forEach((e => {
            Jo(e, t[e])
          }))
        }

        function P(t, e) {
          f(e) ? e.forEach((e => t(e.bind(o)))) : e && t(e.bind(o))
        }

        if (u && No(u, t, "c"), P(ko, p), P($o, h), P(_o, m), P(Co, g), P(go, v), P(bo, y), P(Ro, T), P(Ao, S), P(zo, E), P(So, k), P(Eo, _), P(To, z), f(A)) if (A.length) {
          const e = t.exposed || (t.exposed = {});
          A.forEach((t => {
            Object.defineProperty(e, t, { get: () => o[t], set: e => o[t] = e })
          }))
        } else t.exposed || (t.exposed = {});
        C && t.render === a && (t.render = C), null != R && (t.inheritAttrs = R), I && (t.components = I), O && (t.directives = O)
      }

      function No(t, e, o) {
        Se(f(t) ? t.map((t => t.bind(e.proxy))) : t.bind(e.proxy), e, o)
      }

      function Vo(t, e, o, n) {
        const i = n.includes(".") ? co(o, n) : () => o[n];
        if (v(t)) {
          const o = e[t];
          b(o) && ao(i, o)
        } else if (b(t)) ao(i, t.bind(o)); else if (x(t)) if (f(t)) t.forEach((t => Vo(t, e, o, n))); else {
          const n = b(t.handler) ? t.handler.bind(o) : e[t.handler];
          b(n) && ao(i, n, t)
        }
      }

      function Fo(t) {
        const e = t.type, { mixins: o, extends: n } = e, {
          mixins: i,
          optionsCache: r,
          config: { optionMergeStrategies: a }
        } = t.appContext, s = r.get(e);
        let l;
        return s ? l = s : i.length || o || n ? (l = {}, i.length && i.forEach((t => Ho(l, t, a, !0))), Ho(l, e, a)) : l = e, x(e) && r.set(e, l), l
      }

      function Ho(t, e, o, n = !1) {
        const { mixins: i, extends: r } = e;
        r && Ho(t, r, o, !0), i && i.forEach((e => Ho(t, e, o, !0)));
        for (const a in e) if (n && "expose" === a) ; else {
          const n = Do[a] || o && o[a];
          t[a] = n ? n(t[a], e[a]) : e[a]
        }
        return t
      }

      const Do = {
        data: Wo,
        props: Xo,
        emits: Xo,
        methods: Go,
        computed: Go,
        beforeCreate: Uo,
        created: Uo,
        beforeMount: Uo,
        mounted: Uo,
        beforeUpdate: Uo,
        updated: Uo,
        beforeDestroy: Uo,
        beforeUnmount: Uo,
        destroyed: Uo,
        unmounted: Uo,
        activated: Uo,
        deactivated: Uo,
        errorCaptured: Uo,
        serverPrefetch: Uo,
        components: Go,
        directives: Go,
        watch: function (t, e) {
          if (!t) return e;
          if (!e) return t;
          const o = d(Object.create(null), t);
          for (const n in e) o[n] = Uo(t[n], e[n]);
          return o
        },
        provide: Wo,
        inject: function (t, e) {
          return Go(qo(t), qo(e))
        }
      };

      function Wo(t, e) {
        return e ? t ? function () {
          return d(b(t) ? t.call(this, this) : t, b(e) ? e.call(this, this) : e)
        } : e : t
      }

      function qo(t) {
        if (f(t)) {
          const e = {};
          for (let o = 0; o < t.length; o++) e[t[o]] = t[o];
          return e
        }
        return t
      }

      function Uo(t, e) {
        return t ? [...new Set([].concat(t, e))] : e
      }

      function Go(t, e) {
        return t ? d(Object.create(null), t, e) : e
      }

      function Xo(t, e) {
        return t ? f(t) && f(e) ? [...new Set([...t, ...e])] : d(Object.create(null), jo(t), jo(null != e ? e : {})) : e
      }

      function Yo() {
        return {
          app: null,
          config: {
            isNativeTag: s,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
          },
          mixins: [],
          components: {},
          directives: {},
          provides: Object.create(null),
          optionsCache: new WeakMap,
          propsCache: new WeakMap,
          emitsCache: new WeakMap
        }
      }

      let Ko = 0;

      function Zo(t, e) {
        return function (o, n = null) {
          b(o) || (o = d({}, o)), null == n || x(n) || (n = null);
          const i = Yo(), r = new WeakSet;
          let a = !1;
          const s = i.app = {
            _uid: Ko++,
            _component: o,
            _props: n,
            _container: null,
            _context: i,
            _instance: null,
            version: gi,
            get config() {
              return i.config
            },
            set config(t) {
            },
            use: (t, ...e) => (r.has(t) || (t && b(t.install) ? (r.add(t), t.install(s, ...e)) : b(t) && (r.add(t), t(s, ...e))), s),
            mixin: t => (i.mixins.includes(t) || i.mixins.push(t), s),
            component: (t, e) => e ? (i.components[t] = e, s) : i.components[t],
            directive: (t, e) => e ? (i.directives[t] = e, s) : i.directives[t],
            mount(r, l, c) {
              if (!a) {
                const d = Gn(o, n);
                return d.appContext = i, !0 === c ? c = "svg" : !1 === c && (c = void 0), l && e ? e(d, r) : t(d, r, c), a = !0, s._container = r, r.__vue_app__ = s, hi(d.component) || d.component.proxy
              }
            },
            unmount() {
              a && (t(null, s._container), delete s._container.__vue_app__)
            },
            provide: (t, e) => (i.provides[t] = e, s),
            runWithContext(t) {
              const e = Qo;
              Qo = s;
              try {
                return t()
              } finally {
                Qo = e
              }
            }
          };
          return s
        }
      }

      let Qo = null;

      function Jo(t, e) {
        if (oi) {
          let o = oi.provides;
          const n = oi.parent && oi.parent.provides;
          n === o && (o = oi.provides = Object.create(n)), o[t] = e
        }
      }

      function tn(t, e, o = !1) {
        const n = oi || Xe;
        if (n || Qo) {
          const i = n ? null == n.parent ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : Qo._context.provides;
          if (i && t in i) return i[t];
          if (arguments.length > 1) return o && b(e) ? e.call(n && n.proxy) : e
        }
      }

      function en(t, e, o, n) {
        const [r, a] = t.propsOptions;
        let s, l = !1;
        if (e) for (let i in e) {
          if (E(i)) continue;
          const c = e[i];
          let d;
          r && h(r, d = A(i)) ? a && a.includes(d) ? (s || (s = {}))[d] = c : o[d] = c : Ge(t.emitsOptions, i) || i in n && c === n[i] || (n[i] = c, l = !0)
        }
        if (a) {
          const e = de(o), n = s || i;
          for (let i = 0; i < a.length; i++) {
            const s = a[i];
            o[s] = on(r, e, s, n[s], t, !h(n, s))
          }
        }
        return l
      }

      function on(t, e, o, n, i, r) {
        const a = t[o];
        if (null != a) {
          const t = h(a, "default");
          if (t && void 0 === n) {
            const t = a.default;
            if (a.type !== Function && !a.skipFactory && b(t)) {
              const { propsDefaults: r } = i;
              if (o in r) n = r[o]; else {
                const a = ai(i);
                n = r[o] = t.call(null, e), a()
              }
            } else n = t
          }
          a[0] && (r && !t ? n = !1 : !a[1] || "" !== n && n !== I(o) || (n = !0))
        }
        return n
      }

      function nn(t, e, o = !1) {
        const n = e.propsCache, a = n.get(t);
        if (a) return a;
        const s = t.props, l = {}, c = [];
        let u = !1;
        if (!b(t)) {
          const n = t => {
            u = !0;
            const [o, n] = nn(t, e, !0);
            d(l, o), n && c.push(...n)
          };
          !o && e.mixins.length && e.mixins.forEach(n), t.extends && n(t.extends), t.mixins && t.mixins.forEach(n)
        }
        if (!s && !u) return x(t) && n.set(t, r), r;
        if (f(s)) for (let r = 0; r < s.length; r++) {
          const t = A(s[r]);
          rn(t) && (l[t] = i)
        } else if (s) for (const i in s) {
          const t = A(i);
          if (rn(t)) {
            const e = s[i], o = l[t] = f(e) || b(e) ? { type: e } : d({}, e);
            if (o) {
              const e = ln(Boolean, o.type), n = ln(String, o.type);
              o[0] = e > -1, o[1] = n < 0 || e < n, (e > -1 || h(o, "default")) && c.push(t)
            }
          }
        }
        const p = [l, c];
        return x(t) && n.set(t, p), p
      }

      function rn(t) {
        return "$" !== t[0] && !E(t)
      }

      function an(t) {
        return null === t ? "null" : "function" == typeof t ? t.name || "" : "object" == typeof t && t.constructor && t.constructor.name || ""
      }

      function sn(t, e) {
        return an(t) === an(e)
      }

      function ln(t, e) {
        return f(e) ? e.findIndex((e => sn(e, t))) : b(e) && sn(e, t) ? 0 : -1
      }

      const cn = t => "_" === t[0] || "$stable" === t, dn = t => f(t) ? t.map(Kn) : [Kn(t)], un = (t, e, o) => {
        if (e._n) return e;
        const n = Ze(((...t) => dn(e(...t))), o);
        return n._c = !1, n
      }, pn = (t, e, o) => {
        const n = t._ctx;
        for (const i in t) {
          if (cn(i)) continue;
          const o = t[i];
          if (b(o)) e[i] = un(0, o, n); else if (null != o) {
            const t = dn(o);
            e[i] = () => t
          }
        }
      }, hn = (t, e) => {
        const o = dn(e);
        t.slots.default = () => o
      }, fn = (t, e) => {
        if (32 & t.vnode.shapeFlag) {
          const o = e._;
          o ? (t.slots = de(e), B(e, "_", o)) : pn(e, t.slots = {})
        } else t.slots = {}, e && hn(t, e);
        B(t.slots, Dn, 1)
      }, mn = (t, e, o) => {
        const { vnode: n, slots: r } = t;
        let a = !0, s = i;
        if (32 & n.shapeFlag) {
          const t = e._;
          t ? o && 1 === t ? a = !1 : (d(r, e), o || 1 !== t || delete r._) : (a = !e.$stable, pn(e, r)), s = e
        } else e && (hn(t, e), s = { default: 1 });
        if (a) for (const i in r) cn(i) || null != s[i] || delete r[i]
      };

      function gn(t, e, o, n, r = !1) {
        if (f(t)) return void t.forEach(((t, i) => gn(t, e && (f(e) ? e[i] : e), o, n, r)));
        if (fo(n) && !r) return;
        const a = 4 & n.shapeFlag ? hi(n.component) || n.component.proxy : n.el, s = r ? null : a, { i: l, r: c } = t,
          d = e && e.r, p = l.refs === i ? l.refs = {} : l.refs, m = l.setupState;
        if (null != d && d !== c && (v(d) ? (p[d] = null, h(m, d) && (m[d] = null)) : be(d) && (d.value = null)), b(c)) Ce(c, l, 12, [s, p]); else {
          const e = v(c), n = be(c);
          if (e || n) {
            const i = () => {
              if (t.f) {
                const o = e ? h(m, c) ? m[c] : p[c] : c.value;
                r ? f(o) && u(o, a) : f(o) ? o.includes(a) || o.push(a) : e ? (p[c] = [a], h(m, c) && (m[c] = p[c])) : (c.value = [a], t.k && (p[t.k] = c.value))
              } else e ? (p[c] = s, h(m, c) && (m[c] = s)) : n && (c.value = s, t.k && (p[t.k] = s))
            };
            s ? (i.id = -1, bn(i, o)) : i()
          }
        }
      }

      const bn = function (t, e) {
        var o;
        e && e.pendingBranch ? f(t) ? e.effects.push(...t) : e.effects.push(t) : (f(o = t) ? Ie.push(...o) : Oe && Oe.includes(o, o.allowRecurse ? Le + 1 : Le) || Ie.push(o), Ne())
      };

      function vn(t) {
        return function (t, e) {
          V().__VUE__ = !0;
          const {
              insert: o,
              remove: n,
              patchProp: s,
              createElement: l,
              createText: c,
              createComment: d,
              setText: u,
              setElementText: p,
              parentNode: f,
              nextSibling: m,
              setScopeId: g = a,
              insertStaticContent: b
            } = t, v = (t, e, o, n = null, i = null, r = null, a = void 0, s = null, l = !!e.dynamicChildren) => {
              if (t === e) return;
              t && !Hn(t, e) && (n = et(t), X(t, i, r, !0), t = null), -2 === e.patchFlag && (l = !1, e.dynamicChildren = null);
              const { type: c, ref: d, shapeFlag: u } = e;
              switch (c) {
                case Rn:
                  y(t, e, o, n);
                  break;
                case In:
                  x(t, e, o, n);
                  break;
                case On:
                  null == t && k(e, o, n, a);
                  break;
                case An:
                  P(t, e, o, n, i, r, a, s, l);
                  break;
                default:
                  1 & u ? C(t, e, o, n, i, r, a, s, l) : 6 & u ? M(t, e, o, n, i, r, a, s, l) : (64 & u || 128 & u) && c.process(t, e, o, n, i, r, a, s, l, it)
              }
              null != d && i && gn(d, t && t.ref, r, e || t, !e)
            }, y = (t, e, n, i) => {
              if (null == t) o(e.el = c(e.children), n, i); else {
                const o = e.el = t.el;
                e.children !== t.children && u(o, e.children)
              }
            }, x = (t, e, n, i) => {
              null == t ? o(e.el = d(e.children || ""), n, i) : e.el = t.el
            }, k = (t, e, o, n) => {
              [t.el, t.anchor] = b(t.children, e, o, n, t.el, t.anchor)
            }, $ = ({ el: t, anchor: e }, n, i) => {
              let r;
              for (; t && t !== e;) r = m(t), o(t, n, i), t = r;
              o(e, n, i)
            }, _ = ({ el: t, anchor: e }) => {
              let o;
              for (; t && t !== e;) o = m(t), n(t), t = o;
              n(e)
            }, C = (t, e, o, n, i, r, a, s, l) => {
              "svg" === e.type ? a = "svg" : "math" === e.type && (a = "mathml"), null == t ? S(e, o, n, i, r, a, s, l) : R(t, e, i, r, a, s, l)
            }, S = (t, e, n, i, r, a, c, d) => {
              let u, h;
              const { props: f, shapeFlag: m, transition: g, dirs: b } = t;
              if (u = t.el = l(t.type, a, f && f.is, f), 8 & m ? p(u, t.children) : 16 & m && z(t.children, u, null, i, r, yn(t, a), c, d), b && po(t, null, i, "created"), T(u, t, t.scopeId, c, i), f) {
                for (const e in f) "value" === e || E(e) || s(u, e, null, f[e], a, t.children, i, r, Q);
                "value" in f && s(u, "value", null, f.value, a), (h = f.onVnodeBeforeMount) && Jn(h, i, t)
              }
              b && po(t, null, i, "beforeMount");
              const v = function (t, e) {
                return (!t || t && !t.pendingBranch) && e && !e.persisted
              }(r, g);
              v && g.beforeEnter(u), o(u, e, n), ((h = f && f.onVnodeMounted) || v || b) && bn((() => {
                h && Jn(h, i, t), v && g.enter(u), b && po(t, null, i, "mounted")
              }), r)
            }, T = (t, e, o, n, i) => {
              if (o && g(t, o), n) for (let r = 0; r < n.length; r++) g(t, n[r]);
              if (i && e === i.subTree) {
                const e = i.vnode;
                T(t, e, e.scopeId, e.slotScopeIds, i.parent)
              }
            }, z = (t, e, o, n, i, r, a, s, l = 0) => {
              for (let c = l; c < t.length; c++) {
                const l = t[c] = s ? Zn(t[c]) : Kn(t[c]);
                v(null, l, e, o, n, i, r, a, s)
              }
            }, R = (t, e, o, n, r, a, l) => {
              const c = e.el = t.el;
              let { patchFlag: d, dynamicChildren: u, dirs: h } = e;
              d |= 16 & t.patchFlag;
              const f = t.props || i, m = e.props || i;
              let g;
              if (o && xn(o, !1), (g = m.onVnodeBeforeUpdate) && Jn(g, o, e, t), h && po(e, t, o, "beforeUpdate"), o && xn(o, !0), u ? O(t.dynamicChildren, u, c, o, n, yn(e, r), a) : l || W(t, e, c, null, o, n, yn(e, r), a, !1), d > 0) {
                if (16 & d) L(c, e, f, m, o, n, r); else if (2 & d && f.class !== m.class && s(c, "class", null, m.class, r), 4 & d && s(c, "style", f.style, m.style, r), 8 & d) {
                  const i = e.dynamicProps;
                  for (let e = 0; e < i.length; e++) {
                    const a = i[e], l = f[a], d = m[a];
                    d === l && "value" !== a || s(c, a, l, d, r, t.children, o, n, Q)
                  }
                }
                1 & d && t.children !== e.children && p(c, e.children)
              } else l || null != u || L(c, e, f, m, o, n, r);
              ((g = m.onVnodeUpdated) || h) && bn((() => {
                g && Jn(g, o, e, t), h && po(e, t, o, "updated")
              }), n)
            }, O = (t, e, o, n, i, r, a) => {
              for (let s = 0; s < e.length; s++) {
                const l = t[s], c = e[s], d = l.el && (l.type === An || !Hn(l, c) || 70 & l.shapeFlag) ? f(l.el) : o;
                v(l, c, d, null, n, i, r, a, !0)
              }
            }, L = (t, e, o, n, r, a, l) => {
              if (o !== n) {
                if (o !== i) for (const i in o) E(i) || i in n || s(t, i, o[i], null, l, e.children, r, a, Q);
                for (const i in n) {
                  if (E(i)) continue;
                  const c = n[i], d = o[i];
                  c !== d && "value" !== i && s(t, i, d, c, l, e.children, r, a, Q)
                }
                "value" in n && s(t, "value", o.value, n.value, l)
              }
            }, P = (t, e, n, i, r, a, s, l, d) => {
              const u = e.el = t ? t.el : c(""), p = e.anchor = t ? t.anchor : c("");
              let { patchFlag: h, dynamicChildren: f, slotScopeIds: m } = e;
              m && (l = l ? l.concat(m) : m), null == t ? (o(u, n, i), o(p, n, i), z(e.children || [], n, p, r, a, s, l, d)) : h > 0 && 64 & h && f && t.dynamicChildren ? (O(t.dynamicChildren, f, n, r, a, s, l), (null != e.key || r && e === r.subTree) && wn(t, e, !0)) : W(t, e, n, p, r, a, s, l, d)
            }, M = (t, e, o, n, i, r, a, s, l) => {
              e.slotScopeIds = s, null == t ? 512 & e.shapeFlag ? i.ctx.activate(e, o, n, a, l) : N(e, o, n, i, r, a, l) : F(t, e, l)
            }, N = (t, e, o, n, r, a, s) => {
              const l = t.component = function (t, e, o) {
                const n = t.type, r = (e ? e.appContext : t.appContext) || ti, a = {
                  uid: ei++,
                  vnode: t,
                  type: n,
                  parent: e,
                  appContext: r,
                  root: null,
                  next: null,
                  subTree: null,
                  effect: null,
                  update: null,
                  scope: new J(!0),
                  render: null,
                  proxy: null,
                  exposed: null,
                  exposeProxy: null,
                  withProxy: null,
                  provides: e ? e.provides : Object.create(r.provides),
                  accessCache: null,
                  renderCache: [],
                  components: null,
                  directives: null,
                  propsOptions: nn(n, r),
                  emitsOptions: Ue(n, r),
                  emit: null,
                  emitted: null,
                  propsDefaults: i,
                  inheritAttrs: n.inheritAttrs,
                  ctx: i,
                  data: i,
                  props: i,
                  attrs: i,
                  slots: i,
                  refs: i,
                  setupState: i,
                  setupContext: null,
                  attrsProxy: null,
                  slotsProxy: null,
                  suspense: o,
                  suspenseId: o ? o.pendingId : 0,
                  asyncDep: null,
                  asyncResolved: !1,
                  isMounted: !1,
                  isUnmounted: !1,
                  isDeactivated: !1,
                  bc: null,
                  c: null,
                  bm: null,
                  m: null,
                  bu: null,
                  u: null,
                  um: null,
                  bum: null,
                  da: null,
                  a: null,
                  rtg: null,
                  rtc: null,
                  ec: null,
                  sp: null
                };
                return a.ctx = { _: a }, a.root = e ? e.root : a, a.emit = qe.bind(null, a), t.ce && t.ce(a), a
              }(t, n, r);
              if (mo(t) && (l.ctx.renderer = it), function (t, e = !1) {
                e && ri(e);
                const { props: o, children: n } = t.vnode, i = li(t);
                (function (t, e, o, n = !1) {
                  const i = {}, r = {};
                  B(r, Dn, 1), t.propsDefaults = Object.create(null), en(t, e, i, r);
                  for (const a in t.propsOptions[0]) a in i || (i[a] = void 0);
                  o ? t.props = n ? i : ne(i) : t.type.props ? t.props = i : t.props = r, t.attrs = r
                })(t, o, i, e), fn(t, n);
                i && function (t, e) {
                  const o = t.type;
                  t.accessCache = Object.create(null), t.proxy = ue(new Proxy(t.ctx, Po));
                  const { setup: n } = o;
                  if (n) {
                    const o = t.setupContext = n.length > 1 ? function (t) {
                      const e = e => {
                        t.exposed = e || {}
                      };
                      return {
                        get attrs() {
                          return function (t) {
                            return t.attrsProxy || (t.attrsProxy = new Proxy(t.attrs, { get: (e, o) => (vt(t, 0, "$attrs"), e[o]) }))
                          }(t)
                        }, slots: t.slots, emit: t.emit, expose: e
                      }
                    }(t) : null, i = ai(t);
                    st();
                    const r = Ce(n, t, 0, [t.props, o]);
                    if (lt(), i(), w(r)) {
                      if (r.then(si, si), e) return r.then((o => {
                        ui(t, o, e)
                      })).catch((e => {
                        Ee(e, t, 0)
                      }));
                      t.asyncDep = r
                    } else ui(t, r, e)
                  } else pi(t, e)
                }(t, e);
                e && ri(!1)
              }(l), l.asyncDep) {
                if (r && r.registerDep(l, H), !t.el) {
                  const t = l.subTree = Gn(In);
                  x(null, t, e, o)
                }
              } else H(l, t, e, o, r, a, s)
            }, F = (t, e, o) => {
              const n = e.component = t.component;
              if (function (t, e, o) {
                const { props: n, children: i, component: r } = t, { props: a, children: s, patchFlag: l } = e,
                  c = r.emitsOptions;
                if (e.dirs || e.transition) return !0;
                if (!(o && l >= 0)) return !(!i && !s || s && s.$stable) || n !== a && (n ? !a || eo(n, a, c) : !!a);
                if (1024 & l) return !0;
                if (16 & l) return n ? eo(n, a, c) : !!a;
                if (8 & l) {
                  const t = e.dynamicProps;
                  for (let e = 0; e < t.length; e++) {
                    const o = t[e];
                    if (a[o] !== n[o] && !Ge(c, o)) return !0
                  }
                }
                return !1
              }(t, e, o)) {
                if (n.asyncDep && !n.asyncResolved) return void D(n, e, o);
                n.next = e, function (t) {
                  const e = Ae.indexOf(t);
                  e > Re && Ae.splice(e, 1)
                }(n.update), n.effect.dirty = !0, n.update()
              } else e.el = t.el, n.vnode = e
            }, H = (t, e, o, n, i, r, s) => {
              const l = () => {
                if (t.isMounted) {
                  let { next: e, bu: o, u: n, parent: a, vnode: c } = t;
                  {
                    const o = kn(t);
                    if (o) return e && (e.el = c.el, D(t, e, s)), void o.asyncDep.then((() => {
                      t.isUnmounted || l()
                    }))
                  }
                  let d, u = e;
                  xn(t, !1), e ? (e.el = c.el, D(t, e, s)) : e = c, o && j(o), (d = e.props && e.props.onVnodeBeforeUpdate) && Jn(d, a, e, c), xn(t, !0);
                  const p = Qe(t), h = t.subTree;
                  t.subTree = p, v(h, p, f(h.el), et(h), t, i, r), e.el = p.el, null === u && function ({
                                                                                                          vnode: t,
                                                                                                          parent: e
                                                                                                        }, o) {
                    for (; e;) {
                      const n = e.subTree;
                      if (n.suspense && n.suspense.activeBranch === t && (n.el = t.el), n !== t) break;
                      (t = e.vnode).el = o, e = e.parent
                    }
                  }(t, p.el), n && bn(n, i), (d = e.props && e.props.onVnodeUpdated) && bn((() => Jn(d, a, e, c)), i)
                } else {
                  let a;
                  const { el: s, props: l } = e, { bm: c, m: d, parent: u } = t, p = fo(e);
                  if (xn(t, !1), c && j(c), !p && (a = l && l.onVnodeBeforeMount) && Jn(a, u, e), xn(t, !0), s && at) {
                    const o = () => {
                      t.subTree = Qe(t), at(s, t.subTree, t, i, null)
                    };
                    p ? e.type.__asyncLoader().then((() => !t.isUnmounted && o())) : o()
                  } else {
                    const a = t.subTree = Qe(t);
                    v(null, a, o, n, t, i, r), e.el = a.el
                  }
                  if (d && bn(d, i), !p && (a = l && l.onVnodeMounted)) {
                    const t = e;
                    bn((() => Jn(a, u, t)), i)
                  }
                  (256 & e.shapeFlag || u && fo(u.vnode) && 256 & u.vnode.shapeFlag) && t.a && bn(t.a, i), t.isMounted = !0, e = o = n = null
                }
              }, c = t.effect = new tt(l, a, (() => Me(d)), t.scope), d = t.update = () => {
                c.dirty && c.run()
              };
              d.id = t.uid, xn(t, !0), d()
            }, D = (t, e, o) => {
              e.component = t;
              const n = t.vnode.props;
              t.vnode = e, t.next = null, function (t, e, o, n) {
                const { props: i, attrs: r, vnode: { patchFlag: a } } = t, s = de(i), [l] = t.propsOptions;
                let c = !1;
                if (!(n || a > 0) || 16 & a) {
                  let n;
                  en(t, e, i, r) && (c = !0);
                  for (const r in s) e && (h(e, r) || (n = I(r)) !== r && h(e, n)) || (l ? !o || void 0 === o[r] && void 0 === o[n] || (i[r] = on(l, s, r, void 0, t, !0)) : delete i[r]);
                  if (r !== s) for (const t in r) e && h(e, t) || (delete r[t], c = !0)
                } else if (8 & a) {
                  const o = t.vnode.dynamicProps;
                  for (let n = 0; n < o.length; n++) {
                    let a = o[n];
                    if (Ge(t.emitsOptions, a)) continue;
                    const d = e[a];
                    if (l) if (h(r, a)) d !== r[a] && (r[a] = d, c = !0); else {
                      const e = A(a);
                      i[e] = on(l, s, e, d, t, !1)
                    } else d !== r[a] && (r[a] = d, c = !0)
                  }
                }
                c && yt(t, "set", "$attrs")
              }(t, e.props, n, o), mn(t, e.children, o), st(), Ve(t), lt()
            }, W = (t, e, o, n, i, r, a, s, l = !1) => {
              const c = t && t.children, d = t ? t.shapeFlag : 0, u = e.children, { patchFlag: h, shapeFlag: f } = e;
              if (h > 0) {
                if (128 & h) return void U(c, u, o, n, i, r, a, s, l);
                if (256 & h) return void q(c, u, o, n, i, r, a, s, l)
              }
              8 & f ? (16 & d && Q(c, i, r), u !== c && p(o, u)) : 16 & d ? 16 & f ? U(c, u, o, n, i, r, a, s, l) : Q(c, i, r, !0) : (8 & d && p(o, ""), 16 & f && z(u, o, n, i, r, a, s, l))
            }, q = (t, e, o, n, i, a, s, l, c) => {
              e = e || r;
              const d = (t = t || r).length, u = e.length, p = Math.min(d, u);
              let h;
              for (h = 0; h < p; h++) {
                const n = e[h] = c ? Zn(e[h]) : Kn(e[h]);
                v(t[h], n, o, null, i, a, s, l, c)
              }
              d > u ? Q(t, i, a, !0, !1, p) : z(e, o, n, i, a, s, l, c, p)
            }, U = (t, e, o, n, i, a, s, l, c) => {
              let d = 0;
              const u = e.length;
              let p = t.length - 1, h = u - 1;
              for (; d <= p && d <= h;) {
                const n = t[d], r = e[d] = c ? Zn(e[d]) : Kn(e[d]);
                if (!Hn(n, r)) break;
                v(n, r, o, null, i, a, s, l, c), d++
              }
              for (; d <= p && d <= h;) {
                const n = t[p], r = e[h] = c ? Zn(e[h]) : Kn(e[h]);
                if (!Hn(n, r)) break;
                v(n, r, o, null, i, a, s, l, c), p--, h--
              }
              if (d > p) {
                if (d <= h) {
                  const t = h + 1, r = t < u ? e[t].el : n;
                  for (; d <= h;) v(null, e[d] = c ? Zn(e[d]) : Kn(e[d]), o, r, i, a, s, l, c), d++
                }
              } else if (d > h) for (; d <= p;) X(t[d], i, a, !0), d++; else {
                const f = d, m = d, g = new Map;
                for (d = m; d <= h; d++) {
                  const t = e[d] = c ? Zn(e[d]) : Kn(e[d]);
                  null != t.key && g.set(t.key, d)
                }
                let b, y = 0;
                const x = h - m + 1;
                let w = !1, k = 0;
                const $ = new Array(x);
                for (d = 0; d < x; d++) $[d] = 0;
                for (d = f; d <= p; d++) {
                  const n = t[d];
                  if (y >= x) {
                    X(n, i, a, !0);
                    continue
                  }
                  let r;
                  if (null != n.key) r = g.get(n.key); else for (b = m; b <= h; b++) if (0 === $[b - m] && Hn(n, e[b])) {
                    r = b;
                    break
                  }
                  void 0 === r ? X(n, i, a, !0) : ($[r - m] = d + 1, r >= k ? k = r : w = !0, v(n, e[r], o, null, i, a, s, l, c), y++)
                }
                const _ = w ? function (t) {
                  const e = t.slice(), o = [0];
                  let n, i, r, a, s;
                  const l = t.length;
                  for (n = 0; n < l; n++) {
                    const l = t[n];
                    if (0 !== l) {
                      if (i = o[o.length - 1], t[i] < l) {
                        e[n] = i, o.push(n);
                        continue
                      }
                      for (r = 0, a = o.length - 1; r < a;) s = r + a >> 1, t[o[s]] < l ? r = s + 1 : a = s;
                      l < t[o[r]] && (r > 0 && (e[n] = o[r - 1]), o[r] = n)
                    }
                  }
                  for (r = o.length, a = o[r - 1]; r-- > 0;) o[r] = a, a = e[a];
                  return o
                }($) : r;
                for (b = _.length - 1, d = x - 1; d >= 0; d--) {
                  const t = m + d, r = e[t], p = t + 1 < u ? e[t + 1].el : n;
                  0 === $[d] ? v(null, r, o, p, i, a, s, l, c) : w && (b < 0 || d !== _[b] ? G(r, o, p, 2) : b--)
                }
              }
            }, G = (t, e, n, i, r = null) => {
              const { el: a, type: s, transition: l, children: c, shapeFlag: d } = t;
              if (6 & d) G(t.component.subTree, e, n, i); else if (128 & d) t.suspense.move(e, n, i); else if (64 & d) s.move(t, e, n, it); else if (s !== An) if (s !== On) if (2 !== i && 1 & d && l) if (0 === i) l.beforeEnter(a), o(a, e, n), bn((() => l.enter(a)), r); else {
                const { leave: t, delayLeave: i, afterLeave: r } = l, s = () => o(a, e, n), c = () => {
                  t(a, (() => {
                    s(), r && r()
                  }))
                };
                i ? i(a, s, c) : c()
              } else o(a, e, n); else $(t, e, n); else {
                o(a, e, n);
                for (let t = 0; t < c.length; t++) G(c[t], e, n, i);
                o(t.anchor, e, n)
              }
            }, X = (t, e, o, n = !1, i = !1) => {
              const {
                type: r,
                props: a,
                ref: s,
                children: l,
                dynamicChildren: c,
                shapeFlag: d,
                patchFlag: u,
                dirs: p
              } = t;
              if (null != s && gn(s, null, o, t, !0), 256 & d) return void e.ctx.deactivate(t);
              const h = 1 & d && p, f = !fo(t);
              let m;
              if (f && (m = a && a.onVnodeBeforeUnmount) && Jn(m, e, t), 6 & d) Z(t.component, o, n); else {
                if (128 & d) return void t.suspense.unmount(o, n);
                h && po(t, null, e, "beforeUnmount"), 64 & d ? t.type.remove(t, e, o, i, it, n) : c && (r !== An || u > 0 && 64 & u) ? Q(c, e, o, !1, !0) : (r === An && 384 & u || !i && 16 & d) && Q(l, e, o), n && Y(t)
              }
              (f && (m = a && a.onVnodeUnmounted) || h) && bn((() => {
                m && Jn(m, e, t), h && po(t, null, e, "unmounted")
              }), o)
            }, Y = t => {
              const { type: e, el: o, anchor: i, transition: r } = t;
              if (e === An) return void K(o, i);
              if (e === On) return void _(t);
              const a = () => {
                n(o), r && !r.persisted && r.afterLeave && r.afterLeave()
              };
              if (1 & t.shapeFlag && r && !r.persisted) {
                const { leave: e, delayLeave: n } = r, i = () => e(o, a);
                n ? n(t.el, a, i) : i()
              } else a()
            }, K = (t, e) => {
              let o;
              for (; t !== e;) o = m(t), n(t), t = o;
              n(e)
            }, Z = (t, e, o) => {
              const { bum: n, scope: i, update: r, subTree: a, um: s } = t;
              n && j(n), i.stop(), r && (r.active = !1, X(a, t, e, o)), s && bn(s, e), bn((() => {
                t.isUnmounted = !0
              }), e), e && e.pendingBranch && !e.isUnmounted && t.asyncDep && !t.asyncResolved && t.suspenseId === e.pendingId && (e.deps--, 0 === e.deps && e.resolve())
            }, Q = (t, e, o, n = !1, i = !1, r = 0) => {
              for (let a = r; a < t.length; a++) X(t[a], e, o, n, i)
            },
            et = t => 6 & t.shapeFlag ? et(t.component.subTree) : 128 & t.shapeFlag ? t.suspense.next() : m(t.anchor || t.el);
          let ot = !1;
          const nt = (t, e, o) => {
            null == t ? e._vnode && X(e._vnode, null, null, !0) : v(e._vnode || null, t, e, null, null, null, o), ot || (ot = !0, Ve(), Fe(), ot = !1), e._vnode = t
          }, it = { p: v, um: X, m: G, r: Y, mt: N, mc: z, pc: W, pbc: O, n: et, o: t };
          let rt, at;
          return e && ([rt, at] = e(it)), { render: nt, hydrate: rt, createApp: Zo(nt, rt) }
        }(t)
      }

      function yn({ type: t, props: e }, o) {
        return "svg" === o && "foreignObject" === t || "mathml" === o && "annotation-xml" === t && e && e.encoding && e.encoding.includes("html") ? void 0 : o
      }

      function xn({ effect: t, update: e }, o) {
        t.allowRecurse = e.allowRecurse = o
      }

      function wn(t, e, o = !1) {
        const n = t.children, i = e.children;
        if (f(n) && f(i)) for (let r = 0; r < n.length; r++) {
          const t = n[r];
          let e = i[r];
          1 & e.shapeFlag && !e.dynamicChildren && ((e.patchFlag <= 0 || 32 === e.patchFlag) && (e = i[r] = Zn(i[r]), e.el = t.el), o || wn(t, e)), e.type === Rn && (e.el = t.el)
        }
      }

      function kn(t) {
        const e = t.subTree.component;
        if (e) return e.asyncDep && !e.asyncResolved ? e : kn(e)
      }

      const $n = t => t && (t.disabled || "" === t.disabled),
        _n = t => "undefined" != typeof SVGElement && t instanceof SVGElement,
        Cn = t => "function" == typeof MathMLElement && t instanceof MathMLElement, Sn = (t, e) => {
          const o = t && t.to;
          return v(o) ? e ? e(o) : null : o
        };

      function En(t, e, o, { o: { insert: n }, m: i }, r = 2) {
        0 === r && n(t.targetAnchor, e, o);
        const { el: a, anchor: s, shapeFlag: l, children: c, props: d } = t, u = 2 === r;
        if (u && n(a, e, o), (!u || $n(d)) && 16 & l) for (let p = 0; p < c.length; p++) i(c[p], e, o, 2);
        u && n(s, e, o)
      }

      const Tn = {
        name: "Teleport",
        __isTeleport: !0,
        process(t, e, o, n, i, r, a, s, l, c) {
          const { mc: d, pc: u, pbc: p, o: { insert: h, querySelector: f, createText: m, createComment: g } } = c,
            b = $n(e.props);
          let { shapeFlag: v, children: y, dynamicChildren: x } = e;
          if (null == t) {
            const t = e.el = m(""), c = e.anchor = m("");
            h(t, o, n), h(c, o, n);
            const u = e.target = Sn(e.props, f), p = e.targetAnchor = m("");
            u && (h(p, u), "svg" === a || _n(u) ? a = "svg" : ("mathml" === a || Cn(u)) && (a = "mathml"));
            const g = (t, e) => {
              16 & v && d(y, t, e, i, r, a, s, l)
            };
            b ? g(o, c) : u && g(u, p)
          } else {
            e.el = t.el;
            const n = e.anchor = t.anchor, d = e.target = t.target, h = e.targetAnchor = t.targetAnchor,
              m = $n(t.props), g = m ? o : d, v = m ? n : h;
            if ("svg" === a || _n(d) ? a = "svg" : ("mathml" === a || Cn(d)) && (a = "mathml"), x ? (p(t.dynamicChildren, x, g, i, r, a, s), wn(t, e, !0)) : l || u(t, e, g, v, i, r, a, s, !1), b) m ? e.props && t.props && e.props.to !== t.props.to && (e.props.to = t.props.to) : En(e, o, n, c, 1); else if ((e.props && e.props.to) !== (t.props && t.props.to)) {
              const t = e.target = Sn(e.props, f);
              t && En(e, t, null, c, 0)
            } else m && En(e, d, h, c, 1)
          }
          zn(e)
        },
        remove(t, e, o, n, { um: i, o: { remove: r } }, a) {
          const { shapeFlag: s, children: l, anchor: c, targetAnchor: d, target: u, props: p } = t;
          if (u && r(d), a && r(c), 16 & s) {
            const t = a || !$n(p);
            for (let n = 0; n < l.length; n++) {
              const r = l[n];
              i(r, e, o, t, !!r.dynamicChildren)
            }
          }
        },
        move: En,
        hydrate: function (t, e, o, n, i, r, { o: { nextSibling: a, parentNode: s, querySelector: l } }, c) {
          const d = e.target = Sn(e.props, l);
          if (d) {
            const l = d._lpa || d.firstChild;
            if (16 & e.shapeFlag) if ($n(e.props)) e.anchor = c(a(t), e, s(t), o, n, i, r), e.targetAnchor = l; else {
              e.anchor = a(t);
              let s = l;
              for (; s;) if (s = a(s), s && 8 === s.nodeType && "teleport anchor" === s.data) {
                e.targetAnchor = s, d._lpa = e.targetAnchor && a(e.targetAnchor);
                break
              }
              c(l, e, d, o, n, i, r)
            }
            zn(e)
          }
          return e.anchor && a(e.anchor)
        }
      };

      function zn(t) {
        const e = t.ctx;
        if (e && e.ut) {
          let o = t.children[0].el;
          for (; o && o !== t.targetAnchor;) 1 === o.nodeType && o.setAttribute("data-v-owner", e.uid), o = o.nextSibling;
          e.ut()
        }
      }

      const An = Symbol.for("v-fgt"), Rn = Symbol.for("v-txt"), In = Symbol.for("v-cmt"), On = Symbol.for("v-stc"),
        Ln = [];
      let Pn = null;

      function jn(t = !1) {
        Ln.push(Pn = t ? null : [])
      }

      let Bn = 1;

      function Mn(t) {
        Bn += t
      }

      function Nn(t) {
        return t.dynamicChildren = Bn > 0 ? Pn || r : null, Ln.pop(), Pn = Ln[Ln.length - 1] || null, Bn > 0 && Pn && Pn.push(t), t
      }

      function Vn(t, e, o, n, i) {
        return Nn(Gn(t, e, o, n, i, !0))
      }

      function Fn(t) {
        return !!t && !0 === t.__v_isVNode
      }

      function Hn(t, e) {
        return t.type === e.type && t.key === e.key
      }

      const Dn = "__vInternal", Wn = ({ key: t }) => null != t ? t : null, qn = ({
                                                                                   ref: t,
                                                                                   ref_key: e,
                                                                                   ref_for: o
                                                                                 }) => ("number" == typeof t && (t = "" + t), null != t ? v(t) || be(t) || b(t) ? {
        i: Xe,
        r: t,
        k: e,
        f: !!o
      } : t : null);

      function Un(t, e = null, o = null, n = 0, i = null, r = (t === An ? 0 : 1), a = !1, s = !1) {
        const l = {
          __v_isVNode: !0,
          __v_skip: !0,
          type: t,
          props: e,
          key: e && Wn(e),
          ref: e && qn(e),
          scopeId: Ye,
          slotScopeIds: null,
          children: o,
          component: null,
          suspense: null,
          ssContent: null,
          ssFallback: null,
          dirs: null,
          transition: null,
          el: null,
          anchor: null,
          target: null,
          targetAnchor: null,
          staticCount: 0,
          shapeFlag: r,
          patchFlag: n,
          dynamicProps: i,
          dynamicChildren: null,
          appContext: null,
          ctx: Xe
        };
        return s ? (Qn(l, o), 128 & r && t.normalize(l)) : o && (l.shapeFlag |= v(o) ? 8 : 16), Bn > 0 && !a && Pn && (l.patchFlag > 0 || 6 & r) && 32 !== l.patchFlag && Pn.push(l), l
      }

      const Gn = t("a", (function (t, e = null, o = null, n = 0, i = null, r = !1) {
        if (t && t !== oo || (t = In), Fn(t)) {
          const n = Xn(t, e, !0);
          return o && Qn(n, o), Bn > 0 && !r && Pn && (6 & n.shapeFlag ? Pn[Pn.indexOf(t)] = n : Pn.push(n)), n.patchFlag |= -2, n
        }
        var a;
        if (b(a = t) && "__vccOpts" in a && (t = t.__vccOpts), e) {
          e = function (t) {
            return t ? ce(t) || Dn in t ? d({}, t) : t : null
          }(e);
          let { class: t, style: o } = e;
          t && !v(t) && (e.class = U(t)), x(o) && (ce(o) && !f(o) && (o = d({}, o)), e.style = F(o))
        }
        const s = v(t) ? 1 : (t => t.__isSuspense)(t) ? 128 : (t => t.__isTeleport)(t) ? 64 : x(t) ? 4 : b(t) ? 2 : 0;
        return Un(t, e, o, n, i, s, r, !0)
      }));

      function Xn(t, e, o = !1) {
        const { props: n, ref: i, patchFlag: r, children: a } = t, s = e ? function (...t) {
          const e = {};
          for (let o = 0; o < t.length; o++) {
            const n = t[o];
            for (const t in n) if ("class" === t) e.class !== n.class && (e.class = U([e.class, n.class])); else if ("style" === t) e.style = F([e.style, n.style]); else if (l(t)) {
              const o = e[t], i = n[t];
              !i || o === i || f(o) && o.includes(i) || (e[t] = o ? [].concat(o, i) : i)
            } else "" !== t && (e[t] = n[t])
          }
          return e
        }(n || {}, e) : n;
        return {
          __v_isVNode: !0,
          __v_skip: !0,
          type: t.type,
          props: s,
          key: s && Wn(s),
          ref: e && e.ref ? o && i ? f(i) ? i.concat(qn(e)) : [i, qn(e)] : qn(e) : i,
          scopeId: t.scopeId,
          slotScopeIds: t.slotScopeIds,
          children: a,
          target: t.target,
          targetAnchor: t.targetAnchor,
          staticCount: t.staticCount,
          shapeFlag: t.shapeFlag,
          patchFlag: e && t.type !== An ? -1 === r ? 16 : 16 | r : r,
          dynamicProps: t.dynamicProps,
          dynamicChildren: t.dynamicChildren,
          appContext: t.appContext,
          dirs: t.dirs,
          transition: t.transition,
          component: t.component,
          suspense: t.suspense,
          ssContent: t.ssContent && Xn(t.ssContent),
          ssFallback: t.ssFallback && Xn(t.ssFallback),
          el: t.el,
          anchor: t.anchor,
          ctx: t.ctx,
          ce: t.ce
        }
      }

      function Yn(t = " ", e = 0) {
        return Gn(Rn, null, t, e)
      }

      function Kn(t) {
        return null == t || "boolean" == typeof t ? Gn(In) : f(t) ? Gn(An, null, t.slice()) : "object" == typeof t ? Zn(t) : Gn(Rn, null, String(t))
      }

      function Zn(t) {
        return null === t.el && -1 !== t.patchFlag || t.memo ? t : Xn(t)
      }

      function Qn(t, e) {
        let o = 0;
        const { shapeFlag: n } = t;
        if (null == e) e = null; else if (f(e)) o = 16; else if ("object" == typeof e) {
          if (65 & n) {
            const o = e.default;
            return void (o && (o._c && (o._d = !1), Qn(t, o()), o._c && (o._d = !0)))
          }
          {
            o = 32;
            const n = e._;
            n || Dn in e ? 3 === n && Xe && (1 === Xe.slots._ ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024)) : e._ctx = Xe
          }
        } else b(e) ? (e = { default: e, _ctx: Xe }, o = 32) : (e = String(e), 64 & n ? (o = 16, e = [Yn(e)]) : o = 8);
        t.children = e, t.shapeFlag |= o
      }

      function Jn(t, e, o, n = null) {
        Se(t, e, 7, [o, n])
      }

      const ti = Yo();
      let ei = 0, oi = null;
      const ni = () => oi || Xe;
      let ii, ri;
      {
        const t = V(), e = (e, o) => {
          let n;
          return (n = t[e]) || (n = t[e] = []), n.push(o), t => {
            n.length > 1 ? n.forEach((e => e(t))) : n[0](t)
          }
        };
        ii = e("__VUE_INSTANCE_SETTERS__", (t => oi = t)), ri = e("__VUE_SSR_SETTERS__", (t => di = t))
      }
      const ai = t => {
        const e = oi;
        return ii(t), t.scope.on(), () => {
          t.scope.off(), ii(e)
        }
      }, si = () => {
        oi && oi.scope.off(), ii(null)
      };

      function li(t) {
        return 4 & t.vnode.shapeFlag
      }

      let ci, di = !1;

      function ui(t, e, o) {
        b(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : x(e) && (t.setupState = _e(e)), pi(t, o)
      }

      function pi(t, e, o) {
        const n = t.type;
        if (!t.render) {
          if (!e && ci && !n.render) {
            const e = n.template || Fo(t).template;
            if (e) {
              const { isCustomElement: o, compilerOptions: i } = t.appContext.config, {
                delimiters: r,
                compilerOptions: a
              } = n, s = d(d({ isCustomElement: o, delimiters: r }, i), a);
              n.render = ci(e, s)
            }
          }
          t.render = n.render || a
        }
        {
          const e = ai(t);
          st();
          try {
            Mo(t)
          } finally {
            lt(), e()
          }
        }
      }

      function hi(t) {
        if (t.exposed) return t.exposeProxy || (t.exposeProxy = new Proxy(_e(ue(t.exposed)), {
          get: (e, o) => o in e ? e[o] : o in Oo ? Oo[o](t) : void 0,
          has: (t, e) => e in t || e in Oo
        }))
      }

      const fi = (t, e) => {
        const o = function (t, e, o = !1) {
          let n, i;
          const r = b(t);
          return r ? (n = t, i = a) : (n = t.get, i = t.set), new fe(n, i, r || !i, o)
        }(t, 0, di);
        return o
      };

      function mi(t, e, o) {
        const n = arguments.length;
        return 2 === n ? x(e) && !f(e) ? Fn(e) ? Gn(t, null, [e]) : Gn(t, e) : Gn(t, null, e) : (n > 3 ? o = Array.prototype.slice.call(arguments, 2) : 3 === n && Fn(o) && (o = [o]), Gn(t, e, o))
      }

      const gi = "3.4.21", bi = "undefined" != typeof document ? document : null,
        vi = bi && bi.createElement("template"), yi = {
          insert: (t, e, o) => {
            e.insertBefore(t, o || null)
          },
          remove: t => {
            const e = t.parentNode;
            e && e.removeChild(t)
          },
          createElement: (t, e, o, n) => {
            const i = "svg" === e ? bi.createElementNS("http://www.w3.org/2000/svg", t) : "mathml" === e ? bi.createElementNS("http://www.w3.org/1998/Math/MathML", t) : bi.createElement(t, o ? { is: o } : void 0);
            return "select" === t && n && null != n.multiple && i.setAttribute("multiple", n.multiple), i
          },
          createText: t => bi.createTextNode(t),
          createComment: t => bi.createComment(t),
          setText: (t, e) => {
            t.nodeValue = e
          },
          setElementText: (t, e) => {
            t.textContent = e
          },
          parentNode: t => t.parentNode,
          nextSibling: t => t.nextSibling,
          querySelector: t => bi.querySelector(t),
          setScopeId(t, e) {
            t.setAttribute(e, "")
          },
          insertStaticContent(t, e, o, n, i, r) {
            const a = o ? o.previousSibling : e.lastChild;
            if (i && (i === r || i.nextSibling)) for (; e.insertBefore(i.cloneNode(!0), o), i !== r && (i = i.nextSibling);) ; else {
              vi.innerHTML = "svg" === n ? `<svg>${t}</svg>` : "mathml" === n ? `<math>${t}</math>` : t;
              const i = vi.content;
              if ("svg" === n || "mathml" === n) {
                const t = i.firstChild;
                for (; t.firstChild;) i.appendChild(t.firstChild);
                i.removeChild(t)
              }
              e.insertBefore(i, o)
            }
            return [a ? a.nextSibling : e.firstChild, o ? o.previousSibling : e.lastChild]
          }
        }, xi = Symbol("_vtc"), wi = Symbol("_vod"), ki = Symbol("_vsh"), $i = Symbol(""), _i = /(^|;)\s*display\s*:/,
        Ci = /\s*!important$/;

      /**
       * @vue/runtime-dom v3.4.21
       * (c) 2018-present Yuxi (Evan) You and Vue contributors
       * @license MIT
       **/function Si(t, e, o) {
        if (f(o)) o.forEach((o => Si(t, e, o))); else if (null == o && (o = ""), e.startsWith("--")) t.setProperty(e, o); else {
          const n = function (t, e) {
            const o = Ti[e];
            if (o) return o;
            let n = A(e);
            if ("filter" !== n && n in t) return Ti[e] = n;
            n = O(n);
            for (let i = 0; i < Ei.length; i++) {
              const o = Ei[i] + n;
              if (o in t) return Ti[e] = o
            }
            return e
          }(t, e);
          Ci.test(o) ? t.setProperty(I(n), o.replace(Ci, ""), "important") : t[n] = o
        }
      }

      const Ei = ["Webkit", "Moz", "ms"], Ti = {}, zi = "http://www.w3.org/1999/xlink", Ai = Symbol("_vei");

      function Ri(t, e, o, n, i = null) {
        const r = t[Ai] || (t[Ai] = {}), a = r[e];
        if (n && a) a.value = n; else {
          const [o, s] = function (t) {
            let e;
            if (Ii.test(t)) {
              let o;
              for (e = {}; o = t.match(Ii);) t = t.slice(0, t.length - o[0].length), e[o[0].toLowerCase()] = !0
            }
            const o = ":" === t[2] ? t.slice(3) : I(t.slice(2));
            return [o, e]
          }(e);
          if (n) {
            const a = r[e] = function (t, e) {
              const o = t => {
                if (t._vts) {
                  if (t._vts <= o.attached) return
                } else t._vts = Date.now();
                Se(function (t, e) {
                  if (f(e)) {
                    const o = t.stopImmediatePropagation;
                    return t.stopImmediatePropagation = () => {
                      o.call(t), t._stopped = !0
                    }, e.map((t => e => !e._stopped && t && t(e)))
                  }
                  return e
                }(t, o.value), e, 5, [t])
              };
              return o.value = t, o.attached = Pi(), o
            }(n, i);
            !function (t, e, o, n) {
              t.addEventListener(e, o, n)
            }(t, o, a, s)
          } else a && (function (t, e, o, n) {
            t.removeEventListener(e, o, n)
          }(t, o, a, s), r[e] = void 0)
        }
      }

      const Ii = /(?:Once|Passive|Capture)$/;
      let Oi = 0;
      const Li = Promise.resolve(), Pi = () => Oi || (Li.then((() => Oi = 0)), Oi = Date.now()),
        ji = t => 111 === t.charCodeAt(0) && 110 === t.charCodeAt(1) && t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123,
        Bi = d({
          patchProp: (t, e, o, n, i, r, a, s, d) => {
            const u = "svg" === i;
            "class" === e ? function (t, e, o) {
              const n = t[xi];
              n && (e = (e ? [e, ...n] : [...n]).join(" ")), null == e ? t.removeAttribute("class") : o ? t.setAttribute("class", e) : t.className = e
            }(t, n, u) : "style" === e ? function (t, e, o) {
              const n = t.style, i = v(o);
              let r = !1;
              if (o && !i) {
                if (e) if (v(e)) for (const t of e.split(";")) {
                  const e = t.slice(0, t.indexOf(":")).trim();
                  null == o[e] && Si(n, e, "")
                } else for (const t in e) null == o[t] && Si(n, t, "");
                for (const t in o) "display" === t && (r = !0), Si(n, t, o[t])
              } else if (i) {
                if (e !== o) {
                  const t = n[$i];
                  t && (o += ";" + t), n.cssText = o, r = _i.test(o)
                }
              } else e && t.removeAttribute("style");
              wi in t && (t[wi] = r ? n.display : "", t[ki] && (n.display = "none"))
            }(t, o, n) : l(e) ? c(e) || Ri(t, e, 0, n, a) : ("." === e[0] ? (e = e.slice(1), 1) : "^" === e[0] ? (e = e.slice(1), 0) : function (t, e, o, n) {
              if (n) return "innerHTML" === e || "textContent" === e || !!(e in t && ji(e) && b(o));
              if ("spellcheck" === e || "draggable" === e || "translate" === e) return !1;
              if ("form" === e) return !1;
              if ("list" === e && "INPUT" === t.tagName) return !1;
              if ("type" === e && "TEXTAREA" === t.tagName) return !1;
              if ("width" === e || "height" === e) {
                const e = t.tagName;
                if ("IMG" === e || "VIDEO" === e || "CANVAS" === e || "SOURCE" === e) return !1
              }
              return (!ji(e) || !v(o)) && e in t
            }(t, e, n, u)) ? function (t, e, o, n, i, r, a) {
              if ("innerHTML" === e || "textContent" === e) return n && a(n, i, r), void (t[e] = null == o ? "" : o);
              const s = t.tagName;
              if ("value" === e && "PROGRESS" !== s && !s.includes("-")) {
                const n = null == o ? "" : o;
                return ("OPTION" === s ? t.getAttribute("value") || "" : t.value) === n && "_value" in t || (t.value = n), null == o && t.removeAttribute(e), void (t._value = o)
              }
              let l = !1;
              if ("" === o || null == o) {
                const n = typeof t[e];
                "boolean" === n ? o = X(o) : null == o && "string" === n ? (o = "", l = !0) : "number" === n && (o = 0, l = !0)
              }
              try {
                t[e] = o
              } catch (c) {
              }
              l && t.removeAttribute(e)
            }(t, e, n, r, a, s, d) : ("true-value" === e ? t._trueValue = n : "false-value" === e && (t._falseValue = n), function (t, e, o, n, i) {
              if (n && e.startsWith("xlink:")) null == o ? t.removeAttributeNS(zi, e.slice(6, e.length)) : t.setAttributeNS(zi, e, o); else {
                const n = G(e);
                null == o || n && !X(o) ? t.removeAttribute(e) : t.setAttribute(e, n ? "" : o)
              }
            }(t, e, n, u))
          }
        }, yi);
      let Mi;
      const Ni = function (t, e, o) {
        let n = Promise.resolve();
        return n.then((() => t())).catch((t => {
          const e = new Event("vite:preloadError", { cancelable: !0 });
          if (e.payload = t, window.dispatchEvent(e), !e.defaultPrevented) throw t
        }))
      }, Vi = {
        allRenderFn: !1,
        cmpDidLoad: !0,
        cmpDidUnload: !1,
        cmpDidUpdate: !0,
        cmpDidRender: !0,
        cmpWillLoad: !0,
        cmpWillUpdate: !0,
        cmpWillRender: !0,
        connectedCallback: !0,
        disconnectedCallback: !0,
        element: !0,
        event: !0,
        hasRenderFn: !0,
        lifecycle: !0,
        hostListener: !0,
        hostListenerTargetWindow: !0,
        hostListenerTargetDocument: !0,
        hostListenerTargetBody: !0,
        hostListenerTargetParent: !1,
        hostListenerTarget: !0,
        member: !0,
        method: !0,
        mode: !0,
        observeAttribute: !0,
        prop: !0,
        propMutable: !0,
        reflect: !0,
        scoped: !0,
        shadowDom: !0,
        slot: !0,
        cssAnnotations: !0,
        state: !0,
        style: !0,
        formAssociated: !1,
        svg: !0,
        updatable: !0,
        vdomAttribute: !0,
        vdomXlink: !0,
        vdomClass: !0,
        vdomFunctional: !0,
        vdomKey: !0,
        vdomListener: !0,
        vdomRef: !0,
        vdomPropOrAttr: !0,
        vdomRender: !0,
        vdomStyle: !0,
        vdomText: !0,
        watchCallback: !0,
        taskQueue: !0,
        hotModuleReplacement: !1,
        isDebug: !1,
        isDev: !1,
        isTesting: !1,
        hydrateServerSide: !1,
        hydrateClientSide: !1,
        lifecycleDOMEvents: !1,
        lazyLoad: !1,
        profile: !1,
        slotRelocation: !0,
        appendChildSlotFix: !1,
        cloneNodeFix: !1,
        hydratedAttribute: !1,
        hydratedClass: !0,
        scriptDataOpts: !1,
        scopedSlotTextContentFix: !1,
        shadowDomShim: !1,
        slotChildNodesFix: !1,
        invisiblePrehydration: !0,
        propBoolean: !0,
        propNumber: !0,
        propString: !0,
        constructableCSS: !0,
        cmpShouldUpdate: !0,
        devTools: !1,
        shadowDelegatesFocus: !0,
        initializeNextTick: !1,
        asyncLoading: !1,
        asyncQueue: !1,
        transformTagName: !1,
        attachStyles: !0,
        experimentalSlotFixes: !1
      };
      let Fi, Hi, Di, Wi = !1, qi = !1, Ui = !1, Gi = !1, Xi = null, Yi = !1;
      const Ki = !0, Zi = t => {
          const e = new URL(t, aa.$resourcesUrl$);
          return e.origin !== na.location.origin ? e.href : e.pathname
        }, Qi = "http://www.w3.org/1999/xlink", Ji = {}, tr = t => "object" == (t = typeof t) || "function" === t,
        er = (t, e, ...o) => {
          let n = null, i = null, r = null, a = !1, s = !1;
          const l = [], c = e => {
            for (let o = 0; o < e.length; o++) n = e[o], Array.isArray(n) ? c(n) : null != n && "boolean" != typeof n && ((a = "function" != typeof t && !tr(n)) && (n = String(n)), a && s ? l[l.length - 1].$text$ += n : l.push(a ? or(null, n) : n), s = a)
          };
          if (c(o), e) {
            e.key && (i = e.key), e.name && (r = e.name);
            {
              const t = e.className || e.class;
              t && (e.class = "object" != typeof t ? t : Object.keys(t).filter((e => t[e])).join(" "))
            }
          }
          if ("function" == typeof t) return t(null === e ? {} : e, l, ir);
          const d = or(t, null);
          return d.$attrs$ = e, l.length > 0 && (d.$children$ = l), d.$key$ = i, d.$name$ = r, d
        }, or = (t, e) => {
          const o = {
            $flags$: 0,
            $tag$: t,
            $text$: e,
            $elm$: null,
            $children$: null,
            $attrs$: null,
            $key$: null,
            $name$: null
          };
          return o
        }, nr = {}, ir = { forEach: (t, e) => t.map(rr).forEach(e), map: (t, e) => t.map(rr).map(e).map(ar) },
        rr = t => ({
          vattrs: t.$attrs$,
          vchildren: t.$children$,
          vkey: t.$key$,
          vname: t.$name$,
          vtag: t.$tag$,
          vtext: t.$text$
        }), ar = t => {
          if ("function" == typeof t.vtag) {
            const e = Object.assign({}, t.vattrs);
            return t.vkey && (e.key = t.vkey), t.vname && (e.name = t.vname), er(t.vtag, e, ...t.vchildren || [])
          }
          const e = or(t.vtag, t.vtext);
          return e.$attrs$ = t.vattrs, e.$children$ = t.vchildren, e.$key$ = t.vkey, e.$name$ = t.vname, e
        }, sr = (t, e, o) => {
          const n = t;
          return { emit: t => lr(n, e, { bubbles: !!(4 & o), composed: !!(2 & o), cancelable: !!(1 & o), detail: t }) }
        }, lr = (t, e, o) => {
          const n = aa.ce(e, o);
          return t.dispatchEvent(n), n
        }, cr = new WeakMap, dr = t => {
          const e = t.$cmpMeta$, o = t.$hostElement$, n = e.$flags$, i = (e.$tagName$, () => {
          }), r = ((t, e, o) => {
            var n;
            const i = ur(e, o), r = ea.get(i);
            if (t = 11 === t.nodeType ? t : ia, r) if ("string" == typeof r) {
              t = t.head || t;
              let o, a = cr.get(t);
              if (a || cr.set(t, a = new Set), !a.has(i)) {
                {
                  o = ia.createElement("style"), o.innerHTML = r;
                  const e = null !== (n = aa.$nonce$) && void 0 !== n ? n : function (t) {
                    var e, o, n;
                    return null !== (n = null === (o = null === (e = t.head) || void 0 === e ? void 0 : e.querySelector('meta[name="csp-nonce"]')) || void 0 === o ? void 0 : o.getAttribute("content")) && void 0 !== n ? n : void 0
                  }(ia);
                  null != e && o.setAttribute("nonce", e), t.insertBefore(o, t.querySelector("link"))
                }
                4 & e.$flags$ && (o.innerHTML += "slot-fb{display:contents}slot-fb[hidden]{display:none}"), a && a.add(i)
              }
            } else t.adoptedStyleSheets.includes(r) || (t.adoptedStyleSheets = [...t.adoptedStyleSheets, r]);
            return i
          })(o.shadowRoot ? o.shadowRoot : o.getRootNode(), e, t.$modeName$);
          10 & n && (o["s-sc"] = r, o.classList.add(r + "-h"), 2 & n && o.classList.add(r + "-s")), i()
        }, ur = (t, e) => "sc-" + (e && 32 & t.$flags$ ? t.$tagName$ + "-" + e : t.$tagName$),
        pr = (t, e, o, n, i, r) => {
          if (o !== n) {
            let s = Jr(t, e), l = e.toLowerCase();
            if ("class" === e) {
              const e = t.classList, i = fr(o), r = fr(n);
              e.remove(...i.filter((t => t && !r.includes(t)))), e.add(...r.filter((t => t && !i.includes(t))))
            } else if ("style" === e) {
              for (const e in o) n && null != n[e] || (e.includes("-") ? t.style.removeProperty(e) : t.style[e] = "");
              for (const e in n) o && n[e] === o[e] || (e.includes("-") ? t.style.setProperty(e, n[e]) : t.style[e] = n[e])
            } else if ("key" === e) ; else if ("ref" === e) n && n(t); else if (t.__lookupSetter__(e) || "o" !== e[0] || "n" !== e[1]) {
              const c = tr(n);
              if ((s || c && null !== n) && !i) try {
                if (t.tagName.includes("-")) t[e] = n; else {
                  const i = null == n ? "" : n;
                  "list" === e ? s = !1 : null != o && t[e] == i || (t[e] = i)
                }
              } catch (a) {
              }
              let d = !1;
              l !== (l = l.replace(/^xlink\:?/, "")) && (e = l, d = !0), null == n || !1 === n ? !1 === n && "" !== t.getAttribute(e) || (d ? t.removeAttributeNS(Qi, e) : t.removeAttribute(e)) : (!s || 4 & r || i) && !c && (n = !0 === n ? "" : n, d ? t.setAttributeNS(Qi, e, n) : t.setAttribute(e, n))
            } else if (e = "-" === e[2] ? e.slice(3) : Jr(na, l) ? l.slice(2) : l[2] + e.slice(3), o || n) {
              const i = e.endsWith(mr);
              e = e.replace(gr, ""), o && aa.rel(t, e, o, i), n && aa.ael(t, e, n, i)
            }
          }
        }, hr = /\s/, fr = t => t ? t.split(hr) : [], mr = "Capture", gr = new RegExp(mr + "$"), br = (t, e, o, n) => {
          const i = 11 === e.$elm$.nodeType && e.$elm$.host ? e.$elm$.host : e.$elm$, r = t && t.$attrs$ || Ji,
            a = e.$attrs$ || Ji;
          for (n in r) n in a || pr(i, n, r[n], void 0, o, e.$flags$);
          for (n in a) pr(i, n, r[n], a[n], o, e.$flags$)
        }, vr = (t, e, o, n) => {
          var i;
          const r = e.$children$[o];
          let a, s, l, c = 0;
          if (Wi || (Ui = !0, "slot" === r.$tag$ && (Fi && n.classList.add(Fi + "-s"), r.$flags$ |= r.$children$ ? 2 : 1)), null !== r.$text$) a = r.$elm$ = ia.createTextNode(r.$text$); else if (1 & r.$flags$) a = r.$elm$ = ia.createTextNode(""); else {
            if (Gi || (Gi = "svg" === r.$tag$), a = r.$elm$ = ia.createElementNS(Gi ? "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", 2 & r.$flags$ ? "slot-fb" : r.$tag$), Gi && "foreignObject" === r.$tag$ && (Gi = !1), br(null, r, Gi), null != Fi && a["s-si"] !== Fi && a.classList.add(a["s-si"] = Fi), r.$children$) for (c = 0; c < r.$children$.length; ++c) s = vr(t, r, c, a), s && a.appendChild(s);
            "svg" === r.$tag$ ? Gi = !1 : "foreignObject" === a.tagName && (Gi = !0)
          }
          return a["s-hn"] = Di, 3 & r.$flags$ && (a["s-sr"] = !0, a["s-cr"] = Hi, a["s-sn"] = r.$name$ || "", a["s-rf"] = null === (i = r.$attrs$) || void 0 === i ? void 0 : i.ref, l = t && t.$children$ && t.$children$[o], l && l.$tag$ === r.$tag$ && t.$elm$ && yr(t.$elm$, !1)), a
        }, yr = (t, e) => {
          aa.$flags$ |= 1;
          const o = Array.from(t.childNodes);
          if (t["s-sr"] && Vi.experimentalSlotFixes) {
            let e = t;
            for (; e = e.nextSibling;) e && e["s-sn"] === t["s-sn"] && e["s-sh"] === Di && o.push(e)
          }
          for (let n = o.length - 1; n >= 0; n--) {
            const t = o[n];
            t["s-hn"] !== Di && t["s-ol"] && (_r(t).insertBefore(t, $r(t)), t["s-ol"].remove(), t["s-ol"] = void 0, t["s-sh"] = void 0, Ui = !0), e && yr(t, e)
          }
          aa.$flags$ &= -2
        }, xr = (t, e, o, n, i, r) => {
          let a, s = t["s-cr"] && t["s-cr"].parentNode || t;
          for (s.shadowRoot && s.tagName === Di && (s = s.shadowRoot); i <= r; ++i) n[i] && (a = vr(null, o, i, t), a && (n[i].$elm$ = a, s.insertBefore(a, $r(e))))
        }, wr = (t, e, o) => {
          for (let n = e; n <= o; ++n) {
            const e = t[n];
            if (e) {
              const t = e.$elm$;
              Ar(e), t && (qi = !0, t["s-ol"] ? t["s-ol"].remove() : yr(t, !0), t.remove())
            }
          }
        },
        kr = (t, e, o = !1) => t.$tag$ === e.$tag$ && ("slot" === t.$tag$ ? t.$name$ === e.$name$ : !!o || t.$key$ === e.$key$),
        $r = t => t && t["s-ol"] || t, _r = t => (t["s-ol"] ? t["s-ol"] : t).parentNode, Cr = (t, e, o = !1) => {
          const n = e.$elm$ = t.$elm$, i = t.$children$, r = e.$children$, a = e.$tag$, s = e.$text$;
          let l;
          null === s ? (Gi = "svg" === a || "foreignObject" !== a && Gi, ("slot" !== a || Wi) && br(t, e, Gi), null !== i && null !== r ? ((t, e, o, n, i = !1) => {
            let r, a, s = 0, l = 0, c = 0, d = 0, u = e.length - 1, p = e[0], h = e[u], f = n.length - 1, m = n[0],
              g = n[f];
            for (; s <= u && l <= f;) if (null == p) p = e[++s]; else if (null == h) h = e[--u]; else if (null == m) m = n[++l]; else if (null == g) g = n[--f]; else if (kr(p, m, i)) Cr(p, m, i), p = e[++s], m = n[++l]; else if (kr(h, g, i)) Cr(h, g, i), h = e[--u], g = n[--f]; else if (kr(p, g, i)) "slot" !== p.$tag$ && "slot" !== g.$tag$ || yr(p.$elm$.parentNode, !1), Cr(p, g, i), t.insertBefore(p.$elm$, h.$elm$.nextSibling), p = e[++s], g = n[--f]; else if (kr(h, m, i)) "slot" !== p.$tag$ && "slot" !== g.$tag$ || yr(h.$elm$.parentNode, !1), Cr(h, m, i), t.insertBefore(h.$elm$, p.$elm$), h = e[--u], m = n[++l]; else {
              for (c = -1, d = s; d <= u; ++d) if (e[d] && null !== e[d].$key$ && e[d].$key$ === m.$key$) {
                c = d;
                break
              }
              c >= 0 ? (a = e[c], a.$tag$ !== m.$tag$ ? r = vr(e && e[l], o, c, t) : (Cr(a, m, i), e[c] = void 0, r = a.$elm$), m = n[++l]) : (r = vr(e && e[l], o, l, t), m = n[++l]), r && _r(p.$elm$).insertBefore(r, $r(p.$elm$))
            }
            s > u ? xr(t, null == n[f + 1] ? null : n[f + 1].$elm$, o, n, l, f) : l > f && wr(e, s, u)
          })(n, i, e, r, o) : null !== r ? (null !== t.$text$ && (n.textContent = ""), xr(n, null, e, r, 0, r.length - 1)) : null !== i && wr(i, 0, i.length - 1), Gi && "svg" === a && (Gi = !1)) : (l = n["s-cr"]) ? l.parentNode.textContent = s : t.$text$ !== s && (n.data = s)
        }, Sr = t => {
          const e = t.childNodes;
          for (const o of e) if (1 === o.nodeType) {
            if (o["s-sr"]) {
              const t = o["s-sn"];
              o.hidden = !1;
              for (const n of e) if (n !== o) if (n["s-hn"] !== o["s-hn"] || "" !== t) {
                if (1 === n.nodeType && (t === n.getAttribute("slot") || t === n["s-sn"])) {
                  o.hidden = !0;
                  break
                }
              } else if (1 === n.nodeType || 3 === n.nodeType && "" !== n.textContent.trim()) {
                o.hidden = !0;
                break
              }
            }
            Sr(o)
          }
        }, Er = [], Tr = t => {
          let e, o, n;
          for (const i of t.childNodes) {
            if (i["s-sr"] && (e = i["s-cr"]) && e.parentNode) {
              o = e.parentNode.childNodes;
              const t = i["s-sn"];
              for (n = o.length - 1; n >= 0; n--) if (e = o[n], !e["s-cn"] && !e["s-nr"] && e["s-hn"] !== i["s-hn"] && !Vi.experimentalSlotFixes) if (zr(e, t)) {
                let o = Er.find((t => t.$nodeToRelocate$ === e));
                qi = !0, e["s-sn"] = e["s-sn"] || t, o ? (o.$nodeToRelocate$["s-sh"] = i["s-hn"], o.$slotRefNode$ = i) : (e["s-sh"] = i["s-hn"], Er.push({
                  $slotRefNode$: i,
                  $nodeToRelocate$: e
                })), e["s-sr"] && Er.map((t => {
                  zr(t.$nodeToRelocate$, e["s-sn"]) && (o = Er.find((t => t.$nodeToRelocate$ === e)), o && !t.$slotRefNode$ && (t.$slotRefNode$ = o.$slotRefNode$))
                }))
              } else Er.some((t => t.$nodeToRelocate$ === e)) || Er.push({ $nodeToRelocate$: e })
            }
            1 === i.nodeType && Tr(i)
          }
        },
        zr = (t, e) => 1 === t.nodeType ? null === t.getAttribute("slot") && "" === e || t.getAttribute("slot") === e : t["s-sn"] === e || "" === e,
        Ar = t => {
          t.$attrs$ && t.$attrs$.ref && t.$attrs$.ref(null), t.$children$ && t.$children$.map(Ar)
        }, Rr = (t, e, o = !1) => {
          var n, i, r, a, s;
          const l = t.$hostElement$, c = t.$cmpMeta$, d = t.$vnode$ || or(null, null),
            u = (p = e) && p.$tag$ === nr ? e : er(null, null, e);
          var p;
          if (Di = l.tagName, c.$attrsToReflect$ && (u.$attrs$ = u.$attrs$ || {}, c.$attrsToReflect$.map((([t, e]) => u.$attrs$[e] = l[t]))), o && u.$attrs$) for (const h of Object.keys(u.$attrs$)) l.hasAttribute(h) && !["key", "ref", "style", "class"].includes(h) && (u.$attrs$[h] = l[h]);
          if (u.$tag$ = null, u.$flags$ |= 4, t.$vnode$ = u, u.$elm$ = d.$elm$ = l.shadowRoot || l, Fi = l["s-sc"], Wi = !!(1 & c.$flags$), Hi = l["s-cr"], qi = !1, Cr(d, u, o), aa.$flags$ |= 1, Ui) {
            Tr(u.$elm$);
            for (const t of Er) {
              const e = t.$nodeToRelocate$;
              if (!e["s-ol"]) {
                const t = ia.createTextNode("");
                t["s-nr"] = e, e.parentNode.insertBefore(e["s-ol"] = t, e)
              }
            }
            for (const t of Er) {
              const e = t.$nodeToRelocate$, s = t.$slotRefNode$;
              if (s) {
                const t = s.parentNode;
                let o = s.nextSibling;
                {
                  let r = null === (n = e["s-ol"]) || void 0 === n ? void 0 : n.previousSibling;
                  for (; r;) {
                    let n = null !== (i = r["s-nr"]) && void 0 !== i ? i : null;
                    if (n && n["s-sn"] === e["s-sn"] && t === n.parentNode && (n = n.nextSibling, !n || !n["s-nr"])) {
                      o = n;
                      break
                    }
                    r = r.previousSibling
                  }
                }
                (!o && t !== e.parentNode || e.nextSibling !== o) && e !== o && (!e["s-hn"] && e["s-ol"] && (e["s-hn"] = e["s-ol"].parentNode.nodeName), t.insertBefore(e, o), 1 === e.nodeType && (e.hidden = null !== (r = e["s-ih"]) && void 0 !== r && r)), e && "function" == typeof s["s-rf"] && s["s-rf"](e)
              } else 1 === e.nodeType && (o && (e["s-ih"] = null !== (a = e.hidden) && void 0 !== a && a), e.hidden = !0)
            }
          }
          if (qi && Sr(u.$elm$), aa.$flags$ &= -2, Er.length = 0, Vi.experimentalScopedSlotChanges && 2 & c.$flags$) for (const h of u.$elm$.childNodes) h["s-hn"] === Di || h["s-sh"] || (o && null == h["s-ih"] && (h["s-ih"] = null !== (s = h.hidden) && void 0 !== s && s), h.hidden = !0);
          Hi = void 0
        }, Ir = (t, e) => (t.$flags$ |= 16, t.$ancestorComponent$, ga((() => Or(t, e)))), Or = (t, e) => {
          const o = t.$hostElement$, n = (t.$cmpMeta$.$tagName$, () => {
          }), i = o;
          let r;
          return r = Vr(i, e ? "componentWillLoad" : "componentWillUpdate"), r = Lr(r, (() => Vr(i, "componentWillRender"))), n(), Lr(r, (() => jr(t, i, e)))
        }, Lr = (t, e) => Pr(t) ? t.then(e) : e(),
        Pr = t => t instanceof Promise || t && t.then && "function" == typeof t.then, jr = async (t, e, o) => {
          const n = t.$hostElement$, i = (t.$cmpMeta$.$tagName$, () => {
          });
          n["s-rc"], o && dr(t);
          const r = (t.$cmpMeta$.$tagName$, () => {
          });
          Br(t, e, n, o), r(), i(), Mr(t)
        }, Br = (t, e, o, n) => {
          try {
            Xi = e, e = e.render && e.render(), t.$flags$ &= -17, t.$flags$ |= 2, (Vi.hasRenderFn || Vi.reflect) && (Vi.vdomRender || Vi.reflect) && (Vi.hydrateServerSide || Rr(t, e, n))
          } catch (i) {
            ta(i, t.$hostElement$)
          }
          return Xi = null, null
        }, Mr = t => {
          t.$cmpMeta$.$tagName$;
          const e = () => {
          }, o = t.$hostElement$;
          t.$ancestorComponent$, Vr(o, "componentDidRender"), 64 & t.$flags$ ? (Vr(o, "componentDidUpdate"), e()) : (t.$flags$ |= 64, Vr(o, "componentDidLoad"), e())
        }, Nr = t => {
          {
            const e = Zr(t), o = e.$hostElement$.isConnected;
            return o && 2 == (18 & e.$flags$) && Ir(e, !1), o
          }
        }, Vr = (t, e, o) => {
          if (t && t[e]) try {
            return t[e](o)
          } catch (n) {
            ta(n)
          }
        }, Fr = (t, e, o, n) => {
          const i = Zr(t), r = t, a = i.$instanceValues$.get(e), s = i.$flags$, l = r;
          var c, d;
          c = o, d = n.$members$[e][0], o = null == c || tr(c) ? c : 4 & d ? "false" !== c && ("" === c || !!c) : 2 & d ? parseFloat(c) : 1 & d ? String(c) : c;
          const u = Number.isNaN(a) && Number.isNaN(o);
          if (o !== a && !u) {
            if (i.$instanceValues$.set(e, o), n.$watchers$ && 128 & s) {
              const t = n.$watchers$[e];
              t && t.map((t => {
                try {
                  l[t](o, a, e)
                } catch (n) {
                  ta(n, r)
                }
              }))
            }
            if (2 == (18 & s)) {
              if (l.componentShouldUpdate && !1 === l.componentShouldUpdate(o, a, e)) return;
              Ir(i, !1)
            }
          }
        }, Hr = (t, e, o) => {
          var n;
          const i = t.prototype;
          if (e.$members$) {
            t.watchers && (e.$watchers$ = t.watchers);
            const o = Object.entries(e.$members$);
            o.map((([t, [o]]) => {
              (31 & o || 32 & o) && Object.defineProperty(i, t, {
                get() {
                  return ((t, e) => Zr(t).$instanceValues$.get(e))(this, t)
                }, set(o) {
                  Fr(this, t, o, e)
                }, configurable: !0, enumerable: !0
              })
            }));
            {
              const r = new Map;
              i.attributeChangedCallback = function (t, o, n) {
                aa.jmp((() => {
                  var a;
                  const s = r.get(t);
                  if (this.hasOwnProperty(s)) n = this[s], delete this[s]; else {
                    if (i.hasOwnProperty(s) && "number" == typeof this[s] && this[s] == n) return;
                    if (null == s) {
                      const i = Zr(this), r = null == i ? void 0 : i.$flags$;
                      if (r && !(8 & r) && 128 & r && n !== o) {
                        const i = this, r = null === (a = e.$watchers$) || void 0 === a ? void 0 : a[t];
                        null == r || r.forEach((e => {
                          null != i[e] && i[e].call(i, n, o, t)
                        }))
                      }
                      return
                    }
                  }
                  this[s] = (null !== n || "boolean" != typeof this[s]) && n
                }))
              }, t.observedAttributes = Array.from(new Set([...Object.keys(null !== (n = e.$watchers$) && void 0 !== n ? n : {}), ...o.filter((([t, e]) => 15 & e[0])).map((([t, o]) => {
                var n;
                const i = o[1] || t;
                return r.set(i, t), 512 & o[0] && (null === (n = e.$attrsToReflect$) || void 0 === n || n.push([t, i])), i
              }))]))
            }
          }
          return t
        }, Dr = async (t, e, o, n) => {
          let i;
          if (!(32 & e.$flags$) && (e.$flags$ |= 32, o.$lazyBundleId$, i = t.constructor, customElements.whenDefined(o.$tagName$).then((() => e.$flags$ |= 128)), i.style)) {
            let n = i.style;
            "string" != typeof n && (n = n[e.$modeName$ = (t => oa.map((e => e(t))).find((t => !!t)))(t)]);
            const r = ur(o, e.$modeName$);
            if (!ea.has(r)) {
              const t = (o.$tagName$, () => {
              });
              ((t, e, o) => {
                let n = ea.get(t);
                la && o ? (n = n || new CSSStyleSheet, "string" == typeof n ? n = e : n.replaceSync(e)) : n = e, ea.set(t, n)
              })(r, n, !!(1 & o.$flags$)), t()
            }
          }
          e.$ancestorComponent$, Ir(e, !0)
        }, Wr = t => {
          const e = t["s-cr"] = ia.createComment("");
          e["s-cn"] = !0, t.insertBefore(e, t.firstChild)
        }, qr = (t, e) => {
          const o = { $flags$: e[0], $tagName$: e[1] };
          o.$members$ = e[2], o.$listeners$ = e[3], o.$watchers$ = t.$watchers$, o.$attrsToReflect$ = [];
          const n = t.prototype.connectedCallback, i = t.prototype.disconnectedCallback;
          return Object.assign(t.prototype, {
            __registerHost() {
              Qr(this, o)
            }, connectedCallback() {
              (t => {
                if (!(1 & aa.$flags$)) {
                  const e = Zr(t), o = e.$cmpMeta$, n = (o.$tagName$, () => {
                  });
                  1 & e.$flags$ ? (Ur(t, e, o.$listeners$), (null == e ? void 0 : e.$lazyInstance$) ? e.$lazyInstance$ : (null == e ? void 0 : e.$onReadyPromise$) && e.$onReadyPromise$.then((() => {
                    e.$lazyInstance$
                  }))) : (e.$flags$ |= 1, 12 & o.$flags$ && Wr(t), o.$members$ && Object.entries(o.$members$).map((([e, [o]]) => {
                    if (31 & o && t.hasOwnProperty(e)) {
                      const o = t[e];
                      delete t[e], t[e] = o
                    }
                  })), Dr(t, e, o)), n()
                }
              })(this), n && n.call(this)
            }, disconnectedCallback() {
              (async t => {
                if (!(1 & aa.$flags$)) {
                  const e = Zr(t);
                  e.$rmListeners$ && (e.$rmListeners$.map((t => t())), e.$rmListeners$ = void 0)
                }
              })(this), i && i.call(this)
            }, __attachShadow() {
              this.attachShadow({ mode: "open", delegatesFocus: !!(16 & o.$flags$) })
            }
          }), t.is = o.$tagName$, Hr(t, o)
        }, Ur = (t, e, o, n) => {
          o && o.map((([o, n, i]) => {
            const r = Xr(t, o), a = Gr(e, i), s = Yr(o);
            aa.ael(r, n, a, s), (e.$rmListeners$ = e.$rmListeners$ || []).push((() => aa.rel(r, n, a, s)))
          }))
        }, Gr = (t, e) => o => {
          try {
            Vi.lazyLoad || t.$hostElement$[e](o)
          } catch (n) {
            ta(n)
          }
        }, Xr = (t, e) => 4 & e ? ia : 8 & e ? na : 16 & e ? ia.body : t,
        Yr = t => sa ? { passive: !!(1 & t), capture: !!(2 & t) } : !!(2 & t), Kr = new WeakMap, Zr = t => Kr.get(t),
        Qr = (t, e) => {
          const o = { $flags$: 0, $hostElement$: t, $cmpMeta$: e, $instanceValues$: new Map };
          return Ur(t, o, e.$listeners$), Kr.set(t, o)
        }, Jr = (t, e) => e in t, ta = (t, e) => (0, console.error)(t, e), ea = new Map, oa = [],
        na = "undefined" != typeof window ? window : {}, ia = na.document || { head: {} },
        ra = na.HTMLElement || class {
        }, aa = {
          $flags$: 0,
          $resourcesUrl$: "",
          jmp: t => t(),
          raf: t => requestAnimationFrame(t),
          ael: (t, e, o, n) => t.addEventListener(e, o, n),
          rel: (t, e, o, n) => t.removeEventListener(e, o, n),
          ce: (t, e) => new CustomEvent(t, e)
        }, sa = (() => {
          let t = !1;
          try {
            ia.addEventListener("e", null, Object.defineProperty({}, "passive", {
              get() {
                t = !0
              }
            }))
          } catch (e) {
          }
          return t
        })(), la = (() => {
          try {
            return new CSSStyleSheet, "function" == typeof (new CSSStyleSheet).replaceSync
          } catch (t) {
          }
          return !1
        })(), ca = [], da = [], ua = (t, e) => o => {
          t.push(o), Yi || (Yi = !0, e && 4 & aa.$flags$ ? fa(ha) : aa.raf(ha))
        }, pa = t => {
          for (let o = 0; o < t.length; o++) try {
            t[o](performance.now())
          } catch (e) {
            ta(e)
          }
          t.length = 0
        }, ha = () => {
          pa(ca), pa(da), (Yi = ca.length > 0) && aa.raf(ha)
        }, fa = t => {
          return Promise.resolve(e).then(t);
          var e
        }, ma = t("y", ua(ca, !1)), ga = t("B", ua(da, !0)), ba = t("A", ((t, e) => {
          t.componentOnReady ? t.componentOnReady().then((t => e(t))) : ka((() => e(t)))
        })), va = t => void 0 !== t.componentOnReady, ya = (t, e = []) => {
          const o = {};
          return e.forEach((e => {
            t.hasAttribute(e) && (null !== t.getAttribute(e) && (o[e] = t.getAttribute(e)), t.removeAttribute(e))
          })), o
        },
        xa = ["role", "aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-braillelabel", "aria-brailleroledescription", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colindextext", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-description", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowindextext", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext"],
        wa = (t, e) => {
          let o = xa;
          return e && e.length > 0 && (o = o.filter((t => !e.includes(t)))), ya(t, o)
        }, ka = (t("D", ((t, e, o, n) => {
          var i;
          if ("undefined" != typeof window) {
            const r = window, a = null === (i = null == r ? void 0 : r.Ionic) || void 0 === i ? void 0 : i.config;
            if (a) {
              const i = a.get("_ael");
              if (i) return i(t, e, o, n);
              if (a._ael) return a._ael(t, e, o, n)
            }
          }
          return t.addEventListener(e, o, n)
        })), t("E", ((t, e, o, n) => {
          var i;
          if ("undefined" != typeof window) {
            const r = window, a = null === (i = null == r ? void 0 : r.Ionic) || void 0 === i ? void 0 : i.config;
            if (a) {
              const i = a.get("_rel");
              if (i) return i(t, e, o, n);
              if (a._rel) return a._rel(t, e, o, n)
            }
          }
          return t.removeEventListener(e, o, n)
        })), t("r", (t => "function" == typeof __zone_symbol__requestAnimationFrame ? __zone_symbol__requestAnimationFrame(t) : "function" == typeof requestAnimationFrame ? requestAnimationFrame(t) : setTimeout(t)))),
        $a = t("m", ((t, e, o) => Math.max(t, Math.min(e, o)))), _a = (t, e) => {
          if (!t) {
            const t = "ASSERT: " + e;
            throw console.error(t), new Error(t)
          }
        }, Ca = (t("v", (t => t.timeStamp || Date.now())), t("x", (t => {
          if (t) {
            const e = t.changedTouches;
            if (e && e.length > 0) {
              const t = e[0];
              return { x: t.clientX, y: t.clientY }
            }
            if (void 0 !== t.pageX) return { x: t.pageX, y: t.pageY }
          }
          return { x: 0, y: 0 }
        })), (t, e) => {
          if (null != t || (t = {}), null != e || (e = {}), t === e) return !0;
          const o = Object.keys(t);
          if (o.length !== Object.keys(e).length) return !1;
          for (const n of o) {
            if (!(n in e)) return !1;
            if (t[n] !== e[n]) return !1
          }
          return !0
        });

      /*!
             * (C) Ionic http://ionicframework.com - MIT License
             */
      class Sa {
        constructor() {
          this.m = new Map
        }

        reset(t) {
          this.m = new Map(Object.entries(t))
        }

        get(t, e) {
          const o = this.m.get(t);
          return void 0 !== o ? o : e
        }

        getBoolean(t, e = !1) {
          const o = this.m.get(t);
          return void 0 === o ? e : "string" == typeof o ? "true" === o : !!o
        }

        getNumber(t, e) {
          const o = parseFloat(this.m.get(t));
          return isNaN(o) ? void 0 !== e ? e : NaN : o
        }

        set(t, e) {
          this.m.set(t, e)
        }
      }

      const Ea = new Sa, Ta = (t, e) => t.substr(0, e.length) === e, za = "ionic:", Aa = "ionic-persist-config",
        Ra = (t, e) => ("string" == typeof t && (e = t, t = void 0), (t => Ia(t))(t).includes(e)),
        Ia = (t = window) => {
          if (void 0 === t) return [];
          t.Ionic = t.Ionic || {};
          let e = t.Ionic.platforms;
          return null == e && (e = t.Ionic.platforms = Oa(t), e.forEach((e => t.document.documentElement.classList.add(`plt-${e}`)))), e
        }, Oa = t => {
          const e = Ea.get("platform");
          return Object.keys(Ha).filter((o => {
            const n = null == e ? void 0 : e[o];
            return "function" == typeof n ? n(t) : Ha[o](t)
          }))
        }, La = t => !!Va(t, /iPad/i) || !(!Va(t, /Macintosh/i) || !ja(t)), Pa = t => Va(t, /android|sink/i),
        ja = t => Fa(t, "(any-pointer:coarse)"), Ba = t => Ma(t) || Na(t),
        Ma = t => !!(t.cordova || t.phonegap || t.PhoneGap), Na = t => {
          const e = t.Capacitor;
          return !!(null == e ? void 0 : e.isNative)
        }, Va = (t, e) => e.test(t.navigator.userAgent), Fa = (t, e) => {
          var o;
          return null === (o = t.matchMedia) || void 0 === o ? void 0 : o.call(t, e).matches
        }, Ha = {
          ipad: La,
          iphone: t => Va(t, /iPhone/i),
          ios: t => Va(t, /iPhone|iPod/i) || La(t),
          android: Pa,
          phablet: t => {
            const e = t.innerWidth, o = t.innerHeight, n = Math.min(e, o), i = Math.max(e, o);
            return n > 390 && n < 520 && i > 620 && i < 800
          },
          tablet: t => {
            const e = t.innerWidth, o = t.innerHeight, n = Math.min(e, o), i = Math.max(e, o);
            return La(t) || (t => Pa(t) && !Va(t, /mobile/i))(t) || n > 460 && n < 820 && i > 780 && i < 1400
          },
          cordova: Ma,
          capacitor: Na,
          electron: t => Va(t, /electron/i),
          pwa: t => {
            var e;
            return !(!(null === (e = t.matchMedia) || void 0 === e ? void 0 : e.call(t, "(display-mode: standalone)").matches) && !t.navigator.standalone)
          },
          mobile: ja,
          mobileweb: t => ja(t) && !Ba(t),
          desktop: t => !ja(t),
          hybrid: Ba
        };
      let Da;
      const Wa = t => t && (t => Zr(t).$modeName$)(t) || Da, qa = (t = {}) => {
        if ("undefined" == typeof window) return;
        const e = window.document, o = window, n = o.Ionic = o.Ionic || {}, i = {};
        var r;
        t._ael && (i.ael = t._ael), t._rel && (i.rel = t._rel), t._ce && (i.ce = t._ce), r = i, Object.assign(aa, r);
        const a = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (t => {
          try {
            const e = t.sessionStorage.getItem(Aa);
            return null !== e ? JSON.parse(e) : {}
          } catch (e) {
            return {}
          }
        })(o)), { persistConfig: !1 }), n.config), (t => {
          const e = {};
          return t.location.search.slice(1).split("&").map((t => t.split("="))).map((([t, e]) => [decodeURIComponent(t), decodeURIComponent(e)])).filter((([t]) => Ta(t, za))).map((([t, e]) => [t.slice(za.length), e])).forEach((([t, o]) => {
            e[t] = o
          })), e
        })(o)), t);
        Ea.reset(a), Ea.getBoolean("persistConfig") && ((t, e) => {
          try {
            t.sessionStorage.setItem(Aa, JSON.stringify(e))
          } catch (o) {
            return
          }
        })(o, a), Ia(o), n.config = Ea, n.mode = Da = Ea.get("mode", e.documentElement.getAttribute("mode") || (Ra(o, "ios") ? "ios" : "md")), Ea.set("mode", Da), e.documentElement.setAttribute("mode", Da), e.documentElement.classList.add(Da), Ea.getBoolean("_testing") && Ea.set("animated", !1);
        const s = t => {
          var e;
          return null === (e = t.tagName) || void 0 === e ? void 0 : e.startsWith("ION-")
        }, l = t => ["ios", "md"].includes(t);
        var c;
        c = t => {
          for (; t;) {
            const e = t.mode || t.getAttribute("mode");
            if (e) {
              if (l(e)) return e;
              s(t) && console.warn('Invalid ionic mode: "' + e + '", expected: "ios" or "md"')
            }
            t = t.parentElement
          }
          return Da
        }, oa.push(c)
      };
      /*!
             * (C) Ionic http://ionicframework.com - MIT License
             */
      let Ua;
      const Ga = (t, e) => {
          const o = (() => {
            if ("undefined" == typeof window) return new Map;
            if (!Ua) {
              const t = window;
              t.Ionicons = t.Ionicons || {}, Ua = t.Ionicons.map = t.Ionicons.map || new Map
            }
            return Ua
          })().get(t);
          if (o) return o;
          try {
            return Zi(`svg/${t}.svg`)
          } catch (n) {
            console.warn(`[Ionicons Warning]: Could not load icon with name "${t}". Ensure that the icon is registered using addIcons or that the icon SVG data is passed directly to the icon component.`, e)
          }
        },
        Xa = (t, e, o, n, i) => (o = "ios" === (o && Qa(o)) ? "ios" : "md", n && "ios" === o ? t = Qa(n) : i && "md" === o ? t = Qa(i) : (t || !e || Ka(e) || (t = e), Za(t) && (t = Qa(t))), Za(t) && "" !== t.trim() ? "" !== t.replace(/[a-z]|-|\d/gi, "") ? null : t : null),
        Ya = t => Za(t) && (t = t.trim(), Ka(t)) ? t : null, Ka = t => t.length > 0 && /(\/|\.)/.test(t),
        Za = t => "string" == typeof t, Qa = t => t.toLowerCase(), Ja = t => {
          if (1 === t.nodeType) {
            if ("script" === t.nodeName.toLowerCase()) return !1;
            for (let e = 0; e < t.attributes.length; e++) {
              const o = t.attributes[e].name;
              if (Za(o) && 0 === o.toLowerCase().indexOf("on")) return !1
            }
            for (let e = 0; e < t.childNodes.length; e++) if (!Ja(t.childNodes[e])) return !1
          }
          return !0
        }, ts = new Map, es = new Map;
      let os;
      const ns = (t, e) => {
          let o = es.get(t);
          if (!o) {
            if ("undefined" == typeof fetch || "undefined" == typeof document) return ts.set(t, ""), Promise.resolve();
            if ((t => t.startsWith("data:image/svg+xml"))(t) && (t => -1 !== t.indexOf(";utf8,"))(t)) {
              os || (os = new DOMParser);
              const e = os.parseFromString(t, "text/html").querySelector("svg");
              return e && ts.set(t, e.outerHTML), Promise.resolve()
            }
            o = fetch(t).then((o => {
              if (o.ok) return o.text().then((o => {
                o && !1 !== e && (o = (t => {
                  const e = document.createElement("div");
                  e.innerHTML = t;
                  for (let n = e.childNodes.length - 1; n >= 0; n--) "svg" !== e.childNodes[n].nodeName.toLowerCase() && e.removeChild(e.childNodes[n]);
                  const o = e.firstElementChild;
                  if (o && "svg" === o.nodeName.toLowerCase()) {
                    const t = o.getAttribute("class") || "";
                    if (o.setAttribute("class", (t + " s-ion-icon").trim()), Ja(o)) return e.innerHTML
                  }
                  return ""
                })(o)), ts.set(t, o || "")
              }));
              ts.set(t, "")
            })), es.set(t, o)
          }
          return o
        }, is = qr(class extends ra {
          constructor() {
            super(), this.__registerHost(), this.__attachShadow(), this.iconName = null, this.inheritedAttributes = {}, this.didLoadIcon = !1, this.svgContent = void 0, this.isVisible = !1, this.mode = rs(), this.color = void 0, this.ios = void 0, this.md = void 0, this.flipRtl = void 0, this.name = void 0, this.src = void 0, this.icon = void 0, this.size = void 0, this.lazy = !1, this.sanitize = !0
          }

          static get assetsDirs() {
            return ["svg"]
          }

          static get watchers() {
            return { name: ["loadIcon"], src: ["loadIcon"], icon: ["loadIcon"], ios: ["loadIcon"], md: ["loadIcon"] }
          }

          static get style() {
            return ":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}@supports (background: -webkit-named-image(i)){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}@supports not selector(:dir(rtl)) and selector(:host-context([dir='rtl'])){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}:host(.flip-rtl):host-context([dir='rtl']) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}@supports selector(:dir(rtl)){:host(.flip-rtl:dir(rtl)) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.flip-rtl:dir(ltr)) .icon-inner{-webkit-transform:scaleX(1);transform:scaleX(1)}}:host(.icon-small){font-size:1.125rem !important}:host(.icon-large){font-size:2rem !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}"
          }

          get el() {
            return this
          }

          componentWillLoad() {
            this.inheritedAttributes = ((t, e = []) => {
              const o = {};
              return e.forEach((e => {
                t.hasAttribute(e) && (null !== t.getAttribute(e) && (o[e] = t.getAttribute(e)), t.removeAttribute(e))
              })), o
            })(this.el, ["aria-label"])
          }

          connectedCallback() {
            this.waitUntilVisible(this.el, "50px", (() => {
              this.isVisible = !0, this.loadIcon()
            }))
          }

          componentDidLoad() {
            this.didLoadIcon || this.loadIcon()
          }

          disconnectedCallback() {
            this.io && (this.io.disconnect(), this.io = void 0)
          }

          waitUntilVisible(t, e, o) {
            if (this.lazy && "undefined" != typeof window && window.IntersectionObserver) {
              const n = this.io = new window.IntersectionObserver((t => {
                t[0].isIntersecting && (n.disconnect(), this.io = void 0, o())
              }), { rootMargin: e });
              n.observe(t)
            } else o()
          }

          loadIcon() {
            if (this.isVisible) {
              const t = (t => {
                let e = Ya(t.src);
                if (e) return e;
                if (e = Xa(t.name, t.icon, t.mode, t.ios, t.md), e) return Ga(e, t);
                if (t.icon) {
                  if (e = Ya(t.icon), e) return e;
                  if (e = Ya(t.icon[t.mode]), e) return e
                }
                return null
              })(this);
              t && (ts.has(t) ? this.svgContent = ts.get(t) : ns(t, this.sanitize).then((() => this.svgContent = ts.get(t))), this.didLoadIcon = !0)
            }
            this.iconName = Xa(this.name, this.icon, this.mode, this.ios, this.md)
          }

          render() {
            const { flipRtl: t, iconName: e, inheritedAttributes: o, el: n } = this, i = this.mode || "md",
              r = !!e && (e.includes("arrow") || e.includes("chevron")) && !1 !== t, a = t || r;
            return er(nr, Object.assign({
              role: "img",
              class: Object.assign(Object.assign({ [i]: !0 }, as(this.color)), {
                [`icon-${this.size}`]: !!this.size,
                "flip-rtl": a,
                "icon-rtl": a && (s = n, s && "" !== s.dir ? "rtl" === s.dir.toLowerCase() : "rtl" === (null === document || void 0 === document ? void 0 : document.dir.toLowerCase()))
              })
            }, o), this.svgContent ? er("div", {
              class: "icon-inner",
              innerHTML: this.svgContent
            }) : er("div", { class: "icon-inner" }));
            var s
          }
        }, [1, "ion-icon", {
          mode: [1025],
          color: [1],
          ios: [1],
          md: [1],
          flipRtl: [4, "flip-rtl"],
          name: [513],
          src: [1],
          icon: [8],
          size: [1],
          lazy: [4],
          sanitize: [4],
          svgContent: [32],
          isVisible: [32]
        }, void 0, { name: ["loadIcon"], src: ["loadIcon"], icon: ["loadIcon"], ios: ["loadIcon"], md: ["loadIcon"] }]),
        rs = () => "undefined" != typeof document && document.documentElement.getAttribute("mode") || "md",
        as = t => t ? { "ion-color": !0, [`ion-color-${t}`]: !0 } : null, ss = (t, e) => null !== e.closest(t),
        ls = (t, e) => "string" == typeof t && t.length > 0 ? Object.assign({
          "ion-color": !0,
          [`ion-color-${t}`]: !0
        }, e) : e, cs = /^[a-z][a-z0-9+\-.]*:/, ds = qr(class extends ra {
          constructor() {
            super(), this.__registerHost(), this.__attachShadow(), this.type = "bounded"
          }

          static get style() {
            return ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1));-webkit-animation:150ms fadeOutAnimation forwards;animation:150ms fadeOutAnimation forwards}@-webkit-keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@-webkit-keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@-webkit-keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}@keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}"
          }

          get unbounded() {
            return "unbounded" === this.type
          }

          get el() {
            return this
          }

          async addRipple(t, e) {
            return new Promise((o => {
              ma((() => {
                const n = this.el.getBoundingClientRect(), i = n.width, r = n.height, a = Math.sqrt(i * i + r * r),
                  s = Math.max(r, i), l = this.unbounded ? s : a + ps, c = Math.floor(s * hs), d = l / c;
                let u = t - n.left, p = e - n.top;
                this.unbounded && (u = .5 * i, p = .5 * r);
                const h = u - .5 * c, f = p - .5 * c, m = .5 * i - u, g = .5 * r - p;
                ga((() => {
                  const t = document.createElement("div");
                  t.classList.add("ripple-effect");
                  const e = t.style;
                  e.top = f + "px", e.left = h + "px", e.width = e.height = c + "px", e.setProperty("--final-scale", `${d}`), e.setProperty("--translate-end", `${m}px, ${g}px`), (this.el.shadowRoot || this.el).appendChild(t), setTimeout((() => {
                    o((() => {
                      us(t)
                    }))
                  }), 325)
                }))
              }))
            }))
          }

          render() {
            const t = Wa(this);
            return er(nr, {
              key: "9f2578664e5ff8a0a7e27cd90b2339bd430e72b8",
              role: "presentation",
              class: { [t]: !0, unbounded: this.unbounded }
            })
          }
        }, [1, "ion-ripple-effect", { type: [1], addRipple: [64] }]), us = t => {
          t.classList.add("fade-out"), setTimeout((() => {
            t.remove()
          }), 200)
        }, ps = 10, hs = .5;

      function fs() {
        "undefined" != typeof customElements && ["ion-ripple-effect"].forEach((t => {
          "ion-ripple-effect" === t && (customElements.get(t) || customElements.define(t, ds))
        }))
      }

      /*!
             * (C) Ionic http://ionicframework.com - MIT License
             */
      const ms = "undefined" != typeof window ? window : void 0;
      ms && ms.CSS && ms.CSS.supports && ms.CSS.supports("--a: 0");
      /*!
             * (C) Ionic http://ionicframework.com - MIT License
             */
      const gs = t("l", (t => t && "" !== t.dir ? "rtl" === t.dir.toLowerCase() : "rtl" === (null === document || void 0 === document ? void 0 : document.dir.toLowerCase()))),
        bs = qr(class extends ra {
          constructor() {
            super(), this.__registerHost(), this.__attachShadow(), this.ionScrollStart = sr(this, "ionScrollStart", 7), this.ionScroll = sr(this, "ionScroll", 7), this.ionScrollEnd = sr(this, "ionScrollEnd", 7), this.watchDog = null, this.isScrolling = !1, this.lastScroll = 0, this.queued = !1, this.cTop = -1, this.cBottom = -1, this.isMainContent = !0, this.resizeTimeout = null, this.tabsElement = null, this.detail = {
              scrollTop: 0,
              scrollLeft: 0,
              type: "scroll",
              event: void 0,
              startX: 0,
              startY: 0,
              startTime: 0,
              currentX: 0,
              currentY: 0,
              velocityX: 0,
              velocityY: 0,
              deltaX: 0,
              deltaY: 0,
              currentTime: 0,
              data: void 0,
              isScrolling: !0
            }, this.color = void 0, this.fullscreen = !1, this.forceOverscroll = void 0, this.scrollX = !1, this.scrollY = !0, this.scrollEvents = !1
          }

          static get style() {
            return ':host{--background:var(--ion-background-color, #fff);--color:var(--ion-text-color, #000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;-ms-flex:1;flex:1;width:100%;height:100%;margin:0 !important;padding:0 !important;font-family:var(--ion-font-family, inherit);contain:size style}:host(.ion-color) .inner-scroll{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.outer-content){--background:var(--ion-color-step-50, #f2f2f2)}#background-content{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);position:absolute;background:var(--background)}.inner-scroll{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom));position:absolute;color:var(--color);-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;-ms-touch-action:pan-x pan-y pinch-zoom;touch-action:pan-x pan-y pinch-zoom}.scroll-y,.scroll-x{-webkit-overflow-scrolling:touch;z-index:0;will-change:scroll-position}.scroll-y{overflow-y:var(--overflow);overscroll-behavior-y:contain}.scroll-x{overflow-x:var(--overflow);overscroll-behavior-x:contain}.overscroll::before,.overscroll::after{position:absolute;width:1px;height:1px;content:""}.overscroll::before{bottom:-1px}.overscroll::after{top:-1px}:host(.content-sizing){display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-height:0;contain:none}:host(.content-sizing) .inner-scroll{position:relative;top:0;bottom:0;margin-top:calc(var(--offset-top) * -1);margin-bottom:calc(var(--offset-bottom) * -1)}.transition-effect{display:none;position:absolute;width:100%;height:100vh;opacity:0;pointer-events:none}:host(.content-ltr) .transition-effect{left:-100%;}:host(.content-rtl) .transition-effect{right:-100%;}.transition-cover{position:absolute;right:0;width:100%;height:100%;background:black;opacity:0.1}.transition-shadow{display:block;position:absolute;width:100%;height:100%;-webkit-box-shadow:inset -9px 0 9px 0 rgba(0, 0, 100, 0.03);box-shadow:inset -9px 0 9px 0 rgba(0, 0, 100, 0.03)}:host(.content-ltr) .transition-shadow{right:0;}:host(.content-rtl) .transition-shadow{left:0;-webkit-transform:scaleX(-1);transform:scaleX(-1)}::slotted([slot=fixed]){position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0)}'
          }

          get el() {
            return this
          }

          connectedCallback() {
            if (this.isMainContent = null === this.el.closest("ion-menu, ion-popover, ion-modal"), va(this.el)) {
              const t = this.tabsElement = this.el.closest("ion-tabs");
              null !== t && (this.tabsLoadCallback = () => this.resize(), t.addEventListener("ionTabBarLoaded", this.tabsLoadCallback))
            }
          }

          disconnectedCallback() {
            if (this.onScrollEnd(), va(this.el)) {
              const { tabsElement: t, tabsLoadCallback: e } = this;
              null !== t && void 0 !== e && t.removeEventListener("ionTabBarLoaded", e), this.tabsElement = null, this.tabsLoadCallback = void 0
            }
          }

          onResize() {
            this.resizeTimeout && (clearTimeout(this.resizeTimeout), this.resizeTimeout = null), this.resizeTimeout = setTimeout((() => {
              null !== this.el.offsetParent && this.resize()
            }), 100)
          }

          shouldForceOverscroll() {
            const { forceOverscroll: t } = this, e = Wa(this);
            return void 0 === t ? "ios" === e && Ra("ios") : t
          }

          resize() {
            this.fullscreen ? ma((() => this.readDimensions())) : 0 === this.cTop && 0 === this.cBottom || (this.cTop = this.cBottom = 0, Nr(this))
          }

          readDimensions() {
            const t = vs(this.el), e = Math.max(this.el.offsetTop, 0),
              o = Math.max(t.offsetHeight - e - this.el.offsetHeight, 0);
            (e !== this.cTop || o !== this.cBottom) && (this.cTop = e, this.cBottom = o, Nr(this))
          }

          onScroll(t) {
            const e = Date.now(), o = !this.isScrolling;
            this.lastScroll = e, o && this.onScrollStart(), !this.queued && this.scrollEvents && (this.queued = !0, ma((e => {
              this.queued = !1, this.detail.event = t, ys(this.detail, this.scrollEl, e, o), this.ionScroll.emit(this.detail)
            })))
          }

          async getScrollElement() {
            return this.scrollEl || await new Promise((t => ba(this.el, t))), Promise.resolve(this.scrollEl)
          }

          async getBackgroundElement() {
            return this.backgroundContentEl || await new Promise((t => ba(this.el, t))), Promise.resolve(this.backgroundContentEl)
          }

          scrollToTop(t = 0) {
            return this.scrollToPoint(void 0, 0, t)
          }

          async scrollToBottom(t = 0) {
            const e = await this.getScrollElement(), o = e.scrollHeight - e.clientHeight;
            return this.scrollToPoint(void 0, o, t)
          }

          async scrollByPoint(t, e, o) {
            const n = await this.getScrollElement();
            return this.scrollToPoint(t + n.scrollLeft, e + n.scrollTop, o)
          }

          async scrollToPoint(t, e, o = 0) {
            const n = await this.getScrollElement();
            if (o < 32) return null != e && (n.scrollTop = e), void (null != t && (n.scrollLeft = t));
            let i, r = 0;
            const a = new Promise((t => i = t)), s = n.scrollTop, l = n.scrollLeft, c = null != e ? e - s : 0,
              d = null != t ? t - l : 0, u = t => {
                const e = Math.min(1, (t - r) / o) - 1, a = Math.pow(e, 3) + 1;
                0 !== c && (n.scrollTop = Math.floor(a * c + s)), 0 !== d && (n.scrollLeft = Math.floor(a * d + l)), a < 1 ? requestAnimationFrame(u) : i()
              };
            return requestAnimationFrame((t => {
              r = t, u(t)
            })), a
          }

          onScrollStart() {
            this.isScrolling = !0, this.ionScrollStart.emit({ isScrolling: !0 }), this.watchDog && clearInterval(this.watchDog), this.watchDog = setInterval((() => {
              this.lastScroll < Date.now() - 120 && this.onScrollEnd()
            }), 100)
          }

          onScrollEnd() {
            this.watchDog && clearInterval(this.watchDog), this.watchDog = null, this.isScrolling && (this.isScrolling = !1, this.ionScrollEnd.emit({ isScrolling: !1 }))
          }

          render() {
            const { isMainContent: t, scrollX: e, scrollY: o, el: n } = this, i = gs(n) ? "rtl" : "ltr", r = Wa(this),
              a = this.shouldForceOverscroll(), s = "ios" === r, l = t ? "main" : "div";
            return this.resize(), er(nr, {
              key: "65d85e1f7f85876a76eec79addc4bd9f697a5d84",
              class: ls(this.color, {
                [r]: !0,
                "content-sizing": ss("ion-popover", this.el),
                overscroll: a,
                [`content-${i}`]: !0
              }),
              style: { "--offset-top": `${this.cTop}px`, "--offset-bottom": `${this.cBottom}px` }
            }, er("div", {
              key: "e2ac474a62cbc864772c497469100436f41289ff",
              ref: t => this.backgroundContentEl = t,
              id: "background-content",
              part: "background"
            }), er(l, {
              key: "567a4bc2bcb13adfd987b088f95ac4b20b789f2c",
              class: { "inner-scroll": !0, "scroll-x": e, "scroll-y": o, overscroll: (e || o) && a },
              ref: t => this.scrollEl = t,
              onScroll: this.scrollEvents ? t => this.onScroll(t) : void 0,
              part: "scroll"
            }, er("slot", { key: "13909f87dd9f49bf1664ad95038499da376b9480" })), s ? er("div", { class: "transition-effect" }, er("div", { class: "transition-cover" }), er("div", { class: "transition-shadow" })) : null, er("slot", {
              key: "05b56c139e203cfd1e3dd08054e99328e97e9243",
              name: "fixed"
            }))
          }
        }, [1, "ion-content", {
          color: [513],
          fullscreen: [4],
          forceOverscroll: [1028, "force-overscroll"],
          scrollX: [4, "scroll-x"],
          scrollY: [4, "scroll-y"],
          scrollEvents: [4, "scroll-events"],
          getScrollElement: [64],
          getBackgroundElement: [64],
          scrollToTop: [64],
          scrollToBottom: [64],
          scrollByPoint: [64],
          scrollToPoint: [64]
        }, [[9, "resize", "onResize"]]]), vs = t => {
          const e = t.closest("ion-tabs");
          if (e) return e;
          const o = t.closest("ion-app, ion-page, .ion-page, page-inner, .popover-content");
          return o || (t => {
            var e;
            return t.parentElement ? t.parentElement : (null === (e = t.parentNode) || void 0 === e ? void 0 : e.host) ? t.parentNode.host : null
          })(t)
        }, ys = (t, e, o, n) => {
          const i = t.currentX, r = t.currentY, a = t.currentTime, s = e.scrollLeft, l = e.scrollTop, c = o - a;
          if (n && (t.startTime = o, t.startX = s, t.startY = l, t.velocityX = t.velocityY = 0), t.currentTime = o, t.currentX = t.scrollLeft = s, t.currentY = t.scrollTop = l, t.deltaX = s - t.startX, t.deltaY = l - t.startY, c > 0 && c < 100) {
            const e = (s - i) / c, o = (l - r) / c;
            t.velocityX = .7 * e + .3 * t.velocityX, t.velocityY = .7 * o + .3 * t.velocityY
          }
        }, xs = function () {
          "undefined" != typeof customElements && ["ion-content"].forEach((t => {
            "ion-content" === t && (customElements.get(t) || customElements.define(t, bs))
          }))
        }, ws = qr(class extends ra {
          constructor() {
            super(), this.__registerHost(), this.ionColor = sr(this, "ionColor", 7), this.ionStyle = sr(this, "ionStyle", 7), this.inRange = !1, this.color = void 0, this.position = void 0, this.noAnimate = !1
          }

          static get watchers() {
            return { color: ["colorChanged"], position: ["positionChanged"] }
          }

          static get style() {
            return {
              ios: ".item.sc-ion-label-ios-h,.item .sc-ion-label-ios-h{--color:initial;display:block;color:var(--color);font-family:var(--ion-font-family, inherit);font-size:inherit;text-overflow:ellipsis;-webkit-box-sizing:border-box;box-sizing:border-box}.item-legacy.sc-ion-label-ios-h,.item-legacy .sc-ion-label-ios-h{white-space:nowrap;overflow:hidden}.ion-color.sc-ion-label-ios-h{color:var(--ion-color-base)}.ion-text-nowrap.sc-ion-label-ios-h{overflow:hidden}.item-interactive-disabled.sc-ion-label-ios-h:not(.item-multiple-inputs),.item-interactive-disabled:not(.item-multiple-inputs) .sc-ion-label-ios-h{cursor:default;opacity:0.3;pointer-events:none}.item-input.sc-ion-label-ios-h,.item-input .sc-ion-label-ios-h{-ms-flex:initial;flex:initial;max-width:200px;pointer-events:none}.item-textarea.sc-ion-label-ios-h,.item-textarea .sc-ion-label-ios-h{-ms-flex-item-align:baseline;align-self:baseline}.item-skeleton-text.sc-ion-label-ios-h,.item-skeleton-text .sc-ion-label-ios-h{overflow:hidden}.label-fixed.sc-ion-label-ios-h{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.label-stacked.sc-ion-label-ios-h,.label-floating.sc-ion-label-ios-h{margin-bottom:0;-ms-flex-item-align:stretch;align-self:stretch;width:auto;max-width:100%}.label-no-animate.label-floating.sc-ion-label-ios-h{-webkit-transition:none;transition:none}.sc-ion-label-ios-s h1,.sc-ion-label-ios-s h2,.sc-ion-label-ios-s h3,.sc-ion-label-ios-s h4,.sc-ion-label-ios-s h5,.sc-ion-label-ios-s h6{text-overflow:inherit;overflow:inherit}.ion-text-wrap.sc-ion-label-ios-h{font-size:0.875rem;line-height:1.5}.label-stacked.sc-ion-label-ios-h{margin-bottom:4px;font-size:0.875rem}.label-floating.sc-ion-label-ios-h{margin-bottom:0;-webkit-transform:translate(0, 29px);transform:translate(0, 29px);-webkit-transform-origin:left top;transform-origin:left top;-webkit-transition:-webkit-transform 150ms ease-in-out;transition:-webkit-transform 150ms ease-in-out;transition:transform 150ms ease-in-out;transition:transform 150ms ease-in-out, -webkit-transform 150ms ease-in-out}[dir=rtl].sc-ion-label-ios-h -no-combinator.label-floating.sc-ion-label-ios-h,[dir=rtl] .sc-ion-label-ios-h -no-combinator.label-floating.sc-ion-label-ios-h,[dir=rtl].label-floating.sc-ion-label-ios-h,[dir=rtl] .label-floating.sc-ion-label-ios-h{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){.label-floating.sc-ion-label-ios-h:dir(rtl){-webkit-transform-origin:right top;transform-origin:right top}}.item-textarea.label-floating.sc-ion-label-ios-h,.item-textarea .label-floating.sc-ion-label-ios-h{-webkit-transform:translate(0, 28px);transform:translate(0, 28px)}.item-has-focus.label-floating.sc-ion-label-ios-h,.item-has-focus .label-floating.sc-ion-label-ios-h,.item-has-placeholder.sc-ion-label-ios-h:not(.item-input).label-floating,.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-ios-h,.item-has-value.label-floating.sc-ion-label-ios-h,.item-has-value .label-floating.sc-ion-label-ios-h{-webkit-transform:scale(0.82);transform:scale(0.82)}.sc-ion-label-ios-s h1{margin-left:0;margin-right:0;margin-top:3px;margin-bottom:2px;font-size:1.375rem;font-weight:normal}.sc-ion-label-ios-s h2{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:1.0625rem;font-weight:normal}.sc-ion-label-ios-s h3,.sc-ion-label-ios-s h4,.sc-ion-label-ios-s h5,.sc-ion-label-ios-s h6{margin-left:0;margin-right:0;margin-top:0;margin-bottom:3px;font-size:0.875rem;font-weight:normal;line-height:normal}.sc-ion-label-ios-s p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:0.875rem;line-height:normal;text-overflow:inherit;overflow:inherit}.sc-ion-label-ios-s>p{color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.4)}.sc-ion-label-ios-h.in-item-color.sc-ion-label-ios-s>p{color:inherit}.sc-ion-label-ios-s h2:last-child,.sc-ion-label-ios-s h3:last-child,.sc-ion-label-ios-s h4:last-child,.sc-ion-label-ios-s h5:last-child,.sc-ion-label-ios-s h6:last-child,.sc-ion-label-ios-s p:last-child{margin-bottom:0}",
              md: '.item.sc-ion-label-md-h,.item .sc-ion-label-md-h{--color:initial;display:block;color:var(--color);font-family:var(--ion-font-family, inherit);font-size:inherit;text-overflow:ellipsis;-webkit-box-sizing:border-box;box-sizing:border-box}.item-legacy.sc-ion-label-md-h,.item-legacy .sc-ion-label-md-h{white-space:nowrap;overflow:hidden}.ion-color.sc-ion-label-md-h{color:var(--ion-color-base)}.ion-text-nowrap.sc-ion-label-md-h{overflow:hidden}.item-interactive-disabled.sc-ion-label-md-h:not(.item-multiple-inputs),.item-interactive-disabled:not(.item-multiple-inputs) .sc-ion-label-md-h{cursor:default;opacity:0.3;pointer-events:none}.item-input.sc-ion-label-md-h,.item-input .sc-ion-label-md-h{-ms-flex:initial;flex:initial;max-width:200px;pointer-events:none}.item-textarea.sc-ion-label-md-h,.item-textarea .sc-ion-label-md-h{-ms-flex-item-align:baseline;align-self:baseline}.item-skeleton-text.sc-ion-label-md-h,.item-skeleton-text .sc-ion-label-md-h{overflow:hidden}.label-fixed.sc-ion-label-md-h{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.label-stacked.sc-ion-label-md-h,.label-floating.sc-ion-label-md-h{margin-bottom:0;-ms-flex-item-align:stretch;align-self:stretch;width:auto;max-width:100%}.label-no-animate.label-floating.sc-ion-label-md-h{-webkit-transition:none;transition:none}.sc-ion-label-md-s h1,.sc-ion-label-md-s h2,.sc-ion-label-md-s h3,.sc-ion-label-md-s h4,.sc-ion-label-md-s h5,.sc-ion-label-md-s h6{text-overflow:inherit;overflow:inherit}.ion-text-wrap.sc-ion-label-md-h{line-height:1.5}.label-stacked.sc-ion-label-md-h,.label-floating.sc-ion-label-md-h{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-transform-origin:top left;transform-origin:top left}.label-stacked.label-rtl.sc-ion-label-md-h,.label-floating.label-rtl.sc-ion-label-md-h{-webkit-transform-origin:top right;transform-origin:top right}.label-stacked.sc-ion-label-md-h{-webkit-transform:translateY(50%) scale(0.75);transform:translateY(50%) scale(0.75);-webkit-transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1)}.label-floating.sc-ion-label-md-h{-webkit-transform:translateY(96%);transform:translateY(96%);-webkit-transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1)}.ion-focused.label-floating.sc-ion-label-md-h,.ion-focused .label-floating.sc-ion-label-md-h,.item-has-focus.label-floating.sc-ion-label-md-h,.item-has-focus .label-floating.sc-ion-label-md-h,.item-has-placeholder.sc-ion-label-md-h:not(.item-input).label-floating,.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-md-h,.item-has-value.label-floating.sc-ion-label-md-h,.item-has-value .label-floating.sc-ion-label-md-h{-webkit-transform:translateY(50%) scale(0.75);transform:translateY(50%) scale(0.75)}.item-fill-outline.ion-focused.label-floating.sc-ion-label-md-h,.item-fill-outline.ion-focused .label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-focus.label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-focus .label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).label-floating,.item-fill-outline.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-value.label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-value .label-floating.sc-ion-label-md-h{-webkit-transform:translateY(-6px) scale(0.75);transform:translateY(-6px) scale(0.75);position:relative;max-width:-webkit-min-content;max-width:-moz-min-content;max-width:min-content;background-color:var(--ion-item-background, var(--ion-background-color, #fff));overflow:visible;z-index:3}.item-fill-outline.ion-focused.label-floating.sc-ion-label-md-h::before,.item-fill-outline.ion-focused .label-floating.sc-ion-label-md-h::before,.item-fill-outline.ion-focused.label-floating.sc-ion-label-md-h::after,.item-fill-outline.ion-focused .label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-focus.label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-focus .label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-focus.label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-focus .label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).label-floating::before,.item-fill-outline.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).label-floating::after,.item-fill-outline.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-value.label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-value .label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-value.label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-value .label-floating.sc-ion-label-md-h::after{position:absolute;width:4px;height:100%;background-color:var(--ion-item-background, var(--ion-background-color, #fff));content:""}.item-fill-outline.ion-focused.label-floating.sc-ion-label-md-h::before,.item-fill-outline.ion-focused .label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-focus.label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-focus .label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).label-floating::before,.item-fill-outline.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-value.label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-value .label-floating.sc-ion-label-md-h::before{left:calc(-1 * 4px)}.item-fill-outline.ion-focused.label-floating.sc-ion-label-md-h::after,.item-fill-outline.ion-focused .label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-focus.label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-focus .label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).label-floating::after,.item-fill-outline.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-value.label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-value .label-floating.sc-ion-label-md-h::after{right:calc(-1 * 4px)}.item-fill-outline.ion-focused.item-has-start-slot.label-floating.sc-ion-label-md-h,.item-fill-outline.ion-focused.item-has-start-slot .label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-focus.item-has-start-slot.label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-focus.item-has-start-slot .label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).item-has-start-slot.label-floating,.item-fill-outline.item-has-placeholder:not(.item-input).item-has-start-slot .label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-value.item-has-start-slot.label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-value.item-has-start-slot .label-floating.sc-ion-label-md-h{-webkit-transform:translateX(-32px) translateY(-6px) scale(0.75);transform:translateX(-32px) translateY(-6px) scale(0.75)}.item-fill-outline.ion-focused.item-has-start-slot.label-floating.label-rtl.sc-ion-label-md-h,.item-fill-outline.ion-focused.item-has-start-slot .label-floating.label-rtl.sc-ion-label-md-h,.item-fill-outline.item-has-focus.item-has-start-slot.label-floating.label-rtl.sc-ion-label-md-h,.item-fill-outline.item-has-focus.item-has-start-slot .label-floating.label-rtl.sc-ion-label-md-h,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).item-has-start-slot.label-floating.label-rtl,.item-fill-outline.item-has-placeholder:not(.item-input).item-has-start-slot .label-floating.label-rtl.sc-ion-label-md-h,.item-fill-outline.item-has-value.item-has-start-slot.label-floating.label-rtl.sc-ion-label-md-h,.item-fill-outline.item-has-value.item-has-start-slot .label-floating.label-rtl.sc-ion-label-md-h{-webkit-transform:translateX(calc(-1 * -32px)) translateY(-6px) scale(0.75);transform:translateX(calc(-1 * -32px)) translateY(-6px) scale(0.75)}.ion-focused.label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-focused .label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-focused.label-floating.sc-ion-label-md-h:not(.ion-color),.ion-focused .label-floating.sc-ion-label-md-h:not(.ion-color),.item-has-focus.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-has-focus .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-has-focus.label-floating.sc-ion-label-md-h:not(.ion-color),.item-has-focus .label-floating.sc-ion-label-md-h:not(.ion-color){color:var(--ion-color-primary, #3880ff)}.ion-focused.ion-color.label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-focused.ion-color .label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-focused.ion-color.label-floating.sc-ion-label-md-h:not(.ion-color),.ion-focused.ion-color .label-floating.sc-ion-label-md-h:not(.ion-color),.item-has-focus.ion-color.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-has-focus.ion-color .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-has-focus.ion-color.label-floating.sc-ion-label-md-h:not(.ion-color),.item-has-focus.ion-color .label-floating.sc-ion-label-md-h:not(.ion-color){color:var(--ion-color-contrast)}.item-fill-solid.ion-focused.ion-color.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.ion-focused.ion-color .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.ion-focused.ion-color.label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.ion-focused.ion-color .label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.ion-focused.ion-color.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.ion-focused.ion-color .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.ion-focused.ion-color.label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.ion-focused.ion-color .label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.item-has-focus.ion-color.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.item-has-focus.ion-color .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.item-has-focus.ion-color.label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.item-has-focus.ion-color .label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.item-has-focus.ion-color.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.item-has-focus.ion-color .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.item-has-focus.ion-color.label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.item-has-focus.ion-color .label-floating.sc-ion-label-md-h:not(.ion-color){color:var(--ion-color-base)}.ion-invalid.ion-touched.label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-invalid.ion-touched .label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-invalid.ion-touched.label-floating.sc-ion-label-md-h:not(.ion-color),.ion-invalid.ion-touched .label-floating.sc-ion-label-md-h:not(.ion-color){color:var(--highlight-color-invalid)}.sc-ion-label-md-s h1{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:1.5rem;font-weight:normal}.sc-ion-label-md-s h2{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:1rem;font-weight:normal}.sc-ion-label-md-s h3,.sc-ion-label-md-s h4,.sc-ion-label-md-s h5,.sc-ion-label-md-s h6{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:0.875rem;font-weight:normal;line-height:normal}.sc-ion-label-md-s p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:0.875rem;line-height:1.25rem;text-overflow:inherit;overflow:inherit}.sc-ion-label-md-s>p{color:var(--ion-color-step-600, #666666)}.sc-ion-label-md-h.in-item-color.sc-ion-label-md-s>p{color:inherit}'
            }
          }

          get el() {
            return this
          }

          componentWillLoad() {
            this.inRange = !!this.el.closest("ion-range"), this.noAnimate = "floating" === this.position, this.emitStyle(), this.emitColor()
          }

          componentDidLoad() {
            this.noAnimate && setTimeout((() => {
              this.noAnimate = !1
            }), 1e3)
          }

          colorChanged() {
            this.emitColor()
          }

          positionChanged() {
            this.emitStyle()
          }

          emitColor() {
            const { color: t } = this;
            this.ionColor.emit({ "item-label-color": void 0 !== t, [`ion-color-${t}`]: void 0 !== t })
          }

          emitStyle() {
            const { inRange: t, position: e } = this;
            t || this.ionStyle.emit({ label: !0, [`label-${e}`]: void 0 !== e })
          }

          render() {
            const t = this.position, e = Wa(this);
            return er(nr, {
              key: "c80cc1b4dcd56f614efc1e63ca80bca2f20a7151",
              class: ls(this.color, {
                [e]: !0,
                "in-item-color": ss("ion-item.ion-color", this.el),
                [`label-${t}`]: void 0 !== t,
                "label-no-animate": this.noAnimate,
                "label-rtl": "rtl" === document.dir
              })
            })
          }
        }, [34, "ion-label", { color: [513], position: [1], noAnimate: [32] }, void 0, {
          color: ["colorChanged"],
          position: ["positionChanged"]
        }]), ks = t("q", "undefined" != typeof window ? window : void 0),
        $s = t("s", "undefined" != typeof document ? document : void 0), _s = async (t, e, o, n, i, r) => {
          var a;
          if (t) return t.attachViewToDom(e, o, i, n);
          if (!(r || "string" == typeof o || o instanceof HTMLElement)) throw new Error("framework delegate is missing");
          const s = "string" == typeof o ? null === (a = e.ownerDocument) || void 0 === a ? void 0 : a.createElement(o) : o;
          return n && n.forEach((t => s.classList.add(t))), i && Object.assign(s, i), e.appendChild(s), await new Promise((t => ba(s, t))), s
        }, Cs = () => Ea.get("experimentalCloseWatcher", !1) && void 0 !== ks && "CloseWatcher" in ks,
        Ss = Object.freeze(Object.defineProperty({
          __proto__: null,
          MENU_BACK_BUTTON_PRIORITY: 99,
          OVERLAY_BACK_BUTTON_PRIORITY: 100,
          blockHardwareBackButton: () => {
            document.addEventListener("backbutton", (() => {
            }))
          },
          shouldUseCloseWatcher: Cs,
          startHardwareBackButton: () => {
            const t = document;
            let e = !1;
            const o = () => {
              if (e) return;
              let o = 0, n = [];
              const i = new CustomEvent("ionBackButton", {
                bubbles: !1, detail: {
                  register(t, e) {
                    n.push({ priority: t, handler: e, id: o++ })
                  }
                }
              });
              t.dispatchEvent(i);
              const r = () => {
                if (n.length > 0) {
                  let t = {
                    priority: Number.MIN_SAFE_INTEGER, handler: () => {
                    }, id: -1
                  };
                  n.forEach((e => {
                    e.priority >= t.priority && (t = e)
                  })), e = !0, n = n.filter((e => e.id !== t.id)), (async t => {
                    try {
                      if (null == t ? void 0 : t.handler) {
                        const e = t.handler(r);
                        null != e && await e
                      }
                    } catch (e) {
                      console.error(e)
                    }
                  })(t).then((() => e = !1))
                }
              };
              r()
            };
            if (Cs()) {
              let t;
              const e = () => {
                null == t || t.destroy(), t = new ks.CloseWatcher, t.onclose = () => {
                  o(), e()
                }
              };
              e()
            } else t.addEventListener("backbutton", o)
          }
        }, Symbol.toStringTag, { value: "Module" })), Es = "ionViewWillEnter", Ts = "ionViewDidEnter",
        zs = "ionViewWillLeave", As = "ionViewDidLeave", Rs = "ionViewWillUnload", Is = t => new Promise(((e, o) => {
          ga((() => {
            Os(t), Ls(t).then((o => {
              o.animation && o.animation.destroy(), Ps(t), e(o)
            }), (e => {
              Ps(t), o(e)
            }))
          }))
        })), Os = t => {
          const e = t.enteringEl, o = t.leavingEl;
          Gs(e, o, t.direction), t.showGoBack ? e.classList.add("can-go-back") : e.classList.remove("can-go-back"), Us(e, !1), e.style.setProperty("pointer-events", "none"), o && (Us(o, !1), o.style.setProperty("pointer-events", "none"))
        }, Ls = async t => {
          const e = await js(t);
          return e && Ki ? Bs(e, t) : Ms(t)
        }, Ps = t => {
          const e = t.enteringEl, o = t.leavingEl;
          e.classList.remove("ion-page-invisible"), e.style.removeProperty("pointer-events"), void 0 !== o && (o.classList.remove("ion-page-invisible"), o.style.removeProperty("pointer-events"))
        }, js = async t => {
          if (t.leavingEl && t.animated && 0 !== t.duration) return t.animationBuilder ? t.animationBuilder : "ios" === t.mode ? (await Ni((() => e.import("./ios.transition-legacy-DUjhvjfs.js")))).iosTransitionAnimation : (await Ni((() => e.import("./md.transition-legacy-WLF6qXlq.js")))).mdTransitionAnimation
        }, Bs = async (t, e) => {
          await Ns(e, !0);
          const o = t(e.baseEl, e);
          Hs(e.enteringEl, e.leavingEl);
          const n = await Fs(o, e);
          return e.progressCallback && e.progressCallback(void 0), n && Ds(e.enteringEl, e.leavingEl), {
            hasCompleted: n,
            animation: o
          }
        }, Ms = async t => {
          const e = t.enteringEl, o = t.leavingEl;
          return await Ns(t, !1), Hs(e, o), Ds(e, o), { hasCompleted: !0 }
        }, Ns = async (t, e) => {
          (void 0 !== t.deepWait ? t.deepWait : e) && await Promise.all([qs(t.enteringEl), qs(t.leavingEl)]), await Vs(t.viewIsReady, t.enteringEl)
        }, Vs = async (t, e) => {
          t && await t(e)
        }, Fs = (t, e) => {
          const o = e.progressCallback, n = new Promise((e => {
            t.onFinish((t => e(1 === t)))
          }));
          return o ? (t.progressStart(!0), o(t)) : t.play(), n
        }, Hs = (t, e) => {
          Ws(e, zs), Ws(t, Es)
        }, Ds = (t, e) => {
          Ws(t, Ts), Ws(e, As)
        }, Ws = (t, e) => {
          if (t) {
            const o = new CustomEvent(e, { bubbles: !1, cancelable: !1 });
            t.dispatchEvent(o)
          }
        }, qs = async t => {
          const e = t;
          if (e) {
            if (null != e.componentOnReady) {
              if (null != await e.componentOnReady()) return
            } else if (null != e.__registerHost) {
              const t = new Promise((t => ka(t)));
              return void (await t)
            }
            await Promise.all(Array.from(e.children).map(qs))
          }
        }, Us = (t, e) => {
          e ? (t.setAttribute("aria-hidden", "true"), t.classList.add("ion-page-hidden")) : (t.hidden = !1, t.removeAttribute("aria-hidden"), t.classList.remove("ion-page-hidden"))
        }, Gs = (t, e, o) => {
          void 0 !== t && (t.style.zIndex = "back" === o ? "99" : "101"), void 0 !== e && (e.style.zIndex = "100")
        }, Xs = (t("n", (t => {
          if (t.classList.contains("ion-page")) return t;
          const e = t.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs");
          return e || t
        })), "ion-content"), Ys = ".ion-content-scroll-host", Ks = `${Xs}, ${Ys}`, Zs = t => "ION-CONTENT" === t.tagName,
        Qs = t("G", (async t => Zs(t) ? (await new Promise((e => ba(t, e))), t.getScrollElement()) : t)), Js = t => {
          const e = t.querySelector(Ys);
          return e || t.querySelector(Ks)
        }, tl = (t("z", (t => t.closest(Ks))), t("C", ((t, e) => Zs(t) ? t.scrollToTop(e) : Promise.resolve(t.scrollTo({
          top: 0,
          left: 0,
          behavior: e > 0 ? "smooth" : "auto"
        })))), t("H", ((t, e, o, n) => Zs(t) ? t.scrollByPoint(e, o, n) : Promise.resolve(t.scrollBy({
          top: o,
          left: e,
          behavior: n > 0 ? "smooth" : "auto"
        })))), t => ((t, ...e) => console.error(`<${t.tagName.toLowerCase()}> must be used inside ${e.join(" or ")}.`))(t, Xs));
      /*!
             * (C) Ionic http://ionicframework.com - MIT License
             */
      /*!
             * (C) Ionic http://ionicframework.com - MIT License
             */
      var el, ol;
      !function (t) {
        t.Unimplemented = "UNIMPLEMENTED", t.Unavailable = "UNAVAILABLE"
      }(el || (el = {})), t("F", ol), function (t) {
        t.Body = "body", t.Ionic = "ionic", t.Native = "native", t.None = "none"
      }(ol || t("F", ol = {}));
      const nl = t("K", {
          getEngine() {
            const t = (() => {
              if (void 0 !== ks) return ks.Capacitor
            })();
            if (null == t ? void 0 : t.isPluginAvailable("Keyboard")) return t.Plugins.Keyboard
          }, getResizeMode() {
            const t = this.getEngine();
            return (null == t ? void 0 : t.getResizeMode) ? t.getResizeMode().catch((t => {
              if (t.code !== el.Unimplemented) throw t
            })) : Promise.resolve(void 0)
          }
        }), il = t => {
          if (void 0 === $s || t === ol.None || void 0 === t) return null;
          const e = $s.querySelector("ion-app");
          return null != e ? e : $s.body
        }, rl = t => {
          const e = il(t);
          return null === e ? 0 : e.clientHeight
        }, al = t => {
          const e = document.querySelector(`${t}.ion-cloned-element`);
          if (null !== e) return e;
          const o = document.createElement(t);
          return o.classList.add("ion-cloned-element"), o.style.setProperty("display", "none"), document.body.appendChild(o), o
        }, sl = t => {
          if (!t) return;
          const e = t.querySelectorAll("ion-toolbar");
          return {
            el: t, toolbars: Array.from(e).map((t => {
              const e = t.querySelector("ion-title");
              return {
                el: t,
                background: t.shadowRoot.querySelector(".toolbar-background"),
                ionTitleEl: e,
                innerTitleEl: e ? e.shadowRoot.querySelector(".toolbar-title") : null,
                ionButtonsEl: Array.from(t.querySelectorAll("ion-buttons"))
              }
            }))
          }
        }, ll = (t, e) => {
          "fade" !== t.collapse && (void 0 === e ? t.style.removeProperty("--opacity-scale") : t.style.setProperty("--opacity-scale", e.toString()))
        }, cl = (t, e, o, n) => {
          ga((() => {
            const i = n.scrollTop;
            ((t, e, o) => {
              if (!t[0].isIntersecting) return;
              const n = t[0].intersectionRatio > .9 || o <= 0 ? 0 : 100 * (1 - t[0].intersectionRatio) / 75;
              ll(e.el, 1 === n ? void 0 : n)
            })(t, e, i);
            const r = t[0], a = r.intersectionRect, s = a.width * a.height, l = r.rootBounds.width * r.rootBounds.height,
              c = 0 === s && 0 === l, d = Math.abs(a.left - r.boundingClientRect.left),
              u = Math.abs(a.right - r.boundingClientRect.right);
            c || s > 0 && (d >= 5 || u >= 5) || (r.isIntersecting ? (dl(e, !1), dl(o)) : (0 === a.x && 0 === a.y || 0 !== a.width && 0 !== a.height) && i > 0 && (dl(e), dl(o, !1), ll(e.el)))
          }))
        }, dl = (t, e = !0) => {
          const o = t.el;
          e ? (o.classList.remove("header-collapse-condense-inactive"), o.removeAttribute("aria-hidden")) : (o.classList.add("header-collapse-condense-inactive"), o.setAttribute("aria-hidden", "true"))
        }, ul = (t = [], e = 1, o = !1) => {
          t.forEach((t => {
            const n = t.ionTitleEl, i = t.innerTitleEl;
            n && "large" === n.size && (i.style.transition = o ? "all 0.2s ease-in-out" : "", i.style.transform = `scale3d(${e}, ${e}, 1)`)
          }))
        }, pl = (t, e, o) => {
          ma((() => {
            const n = t.scrollTop, i = e.clientHeight, r = o ? o.clientHeight : 0;
            if (null !== o && n < r) return e.style.setProperty("--opacity-scale", "0"), void t.style.setProperty("clip-path", `inset(${i}px 0px 0px 0px)`);
            const a = $a(0, (n - r) / 10, 1);
            ga((() => {
              t.style.removeProperty("clip-path"), e.style.setProperty("--opacity-scale", a.toString())
            }))
          }))
        }, hl = qr(class extends ra {
          constructor() {
            super(), this.__registerHost(), this.inheritedAttributes = {}, this.setupFadeHeader = async (t, e) => {
              const o = this.scrollEl = await Qs(t);
              this.contentScrollCallback = () => {
                pl(this.scrollEl, this.el, e)
              }, o.addEventListener("scroll", this.contentScrollCallback), pl(this.scrollEl, this.el, e)
            }, this.collapse = void 0, this.translucent = !1
          }

          static get style() {
            return {
              ios: "ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-ios ion-toolbar:last-of-type{--border-width:0 0 0.55px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.header-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.header-translucent-ios ion-toolbar{--opacity:.8}.header-collapse-condense-inactive .header-background{-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px)}}.header-ios.ion-no-border ion-toolbar:last-of-type{--border-width:0}.header-collapse-fade ion-toolbar{--opacity-scale:inherit}.header-collapse-condense{z-index:9}.header-collapse-condense ion-toolbar{position:-webkit-sticky;position:sticky;top:0}.header-collapse-condense ion-toolbar:first-of-type{padding-top:0px;z-index:1}.header-collapse-condense ion-toolbar{--background:var(--ion-background-color, #fff);z-index:0}.header-collapse-condense ion-toolbar:last-of-type{--border-width:0px}.header-collapse-condense ion-toolbar ion-searchbar{padding-top:0px;padding-bottom:13px}.header-collapse-main{--opacity-scale:1}.header-collapse-main ion-toolbar{--opacity-scale:inherit}.header-collapse-main ion-toolbar.in-toolbar ion-title,.header-collapse-main ion-toolbar.in-toolbar ion-buttons{-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out}.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-buttons.buttons-collapse{opacity:0;pointer-events:none}.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-buttons.buttons-collapse{visibility:hidden}ion-header.header-ios:not(.header-collapse-main):has(~ion-content ion-header.header-ios[collapse=condense],~ion-content ion-header.header-ios.header-collapse-condense){opacity:0}",
              md: "ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-md{-webkit-box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12)}.header-collapse-condense{display:none}.header-md.ion-no-border{-webkit-box-shadow:none;box-shadow:none}"
            }
          }

          get el() {
            return this
          }

          componentWillLoad() {
            this.inheritedAttributes = wa(this.el)
          }

          componentDidLoad() {
            this.checkCollapsibleHeader()
          }

          componentDidUpdate() {
            this.checkCollapsibleHeader()
          }

          disconnectedCallback() {
            this.destroyCollapsibleHeader()
          }

          async checkCollapsibleHeader() {
            if ("ios" !== Wa(this)) return;
            const { collapse: t } = this, e = "condense" === t, o = "fade" === t;
            if (this.destroyCollapsibleHeader(), e) {
              const t = this.el.closest("ion-app,ion-page,.ion-page,page-inner"), e = t ? Js(t) : null;
              ga((() => {
                al("ion-title").size = "large", al("ion-back-button")
              })), await this.setupCondenseHeader(e, t)
            } else if (o) {
              const t = this.el.closest("ion-app,ion-page,.ion-page,page-inner"), e = t ? Js(t) : null;
              if (!e) return void tl(this.el);
              const o = e.querySelector('ion-header[collapse="condense"]');
              await this.setupFadeHeader(e, o)
            }
          }

          destroyCollapsibleHeader() {
            this.intersectionObserver && (this.intersectionObserver.disconnect(), this.intersectionObserver = void 0), this.scrollEl && this.contentScrollCallback && (this.scrollEl.removeEventListener("scroll", this.contentScrollCallback), this.contentScrollCallback = void 0), this.collapsibleMainHeader && (this.collapsibleMainHeader.classList.remove("header-collapse-main"), this.collapsibleMainHeader = void 0)
          }

          async setupCondenseHeader(t, e) {
            if (!t || !e) return void tl(this.el);
            if ("undefined" == typeof IntersectionObserver) return;
            this.scrollEl = await Qs(t);
            const o = e.querySelectorAll("ion-header");
            if (this.collapsibleMainHeader = Array.from(o).find((t => "condense" !== t.collapse)), !this.collapsibleMainHeader) return;
            const n = sl(this.collapsibleMainHeader), i = sl(this.el);
            n && i && (dl(n, !1), ll(n.el, 0), this.intersectionObserver = new IntersectionObserver((t => {
              cl(t, n, i, this.scrollEl)
            }), {
              root: t,
              threshold: [.25, .3, .4, .5, .6, .7, .8, .9, 1]
            }), this.intersectionObserver.observe(i.toolbars[i.toolbars.length - 1].el), this.contentScrollCallback = () => {
              ((t, e, o) => {
                ma((() => {
                  const n = t.scrollTop, i = $a(1, 1 + -n / 500, 1.1);
                  null === o.querySelector("ion-refresher.refresher-native") && ga((() => {
                    ul(e.toolbars, i)
                  }))
                }))
              })(this.scrollEl, i, t)
            }, this.scrollEl.addEventListener("scroll", this.contentScrollCallback), ga((() => {
              void 0 !== this.collapsibleMainHeader && this.collapsibleMainHeader.classList.add("header-collapse-main")
            })))
          }

          render() {
            const { translucent: t, inheritedAttributes: e } = this, o = Wa(this), n = this.collapse || "none",
              i = ss("ion-menu", this.el) ? "none" : "banner";
            return er(nr, Object.assign({
              key: "be4386a218c20dc4c18320dbbcfb25574d13d27e",
              role: i,
              class: {
                [o]: !0,
                [`header-${o}`]: !0,
                "header-translucent": this.translucent,
                [`header-collapse-${n}`]: !0,
                [`header-translucent-${o}`]: this.translucent
              }
            }, e), "ios" === o && t && er("div", { class: "header-background" }), er("slot", { key: "74c401fb331aeb40c733605fd580949ad53989b8" }))
          }
        }, [36, "ion-header", { collapse: [1], translucent: [4] }]), fl = function () {
          "undefined" != typeof customElements && ["ion-header"].forEach((t => {
            "ion-header" === t && (customElements.get(t) || customElements.define(t, hl))
          }))
        }, ml = function () {
          "undefined" != typeof customElements && ["ion-label"].forEach((t => {
            "ion-label" === t && (customElements.get(t) || customElements.define(t, ws))
          }))
        }
        /*!
             * (C) Ionic http://ionicframework.com - MIT License
             */, gl = (t, e, o, n, i) => vl(t[1], e[1], o[1], n[1], i).map((i => bl(t[0], e[0], o[0], n[0], i))),
        bl = (t, e, o, n, i) => i * (3 * e * Math.pow(i - 1, 2) + i * (-3 * o * i + 3 * o + n * i)) - t * Math.pow(i - 1, 3),
        vl = (t, e, o, n, i) => yl((n -= i) - 3 * (o -= i) + 3 * (e -= i) - (t -= i), 3 * o - 6 * e + 3 * t, 3 * e - 3 * t, t).filter((t => t >= 0 && t <= 1)),
        yl = (t, e, o, n) => {
          if (0 === t) return ((t, e, o) => {
            const n = e * e - 4 * t * o;
            return n < 0 ? [] : [(-e + Math.sqrt(n)) / (2 * t), (-e - Math.sqrt(n)) / (2 * t)]
          })(e, o, n);
          const i = (3 * (o /= t) - (e /= t) * e) / 3, r = (2 * e * e * e - 9 * e * o + 27 * (n /= t)) / 27;
          if (0 === i) return [Math.pow(-r, 1 / 3)];
          if (0 === r) return [Math.sqrt(-i), -Math.sqrt(-i)];
          const a = Math.pow(r / 2, 2) + Math.pow(i / 3, 3);
          if (0 === a) return [Math.pow(r / 2, .5) - e / 3];
          if (a > 0) return [Math.pow(-r / 2 + Math.sqrt(a), 1 / 3) - Math.pow(r / 2 + Math.sqrt(a), 1 / 3) - e / 3];
          const s = Math.sqrt(Math.pow(-i / 3, 3)), l = Math.acos(-r / (2 * Math.sqrt(Math.pow(-i / 3, 3)))),
            c = 2 * Math.pow(s, 1 / 3);
          return [c * Math.cos(l / 3) - e / 3, c * Math.cos((l + 2 * Math.PI) / 3) - e / 3, c * Math.cos((l + 4 * Math.PI) / 3) - e / 3]
        };

      /*!
             * (C) Ionic http://ionicframework.com - MIT License
             */
      class xl {
        constructor(t, e) {
          this.component = t, this.params = e, this.state = 1
        }

        async init(t) {
          if (this.state = 2, !this.element) {
            const e = this.component;
            this.element = await _s(this.delegate, t, e, ["ion-page", "ion-page-invisible"], this.params)
          }
        }

        _destroy() {
          _a(3 !== this.state, "view state must be ATTACHED");
          const t = this.element;
          t && (this.delegate ? this.delegate.removeViewFromDom(t.parentElement, t) : t.remove()), this.nav = void 0, this.state = 3
        }
      }

      const wl = (t, e, o) => !!t && t.component === e && Ca(t.params, o),
        kl = (t, e) => t ? t instanceof xl ? t : new xl(t, e) : null, $l = qr(class extends ra {
          constructor() {
            super(), this.__registerHost(), this.__attachShadow(), this.ionNavWillLoad = sr(this, "ionNavWillLoad", 7), this.ionNavWillChange = sr(this, "ionNavWillChange", 3), this.ionNavDidChange = sr(this, "ionNavDidChange", 3), this.transInstr = [], this.gestureOrAnimationInProgress = !1, this.useRouter = !1, this.isTransitioning = !1, this.destroyed = !1, this.views = [], this.didLoad = !1, this.delegate = void 0, this.swipeGesture = void 0, this.animated = !0, this.animation = void 0, this.rootParams = void 0, this.root = void 0
          }

          static get watchers() {
            return { swipeGesture: ["swipeGestureChanged"], root: ["rootChanged"] }
          }

          static get style() {
            return ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;z-index:0}"
          }

          get el() {
            return this
          }

          swipeGestureChanged() {
            this.gesture && this.gesture.enable(!0 === this.swipeGesture)
          }

          rootChanged() {
            void 0 !== this.root && !1 !== this.didLoad && (this.useRouter || void 0 !== this.root && this.setRoot(this.root, this.rootParams))
          }

          componentWillLoad() {
            if (this.useRouter = null !== document.querySelector("ion-router") && null === this.el.closest("[no-router]"), void 0 === this.swipeGesture) {
              const t = Wa(this);
              this.swipeGesture = Ea.getBoolean("swipeBackEnabled", "ios" === t)
            }
            this.ionNavWillLoad.emit()
          }

          async componentDidLoad() {
            this.didLoad = !0, this.rootChanged(), this.gesture = (await Ni((() => e.import("./swipe-back-legacy-pbkVhhvr.js")))).createSwipeBackGesture(this.el, this.canStart.bind(this), this.onStart.bind(this), this.onMove.bind(this), this.onEnd.bind(this)), this.swipeGestureChanged()
          }

          connectedCallback() {
            this.destroyed = !1
          }

          disconnectedCallback() {
            for (const t of this.views) Ws(t.element, Rs), t._destroy();
            this.gesture && (this.gesture.destroy(), this.gesture = void 0), this.transInstr.length = 0, this.views.length = 0, this.destroyed = !0
          }

          push(t, e, o, n) {
            return this.insert(-1, t, e, o, n)
          }

          insert(t, e, o, n, i) {
            return this.insertPages(t, [{ component: e, componentProps: o }], n, i)
          }

          insertPages(t, e, o, n) {
            return this.queueTrns({ insertStart: t, insertViews: e, opts: o }, n)
          }

          pop(t, e) {
            return this.removeIndex(-1, 1, t, e)
          }

          popTo(t, e, o) {
            const n = { removeStart: -1, removeCount: -1, opts: e };
            return "object" == typeof t && t.component ? (n.removeView = t, n.removeStart = 1) : "number" == typeof t && (n.removeStart = t + 1), this.queueTrns(n, o)
          }

          popToRoot(t, e) {
            return this.removeIndex(1, -1, t, e)
          }

          removeIndex(t, e = 1, o, n) {
            return this.queueTrns({ removeStart: t, removeCount: e, opts: o }, n)
          }

          setRoot(t, e, o, n) {
            return this.setPages([{ component: t, componentProps: e }], o, n)
          }

          setPages(t, e, o) {
            return null != e || (e = {}), !0 !== e.animated && (e.animated = !1), this.queueTrns({
              insertStart: 0,
              insertViews: t,
              removeStart: 0,
              removeCount: -1,
              opts: e
            }, o)
          }

          setRouteId(t, e, o, n) {
            const i = this.getActiveSync();
            if (wl(i, t, e)) return Promise.resolve({ changed: !1, element: i.element });
            let r;
            const a = new Promise((t => r = t));
            let s;
            const l = {
              updateURL: !1, viewIsReady: t => {
                let e;
                const o = new Promise((t => e = t));
                return r({
                  changed: !0, element: t, markVisible: async () => {
                    e(), await s
                  }
                }), o
              }
            };
            if ("root" === o) s = this.setRoot(t, e, l); else {
              const i = this.views.find((o => wl(o, t, e)));
              i ? s = this.popTo(i, Object.assign(Object.assign({}, l), {
                direction: "back",
                animationBuilder: n
              })) : "forward" === o ? s = this.push(t, e, Object.assign(Object.assign({}, l), { animationBuilder: n })) : "back" === o && (s = this.setRoot(t, e, Object.assign(Object.assign({}, l), {
                direction: "back",
                animated: !0,
                animationBuilder: n
              })))
            }
            return a
          }

          async getRouteId() {
            const t = this.getActiveSync();
            if (t) return { id: t.element.tagName, params: t.params, element: t.element }
          }

          async getActive() {
            return this.getActiveSync()
          }

          async getByIndex(t) {
            return this.views[t]
          }

          async canGoBack(t) {
            return this.canGoBackSync(t)
          }

          async getPrevious(t) {
            return this.getPreviousSync(t)
          }

          getLength() {
            return this.views.length
          }

          getActiveSync() {
            return this.views[this.views.length - 1]
          }

          canGoBackSync(t = this.getActiveSync()) {
            return !(!t || !this.getPreviousSync(t))
          }

          getPreviousSync(t = this.getActiveSync()) {
            if (!t) return;
            const e = this.views, o = e.indexOf(t);
            return o > 0 ? e[o - 1] : void 0
          }

          async queueTrns(t, e) {
            var o, n;
            if (this.isTransitioning && (null === (o = t.opts) || void 0 === o ? void 0 : o.skipIfBusy)) return !1;
            const i = new Promise(((e, o) => {
              t.resolve = e, t.reject = o
            }));
            if (t.done = e, t.opts && !1 !== t.opts.updateURL && this.useRouter) {
              const e = document.querySelector("ion-router");
              if (e) {
                const o = await e.canTransition();
                if (!1 === o) return !1;
                if ("string" == typeof o) return e.push(o, t.opts.direction || "back"), !1
              }
            }
            return 0 === (null === (n = t.insertViews) || void 0 === n ? void 0 : n.length) && (t.insertViews = void 0), this.transInstr.push(t), this.nextTrns(), i
          }

          success(t, e) {
            if (this.destroyed) this.fireError("nav controller was destroyed", e); else if (e.done && e.done(t.hasCompleted, t.requiresTransition, t.enteringView, t.leavingView, t.direction), e.resolve(t.hasCompleted), !1 !== e.opts.updateURL && this.useRouter) {
              const e = document.querySelector("ion-router");
              if (e) {
                const o = "back" === t.direction ? "back" : "forward";
                e.navChanged(o)
              }
            }
          }

          failed(t, e) {
            this.destroyed ? this.fireError("nav controller was destroyed", e) : (this.transInstr.length = 0, this.fireError(t, e))
          }

          fireError(t, e) {
            e.done && e.done(!1, !1, t), e.reject && !this.destroyed ? e.reject(t) : e.resolve(!1)
          }

          nextTrns() {
            if (this.isTransitioning) return !1;
            const t = this.transInstr.shift();
            return !!t && (this.runTransition(t), !0)
          }

          async runTransition(t) {
            try {
              this.ionNavWillChange.emit(), this.isTransitioning = !0, this.prepareTI(t);
              const e = this.getActiveSync(), o = this.getEnteringView(t, e);
              if (!e && !o) throw new Error("no views in the stack to be removed");
              o && 1 === o.state && await o.init(this.el), this.postViewInit(o, e, t);
              const n = (t.enteringRequiresTransition || t.leavingRequiresTransition) && o !== e;
              let i;
              n && t.opts && e && ("back" === t.opts.direction && (t.opts.animationBuilder = t.opts.animationBuilder || (null == o ? void 0 : o.animationBuilder)), e.animationBuilder = t.opts.animationBuilder), i = n ? await this.transition(o, e, t) : {
                hasCompleted: !0,
                requiresTransition: !1
              }, this.success(i, t), this.ionNavDidChange.emit()
            } catch (e) {
              this.failed(e, t)
            }
            this.isTransitioning = !1, this.nextTrns()
          }

          prepareTI(t) {
            var e, o, n;
            const i = this.views.length;
            if (null !== (e = t.opts) && void 0 !== e || (t.opts = {}), null !== (o = (n = t.opts).delegate) && void 0 !== o || (n.delegate = this.delegate), void 0 !== t.removeView) {
              _a(void 0 !== t.removeStart, "removeView needs removeStart"), _a(void 0 !== t.removeCount, "removeView needs removeCount");
              const e = this.views.indexOf(t.removeView);
              if (e < 0) throw new Error("removeView was not found");
              t.removeStart += e
            }
            void 0 !== t.removeStart && (t.removeStart < 0 && (t.removeStart = i - 1), t.removeCount < 0 && (t.removeCount = i - t.removeStart), t.leavingRequiresTransition = t.removeCount > 0 && t.removeStart + t.removeCount === i), t.insertViews && ((t.insertStart < 0 || t.insertStart > i) && (t.insertStart = i), t.enteringRequiresTransition = t.insertStart === i);
            const r = t.insertViews;
            if (!r) return;
            _a(r.length > 0, "length can not be zero");
            const a = r.map((t => t instanceof xl ? t : "component" in t ? kl(t.component, null === t.componentProps ? void 0 : t.componentProps) : kl(t, void 0))).filter((t => null !== t));
            if (0 === a.length) throw new Error("invalid views to insert");
            for (const s of a) {
              s.delegate = t.opts.delegate;
              const e = s.nav;
              if (e && e !== this) throw new Error("inserted view was already inserted");
              if (3 === s.state) throw new Error("inserted view was already destroyed")
            }
            t.insertViews = a
          }

          getEnteringView(t, e) {
            const o = t.insertViews;
            if (void 0 !== o) return o[o.length - 1];
            const n = t.removeStart;
            if (void 0 !== n) {
              const o = this.views, i = n + t.removeCount;
              for (let t = o.length - 1; t >= 0; t--) {
                const r = o[t];
                if ((t < n || t >= i) && r !== e) return r
              }
            }
          }

          postViewInit(t, e, o) {
            var n, i, r;
            _a(e || t, "Both leavingView and enteringView are null"), _a(o.resolve, "resolve must be valid"), _a(o.reject, "reject must be valid");
            const a = o.opts, { insertViews: s, removeStart: l, removeCount: c } = o;
            let d;
            if (void 0 !== l && void 0 !== c) {
              _a(l >= 0, "removeStart can not be negative"), _a(c >= 0, "removeCount can not be negative"), d = [];
              for (let o = l; o < l + c; o++) {
                const n = this.views[o];
                void 0 !== n && n !== t && n !== e && d.push(n)
              }
              null !== (n = a.direction) && void 0 !== n || (a.direction = "back")
            }
            const u = this.views.length + (null !== (i = null == s ? void 0 : s.length) && void 0 !== i ? i : 0) - (null != c ? c : 0);
            if (_a(u >= 0, "final balance can not be negative"), 0 === u) throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.", this, this.el), new Error("navigation stack needs at least one root page");
            if (s) {
              let t = o.insertStart;
              for (const e of s) this.insertViewAt(e, t), t++;
              o.enteringRequiresTransition && (null !== (r = a.direction) && void 0 !== r || (a.direction = "forward"))
            }
            if (d && d.length > 0) {
              for (const t of d) Ws(t.element, zs), Ws(t.element, As), Ws(t.element, Rs);
              for (const t of d) this.destroyView(t)
            }
          }

          async transition(t, e, o) {
            const n = o.opts, i = n.progressAnimation ? t => {
              void 0 === t || this.gestureOrAnimationInProgress ? this.sbAni = t : (this.gestureOrAnimationInProgress = !0, t.onFinish((() => {
                this.gestureOrAnimationInProgress = !1
              }), { oneTimeCallback: !0 }), t.progressEnd(0, 0, 0))
            } : void 0, r = Wa(this), a = t.element, s = e && e.element, l = Object.assign(Object.assign({
              mode: r,
              showGoBack: this.canGoBackSync(t),
              baseEl: this.el,
              progressCallback: i,
              animated: this.animated && Ea.getBoolean("animated", !0),
              enteringEl: a,
              leavingEl: s
            }, n), { animationBuilder: n.animationBuilder || this.animation || Ea.get("navAnimation") }), { hasCompleted: c } = await Is(l);
            return this.transitionFinish(c, t, e, n)
          }

          transitionFinish(t, e, o, n) {
            const i = t ? e : o;
            return i && this.unmountInactiveViews(i), {
              hasCompleted: t,
              requiresTransition: !0,
              enteringView: e,
              leavingView: o,
              direction: n.direction
            }
          }

          insertViewAt(t, e) {
            const o = this.views, n = o.indexOf(t);
            n > -1 ? (_a(t.nav === this, "view is not part of the nav"), o.splice(n, 1), o.splice(e, 0, t)) : (_a(!t.nav, "nav is used"), t.nav = this, o.splice(e, 0, t))
          }

          removeView(t) {
            _a(2 === t.state || 3 === t.state, "view state should be loaded or destroyed");
            const e = this.views, o = e.indexOf(t);
            _a(o > -1, "view must be part of the stack"), o >= 0 && e.splice(o, 1)
          }

          destroyView(t) {
            t._destroy(), this.removeView(t)
          }

          unmountInactiveViews(t) {
            if (this.destroyed) return;
            const e = this.views, o = e.indexOf(t);
            for (let n = e.length - 1; n >= 0; n--) {
              const t = e[n], i = t.element;
              i && (n > o ? (Ws(i, Rs), this.destroyView(t)) : n < o && Us(i, !0))
            }
          }

          canStart() {
            return !this.gestureOrAnimationInProgress && !!this.swipeGesture && !this.isTransitioning && 0 === this.transInstr.length && this.canGoBackSync()
          }

          onStart() {
            this.gestureOrAnimationInProgress = !0, this.pop({ direction: "back", progressAnimation: !0 })
          }

          onMove(t) {
            this.sbAni && this.sbAni.progressStep(t)
          }

          onEnd(t, e, o) {
            if (this.sbAni) {
              this.sbAni.onFinish((() => {
                this.gestureOrAnimationInProgress = !1
              }), { oneTimeCallback: !0 });
              let n = t ? -.001 : .001;
              t ? n += gl([0, 0], [.32, .72], [0, 1], [1, 1], e)[0] : (this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)"), n += gl([0, 0], [1, 0], [.68, .28], [1, 1], e)[0]), this.sbAni.progressEnd(t ? 1 : 0, n, o)
            } else this.gestureOrAnimationInProgress = !1
          }

          render() {
            return er("slot", { key: "8254ea10bef0575c13f8b0ddbe4643bec19f2366" })
          }
        }, [1, "ion-nav", {
          delegate: [16],
          swipeGesture: [1028, "swipe-gesture"],
          animated: [4],
          animation: [16],
          rootParams: [16],
          root: [1],
          push: [64],
          insert: [64],
          insertPages: [64],
          pop: [64],
          popTo: [64],
          popToRoot: [64],
          removeIndex: [64],
          setRoot: [64],
          setPages: [64],
          setRouteId: [64],
          getRouteId: [64],
          getActive: [64],
          getByIndex: [64],
          canGoBack: [64],
          getPrevious: [64]
        }, void 0, { swipeGesture: ["swipeGestureChanged"], root: ["rootChanged"] }]), _l = function () {
          "undefined" != typeof customElements && ["ion-nav"].forEach((t => {
            "ion-nav" === t && (customElements.get(t) || customElements.define(t, $l))
          }))
        }, Cl = qr(class extends ra {
          constructor() {
            super(), this.__registerHost(), this.__attachShadow(), this.ionStyle = sr(this, "ionStyle", 7), this.color = void 0, this.size = void 0
          }

          static get watchers() {
            return { size: ["sizeChanged"] }
          }

          static get style() {
            return {
              ios: ":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{top:0;-webkit-padding-start:90px;padding-inline-start:90px;-webkit-padding-end:90px;padding-inline-end:90px;padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);font-size:min(1.0625rem, 20.4px);font-weight:600;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}@supports (inset-inline-start: 0){:host{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host{left:0}:host-context([dir=rtl]){left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host(:dir(rtl)){left:unset;right:unset;right:0}}}:host(.title-small){-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px;padding-top:6px;padding-bottom:16px;position:relative;font-size:min(0.8125rem, 23.4px);font-weight:normal}:host(.title-large){-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:2px;padding-bottom:4px;-webkit-transform-origin:left center;transform-origin:left center;position:static;-ms-flex-align:end;align-items:flex-end;min-width:100%;font-size:min(2.125rem, 61.2px);font-weight:700;text-align:start}:host(.title-large.title-rtl){-webkit-transform-origin:right center;transform-origin:right center}:host(.title-large.ion-cloned-element){--color:var(--ion-text-color, #000);font-family:var(--ion-font-family)}:host(.title-large) .toolbar-title{-webkit-transform-origin:inherit;transform-origin:inherit;width:auto}:host-context([dir=rtl]):host(.title-large) .toolbar-title,:host-context([dir=rtl]).title-large .toolbar-title{-webkit-transform-origin:calc(100% - inherit);transform-origin:calc(100% - inherit)}@supports selector(:dir(rtl)){:host(.title-large:dir(rtl)) .toolbar-title{-webkit-transform-origin:calc(100% - inherit);transform-origin:calc(100% - inherit)}}",
              md: ":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px;padding-top:0;padding-bottom:0;font-size:1.25rem;font-weight:500;letter-spacing:0.0125em}:host(.title-small){width:100%;height:100%;font-size:0.9375rem;font-weight:normal}"
            }
          }

          get el() {
            return this
          }

          sizeChanged() {
            this.emitStyle()
          }

          connectedCallback() {
            this.emitStyle()
          }

          emitStyle() {
            const t = this.getSize();
            this.ionStyle.emit({ [`title-${t}`]: !0 })
          }

          getSize() {
            return void 0 !== this.size ? this.size : "default"
          }

          render() {
            const t = Wa(this), e = this.getSize();
            return er(nr, {
              key: "2642d433ba678b67503b7f1e9d0ae0390250bec8",
              class: ls(this.color, { [t]: !0, [`title-${e}`]: !0, "title-rtl": "rtl" === document.dir })
            }, er("div", {
              key: "355184542e26b53296f7143d099cfebc3de7b569",
              class: "toolbar-title"
            }, er("slot", { key: "aed07a34c22e4b1f34cdf40fea35481674d8941f" })))
          }
        }, [33, "ion-title", { color: [513], size: [1] }, void 0, { size: ["sizeChanged"] }]), Sl = function () {
          "undefined" != typeof customElements && ["ion-title"].forEach((t => {
            "ion-title" === t && (customElements.get(t) || customElements.define(t, Cl))
          }))
        }, El = qr(class extends ra {
          constructor() {
            super(), this.__registerHost(), this.__attachShadow(), this.childrenStyles = new Map, this.color = void 0
          }

          static get style() {
            return {
              ios: ":host{--border-width:0;--border-style:solid;--opacity:1;--opacity-scale:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;width:100%;padding-right:var(--ion-safe-area-right);padding-left:var(--ion-safe-area-left);color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:calc(var(--opacity) * var(--opacity-scale));z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-color-step-50, #f7f7f7));--color:var(--ion-toolbar-color, var(--ion-text-color, #000));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.2))));--padding-top:3px;--padding-bottom:3px;--padding-start:4px;--padding-end:4px;--min-height:44px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:4;order:4;min-width:0}:host(.toolbar-segment) .toolbar-content{display:-ms-inline-flexbox;display:inline-flex}:host(.toolbar-searchbar) .toolbar-container{padding-top:0;padding-bottom:0}:host(.toolbar-searchbar) ::slotted(*){-ms-flex-item-align:start;align-self:start}:host(.toolbar-searchbar) ::slotted(ion-chip){margin-top:3px}::slotted(ion-buttons){min-height:38px}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:3;order:3}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}:host(.toolbar-title-large) .toolbar-container{-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:start;align-items:flex-start}:host(.toolbar-title-large) .toolbar-content ion-title{-ms-flex:1;flex:1;-ms-flex-order:8;order:8;min-width:100%}",
              md: ":host{--border-width:0;--border-style:solid;--opacity:1;--opacity-scale:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;width:100%;padding-right:var(--ion-safe-area-right);padding-left:var(--ion-safe-area-left);color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:calc(var(--opacity) * var(--opacity-scale));z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-background-color, #fff));--color:var(--ion-toolbar-color, var(--ion-text-color, #424242));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, #c1c4cd)));--padding-top:0;--padding-bottom:0;--padding-start:0;--padding-end:0;--min-height:56px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:3;order:3;min-width:0;max-width:100%}::slotted(.buttons-first-slot){-webkit-margin-start:4px;margin-inline-start:4px}::slotted(.buttons-last-slot){-webkit-margin-end:4px;margin-inline-end:4px}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:4;order:4}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}"
            }
          }

          get el() {
            return this
          }

          componentWillLoad() {
            const t = Array.from(this.el.querySelectorAll("ion-buttons")), e = t.find((t => "start" === t.slot));
            e && e.classList.add("buttons-first-slot");
            const o = t.reverse(),
              n = o.find((t => "end" === t.slot)) || o.find((t => "primary" === t.slot)) || o.find((t => "secondary" === t.slot));
            n && n.classList.add("buttons-last-slot")
          }

          childrenStyle(t) {
            t.stopPropagation();
            const e = t.target.tagName, o = t.detail, n = {}, i = this.childrenStyles.get(e) || {};
            let r = !1;
            Object.keys(o).forEach((t => {
              const e = `toolbar-${t}`, a = o[t];
              a !== i[e] && (r = !0), a && (n[e] = !0)
            })), r && (this.childrenStyles.set(e, n), Nr(this))
          }

          render() {
            const t = Wa(this), e = {};
            return this.childrenStyles.forEach((t => {
              Object.assign(e, t)
            })), er(nr, {
              key: "fdd8621b4f69ce650b5aaf4fb6bffde29aa5ad65",
              class: Object.assign(Object.assign({}, e), ls(this.color, {
                [t]: !0,
                "in-toolbar": ss("ion-toolbar", this.el)
              }))
            }, er("div", {
              key: "c6ad5434546e2046a83574ea92a03a3f77d0a9e3",
              class: "toolbar-background"
            }), er("div", {
              key: "3b79dd20c3e8252cacfd46a82428df9ba0b8b86e",
              class: "toolbar-container"
            }, er("slot", {
              key: "514259a8b76db9f3a587a7667b5e37fd8ade9481",
              name: "start"
            }), er("slot", {
              key: "d9ab68f0626f4ac8b83d21663eb67a47b76d809b",
              name: "secondary"
            }), er("div", {
              key: "2c21da88b67a7d7eef280e517bda9982264c7be4",
              class: "toolbar-content"
            }, er("slot", { key: "ac2b7c8f20c5ac755df9032809c73eab9e767e36" })), er("slot", {
              key: "2ddd3b7e3803f2d56c32743dcfc114ddcb8684a2",
              name: "primary"
            }), er("slot", { key: "27483847d4333b4492506da33185c9ba1aa824a7", name: "end" })))
          }
        }, [33, "ion-toolbar", { color: [513] }, [[0, "ionStyle", "childrenStyle"]]]), Tl = function () {
          "undefined" != typeof customElements && ["ion-toolbar"].forEach((t => {
            "ion-toolbar" === t && (customElements.get(t) || customElements.define(t, El))
          }))
        }, zl = qr(class extends ra {
          constructor() {
            super(), this.__registerHost(), this.__attachShadow(), this.inheritedAttributes = {}, this.onClick = async t => {
              const e = this.el.closest("ion-nav");
              return t.preventDefault(), e && await e.canGoBack() ? e.pop({
                animationBuilder: this.routerAnimation,
                skipIfBusy: !0
              }) : (async (t, e, o, n) => {
                if (null != t && "#" !== t[0] && !cs.test(t)) {
                  const i = document.querySelector("ion-router");
                  if (i) return null != e && e.preventDefault(), i.push(t, o, n)
                }
                return !1
              })(this.defaultHref, t, "back", this.routerAnimation)
            }, this.color = void 0, this.defaultHref = void 0, this.disabled = !1, this.icon = void 0, this.text = void 0, this.type = "button", this.routerAnimation = void 0
          }

          static get style() {
            return {
              ios: ':host{--background:transparent;--color-focused:currentColor;--color-hover:currentColor;--icon-margin-top:0;--icon-margin-bottom:0;--icon-padding-top:0;--icon-padding-end:0;--icon-padding-bottom:0;--icon-padding-start:0;--margin-top:0;--margin-end:0;--margin-bottom:0;--margin-start:0;--min-width:auto;--min-height:auto;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--opacity:1;--ripple-color:currentColor;--transition:background-color, opacity 100ms linear;display:none;min-width:var(--min-width);min-height:var(--min-height);color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-kerning:none;font-kerning:none}ion-ripple-effect{color:var(--ripple-color)}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.show-back-button){display:block}:host(.back-button-disabled){cursor:default;opacity:0.5;pointer-events:none}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;opacity:var(--opacity);overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{-webkit-padding-start:var(--icon-padding-start);padding-inline-start:var(--icon-padding-start);-webkit-padding-end:var(--icon-padding-end);padding-inline-end:var(--icon-padding-end);padding-top:var(--icon-padding-top);padding-bottom:var(--icon-padding-bottom);-webkit-margin-start:var(--icon-margin-start);margin-inline-start:var(--icon-margin-start);-webkit-margin-end:var(--icon-margin-end);margin-inline-end:var(--icon-margin-end);margin-top:var(--icon-margin-top);margin-bottom:var(--icon-margin-bottom);display:inherit;font-size:var(--icon-font-size);font-weight:var(--icon-font-weight);pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-color.ion-focused) .button-native{color:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native{color:var(--ion-color-base)}}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-hover:transparent;--background-hover-opacity:1;--background-focused:currentColor;--background-focused-opacity:.1;--border-radius:4px;--color:var(--ion-color-primary, #3880ff);--icon-margin-end:1px;--icon-margin-start:-4px;--icon-font-size:1.6em;--min-height:32px;font-size:clamp(17px, 1.0625rem, 21.998px)}.button-native{-webkit-transform:translateZ(0);transform:translateZ(0);overflow:visible;z-index:99}:host(.ion-activated) .button-native{opacity:0.4}@media (any-hover: hover){:host(:hover){opacity:0.6}}',
              md: ':host{--background:transparent;--color-focused:currentColor;--color-hover:currentColor;--icon-margin-top:0;--icon-margin-bottom:0;--icon-padding-top:0;--icon-padding-end:0;--icon-padding-bottom:0;--icon-padding-start:0;--margin-top:0;--margin-end:0;--margin-bottom:0;--margin-start:0;--min-width:auto;--min-height:auto;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--opacity:1;--ripple-color:currentColor;--transition:background-color, opacity 100ms linear;display:none;min-width:var(--min-width);min-height:var(--min-height);color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-kerning:none;font-kerning:none}ion-ripple-effect{color:var(--ripple-color)}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.show-back-button){display:block}:host(.back-button-disabled){cursor:default;opacity:0.5;pointer-events:none}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;opacity:var(--opacity);overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{-webkit-padding-start:var(--icon-padding-start);padding-inline-start:var(--icon-padding-start);-webkit-padding-end:var(--icon-padding-end);padding-inline-end:var(--icon-padding-end);padding-top:var(--icon-padding-top);padding-bottom:var(--icon-padding-bottom);-webkit-margin-start:var(--icon-margin-start);margin-inline-start:var(--icon-margin-start);-webkit-margin-end:var(--icon-margin-end);margin-inline-end:var(--icon-margin-end);margin-top:var(--icon-margin-top);margin-bottom:var(--icon-margin-bottom);display:inherit;font-size:var(--icon-font-size);font-weight:var(--icon-font-weight);pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-color.ion-focused) .button-native{color:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native{color:var(--ion-color-base)}}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--border-radius:4px;--background-focused:currentColor;--background-focused-opacity:.12;--background-hover:currentColor;--background-hover-opacity:0.04;--color:currentColor;--icon-margin-end:0;--icon-margin-start:0;--icon-font-size:1.5rem;--icon-font-weight:normal;--min-height:32px;--min-width:44px;--padding-start:12px;--padding-end:12px;font-size:0.875rem;font-weight:500;text-transform:uppercase}:host(.back-button-has-icon-only){--border-radius:50%;min-width:48px;min-height:48px;aspect-ratio:1/1}.button-native{-webkit-box-shadow:none;box-shadow:none}.button-text{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:0;padding-bottom:0}ion-icon{line-height:0.67;text-align:start}@media (any-hover: hover){:host(.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}:host(.ion-color.ion-focused) .button-native::after{background:var(--ion-color-base)}'
            }
          }

          get backButtonIcon() {
            const t = this.icon;
            return null != t ? t : "ios" === Wa(this) ? Ea.get("backButtonIcon", "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>") : Ea.get("backButtonIcon", "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>")
          }

          get backButtonText() {
            const t = "ios" === Wa(this) ? "Back" : null;
            return null != this.text ? this.text : Ea.get("backButtonText", t)
          }

          get hasIconOnly() {
            return this.backButtonIcon && !this.backButtonText
          }

          get rippleType() {
            return this.hasIconOnly ? "unbounded" : "bounded"
          }

          get el() {
            return this
          }

          componentWillLoad() {
            this.inheritedAttributes = wa(this.el), void 0 === this.defaultHref && (this.defaultHref = Ea.get("backButtonDefaultHref"))
          }

          render() {
            const {
              color: t,
              defaultHref: e,
              disabled: o,
              type: n,
              hasIconOnly: i,
              backButtonIcon: r,
              backButtonText: a,
              icon: s,
              inheritedAttributes: l
            } = this, c = void 0 !== e, d = Wa(this), u = l["aria-label"] || a || "back";
            return er(nr, {
              key: "175fff2d7a41d2deaaf7b781c5ba2aac9311ebf4",
              onClick: this.onClick,
              class: ls(t, {
                [d]: !0,
                button: !0,
                "back-button-disabled": o,
                "back-button-has-icon-only": i,
                "in-toolbar": ss("ion-toolbar", this.el),
                "in-toolbar-color": ss("ion-toolbar[color]", this.el),
                "ion-activatable": !0,
                "ion-focusable": !0,
                "show-back-button": c
              })
            }, er("button", {
              key: "59fe30c167ea82e2431e45d46060a01bcb2aea77",
              type: n,
              disabled: o,
              class: "button-native",
              part: "native",
              "aria-label": u
            }, er("span", {
              key: "3d704fb7ef001446361e7a09d43763a771b242b9",
              class: "button-inner"
            }, r && er("ion-icon", {
              part: "icon",
              icon: r,
              "aria-hidden": "true",
              lazy: !1,
              "flip-rtl": void 0 === s
            }), a && er("span", {
              part: "text",
              "aria-hidden": "true",
              class: "button-text"
            }, a)), "md" === d && er("ion-ripple-effect", { type: this.rippleType })))
          }
        }, [33, "ion-back-button", {
          color: [513],
          defaultHref: [1025, "default-href"],
          disabled: [516],
          icon: [1],
          text: [1],
          type: [1],
          routerAnimation: [16]
        }]), Al = function () {
          "undefined" != typeof customElements && ["ion-back-button", "ion-icon", "ion-ripple-effect"].forEach((t => {
            switch (t) {
              case"ion-back-button":
                customElements.get(t) || customElements.define(t, zl);
                break;
              case"ion-icon":
                customElements.get(t) || "undefined" != typeof customElements && ["ion-icon"].forEach((t => {
                  "ion-icon" === t && (customElements.get(t) || customElements.define(t, is))
                }));
                break;
              case"ion-ripple-effect":
                customElements.get(t) || fs()
            }
          }))
        }, Rl = qr(class extends ra {
          constructor() {
            super(), this.__registerHost(), this.__attachShadow(), this.ionNavWillLoad = sr(this, "ionNavWillLoad", 7), this.ionNavWillChange = sr(this, "ionNavWillChange", 3), this.ionNavDidChange = sr(this, "ionNavDidChange", 3), this.lockController = (() => {
              let t;
              return {
                lock: async () => {
                  const e = t;
                  let o;
                  return t = new Promise((t => o = t)), void 0 !== e && await e, o
                }
              }
            })(), this.gestureOrAnimationInProgress = !1, this.mode = Wa(this), this.delegate = void 0, this.animated = !0, this.animation = void 0, this.swipeHandler = void 0
          }

          static get watchers() {
            return { swipeHandler: ["swipeHandlerChanged"] }
          }

          static get style() {
            return ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;z-index:0}"
          }

          get el() {
            return this
          }

          swipeHandlerChanged() {
            this.gesture && this.gesture.enable(void 0 !== this.swipeHandler)
          }

          async connectedCallback() {
            const t = () => {
              this.gestureOrAnimationInProgress = !0, this.swipeHandler && this.swipeHandler.onStart()
            };
            this.gesture = (await Ni((() => e.import("./swipe-back-legacy-pbkVhhvr.js")))).createSwipeBackGesture(this.el, (() => !this.gestureOrAnimationInProgress && !!this.swipeHandler && this.swipeHandler.canStart()), (() => t()), (t => {
              var e;
              return null === (e = this.ani) || void 0 === e ? void 0 : e.progressStep(t)
            }), ((t, e, o) => {
              if (this.ani) {
                this.ani.onFinish((() => {
                  this.gestureOrAnimationInProgress = !1, this.swipeHandler && this.swipeHandler.onEnd(t)
                }), { oneTimeCallback: !0 });
                let n = t ? -.001 : .001;
                t ? n += gl([0, 0], [.32, .72], [0, 1], [1, 1], e)[0] : (this.ani.easing("cubic-bezier(1, 0, 0.68, 0.28)"), n += gl([0, 0], [1, 0], [.68, .28], [1, 1], e)[0]), this.ani.progressEnd(t ? 1 : 0, n, o)
              } else this.gestureOrAnimationInProgress = !1
            })), this.swipeHandlerChanged()
          }

          componentWillLoad() {
            this.ionNavWillLoad.emit()
          }

          disconnectedCallback() {
            this.gesture && (this.gesture.destroy(), this.gesture = void 0)
          }

          async commit(t, e, o) {
            const n = await this.lockController.lock();
            let i = !1;
            try {
              i = await this.transition(t, e, o)
            } catch (r) {
              console.error(r)
            }
            return n(), i
          }

          async setRouteId(t, e, o, n) {
            return {
              changed: await this.setRoot(t, e, {
                duration: "root" === o ? 0 : void 0,
                direction: "back" === o ? "back" : "forward",
                animationBuilder: n
              }), element: this.activeEl
            }
          }

          async getRouteId() {
            const t = this.activeEl;
            return t ? { id: t.tagName, element: t, params: this.activeParams } : void 0
          }

          async setRoot(t, e, o) {
            if (this.activeComponent === t && Ca(e, this.activeParams)) return !1;
            const n = this.activeEl, i = await _s(this.delegate, this.el, t, ["ion-page", "ion-page-invisible"], e);
            return this.activeComponent = t, this.activeEl = i, this.activeParams = e, await this.commit(i, n, o), await ((t, e) => {
              if (e) {
                if (t) {
                  const o = e.parentElement;
                  return t.removeViewFromDom(o, e)
                }
                e.remove()
              }
              return Promise.resolve()
            })(this.delegate, n), !0
          }

          async transition(t, e, o = {}) {
            if (e === t) return !1;
            this.ionNavWillChange.emit();
            const { el: n, mode: i } = this, r = this.animated && Ea.getBoolean("animated", !0),
              a = o.animationBuilder || this.animation || Ea.get("navAnimation");
            return await Is(Object.assign(Object.assign({
              mode: i,
              animated: r,
              enteringEl: t,
              leavingEl: e,
              baseEl: n,
              deepWait: va(n),
              progressCallback: o.progressAnimation ? t => {
                void 0 === t || this.gestureOrAnimationInProgress ? this.ani = t : (this.gestureOrAnimationInProgress = !0, t.onFinish((() => {
                  this.gestureOrAnimationInProgress = !1, this.swipeHandler && this.swipeHandler.onEnd(!1)
                }), { oneTimeCallback: !0 }), t.progressEnd(0, 0, 0))
              } : void 0
            }, o), { animationBuilder: a })), this.ionNavDidChange.emit(), !0
          }

          render() {
            return er("slot", { key: "e4eaa40478f70742d0ff7602ed5f83879da9f1b4" })
          }
        }, [1, "ion-router-outlet", {
          mode: [1025],
          delegate: [16],
          animated: [4],
          animation: [16],
          swipeHandler: [16],
          commit: [64],
          setRouteId: [64],
          getRouteId: [64]
        }, void 0, { swipeHandler: ["swipeHandlerChanged"] }]), Il = function () {
          "undefined" != typeof customElements && ["ion-router-outlet"].forEach((t => {
            "ion-router-outlet" === t && (customElements.get(t) || customElements.define(t, Rl))
          }))
        }, Ol = "undefined" != typeof document, Ll = Object.assign;

      function Pl(t, e) {
        const o = {};
        for (const n in e) {
          const i = e[n];
          o[n] = Bl(i) ? i.map(t) : t(i)
        }
        return o
      }

      const jl = () => {
        }, Bl = Array.isArray, Ml = /#/g, Nl = /&/g, Vl = /\//g, Fl = /=/g, Hl = /\?/g, Dl = /\+/g, Wl = /%5B/g,
        ql = /%5D/g, Ul = /%5E/g, Gl = /%60/g, Xl = /%7B/g, Yl = /%7C/g, Kl = /%7D/g, Zl = /%20/g;

      function Ql(t) {
        return encodeURI("" + t).replace(Yl, "|").replace(Wl, "[").replace(ql, "]")
      }

      function Jl(t) {
        return Ql(t).replace(Dl, "%2B").replace(Zl, "+").replace(Ml, "%23").replace(Nl, "%26").replace(Gl, "`").replace(Xl, "{").replace(Kl, "}").replace(Ul, "^")
      }

      function tc(t) {
        return null == t ? "" : function (t) {
          return Ql(t).replace(Ml, "%23").replace(Hl, "%3F")
        }(t).replace(Vl, "%2F")
      }

      function ec(t) {
        try {
          return decodeURIComponent("" + t)
        } catch (e) {
        }
        return "" + t
      }

      const oc = /\/$/, nc = t => t.replace(oc, "");

      function ic(t, e, o = "/") {
        let n, i = {}, r = "", a = "";
        const s = e.indexOf("#");
        let l = e.indexOf("?");
        return s < l && s >= 0 && (l = -1), l > -1 && (n = e.slice(0, l), r = e.slice(l + 1, s > -1 ? s : e.length), i = t(r)), s > -1 && (n = n || e.slice(0, s), a = e.slice(s, e.length)), n = function (t, e) {
          if (t.startsWith("/")) return t;
          if (!t) return e;
          const o = e.split("/"), n = t.split("/"), i = n[n.length - 1];
          ".." !== i && "." !== i || n.push("");
          let r, a, s = o.length - 1;
          for (r = 0; r < n.length; r++) if (a = n[r], "." !== a) {
            if (".." !== a) break;
            s > 1 && s--
          }
          return o.slice(0, s).join("/") + "/" + n.slice(r).join("/")
        }(null != n ? n : e, o), { fullPath: n + (r && "?") + r + a, path: n, query: i, hash: ec(a) }
      }

      function rc(t, e) {
        return e && t.toLowerCase().startsWith(e.toLowerCase()) ? t.slice(e.length) || "/" : t
      }

      function ac(t, e) {
        return (t.aliasOf || t) === (e.aliasOf || e)
      }

      function sc(t, e) {
        if (Object.keys(t).length !== Object.keys(e).length) return !1;
        for (const o in t) if (!lc(t[o], e[o])) return !1;
        return !0
      }

      function lc(t, e) {
        return Bl(t) ? cc(t, e) : Bl(e) ? cc(e, t) : t === e
      }

      function cc(t, e) {
        return Bl(e) ? t.length === e.length && t.every(((t, o) => t === e[o])) : 1 === t.length && t[0] === e
      }

      var dc, uc, pc, hc;
      (uc = dc || (dc = {})).pop = "pop", uc.push = "push", (hc = pc || (pc = {})).back = "back", hc.forward = "forward", hc.unknown = "";
      const fc = /^[^#]+#/;

      function mc(t, e) {
        return t.replace(fc, "#") + e
      }

      const gc = () => ({ left: window.scrollX, top: window.scrollY });

      function bc(t) {
        let e;
        if ("el" in t) {
          const o = t.el, n = "string" == typeof o && o.startsWith("#"),
            i = "string" == typeof o ? n ? document.getElementById(o.slice(1)) : document.querySelector(o) : o;
          if (!i) return;
          e = function (t, e) {
            const o = document.documentElement.getBoundingClientRect(), n = t.getBoundingClientRect();
            return { behavior: e.behavior, left: n.left - o.left - (e.left || 0), top: n.top - o.top - (e.top || 0) }
          }(i, t)
        } else e = t;
        "scrollBehavior" in document.documentElement.style ? window.scrollTo(e) : window.scrollTo(null != e.left ? e.left : window.scrollX, null != e.top ? e.top : window.scrollY)
      }

      function vc(t, e) {
        return (history.state ? history.state.position - e : -1) + t
      }

      const yc = new Map;
      let xc = () => location.protocol + "//" + location.host;

      function wc(t, e) {
        const { pathname: o, search: n, hash: i } = e, r = t.indexOf("#");
        if (r > -1) {
          let e = i.includes(t.slice(r)) ? t.slice(r).length : 1, o = i.slice(e);
          return "/" !== o[0] && (o = "/" + o), rc(o, "")
        }
        return rc(o, t) + n + i
      }

      function kc(t, e, o, n = !1, i = !1) {
        return {
          back: t,
          current: e,
          forward: o,
          replaced: n,
          position: window.history.length,
          scroll: i ? gc() : null
        }
      }

      function $c(t) {
        const e = function (t) {
          const { history: e, location: o } = window, n = { value: wc(t, o) }, i = { value: e.state };

          function r(n, r, a) {
            const s = t.indexOf("#"),
              l = s > -1 ? (o.host && document.querySelector("base") ? t : t.slice(s)) + n : xc() + t + n;
            try {
              e[a ? "replaceState" : "pushState"](r, "", l), i.value = r
            } catch (c) {
              console.error(c), o[a ? "replace" : "assign"](l)
            }
          }

          return i.value || r(n.value, {
            back: null,
            current: n.value,
            forward: null,
            position: e.length - 1,
            replaced: !0,
            scroll: null
          }, !0), {
            location: n, state: i, push: function (t, o) {
              const a = Ll({}, i.value, e.state, { forward: t, scroll: gc() });
              r(a.current, a, !0), r(t, Ll({}, kc(n.value, t, null), { position: a.position + 1 }, o), !1), n.value = t
            }, replace: function (t, o) {
              r(t, Ll({}, e.state, kc(i.value.back, t, i.value.forward, !0), o, { position: i.value.position }), !0), n.value = t
            }
          }
        }(t = function (t) {
          if (!t) if (Ol) {
            const e = document.querySelector("base");
            t = (t = e && e.getAttribute("href") || "/").replace(/^\w+:\/\/[^\/]+/, "")
          } else t = "/";
          return "/" !== t[0] && "#" !== t[0] && (t = "/" + t), nc(t)
        }(t)), o = function (t, e, o, n) {
          let i = [], r = [], a = null;
          const s = ({ state: r }) => {
            const s = wc(t, location), l = o.value, c = e.value;
            let d = 0;
            if (r) {
              if (o.value = s, e.value = r, a && a === l) return void (a = null);
              d = c ? r.position - c.position : 0
            } else n(s);
            i.forEach((t => {
              t(o.value, l, { delta: d, type: dc.pop, direction: d ? d > 0 ? pc.forward : pc.back : pc.unknown })
            }))
          };

          function l() {
            const { history: t } = window;
            t.state && t.replaceState(Ll({}, t.state, { scroll: gc() }), "")
          }

          return window.addEventListener("popstate", s), window.addEventListener("beforeunload", l, { passive: !0 }), {
            pauseListeners: function () {
              a = o.value
            }, listen: function (t) {
              i.push(t);
              const e = () => {
                const e = i.indexOf(t);
                e > -1 && i.splice(e, 1)
              };
              return r.push(e), e
            }, destroy: function () {
              for (const t of r) t();
              r = [], window.removeEventListener("popstate", s), window.removeEventListener("beforeunload", l)
            }
          }
        }(t, e.state, e.location, e.replace), n = Ll({
          location: "", base: t, go: function (t, e = !0) {
            e || o.pauseListeners(), history.go(t)
          }, createHref: mc.bind(null, t)
        }, e, o);
        return Object.defineProperty(n, "location", {
          enumerable: !0,
          get: () => e.location.value
        }), Object.defineProperty(n, "state", { enumerable: !0, get: () => e.state.value }), n
      }

      function _c(t) {
        return "string" == typeof t || "symbol" == typeof t
      }

      const Cc = {
        path: "/",
        name: void 0,
        params: {},
        query: {},
        hash: "",
        fullPath: "/",
        matched: [],
        meta: {},
        redirectedFrom: void 0
      }, Sc = Symbol("");
      var Ec, Tc;

      function zc(t, e) {
        return Ll(new Error, { type: t, [Sc]: !0 }, e)
      }

      function Ac(t, e) {
        return t instanceof Error && Sc in t && (null == e || !!(t.type & e))
      }

      (Tc = Ec || (Ec = {}))[Tc.aborted = 4] = "aborted", Tc[Tc.cancelled = 8] = "cancelled", Tc[Tc.duplicated = 16] = "duplicated";
      const Rc = "[^/]+?", Ic = { sensitive: !1, strict: !1, start: !0, end: !0 }, Oc = /[.+*?^${}()[\]/\\]/g;

      function Lc(t, e) {
        let o = 0;
        for (; o < t.length && o < e.length;) {
          const n = e[o] - t[o];
          if (n) return n;
          o++
        }
        return t.length < e.length ? 1 === t.length && 80 === t[0] ? -1 : 1 : t.length > e.length ? 1 === e.length && 80 === e[0] ? 1 : -1 : 0
      }

      function Pc(t, e) {
        let o = 0;
        const n = t.score, i = e.score;
        for (; o < n.length && o < i.length;) {
          const t = Lc(n[o], i[o]);
          if (t) return t;
          o++
        }
        if (1 === Math.abs(i.length - n.length)) {
          if (jc(n)) return 1;
          if (jc(i)) return -1
        }
        return i.length - n.length
      }

      function jc(t) {
        const e = t[t.length - 1];
        return t.length > 0 && e[e.length - 1] < 0
      }

      const Bc = { type: 0, value: "" }, Mc = /[a-zA-Z0-9_]/;

      function Nc(t, e, o) {
        const n = function (t, e) {
          const o = Ll({}, Ic, e), n = [];
          let i = o.start ? "^" : "";
          const r = [];
          for (const l of t) {
            const t = l.length ? [] : [90];
            o.strict && !l.length && (i += "/");
            for (let e = 0; e < l.length; e++) {
              const n = l[e];
              let a = 40 + (o.sensitive ? .25 : 0);
              if (0 === n.type) e || (i += "/"), i += n.value.replace(Oc, "\\$&"), a += 40; else if (1 === n.type) {
                const { value: t, repeatable: o, optional: c, regexp: d } = n;
                r.push({ name: t, repeatable: o, optional: c });
                const u = d || Rc;
                if (u !== Rc) {
                  a += 10;
                  try {
                    new RegExp(`(${u})`)
                  } catch (s) {
                    throw new Error(`Invalid custom RegExp for param "${t}" (${u}): ` + s.message)
                  }
                }
                let p = o ? `((?:${u})(?:/(?:${u}))*)` : `(${u})`;
                e || (p = c && l.length < 2 ? `(?:/${p})` : "/" + p), c && (p += "?"), i += p, a += 20, c && (a += -8), o && (a += -20), ".*" === u && (a += -50)
              }
              t.push(a)
            }
            n.push(t)
          }
          if (o.strict && o.end) {
            const t = n.length - 1;
            n[t][n[t].length - 1] += .7000000000000001
          }
          o.strict || (i += "/?"), o.end ? i += "$" : o.strict && (i += "(?:/|$)");
          const a = new RegExp(i, o.sensitive ? "" : "i");
          return {
            re: a, score: n, keys: r, parse: function (t) {
              const e = t.match(a), o = {};
              if (!e) return null;
              for (let n = 1; n < e.length; n++) {
                const t = e[n] || "", i = r[n - 1];
                o[i.name] = t && i.repeatable ? t.split("/") : t
              }
              return o
            }, stringify: function (e) {
              let o = "", n = !1;
              for (const i of t) {
                n && o.endsWith("/") || (o += "/"), n = !1;
                for (const t of i) if (0 === t.type) o += t.value; else if (1 === t.type) {
                  const { value: r, repeatable: a, optional: s } = t, l = r in e ? e[r] : "";
                  if (Bl(l) && !a) throw new Error(`Provided param "${r}" is an array but it is not repeatable (* or + modifiers)`);
                  const c = Bl(l) ? l.join("/") : l;
                  if (!c) {
                    if (!s) throw new Error(`Missing required param "${r}"`);
                    i.length < 2 && (o.endsWith("/") ? o = o.slice(0, -1) : n = !0)
                  }
                  o += c
                }
              }
              return o || "/"
            }
          }
        }(function (t) {
          if (!t) return [[]];
          if ("/" === t) return [[Bc]];
          if (!t.startsWith("/")) throw new Error(`Invalid path "${t}"`);

          function e(t) {
            throw new Error(`ERR (${o})/"${c}": ${t}`)
          }

          let o = 0, n = o;
          const i = [];
          let r;

          function a() {
            r && i.push(r), r = []
          }

          let s, l = 0, c = "", d = "";

          function u() {
            c && (0 === o ? r.push({
              type: 0,
              value: c
            }) : 1 === o || 2 === o || 3 === o ? (r.length > 1 && ("*" === s || "+" === s) && e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`), r.push({
              type: 1,
              value: c,
              regexp: d,
              repeatable: "*" === s || "+" === s,
              optional: "*" === s || "?" === s
            })) : e("Invalid state to consume buffer"), c = "")
          }

          function p() {
            c += s
          }

          for (; l < t.length;) if (s = t[l++], "\\" !== s || 2 === o) switch (o) {
            case 0:
              "/" === s ? (c && u(), a()) : ":" === s ? (u(), o = 1) : p();
              break;
            case 4:
              p(), o = n;
              break;
            case 1:
              "(" === s ? o = 2 : Mc.test(s) ? p() : (u(), o = 0, "*" !== s && "?" !== s && "+" !== s && l--);
              break;
            case 2:
              ")" === s ? "\\" == d[d.length - 1] ? d = d.slice(0, -1) + s : o = 3 : d += s;
              break;
            case 3:
              u(), o = 0, "*" !== s && "?" !== s && "+" !== s && l--, d = "";
              break;
            default:
              e("Unknown state")
          } else n = o, o = 4;
          return 2 === o && e(`Unfinished custom RegExp for param "${c}"`), u(), a(), i
        }(t.path), o), i = Ll(n, { record: t, parent: e, children: [], alias: [] });
        return e && !i.record.aliasOf == !e.record.aliasOf && e.children.push(i), i
      }

      function Vc(t, e) {
        const o = [], n = new Map;

        function i(t, o, n) {
          const s = !n, l = function (t) {
            return {
              path: t.path,
              redirect: t.redirect,
              name: t.name,
              meta: t.meta || {},
              aliasOf: void 0,
              beforeEnter: t.beforeEnter,
              props: Hc(t),
              children: t.children || [],
              instances: {},
              leaveGuards: new Set,
              updateGuards: new Set,
              enterCallbacks: {},
              components: "components" in t ? t.components || null : t.component && { default: t.component }
            }
          }(t);
          l.aliasOf = n && n.record;
          const c = qc(e, t), d = [l];
          if ("alias" in t) {
            const e = "string" == typeof t.alias ? [t.alias] : t.alias;
            for (const t of e) d.push(Ll({}, l, {
              components: n ? n.record.components : l.components,
              path: t,
              aliasOf: n ? n.record : l
            }))
          }
          let u, p;
          for (const e of d) {
            const { path: d } = e;
            if (o && "/" !== d[0]) {
              const t = o.record.path, n = "/" === t[t.length - 1] ? "" : "/";
              e.path = o.record.path + (d && n + d)
            }
            if (u = Nc(e, o, c), n ? n.alias.push(u) : (p = p || u, p !== u && p.alias.push(u), s && t.name && !Dc(u) && r(t.name)), l.children) {
              const t = l.children;
              for (let e = 0; e < t.length; e++) i(t[e], u, n && n.children[e])
            }
            n = n || u, (u.record.components && Object.keys(u.record.components).length || u.record.name || u.record.redirect) && a(u)
          }
          return p ? () => {
            r(p)
          } : jl
        }

        function r(t) {
          if (_c(t)) {
            const e = n.get(t);
            e && (n.delete(t), o.splice(o.indexOf(e), 1), e.children.forEach(r), e.alias.forEach(r))
          } else {
            const e = o.indexOf(t);
            e > -1 && (o.splice(e, 1), t.record.name && n.delete(t.record.name), t.children.forEach(r), t.alias.forEach(r))
          }
        }

        function a(t) {
          let e = 0;
          for (; e < o.length && Pc(t, o[e]) >= 0 && (t.record.path !== o[e].record.path || !Uc(t, o[e]));) e++;
          o.splice(e, 0, t), t.record.name && !Dc(t) && n.set(t.record.name, t)
        }

        return e = qc({ strict: !1, end: !0, sensitive: !1 }, e), t.forEach((t => i(t))), {
          addRoute: i,
          resolve: function (t, e) {
            let i, r, a, s = {};
            if ("name" in t && t.name) {
              if (i = n.get(t.name), !i) throw zc(1, { location: t });
              a = i.record.name, s = Ll(Fc(e.params, i.keys.filter((t => !t.optional)).concat(i.parent ? i.parent.keys.filter((t => t.optional)) : []).map((t => t.name))), t.params && Fc(t.params, i.keys.map((t => t.name)))), r = i.stringify(s)
            } else if (null != t.path) r = t.path, i = o.find((t => t.re.test(r))), i && (s = i.parse(r), a = i.record.name); else {
              if (i = e.name ? n.get(e.name) : o.find((t => t.re.test(e.path))), !i) throw zc(1, {
                location: t,
                currentLocation: e
              });
              a = i.record.name, s = Ll({}, e.params, t.params), r = i.stringify(s)
            }
            const l = [];
            let c = i;
            for (; c;) l.unshift(c.record), c = c.parent;
            return { name: a, path: r, params: s, matched: l, meta: Wc(l) }
          },
          removeRoute: r,
          getRoutes: function () {
            return o
          },
          getRecordMatcher: function (t) {
            return n.get(t)
          }
        }
      }

      function Fc(t, e) {
        const o = {};
        for (const n of e) n in t && (o[n] = t[n]);
        return o
      }

      function Hc(t) {
        const e = {}, o = t.props || !1;
        if ("component" in t) e.default = o; else for (const n in t.components) e[n] = "object" == typeof o ? o[n] : o;
        return e
      }

      function Dc(t) {
        for (; t;) {
          if (t.record.aliasOf) return !0;
          t = t.parent
        }
        return !1
      }

      function Wc(t) {
        return t.reduce(((t, e) => Ll(t, e.meta)), {})
      }

      function qc(t, e) {
        const o = {};
        for (const n in t) o[n] = n in e ? e[n] : t[n];
        return o
      }

      function Uc(t, e) {
        return e.children.some((e => e === t || Uc(t, e)))
      }

      function Gc(t) {
        const e = {};
        if ("" === t || "?" === t) return e;
        const o = ("?" === t[0] ? t.slice(1) : t).split("&");
        for (let n = 0; n < o.length; ++n) {
          const t = o[n].replace(Dl, " "), i = t.indexOf("="), r = ec(i < 0 ? t : t.slice(0, i)),
            a = i < 0 ? null : ec(t.slice(i + 1));
          if (r in e) {
            let t = e[r];
            Bl(t) || (t = e[r] = [t]), t.push(a)
          } else e[r] = a
        }
        return e
      }

      function Xc(t) {
        let e = "";
        for (let o in t) {
          const n = t[o];
          (o = Jl(o).replace(Fl, "%3D"), null != n) ? (Bl(n) ? n.map((t => t && Jl(t))) : [n && Jl(n)]).forEach((t => {
            void 0 !== t && (e += (e.length ? "&" : "") + o, null != t && (e += "=" + t))
          })) : void 0 !== n && (e += (e.length ? "&" : "") + o)
        }
        return e
      }

      function Yc(t) {
        const e = {};
        for (const o in t) {
          const n = t[o];
          void 0 !== n && (e[o] = Bl(n) ? n.map((t => null == t ? null : "" + t)) : null == n ? n : "" + n)
        }
        return e
      }

      const Kc = Symbol(""), Zc = Symbol(""), Qc = Symbol(""), Jc = Symbol(""), td = Symbol("");

      function ed() {
        let t = [];
        return {
          add: function (e) {
            return t.push(e), () => {
              const o = t.indexOf(e);
              o > -1 && t.splice(o, 1)
            }
          }, list: () => t.slice(), reset: function () {
            t = []
          }
        }
      }

      function od(t, e, o, n, i, r = (t => t())) {
        const a = n && (n.enterCallbacks[i] = n.enterCallbacks[i] || []);
        return () => new Promise(((s, l) => {
          const c = t => {
            var r;
            !1 === t ? l(zc(4, {
              from: o,
              to: e
            })) : t instanceof Error ? l(t) : "string" == typeof (r = t) || r && "object" == typeof r ? l(zc(2, {
              from: e,
              to: t
            })) : (a && n.enterCallbacks[i] === a && "function" == typeof t && a.push(t), s())
          }, d = r((() => t.call(n && n.instances[i], e, o, c)));
          let u = Promise.resolve(d);
          t.length < 3 && (u = u.then(c)), u.catch((t => l(t)))
        }))
      }

      function nd(t, e, o, n, i = (t => t())) {
        const r = [];
        for (const s of t) for (const t in s.components) {
          let l = s.components[t];
          if ("beforeRouteEnter" === e || s.instances[t]) if ("object" == typeof (a = l) || "displayName" in a || "props" in a || "__vccOpts" in a) {
            const a = (l.__vccOpts || l)[e];
            a && r.push(od(a, o, n, s, t, i))
          } else {
            let a = l();
            r.push((() => a.then((r => {
              if (!r) return Promise.reject(new Error(`Couldn't resolve component "${t}" at "${s.path}"`));
              const a = (l = r).__esModule || "Module" === l[Symbol.toStringTag] ? r.default : r;
              var l;
              s.components[t] = a;
              const c = (a.__vccOpts || a)[e];
              return c && od(c, o, n, s, t, i)()
            }))))
          }
        }
        var a;
        return r
      }

      function id(t) {
        const e = tn(Qc), o = tn(Jc), n = fi((() => e.resolve(ke(t.to)))), i = fi((() => {
            const { matched: t } = n.value, { length: e } = t, i = t[e - 1], r = o.matched;
            if (!i || !r.length) return -1;
            const a = r.findIndex(ac.bind(null, i));
            if (a > -1) return a;
            const s = ad(t[e - 2]);
            return e > 1 && ad(i) === s && r[r.length - 1].path !== s ? r.findIndex(ac.bind(null, t[e - 2])) : a
          })), r = fi((() => i.value > -1 && function (t, e) {
            for (const o in e) {
              const n = e[o], i = t[o];
              if ("string" == typeof n) {
                if (n !== i) return !1
              } else if (!Bl(i) || i.length !== n.length || n.some(((t, e) => t !== i[e]))) return !1
            }
            return !0
          }(o.params, n.value.params))),
          a = fi((() => i.value > -1 && i.value === o.matched.length - 1 && sc(o.params, n.value.params)));
        return {
          route: n, href: fi((() => n.value.href)), isActive: r, isExactActive: a, navigate: function (o = {}) {
            return function (t) {
              if (!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey || t.defaultPrevented || void 0 !== t.button && 0 !== t.button)) {
                if (t.currentTarget && t.currentTarget.getAttribute) {
                  const e = t.currentTarget.getAttribute("target");
                  if (/\b_blank\b/i.test(e)) return
                }
                return t.preventDefault && t.preventDefault(), !0
              }
            }(o) ? e[ke(t.replace) ? "replace" : "push"](ke(t.to)).catch(jl) : Promise.resolve()
          }
        }
      }

      const rd = ho({
        name: "RouterLink",
        compatConfig: { MODE: 3 },
        props: {
          to: { type: [String, Object], required: !0 },
          replace: Boolean,
          activeClass: String,
          exactActiveClass: String,
          custom: Boolean,
          ariaCurrentValue: { type: String, default: "page" }
        },
        useLink: id,
        setup(t, { slots: e }) {
          const o = oe(id(t)), { options: n } = tn(Qc), i = fi((() => ({
            [sd(t.activeClass, n.linkActiveClass, "router-link-active")]: o.isActive,
            [sd(t.exactActiveClass, n.linkExactActiveClass, "router-link-exact-active")]: o.isExactActive
          })));
          return () => {
            const n = e.default && e.default(o);
            return t.custom ? n : mi("a", {
              "aria-current": o.isExactActive ? t.ariaCurrentValue : null,
              href: o.href,
              onClick: o.navigate,
              class: i.value
            }, n)
          }
        }
      });

      function ad(t) {
        return t ? t.aliasOf ? t.aliasOf.path : t.path : ""
      }

      const sd = (t, e, o) => null != t ? t : null != e ? e : o;

      function ld(t, e) {
        if (!t) return null;
        const o = t(e);
        return 1 === o.length ? o[0] : o
      }

      const cd = ho({
        name: "RouterView",
        inheritAttrs: !1,
        props: { name: { type: String, default: "default" }, route: Object },
        compatConfig: { MODE: 3 },
        setup(t, { attrs: e, slots: o }) {
          const n = tn(td), i = fi((() => t.route || n.value)), r = tn(Zc, 0), a = fi((() => {
            let t = ke(r);
            const { matched: e } = i.value;
            let o;
            for (; (o = e[t]) && !o.components;) t++;
            return t
          })), s = fi((() => i.value.matched[a.value]));
          Jo(Zc, fi((() => a.value + 1))), Jo(Kc, s), Jo(td, i);
          const l = ve();
          return ao((() => [l.value, s.value, t.name]), (([t, e, o], [n, i, r]) => {
            e && (e.instances[o] = t, i && i !== e && t && t === n && (e.leaveGuards.size || (e.leaveGuards = i.leaveGuards), e.updateGuards.size || (e.updateGuards = i.updateGuards))), !t || !e || i && ac(e, i) && n || (e.enterCallbacks[o] || []).forEach((e => e(t)))
          }), { flush: "post" }), () => {
            const n = i.value, r = t.name, a = s.value, c = a && a.components[r];
            if (!c) return ld(o.default, { Component: c, route: n });
            const d = a.props[r], u = d ? !0 === d ? n.params : "function" == typeof d ? d(n) : d : null,
              p = mi(c, Ll({}, u, e, {
                onVnodeUnmounted: t => {
                  t.component.isUnmounted && (a.instances[r] = null)
                }, ref: l
              }));
            return ld(o.default, { Component: p, route: n }) || p
          }
        }
      });

      function dd(t) {
        const e = Vc(t.routes, t), o = t.parseQuery || Gc, n = t.stringifyQuery || Xc, i = t.history, r = ed(),
          a = ed(), s = ed(), l = ye(Cc);
        let c = Cc;
        Ol && t.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
        const d = Pl.bind(null, (t => "" + t)), u = Pl.bind(null, tc), p = Pl.bind(null, ec);

        function h(t, r) {
          if (r = Ll({}, r || l.value), "string" == typeof t) {
            const n = ic(o, t, r.path), a = e.resolve({ path: n.path }, r), s = i.createHref(n.fullPath);
            return Ll(n, a, { params: p(a.params), hash: ec(n.hash), redirectedFrom: void 0, href: s })
          }
          let a;
          if (null != t.path) a = Ll({}, t, { path: ic(o, t.path, r.path).path }); else {
            const e = Ll({}, t.params);
            for (const t in e) null == e[t] && delete e[t];
            a = Ll({}, t, { params: u(e) }), r.params = u(r.params)
          }
          const s = e.resolve(a, r), c = t.hash || "";
          s.params = d(p(s.params));
          const h = function (t, e) {
            const o = e.query ? t(e.query) : "";
            return e.path + (o && "?") + o + (e.hash || "")
          }(n, Ll({}, t, { hash: (f = c, Ql(f).replace(Xl, "{").replace(Kl, "}").replace(Ul, "^")), path: s.path }));
          var f;
          const m = i.createHref(h);
          return Ll({
            fullPath: h,
            hash: c,
            query: n === Xc ? Yc(t.query) : t.query || {}
          }, s, { redirectedFrom: void 0, href: m })
        }

        function f(t) {
          return "string" == typeof t ? ic(o, t, l.value.path) : Ll({}, t)
        }

        function m(t, e) {
          if (c !== t) return zc(8, { from: e, to: t })
        }

        function g(t) {
          return v(t)
        }

        function b(t) {
          const e = t.matched[t.matched.length - 1];
          if (e && e.redirect) {
            const { redirect: o } = e;
            let n = "function" == typeof o ? o(t) : o;
            return "string" == typeof n && (n = n.includes("?") || n.includes("#") ? n = f(n) : { path: n }, n.params = {}), Ll({
              query: t.query,
              hash: t.hash,
              params: null != n.path ? {} : t.params
            }, n)
          }
        }

        function v(t, e) {
          const o = c = h(t), i = l.value, r = t.state, a = t.force, s = !0 === t.replace, d = b(o);
          if (d) return v(Ll(f(d), {
            state: "object" == typeof d ? Ll({}, r, d.state) : r,
            force: a,
            replace: s
          }), e || o);
          const u = o;
          let p;
          return u.redirectedFrom = e, !a && function (t, e, o) {
            const n = e.matched.length - 1, i = o.matched.length - 1;
            return n > -1 && n === i && ac(e.matched[n], o.matched[i]) && sc(e.params, o.params) && t(e.query) === t(o.query) && e.hash === o.hash
          }(n, i, o) && (p = zc(16, {
            to: u,
            from: i
          }), R(i, i, !0, !1)), (p ? Promise.resolve(p) : w(u, i)).catch((t => Ac(t) ? Ac(t, 2) ? t : A(t) : z(t, u, i))).then((t => {
            if (t) {
              if (Ac(t, 2)) return v(Ll({ replace: s }, f(t.to), {
                state: "object" == typeof t.to ? Ll({}, r, t.to.state) : r,
                force: a
              }), e || u)
            } else t = $(u, i, !0, s, r);
            return k(u, i, t), t
          }))
        }

        function y(t, e) {
          const o = m(t, e);
          return o ? Promise.reject(o) : Promise.resolve()
        }

        function x(t) {
          const e = L.values().next().value;
          return e && "function" == typeof e.runWithContext ? e.runWithContext(t) : t()
        }

        function w(t, e) {
          let o;
          const [n, i, s] = function (t, e) {
            const o = [], n = [], i = [], r = Math.max(e.matched.length, t.matched.length);
            for (let a = 0; a < r; a++) {
              const r = e.matched[a];
              r && (t.matched.find((t => ac(t, r))) ? n.push(r) : o.push(r));
              const s = t.matched[a];
              s && (e.matched.find((t => ac(t, s))) || i.push(s))
            }
            return [o, n, i]
          }(t, e);
          o = nd(n.reverse(), "beforeRouteLeave", t, e);
          for (const r of n) r.leaveGuards.forEach((n => {
            o.push(od(n, t, e))
          }));
          const l = y.bind(null, t, e);
          return o.push(l), j(o).then((() => {
            o = [];
            for (const n of r.list()) o.push(od(n, t, e));
            return o.push(l), j(o)
          })).then((() => {
            o = nd(i, "beforeRouteUpdate", t, e);
            for (const n of i) n.updateGuards.forEach((n => {
              o.push(od(n, t, e))
            }));
            return o.push(l), j(o)
          })).then((() => {
            o = [];
            for (const n of s) if (n.beforeEnter) if (Bl(n.beforeEnter)) for (const i of n.beforeEnter) o.push(od(i, t, e)); else o.push(od(n.beforeEnter, t, e));
            return o.push(l), j(o)
          })).then((() => (t.matched.forEach((t => t.enterCallbacks = {})), o = nd(s, "beforeRouteEnter", t, e, x), o.push(l), j(o)))).then((() => {
            o = [];
            for (const n of a.list()) o.push(od(n, t, e));
            return o.push(l), j(o)
          })).catch((t => Ac(t, 8) ? t : Promise.reject(t)))
        }

        function k(t, e, o) {
          s.list().forEach((n => x((() => n(t, e, o)))))
        }

        function $(t, e, o, n, r) {
          const a = m(t, e);
          if (a) return a;
          const s = e === Cc, c = Ol ? history.state : {};
          o && (n || s ? i.replace(t.fullPath, Ll({ scroll: s && c && c.scroll }, r)) : i.push(t.fullPath, r)), l.value = t, R(t, e, o, s), A()
        }

        let _;

        function C() {
          _ || (_ = i.listen(((t, e, o) => {
            if (!P.listening) return;
            const n = h(t), r = b(n);
            if (r) return void v(Ll(r, { replace: !0 }), n).catch(jl);
            c = n;
            const a = l.value;
            var s, d;
            Ol && (s = vc(a.fullPath, o.delta), d = gc(), yc.set(s, d)), w(n, a).catch((t => Ac(t, 12) ? t : Ac(t, 2) ? (v(t.to, n).then((t => {
              Ac(t, 20) && !o.delta && o.type === dc.pop && i.go(-1, !1)
            })).catch(jl), Promise.reject()) : (o.delta && i.go(-o.delta, !1), z(t, n, a)))).then((t => {
              (t = t || $(n, a, !1)) && (o.delta && !Ac(t, 8) ? i.go(-o.delta, !1) : o.type === dc.pop && Ac(t, 20) && i.go(-1, !1)), k(n, a, t)
            })).catch(jl)
          })))
        }

        let S, E = ed(), T = ed();

        function z(t, e, o) {
          A(t);
          const n = T.list();
          return n.length ? n.forEach((n => n(t, e, o))) : console.error(t), Promise.reject(t)
        }

        function A(t) {
          return S || (S = !t, C(), E.list().forEach((([e, o]) => t ? o(t) : e())), E.reset()), t
        }

        function R(e, o, n, i) {
          const { scrollBehavior: r } = t;
          if (!Ol || !r) return Promise.resolve();
          const a = !n && function (t) {
            const e = yc.get(t);
            return yc.delete(t), e
          }(vc(e.fullPath, 0)) || (i || !n) && history.state && history.state.scroll || null;
          return Be().then((() => r(e, o, a))).then((t => t && bc(t))).catch((t => z(t, e, o)))
        }

        const I = t => i.go(t);
        let O;
        const L = new Set, P = {
          currentRoute: l,
          listening: !0,
          addRoute: function (t, o) {
            let n, i;
            return _c(t) ? (n = e.getRecordMatcher(t), i = o) : i = t, e.addRoute(i, n)
          },
          removeRoute: function (t) {
            const o = e.getRecordMatcher(t);
            o && e.removeRoute(o)
          },
          hasRoute: function (t) {
            return !!e.getRecordMatcher(t)
          },
          getRoutes: function () {
            return e.getRoutes().map((t => t.record))
          },
          resolve: h,
          options: t,
          push: g,
          replace: function (t) {
            return g(Ll(f(t), { replace: !0 }))
          },
          go: I,
          back: () => I(-1),
          forward: () => I(1),
          beforeEach: r.add,
          beforeResolve: a.add,
          afterEach: s.add,
          onError: T.add,
          isReady: function () {
            return S && l.value !== Cc ? Promise.resolve() : new Promise(((t, e) => {
              E.add([t, e])
            }))
          },
          install(t) {
            t.component("RouterLink", rd), t.component("RouterView", cd), t.config.globalProperties.$router = this, Object.defineProperty(t.config.globalProperties, "$route", {
              enumerable: !0,
              get: () => ke(l)
            }), Ol && !O && l.value === Cc && (O = !0, g(i.location).catch((t => {
            })));
            const e = {};
            for (const n in Cc) Object.defineProperty(e, n, { get: () => l.value[n], enumerable: !0 });
            t.provide(Qc, this), t.provide(Jc, ne(e)), t.provide(td, l);
            const o = t.unmount;
            L.add(t), t.unmount = function () {
              L.delete(t), L.size < 1 && (c = Cc, _ && _(), _ = null, l.value = Cc, O = !1, S = !1), o()
            }
          }
        };

        function j(t) {
          return t.reduce(((t, e) => t.then((() => x(e)))), Promise.resolve())
        }

        return P
      }

      /*!
             * (C) Ionic http://ionicframework.com - MIT License
             */
      const ud = qr(class extends ra {
          constructor() {
            super(), this.__registerHost(), this.__attachShadow(), this.ionTabButtonClick = sr(this, "ionTabButtonClick", 7), this.inheritedAttributes = {}, this.onKeyUp = t => {
              "Enter" !== t.key && " " !== t.key || this.selectTab(t)
            }, this.onClick = t => {
              this.selectTab(t)
            }, this.disabled = !1, this.download = void 0, this.href = void 0, this.rel = void 0, this.layout = void 0, this.selected = !1, this.tab = void 0, this.target = void 0
          }

          static get style() {
            return {
              ios: ':host{--ripple-color:var(--color-selected);--background-focused-opacity:1;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;outline:none;background:var(--background);color:var(--color)}.button-native{border-radius:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;border:0;outline:none;background:transparent;text-decoration:none;cursor:pointer;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;z-index:1}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){a:hover{color:var(--color-selected)}}:host(.tab-selected){color:var(--color-selected)}:host(.tab-hidden){display:none !important}:host(.tab-disabled){pointer-events:none;opacity:0.4}::slotted(ion-label),::slotted(ion-icon){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-label){-ms-flex-order:0;order:0}::slotted(ion-icon){-ms-flex-order:-1;order:-1;height:1em}:host(.tab-has-label-only) ::slotted(ion-label){white-space:normal}::slotted(ion-badge){-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1}:host(.tab-layout-icon-start){-ms-flex-direction:row;flex-direction:row}:host(.tab-layout-icon-end){-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.tab-layout-icon-bottom){-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.tab-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.tab-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color)}:host{--padding-top:0;--padding-end:2px;--padding-bottom:0;--padding-start:2px;max-width:240px;font-size:10px}::slotted(ion-badge){-webkit-padding-start:6px;padding-inline-start:6px;-webkit-padding-end:6px;padding-inline-end:6px;padding-top:1px;padding-bottom:1px;top:4px;height:auto;font-size:12px;line-height:16px}@supports (inset-inline-start: 0){::slotted(ion-badge){inset-inline-start:calc(50% + 6px)}}@supports not (inset-inline-start: 0){::slotted(ion-badge){left:calc(50% + 6px)}:host-context([dir=rtl]) ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 6px)}[dir=rtl] ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 6px)}@supports selector(:dir(rtl)){::slotted(ion-badge):dir(rtl){left:unset;right:unset;right:calc(50% + 6px)}}}::slotted(ion-icon){margin-top:2px;margin-bottom:2px;font-size:30px}::slotted(ion-icon::before){vertical-align:top}::slotted(ion-label){margin-top:0;margin-bottom:1px;min-height:11px;font-weight:500}:host(.tab-has-label-only) ::slotted(ion-label){margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:12px;font-size:14px;line-height:1.1}:host(.tab-layout-icon-end) ::slotted(ion-label),:host(.tab-layout-icon-start) ::slotted(ion-label),:host(.tab-layout-icon-hide) ::slotted(ion-label){margin-top:2px;margin-bottom:2px;font-size:14px;line-height:1.1}:host(.tab-layout-icon-end) ::slotted(ion-icon),:host(.tab-layout-icon-start) ::slotted(ion-icon){min-width:24px;height:26px;margin-top:2px;margin-bottom:1px;font-size:24px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-bottom) ::slotted(ion-badge){inset-inline-start:calc(50% + 12px)}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-bottom) ::slotted(ion-badge){left:calc(50% + 12px)}:host-context([dir=rtl]):host(.tab-layout-icon-bottom) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-bottom ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 12px)}@supports selector(:dir(rtl)){:host(.tab-layout-icon-bottom:dir(rtl)) ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 12px)}}}:host(.tab-layout-icon-bottom) ::slotted(ion-icon){margin-top:0;margin-bottom:1px}:host(.tab-layout-icon-bottom) ::slotted(ion-label){margin-top:4px}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){top:10px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){inset-inline-start:calc(50% + 35px)}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){left:calc(50% + 35px)}:host-context([dir=rtl]):host(.tab-layout-icon-start) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-start ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-layout-icon-end) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-end ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 35px)}@supports selector(:dir(rtl)){:host(.tab-layout-icon-start:dir(rtl)) ::slotted(ion-badge),:host(.tab-layout-icon-end:dir(rtl)) ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 35px)}}}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){top:10px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){inset-inline-start:calc(50% + 30px)}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){left:calc(50% + 30px)}:host-context([dir=rtl]):host(.tab-layout-icon-hide) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-hide ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-has-label-only) ::slotted(ion-badge),:host-context([dir=rtl]).tab-has-label-only ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 30px)}@supports selector(:dir(rtl)){:host(.tab-layout-icon-hide:dir(rtl)) ::slotted(ion-badge),:host(.tab-has-label-only:dir(rtl)) ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 30px)}}}:host(.tab-layout-label-hide) ::slotted(ion-badge),:host(.tab-has-icon-only) ::slotted(ion-badge){top:10px}:host(.tab-layout-label-hide) ::slotted(ion-icon){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}',
              md: ':host{--ripple-color:var(--color-selected);--background-focused-opacity:1;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;outline:none;background:var(--background);color:var(--color)}.button-native{border-radius:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;border:0;outline:none;background:transparent;text-decoration:none;cursor:pointer;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;z-index:1}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){a:hover{color:var(--color-selected)}}:host(.tab-selected){color:var(--color-selected)}:host(.tab-hidden){display:none !important}:host(.tab-disabled){pointer-events:none;opacity:0.4}::slotted(ion-label),::slotted(ion-icon){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-label){-ms-flex-order:0;order:0}::slotted(ion-icon){-ms-flex-order:-1;order:-1;height:1em}:host(.tab-has-label-only) ::slotted(ion-label){white-space:normal}::slotted(ion-badge){-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1}:host(.tab-layout-icon-start){-ms-flex-direction:row;flex-direction:row}:host(.tab-layout-icon-end){-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.tab-layout-icon-bottom){-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.tab-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.tab-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color)}:host{--padding-top:0;--padding-end:12px;--padding-bottom:0;--padding-start:12px;max-width:168px;font-size:12px;font-weight:normal;letter-spacing:0.03em}::slotted(ion-label){margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;text-transform:none}::slotted(ion-icon){margin-left:0;margin-right:0;margin-top:16px;margin-bottom:16px;-webkit-transform-origin:center center;transform-origin:center center;font-size:22px}:host-context([dir=rtl]) ::slotted(ion-icon){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}[dir=rtl] ::slotted(ion-icon){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}@supports selector(:dir(rtl)){::slotted(ion-icon):dir(rtl){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}}::slotted(ion-badge){border-radius:8px;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:2px;padding-inline-end:2px;padding-top:3px;padding-bottom:2px;top:8px;min-width:12px;font-size:8px;font-weight:normal}@supports (inset-inline-start: 0){::slotted(ion-badge){inset-inline-start:calc(50% + 6px)}}@supports not (inset-inline-start: 0){::slotted(ion-badge){left:calc(50% + 6px)}:host-context([dir=rtl]) ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 6px)}[dir=rtl] ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 6px)}@supports selector(:dir(rtl)){::slotted(ion-badge):dir(rtl){left:unset;right:unset;right:calc(50% + 6px)}}}::slotted(ion-badge:empty){display:block;min-width:8px;height:8px}:host(.tab-layout-icon-top) ::slotted(ion-icon){margin-top:6px;margin-bottom:2px}:host(.tab-layout-icon-top) ::slotted(ion-label){margin-top:0;margin-bottom:6px}:host(.tab-layout-icon-bottom) ::slotted(ion-badge){top:8px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-bottom) ::slotted(ion-badge){inset-inline-start:70%}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-bottom) ::slotted(ion-badge){left:70%}:host-context([dir=rtl]):host(.tab-layout-icon-bottom) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-bottom ::slotted(ion-badge){left:unset;right:unset;right:70%}@supports selector(:dir(rtl)){:host(.tab-layout-icon-bottom:dir(rtl)) ::slotted(ion-badge){left:unset;right:unset;right:70%}}}:host(.tab-layout-icon-bottom) ::slotted(ion-icon){margin-top:0;margin-bottom:6px}:host(.tab-layout-icon-bottom) ::slotted(ion-label){margin-top:6px;margin-bottom:0}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){top:16px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){inset-inline-start:80%}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){left:80%}:host-context([dir=rtl]):host(.tab-layout-icon-start) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-start ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-layout-icon-end) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-end ::slotted(ion-badge){left:unset;right:unset;right:80%}@supports selector(:dir(rtl)){:host(.tab-layout-icon-start:dir(rtl)) ::slotted(ion-badge),:host(.tab-layout-icon-end:dir(rtl)) ::slotted(ion-badge){left:unset;right:unset;right:80%}}}:host(.tab-layout-icon-start) ::slotted(ion-icon){-webkit-margin-end:6px;margin-inline-end:6px}:host(.tab-layout-icon-end) ::slotted(ion-icon){-webkit-margin-start:6px;margin-inline-start:6px}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){top:16px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){inset-inline-start:70%}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){left:70%}:host-context([dir=rtl]):host(.tab-layout-icon-hide) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-hide ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-has-label-only) ::slotted(ion-badge),:host-context([dir=rtl]).tab-has-label-only ::slotted(ion-badge){left:unset;right:unset;right:70%}@supports selector(:dir(rtl)){:host(.tab-layout-icon-hide:dir(rtl)) ::slotted(ion-badge),:host(.tab-has-label-only:dir(rtl)) ::slotted(ion-badge){left:unset;right:unset;right:70%}}}:host(.tab-layout-icon-hide) ::slotted(ion-label),:host(.tab-has-label-only) ::slotted(ion-label){margin-top:0;margin-bottom:0}:host(.tab-layout-label-hide) ::slotted(ion-badge),:host(.tab-has-icon-only) ::slotted(ion-badge){top:16px}:host(.tab-layout-label-hide) ::slotted(ion-icon),:host(.tab-has-icon-only) ::slotted(ion-icon){margin-top:0;margin-bottom:0;font-size:24px}'
            }
          }

          get hasLabel() {
            return !!this.el.querySelector("ion-label")
          }

          get hasIcon() {
            return !!this.el.querySelector("ion-icon")
          }

          get el() {
            return this
          }

          onTabBarChanged(t) {
            const e = t.target, o = this.el.parentElement;
            (t.composedPath().includes(o) || (null == e ? void 0 : e.contains(this.el))) && (this.selected = this.tab === t.detail.tab)
          }

          componentWillLoad() {
            this.inheritedAttributes = Object.assign({}, ya(this.el, ["aria-label"])), void 0 === this.layout && (this.layout = Ea.get("tabButtonLayout", "icon-top"))
          }

          selectTab(t) {
            void 0 !== this.tab && (this.disabled || this.ionTabButtonClick.emit({
              tab: this.tab,
              href: this.href,
              selected: this.selected
            }), t.preventDefault())
          }

          render() {
            const {
              disabled: t,
              hasIcon: e,
              hasLabel: o,
              href: n,
              rel: i,
              target: r,
              layout: a,
              selected: s,
              tab: l,
              inheritedAttributes: c
            } = this, d = Wa(this), u = { download: this.download, href: n, rel: i, target: r };
            return er(nr, {
              key: "32ec1fb183523dadaaed6689add4a042d0fdd69a",
              onClick: this.onClick,
              onKeyup: this.onKeyUp,
              id: void 0 !== l ? `tab-button-${l}` : null,
              class: {
                [d]: !0,
                "tab-selected": s,
                "tab-disabled": t,
                "tab-has-label": o,
                "tab-has-icon": e,
                "tab-has-label-only": o && !e,
                "tab-has-icon-only": e && !o,
                [`tab-layout-${a}`]: !0,
                "ion-activatable": !0,
                "ion-selectable": !0,
                "ion-focusable": !0
              }
            }, er("a", Object.assign({ key: "9e56304c52e30ae3a3dca434fa0b41eccc873faa" }, u, {
              class: "button-native",
              part: "native",
              role: "tab",
              "aria-selected": s ? "true" : null,
              "aria-disabled": t ? "true" : null,
              tabindex: t ? "-1" : void 0
            }, c), er("span", {
              key: "34eae18c23584742a25d20b4038aa1742d9ab0d8",
              class: "button-inner"
            }, er("slot", { key: "4bc9629861f5ce3f1ef87ac77bc027ba0dea694c" })), "md" === d && er("ion-ripple-effect", { type: "unbounded" })))
          }
        }, [33, "ion-tab-button", {
          disabled: [4],
          download: [1],
          href: [1],
          rel: [1],
          layout: [1025],
          selected: [1028],
          tab: [1],
          target: [1]
        }, [[8, "ionTabBarChanged", "onTabBarChanged"]]]), pd = function () {
          "undefined" != typeof customElements && ["ion-tab-button", "ion-ripple-effect"].forEach((t => {
            switch (t) {
              case"ion-tab-button":
                customElements.get(t) || customElements.define(t, ud);
                break;
              case"ion-ripple-effect":
                customElements.get(t) || fs()
            }
          }))
        }, hd = qr(class extends ra {
          constructor() {
            super(), this.__registerHost(), this.__attachShadow(), this.ionTabBarChanged = sr(this, "ionTabBarChanged", 7), this.ionTabBarLoaded = sr(this, "ionTabBarLoaded", 7), this.keyboardCtrl = null, this.keyboardVisible = !1, this.color = void 0, this.selectedTab = void 0, this.translucent = !1
          }

          static get watchers() {
            return { selectedTab: ["selectedTabChanged"] }
          }

          static get style() {
            return {
              ios: ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-right:var(--ion-safe-area-right);padding-bottom:var(--ion-safe-area-bottom, 0);padding-left:var(--ion-safe-area-left);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb), 0.7)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-top:var(--ion-safe-area-top, 0);padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none !important}:host{--background:var(--ion-tab-bar-background, var(--ion-color-step-50, #f7f7f7));--background-focused:var(--ion-tab-bar-background-focused, #e0e0e0);--border:0.55px solid var(--ion-tab-bar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.2))));--color:var(--ion-tab-bar-color, var(--ion-color-step-600, #666666));--color-selected:var(--ion-tab-bar-color-selected, var(--ion-color-primary, #3880ff));height:50px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.tab-bar-translucent){--background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(210%) blur(20px);backdrop-filter:saturate(210%) blur(20px)}:host(.ion-color.tab-bar-translucent){background:rgba(var(--ion-color-base-rgb), 0.8)}:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.6)}}",
              md: ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-right:var(--ion-safe-area-right);padding-bottom:var(--ion-safe-area-bottom, 0);padding-left:var(--ion-safe-area-left);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb), 0.7)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-top:var(--ion-safe-area-top, 0);padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none !important}:host{--background:var(--ion-tab-bar-background, var(--ion-background-color, #fff));--background-focused:var(--ion-tab-bar-background-focused, #e0e0e0);--border:1px solid var(--ion-tab-bar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.07))));--color:var(--ion-tab-bar-color, var(--ion-color-step-650, #595959));--color-selected:var(--ion-tab-bar-color-selected, var(--ion-color-primary, #3880ff));height:56px}"
            }
          }

          get el() {
            return this
          }

          selectedTabChanged() {
            void 0 !== this.selectedTab && this.ionTabBarChanged.emit({ tab: this.selectedTab })
          }

          componentWillLoad() {
            this.selectedTabChanged()
          }

          async connectedCallback() {
            this.keyboardCtrl = await (async t => {
              let e, o, n, i;
              const r = async () => {
                const t = await nl.getResizeMode(), r = void 0 === t ? void 0 : t.mode;
                e = () => {
                  void 0 === i && (i = rl(r)), n = !0, a(n, r)
                }, o = () => {
                  n = !1, a(n, r)
                }, null == ks || ks.addEventListener("keyboardWillShow", e), null == ks || ks.addEventListener("keyboardWillHide", o)
              }, a = (e, o) => {
                t && t(e, s(o))
              }, s = t => {
                if (0 === i || i === rl(t)) return;
                const e = il(t);
                return null !== e ? new Promise((t => {
                  const o = new ResizeObserver((() => {
                    e.clientHeight === i && (o.disconnect(), t())
                  }));
                  o.observe(e)
                })) : void 0
              };
              return await r(), {
                init: r, destroy: () => {
                  null == ks || ks.removeEventListener("keyboardWillShow", e), null == ks || ks.removeEventListener("keyboardWillHide", o), e = o = void 0
                }, isKeyboardVisible: () => n
              }
            })((async (t, e) => {
              !1 === t && void 0 !== e && await e, this.keyboardVisible = t
            }))
          }

          disconnectedCallback() {
            this.keyboardCtrl && this.keyboardCtrl.destroy()
          }

          componentDidLoad() {
            this.ionTabBarLoaded.emit()
          }

          render() {
            const { color: t, translucent: e, keyboardVisible: o } = this, n = Wa(this),
              i = o && "top" !== this.el.getAttribute("slot");
            return er(nr, {
              key: "51e4bdbce8c7107c1114a39618b4a9a941876bb1",
              role: "tablist",
              "aria-hidden": i ? "true" : null,
              class: ls(t, { [n]: !0, "tab-bar-translucent": e, "tab-bar-hidden": i })
            }, er("slot", { key: "c11618f97e93deb0a56f33c904481b4811c685ec" }))
          }
        }, [33, "ion-tab-bar", {
          color: [513],
          selectedTab: [1, "selected-tab"],
          translucent: [4],
          keyboardVisible: [32]
        }, void 0, { selectedTab: ["selectedTabChanged"] }]), fd = function () {
          "undefined" != typeof customElements && ["ion-tab-bar"].forEach((t => {
            "ion-tab-bar" === t && (customElements.get(t) || customElements.define(t, hd))
          }))
        }, md = qr(class extends ra {
          constructor() {
            super(), this.__registerHost()
          }

          static get style() {
            return "html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}html.plt-mobile ion-app [contenteditable]{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}"
          }

          get el() {
            return this
          }

          componentDidLoad() {
            bd((async () => {
              const t = Ra(window, "hybrid");
              if (Ea.getBoolean("_testing") || Ni((() => e.import("./index9-legacy-BT_ZyNRk.js"))).then((t => t.startTapClick(Ea))), Ea.getBoolean("statusTap", t) && Ni((() => e.import("./status-tap-legacy-bacfNW-D.js"))).then((t => t.startStatusTap())), Ea.getBoolean("inputShims", gd())) {
                const t = Ra(window, "ios") ? "ios" : "android";
                Ni((() => e.import("./input-shims-legacy-dDAJ5Aym.js"))).then((e => e.startInputShims(Ea, t)))
              }
              const o = await Ni((() => Promise.resolve().then((() => Ss)))), n = t || Cs();
              Ea.getBoolean("hardwareBackButton", n) ? o.startHardwareBackButton() : (Cs() && ((t, ...e) => {
                console.warn(`[Ionic Warning]: ${t}`, ...e)
              })("experimentalCloseWatcher was set to `true`, but hardwareBackButton was set to `false`. Both config options must be `true` for the Close Watcher API to be used."), o.blockHardwareBackButton()), "undefined" != typeof window && Ni((() => e.import("./keyboard2-legacy-CS7E9PB-.js"))).then((t => t.startKeyboardAssist(window))), Ni((() => e.import("./focus-visible-legacy-CdO5cX4I.js"))).then((t => this.focusVisible = t.startFocusVisible()))
            }))
          }

          async setFocus(t) {
            this.focusVisible && this.focusVisible.setFocus(t)
          }

          render() {
            const t = Wa(this);
            return er(nr, {
              key: "0ac01df6d90d8185017e1f8e8f02cdf407e6c94b",
              class: { [t]: !0, "ion-page": !0, "force-statusbar-padding": Ea.getBoolean("_forceStatusbarPadding") }
            })
          }
        }, [0, "ion-app", { setFocus: [64] }]),
        gd = () => !(!Ra(window, "ios") || !Ra(window, "mobile")) || !(!Ra(window, "android") || !Ra(window, "mobileweb")),
        bd = t => {
          "requestIdleCallback" in window ? window.requestIdleCallback(t) : setTimeout(t, 32)
        }, vd = function () {
          "undefined" != typeof customElements && ["ion-app"].forEach((t => {
            "ion-app" === t && (customElements.get(t) || customElements.define(t, md))
          }))
        };
      let yd;
      const xd = (t, e) => {
          const o = (() => {
            if ("undefined" == typeof window) return new Map;
            if (!yd) {
              const t = window;
              t.Ionicons = t.Ionicons || {}, yd = t.Ionicons.map = t.Ionicons.map || new Map
            }
            return yd
          })().get(t);
          if (o) return o;
          try {
            return Zi(`svg/${t}.svg`)
          } catch (n) {
            console.warn(`[Ionicons Warning]: Could not load icon with name "${t}". Ensure that the icon is registered using addIcons or that the icon SVG data is passed directly to the icon component.`, e)
          }
        },
        wd = (t, e, o, n, i) => (o = "ios" === (o && Cd(o)) ? "ios" : "md", n && "ios" === o ? t = Cd(n) : i && "md" === o ? t = Cd(i) : (t || !e || $d(e) || (t = e), _d(t) && (t = Cd(t))), _d(t) && "" !== t.trim() ? "" !== t.replace(/[a-z]|-|\d/gi, "") ? null : t : null),
        kd = t => _d(t) && (t = t.trim(), $d(t)) ? t : null, $d = t => t.length > 0 && /(\/|\.)/.test(t),
        _d = t => "string" == typeof t, Cd = t => t.toLowerCase(), Sd = t => {
          if (1 === t.nodeType) {
            if ("script" === t.nodeName.toLowerCase()) return !1;
            for (let e = 0; e < t.attributes.length; e++) {
              const o = t.attributes[e].name;
              if (_d(o) && 0 === o.toLowerCase().indexOf("on")) return !1
            }
            for (let e = 0; e < t.childNodes.length; e++) if (!Sd(t.childNodes[e])) return !1
          }
          return !0
        }, Ed = new Map, Td = new Map;
      let zd;
      const Ad = (t, e) => {
          let o = Td.get(t);
          if (!o) {
            if ("undefined" == typeof fetch || "undefined" == typeof document) return Ed.set(t, ""), Promise.resolve();
            if ((t => t.startsWith("data:image/svg+xml"))(t) && (t => -1 !== t.indexOf(";utf8,"))(t)) {
              zd || (zd = new DOMParser);
              const e = zd.parseFromString(t, "text/html").querySelector("svg");
              return e && Ed.set(t, e.outerHTML), Promise.resolve()
            }
            o = fetch(t).then((o => {
              if (o.ok) return o.text().then((o => {
                o && !1 !== e && (o = (t => {
                  const e = document.createElement("div");
                  e.innerHTML = t;
                  for (let n = e.childNodes.length - 1; n >= 0; n--) "svg" !== e.childNodes[n].nodeName.toLowerCase() && e.removeChild(e.childNodes[n]);
                  const o = e.firstElementChild;
                  if (o && "svg" === o.nodeName.toLowerCase()) {
                    const t = o.getAttribute("class") || "";
                    if (o.setAttribute("class", (t + " s-ion-icon").trim()), Sd(o)) return e.innerHTML
                  }
                  return ""
                })(o)), Ed.set(t, o || "")
              }));
              Ed.set(t, "")
            })), Td.set(t, o)
          }
          return o
        }, Rd = qr(class extends ra {
          constructor() {
            super(), this.__registerHost(), this.__attachShadow(), this.iconName = null, this.inheritedAttributes = {}, this.didLoadIcon = !1, this.svgContent = void 0, this.isVisible = !1, this.mode = Id(), this.color = void 0, this.ios = void 0, this.md = void 0, this.flipRtl = void 0, this.name = void 0, this.src = void 0, this.icon = void 0, this.size = void 0, this.lazy = !1, this.sanitize = !0
          }

          static get assetsDirs() {
            return ["svg"]
          }

          static get watchers() {
            return { name: ["loadIcon"], src: ["loadIcon"], icon: ["loadIcon"], ios: ["loadIcon"], md: ["loadIcon"] }
          }

          static get style() {
            return ":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}@supports (background: -webkit-named-image(i)){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}@supports not selector(:dir(rtl)) and selector(:host-context([dir='rtl'])){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}:host(.flip-rtl):host-context([dir='rtl']) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}@supports selector(:dir(rtl)){:host(.flip-rtl:dir(rtl)) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.flip-rtl:dir(ltr)) .icon-inner{-webkit-transform:scaleX(1);transform:scaleX(1)}}:host(.icon-small){font-size:1.125rem !important}:host(.icon-large){font-size:2rem !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}"
          }

          get el() {
            return this
          }

          componentWillLoad() {
            this.inheritedAttributes = ((t, e = []) => {
              const o = {};
              return e.forEach((e => {
                t.hasAttribute(e) && (null !== t.getAttribute(e) && (o[e] = t.getAttribute(e)), t.removeAttribute(e))
              })), o
            })(this.el, ["aria-label"])
          }

          connectedCallback() {
            this.waitUntilVisible(this.el, "50px", (() => {
              this.isVisible = !0, this.loadIcon()
            }))
          }

          componentDidLoad() {
            this.didLoadIcon || this.loadIcon()
          }

          disconnectedCallback() {
            this.io && (this.io.disconnect(), this.io = void 0)
          }

          waitUntilVisible(t, e, o) {
            if (this.lazy && "undefined" != typeof window && window.IntersectionObserver) {
              const n = this.io = new window.IntersectionObserver((t => {
                t[0].isIntersecting && (n.disconnect(), this.io = void 0, o())
              }), { rootMargin: e });
              n.observe(t)
            } else o()
          }

          loadIcon() {
            if (this.isVisible) {
              const t = (t => {
                let e = kd(t.src);
                if (e) return e;
                if (e = wd(t.name, t.icon, t.mode, t.ios, t.md), e) return xd(e, t);
                if (t.icon) {
                  if (e = kd(t.icon), e) return e;
                  if (e = kd(t.icon[t.mode]), e) return e
                }
                return null
              })(this);
              t && (Ed.has(t) ? this.svgContent = Ed.get(t) : Ad(t, this.sanitize).then((() => this.svgContent = Ed.get(t))), this.didLoadIcon = !0)
            }
            this.iconName = wd(this.name, this.icon, this.mode, this.ios, this.md)
          }

          render() {
            const { flipRtl: t, iconName: e, inheritedAttributes: o, el: n } = this, i = this.mode || "md",
              r = !!e && (e.includes("arrow") || e.includes("chevron")) && !1 !== t, a = t || r;
            return er(nr, Object.assign({
              role: "img",
              class: Object.assign(Object.assign({ [i]: !0 }, Od(this.color)), {
                [`icon-${this.size}`]: !!this.size,
                "flip-rtl": a,
                "icon-rtl": a && (s = n, s && "" !== s.dir ? "rtl" === s.dir.toLowerCase() : "rtl" === (null === document || void 0 === document ? void 0 : document.dir.toLowerCase()))
              })
            }, o), this.svgContent ? er("div", {
              class: "icon-inner",
              innerHTML: this.svgContent
            }) : er("div", { class: "icon-inner" }));
            var s
          }
        }, [1, "ion-icon", {
          mode: [1025],
          color: [1],
          ios: [1],
          md: [1],
          flipRtl: [4, "flip-rtl"],
          name: [513],
          src: [1],
          icon: [8],
          size: [1],
          lazy: [4],
          sanitize: [4],
          svgContent: [32],
          isVisible: [32]
        }]), Id = () => "undefined" != typeof document && document.documentElement.getAttribute("mode") || "md",
        Od = t => t ? { "ion-color": !0, [`ion-color-${t}`]: !0 } : null, Ld = function () {
          "undefined" != typeof customElements && ["ion-icon"].forEach((t => {
            "ion-icon" === t && (customElements.get(t) || customElements.define(t, Rd))
          }))
        };
      /*!
             * (C) Ionic http://ionicframework.com - MIT License
             */
      var Pd;
      !function (t) {
        t.Dark = "DARK", t.Light = "LIGHT", t.Default = "DEFAULT"
      }(Pd || (Pd = {}));
      const jd = "update:modelValue", Bd = "modelValue", Md = "navManager", Nd = Symbol(), Vd = { default: Nd },
        Fd = t => (null == t ? void 0 : t.split(" ")) || [], Hd = (t, e, o = []) => {
          var n;
          return [...Array.from((null === (n = t.value) || void 0 === n ? void 0 : n.classList) || []), ...o].filter(((t, o, n) => !e.has(t) && n.indexOf(t) === o))
        }, Dd = (t, e, o = [], n, r) => {
          void 0 !== e && e();
          const a = ho(((e, { attrs: o, slots: a, emit: s }) => {
            var l;
            let c = e[n];
            const d = ve(), u = new Set(Fd(o.class)), p = {
                created: t => {
                  (Array.isArray(r) ? r : [r]).forEach((e => {
                    t.addEventListener(e.toLowerCase(), (t => {
                      c = (null == t ? void 0 : t.target)[n], s(jd, c)
                    }))
                  }))
                }
              }, h = ni(),
              f = (null === (l = null == h ? void 0 : h.appContext) || void 0 === l ? void 0 : l.provides[Md]) ? tn(Md) : void 0;
            return () => {
              c = e[n], Fd(o.class).forEach((t => {
                u.add(t)
              }));
              const r = e.onClick;
              let s = {
                ref: d, class: Hd(d, u), onClick: t => {
                  void 0 !== r && r(t), t.defaultPrevented || (t => {
                    const { routerLink: o } = e;
                    if (o !== Nd) if (void 0 !== f) {
                      let o = { event: t };
                      for (const t in e) {
                        const n = e[t];
                        e.hasOwnProperty(t) && t.startsWith("router") && n !== Nd && (o[t] = n)
                      }
                      f.navigate(o)
                    } else console.warn("Tried to navigate, but no router was found. Make sure you have mounted Vue Router.")
                  })(t)
                }
              };
              for (const t in e) {
                const o = e[t];
                (e.hasOwnProperty(t) && o !== Nd || t.startsWith("aria")) && (s[t] = o)
              }
              n && (e[Bd] !== Nd ? s = Object.assign(Object.assign({}, s), { [n]: e[Bd] }) : c !== Nd && (s = Object.assign(Object.assign({}, s), { [n]: c })));
              const l = mi(t, s, a.default && a.default());
              return void 0 === n ? l : function (t, e) {
                if (null === Xe) return t;
                const o = hi(Xe) || Xe.proxy, n = t.dirs || (t.dirs = []);
                for (let r = 0; r < e.length; r++) {
                  let [t, a, s, l = i] = e[r];
                  t && (b(t) && (t = { mounted: t, updated: t }), t.deep && uo(a), n.push({
                    dir: t,
                    instance: o,
                    value: a,
                    oldValue: void 0,
                    arg: s,
                    modifiers: l
                  }))
                }
                return t
              }(l, [[p]])
            }
          }));
          return "function" != typeof a && (a.name = t, a.props = { routerLink: Vd }, o.forEach((t => {
            a.props[t] = Vd
          })), n && (a.props[Bd] = Vd, a.emits = [jd])), a
        },
        Wd = (t("g", Dd("ion-content", xs, ["color", "fullscreen", "forceOverscroll", "scrollX", "scrollY", "scrollEvents", "ionScrollStart", "ionScroll", "ionScrollEnd"])), t("f", Dd("ion-header", fl, ["collapse", "translucent"])), Dd("ion-label", ml, ["color", "position", "ionColor", "ionStyle"]));
      var qd;
      t("b", Dd("ion-title", Sl, ["color", "size", "ionStyle"])), t("I", Dd("ion-toolbar", Tl, ["color"])), function (t) {
        t.WillEnter = "onIonViewWillEnter", t.DidEnter = "onIonViewDidEnter", t.WillLeave = "onIonViewWillLeave", t.DidLeave = "onIonViewDidLeave"
      }(qd || (qd = {}));
      const Ud = { [Es]: qd.WillEnter, [Ts]: qd.DidEnter, [zs]: qd.WillLeave, [As]: qd.DidLeave }, Gd = { main: 0 },
        Xd = (t, e, o) => {
          (null == t ? void 0 : t[o]) && t[o].bind(null == e ? void 0 : e.value)();
          const n = null == e ? void 0 : e.value;
          if ((null == n ? void 0 : n[o]) && n[o](), n) {
            const t = n[Ud[o]];
            t && t.forEach((t => t()))
          }
        }, Yd = () => {
          if ("undefined" != typeof window) {
            const t = window.Ionic;
            if (t && t.config) return t.config
          }
          return null
        }, Kd = t => (e, o = ni()) => ((t, e, o) => {
          if (o) {
            const n = o, i = n.proxy[t] || (n.proxy[t] = []);
            n.exposed && (n.exposed[t] = i);
            const r = (...t) => {
              if (!n.isUnmounted) return t ? e(...t) : e()
            };
            return i.push(r), r
          }
          console.warn("[@ionic/vue]: Ionic Lifecycle Hooks can only be used during execution of setup().")
        })(t, e, o);
      Kd(qd.WillEnter), Kd(qd.DidEnter), Kd(qd.WillLeave), Kd(qd.DidLeave);
      const Zd = t => t.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase(), Qd = {
        async install(t, e = {}) {
          "undefined" != typeof document && document.documentElement.classList.add("ion-ce");
          const { ael: o, rel: n, ce: i } = {
            ael: (t, e, o, n) => t.addEventListener(Zd(e), o, n),
            rel: (t, e, o, n) => t.removeEventListener(Zd(e), o, n),
            ce: (t, e) => new CustomEvent(Zd(t), e)
          };
          qa(Object.assign(Object.assign({}, e), { _ael: o, _rel: n, _ce: i }))
        }
      };
      ho(((t, { attrs: e, slots: o }) => {
        Al();
        const n = tn("navManager"), i = () => {
          if (void 0 === n) return;
          const t = e["default-href"] || e.defaultHref, o = e["router-animation"] || e.routerAnimation;
          n.handleNavigateBack(t, o)
        };
        return () => mi("ion-back-button", Object.assign({ onClick: i }, e), o.default && o.default())
      })).name = "IonBackButton";
      const Jd = t("h", ho({
          name: "IonPage",
          props: {
            registerIonPage: {
              type: Function, default: () => {
              }
            }
          },
          mounted() {
            this.$props.registerIonPage(this.$refs.ionPage)
          },
          setup: (t, { attrs: e, slots: o }) => () => mi("div", Object.assign(Object.assign({}, e), {
            class: "ion-page",
            ref: "ionPage"
          }), o.default && o.default())
        })), tu = t => !t.classList.contains("ion-page-hidden") && !t.classList.contains("ion-page-invisible"),
        eu = Symbol(0), ou = ho({
          name: "IonRouterOutlet", setup() {
            Il();
            const t = tn(Jc), e = tn(Jc), o = tn(eu, 0), n = fi((() => e.matched[o]));
            let i, r;
            Jo(eu, o + 1), Jo(Kc, n);
            const a = ve(), s = ((t = "main") => {
              var e;
              const o = (null !== (e = Gd[t]) && void 0 !== e ? e : 0) + 1;
              return Gd[t] = o, o.toString()
            })("ion-router-outlet"), l = tn("navManager"), c = tn("viewStacks"), d = ye([]);
            let u, p = !1;
            ao((() => [e, n.value]), (([t, e]) => {
              if (void 0 !== e) {
                const o = e !== i, a = t.matched[t.matched.length - 1] === e && t.path !== r;
                (o || a) && v(n)
              }
              i = e, r = t.path
            }), { deep: !0 });
            const h = () => {
              const t = Yd();
              if (!t || !t.get("swipeBackEnabled", "ios" === a.value.mode)) return !1;
              const e = c.getViewStack(s);
              if (!e || e.length <= 1) return !1;
              const o = l.getLeavingRouteInfo();
              return !!c.findViewItemByRouteInfo({ pathname: o.pushedByRoute || "" }, s)
            }, f = async () => {
              const t = l.getLeavingRouteInfo(), { routerAnimation: e } = t,
                o = c.findViewItemByRouteInfo({ pathname: t.pushedByRoute || "" }, s),
                n = c.findViewItemByRouteInfo(t, s);
              if (n) {
                let t = e;
                const i = o.ionPageElement, r = n.ionPageElement, a = o.routerAnimation;
                void 0 === t && void 0 !== a && (t = a), n.routerAnimation = t, await g(i, r, "back", l.canGoBack(2), !0, t)
              }
              return Promise.resolve()
            }, m = t => {
              if (t) p = !0, l.handleNavigateBack(); else {
                const t = l.getCurrentRouteInfo(), e = c.findViewItemByRouteInfo({ pathname: t.pushedByRoute || "" }, s);
                e.ionPageElement.setAttribute("aria-hidden", "true"), e.ionPageElement.classList.add("ion-page-hidden")
              }
            };
            ao(a, (() => {
              a.value.swipeHandler = { canStart: h, onStart: f, onEnd: m }
            }));
            const g = async (t, e, o, n, i, r) => {
              if (p) return p = !1, Promise.resolve(!1);
              if (t === e) return Promise.resolve(!1);
              t.classList.add("ion-page-invisible");
              const s = void 0 === o || "root" === o || "none" === o;
              return await a.value.commit(t, e, {
                duration: s && void 0 === r ? 0 : void 0,
                direction: o,
                showGoBack: n,
                progressAnimation: i,
                animationBuilder: r
              })
            }, b = async () => {
              const t = l.getCurrentRouteInfo(), {
                routerDirection: e,
                routerAction: o,
                routerAnimation: n,
                prevRouteLastPathname: i,
                delta: r
              } = t, a = c.findViewItemByRouteInfo(t, s);
              let u = c.findLeavingViewItemByRouteInfo(t, s);
              const p = a.ionPageElement;
              if (void 0 === p && console.warn(`[@ionic/vue Warning]: The view you are trying to render for path ${t.pathname} does not have the required <ion-page> component. Transitions and lifecycle methods may not work as expected.\n\nSee https://ionicframework.com/docs/vue/navigation#ionpage for more information.`), a !== u && (!u && i && (u = c.findViewItemByPathname(i, s)), !tu(p) || void 0 === (null == u ? void 0 : u.ionPageElement) || tu(u.ionPageElement))) {
                if (Xd(a.vueComponent, a.vueComponentRef, Es), (null == u ? void 0 : u.ionPageElement) && a !== u) {
                  let i = n;
                  const l = u.ionPageElement;
                  Xd(u.vueComponent, u.vueComponentRef, zs);
                  const d = a.routerAnimation;
                  void 0 === i && "back" === e && void 0 !== d && (i = d), u.routerAnimation = i, await g(p, l, e, !!t.pushedByRoute, !1, i), l.classList.add("ion-page-hidden"), l.setAttribute("aria-hidden", "true");
                  const h = 1 === c.size();
                  "replace" === o ? (u.mount = !1, u.ionPageElement = void 0, u.ionRoute = !1) : "push" !== o || "forward" !== e ? "none" !== e && u && a !== u && (u.mount = !1, u.ionPageElement = void 0, u.ionRoute = !1, h && c.unmountLeavingViews(s, a, r)) : h && c.mountIntermediaryViews(s, u, r), Xd(u.vueComponent, u.vueComponentRef, As)
                } else requestAnimationFrame((() => p.classList.remove("ion-page-invisible")));
                Xd(a.vueComponent, a.vueComponentRef, Ts), d.value = c.getChildrenToRender(s)
              }
            }, v = t => {
              const o = e.matched[0];
              if (u || (u = o.path), !t.value || t.value !== o && o.path !== u) return;
              const n = l.getCurrentRouteInfo();
              let i = c.findViewItemByRouteInfo(n, s);
              i || (i = c.createViewItem(s, t.value.components.default, t.value, n), c.add(i)), i.mount ? b() : (i.mount = !0, i.registerCallback = () => {
                b(), i.registerCallback = void 0
              }), d.value = c.getChildrenToRender(s)
            };
            return n.value && v(n), Eo((() => c.clear(s))), {
              id: s,
              components: d,
              injectedRoute: t,
              ionRouterOutlet: a,
              registerIonPage: (t, e) => {
                const o = t.ionPageElement;
                c.registerIonPage(t, e), t.registerCallback ? (e.classList.add("ion-page-invisible"), t.registerCallback()) : o && !o.classList.contains("ion-page-invisible") && e.classList.remove("ion-page-invisible")
              }
            }
          }, render() {
            const { components: t, registerIonPage: e, injectedRoute: o } = this;
            return mi("ion-router-outlet", { ref: "ionRouterOutlet" }, t && t.map((t => {
              var n, i;
              let r = { ref: t.vueComponentRef, key: t.pathname, registerIonPage: o => e(t, o) };
              const a = null === (i = null === (n = t.matchedRoute) || void 0 === n ? void 0 : n.props) || void 0 === i ? void 0 : i.default,
                s = a ? !0 === a ? t.params : "function" == typeof a ? (() => {
                  var e;
                  const n = null === (e = t.vueComponentData) || void 0 === e ? void 0 : e.propsFunctionResult;
                  if (n) return n;
                  {
                    const e = a(o);
                    return t.vueComponentData = Object.assign(Object.assign({}, t.vueComponentData), { propsFunctionResult: e }), e
                  }
                })() : a : null;
              return r = Object.assign(Object.assign({}, r), s), mi(t.vueComponent, r)
            })))
          }
        }), nu = ho({
          name: "IonTabButton",
          props: {
            _getTabState: { type: Function, default: () => ({}) },
            disabled: Boolean,
            download: String,
            href: String,
            rel: String,
            layout: String,
            selected: Boolean,
            tab: String,
            target: String
          },
          setup(t, { slots: e }) {
            pd();
            const o = tn("navManager"), n = e => {
              e.cancelable && e.preventDefault();
              const { tab: n, href: i, _getTabState: r } = t, a = r(), s = a.tabs[n] || {}, l = s.originalHref || i,
                c = s.currentHref || i;
              a.activeTab === n ? l !== c && o.resetTab(n) : o.changeTab(n, c)
            };
            return () => mi("ion-tab-button", Object.assign({ onClick: n }, t), e.default && e.default())
          }
        }), iu = "ionTabsWillChange", ru = "ionTabsDidChange",
        au = t => t.type && ("IonRouterOutlet" === t.type.name || "ion-router-outlet" === t.type), su = ho({
          name: "IonTabs", emits: [iu, ru], render() {
            var t;
            const { $slots: e, $emit: o } = this, n = e.default && e.default();
            let i;
            if (n && n.length > 0 && (i = n.find((t => au(t)))), !i) throw new Error("IonTabs must contain an IonRouterOutlet. See https://ionicframework.com/docs/vue/navigation#working-with-tabs for more information.");
            let r = [mi("div", {
              class: "tabs-inner",
              style: { position: "relative", flex: "1", contain: "layout size style" }
            }, i)];
            if (n && n.length > 0) {
              const e = n.filter((t => !t.type || !au(t))), i = e.find((t => {
                return (e = t).type && ("IonTabBar" === e.type.name || "ion-tab-bar" === e.type);
                var e
              })), a = i && "top" === (null === (t = i.props) || void 0 === t ? void 0 : t.slot);
              i && (i.props || (i.props = {}), i.props._tabsWillChange = t => o(iu, { tab: t }), i.props._tabsDidChange = t => o(ru, { tab: t })), r = a ? [...e, ...r] : [...r, ...e]
            }
            return mi("ion-tabs", {
              style: {
                display: "flex",
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                "flex-direction": "column",
                width: "100%",
                height: "100%",
                contain: "layout size style",
                "z-index": "0"
              }
            }, r)
          }
        }), lu = t => {
          var e;
          return "IonTabButton" === (null === (e = t.type) || void 0 === e ? void 0 : e.name)
        }, cu = t => {
          let e = [];
          return t.forEach((t => {
            if (lu(t)) e.push(t); else if (Array.isArray(t.children) && t.children.length > 1) {
              const o = cu(t.children);
              e = [...e, ...o]
            }
          })), e
        }, du = ho({
          name: "IonTabBar", props: {
            _tabsWillChange: {
              type: Function, default: () => {
              }
            }, _tabsDidChange: {
              type: Function, default: () => {
              }
            }
          }, data: () => ({ tabState: { activeTab: void 0, tabs: {} }, tabVnodes: [] }), updated() {
            this.setupTabState(tn("navManager"))
          }, methods: {
            setupTabState(t) {
              const e = this.$data.tabState, o = ni();
              (this.$data.tabVnodes = cu(o.subTree.children || [])).forEach((t => {
                e.tabs[t.props.tab] = {
                  originalHref: t.props.href,
                  currentHref: t.props.href,
                  ref: t
                }, t.component.props._getTabState = () => e
              })), this.checkActiveTab(t)
            }, checkActiveTab(t) {
              const e = t.getCurrentRouteInfo(), o = this.$data.tabVnodes, {
                tabs: n,
                activeTab: i
              } = this.$data.tabState, r = this.$data.tabState, a = Object.keys(n).find((t => {
                const o = n[t].originalHref;
                return e.pathname.startsWith(o)
              }));
              if (o.forEach((t => {
                const e = n[t.props.tab];
                e && e.originalHref === t.props.href || (n[t.props.tab] = {
                  originalHref: t.props.href,
                  currentHref: t.props.href,
                  ref: t
                })
              })), a && i) {
                const t = this.$data.tabState.tabs[i].currentHref;
                if (a !== i || t !== e.pathname) {
                  const t = e.search ? `?${e.search}` : "";
                  n[a] = Object.assign(Object.assign({}, n[a]), { currentHref: e.pathname + t })
                }
                "pop" === e.routerAction && a !== i && (n[i] = Object.assign(Object.assign({}, n[i]), { currentHref: n[i].originalHref }))
              }
              const s = o.find((t => {
                var e;
                return lu(t) && (null === (e = t.props) || void 0 === e ? void 0 : e.tab) === a
              })), l = this.$refs.ionTabBar, c = a !== i;
              l && (s ? (c && this.$props._tabsWillChange(a), t.handleSetCurrentTab(a), l.selectedTab = r.activeTab = a, c && this.$props._tabsDidChange(a)) : l.selectedTab = r.activeTab = "")
            }
          }, mounted() {
            const t = tn("navManager");
            this.setupTabState(t), t.registerHistoryChangeListener((() => this.checkActiveTab(t)))
          }, setup: (t, { slots: e }) => (fd(), () => mi("ion-tab-bar", { ref: "ionTabBar" }, e.default && e.default()))
        }), uu = ye([]), pu = ho(((t, {
          attrs: e,
          slots: o
        }) => (vd(), () => mi("ion-app", Object.assign({}, e), [o.default && o.default(), ...uu.value]))));
      pu.name = "IonApp";
      const hu = t => {
        uu.value = [...uu.value, t]
      }, fu = t => {
        uu.value = uu.value.filter((e => e !== t))
      }, mu = (t = hu, e = fu) => {
        const o = new WeakMap;
        return {
          attachViewToDom: (e, n, i = {}, r) => {
            const a = document.createElement("div");
            r && a.classList.add(...r), e.appendChild(a);
            const s = mi(Tn, { to: a }, mi(n, Object.assign({}, i)));
            return o.set(a, s), t(s), Promise.resolve(a)
          }, removeViewFromDom: (t, n) => {
            const i = o.get(n);
            return i && e(i), Promise.resolve()
          }
        }
      }, gu = ho((t => {
        _l();
        const e = ye([]), o = mu((t => e.value = [...e.value, t]), (t => e.value = e.value.filter((e => e !== t))));
        return () => mi("ion-nav", Object.assign(Object.assign({}, t), { delegate: o }), e.value)
      }));
      gu.name = "IonNav", gu.props = {
        animated: { type: Boolean, default: !0 },
        animation: { type: Function, default: void 0 },
        root: { type: [Function, Object, String], default: void 0 },
        rootParams: { type: Object, default: void 0 },
        swipeGesture: { type: Boolean, default: void 0 }
      };
      const bu = ho({
        name: "IonIcon",
        props: {
          color: String,
          flipRtl: Boolean,
          icon: String,
          ios: String,
          lazy: String,
          md: String,
          mode: String,
          name: String,
          size: String,
          src: String
        },
        setup: (t, { slots: e }) => (Ld(), () => {
          var o, n;
          const { icon: i, ios: r, md: a, mode: s } = t;
          let l;
          const c = Yd(), d = s || (null == c ? void 0 : c.get("mode"));
          return l = r || a ? "ios" === d ? null !== (o = null != r ? r : a) && void 0 !== o ? o : i : null !== (n = null != a ? a : r) && void 0 !== n ? n : i : i, mi("ion-icon", Object.assign(Object.assign({}, t), { icon: l }), e)
        })
      }), vu = ho({
        __name: "App",
        setup: t => (t, e) => (jn(), Vn(ke(pu), null, { default: Ze((() => [Gn(ke(ou))])), _: 1 }))
      }), yu = { main: 0 }, xu = (t = "main") => {
        var e;
        const o = (null !== (e = yu[t]) && void 0 !== e ? e : 0) + 1;
        return yu[t] = o, o.toString()
      }, wu = [{ path: "/", redirect: "/tabs/tab1" }, {
        path: "/tabs/",
        component: ho({
          __name: "TabsPage", setup: t => (t, e) => (jn(), Vn(ke(Jd), null, {
            default: Ze((() => [Gn(ke(su), null, {
              default: Ze((() => [Gn(ke(ou)), Gn(ke(du), { slot: "bottom" }, {
                default: Ze((() => [Gn(ke(nu), {
                  tab: "tab1",
                  href: "/tabs/tab1"
                }, {
                  default: Ze((() => [Gn(ke(bu), {
                    "aria-hidden": "true",
                    icon: ke("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 464H48a16 16 0 01-14.07-23.62l208-384a16 16 0 0128.14 0l208 384A16 16 0 01464 464z'/></svg>")
                  }, null, 8, ["icon"]), Gn(ke(Wd), null, { default: Ze((() => [Yn("Tab 1")])), _: 1 })])), _: 1
                }), Gn(ke(nu), {
                  tab: "tab2",
                  href: "/tabs/tab2"
                }, {
                  default: Ze((() => [Gn(ke(bu), {
                    "aria-hidden": "true",
                    icon: ke("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208-93.31 208-208 208z'/></svg>")
                  }, null, 8, ["icon"]), Gn(ke(Wd), null, { default: Ze((() => [Yn("Tab 2")])), _: 1 })])), _: 1
                }), Gn(ke(nu), {
                  tab: "tab3",
                  href: "/tabs/tab3"
                }, {
                  default: Ze((() => [Gn(ke(bu), {
                    "aria-hidden": "true",
                    icon: ke("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M416 464H96a48.05 48.05 0 01-48-48V96a48.05 48.05 0 0148-48h320a48.05 48.05 0 0148 48v320a48.05 48.05 0 01-48 48z'/></svg>")
                  }, null, 8, ["icon"]), Gn(ke(Wd), null, { default: Ze((() => [Yn("Tab 3")])), _: 1 })])), _: 1
                })])), _: 1
              })])), _: 1
            })])), _: 1
          }))
        }),
        children: [{ path: "", redirect: "/tabs/tab1" }, {
          path: "tab1",
          component: () => Ni((() => e.import("./Tab1Page-legacy-hNALgO7j.js")))
        }, { path: "tab2", component: () => Ni((() => e.import("./Tab2Page-legacy-iQONnNLJ.js"))) }, {
          path: "tab3",
          component: () => Ni((() => e.import("./Tab3Page-legacy-C58KAefG.js")))
        }]
      }], ku = (t => {
        const e = Object.assign({}, t);
        delete e.tabsPrefix;
        const o = dd(e), n = ((t, e) => {
          let o = { direction: void 0, action: void 0, delta: void 0 };
          e.afterEach(((e, n, i) => {
            if (i) return;
            const { direction: r, action: a, delta: l } = o;
            s = t.history.state.position;
            const c = t.history.state.replaced ? "replace" : void 0;
            d(e, a || c, r, l), o = { direction: void 0, action: void 0, delta: void 0 }
          }));
          const n = (() => {
            const t = [], e = {}, o = e => {
              const o = r(e.tab);
              let n;
              if (o) {
                for (n = o[o.length - 1]; n && n.id !== e.id;) o.pop(), n = o[o.length - 1];
                o.pop(), o.push(e)
              }
              for (n = t[t.length - 1]; n && n.id !== e.id;) t.pop(), n = t[t.length - 1];
              t.pop(), t.push(e)
            }, n = e => {
              const o = r(e.tab);
              o && (o[o.length - 1] && o[o.length - 1].id === e.id && o.pop(), o.push(e)), t.push(e)
            }, i = o => {
              if (o) {
                const { position: n, tab: i } = o, r = t.findIndex((t => t.position === n));
                if (-1 === r) return;
                t.splice(r);
                const a = t => {
                  const o = e[t].findIndex((t => t.position === n));
                  -1 !== o && e[t].splice(o)
                }, s = e[i];
                if (i && s) a(i); else for (const t in e) a(t)
              } else {
                for (const t in e) e[t] = [];
                t.length = 0
              }
            }, r = t => {
              let o;
              return t && (o = e[t], o || (o = e[t] = [])), o
            }, a = () => t[t.length - 1];
            return {
              current: (e, o) => t[o - e] || a(), size: () => t.length, last: a, add: t => {
                "pop" === t.routerAction ? o(t) : n(t), "root" === t.routerDirection && (i(), n(t))
              }, canGoBack: (t = 1, e, o) => o - t >= e, update: o => {
                const n = t.findIndex((t => t.id === o.id));
                n > -1 && t.splice(n, 1, o);
                const i = e[o.tab || ""];
                if (i) {
                  const t = i.findIndex((t => t.id === o.id));
                  t > -1 ? i.splice(t, 1, o) : i.push(o)
                } else o.tab && (e[o.tab] = [o])
              }, getFirstRouteInfoForTab: t => {
                const e = r(t);
                if (e) return e[0]
              }, getCurrentRouteInfoForTab: t => {
                const e = r(t);
                if (e) return e[e.length - 1]
              }, findLastLocation: (e, o = -1) => {
                const n = r(e.tab);
                if (n) {
                  if (o < -1) return n[n.length - 1 + o];
                  for (let t = n.length - 2; t >= 0; t--) {
                    const o = n[t];
                    if (o && o.pathname === e.pushedByRoute) return o
                  }
                }
                if (o < -1) return t[t.length - 1 + o];
                for (let i = t.length - 2; i >= 0; i--) {
                  const o = t[i];
                  if (o && o.pathname === e.pushedByRoute) return o
                }
              }, clearHistory: i
            }
          })();
          let i, r, a = t.history.state.position, s = t.history.state.position;
          const l = [];
          "undefined" != typeof document && document.addEventListener("ionBackButton", (e => {
            e.detail.register(0, (e => {
              t.history.go(-1), e()
            }))
          })), t.history.listen(((t, e, n) => {
            o = {
              delta: n.delta,
              action: "pop" === n.type && n.delta >= 1 ? "push" : n.type,
              direction: "" === n.direction ? "forward" : n.direction
            }
          }));
          const c = (t, o, n, i, r) => {
            u(o, n, i, r), "push" === o ? e.push(t) : e.replace(t)
          }, d = (t, e, o, c) => {
            let d;
            if (r) if ("replace" === r.routerAction) d = n.current(a, s); else if ("pop" === r.routerAction) d = n.current(a, s + 1), "replace" === e && n.clearHistory(); else {
              const t = "root" === r.routerDirection ? s : s - 1;
              d = n.current(a, t)
            } else d = i;
            if (d || (d = { pathname: "", search: "" }), d.pathname + d.search !== t.fullPath) {
              if (!r) {
                if ("replace" === e) r = { routerAction: "replace", routerDirection: "none" }; else if ("pop" === e) {
                  const t = n.current(a, s - c);
                  if (t && t.pushedByRoute) {
                    const e = n.findLastLocation(t, c);
                    r = Object.assign(Object.assign({}, e), { routerAction: "pop", routerDirection: "back" })
                  } else r = { routerAction: "pop", routerDirection: "none" }
                }
                r || (r = { routerAction: "push", routerDirection: o || "forward" })
              }
              let l;
              if (null == r ? void 0 : r.id) l = Object.assign(Object.assign({}, r), { lastPathname: d.pathname }); else {
                const e = "push" === r.routerAction && "forward" === r.routerDirection;
                if (l = Object.assign(Object.assign({ id: xu("routeInfo") }, r), {
                  lastPathname: d.pathname,
                  pathname: t.path,
                  search: t.fullPath && t.fullPath.split("?")[1] || "",
                  params: t.params && t.params,
                  prevRouteLastPathname: d.lastPathname
                }), e) l.pushedByRoute = "" !== d.pathname ? d.pathname : void 0; else if ("pop" === l.routerAction) {
                  const t = n.findLastLocation(l);
                  l.pushedByRoute = null == t ? void 0 : t.pushedByRoute
                } else if ("push" === l.routerAction && l.tab !== d.tab) {
                  const t = n.getCurrentRouteInfoForTab(l.tab);
                  l.pushedByRoute = null == t ? void 0 : t.pushedByRoute
                } else if ("replace" === l.routerAction) {
                  const t = n.current(a, s), e = null == t ? void 0 : t.pushedByRoute,
                    o = void 0 !== e && e !== l.pathname ? e : l.pushedByRoute;
                  l.lastPathname = (null == t ? void 0 : t.pathname) || l.lastPathname, l.pushedByRoute = o, l.routerDirection = (null == t ? void 0 : t.routerDirection) || l.routerDirection, l.routerAnimation = (null == t ? void 0 : t.routerAnimation) || l.routerAnimation, l.prevRouteLastPathname = null == t ? void 0 : t.lastPathname
                }
              }
              l.position = s, l.delta = c;
              const u = n.size(), p = s - a;
              u > p || u === p && u > 0 && "replace" === e ? "push" !== l.routerAction && "replace" !== l.routerAction || void 0 !== c || (n.clearHistory(l), n.add(l)) : n.add(l), 1 === n.size() && (a = l.position), i = l
            }
            r = void 0, l.forEach((t => t(i)))
          }, u = (t = "push", e = "forward", o, n) => {
            r = { routerAction: t, routerDirection: e, routerAnimation: o, tab: n }
          };
          return {
            handleNavigate: c, getLeavingRouteInfo: () => n.current(a, s), handleNavigateBack: (t, o) => {
              const i = n.current(a, s);
              if (i && i.pushedByRoute) {
                const a = n.findLastLocation(i);
                a ? (r = Object.assign(Object.assign({}, a), {
                  routerAction: "pop",
                  routerDirection: "back",
                  routerAnimation: o || i.routerAnimation
                }), i.lastPathname === i.pushedByRoute || a.pathname === i.pushedByRoute && !i.tab && !a.tab ? e.back() : e.go(a.position - i.position)) : c(t, "pop", "back", o)
              } else c(t, "pop", "back", o)
            }, handleSetCurrentTab: t => {
              const e = Object.assign({}, n.current(a, s));
              e.tab !== t && (e.tab = t, n.update(e));
              const o = n.findLastLocation(e);
              e.pushedByRoute !== e.lastPathname && (null == o ? void 0 : o.tab) !== t && (e.pushedByRoute = void 0, n.update(e))
            }, getCurrentRouteInfo: () => i, canGoBack: (t = 1) => n.canGoBack(t, a, s), navigate: t => {
              const { routerAnimation: o, routerDirection: n, routerLink: i } = t;
              u("push", n, o), e.push(i)
            }, resetTab: t => {
              const o = n.getFirstRouteInfoForTab(t);
              o && e.go(o.position - s)
            }, changeTab: (t, o) => {
              if (!o) return;
              const i = n.getCurrentRouteInfoForTab(t), [a] = o.split("?");
              i ? (r = Object.assign(Object.assign({}, r), {
                routerAction: "push",
                routerDirection: "none",
                tab: t
              }), i.pathname === a ? e.push({ path: i.pathname, query: Gc(i.search) }) : e.push({
                path: a,
                query: Gc(i.search)
              })) : c(a, "push", "none", void 0, t)
            }, registerHistoryChangeListener: t => {
              l.push(t)
            }, goBack: t => {
              u("pop", "back", t), e.back()
            }, goForward: t => {
              u("push", "forward", t), e.forward()
            }
          }
        })(t, o), i = (t => {
          const e = {}, o = (t, e) => e.find((e => {
            if (e.pathname === t) return e
          })), n = (n, i, r = !1) => {
            const a = e => {
              if (r && !e.ionRoute || "" === n) return !1;
              const o = t.resolve(n).matched.find((t => t === e.matchedRoute));
              return o ? (!o.path.includes(":") || n === e.pathname) && e : void 0
            };
            if (i) {
              const r = e[i];
              if (!r) return;
              const s = t ? r.find(a) : o(n, r);
              if (s) return s
            } else for (const t in e) {
              const i = e[t], r = o(n, i);
              if (r) return r
            }
          };
          return {
            unmountLeavingViews: (t, o, n = 1) => {
              const i = e[t];
              if (!i) return;
              const r = i.findIndex((t => t === o));
              for (let e = r + 1; e < r - n; e++) {
                const t = i[e];
                t.mount = !1, t.ionPageElement = void 0, t.ionRoute = !1, t.matchedRoute.instances = {}
              }
            },
            mountIntermediaryViews: (t, o, n = 1) => {
              const i = e[t];
              if (!i) return;
              const r = i.findIndex((t => t === o));
              for (let e = r + 1; e < r + n; e++) i[e].mount = !0
            },
            clear: t => {
              delete e[t]
            },
            findViewItemByRouteInfo: (t, e) => n(t.pathname, e, !1),
            findLeavingViewItemByRouteInfo: (t, e, o = !0) => n(t.lastPathname, e, o),
            findViewItemByPathname: (t, e) => n(t, e, !1),
            createViewItem: (t, e, o, n, i) => ({
              id: xu("viewItem"),
              pathname: n.pathname,
              outletId: t,
              matchedRoute: o,
              ionPageElement: i,
              vueComponent: e,
              vueComponentRef: ye(),
              ionRoute: !1,
              mount: !1,
              exact: n.pathname === o.path,
              params: n.params,
              vueComponentData: {}
            }),
            getChildrenToRender: t => e[t] ? e[t].filter((t => t.mount)) : [],
            add: t => {
              const { outletId: o } = t;
              e[o] ? e[o].push(t) : e[o] = [t]
            },
            remove: (t, o) => {
              if (!o) throw Error("outletId required");
              const n = e[o];
              n && (e[o] = n.filter((e => e.id !== t.id)))
            },
            registerIonPage: (t, e) => {
              t.ionPageElement = e, t.ionRoute = !0, t.matchedRoute.instances = { default: t.vueComponentRef.value }
            },
            getViewStack: t => e[t],
            size: () => Object.keys(e).length
          }
        })(o), r = o.install.bind(o);
        o.install = t => {
          t.provide("navManager", n), t.provide("viewStacks", i), r(t)
        };
        const a = o.isReady.bind(o);
        return o.isReady = () => a(), o
      })({ history: ($u = "/", $c($u)), routes: wu });
      var $u;
      const _u = ((...t) => {
        const e = (Mi || (Mi = vn(Bi))).createApp(...t), { mount: o } = e;
        return e.mount = t => {
          const n = function (t) {
            return v(t) ? document.querySelector(t) : t
          }(t);
          if (!n) return;
          const i = e._component;
          b(i) || i.render || i.template || (i.template = n.innerHTML), n.innerHTML = "";
          const r = o(n, !1, function (t) {
            return t instanceof SVGElement ? "svg" : "function" == typeof MathMLElement && t instanceof MathMLElement ? "mathml" : void 0
          }(n));
          return n instanceof Element && (n.removeAttribute("v-cloak"), n.setAttribute("data-v-app", "")), r
        }, e
      })(vu).use(Qd).use(ku);
      ku.isReady().then((() => {
        _u.mount("#app")
      }))
    }
  }
}));
