/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   request-editor.html
 */

/// <reference path="../polymer/types/polymer-element.d.ts" />
/// <reference path="../url-input-editor/url-input-editor.d.ts" />
/// <reference path="../api-headers-editor/api-headers-editor.d.ts" />
/// <reference path="../http-method-selector/http-method-selector.d.ts" />
/// <reference path="../http-method-selector/http-method-selector-mini.d.ts" />
/// <reference path="../api-body-editor/api-body-editor.d.ts" />
/// <reference path="../variables-editor/variables-editor.d.ts" />
/// <reference path="../authorization-panel/authorization-panel.d.ts" />
/// <reference path="../iron-flex-layout/iron-flex-layout.d.ts" />
/// <reference path="../paper-tabs/paper-tabs.d.ts" />
/// <reference path="../paper-tabs/paper-tab.d.ts" />
/// <reference path="../iron-pages/iron-pages.d.ts" />
/// <reference path="../paper-styles/paper-styles.d.ts" />
/// <reference path="../paper-button/paper-button.d.ts" />
/// <reference path="../paper-icon-button/paper-icon-button.d.ts" />
/// <reference path="../paper-tooltip/paper-tooltip.d.ts" />
/// <reference path="../iron-collapse/iron-collapse.d.ts" />
/// <reference path="../iron-media-query/iron-media-query.d.ts" />
/// <reference path="../arc-icons/arc-icons.d.ts" />
/// <reference path="../events-target-behavior/events-target-behavior.d.ts" />
/// <reference path="../paper-menu-button/paper-menu-button.d.ts" />
/// <reference path="../paper-listbox/paper-listbox.d.ts" />
/// <reference path="../paper-item/paper-icon-item.d.ts" />
/// <reference path="../iron-icon/iron-icon.d.ts" />
/// <reference path="../uuid-generator/uuid-generator.d.ts" />
/// <reference path="../request-actions-panel/request-actions-panel.d.ts" />

declare namespace UiElements {

  /**
   * An element that renders the UI to create a HTTP request.
   *
   * It produces the following values (as element's properties):
   *
   * - url - the request URL
   * - method - HTTP method
   * - headers - HTTP headers string
   * - payload - Request body. It can be either String,
   * [File](https://developer.mozilla.org/en-US/docs/Web/API/File),
   * ([Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob/Blob)), or
   * [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData).
   * - requestActions - List of request actions as defined in
   * `request-actions-panel` element.
   * - responseActions - List of response actions as defined in
   * `request-actions-panel` element.
   * - queryModel - Model for query parameters
   * - headersModel - Model for headers value (not yet implemented)
   *
   * ## Variables
   *
   * Output of abt of this properties can contain a variables in format `${varName}`.
   * Use
   * [variables-evaluator](https://github.com/advanced-rest-client/variables-evaluator)
   * to evaluate variables to the final output.
   *
   * This element works with
   * [variables-manager](https://github.com/advanced-rest-client/variables-manager)
   * that stores variables in the local datastore. It should be placed anywhere
   * in the DOM. The elements uses browser's events system to communicate.
   *
   * ## Events retargeting
   *
   * The editors listens to varous events related to the request state. By default
   * all of the editors listens on a window object. To limit this, set `eventsTarget`
   * on this element to point an element that will be used as events target.
   * This way it is possible to enclose the request panel in a "tab".
   *
   * The `eventsTarget` property is propagated to the editors.
   *
   * Event fired by this or any of the editors will not stop on the `eventsTarget`
   * element and you are responsible to cancel them if nescesary.
   *
   * ## Accessing request data
   *
   * You can access request data by either accessing corresponding property of the
   * element, by listening for `property-changed` event or by listening for
   * `request-data-changed` custom event.
   *
   * Only the last one bubbles through the DOM.
   *
   * ### Example
   *
   * ```html
   * <request-editor
   *  url="{{requestUrl}}"
   *  on-headers-changed="_headersChangedEvent"></request-editor>
   * ```
   *
   * or
   *
   * ```javascript
   * document.body.addEventListener('request-data-changed', (e) => {
   *  console.log(e.detail);
   * });
   * ```
   *
   * ## Authorization panel
   *
   * Authorization panel renders methods to authorize the user.
   * Detailed documentation for authorization is at
   * https://github.com/advanced-rest-client/authorization-panel
   *
   * To make OAuth2 work properly set `oauth2RedirectUri` property to application
   * redirect URI. User should set this value in in provider's settings.
   *
   * ## Request and response actions
   *
   * Request actions allows to (re)set variables before the request is made.
   * Response actions allows to perform a user defined action when the response is ready.
   * More information can be found here:
   * https://github.com/advanced-rest-client/request-actions-panel
   *
   * ### Styling
   *
   * `<request-editor>` provides the following custom properties and mixins for styling:
   *
   * Custom property | Description | Default
   * ----------------|-------------|----------
   * `--request-editor` | Mixin applied to the element | `{}`
   * `--request-editor-url-editor` | Mixin applied to a line with the URL editor | `{}`
   * `--arc-font-subhead` | Theme mixin, applied to the section name title | `{}`
   * `--action-button` | Theme mixin, applied to the acction buttons | `{}`
   * `--request-editor-context-menu-icon-color` | Color of an icon in the context
   * menu | `--primary-color`
   * `--request-editor-context-menu-icon` | Mixin applied to an icon in the
   * context menu | `{}`
   * `--request-editor-main-action-buttons` | Mixin applied to the action buttons
   * next to the URL editor | `{}`
   * `--request-editor-url-input-editor` | Mixin applied to the URL editor | `{}`
   * `--request-editor-method-selector` | Mixin applied to the methos selector in
   * narrow view | `{}`
   * `--request-editor-method-selector-mini` | Mixin applied to the methos selector
   * in wide view | `{}`
   * `--request-editor-context-menu` | Mixin applied to the main action context
   *  menu dropdown | `{}`
   * `--request-editor-context-menu-dropdown` | Mixin applied to the main action
   * context menu dropdown container | `{}`
   * `--request-editor-main-action-button` | Mixin applied to the send / abort
   * buttons | `{}`
   * `--request-editor-tabs-container` | Mixin applied to the headers and body
   * editors container | `{}`
   * `--request-editor-tab-selected` | Mixin applied to selected tab | `{}`
   *
   * To style edtors use variables defined in the following elements:
   * - [url-input-editor](https://github.com/advanced-rest-client/url-input-editor)
   * - [headers-editor](https://github.com/advanced-rest-client/headers-editor)
   * - [http-method-selector](https://github.com/advanced-rest-client/http-method-selector)
   * - [payload-editor](https://github.com/advanced-rest-client/payload-editor)
   * - [variables-editor](https://github.com/advanced-rest-client/variables-editor)
   *
   * Also paper elements: `paper-button`, `paper-tab`, and `paper-tabs`
   */
  class RequestEditor extends
    ArcBehaviors.EventsTargetBehavior(
    Polymer.Element) {

    /**
     * Selected request tab.
     */
    selectedTab: number|null|undefined;

    /**
     * Current content type.
     */
    contentType: string|null|undefined;

    /**
     * Computed value if the method can carry a payload
     */
    isPayload: boolean|null|undefined;

    /**
     * Headers for the request.
     */
    headers: string|null|undefined;

    /**
     * Body for the request
     */
    payload: string|null|undefined;

    /**
     * Current URL
     */
    url: string|null|undefined;

    /**
     * Current HTTP method
     */
    method: string|null|undefined;

    /**
     * Query parameters model generated by the URL editor.
     */
    queryModel: any[]|null|undefined;

    /**
     * List of request actions to be performed when the response is received
     */
    responseActions: any[]|null|undefined;

    /**
     * List of request actions to be performed before request is send
     */
    requestActions: any[]|null|undefined;

    /**
     * If set it will renders the view in the narrow layout.
     */
    narrow: boolean|null|undefined;

    /**
     * A widith below which the `narrow` property will be set to true.
     */
    narrowWidth: string|null|undefined;

    /**
     * Computed value when the URL change.
     * If not valid form submission won't be possible.
     */
    urlInvalid: boolean|null|undefined;

    /**
     * Removes the URL editor from the DOM.
     * It will also cause that the `url` property will be empty and
     * on events fired by this element.
     */
    noUrlEditor: boolean|null|undefined;

    /**
     * When set it will display the UI to indicate that the request is being
     * send.
     */
    loadingRequest: boolean|null|undefined;

    /**
     * True if the editor panel is opened
     */
    collapseOpened: boolean|null|undefined;

    /**
     * Redirect URL for the OAuth2 authorization.
     * If can be also set by dispatching `oauth2-redirect-url-changed`
     * with `value` property on the `detail` object.
     */
    oauth2RedirectUri: string|null|undefined;

    /**
     * If set then it renders an option in request context menu to
     * toggle to XHR request via the extension.
     * It's only relevant to ARC Chrome app.
     */
    xhrExtension: boolean|null|undefined;

    /**
     * Current state of XHR toggle button
     */
    _useXhrExtension: boolean|null|undefined;

    /**
     * Generated request ID when the request is sent. This value is reported
     * in send and abort events
     */
    requestId: string|null|undefined;

    /**
     * Current authorization panel settings.
     */
    authSettings: object|null|undefined;
    _attachListeners(node: any): void;
    _detachListeners(node: any): void;

    /**
     * Toggles body panel.
     */
    toggle(): void;

    /**
     * Called each time if any of `method`, `url`, 'payload' or `headers` filed
     * change. Fires the `request-data-changed` custom event with current values
     * of the request.
     */
    notifyRequestChanged(): void;

    /**
     * Serializes current request data into an object.
     *
     * @returns Request data object with the following keys:
     * - url (can be empty)
     * - method (can be empty)
     * - headers (can be empty)
     * - payload (can be undefined)
     * - auth (can be undefined)
     * - actions (can be undefined)
     * - queryModel (Array)
     */
    serializeRequest(): object|null;

    /**
     * Computes class for the toggle's button icon.
     */
    _computeToggleIconClass(opened: any): any;
    _computeToggleLabel(opened: any): any;

    /**
     * Handles change to `isPayload` property. Restores payload editor tab
     * if needed.
     */
    _isPayloadChanged(isPayload: any): void;

    /**
     * Called when the selected tab changes. Refreshes payload editor state
     * (for code mirror) if currently selected.
     */
    _refreshPayload(selectedTab: any): void;

    /**
     * Handles an event dispatched by eny of the child elements.
     * It cancels the even and stops it's propagation and the sends the request
     */
    _sendRequestInner(e: any): void;

    /**
     * Sends the `api-request` custom event to send the request.
     */
    _sendRequest(): void;

    /**
     * Sends the `abort-api-request` custom event to cancel the request.
     */
    _abortRequest(): void;

    /**
     * Clears the URL value if the URL editor is removed.
     */
    _noUrlEditorChanged(value: any): void;

    /**
     * Deselects menu item if the URL editor is present.
     */
    _unselectRequestMenu(): void;

    /**
     * Toggles state of the use XHR extension toggle button.
     */
    toggleXhr(e: any): void;

    /**
     * Fires the `request-use-xhr-changed` custom event to inform about
     * toggle button status change.
     */
    _useXhrExtensionChanged(newValue: any, oldValue: any): void;

    /**
     * Fires cancelable `request-save-state` custom event so the application
     * can save the request object.
     */
    saveRequestState(): void;

    /**
     * Clears the request properties and sends cancelable `request-clear-state`
     * custom event.
     */
    clearRequest(): void;
    _authRedirectChanged(e: any): void;
  }
}

interface HTMLElementTagNameMap {
  "request-editor": UiElements.RequestEditor;
}
