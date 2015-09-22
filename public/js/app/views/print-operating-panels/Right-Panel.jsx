define([
    'jquery',
    'react',
    'app/actions/object-control',
], function($, React, objectController) {
    'use strict';

    var originalColor = '';

    return React.createClass({
        getInitialState: function() {
            return {
                previewOn: false
            };
        },
        componentDidMount: function() {
            objectController.init(this);
        },
        componentWillReceiveProps: function(nextProps) {
            // console.log(nextProps.camera.position);
            objectController.setCameraPosition(nextProps.camera);
        },
        _handlePreviewClick: function(e) {
            this.setState({ previewOn: !this.state.previewOn });
            this.props.onPreviewClick(!this.state.previewOn);
        },
        _handleGetGCode: function() {
            this.props.onDownloadGCode();
        },
        _handleGo: function(e) {
            this.props.onPrintClick();
        },
        _updateCamera: function(camera) {
            this.props.onCameraPositionChange(camera);
        },
        render: function() {
            var lang = this.props.lang.print.left_panel;
            return (
                <div className='rightPanel'>
                    <a className="btn" onClick={this._handlePreviewClick}>Preview</a>
                    <div id="cameraViewController" className="cameraViewController"></div>
                    <svg viewBox="-70 0 400 370">
                        <g onClick={this._handleGetGCode}>
                            <path className="btn get-gcode" d="M86.602,0 l86.602,50 l0,100 l-86.602,50 l-86.602,-50, l0,-100z" fill="#999"></path>
                            <text className="txt-get-gcode" x="0" y="0" fill="#EEE">
                                <tspan x="55" y="85">Get</tspan>
                                <tspan x="25" y="130">GCode</tspan>
                            </text>
                        </g>

                        <g onClick={this._handleGo}>
                            <path className="btn go" d="M180.602,160 l86.602,50 l0,100 l-86.602,50 l-86.602,-50, l0,-100z" fill="#555"></path>
                            <text className="txt-go" x="0" y="0" fill="#EEE">
                                <tspan className="go" x="140" y="280">GO</tspan>
                            </text>
                        </g>
                    </svg>
                </div>
            );
        }
    });
});
