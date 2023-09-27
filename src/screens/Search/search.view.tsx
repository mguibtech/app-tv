import { useTheme } from "styled-components";
import Container from "../../common/components/Container";
import { Content } from "../../common/components/Content";
import Spacer from "../../common/components/Spacer";
import { useSearchController } from "./search.controller";

import {
    TextButtonFilter,
    RowPerson,
    RowButtonFilter,
    RowPersonName,
    ContainerRowButtons,
    ContentButtonFilter,
} from './styles'
import Text from "../../common/components/Text";
import { Input } from "../../common/components/Input";
import { FlatList, View } from "react-native";
import { flatListStyleSheet } from "../../common/utils/flatiList";
import ShowCover from "../../common/components/ShowCover";
import { useNavigation } from "@react-navigation/native";
import { NotFound } from "../../common/components/NotFound";
import { Avatar } from "../../common/components/Avatar";

export const Search = () => {

    const {
        shows,
        searchText,
        setSearchText,
        searchType,
        setSearchType,
        people,
        loading
    } = useSearchController()

    const { colors, spacing } = useTheme()
    const { navigate } = useNavigation()

    return (
        <Container>
            <Content>
                <Spacer height={spacing.md} />
                <Text color="onSecondary" size={24}>
                    Search
                </Text>
                <Spacer height={spacing.md} />
                <Input
                    value={searchText}
                    onChangeText={setSearchText}
                    returnKeyType="done"
                    loading={loading}
                />

                <Spacer height={spacing.md} />
                <ContainerRowButtons active={!!people.length || !!shows.length}>
                    <RowButtonFilter
                        active={searchType === "show"}
                        onPress={() => setSearchType("show")}
                    >
                        <Text color={searchType === "show" ? "onSecondary" : "caption"} size={16}>
                            Series
                        </Text>
                    </RowButtonFilter>
                    <RowButtonFilter
                        active={searchType === "peeple"}
                        onPress={() => setSearchType("peeple")}
                    >
                        <Text color={searchType === "peeple" ? "onSecondary" : "caption"} size={16}>
                            People
                        </Text>
                    </RowButtonFilter>
                </ContainerRowButtons>
                {searchType === "show" ? (
                    <FlatList
                        data={shows}
                        numColumns={2}
                        columnWrapperStyle={[{ paddingTop: spacing.md }, flatListStyleSheet.columnWrapperStyle]}
                        ItemSeparatorComponent={() => <Spacer height={spacing.md} />}
                        renderItem={({ item, index }) => (
                            <ShowCover key={index + item.show.id + item.show.name}
                                url={item.show.image?.medium}
                                title={item.show.name}
                                onpress={() => navigate("Details", { show: item.show })}

                            />
                        )}
                        ListFooterComponent={() => <Spacer height={spacing.md} />}
                        ListEmptyComponent={() => {
                            if (!searchText.length) {
                                return (
                                    <View>
                                        <Spacer height={spacing.lg} />
                                        <NotFound icon="noResults" title="Search for a show or a person" />
                                    </View>
                                );
                            }
                            return null;
                        }}
                    />
                ) : (
                    <FlatList
                        data={people}
                        numColumns={2}
                        ItemSeparatorComponent={() => <Spacer height={spacing.md} />}
                        renderItem={({ item, index }) => (
                            <RowPerson
                                key={index + item.person.id}
                                onPress={() => navigate("Person", { person: item.person })}
                            >
                                <Avatar url={item.person.image?.medium} name={item.person.name} />
                                <Spacer width={spacing.md} />
                                <RowPersonName>
                                    <Text numberOfLines={1} color="onSecondary" size={16}>
                                        {item.person.name}
                                    </Text>
                                    <Spacer height={spacing.sm} />
                                    <Text color="caption">
                                        {item.person.country?.code}
                                    </Text>
                                </RowPersonName>

                            </RowPerson>


                        )}
                        ListFooterComponent={() => <Spacer height={spacing.md} />}
                        ListEmptyComponent={() => {
                            if (!searchText.length) {
                                return (
                                    <View>
                                        <Spacer height={spacing.lg} />
                                        <NotFound icon="noResults" title="Search for a show or a person" />
                                    </View>
                                );
                            }
                            return null;
                        }}
                    />
                )}
            </Content>
        </Container>
    )
}