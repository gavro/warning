(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(`.cdx-warning{position:relative}@media all and (min-width: 736px){.cdx-warning{padding-left:36px}}.cdx-warning [contentEditable=true][data-placeholder]:before{position:absolute;content:attr(data-placeholder);color:#707684;font-weight:400;opacity:0}.cdx-warning [contentEditable=true][data-placeholder]:empty:before{opacity:1}.cdx-warning [contentEditable=true][data-placeholder]:empty:focus:before{opacity:0}.cdx-warning:before{content:"";background-image:url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='5' y='5' width='14' height='14' rx='4' stroke='black' stroke-width='2'/%3E%3Cline x1='12' y1='9' x2='12' y2='12' stroke='black' stroke-width='2' stroke-linecap='round'/%3E%3Cpath d='M12 15.02V15.01' stroke='black' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");width:24px;height:24px;background-size:24px 24px;position:absolute;margin-top:8px;left:0}@media all and (max-width: 735px){.cdx-warning:before{display:none}}.cdx-warning__message{min-height:85px}.cdx-warning__title{margin-bottom:6px}`)),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
const a = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><line x1="12" x2="12" y1="9" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 15.02V15.01"/></svg>';
class r {
  /**
   * Notify core that read-only mode is supported
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Get Toolbox settings
   *
   * @public
   * @returns {string}
   */
  static get toolbox() {
    return {
      icon: a,
      title: "Warning"
    };
  }
  /**
   * Allow to press Enter inside the Warning
   *
   * @public
   * @returns {boolean}
   */
  static get enableLineBreaks() {
    return !0;
  }
  /**
   * Default warning type
   *
   * @public
   * @returns {string}
   */
  static get DEFAULT_TYPE() {
    return "default";
  }
  /**
   * Default placeholder for warning title
   *
   * @public
   * @returns {string}
   */
  static get DEFAULT_TITLE_PLACEHOLDER() {
    return "Title";
  }
  /**
   * Default placeholder for warning message
   *
   * @public
   * @returns {string}
   */
  static get DEFAULT_MESSAGE_PLACEHOLDER() {
    return "Message";
  }
  /**
   * @returns {{key: string, svg: string}[]}
   */
  get types() {
    return [
      {
        key: "default",
        svg: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="#777" x="4.753" y="5.866" width="5.589" height="8.291"/><path d="M18.15,5.054C18.15,3.89 17.155,2.945 15.93,2.945L3.266,2.945C2.041,2.945 1.047,3.89 1.047,5.054L1.047,14.896C1.047,16.06 2.041,17.005 3.266,17.005L15.93,17.005C17.155,17.005 18.15,16.06 18.15,14.896L18.15,5.054ZM16.045,5.054L16.045,14.896C16.045,14.956 15.994,15.005 15.93,15.005L3.266,15.005C3.203,15.005 3.152,14.956 3.152,14.896C3.152,14.896 3.152,5.054 3.152,5.054C3.152,4.994 3.203,4.945 3.266,4.945L15.93,4.945C15.994,4.945 16.045,4.994 16.045,5.054Z"/></svg>'
      },
      {
        key: "info",
        svg: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="#1D67BD" x="4.753" y="5.866" width="5.589" height="8.291"/><path d="M18.15,5.054C18.15,3.89 17.155,2.945 15.93,2.945L3.266,2.945C2.041,2.945 1.047,3.89 1.047,5.054L1.047,14.896C1.047,16.06 2.041,17.005 3.266,17.005L15.93,17.005C17.155,17.005 18.15,16.06 18.15,14.896L18.15,5.054ZM16.045,5.054L16.045,14.896C16.045,14.956 15.994,15.005 15.93,15.005L3.266,15.005C3.203,15.005 3.152,14.956 3.152,14.896C3.152,14.896 3.152,5.054 3.152,5.054C3.152,4.994 3.203,4.945 3.266,4.945L15.93,4.945C15.994,4.945 16.045,4.994 16.045,5.054Z"/></svg>'
      },
      {
        key: "success",
        svg: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="#5cb85c" x="4.753" y="5.866" width="5.589" height="8.291"/><path d="M18.15,5.054C18.15,3.89 17.155,2.945 15.93,2.945L3.266,2.945C2.041,2.945 1.047,3.89 1.047,5.054L1.047,14.896C1.047,16.06 2.041,17.005 3.266,17.005L15.93,17.005C17.155,17.005 18.15,16.06 18.15,14.896L18.15,5.054ZM16.045,5.054L16.045,14.896C16.045,14.956 15.994,15.005 15.93,15.005L3.266,15.005C3.203,15.005 3.152,14.956 3.152,14.896C3.152,14.896 3.152,5.054 3.152,5.054C3.152,4.994 3.203,4.945 3.266,4.945L15.93,4.945C15.994,4.945 16.045,4.994 16.045,5.054Z"/></svg>'
      },
      {
        key: "warning",
        svg: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="#f0ad4e" x="4.753" y="5.866" width="5.589" height="8.291"/><path d="M18.15,5.054C18.15,3.89 17.155,2.945 15.93,2.945L3.266,2.945C2.041,2.945 1.047,3.89 1.047,5.054L1.047,14.896C1.047,16.06 2.041,17.005 3.266,17.005L15.93,17.005C17.155,17.005 18.15,16.06 18.15,14.896L18.15,5.054ZM16.045,5.054L16.045,14.896C16.045,14.956 15.994,15.005 15.93,15.005L3.266,15.005C3.203,15.005 3.152,14.956 3.152,14.896C3.152,14.896 3.152,5.054 3.152,5.054C3.152,4.994 3.203,4.945 3.266,4.945L15.93,4.945C15.994,4.945 16.045,4.994 16.045,5.054Z"/></svg>'
      },
      {
        key: "danger",
        svg: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="#d9534f" x="4.753" y="5.866" width="5.589" height="8.291"/><path d="M18.15,5.054C18.15,3.89 17.155,2.945 15.93,2.945L3.266,2.945C2.041,2.945 1.047,3.89 1.047,5.054L1.047,14.896C1.047,16.06 2.041,17.005 3.266,17.005L15.93,17.005C17.155,17.005 18.15,16.06 18.15,14.896L18.15,5.054ZM16.045,5.054L16.045,14.896C16.045,14.956 15.994,15.005 15.93,15.005L3.266,15.005C3.203,15.005 3.152,14.956 3.152,14.896C3.152,14.896 3.152,5.054 3.152,5.054C3.152,4.994 3.203,4.945 3.266,4.945L15.93,4.945C15.994,4.945 16.045,4.994 16.045,5.054Z"/></svg>'
      }
    ];
  }
  /**
   * Warning Tool`s styles
   *
   * @returns {object}
   */
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      wrapper: "cdx-warning",
      title: "cdx-warning__title",
      input: this.api.styles.input,
      message: "cdx-warning__message",
      block: this.api.styles.block,
      settingsButton: this.api.styles.settingsButton,
      settingsButtonActive: this.api.styles.settingsButtonActive
    };
  }
  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {WarningData} data — previously saved data
   * @param {WarningConfig} config — user config for Tool
   * @param {object} api - Editor.js API
   * @param {boolean} readOnly - read-only mode flag
   */
  constructor({ data: e, config: t, api: s, readOnly: i, block: n }) {
    this.api = s, this.readOnly = i, this.blockAPI = n, this.defaultType = t.warningType || r.DEFAULT_TYPE, this.titlePlaceholder = t.titlePlaceholder || r.DEFAULT_TITLE_PLACEHOLDER, this.messagePlaceholder = t.messagePlaceholder || r.DEFAULT_MESSAGE_PLACEHOLDER, this.data = {
      type: e.type || this.defaultType,
      title: e.title || "",
      message: e.message || ""
    }, this.settingsButtons = [];
  }
  /**
   * Get current type
   *
   * @returns {{key: string, svg: string}}
   */
  get currentType() {
    let e = this.types.find((t) => t.key === this.data.type);
    return e || (e = this.defaultType), e;
  }
  /**
   * Create Warning Tool container with inputs
   *
   * @returns {Element}
   */
  render() {
    const e = this._make("div", [this.CSS.baseClass, this.CSS.wrapper]), t = this._make("div", [this.CSS.input, this.CSS.title], {
      contentEditable: !this.readOnly,
      innerHTML: this.data.title
    }), s = this._make("div", [this.CSS.input, this.CSS.message], {
      contentEditable: !this.readOnly,
      innerHTML: this.data.message
    });
    return t.dataset.placeholder = this.titlePlaceholder, s.dataset.placeholder = this.messagePlaceholder, e.appendChild(t), e.appendChild(s), e;
  }
  /**
   * Create Block's settings block
   *
   * @returns {HTMLElement}
   */
  renderSettings() {
    const e = document.createElement("DIV");
    return this.types.forEach((t) => {
      const s = document.createElement("SPAN");
      s.classList.add(this.CSS.settingsButton), this.currentType.key === t.key && s.classList.add(this.CSS.settingsButtonActive), s.innerHTML = t.svg, s.dataset.type = t.key, s.addEventListener("click", () => this.setType(t.key)), e.appendChild(s), this.settingsButtons.push(s);
    }), e;
  }
  /**
   * Callback for Block's settings buttons
   *
   * @param {string} type - type to set
   */
  setType(e) {
    this.data = Object.assign(this.data, {
      type: e
    }), this.settingsButtons.forEach((t) => {
      t.classList.toggle(this.CSS.settingsButtonActive, t.dataset.type === e);
    }), this.blockAPI.dispatchChange();
  }
  /**
   * Extract Warning data from Warning Tool element
   *
   *
   * @param {HTMLHeadingElement} warningElement - Text tools rendered view
   * @returns {{type: string, title: string, message: string}} - saved data
   * @public
   */
  save(e) {
    const t = e.querySelector(`.${this.CSS.title}`), s = e.querySelector(`.${this.CSS.message}`);
    return Object.assign(this.data, {
      type: this.currentType.key,
      title: t.innerHTML,
      message: s.innerHTML
    });
  }
  /**
   * Helper for making Elements with attributes
   *
   * @param  {string} tagName           - new Element tag name
   * @param  {Array|string} classNames  - list or name of CSS classname(s)
   * @param  {object} attributes        - any attributes
   * @returns {Element}
   */
  _make(e, t = null, s = {}) {
    const i = document.createElement(e);
    Array.isArray(t) ? i.classList.add(...t) : t && i.classList.add(t);
    for (const n in s)
      i[n] = s[n];
    return i;
  }
  /**
   * Sanitizer config for Warning Tool saved data
   *
   * @returns {object}
   */
  static get sanitize() {
    return {
      type: !1,
      title: {},
      message: {}
    };
  }
}
export {
  r as default
};
