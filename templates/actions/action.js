var AppDispatcher = require('../dispatcher/AppDispatcher');
//var SampleConstants = require('../constants/SampleConstants');

var SampleAction = {
  invokeSampleAction: function () {
    //dispatch action
    AppDispatcher.handleViewAction({
      actionType: SampleConstants.SAMPLE,
      data: 'Sampledata',
    });
  },
};

module.exports = SampleAction;