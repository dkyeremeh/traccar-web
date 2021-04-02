'use strict';

const pngquant = require('imagemin-pngquant');
const jpegtran = require('imagemin-mozjpeg');
const svgo = require('imagemin-svgo');
const gifsicle = require('imagemin-gifsicle');

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    var config = {
        // cssmin: {
        //     build: {
        //         files: {
        //             "web/css/min.css": [
        //             ]
        //         }
        //     }
        // },

        uglify: {
            build: {
                options: {
                    mangle: false,
                    compress: false
                },
                files: {
                    'web/app.min.js': [
                        'web/app/view/TouchFix62.js',
                        'web/app/Style.js',
                        'web/app/AttributeFormatter.js',
                        'web/app/model/Server.js',
                        'web/app/model/User.js',
                        'web/app/model/Group.js',
                        'web/app/model/Device.js',
                        'web/app/model/Position.js',
                        'web/app/model/Attribute.js',
                        'web/app/model/Command.js',
                        'web/app/model/Event.js',
                        'web/app/model/Geofence.js',
                        'web/app/model/Notification.js',
                        'web/app/model/ReportSummary.js',
                        'web/app/model/ReportTrip.js',
                        'web/app/model/ReportStop.js',
                        'web/app/model/Calendar.js',
                        'web/app/model/KnownAttribute.js',
                        'web/app/model/Driver.js',
                        'web/app/model/KnownCommand.js',
                        'web/app/model/KnownNotification.js',
                        'web/app/model/Maintenance.js',
                        'web/app/store/Groups.js',
                        'web/app/store/Devices.js',
                        'web/app/store/AllGroups.js',
                        'web/app/store/AllDevices.js',
                        'web/app/store/AlarmTypes.js',
                        'web/app/store/Positions.js',
                        'web/app/store/LatestPositions.js',
                        'web/app/store/EventPositions.js',
                        'web/app/store/Users.js',
                        'web/app/store/Attributes.js',
                        'web/app/store/MapTypes.js',
                        'web/app/store/DistanceUnits.js',
                        'web/app/store/SpeedUnits.js',
                        'web/app/store/CoordinateFormats.js',
                        'web/app/store/CommandTypes.js',
                        'web/app/store/TimeUnits.js',
                        'web/app/store/Languages.js',
                        'web/app/store/Events.js',
                        'web/app/store/Geofences.js',
                        'web/app/store/AllGeofences.js',
                        'web/app/store/Notifications.js',
                        'web/app/store/AllNotifications.js',
                        'web/app/store/GeofenceTypes.js',
                        'web/app/store/ReportRoute.js',
                        'web/app/store/ReportEvents.js',
                        'web/app/store/ReportTrips.js',
                        'web/app/store/ReportStops.js',
                        'web/app/store/ReportSummary.js',
                        'web/app/store/ReportTypes.js',
                        'web/app/store/ReportEventTypes.js',
                        'web/app/store/ReportChartTypes.js',
                        'web/app/store/ReportPeriods.js',
                        'web/app/model/Statistics.js',
                        'web/app/store/Statistics.js',
                        'web/app/store/DeviceImages.js',
                        'web/app/store/Calendars.js',
                        'web/app/store/AllCalendars.js',
                        'web/app/store/AllTimezones.js',
                        'web/app/store/VisibleDevices.js',
                        'web/app/store/DeviceStatuses.js',
                        'web/app/store/CommonDeviceAttributes.js',
                        'web/app/store/DeviceAttributes.js',
                        'web/app/store/GeofenceAttributes.js',
                        'web/app/store/GroupAttributes.js',
                        'web/app/store/ServerAttributes.js',
                        'web/app/store/CommonUserAttributes.js',
                        'web/app/store/UserAttributes.js',
                        'web/app/model/ComputedAttribute.js',
                        'web/app/store/ComputedAttributes.js',
                        'web/app/store/AllComputedAttributes.js',
                        'web/app/store/PositionAttributes.js',
                        'web/app/store/AttributeValueTypes.js',
                        'web/app/store/Drivers.js',
                        'web/app/store/AllDrivers.js',
                        'web/app/store/KnownCommands.js',
                        'web/app/store/VolumeUnits.js',
                        'web/app/store/AllCommandTypes.js',
                        'web/app/store/Commands.js',
                        'web/app/store/AllCommands.js',
                        'web/app/store/DeviceCommands.js',
                        'web/app/store/AllNotificationTypes.js',
                        'web/app/store/Maintenances.js',
                        'web/app/store/AllMaintenances.js',
                        'web/app/store/MaintenanceTypes.js',
                        'web/app/store/HoursUnits.js',
                        'web/app/model/KnownNotificator.js',
                        'web/app/store/AllNotificators.js',
                        'web/app/view/dialog/Base.js',
                        'web/app/view/dialog/RegisterController.js',
                        'web/app/view/dialog/Register.js',
                        'web/app/view/dialog/LoginController.js',
                        'web/app/view/dialog/Login.js',
                        'web/app/view/MainController.js',
                        'web/app/view/GridPanel.js',
                        'web/app/view/edit/ToolbarController.js',
                        'web/app/view/BaseWindow.js',
                        'web/app/view/dialog/AttributeController.js',
                        'web/app/view/ColorPicker.js',
                        'web/app/view/CustomNumberField.js',
                        'web/app/view/UnescapedTextField.js',
                        'web/app/view/dialog/Attribute.js',
                        'web/app/view/edit/AttributesController.js',
                        'web/app/view/edit/Toolbar.js',
                        'web/app/view/edit/Attributes.js',
                        'web/app/view/dialog/BaseEditController.js',
                        'web/app/view/dialog/SavedCommandController.js',
                        'web/app/view/permissions/BaseController.js',
                        'web/app/view/permissions/Base.js',
                        'web/app/view/permissions/SavedCommands.js',
                        'web/app/view/dialog/SendCommandController.js',
                        'web/app/view/dialog/SendCommand.js',
                        'web/app/view/dialog/BaseEdit.js',
                        'web/app/view/ClearableComboBox.js',
                        'web/app/view/dialog/DeviceController.js',
                        'web/app/view/dialog/Device.js',
                        'web/app/view/permissions/Geofences.js',
                        'web/app/view/permissions/ComputedAttributes.js',
                        'web/app/view/permissions/Drivers.js',
                        'web/app/view/edit/DevicesController.js',
                        'web/app/view/ArrayListFilter.js',
                        'web/app/view/permissions/Notifications.js',
                        'web/app/view/dialog/SelectDeviceController.js',
                        'web/app/view/dialog/SelectDevice.js',
                        'web/app/view/dialog/ComputedAttributeController.js',
                        'web/app/view/UnescapedTextAreaField.js',
                        'web/app/view/dialog/ComputedAttribute.js',
                        'web/app/view/edit/ComputedAttributesController.js',
                        'web/app/view/edit/ComputedAttributes.js',
                        'web/app/view/permissions/Maintenances.js',
                        'web/app/view/dialog/DeviceAccumulatorsController.js',
                        'web/app/view/dialog/DeviceAccumulators.js',
                        'web/app/view/DeviceMenuController.js',
                        'web/app/view/DeviceMenu.js',
                        'web/app/view/edit/Devices.js',
                        'web/app/view/StateController.js',
                        'web/app/view/State.js',
                        'web/app/view/dialog/ReportConfigController.js',
                        'web/app/view/CustomTimeField.js',
                        'web/app/view/dialog/ReportConfig.js',
                        'web/app/view/ReportController.js',
                        'web/app/view/Report.js',
                        'web/app/view/EventsController.js',
                        'web/app/view/Events.js',
                        'web/app/view/map/BaseMap.js',
                        'web/app/DeviceImages.js',
                        'web/app/view/map/MapMarkerController.js',
                        'web/app/GeofenceConverter.js',
                        'web/app/view/map/MapController.js',
                        'web/app/view/dialog/MapPickerController.js',
                        'web/app/view/dialog/UserController.js',
                        'web/app/view/dialog/User.js',
                        'web/app/view/dialog/Server.js',
                        'web/app/view/permissions/Devices.js',
                        'web/app/view/permissions/Groups.js',
                        'web/app/view/permissions/Calendars.js',
                        'web/app/view/permissions/Users.js',
                        'web/app/view/edit/UsersController.js',
                        'web/app/view/edit/Users.js',
                        'web/app/view/dialog/Group.js',
                        'web/app/view/edit/GroupsController.js',
                        'web/app/view/edit/Groups.js',
                        'web/app/view/map/GeofenceMapController.js',
                        'web/app/view/map/GeofenceMap.js',
                        'web/app/view/dialog/GeofenceController.js',
                        'web/app/view/dialog/Geofence.js',
                        'web/app/view/edit/GeofencesController.js',
                        'web/app/view/edit/Geofences.js',
                        'web/app/view/dialog/Driver.js',
                        'web/app/view/edit/DriversController.js',
                        'web/app/view/edit/Drivers.js',
                        'web/app/view/dialog/NotificationController.js',
                        'web/app/view/dialog/Notification.js',
                        'web/app/view/edit/NotificationsController.js',
                        'web/app/view/edit/Notifications.js',
                        'web/app/view/StatisticsController.js',
                        'web/app/view/Statistics.js',
                        'web/app/view/dialog/CalendarController.js',
                        'web/app/view/dialog/Calendar.js',
                        'web/app/view/edit/CalendarsController.js',
                        'web/app/view/edit/Calendars.js',
                        'web/app/view/dialog/SavedCommand.js',
                        'web/app/view/edit/SavedCommandsController.js',
                        'web/app/view/edit/SavedCommands.js',
                        'web/app/view/dialog/MaintenanceController.js',
                        'web/app/view/dialog/Maintenance.js',
                        'web/app/view/edit/MaintenancesController.js',
                        'web/app/view/edit/Maintenances.js',
                        'web/app/view/SettingsMenuController.js',
                        'web/app/view/SettingsMenu.js',
                        'web/app/view/map/Map.js',
                        'web/app/view/Main.js',
                        'web/app/view/MainMobile.js',
                        'web/app/controller/Root.js',
                        'web/app/Application.js'
                    ]
                }
            }
        }

        // babel: {
        //     build: {
        //         files: {
        //             "web/css/min.css": ["web/css/min.es6.css"]
        //         }
        //     }
        // },

        // imagemin: {
        //     static: {
        //         options: {
        //             progressive: true,
        //             optimizationLevel: 7,
        //             svgoPlugins: [{ removeViewBox: false }],
        //             use: [
        //                 pngquant(),
        //                 jpegtran({ quality: 75 }),
        //                 svgo(),
        //                 gifsicle()
        //             ]
        //         },
        //         files: [
        //             {
        //                 expand: true,
        //                 cwd: "web/img/src/",
        //                 src: ["**/*.{png,jpg,gif}"],
        //                 dest: "web/img/"
        //             }
        //         ]
        //     }
        // },

        // watch: {
        //     css: {
        //         files: [
        //         ],
        //         tasks: ["css"]
        //     },

        //     js: {
        //         files: [
        //         ],
        //         tasks: ["js"]
        //     },

        //     gruntFile: {
        //         files: "Gruntfile.js",
        //         tasks: ["css", "js"]
        //     }
        // }
    };

    // configure the tasks
    grunt.initConfig(config);

    // define the tasks
    // grunt.registerTask("css", "Compiles the stylesheets.", ["cssmin"]);
    grunt.registerTask('js', 'Compiles the JavaScript files.', ['uglify']);
    // grunt.registerTask("img", "Compiles images in web/img/src", [
    //     "imagemin"
    // ]);
};
