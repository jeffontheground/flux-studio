/**
 * check device status and action
 */
define([
    'jquery',
    'helpers/i18n',
    'helpers/device-master',
    'app/constants/device-constants',
    'app/actions/alert-actions',
    'app/stores/alert-store',
    'app/actions/progress-actions',
    'app/constants/progress-constants'
], function(
    $,
    i18n,
    DeviceMaster,
    DeviceConstants,
    AlertActions,
    AlertStore,
    ProgressActions,
    ProgressConstants
) {
    'use strict';

    var lang = i18n.get();

    return function(printer, allowPause, forceAbort) {
        if(!printer) { return; }
        var deferred = $.Deferred(),
            onYes = function(id) {
                var timer;

                DeviceMaster.selectDevice(printer).then(function() {
                    switch (id) {
                    case 'kick':
                        DeviceMaster.kick().then(function() {
                            deferred.resolve('ok');
                        });
                        break;
                    case 'abort':
                        ProgressActions.open(ProgressConstants.NONSTOP);
                        DeviceMaster.stop().then(function() {
                            timer = setInterval(function() {
                                DeviceMaster.getReport().then(function(report) {
                                    if (report.st_id === DeviceConstants.status.ABORTED) {
                                        setTimeout(function() {
                                            DeviceMaster.quit();
                                        }, 500);
                                    }
                                    else if(report.st_id === DeviceConstants.status.IDLE) {
                                        clearInterval(timer);
                                        ProgressActions.close();
                                        deferred.resolve('ok', report.st_id);
                                    }
                                });
                            }, 1000);
                        });
                        break;
                    }
                });

                AlertStore.removeYesListener(onYes);
            };

        deferred.always(function() {
            AlertStore.removeYesListener(onYes);
        });

        switch (printer.st_id) {
            // null for simulate
            case null:
            // null for not found default device
            case undefined:
            case DeviceConstants.status.IDLE:
                // no problem
                deferred.resolve('ok');
                break;
            case DeviceConstants.status.RAW:
            case DeviceConstants.status.SCAN:
            case DeviceConstants.status.MAINTAIN:
                // ask kick?
                ProgressActions.close();
                AlertActions.showPopupYesNo('kick', lang.message.device_is_used);
                AlertStore.onYes(onYes);
                break;
            case DeviceConstants.status.COMPLETED:
            case DeviceConstants.status.ABORTED:
                // quit
                DeviceMaster.selectDevice(printer)
                .then(() => {
                    return DeviceMaster.quit();
                })
                .then(() => {
                    deferred.resolve('ok');
                });
                break;
            case DeviceConstants.status.RUNNING:
            case DeviceConstants.status.PAUSED:
            case DeviceConstants.status.PAUSED_FROM_STARTING:
            case DeviceConstants.status.PAUSED_FROM_RUNNING:
            case DeviceConstants.status.PAUSING_FROM_STARTING:
            case DeviceConstants.status.PAUSING_FROM_RUNNING:
                if(allowPause) {
                    deferred.resolve('ok', printer.st_id);
                }
                else {
                    // ask for abort
                    ProgressActions.close();
                    if (forceAbort) {
                        AlertStore.onYes(onYes);
                        onYes('abort');
                    } else {
                        AlertActions.showPopupYesNo('abort', lang.message.device_is_used);
                        AlertStore.onYes(onYes);
                    }
                }
                break;
            default:
                // device busy
                console.log('Device Busy ', printer.st_id);
                ProgressActions.close();
                AlertActions.showDeviceBusyPopup('on-select-printer');
                break;
        }

        return deferred.promise();
    };
});
