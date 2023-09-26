import { View } from "react-native";
import { useDetailController } from "./detail.controller";
import { useRoute } from "@react-navigation/native";


export function Detail(){
    /**
     * Navigation
     */
    const {params:{show}} = useRoute<DetailRouteProp>()

    const { 
        episodes, 
        seasons,
        formattedDate,
        generes,
        moreSummary,
        schedule,
        selectedSeason,
        summaryWithotHTML
     } = useDetailController({show})
    console.log(
        "Dados recebidos da API =>>>>>  ", formattedDate, generes
    )

    return(
        <View style={{flex:1, backgroundColor: "red"}}>

        </View>
    )
}