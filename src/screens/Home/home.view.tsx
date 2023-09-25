import { ActivityIndicator, FlatList, RefreshControl, View, SafeAreaView } from "react-native";
import { fethShows } from "../../repositories/shows/shows.repository";
import { useHomeController } from "./home.controller";
import { useTheme } from "styled-components";
import Container from "../../common/components/Container";
import { flatListStyleSheet } from "../../common/utils/flatiList";
import { Logo } from "./styles";
import ShowCover from "../../common/components/ShowCover";
import Spacer from "../../common/components/Spacer";

export function Home() {

    const { colors, spacing } = useTheme()
    const { shows, isRefreshing, loadShows, loading, currentPage } = useHomeController()

    console.log("carregando dados do loading =>>>>> " + shows?.[0])

    return (
        <Container>
            <SafeAreaView>
                <FlatList
                    data={shows}
                    numColumns={2}
                    columnWrapperStyle={flatListStyleSheet.columnWrapperStyle}
                    style={{ paddingHorizontal: spacing.sm }}
                    ListHeaderComponent={() => (
                        <View>
                            <Logo />
                        </View>
                    )}
                    renderItem={({ item, index }) => (
                        <ShowCover
                            key={item.id + index + item.name}
                            url={item.image?.medium}
                            title={item.name}
                            onpress={() => {
                                // abrir tela de detalhes
                            }}
                        />
                    )}
                    ItemSeparatorComponent={() => (
                        <Spacer height={spacing.sm} />
                    )}
                    ListFooterComponent={() => {
                        return (
                            <View>
                                {loading && (
                                    <>
                                        <Spacer height={spacing.lg} />
                                        <ActivityIndicator size={'small'} color={colors.onSecondary} />
                                    </>
                                )}
                                <Spacer height={spacing.sm} />
                            </View>
                        )
                    }}
                    refreshControl={
                        <RefreshControl
                            enabled={!isRefreshing}
                            tintColor={colors.onSecondary}
                            colors={[colors.onSecondary]}
                            refreshing={isRefreshing}
                            onRefresh={() => loadShows(0, true)}
                        />
                    }
                    onEndReached={() => {
                        if (!loading) {
                            loadShows(currentPage)
                        }
                    }}
                    onEndReachedThreshold={0.5}
                />
            </SafeAreaView>
        </Container>
    )
}
