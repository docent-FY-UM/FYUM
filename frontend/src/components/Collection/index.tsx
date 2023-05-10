import { Link } from "react-router-dom";

import {
  CollectionContainer,
  PainterContainer,
  ArtTrendContainer,
  ThemeContainer,
  ImageText,
  PainterText,
  ArtTrendText,
  ThemeText,
  PainterNoBackContainer,
  ArtTrendNoBackContainer,
  ThemeNoBackContainer,
} from "./styles";

const Collection = () => {
  return (
    <CollectionContainer>
      <Link to="/list/painter">
        <PainterContainer>
          <PainterText>
            <ImageText>Painter.</ImageText>
          </PainterText>
          <PainterNoBackContainer></PainterNoBackContainer>
        </PainterContainer>
      </Link>
      <Link to="/list/art-trend">
        <ArtTrendContainer>
          <ArtTrendNoBackContainer></ArtTrendNoBackContainer>
          <ArtTrendText>
            <ImageText>Art Trend.</ImageText>
          </ArtTrendText>
        </ArtTrendContainer>
      </Link>
      <Link to="/list/theme">
        <ThemeContainer>
          <ThemeText>
            <ImageText>Theme.</ImageText>
          </ThemeText>
          <ThemeNoBackContainer></ThemeNoBackContainer>
        </ThemeContainer>
      </Link>
    </CollectionContainer>
  );
};
export default Collection;
