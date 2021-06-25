import React, { useState,useEffect, useRef } from "react"
import { View, Image, ViewStyle, TextStyle, ImageStyle, SafeAreaView, Alert, StatusBar } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { BulletItem, Button, Header, Screen, Text, TextField, Wallpaper } from "../../components"
import { color, spacing, typography } from "../../theme"
//import { TextInput } from "react-native-gesture-handler"
import validate from "validate.js"
import { moderateVerticalScale, scale, verticalScale } from "../../utils/scale"

import {GoogleSignin, statusCodes} from '@react-native-google-signin/google-signin'

import { LoginButton, AccessToken } from 'react-native-fbsdk-next';
import { Profile } from "react-native-fbsdk-next";
import { LoginManager } from "react-native-fbsdk-next";
import { Colors } from "react-native/Libraries/NewAppScreen"

import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../../components/context/context';
import { CatagoryModel, useStores } from "../../models"

const bowserLogo = require("./l1.png")

const FULL: ViewStyle = { flex: 1, flexDirection: "column", backgroundColor: color.background }
const CONTAINER: ViewStyle = {
    backgroundColor: color.transparent,
    //flex: 1,
    //flexDirection: "column",
    paddingHorizontal: scale(32.7),
    //paddingHorizontal: spacing[4],
    //opacity: 10,
  }
  const TEXT: TextStyle = {
    color: color.palette.white,
    fontFamily: typography.primary,
  }
  const BOLD: TextStyle = { fontWeight: "bold" }

  const UP: ViewStyle = {
    justifyContent: "space-between",
    //flex: 0.26,
    //flexDirection: "column",
    //marginTop: verticalScale(34.7),
  }
  const BOTTOM: ViewStyle = {
    flex: 1,
    justifyContent: "flex-end",
    //backgroundColor : "red",
    //flex: 0.26,
    //flexDirection: "column",
   // marginTop: verticalScale(34.7),
  }

  const LOTE: ViewStyle = {
    //flex: 0.26,
    //flexDirection: "column",
    marginTop: verticalScale(34.7),
  }
const BOWSER: ImageStyle = {
  width: scale(66.7),
  height: verticalScale(66.7),
   marginHorizontal: scale(0.6),
   resizeMode: "contain",
  }
  const WALL: ImageStyle = {
    //alignSelf: "center",
    //marginVertical: spacing[5],
    //marginTop: 272,
    //marginBottom: 454.7,
    maxWidth: 375,
    maxHeight: 812,
  }

  const TITLE_WRAPPER: ViewStyle = {
    ...TEXT,
    marginTop: verticalScale(18.7),
  }
  const TITLE: TextStyle = {
    ...TEXT,
    ...BOLD,
    fontSize: verticalScale(30),
    
    textAlign: "left",
    color: "rgb(254, 254, 254)",
  }
  const TITLEE: TextStyle = {
    ...TEXT,
    ...BOLD,
    fontSize: verticalScale(16.7),
    //lineHeight: 38,
    textAlign: "left",
    color: "rgb(254, 254, 254)",
  }
  const CONTENT: TextStyle = {
    ...TEXT,
    color: "rgb(254, 254, 254)",
    fontSize: 12,
    //lineHeight: 22,
    //marginBottom: spacing[5],
    textAlign: "left",
    letterSpacing: 5.76,
    maxWidth: 140,
    maxHeight: 9,
    marginLeft: 117.7,
    marginRight: 117.3,
    marginTop: 421.7,
    marginBottom: 381.3,
  }
  const CONTINUE: ViewStyle = {
    //paddingVertical: spacing[4],
    //paddingHorizontal: spacing[4],
    backgroundColor: "rgb(238, 206, 0)",
    
  }
  const CONTINUE_TEXT: TextStyle = {
    ...TEXT,
    ...BOLD,
    //fontSize: moderateVerticalScale(15.3),
    letterSpacing: scale(3.07),
    color: "rgb(0, 0, 0)",
    //marginTop: 20.7,
    textAlign: "left"
  }
  const BU: ViewStyle = {
    //flex: 0.4,
    //flexDirection: "column",
    //marginTop: verticalScale(33.3), 
    //marginLeft: 33.3,
    //marginHorizontal: scale(0.6),
     //maxHeight: verticalScale(53.3) ,
      //maxWidth: 308.3 
  }
  const FOOTER: ViewStyle = { 
  }
  const FOOTER_CONTENT: ViewStyle = {
    marginTop: verticalScale(33.3), 
    //marginLeft: 33.3,
    marginHorizontal: scale(0.6),
     //maxHeight: verticalScale(53.3) ,
      //maxWidth: 308.3 
  }
  const EMPA: ViewStyle = {
    //flex: 0.34,
    //flexDirection: "column",
    marginTop: verticalScale(46.3),
    marginHorizontal: scale(0.6),
  }
  const EMAIL: ViewStyle = { //marginTop: 46.3, 
    //marginBottom: 501.7
    marginTop: 46.3, 
    marginLeft: 33.3, 
}
  const EMAIL_CONT: ViewStyle = {
  }
  const EA: TextStyle = { 
      fontSize: verticalScale(12),
      textAlign: "left",
    }
    const EATI: TextStyle = { 

        //marginTop: verticalScale(15.7),
        fontSize: verticalScale(16),
        textAlign: "left",
        color: "rgb(254, 254, 254)",
        //maxWidth: 308.3,
        borderBottomWidth: scale(0.7),
        borderBottomColor: "rgb(254, 254, 254)",
        //borderBottomColor: "rgb(255, 255, 255)",
      }
  const PASS: ViewStyle = { marginTop: 32.7, 
    marginLeft: 33.3,  }
  const PASS_CONT: ViewStyle = {
    marginTop: verticalScale(32.7),
  }
  const PA: TextStyle = { 
    fontSize: moderateVerticalScale(12),
    textAlign: "left",
  }
  const PATI: TextStyle = { 

      //marginTop: verticalScale(20),
      fontSize: verticalScale(16),
      textAlign: "left",
      color: "rgb(254, 254, 254)",
      //maxWidth: 308.3,
      borderBottomWidth: scale(0.7),
      borderBottomColor: "rgb(254, 254, 254)",
      //borderBottomColor: "rgb(255, 255, 255)",
    }

    const ERROR: TextStyle = { 
      marginTop: verticalScale(9.7),
      fontSize: verticalScale(12),
      textAlign: "left",
      color: "#c53838",
    }
    const ERRORR: TextStyle = { 
      fontSize: verticalScale(12),
      textAlign: "left",
      color: "#c53838",
    }

    const FBS: ViewStyle = {
      //paddingVertical: spacing[4],
      //paddingHorizontal: spacing[4],
      backgroundColor: "rgb(66, 103, 178)",
      
    }
    const FBST: TextStyle = {
      ...TEXT,
      ...BOLD,
      //fontSize: moderateVerticalScale(15.3),
      //letterSpacing: 3.07,
      color: "rgb(254, 254, 254)",
      //marginTop: 20.7,
      textAlign: "left"
    }
    const FB: ViewStyle = {  }
    const FB_CONT: ViewStyle = {
      //marginTop: verticalScale(104.7), 
      //marginLeft: 33.3, 
      marginHorizontal: scale(0.6),
      //maxHeight: 53.3 , 
      //maxWidth: 308.3,
    }

    const GMS: ViewStyle = {
      //paddingVertical: spacing[4],
      //paddingHorizontal: spacing[4],
      backgroundColor: "rgb(178, 49, 33)",
      
    }
    const GMST: TextStyle = {
      ...TEXT,
      ...BOLD,
      //fontSize: moderateVerticalScale(15.3),
      //letterSpacing: 3.07,
      color: "rgb(254, 254, 254)",
      //marginTop: 20.7,
      textAlign: "left"
    }
    const GM: ViewStyle = { }
    const GM_CONT: ViewStyle = {
      marginTop: verticalScale(10), 
      marginHorizontal: scale(0.6),
    //marginLeft: 33.3,
     //maxHeight: 53.3 , 
     //maxWidth: 308.3, 
    }



export const LoginScreen = observer(function LoginScreen() {
    const navigation = useNavigation()
    //const nextScreen = () => navigation.navigate("demo")

    const { catagoryData } = useStores();
    

    const Users = [
      {
          id: 1, 
          email: 'user1@email.com',
          username: 'user1', 
          password: 'password@', 
          userToken: 'token123'
      },
      {
          id: 2, 
          email: 'user2@email.com',
          username: 'user2', 
          password: 'pass1234', 
          userToken: 'token12345'
      },
      {
          id: 3, 
          email: 'testuser@email.com',
          username: 'testuser', 
          password: 'testpass', 
          userToken: 'testtoken'
      },
  ];

    const [data, setData] = React.useState({
      username: '',
      password: '',
      //token: '',
      check_textInputChange: false,
      secureTextEntry: true,
      isValidUser: true,
      //isValidEmail: true,
      isValidPassword1: true,
      isValidPassword2: true,
      isValidPassword3: true,
  });

  const [isValidPassLength, setIsValidPassLength] = React.useState(true);
  const [isValidPassAplhanu, setIsValidPassAlphanu] = React.useState(true);
  const [isValidPassSpechar, setIsValidPassSpechar] = React.useState(true);

  const [isGmail, setIsGmail] = React.useState({
    userGoogleInfo : {},
    loaded: false,
  });

  useEffect(() => {
    GoogleSignin.configure({
      //scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId : '997533835128-mu1c18jsqpjqekgmnsb5vsblsrqg4vr3.apps.googleusercontent.com',
      offlineAccess : true
    });
  },[]) 
//997533835128-m75l8m1bjlc2fu6fba8ic34e3dfk7pid.apps.googleusercontent.com
  const signInGmail = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setIsGmail({
          ...isGmail,
          userGoogleInfo : userInfo,
          loaded: true
      });
      console.log(userInfo)
    } catch (error) {
      console.log("hi",error.message);
    }
  };

  const currentProfile = () => {
    LoginManager.logInWithPermissions(["public_profile"]).then(
      function(result) {
        if (result.isCancelled) {
          console.log("Login cancelled");
        } else {
          console.log(
            "Login success with permissions: " +
              result.grantedPermissions.toString()
          );
        }
      },
      function(error) {
        console.log("Login fail with error: " + error);
      }
    );

    Profile.getCurrentProfile().then(
      function(currentProfile) {
        if (currentProfile) {
          console.log("The current logged user is: " +
            currentProfile.name
            + ". His profile id is: " +
            currentProfile.userID
          );
        }
      }
    );
  };

  //const { signIn } = React.useContext(AuthContext);

  const textInputChange = (val) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // if( val.trim().length >= 4 ) {
      if( reg.test(val)) {
        setData({
            ...data,
            username: val,
            check_textInputChange: true,
            isValidUser: true
        });
    } else {
        setData({
            ...data,
            username: val,
            check_textInputChange: false,
            isValidUser: false
        });
    }
}

const handlePasswordChange = (val) => {
  //const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
  //
//   if( /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/.test(val)) {
    
    
//     if( /[0-9a-zA-Z]/.test(val)) {
      
//       if( val.trim().length >= 8 ) {
//         setData({
//                  ...data,
//                  password: val,
//                  isValidPassword1: true
//              });
//       }
//           setData({
//         ...data,
//         password: val,
//         isValidPassword2: true
//     });
//   } 
//   else {
//       setData({
//           ...data,
//           password: val,
//           isValidPassword2: false
//       });
//   }
//   setData({
//     ...data,
//     password: val,
//     isValidPassword3: true
// });
    
// } else {
//     setData({
//         ...data,
//         password: val,
//         isValidPassword1: false,
//         isValidPassword2: false,
//         isValidPassword3: false
//     });
// }
  //

  if( val.trim().length >= 8) {
      setData({
          ...data,
          password: val,
          //isValidPassword1: true
          
         
          
      });
      setIsValidPassLength(true);
      console.log("length log");
  
  } else {
      setData({
          ...data,
          password: val,
          isValidPassword1: false
      });
      setIsValidPassLength(false);
      console.log("length log 2");
  }
  
  if( /[0-9a-zA-Z]/.test(val)) {
    setData({
        ...data,
        password: val,
        isValidPassword2: true
    });
    setIsValidPassAlphanu(true);
    console.log("alphanu log");
} else {
    setData({
        ...data,
        password: val,
        isValidPassword2: false
    });
    setIsValidPassAlphanu(false);
    console.log("aplhanu log 2");
}

if( /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/.test(val)) {
  setData({
      ...data,
      password: val,
      isValidPassword3: true
  });
  setIsValidPassSpechar(true);
  console.log("spe. log");
} else {
  setData({
      ...data,
      password: val,
      isValidPassword3: false
  });
  setIsValidPassSpechar(false);
  console.log("spe. log 2");
}
setTimeout(() => {
  console.log("fun", data);
}, 200);

}

const updateSecureTextEntry = () => {
  setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
  });
}

const handleValidUser = (val) => {
  if( val.trim().length >= 4 ) {
      setData({
          ...data,
          isValidUser: true
      });
  } else {
      setData({
          ...data,
          isValidUser: false
      });
  }
}

const loginHandle = (userName, password) => {

  const foundUser = Users.filter( item => {
      return userName == item.username && password == item.password ;
  } );

  if ( data.username.length == 0 || data.password.length == 0 ) {
      Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
          {text: 'Okay'}
      ]);
      return;
  }

  else if ( foundUser.length == 0 ) {
      Alert.alert('Invalid User!', 'Username or password is incorrect.', [
          {text: 'Okay'}
      ]);
      return;
  }
  //signIn(foundUser);
  catagoryData.authUser("token");
  //if ( data.username == "user1" || data.password == "password" ) 
  //else{
    // Alert.alert('User detail is correct!', 'correct details.', [
    //     {text: 'Okay'}
    // ]);


    //navigation.navigate("dashboard")
    // async (value) => {
    //   try {
    //     await AsyncStorage.setItem('token', 'f')
    //     console.log("correct hai")
    //     navigation.navigate("root")
    //   } catch (e) {
    //     // saving error
    //     console.log("error hai",e)
    //   }
    // }

    //return;
//}
  // signIn(foundUser);
}

const ref_input2 = useRef(null);
//const ref_input3 = useRef();
  
    return (
      <View style={FULL}>
          {/* <Wallpaper style={WALL}/> */}
          
          <StatusBar
        //animated={true}
        backgroundColor="transparent"
        translucent={true}
        // barStyle={statusBarStyle}
        // showHideTransition={statusBarTransition}
        // hidden={hidden} 
         />
          
          <Wallpaper preset="cover" />
          <Screen style={CONTAINER} preset="fixed" backgroundColor={color.transparent}>
          <View style={UP}>
          <View style={LOTE}>
            <Image source={bowserLogo} style={BOWSER} />
            <View style={TITLE_WRAPPER}>
                  <Text style={TITLE} preset="header" tx="splashScreen.welcome" />
                  <Text style={TITLEE} text="sign in to continue" />
            </View>
          </View>
         
        <View style={EMPA}> 
         
        <View style={EMAIL_CONT}>
          {/* <Text style={EA} text="Email  Address" /> */}
          <TextField label="Email Address" placeholder="Enter Email Address" placeholderTextColor="rgb(254, 254, 254) " 
          onChangeText={(val) => textInputChange(val)}
          onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
          autoFocus={true}
        returnKeyType="next"
        onSubmitEditing={() => ref_input2.current.focus()}
          />
        </View>
        { data.isValidUser ? null : 
            
            <Text style={ERROR}>Please Enter Valid Email Address</Text>
            
            }
      

      
        <View style={PASS_CONT}>
          {/* <Text style={PA} text="Password" /> */}
          <TextField label="Password" secureTextEntry={data.secureTextEntry ? true : false} placeholder="Password" placeholderTextColor="rgb(254, 254, 254)" onChangeText={(val) => handlePasswordChange(val)} 
          forwardedRef={ref_input2}
          returnKeyType={"done"}
          onSubmitEditing={() => {loginHandle( data.username, data.password )}}
          />
        </View>
        
        { !isValidPassLength && 
            
            <Text style={ERROR}>Password must be 8 characters long.</Text>
            
            }
           
        { !isValidPassAplhanu && 
            
            <Text style={ERRORR}>alphanumeric.</Text>
            
            }
           
        { !isValidPassSpechar && 
            
            <Text style={ERRORR}>special characters.</Text>
            
            }
     
      </View>

      {/* <View style={BU}> */}
        <View style={FOOTER_CONTENT}>
          <Button
            style={CONTINUE}
            textStyle={CONTINUE_TEXT}
            // tx="welcomeScreen.continue"
            text="SIGN IN"
            //onPress={nextScreen}
            onPress={() => {loginHandle( data.username, data.password )}}
          />
        </View>
        </View>
      
      <View style={BOTTOM}>
        <View style={FB_CONT}>
        {/* <LoginButton
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => console.log("logout.")}/> */}
          <Button
            //testID="next-screen-button"
            style={FBS}
            textStyle={FBST}
            // tx="welcomeScreen.continue"
            text="Login with Facebook"
            onPress={currentProfile}
          />
        </View>
      

      
        <View style={GM_CONT}>
          <Button
            //testID="next-screen-button"
            style={GMS}
            textStyle={GMST}
            // tx="welcomeScreen.continue"
            text="Login with Gmail"
            onPress={signInGmail}
          />
        </View>

        {/* { isGmail.loaded && 
            
            // <Text>Password must be 8 characters long.</Text>
            console.log(isGmail.userGoogleInfo)
            
            } */}
        </View>
      {/* </View> */}

          </Screen>
          
        </View>
  )
})