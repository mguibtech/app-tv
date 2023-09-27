import { FlatList, Platform, Pressable, View, useWindowDimensions } from "react-native";
import { useDetailController } from "./detail.controller";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { useTheme } from "styled-components";
import Container from "../../common/components/Container";
import { Content } from "../../common/components/Content";
import Spacer from "../../common/components/Spacer";
import { Icon } from "../../common/components/Icon";
import { EpisodeCard } from "../../common/components/EpisodeCard";
import {
    RowCover,
    RowFavorite,
    ContentttonSeason,
    RowButtonSeason
} from "./styles";
import ShowCover from "../../common/components/ShowCover";
import Text from "../../common/components/Text";
import { SeasonsModal } from "./localComponents/SeasonsModal";


export function Detail() {
    /**
     * Navigation
     */
    const { params: { show } } = useRoute<DetailRouteProp>()

    const { goBack } = useNavigation();

    /**
     * States
     */
    const [isModalVisile, setIsModalVisible] = useState(false)

    const { colors, spacing } = useTheme()
    const { width } = useWindowDimensions()

    const {
        episodes,
        seasons,
        formattedDate,
        generes,
        moreSummary,
        schedule,
        selectedSeason,
        toggleMoreSummary,
        summaryWithotHTML,
        setSelectedSeason,
        favoritesShows,
        addFavoriteShow,
        removeFavoriteShow
    } = useDetailController({ show })
    console.log(
        "Dados recebidos da API =>>>>>  ", formattedDate, generes
    )

    return (
        <Container>
            <Content>
                <Spacer height={spacing.md} />
                <Pressable onPress={goBack}>
                    <Icon icon="arrowLeft" color={colors.onSecondary} />
                </Pressable>
                <Spacer height={spacing.md} />

                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={episodes}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (<EpisodeCard episode={item} />)}
                    ItemSeparatorComponent={() => <Spacer height={spacing.md} />}
                    ListHeaderComponent={() => {
                        const isFavorite = favoritesShows[show.id];

                        return (
                            <View>
                                <RowCover>
                                    <ShowCover url={show.image?.medium} />
                                    <Spacer width={spacing.md} />
                                    <View style={{ maxWidth: width * 0.4 }}>
                                        <Text>{show.name}</Text>
                                        <Spacer height={spacing.sm} />
                                        <RowFavorite onPress={() => {
                                            if(isFavorite){
                                                removeFavoriteShow(show.id)
                                            }else{
                                                addFavoriteShow(show)
                                            }
                                        }}>
                                            <Text size={16} color="caption">
                                                {show.rating.average}
                                            </Text>
                                            <Spacer width={spacing.sm} />
                                            <Icon icon={isFavorite ? "star" : "starOutline"} color="yellow" />

                                        </RowFavorite>
                                        <Spacer height={spacing.sm} />
                                        <Text color="caption">
                                            {schedule}
                                        </Text>
                                        <Spacer height={spacing.lg} />
                                        <Text color="caption">{formattedDate}</Text>
                                        <Spacer height={spacing.sm} />
                                        <Text size={12} color="caption">{generes}</Text>
                                    </View>
                                </RowCover>
                                <Spacer height={spacing.lg} />
                                <Text>
                                    {summaryWithotHTML.slice(0, moreSummary ? undefined : 200)}
                                    {summaryWithotHTML.length >= 200 && (
                                        <Text onPress={toggleMoreSummary} color="caption">
                                            {moreSummary ? " Show less" : "Show more"}
                                        </Text>
                                    )}
                                </Text>
                                {!!selectedSeason && (
                                    <View>
                                        <Spacer height={spacing.lg}/>
                                        <RowButtonSeason onPress={() => setIsModalVisible(true)}>
                                            <ContentttonSeason>
                                                <Text color="caption">
                                                    Season {selectedSeason.number}
                                                </Text>
                                                <Spacer width={spacing.sm}/>
                                                <Icon icon="menuDown" color={colors.caption}/>
                                            </ContentttonSeason>
                                        </RowButtonSeason>
                                        <Spacer height={Platform.OS === "ios" ? spacing.md : spacing.lg}/>
                                    </View>
                                )}
                            </View>
                        )
                    }}


                />
            </Content>
            <SeasonsModal
                visible={isModalVisile}
                seasons={seasons}
                selectedSeason={selectedSeason}
                setVisible={setIsModalVisible}
                setSelectedSeason={setSelectedSeason}
            />
        </Container>
    )
}