import React, { useState,useEffect } from "react"
import { View, Image, ViewStyle, TextStyle, ImageStyle, SafeAreaView, StatusBar, TouchableOpacity, Switch,
  ScrollView,
  StyleSheet, } from "react-native"
import { DrawerActions, useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { Button, Header, Screen, Text, TextField, Wallpaper } from "../../components"
import { color, spacing, typography } from "../../theme"
import { scale, verticalScale } from "../../utils/scale"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { styles } from "react-native-fbsdk-next/types/FBLoginButton"
import { TabNavigator, DrawerContent } from "../../navigators"
import Accordion from 'react-native-collapsible/Accordion';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import { useStores } from "../../models"

const FULL: ViewStyle = { flex: 1, flexDirection: "column", backgroundColor: color.background}
const CONTAINER: ViewStyle = {
    backgroundColor: color.transparent,
    //paddingHorizontal: scale(33),
  }
const BOWSER: ImageStyle = {
    alignSelf: "center",
    //marginVertical: spacing[5],
    //marginTop: 272,
    marginTop: verticalScale(272),
    marginBottom: 454.7,
    // maxWidth: 85.3,
    maxWidth: scale(85.3),
    maxHeight: 85.3,
  }
  const WALL: ImageStyle = {
    //alignSelf: "center",
    //marginVertical: spacing[5],
    //marginTop: 272,
    //marginBottom: 454.7,
    maxWidth: 375,
    maxHeight: 812,
  }
  const TEXT: TextStyle = {
    color: color.palette.white,
    fontFamily: typography.primary,
  }
  const BOLD: TextStyle = { fontWeight: "bold" }

  const FOOTER_CONTENT: ViewStyle = {
    //marginTop: verticalScale(33.3), 
    //marginLeft: 33.3,
    marginHorizontal: scale(33.3),
    justifyContent: "space-around",
    //paddingVertical: verticalScale(181.3),
     //maxHeight: verticalScale(53.3) ,
      //maxWidth: 308.3 
  }
  const FOOTER: ViewStyle = {
    marginTop: verticalScale(16.7), 
    //marginLeft: 33.3,
    //marginHorizontal: scale(33.3),
     //maxHeight: verticalScale(53.3) ,
      //maxWidth: 308.3 
  }
  const CONTINUE: ViewStyle = {
    //paddingVertical: spacing[4],
    //paddingHorizontal: spacing[4],
    backgroundColor: color.transparent,
    borderColor: "#ffffff",
    borderWidth: scale(0.3),
    //width: scale(200),
    
  }
  const CONTINUE_TEXT: TextStyle = {
    ...TEXT,
    ...BOLD,
    //fontSize: moderateVerticalScale(15.3),
    letterSpacing: scale(3.07),
    color: "#ffffff",
    //marginTop: 20.7,
    textAlign: "left"
  }
  const APIIMG: ImageStyle = {
    height:verticalScale(66.7),
     width: verticalScale(66.7),
     
     borderColor: "rgb(238, 206, 0)",
     borderWidth: scale(2),
     //borderTopLeftRadius: 200,
     borderRadius: 360,
     //tintColor: "rgb(238, 206, 0)",
     
  }
  const APITEXT: TextStyle = {
    ...TEXT,
    
    paddingHorizontal: scale(18.7), 
    alignSelf:"center", 
    fontSize: scale(20) ,
    letterSpacing: scale(0.5),
    textAlign: "left",
    //marginTop: verticalScale(10.7)
  }
  const APITEXT2: TextStyle = {
    ...TEXT,
    
    //paddingHorizontal: scale(18.7), 
    //alignSelf:"center", 
    fontSize: scale(20) ,
    letterSpacing: scale(0.5),
    textAlign: "left",
    color:"rgb(238, 206, 0)"
    //marginTop: verticalScale(10.7)
  }

  
  
  const BACON_IPSUM =
  'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. ';

const CONTENT = [
  {
    title: 'First',
    content: BACON_IPSUM,
  },
  {
    title: 'Second',
    content: BACON_IPSUM,
  },
  {
    title: 'Third',
    content: BACON_IPSUM,
  },
  {
    title: 'Fourth',
    content: BACON_IPSUM,
  },
  {
    title: 'Fifth',
    content: BACON_IPSUM,
  },
];

const SELECTORS = [
  {
    title: 'First',
    value: 0,
  },
  {
    title: 'Third',
    value: 2,
  },
  {
    title: 'None',
  },
];

  export const MyProfileScreen = observer(function MyProfileScreen() {
    const navigation = useNavigation()
    //const nextScreen = () => navigation.navigate("demo")

    const { catagoryData } = useStores();
    //const isFocused = useIsFocused();
    const [mediaArray, setMediaArray] = React.useState([]);

    console.tron.log("visitedSubCatagory data",catagoryData.visitedSubCatagory);
    let prepareObj = catagoryData.visitedSubCatagory.find(x => x.parentID == 1);
    
    console.tron.log("prepareObj",prepareObj);

    const [activeSections, setActiveSections] = React.useState([]);
    const [collapsed, setCollapsed] = React.useState(true);
    const [multipleSelect, setMultipleSelect] = React.useState(false);

    const toggleExpanded = () => {
      setCollapsed( !collapsed );
    };

    const setSections = (sections) => {
      setActiveSections(
        sections.includes(undefined) ? [] : sections,
      );
    };

    const renderHeader = (section, _, isActive) => {
      return (
        <Animatable.View
          duration={400}
          style={[styles.header, isActive ? styles.active : styles.inactive]}
          transition="backgroundColor"
        >
          <Text style={styles.headerText}>{section.title}</Text>
        </Animatable.View>
      );
    };

    const renderContent = (section, _, isActive) => {
      return (
        <Animatable.View
          duration={400}
          style={[styles.content, isActive ? styles.active : styles.inactive]}
          transition="backgroundColor"
        >
          <Animatable.Text animation={isActive ? 'bounceIn' : undefined}>
            {section.content}
          </Animatable.Text>
        </Animatable.View>
      );
    }

    // const renderSectionTitle = (section) => {
    //   return (
    //     <View >
    //       <Text>{section.content}</Text>
    //     </View>
    //   );
    // };

    // const renderHeader = (section) => {
    //   return (
    //     <View >
    //       <Text >{section.title}</Text>
    //     </View>
    //   );
    // };

    // const renderContent = (section) => {
    //   return (
    //     <View >
    //       <Text>{section.content}</Text>
    //     </View>
    //   );
    // };

    // const updateSections = (activeSections) => {
    //   setActiveSections(activeSections);
    // };

  
    return (
      <View style={FULL}>
          <StatusBar
            backgroundColor="transparent"
            translucent={true}
            />
          <Wallpaper preset="cover" />
          <Screen style={CONTAINER} preset="fixed" backgroundColor={color.transparent}>
              <Header 
                          headerTx="myProfileScreen.myprofile"
                          //leftIcon="back"
                          rightIcon="back"
              />
                <View style={FOOTER_CONTENT}>
                <View style={{flexDirection: "row"}}>
                <Image source={{
                     uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}  style={APIIMG} />
                <Text style={APITEXT}>Details.</Text></View>

        </View>

        <Text style={APITEXT2}>Saved Catagory</Text>
        <TextField label="" placeholder="Search Catagoriess" placeholderTextColor="rgb(254, 254, 254) " 
          //onChangeText={(val) => textInputChange(val)}
          //onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
          //autoFocus={true}
        //returnKeyType="next"
        //onSubmitEditing={() => ref_input2.current.focus()}
          />
          {/* <Button
                  style={CONTINUE}
                  textStyle={CONTINUE_TEXT}
                  // tx="welcomeScreen.continue"
                  text="prepare"
                  
                  //onPress={() => {navigation.navigate('subcatagory',{ parentId: item.id })}}
                />
                <Button
                  style={CONTINUE}
                  textStyle={CONTINUE_TEXT}
                  // tx="welcomeScreen.continue"
                  text="learn"
                  
                  //onPress={() => {navigation.navigate('subcatagory',{ parentId: item.id })}}
                />
                <Button
                  style={CONTINUE}
                  textStyle={CONTINUE_TEXT}
                  // tx="welcomeScreen.continue"
                  text="train"
                  
                  //onPress={() => {navigation.navigate('subcatagory',{ parentId: item.id })}}
                /> */}


              <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={{color:"black"}}>Profile!</Text>
        <View style={styles.container}>
        <ScrollView contentContainerStyle={{ paddingTop: verticalScale(30) }}>
          <Text style={styles.title}>Accordion Example</Text>

          {/* <View style={styles.multipleToggle}>
            <Text style={styles.multipleToggle__title}>Multiple Select?</Text>
            <Switch
              value={multipleSelect}
              onValueChange={(a) => setMultipleSelect( a )}
            />
          </View>

          <View style={styles.selectors}>
            <Text style={styles.selectTitle}>Select:</Text>

            {SELECTORS.map((selector) => (
              <TouchableOpacity
                key={selector.title}
                onPress={() => setSections([selector.value])}
              >
                <View style={styles.selector}>
                  <Text
                    style={
                      activeSections.includes(selector.value) &&
                      styles.activeSelector
                    }
                  >
                    {selector.title}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View> */}

          {/* <TouchableOpacity onPress={toggleExpanded}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Single Collapsible</Text>
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={collapsed} align="center">
            <View style={styles.content}>
              <Text>
                Bacon ipsum dolor amet chuck turducken landjaeger tongue spare
                ribs
              </Text>
            </View>
          </Collapsible> */}
          <Accordion
            activeSections={activeSections}
            sections={CONTENT}
            touchableComponent={TouchableOpacity}
            expandMultiple={multipleSelect}
            renderHeader={renderHeader}
            renderContent={renderContent}
            duration={400}
            onChange={setSections}
            renderAsFlatList={false}
          />
        </ScrollView>
      </View>
        {/* <Accordion
        sections={SECTIONS}
        activeSections={activeSections}
        renderSectionTitle={renderSectionTitle}
        renderHeader={renderHeader}
        renderContent={renderContent}
        onChange={updateSections}
      /> */}

        <View style={{flex: 1, justifyContent: "flex-end", position: "relative", marginLeft: scale(187), marginBottom: verticalScale(-125) }}>
                <Image source={require("./sahpe.png")} resizeMode="contain" />
                {/* <Image source={require("./sahpe.png")} resizeMode="contain" /> */}
              </View>
      </View>

          </Screen>
        </View>
  )
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#F5FCFF',
    //paddingTop: Constants.statusBarHeight,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    //backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 20,
    //backgroundColor: '#fff',
  },
  active: {
    //backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    //backgroundColor: 'rgba(245,252,255,1)',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    //backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
  },
  multipleToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
    alignItems: 'center',
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
});