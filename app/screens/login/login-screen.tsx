import React, { useState,useEffect } from "react"
import { View, Image, ViewStyle, TextStyle, ImageStyle, SafeAreaView, Alert } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { BulletItem, Button, Header, Screen, Text, TextField, Wallpaper } from "../../components"
import { color, spacing, typography } from "../../theme"
//import { TextInput } from "react-native-gesture-handler"
import validate from "validate.js"
import { verticalScale } from "../../utils/scale"

import {GoogleSignin, statusCodes} from '@react-native-google-signin/google-signin'

import { LoginButton, AccessToken } from 'react-native-fbsdk-next';
import { Profile } from "react-native-fbsdk-next";
import { LoginManager } from "react-native-fbsdk-next";

const bowserLogo = require("./l1.png")

const FULL: ViewStyle = { flex: 1, flexDirection: "column", backgroundColor: color.background }
const CONTAINER: ViewStyle = {
    backgroundColor: color.transparent,
    //paddingHorizontal: spacing[4],
    //opacity: 10,
  }
const BOWSER: ImageStyle = {
    marginLeft: 33.3,
    //marginRight: 275,
    //marginVertical: spacing[5],
    marginTop: 78.7,
    //marginBottom: 666.7,
    maxWidth: 66.7,
    maxHeight: 66.7,
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
  const TITLE_WRAPPER: ViewStyle = {
    ...TEXT,
    //textAlign: "left",
    //maxWidth: 221.7,
    //maxHeight: 45.7,
    marginLeft: 32.7,
    //marginRight: 120.7,
    marginTop: 18.7,
    //marginBottom: 602.3,
  }
  const TITLE: TextStyle = {
    ...TEXT,
    ...BOLD,
    fontSize: 30,
    //lineHeight: 38,
    textAlign: "left",
    color: "rgb(254, 254, 254)",
    // maxWidth: 220,
    // maxHeight: 42.3,
    // marginLeft: 77.7,
    // marginRight: 77.3,
    // marginTop: 370,
    // marginBottom: 399.7,
  }
  const TITLEE: TextStyle = {
    ...TEXT,
    ...BOLD,
    fontSize: 16.7,
    //lineHeight: 38,
    textAlign: "left",
    color: "rgb(254, 254, 254)",
    // maxWidth: 220,
    // maxHeight: 42.3,
    // marginLeft: 77.7,
    // marginRight: 77.3,
    // marginTop: 370,
    // marginBottom: 399.7,
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
    fontSize: 15.3,
    letterSpacing: 3.07,
    color: "rgb(0, 0, 0)",
    //marginTop: 20.7,
    textAlign: "left"
  }
  const FOOTER: ViewStyle = { marginTop: 33.3, 
  marginLeft: 33.3, maxHeight: 53.3 , maxWidth: 308.3 }
  const FOOTER_CONTENT: ViewStyle = {
    //paddingVertical: spacing[4],
    //paddingHorizontal: spacing[4],
  }
  const EMAIL: ViewStyle = { //marginTop: 46.3, 
    //marginBottom: 501.7
    marginTop: 46.3, 
    marginLeft: 33.3, 
}
  const EMAIL_CONT: ViewStyle = {
    //paddingVertical: spacing[4],
    //paddingHorizontal: spacing[4],
    
  }
  const EA: TextStyle = { 
      //marginLeft: 33.3,
      //marginRight: 264.3,
      //maxHeight: 9.3,
      //maxWidth: 77.3,
      fontSize: 12,
      textAlign: "left",
    }
    const EATI: TextStyle = { 
        //marginLeft: 33.3,
        //marginRight: 33.3,
        //maxHeight: 29.4,
        //maxWidth: 308.3,
        //paddingTop: 13.7,
        //marginTop: 15.7,
        marginTop: verticalScale(15.7),
        fontSize: 16,
        textAlign: "left",
        color: "rgb(254, 254, 254)",
        maxWidth: 308.3,
        borderBottomWidth: 0.7,
        borderBottomColor: "rgb(254, 254, 254)",
        //borderBottomColor: "rgb(255, 255, 255)",
      }
  const PASS: ViewStyle = { marginTop: 32.7, 
    marginLeft: 33.3,  }
  const PASS_CONT: ViewStyle = {
    //paddingVertical: spacing[4],
    //paddingHorizontal: spacing[4],
  }
  const PA: TextStyle = { 
    //marginLeft: 33.3,
    //marginRight: 264.3,
    //maxHeight: 9.3,
    //maxWidth: 77.3,
    fontSize: 12,
    textAlign: "left",
  }
  const PATI: TextStyle = { 
      //marginLeft: 33.3,
      //marginRight: 33.3,
      //maxHeight: 29.4,
      //maxWidth: 308.3,
      //paddingTop: 13.7,
      marginTop: verticalScale(20),
      fontSize: 16,
      textAlign: "left",
      color: "rgb(254, 254, 254)",
      maxWidth: 308.3,
      borderBottomWidth: 0.7,
      borderBottomColor: "rgb(254, 254, 254)",
      //borderBottomColor: "rgb(255, 255, 255)",
    }

    const FBS: ViewStyle = {
      //paddingVertical: spacing[4],
      //paddingHorizontal: spacing[4],
      backgroundColor: "rgb(66, 103, 178)",
      
    }
    const FBST: TextStyle = {
      ...TEXT,
      ...BOLD,
      fontSize: 15.3,
      //letterSpacing: 3.07,
      color: "rgb(254, 254, 254)",
      //marginTop: 20.7,
      textAlign: "left"
    }
    const FB: ViewStyle = { marginTop: 160.7, 
    marginLeft: 33.3, maxHeight: 53.3 , maxWidth: 308.3, }
    const FB_CONT: ViewStyle = {
      //paddingVertical: spacing[4],
      //paddingHorizontal: spacing[4],
    }

    const GMS: ViewStyle = {
      //paddingVertical: spacing[4],
      //paddingHorizontal: spacing[4],
      backgroundColor: "rgb(178, 49, 33)",
      
    }
    const GMST: TextStyle = {
      ...TEXT,
      ...BOLD,
      fontSize: 15.3,
      //letterSpacing: 3.07,
      color: "rgb(254, 254, 254)",
      //marginTop: 20.7,
      textAlign: "left"
    }
    const GM: ViewStyle = { marginTop: 10, 
    marginLeft: 33.3, maxHeight: 53.3 , maxWidth: 308.3, }
    const GM_CONT: ViewStyle = {
      //paddingVertical: spacing[4],
      //paddingHorizontal: spacing[4],
    }



export const LoginScreen = observer(function LoginScreen() {
    const navigation = useNavigation()
    //const nextScreen = () => navigation.navigate("demo")

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
  const signIn = async () => {
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
      return userName == item.username && password == item.password;
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
  //if ( data.username == "user1" || data.password == "password" ) 
  else{
    Alert.alert('User detail is correct!', 'correct details.', [
        {text: 'Okay'}
    ]);
    return;
}
}

  
    return (
      <View style={FULL}>
          {/* <Wallpaper style={WALL}/> */}
          <Wallpaper preset="cover" />
          <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
          <Image source={bowserLogo} style={BOWSER} />
          <View style={TITLE_WRAPPER}>
                <Text style={TITLE} preset="header" tx="splashScreen.welcome" />
                <Text style={TITLEE} text="sign in to continue" />
          </View>
         
          <SafeAreaView style={EMAIL}>
        <View style={EMAIL_CONT}>
          <Text style={EA} text="Email  Address" />
          <TextField style={EATI} placeholder="Wallace E. Kyser" placeholderTextColor="rgb(254, 254, 254)" 
          onChangeText={(val) => textInputChange(val)}
          onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
          />
          
        </View>
        { data.isValidUser ? null : 
            
            <Text>Please Enter Valid Email Address</Text>
            
            }
      </SafeAreaView>

      <SafeAreaView style={PASS}>
        <View style={PASS_CONT}>
          <Text style={PA} text="Password" />
          <TextField style={PATI} secureTextEntry={data.secureTextEntry ? true : false} placeholder="Password" placeholderTextColor="rgb(254, 254, 254)" onChangeText={(val) => handlePasswordChange(val)} />
        </View>
        
        { !isValidPassLength && 
            
            <Text>Password must be 8 characters long.</Text>
            
            }
           
        { !isValidPassAplhanu && 
            
            <Text>alphanumeric.</Text>
            
            }
           
        { !isValidPassSpechar && 
            
            <Text>special characters.</Text>
            
            }
      </SafeAreaView>

      <SafeAreaView style={FOOTER}>
        <View style={FOOTER_CONTENT}>
          <Button
            //testID="next-screen-button"
            style={CONTINUE}
            textStyle={CONTINUE_TEXT}
            // tx="welcomeScreen.continue"
            text="SIGN IN"
            //onPress={nextScreen}
            onPress={() => {loginHandle( data.username, data.password )}}
          />
        </View>
      </SafeAreaView>
      
      <SafeAreaView style={FB}>
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
      </SafeAreaView>

      <SafeAreaView style={GM}>
        <View style={GM_CONT}>
          <Button
            //testID="next-screen-button"
            style={GMS}
            textStyle={GMST}
            // tx="welcomeScreen.continue"
            text="Login with Gmail"
            onPress={signIn}
          />
        </View>
        {/* { isGmail.loaded && 
            
            // <Text>Password must be 8 characters long.</Text>
            console.log(isGmail.userGoogleInfo)
            
            } */}
      </SafeAreaView>

          </Screen>
        </View>
  )
})