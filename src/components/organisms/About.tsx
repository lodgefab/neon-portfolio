import React, { VFC } from 'react';
import styled from '@emotion/styled';
import { color, font, media } from '../../utils/style';
import { motion } from 'framer-motion';

export const About: VFC = () => {
  return (
    <Container
      key={'about'}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } }}
      exit={{ opacity: 0, y: 50, transition: { duration: 0.5 } }}
    >
      <PageTitle>
        <h1>ABOUT</h1>
      </PageTitle>

      <SectionContainer>
        <SectionTitle>
          <h2>Profile</h2>
        </SectionTitle>
        <TextBox>
          <Text>
            <TextTitle>Taisho Ichikawa</TextTitle>
            <p>
            Centered on 'light as a medium' and 'artisanal craftsmanship', I engage in the creation of works that utilize the characteristics of neon signs, including burner work. I approach both the emotional aspects created by light and the scientific technology that produces it.
            <br/><br/>
            -Awards-<br/>
            2024 / Hirokawa Tamae Prize, SICF25 EXHIBITION Division<br/>
            2024 / Selected for the Brillia Art Award 2024<br/>
            2022 / KAWAKYU ART Exhibition 2022 Jury Recommended Artist<br/>
            2021 / LUMINE meets ART AWARD 2020-2021 Audience Award
            <br/><br/>
            -Exhibitions-<br/>
            2024 / Brillia Art Award 2024 Finalists' Exhibition (Brillia Lounge "THE GALLERY")<br/>
            2024 / SICF25 (SPIRAL, Omotesando)<br/>
            2023 / Solo Exhibition "Diffusion" (Gallery DiEGO, Omotesando)<br/>
            2022 / SICF23 (SPIRAL, Omotesando)<br/>
            2022 / "KAWAKYU ART Exhibition 2022" (Kawakyu Museum, Shirahama, Wakayama)
            </p>
          </Text>
          <Text>
            <TextTitle>市川大翔</TextTitle>
            <p>
            「メディウムとしての光」「手工芸の技術」を軸に、ネオンサインの特性を活かした作品の制作、バーナーワークを手がける。光が生み出す情緒性、光を生み出す科学技術の双方にアプローチをする。
            <br/><br/>
            -受賞歴-<br/>
            2024年 / SICF25 EXHIBITION部門 廣川玉枝賞<br/>
            2024年 / Brillia Art Award 2024 入選<br/>
            2022年 / KAWAKYU ART Exhibition 2022 審査員推薦アーティスト<br/>
            2021年 / LUMINE meets ART AWARD 2020-2021 オーディエンス賞
            <br/><br/>
            -活動歴-<br/>
            2024年 / Brillia Art Award 2024入選展 (Brillia Lounge 「THE GALLERY」)<br/>
            2024年 / SICF25(SPIRAL 表参道)<br/>
            2023年 / 個展 「Diffusion」 (ギャラリーDiEGO 表参道)<br/>
            2022年 / SICF23(SPIRAL 表参道)<br/>
            2022年 / 『KAWAKYU ART Exhibition 2022』 (川久ミュージアム 南紀白浜)
            </p>
          </Text>
        </TextBox>
      </SectionContainer>
    </Container>
  );
};

const Container = styled(motion.div)`
  background: ${color.background.dark};
`;

const PageTitle = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  height: 30vh;
  padding: 59px 32px 0;
  background-image: url('../images/bg_about.jpg');
  background-size: cover;
  background-position: center;
  padding-bottom: 48px;
  h1 {
    width: 100%;
    ${font.replica.h1};
  }
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 64px 32px;
  ${media.lg`
    max-width:1108px;
    margin:0 auto;
    flex-direction:row;
  `}
`;

const SectionTitle = styled.div`
  h2 {
    ${font.replica.h2};
  }
  margin-bottom: 24px;
  ${media.lg`
    margin-right:72px;
  `}
`;

const TextBox = styled.div`
  p {
    ${font.replica.body2};
    font-size: 14px;
    line-height: 1.5;
  }
  display: inline;
  text-align: justify;
  ${media.lg`
    margin-top:6px;
  `}
`;

const Text = styled.div`
  margin-bottom: 40px;
  p {
    margin-bottom: 16px;
  }
`;

const TextTitle = styled.div`
  ${font.replica.subtitle1};
  margin-bottom: 16px;
`;
