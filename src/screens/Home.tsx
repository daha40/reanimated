import { View, Button , TextInput, ScrollView,Image} from 'react-native'
import React from 'react'
import { HomeScreenProps } from '../navigation/RoutStacks'
import Animated, { useSharedValue, withTiming ,withSpring, useAnimatedStyle } from 'react-native-reanimated'

const Animatedinput = Animated.createAnimatedComponent(TextInput)

const Home = ({navigation}:HomeScreenProps) => {
  const width = useSharedValue(150);
  const height = useSharedValue(150);
  const backgroundColor = useSharedValue('teal');

  const startAnimation = () =>{
    const randomWidth = Math.floor(Math.random() * 300) + 100;
    const randomheight = Math.floor(Math.random() * 300) + 100;
    const randomBgColor = '#' + Math.floor(Math.random() * 123456789).toString();

    backgroundColor.value = withTiming(randomBgColor , {duration:900})
    width.value = withSpring(randomWidth)
    height.value = withTiming(randomheight, {duration:1000})
  }


  const animatedStyle = useAnimatedStyle( () => {
      return{
        width: width.value,
        height: height.value,
        backgroundColor: backgroundColor.value,
      }
  }) 


  const inputstyle = useAnimatedStyle(() => {
    return{
      backgroundColor: backgroundColor.value,
      width:500,
      height:50,
    }
  })

  return (
    <ScrollView>
      <Animatedinput style={inputstyle}/>
      {/*<Button title='go to details' onPress={()=> navigation.navigate('Details')}/>*/}
      <Button title='animation' onPress={startAnimation}/>
      <Animated.View style={animatedStyle}></Animated.View>
    </ScrollView>
  )
}

export default Home
