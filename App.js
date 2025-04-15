import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
      headerStyle: {
        backgroundColor: "#f4511e",
      },
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 20,
        color: "white",
      },
      headerTitleAlign: "center",
    },
  }
);

export default createAppContainer(navigator);
