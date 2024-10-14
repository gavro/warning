/**
 * Import Tool's icon
 */
import { IconWarning } from '@codexteam/icons';

/**
 * Build styles
 */
import './index.css';

/**
 * @class Warning
 * @classdesc Warning Tool for Editor.js
 * @property {WarningData} data - Warning Tool`s input and output data
 * @property {object} api - Editor.js API instance
 *
 * @typedef {object} WarningData
 * @description Warning Tool`s input and output data
 * @property {string} type - warning`s type
 * @property {string} title - warning`s title
 * @property {string} message - warning`s message
 *
 * @typedef {object} WarningConfig
 * @description Warning Tool`s initial configuration
 * @property {string} titlePlaceholder - placeholder to show in warning`s title input
 * @property {string} messagePlaceholder - placeholder to show in warning`s message input
 */
export default class Warning {

  /**
   * Notify core that read-only mode is supported
   */
  static get isReadOnlySupported() {
    return true;
  }

  /**
   * Get Toolbox settings
   *
   * @public
   * @returns {string}
   */
  static get toolbox() {
    return {
      icon: IconWarning,
      title: 'Warning',
    };
  }

  /**
   * Allow to press Enter inside the Warning
   *
   * @public
   * @returns {boolean}
   */
  static get enableLineBreaks() {
    return true;
  }

  /**
   * Default warning type
   *
   * @public
   * @returns {string}
   */
  static get DEFAULT_TYPE() {
    return 'default';
  }

  /**
   * Default placeholder for warning title
   *
   * @public
   * @returns {string}
   */
  static get DEFAULT_TITLE_PLACEHOLDER() {
    return 'Title';
  }

  /**
   * Default placeholder for warning message
   *
   * @public
   * @returns {string}
   */
  static get DEFAULT_MESSAGE_PLACEHOLDER() {
    return 'Message';
  }

  /**
   * @returns {{key: string, svg: string}[]}
   */
  get types() {
    return [
      {
        'key': 'default',
        'svg': '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="#777" x="4.753" y="5.866" width="5.589" height="8.291"/><path d="M18.15,5.054C18.15,3.89 17.155,2.945 15.93,2.945L3.266,2.945C2.041,2.945 1.047,3.89 1.047,5.054L1.047,14.896C1.047,16.06 2.041,17.005 3.266,17.005L15.93,17.005C17.155,17.005 18.15,16.06 18.15,14.896L18.15,5.054ZM16.045,5.054L16.045,14.896C16.045,14.956 15.994,15.005 15.93,15.005L3.266,15.005C3.203,15.005 3.152,14.956 3.152,14.896C3.152,14.896 3.152,5.054 3.152,5.054C3.152,4.994 3.203,4.945 3.266,4.945L15.93,4.945C15.994,4.945 16.045,4.994 16.045,5.054Z"/></svg>'
      },
      {
        'key': 'info',
        'svg': '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="#1D67BD" x="4.753" y="5.866" width="5.589" height="8.291"/><path d="M18.15,5.054C18.15,3.89 17.155,2.945 15.93,2.945L3.266,2.945C2.041,2.945 1.047,3.89 1.047,5.054L1.047,14.896C1.047,16.06 2.041,17.005 3.266,17.005L15.93,17.005C17.155,17.005 18.15,16.06 18.15,14.896L18.15,5.054ZM16.045,5.054L16.045,14.896C16.045,14.956 15.994,15.005 15.93,15.005L3.266,15.005C3.203,15.005 3.152,14.956 3.152,14.896C3.152,14.896 3.152,5.054 3.152,5.054C3.152,4.994 3.203,4.945 3.266,4.945L15.93,4.945C15.994,4.945 16.045,4.994 16.045,5.054Z"/></svg>'
      },
      {
        'key': 'success',
        'svg': '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="#5cb85c" x="4.753" y="5.866" width="5.589" height="8.291"/><path d="M18.15,5.054C18.15,3.89 17.155,2.945 15.93,2.945L3.266,2.945C2.041,2.945 1.047,3.89 1.047,5.054L1.047,14.896C1.047,16.06 2.041,17.005 3.266,17.005L15.93,17.005C17.155,17.005 18.15,16.06 18.15,14.896L18.15,5.054ZM16.045,5.054L16.045,14.896C16.045,14.956 15.994,15.005 15.93,15.005L3.266,15.005C3.203,15.005 3.152,14.956 3.152,14.896C3.152,14.896 3.152,5.054 3.152,5.054C3.152,4.994 3.203,4.945 3.266,4.945L15.93,4.945C15.994,4.945 16.045,4.994 16.045,5.054Z"/></svg>'
      },
      {
        'key': 'warning',
        'svg': '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="#f0ad4e" x="4.753" y="5.866" width="5.589" height="8.291"/><path d="M18.15,5.054C18.15,3.89 17.155,2.945 15.93,2.945L3.266,2.945C2.041,2.945 1.047,3.89 1.047,5.054L1.047,14.896C1.047,16.06 2.041,17.005 3.266,17.005L15.93,17.005C17.155,17.005 18.15,16.06 18.15,14.896L18.15,5.054ZM16.045,5.054L16.045,14.896C16.045,14.956 15.994,15.005 15.93,15.005L3.266,15.005C3.203,15.005 3.152,14.956 3.152,14.896C3.152,14.896 3.152,5.054 3.152,5.054C3.152,4.994 3.203,4.945 3.266,4.945L15.93,4.945C15.994,4.945 16.045,4.994 16.045,5.054Z"/></svg>'
      },
      {
        'key': 'danger',
        'svg': '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="#d9534f" x="4.753" y="5.866" width="5.589" height="8.291"/><path d="M18.15,5.054C18.15,3.89 17.155,2.945 15.93,2.945L3.266,2.945C2.041,2.945 1.047,3.89 1.047,5.054L1.047,14.896C1.047,16.06 2.041,17.005 3.266,17.005L15.93,17.005C17.155,17.005 18.15,16.06 18.15,14.896L18.15,5.054ZM16.045,5.054L16.045,14.896C16.045,14.956 15.994,15.005 15.93,15.005L3.266,15.005C3.203,15.005 3.152,14.956 3.152,14.896C3.152,14.896 3.152,5.054 3.152,5.054C3.152,4.994 3.203,4.945 3.266,4.945L15.93,4.945C15.994,4.945 16.045,4.994 16.045,5.054Z"/></svg>'
      },
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
      wrapper: 'cdx-warning',
      title: 'cdx-warning__title',
      input: this.api.styles.input,
      message: 'cdx-warning__message',
      block: this.api.styles.block,
      settingsButton: this.api.styles.settingsButton,
      settingsButtonActive: this.api.styles.settingsButtonActive,
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
  constructor({ data, config, api, readOnly, block }) {
    this.api = api;
    this.readOnly = readOnly;
    this.blockAPI = block;

    this.defaultType = config.warningType || Warning.DEFAULT_TYPE;
    this.titlePlaceholder = config.titlePlaceholder || Warning.DEFAULT_TITLE_PLACEHOLDER;
    this.messagePlaceholder = config.messagePlaceholder || Warning.DEFAULT_MESSAGE_PLACEHOLDER;

    this.data = {
      type: data.type || this.defaultType,
      title: data.title || '',
      message: data.message || '',
    };

    /**
     * List of settings buttons
     *
     * @type {HTMLElement[]}
     */
    this.settingsButtons = [];
  }

  /**
   * Get current type
   *
   * @returns {{key: string, svg: string}}
   */
  get currentType() {
    let type = this.types.find(typeItem => typeItem.key === this.data.type);

    if (!type) {
      type = this.defaultType;
    }

    return type;
  }

  /**
   * Create Warning Tool container with inputs
   *
   * @returns {Element}
   */
  render() {
    const container = this._make('div', [this.CSS.baseClass, this.CSS.wrapper]);
    const title = this._make('div', [this.CSS.input, this.CSS.title], {
      contentEditable: !this.readOnly,
      innerHTML: this.data.title,
    });
    const message = this._make('div', [this.CSS.input, this.CSS.message], {
      contentEditable: !this.readOnly,
      innerHTML: this.data.message,
    });

    title.dataset.placeholder = this.titlePlaceholder;
    message.dataset.placeholder = this.messagePlaceholder;

    container.appendChild(title);
    container.appendChild(message);

    return container;
  }

  /**
   * Create Block's settings block
   *
   * @returns {HTMLElement}
   */
  renderSettings() {
    const holder = document.createElement('DIV');

    /** Add type selectors */
    this.types.forEach(type => {
      const selectTypeButton = document.createElement('SPAN');

      selectTypeButton.classList.add(this.CSS.settingsButton);

      /**
       * Highlight current level button
       */
      if (this.currentType.key === type.key) {
        selectTypeButton.classList.add(this.CSS.settingsButtonActive);
      }

      /**
       * Add SVG icon
       */
      selectTypeButton.innerHTML = type.svg;

      /**
       * Save level to its button
       */
      selectTypeButton.dataset.type = type.key;

      /**
       * Set up click handler
       */
      selectTypeButton.addEventListener('click', () => this.setType(type.key));

      /**
       * Append settings button to holder
       */
      holder.appendChild(selectTypeButton);

      /**
       * Save settings buttons
       */
      this.settingsButtons.push(selectTypeButton);
    });

    return holder;
  }

  /**
   * Callback for Block's settings buttons
   *
   * @param {string} type - type to set
   */
  setType(type) {
    // console.log("should set: ", type);
    this.data = Object.assign(this.data, {
      type: type,
    });

    /**
     * Highlight button by selected level
     */
    this.settingsButtons.forEach(button => {
      button.classList.toggle(this.CSS.settingsButtonActive, button.dataset.type === type);
    });

    this.blockAPI.dispatchChange();
  }

  /**
   * Extract Warning data from Warning Tool element
   *
   *
   * @param {HTMLHeadingElement} warningElement - Text tools rendered view
   * @returns {{type: string, title: string, message: string}} - saved data
   * @public
   */
  save(warningElement) {
    const title = warningElement.querySelector(`.${this.CSS.title}`);
    const message = warningElement.querySelector(`.${this.CSS.message}`);

    return Object.assign(this.data, {
      type: this.currentType.key,
      title: title.innerHTML,
      message: message.innerHTML,
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
  _make(tagName, classNames = null, attributes = {}) {
    const el = document.createElement(tagName);

    if (Array.isArray(classNames)) {
      el.classList.add(...classNames);
    } else if (classNames) {
      el.classList.add(classNames);
    }

    for (const attrName in attributes) {
      el[attrName] = attributes[attrName];
    }

    return el;
  }

  /**
   * Sanitizer config for Warning Tool saved data
   *
   * @returns {object}
   */
  static get sanitize() {
    return {
      type: false,
      title: {},
      message: {},
    };
  }
}
