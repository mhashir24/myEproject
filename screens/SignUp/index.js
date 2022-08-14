import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import PasswordInputText from 'react-native-hide-show-password-input';

import {
View, 
Text,
Image,
TextInput,
TouchableOpacity,
} from 'react-native';


import register from '../../assets/register.png';
import lock from '../../assets/lock.png';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SignUp = () => {
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  return (

    <View style={{flex:1,backgroundColor:'#008b8b'}}>
      <View style={{flex:0.4, backgroundColor:'#008b8b'}}>
        <Text style={{color:'white', fontWeight:'bold', fontSize:25, marginLeft:20, marginTop:100}}>
        {'Register Now!'}
        </Text>
      </View>

      
      <View style={{flex:1, backgroundColor:'white', borderTopLeftRadius:40, borderTopRightRadius:40}}>
        <Text style={{marginLeft: 25, marginTop:25, color:'#008b8b', fontWeight:'bold', fontSize:15}}>
          {'Email'}
        </Text>

        <View style={{flexDirection:'row'}}>
          <FontAwesome
            name={'star'}
            size={15}
          />

          <View style={{borderBottomWidth:1, flexGrow:1, marginLeft:10, marginRight:25, borderBottomColor:'#dcdcdc'}}>
            <TextInput
            keyboardType = {'default'}
            placeholder = {'Your Email'}
            
            />
          </View>
        </View>

        <Text style={{marginLeft: 25, marginTop:10, color:'#008b8b', fontWeight:'bold', fontSize:15}}>
          {'Password'}
        </Text>

        <View style={{flexDirection:'row'}}>
          <Image
          style={{width:20, height:20, marginLeft:25, marginTop:15}}
          source = {lock}
          />

        <View style={{flexGrow:1, marginLeft:10, marginTop:-20 ,marginRight:25, borderBottomColor:'#dcdcdc'}}>
          <PasswordInputText
            iconColor={'#008b8b'}
            iconSize={20}
            secureTextEntry
            value={password}
            onChangeText={(value) => setPassword({ value })}
            
            />
          </View>
        </View>

        <Text style={{marginLeft: 25, marginTop:10, color:'#008b8b', fontWeight:'bold', fontSize:15}}>
          {'Confirm Password'}
        </Text>

        <View style={{flexDirection:'row'}}>
          <Image
          style={{width:20, height:20, marginLeft:25, marginTop:15}}
          source = {lock}
          />

          <View style={{flexGrow:1, marginLeft:10, marginTop:-20 ,marginRight:25, borderBottomColor:'#dcdcdc'}}>
            <PasswordInputText
            iconColor={'#008b8b'}
            iconSize={20}
            secureTextEntry
            value={password}
            onChangeText={(value) => setPassword({ value })}
            
            />
          </View>
        </View>

        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', margin:5}}>
         <Text>
           {'By signing up you agree to our '}
         </Text>
         
         <Text style={{fontWeight:'bold'}}>
           {'Terms of service '}
         </Text>

         <Text>
           {'and '}
         </Text>
         </View>

         <View style={{justifyContent:'center', marginLeft:17}}>
         <Text style={{fontWeight:'bold'}}>
           {'Privacy policy.'}
         </Text>
        </View>

        <TouchableOpacity>
        <View style={{marginTop:14, marginHorizontal:35, padding:10, borderWidth:1, borderColor:'#008b8b',
          justifyContent:'center', alignItems:'center', borderRadius:10, backgroundColor:'#008b8b'}}>
        <Text style={{fontWeight:'bold', color:'white'}}>
          {'Sign Up'}
        </Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress = {() => navigation.navigate('Sign In')}>
        <View style={{marginTop:5, marginHorizontal:35, padding:10, borderWidth:1, borderColor:'#008b8b',
          justifyContent:'center', alignItems:'center', borderRadius:10, backgroundColor:'white'}}>
        <Text style={{fontWeight:'bold', color:'#008b8b'}}>
          {'Sign In'}
        </Text>
        </View>
        </TouchableOpacity>




        




      </View>

    </View>

  )}

export default SignUp
