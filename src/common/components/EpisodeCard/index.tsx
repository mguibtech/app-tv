import { useTheme } from "styled-components";
import { Container, RowEpisode, TitleEpisode, ContainerTitleEpisode } from "./styles";
import { EpisodeCardPros } from "./type";
import { useMemo, useState } from "react";
import { removeHtmlFromString } from "../../utils/html";
import { noSumary } from "../../utils/message";
import { EpisodeCover } from "../EpisodeCover";
import Spacer from "../Spacer";
import Text from "../Text";
import { Icon } from "../Icon";
import { View } from "react-native";

export function EpisodeCard({ episode, onPress }: EpisodeCardPros) {

    const [shouldShowDetails, setShouldShowDetails] = useState(false)

    const { colors, spacing } = useTheme();

    const summaryWithoutHTML = useMemo(() => {
        if (!episode?.summary) return noSumary;
        return removeHtmlFromString(episode?.summary)
    }, [episode])

    return (
        <Container>
            <RowEpisode
                key={episode.id}
                onPress={() => {
                    setShouldShowDetails(old => !old);
                    onPress?.();
                }}
            >
                <EpisodeCover url={episode.image?.medium} name={episode.name}/>
                <Spacer width={spacing.sm}/>
                <ContainerTitleEpisode>
                    <TitleEpisode numberOfLines={1}>
                        {episode?.number ? `${episode.number}. ` : `Special:`}
                        {episode.name}
                    </TitleEpisode>
                    <Text size={12} color="caption">
                        {episode.runtime <= 60 ? `${episode.runtime} min` : `+1h`}
                    </Text>
                </ContainerTitleEpisode>
                <Icon icon={shouldShowDetails ? "menuUp" : "menuDown"} color={colors.brand}/>
            </RowEpisode>
            {
                shouldShowDetails && (
                    <View>
                        <Spacer height={spacing.sm}/>
                        <Text color="caption" style={{textAlign: "justify"}}>{summaryWithoutHTML}</Text>
                    </View>
                )
            }
        </Container>
    )
}