import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Details from "../screens/Details";
import { Header } from "react-native/Libraries/NewAppScreen";


type RootStackParamList ={
  Home:undefined,
  Details:{item:Prouduct}
}

const Rout = createNativeStackNavigator<RootStackParamList>()

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>
export type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'Details'>


const RoutStackNavigator = () => {
  return(
    <Rout.Navigator screenOptions={ {headerStyle:{
      backgroundColor:"#000000"
    },
    headerTintColor:"#fff"
    }}>
      <Rout.Group>
        <Rout.Screen name="Home" component={Home}/>
        <Rout.Screen name="Details" component={Details}/>
      </Rout.Group>
    </Rout.Navigator>
  )
}

export default RoutStackNavigator