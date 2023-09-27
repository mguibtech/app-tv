import { useRoute } from "@react-navigation/native";
import Container from "../../common/components/Container";
import useMyNavigation  from '../../common/hooks/useMyNavigation'
import { useTheme } from "styled-components";
import { usePersonController } from "./person.controller";
import { Content } from "../../common/components/Content";
import Spacer from "../../common/components/Spacer";
import { FlatList, Pressable } from "react-native";
import { Icon } from "../../common/components/Icon";
import { flatListStyleSheet } from "../../common/utils/flatiList";
import ShowCover from "../../common/components/ShowCover";
import { Avatar } from "../../common/components/Avatar";
import { Name } from "./styles";
import Text from "../../common/components/Text"

export function Person(){

    const { params:{person} } = useRoute<PersonRouteProp>()
    const { navigate, goBack } = useMyNavigation()

    const {spacing, colors} = useTheme()

    const { castCredts } = usePersonController({person});
    return(
        <Container>
            <Content>
                <Spacer height={spacing.md}/>
                <Pressable onPress={goBack}>
                    <Icon icon="arrowLeft" color={colors.onSecondary} />
                </Pressable>
                <Spacer height={spacing.lg}/>
                <FlatList
                    key={'list-shos'}
                    data={castCredts}
                    columnWrapperStyle={flatListStyleSheet.columnWrapperStyle}
                    numColumns={2}
                    ItemSeparatorComponent={() => <Spacer height={spacing.md}/>}
                    renderItem={({item}) => (
                        <ShowCover 
                            key={item._embedded.show.id}
                            url={item._embedded.show.image?.medium}
                            title={item._embedded.show.name}
                            onpress={() => navigate("Details", {show: item._embedded.show})}
                        />
                    )}
                    ListHeaderComponent={() => {
                        return(
                            <>
                                <Avatar size="large" url={person.image?.medium} name={person.name}/>
                                <Spacer height={spacing.md}/>
                                <Name>{person.name}</Name>
                                <Spacer height={spacing.lg}/>
                                {
                                    castCredts.length > 0 && (
                                        <>
                                            <Text color="caption">Cast Credits</Text>
                                            <Spacer height={spacing.md}/>
                                        </>
                                    )
                                }
                            </>
                        )
                    }}
                    ListFooterComponent={() => <Spacer height={spacing.lg}/>}
                />

            </Content>
        </Container>
    )
}