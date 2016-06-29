import AppDispatcher from '../../dispatcher/AppDispatcher';
import SampleConstants from '../../constants/core/constant';

var SampleAction = {
  invokeCounter: function () {
    //dispatch action
    AppDispatcher.handleViewAction({
      actionType: SampleConstants.INCREMENT,
      data: 'Sampledata',
    });
  },
};

export default SampleAction;