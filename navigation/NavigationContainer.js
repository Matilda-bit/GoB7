import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { NavigationActions } from "react-navigation";

import PlacesNavigator from "./PlacesNavigator";

const NavigationContainer = (props) => {
  // useRef - to get accsess to navigate PlacesNavigator functionality
  //can navigate outside the navigator
  const navRef = useRef();
  const isAuth = useSelector((state) => !!state.auth.token);
  //lisen to my auth.token
  useEffect(() => {
    if (!isAuth) {
      navRef.current.dispatch(
        NavigationActions.navigate({ routeName: "Auth" })
      );
    }
  }, [isAuth]);

  return <PlacesNavigator ref={navRef} />;
};

export default NavigationContainer;
