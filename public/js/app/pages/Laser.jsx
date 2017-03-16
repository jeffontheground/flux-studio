define([
    'jquery',
    'react',
    'jsx!views/laser/Setup-Panel',
    'jsx!pages/Holder'
], function(
    $,
    React,
    LaserSetupPanel,
    HolderGenerator
) {
    'use strict';
    
    return function(args) {
        args = args || {};

        let Holder = HolderGenerator(args);

        let view = React.createClass({
                getDefaultProps: function() {
                    return {
                        page: React.PropTypes.string
                    };
                },

                renderSetupPanel: function(holder) {
                    return <LaserSetupPanel
                        page={holder.props.page}
                        className="operating-panel"
                        imageFormat={holder.state.fileFormat}
                        defaults={holder.state.setupPanelDefaults}
                        onLoadCalibrationImage = { holder._onLoadCalibrationImage }
                        ref="setupPanel"
                        onShadingChanged={holder._onShadingChanged}
                    />;
                },

                render: function() {
                    console.log('Load Holder', Holder);
                    // return <div />;
                    
                    return <Holder page={this.props.page} renderSetupPanel={this.renderSetupPanel} />;
                }
        });

        return view;
    };
});