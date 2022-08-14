import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import PasswordInputText from 'react-native-hide-show-password-input';

import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';


import register from '../../assets/register.png';
import lock from '../../assets/lock.png';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const SignIn = () => {
  const [password, setPassword] = useState('')
  const [change, setChange] = useState(null)


  const navigation = useNavigation()

  const data = [
    {
      id: '0',
      name: 'star',
    },
    {
      id: '1',
      name: 'user',
    },
    {
      id: '2',
      name: 'home',
    },
    {
      id: '3',
      name: 'star',
    }
  ]

  const selectOption = (item) => {
    let simpleArr = [ ...data ]
    let find = simpleArr.findIndex(i => i.id === item.id)

    setChange(find)
  }

  return (

    <View style={{ flex: 1, backgroundColor: '#008b8b' }}>
      <View style={{ flex: 0.4, backgroundColor: change === false ? '#008b8b' : 'yellow' }}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25, marginLeft: 20, marginTop: 100 }}>
          {'Welcome!'}
        </Text>
      </View>


      <View style={{ flex: 1, backgroundColor: 'white', borderTopLeftRadius: 40, borderTopRightRadius: 40 }}>
        <Text style={{ marginLeft: 25, marginTop: 25, color: '#008b8b', fontWeight: 'bold', fontSize: 15 }}>
          {'Email'}
        </Text>

        <View style={{ flexDirection: 'row' }}>
          <Image
            style={{ width: 20, height: 20, marginLeft: 25, marginTop: 15 }}
            source={register}
          />

          <View style={{ borderBottomWidth: 1, flexGrow: 1, marginLeft: 10, marginRight: 25, borderBottomColor: '#dcdcdc' }}>
            <TextInput
              keyboardType={'default'}
              placeholder={'Your Email'}

            />
          </View>
        </View>

        <Text style={{ marginLeft: 25, marginTop: 10, color: '#008b8b', fontWeight: 'bold', fontSize: 15 }}>
          {'Password'}
        </Text>

        <View style={{ flexDirection: 'row' }}>
          <Image
            style={{ width: 20, height: 20, marginLeft: 25, marginTop: 15 }}
            source={lock}
          />

          <View style={{ flexGrow: 1, marginLeft: 10, marginTop: -20, marginRight: 25, borderBottomColor: '#dcdcdc' }}>
            <PasswordInputText
              iconColor={'#008b8b'}
              iconSize={20}
              secureTextEntry
              value={password}
              onChangeText={(value) => setPassword({ value })}

            />
          </View>
        </View>

        <View style={{ justifyContent: 'center', margin: 5, marginLeft: 25 }}>
          <Text style={{ fontWeight: 'bold', color: '#008b8b' }}>
            {'Forget Password?'}
          </Text>
        </View>

        <TouchableOpacity onPress={() => setChange(!change)}>
          <View style={{
            marginTop: 25, marginHorizontal: 35, padding: 10, borderWidth: 1, borderColor: '#008b8b',
            justifyContent: 'center', alignItems: 'center', borderRadius: 10, backgroundColor: '#008b8b'
          }}>
            <Text style={{ fontWeight: 'bold', color: 'white' }}>
              {'Sign In'}
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Sign Up')}>
          <View style={{
            marginTop: 5, marginHorizontal: 35, padding: 10, borderWidth: 1, borderColor: '#008b8b',
            justifyContent: 'center', alignItems: 'center', borderRadius: 10, backgroundColor: 'white'
          }}>
            <Text style={{ fontWeight: 'bold', color: '#008b8b' }}>
              {'Sign Up'}
            </Text>
          </View>
        </TouchableOpacity>



        {
          change === false ?
            <Image
              style={{ width: 20, height: 20 }}
              source={lock}
            />
            :
            <Image
              style={{ width: 20, height: 20 }}
              source={register}
            />
        }

        <View style={{ flex: 1, backgroundColor: 'yellow', justifyContent: 'space-evenly', height: 50, flexDirection: 'row' }}>


          <FlatList
            data={data}
            horizontal
            contentContainerStyle={{ justifyContent: 'space-evenly', flex: 1 }}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => {
              return (
                <View>
                  <TouchableOpacity onPress={() => selectOption(item)}>
                    <FontAwesome
                      size={25}
                      name={item.name}
                      color={index === change ? 'red' : 'black'}
                    />
                  </TouchableOpacity>
                </View>
              )
            }}
          />
        </View>


      </View>

    </View>

  )
}

export default SignIn
