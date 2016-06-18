var AppDispatcher = require('../../dispatcher/AppDispatcher');
var <>Constants = require('../../constants/core/<>constant');

var <> = {
  invokeCounter: function () {
    //dispatch action
    AppDispatcher.handleViewAction({
      actionType: <>Constants.INCREMENT,
      data: 'Sampledata',
    });
  },
};

module.exports = <>;