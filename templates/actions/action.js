var AppDispatcher = require('../../dispatcher/AppDispatcher');
var SampleConstants = require('../../constants/core/constant');

var SampleAction = {
  invokeCounter: function () {
    //dispatch action
    AppDispatcher.handleViewAction({
      actionType: SampleConstants.INCREMENT,
      data: 'Sampledata',
    });
  },
};

module.exports = SampleAction;