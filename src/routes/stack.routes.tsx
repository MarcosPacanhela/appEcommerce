import { createStackNavigator } from '@react-navigation/stack'

import LoginView from '../views/LoginView'
import HomeView from '../views/HomeView'
import CarBuyView from '../views/CarBuyView'
import FinishBuyView from '../views/FinishBuyView'

const { Screen, Navigator } = createStackNavigator()

export function StackRoutes() {
    return (
        <Navigator>
            <Screen
                name='login'
                component={LoginView}
                options={{
                    headerShown: false
                }}
            />
            <Screen
                name='home'
                component={HomeView}
                options={{
                    headerShown: false
                }}
            />
            <Screen
                name='carBuy'
                component={CarBuyView}
                options={{
                    headerShown: false
                }}
            />
            <Screen
                name='finish'
                component={FinishBuyView}
                options={{
                    headerShown: false
                }}
            />
        </Navigator>
    )
}