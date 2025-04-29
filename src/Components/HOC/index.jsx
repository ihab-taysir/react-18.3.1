import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router";

export default (WrappedComponent) => {
  const params = useParams();
  return ({ ...props }) => <WrappedComponent params={params} {...props} />;
};
