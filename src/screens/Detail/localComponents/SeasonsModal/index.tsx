import { useTheme } from "styled-components";
import {
    Modal,
    Content,
    ContainerCloseButton,
    ContentCloseButton,
    List,
} from "./syles";
import { SeasonsModalProps } from "./types";
import Spacer from "../../../../common/components/Spacer";
import { View } from "react-native";
import Text from "../../../../common/components/Text";
import { Icon } from "../../../../common/components/Icon";

export function SeasonsModal({
    seasons,
    selectedSeason,
    setSelectedSeason,
    visible,
    setVisible
}: SeasonsModalProps) {
    const { colors, spacing } = useTheme()
    return (
        <Modal transparent visible={visible}>
            <Content>
                <Spacer height={100} />
                <List>
                    {seasons.map((season) => {
                        const isTheSelectSeason = selectedSeason?.id === season.id
                        return (
                            <View key={season.id + 'select season'}>
                                <Spacer height={spacing.md} />
                                <Text
                                    onPress={() => {
                                        setSelectedSeason(season)
                                        setVisible(false)
                                    }}
                                    color={isTheSelectSeason ? "onSecondary" : "caption"}
                                    size={ isTheSelectSeason ? 24 : 20}
                                >
                                    Season {season.number}
                                </Text>
                            </View>
                        )
                    })}
                </List>
                <ContainerCloseButton>
                    <ContentCloseButton onPress={() => setVisible(false)}>
                        <Icon icon="close" color={colors.primary} />
                    </ContentCloseButton>
                </ContainerCloseButton>
            </Content>
        </Modal>
    )
}