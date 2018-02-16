[![Build Status](https://travis-ci.org/advanced-rest-client/request-editor.svg?branch=stage)](https://travis-ci.org/advanced-rest-client/request-editor)  

# request-editor

An element that renders the UI to create a HTTP request.

It produces the following values (as element's properties):

- url - the request URL
- method - HTTP method
- headers - HTTP headers string
- payload - Request body. It can be either [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [File](https://developer.mozilla.org/en-US/docs/Web/API/File) ([Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob/Blob)) or [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData).
- requestActions - List of request actions as defined in `request-actions-panel` element.
- responseActions - List of response actions as defined in `request-actions-panel` element.
- queryModel - Model for query parameters
- headersModel - Model for headers value (not yet implemented)

## Variables

Output of abt of this properties can contain a variables in format `${varName}`.
Use [variables-evaluator](https://github.com/advanced-rest-client/variables-evaluator)
to evaluate variables to the final output.

This element works with [variables-manager](https://github.com/advanced-rest-client/variables-manager)
that stores variables in the local datastore. It should be placed anywhere in the DOM. The elements
uses browser's events system to communicate.

## Events retargeting

The editors listens to varous events related to the request state. By default
all of the editors listens on a window object. To limit this, set `eventsTarget`
on this element to point an element that will be used as events target.
This way it is possible to enclose the request panel in a "tab".

The `eventsTarget` property is propagated to the editors.

Event fired by this or any of the editors will not stop on the `eventsTarget`
element and you are responsible to cancel them if nescesary.

## Accessing request data

You can access request data by either accessing corresponding property of the
element, by listening for `property-changed` event or by listening for
`request-data-changed` custom event.
Only the last one bubbles through the DOM.

### Example
```
<request-editor url="{{requestUrl}}" on-headers-changed="_headersChangedEvent"></request-editor>
```
or
```
document.body.addEventListener('request-data-changed', e => {
  console.log(e.detail);
});
```

## Authorization panel

Authorization panel renders methods to authorize the user using varius methods.
Detailed documentation for authorization is at https://github.com/advanced-rest-client/authorization-panel

To make OAuth2 work properly set `oauth2RedirectUri` property to application
redirect URI. User should set this value in in provider's settings.

## Request and response actions

Request actions allows to (re)set variables before the request is made.
Response actions allows to perform a user defined action when the response is ready.
More information can be found here: https://github.com/advanced-rest-client/request-actions-panel

### Styling
`<request-editor>` provides the following custom properties and mixins for styling:

Custom property | Description | Default
----------------|-------------|----------
`--request-editor` | Mixin applied to the element | `{}`
`--request-editor-url-editor` | Mixin applied to a line with the URL editor | `{}`
`--arc-font-subhead` | Theme mixin, applied to the section name title | `{}`
`--action-button` | Theme mixin, applied to the acction buttons | `{}`
`--request-editor-context-menu-icon-color` | Color of an icon in the context menu | `--primary-color`
`--request-editor-context-menu-icon` | Mixin applied to an icon in the context menu | `{}`
`--request-editor-main-action-buttons` | Mixin applied to the action buttons next to the URL editor | `{}`
`--request-editor-url-input-editor` | Mixin applied to the URL editor | `{}`
`--request-editor-method-selector` | Mixin applied to the methos selector in narrow view | `{}`
`--request-editor-method-selector-mini` | Mixin applied to the methos selector in wide view | `{}`
`--request-editor-context-menu` | Mixin applied to the main action context menu dropdown | `{}`
`--request-editor-context-menu-dropdown` | Mixin applied to the main action context menu dropdown container | `{}`
`--request-editor-main-action-button` | Mixin applied to the send / abort buttons | `{}`
`--request-editor-tabs-container` | Mixin applied to the headers and body editors container | `{}`
`--request-editor-tab-selected` | Mixin applied to selected tab | `{}`

To style edtors use variables defined in the following elements:
- [url-input-editor](https://github.com/advanced-rest-client/url-input-editor)
- [headers-editor](https://github.com/advanced-rest-client/headers-editor)
- [http-method-selector](https://github.com/advanced-rest-client/http-method-selector)
- [payload-editor](https://github.com/advanced-rest-client/payload-editor)
- [variables-editor](https://github.com/advanced-rest-client/variables-editor)

Also paper elements: `paper-button`, `paper-tab`, `paper-tabs`, `paper-tooltip`

## RAML support

At the moment the element support RAML types with payload editor.
Set the `ramlType` property to a JSON representation of the RAML type and
it will be passed down to the editor.



### Events
| Name | Description | Params |
| --- | --- | --- |
| abort-request | Fired when the user request to abort current request.  This event can be cancelled. | url **String** - The request URL. Can be empty string. Also uit may be different URL that the one used to send the request if the user changed it in between. |
id **String** - Generated UUID of the request with `send-request` event. |
| request-clear-state | Fired when clear request state option has been selected from the menu. | __none__ |
| request-data-changed | Event fired when any part of the request data change. | url **String** - The request URL. Can be empty string. |
method **String** - HTTP method name. Can be empty. |
headers **String** - HTTP headers string. Can be empty. |
payload **(String&#124;File&#124;FormData)** - Message body. Can be undefined. |
auth **Object** - Always undefined. For future use. |
responseActions **Array.<Object>** - List of response actions |
requestActions **Array.<Object>** - List of request actions |
| request-save-state | Fired when the save action has been requested in the UI. This event is cancelable. | __none__ |
| request-use-xhr-changed | Fired when the state of the toggle XHR button change. It is fired to inform request controlling element to switch to the XHR extension. `xhrExtension` must be set to display the toggle button. | value **Boolean** - Current state of the toggle button |
| send-request | Fired when the user request to send current request.  This event can be cancelled. | url **String** - The request URL. Can be empty string. |
method **String** - HTTP method name. Can be empty. |
headers **String** - HTTP headers string. Can be empty. |
payload **(String&#124;File&#124;FormData)** - Message body. Can be undefined. |
auth **Object** - Always undefined. For future use. |
id **String** - Generated UUID for the request. |
responseActions **Array.<Object>** - List of response actions |
requestActions **Array.<Object>** - List of request actions |
