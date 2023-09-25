import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components";
import { Home } from "../../screens/Home/home.view";
import { Icon } from "../../common/components/Icon";
import { Favorites } from "../../screens/Favorites/favorities.view";
import { SearchBar } from "react-native-screens";
import { Detail } from "../../screens/Detail/detail.view";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export const BottomTabNavigator = () => {
    const { colors } = useTheme()

    return (
        <BottomTab.Navigator
            screenOptions={{
                tabBarActiveTintColor: colors.onSecondary,
                tabBarInactiveTintColor: colors.caption,
                tabBarStyle: {
                    backgroundColor: colors.secondary,

                },
                header: () => null
            }}
        >
            <BottomTab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <Icon icon="home" color={color} size={size} />
                    )
                }}
            />

            <BottomTab.Screen
                name="Favorites"
                component={Favorites}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <Icon icon="favorite" color={color} size={size} />
                    )
                }}
            />

            <BottomTab.Screen
                name="Search"
                component={Detail}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <Icon icon="search" color={color} size={size} />
                    )
                }}
            />

        </BottomTab.Navigator>
    )
}