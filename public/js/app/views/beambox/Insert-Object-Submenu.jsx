define([
    'jquery',
    'react',
    'jsx!widgets/Dialog-Menu',
    'app/actions/beambox/svgeditor-function-wrapper',
    'helpers/i18n'
], function(
    $,
    React,
    DialogMenu,
    FnWrapper,
    i18n
){
    'use strict';

    const LANG = i18n.lang.beambox.left_panel.insert_object_submenu;

    return React.createClass({

        _closeDialog: function() {
            $('.dialog-opener:checked').removeAttr('checked');
        },

        render: function() {
            return (
                <ul onClick={this._closeDialog}>
                    <li onClick={FnWrapper.insertRectangle}>
                        {LANG.rectangle}
                    </li>
                    <li onClick={FnWrapper.insertEllipse}>
                        {LANG.ellipse}
                    </li>
                    <li onClick={FnWrapper.insertLine}>
                        {LANG.line}
                    </li>
                    <li onClick={FnWrapper.importImage}>
                        {LANG.image}
                    </li>
                    {/* <li onClick={FnWrapper.insertText}>
                        {LANG.text}
                    </li> */}
                </ul>
            );
        }
    });

});