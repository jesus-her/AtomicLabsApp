import React from "react";
import { ScrollView } from "react-native";
import { SIZES } from "../constants";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import WorkWithUs from "../components/sections/WorkWithUs";
import AtomicTeam from "../components/sections/AtomicTeam";
import Footer from "../components/Footer";

const HomeScreen = () => {
  /*Function for ScrollTo*/
  this.scrollListRefTop = undefined;

  const onPressTouch = () => {
    this.scrollListRefTop.scrollTo({
      x: 0,
      y: SIZES.height,
      animated: true,
    });
  };

  return (
    <>
      <ScrollView
        ref={(ref) => {
          this.scrollListRefTop = ref;
        }}
        style={{ flex: 1 }}
        pagingEnabled={false}
        showsVerticalScrollIndicator={false}
      >
        <Hero onPressTouch={onPressTouch} />
        <About />
        <WorkWithUs />
        <AtomicTeam />
        <Footer />
      </ScrollView>
    </>
  );
};

export default HomeScreen;
