import React, { useState,useEffect, useCallback, useRef  } from "react"
import { View, Image, ViewStyle, TextStyle, ImageStyle, SafeAreaView,ScrollView, StatusBar,Alert, TouchableOpacity, FlatList, Dimensions } from "react-native"
import { DrawerActions, useIsFocused, useNavigation, useRoute } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { Button, Header, Next, Screen, Text, Wallpaper } from "../../components"
import { color, spacing, typography } from "../../theme"
import { scale, verticalScale } from "../../utils/scale"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { styles } from "react-native-fbsdk-next/types/FBLoginButton"
import { TabNavigator, DrawerContent } from "../../navigators"
import { useStores } from "../../models"
import Swiper from 'react-native-swiper'
import {FlatListSlider} from 'react-native-flatlist-slider';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { number } from "mobx-state-tree/dist/internal"
const { height, width } = Dimensions.get('window');
import HTML from "react-native-render-html";
import YoutubePlayer from "react-native-youtube-iframe";



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
    justifyContent: "center",
    //backgroundColor: "white"
    //paddingVertical: verticalScale(181.3),
     //maxHeight: verticalScale(53.3) ,
      //maxWidth: 308.3 
  }
  const FOOTER: ViewStyle = {
    
    //marginTop: verticalScale(16.7), 
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
    height:verticalScale(270.7),
     width: scale(139.7), 
     alignSelf:"center"
     //borderRadius: 50
  }
  const APITEXT: TextStyle = {
    ...TEXT,
    ...BOLD,
    textAlign:"center",
    fontSize: scale(20),
    marginTop:verticalScale(26.3)
  }
  const APIDESC: TextStyle = {
    ...TEXT,
    
    textAlign:"center",
    width:scale(300),
    fontSize: scale(17.3),
    marginTop:verticalScale(16.3)
  }


  const wrapper: ViewStyle={}
  const slide1: ViewStyle={
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  }
  const slide2: ViewStyle= {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  }
  const slide3: ViewStyle= {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  }
  const text1: TextStyle={
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }



  export const MediaScreen = observer(function MediaScreen() {
    const navigation = useNavigation()
    //const nextScreen = () => navigation.navigate("demo")

    const route = useRoute();
    const { sname,parent_Id,orData, type } = newFunction(route);
    //console.tron.log("he",sname);


    const { catagoryData } = useStores();
    const isFocused = useIsFocused()
    useEffect(() => {
      if(isFocused){
        catagoryData.getSubCatagoryData(parent_Id);
        console.tron.log("he",parent_Id,catagoryData.subCatagory);
        //console.tron.log("he",catagoryData.getMainCategoryData(0));
      }
       
    },[isFocused]) 

    //let mediaCatagoryObj = catagoryData.subCatagory.find(x => x.parent_id == parent_Id);
    let mediaCatagoryObj = catagoryData.subCatagory.find(x => x.id == orData);
    console.tron.log("media",mediaCatagoryObj.media)

    const apiData = mediaCatagoryObj.media;
  
    const extractKey = useCallback(
      ({ id }) => '' + id,
      [],
    );

    

     //const [img, setImg] = React.useState(images);
     const [detail, setDetail] = React.useState([]);
     //const [c,setC]= React.useState(0);
     function setApiData(val) {
       setDetail(old => [...old, val])
       return 0;
     }
     

      console.tron.log("detail",detail);

      function list() {
        console.tron.log("list",apiData)
        return apiData.map((data) => {
          
          return (
            
            <View style={slide1}>
            <Text style={text1}>{data.caption}</Text>
          </View>
          
          )
        })
    }
    const [activeSlide,setActiveSlide] = React.useState(0);
    
    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
      if (state === "ended") {
        setPlaying(false);
        Alert.alert("video has finished playing!");
      }
    }, []);
  
    const togglePlaying = useCallback(() => {
      setPlaying((prev) => !prev);
    }, []);

      console.tron.log("apidata", apiData[0].url);

      function video(){
        let videoData = apiData[0].url.toString();
        let newData= videoData.replace("https://youtu.be/","");
          return(
            <>
            <ScrollView style={{ height:verticalScale(height-70)}}>
            <YoutubePlayer
        height={175}
        play={playing}
        videoId={newData}
        onChangeState={onStateChange}
      />
      <Button text={playing ? "pause" : "play"} onPress={togglePlaying} />
      <HTML baseFontStyle={{fontSize: scale(17.3),color: "rgb(255, 255, 255)"}} html={apiData[0].description} />
      </ScrollView>
      </>
            
      
          );
      }

      function image(){
        return(
          <>
              <Carousel
              ref={null}
              data={ apiData }
              renderItem={({item, index}) => {
                return (
                    <View >
                      <Image source={{
                     uri: String(item.url),
                    }} resizeMode="contain" style={APIIMG} />
                        <Text style={APITEXT}>{ item.caption }</Text>
                        
                          <HTML baseFontStyle={{fontSize: scale(17.3),color: "rgb(255, 255, 255)"}} html={item.description} />
                        
                        
                    </View>
                );
            }}
              sliderWidth={scale(304)}
              itemWidth={scale(304)}
              onSnapToItem={(index) => setActiveSlide(index) }
            />
            <Pagination
              dotsLength={apiData.length}
              activeDotIndex={activeSlide}
              
              dotStyle={{
                  width:scale(13.3),
                  height: verticalScale(13.3),
                  borderRadius: 5,
                  marginHorizontal: 8,
                  backgroundColor: 'rgb(238, 206, 0)'
              }}
              inactiveDotStyle={{
                  
                  width:scale(13.3),
                  height: verticalScale(13.3),
                  borderRadius: 5,
                  marginHorizontal: 8,
                  backgroundColor: 'rgb(255, 255, 255)'
              }}
              
              inactiveDotScale={1}
            /> 
            </>
        );
      }

      

    return (
      <View style={FULL}>
          <StatusBar
            backgroundColor="transparent"
            translucent={true}
            />
          <Wallpaper preset="cover" />
          <Screen style={CONTAINER} preset="fixed" backgroundColor={color.transparent}>
              <Header 
                          headerText={sname}
                          leftIcon="back"
                          rightIcon="back"
              />
              <Next 
                          
                          leftIcon="back"
                          rightIcon="back"
              />
              

      
      <View style={FOOTER_CONTENT}>
      { String(type) !== "Video" ? (
        image()
      )
    :
      video()
    }
      
       
        
       
      

           
      
      </View>

<View style={{flex: 1, justifyContent: "flex-end", position: "relative", marginLeft: scale(-10), marginBottom: verticalScale(-125) }}>
                <Image source={require("./sahpe.png")} resizeMode="contain" />
                
              </View> 

          </Screen>
        </View>
  )
})

function newFunction(route): { sname: any, parent_Id: any, orData: any, type: any } {
    return route.params
}
