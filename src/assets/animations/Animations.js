import React, { useRef, useEffect } from 'react';
import Lottie from 'lottie-react-native';

export const Icon1 = (change) => {
  const animationRef = useRef(null);

  useEffect(() => {
    animationRef.current?.play(0, 85);
  }, [change]);

  // async function onChange() {
  //   await setTimeout(() => {
  //   }, 2000);
  //   console.log('played');
  // }

  return (
    <Lottie
      ref={animationRef}
      source={require('./1_icon_2.json')}
      style={{ height: 120 }}
      loop={false}
    />
  );
};

export const Icon2 = (change) => {
  const animationRef = useRef(null);

  useEffect(() => {
    animationRef.current?.play();
  }, [change]);

  return <Lottie
    ref={animationRef}
    source={require('./3_icon.json')}
    style={{ width: '30%', zIndex: 99999 }}
    loop={false}
  />;
};

export const Icon3 = (change) => {
  const animationRef = useRef(null);

  useEffect(() => {
    animationRef.current?.play();
  }, [change]);

  return <Lottie
    ref={animationRef}
    source={require('./4_1.json')}
    loop={false}
    style={{ width: '30%', zIndex: 99999 }}
  />;
};

export const Icon4 = (change) => {
  const animationRef = useRef(null);

  useEffect(() => {
    animationRef.current?.play();
  }, [change]);

  return <Lottie
    ref={animationRef}
    source={require('./6.json')}
    style={{ height: 130 }}
    loop={false} />;
};
