import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "../screens/Home";
import {FullPostScreen} from "../screens/FullPost";
import {NavigationContainer} from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={"Home"}
                    component={HomeScreen}
                    options={{title: "News"}}
                />
                <Stack.Screen
                    name={"FullPost"}
                    component={FullPostScreen}
                    options={{title: "Full post"}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}