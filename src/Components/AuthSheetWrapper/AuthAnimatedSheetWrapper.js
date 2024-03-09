// import {MotiView} from 'moti';
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Easing} from 'react-native-reanimated';
import AuthHeader from '../AuthHeader/AuthHeader';
import AuthHeading from '../AuthHeading/AuthHeading';
const AuthAnimatedSheetWrapper = ({
  children,
  authHeadingTitle = "Login",
  authHeadingSubTitle = "Please login to continue",
}) => {
  return (
    <View style={styles.root}>
      <SafeAreaView />
      <AuthHeader />
      {/* <MotiView
        style={styles.motiStyle}
        from={{
          opacity: 0,
          translateY: 1000,
        }}
        animate={{
          translateY: 1,
          opacity: 1,
        }}
        transition={{
          type: 'timing',
          duration: 700,
          delay: 100,
          easing: Easing.out(Easing.ease),
        }}> */}
        <View style={styles.container}>
          <View style={styles.innerContainer} animation={'fadeInUpBig'}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              bounces={false}
              contentContainerStyle={
                Platform.OS === 'android' ? {minHeight: '100%'} : {flex: 1}
              }
              // contentContainerStyle={{flex: 1}}
              style={styles.scrollViewStyle}
              keyboardShouldPersistTaps="always">
              <View style={styles.heading}>
                <AuthHeading
                  title={authHeadingTitle}
                  desc={authHeadingSubTitle}
                  style={styles.authHeadingComponent}
                />
                {children}
              </View>
            </ScrollView>
          </View>
        </View>
      {/* </MotiView> */}
    </View>
  );
};
export default AuthAnimatedSheetWrapper;

const styles = StyleSheet.create({
  motiStyle: {
    flex: 1,
  },
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  authHeadingComponent: {
    marginBottom: 30,
    marginTop: 12,
    marginHorizontal: 12,
  },
  innerContainer: {
    height: '100%',
    paddingVertical: 25,
    paddingHorizontal: 30,
    paddingBottom: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  scrollViewStyle: {
    padding: 0,
    margin: 0,
    flex: 1,
  },
  heading: {
    flex: 1,
  },
});
