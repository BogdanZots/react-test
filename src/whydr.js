import React from 'react';
import * as ReactRedux from 'react-redux'

if (process.env.NODE_ENV === 'development') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  const ReactRedux = require("react-redux/lib");
  whyDidYouRender(React, {
    trackAllPureComponents: true,
    trackHooks:true,
    logOwnerReasons:true,
    logOnDifferetValues:true,
    trackExtraHooks: [[ReactRedux, "useSelector"]]
  });
}