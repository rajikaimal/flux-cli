import AppDispatcher from '../../dispatcher/AppDispatcher';
import <>Constants '../../constants/core/<>constant';

var <> = {
  invokeCounter: function () {
    //dispatch action
    AppDispatcher.handleViewAction({
      actionType: <>Constants.INCREMENT,
      data: 'Sampledata',
    });
  },
};

export default <>;