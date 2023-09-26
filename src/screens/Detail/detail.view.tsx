import { View } from "react-native";
import { useDetailController } from "./detail.controller";
import { useRoute } from "@react-navigation/native";


export function Detail(){
    /**
     * Navigation
     */
    const {params:{show}} = useRoute<DetailRouteProp>()

    const { episodes, seasons } = useDetailController({show})
    console.log(
        "Dados recebidos da API =>>>>>  ", episodes, seasons
    )

    return(
        <View style={{flex:1, backgroundColor: "red"}}>

        </View>
    )
}