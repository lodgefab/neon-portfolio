import React, { VFC } from 'react';
import styled from '@emotion/styled';
import { color, zIndex } from '../../utils/style';

export const Body: VFC = () => {
  return (
    <Container>
      <MainTitle>Glass and Virtual Neon Arts</MainTitle>
      <Item>
        <Picture>
          <img src="images/posts/202206_kawakyu/202206_kawakyu_00.jpg" alt="202206_kawakyu_00" />
        </Picture>
        <Info>
          <TitleEN>Kawakyu Art Exibition 2022 ”In a Dream”</TitleEN>
          <TitleJP>Kawakyu Art Exibition 2022 「夢中」</TitleJP>
          <Tag>Art</Tag>
        </Info>
      </Item>
      <Item>
        <Picture>
          <img
            src="images/posts/202104_36softype/202104_36softype_00.jpg"
            alt="202104_36softype_00"
          />
        </Picture>
        <Info>
          <TitleEN>36 Days softype”</TitleEN>
          <TitleJP>36 Days softype</TitleJP>
          <Tag>Art</Tag>
        </Info>
      </Item>
      <ButtonMore>
        <a href="">view all works</a>
      </ButtonMore>

      <PageTitle>
        <h1>ABOUT</h1>
      </PageTitle>

      <SectionContainer>
        <SectionTitle>
          <h2>Profile</h2>
        </SectionTitle>
        <Text>
          <p>Taisho Ichikawa</p>
          <p>
            Born in 1991, graduated from the School of Social Sciences at Waseda University.
            Graduated from Waseda University, School of Social Sciences, and while working as an
            in-house designer for an IT company, designed neon signs and did burner work. He creates
            art works utilizing the characteristics of neon signs, focusing on "light as a medium"
            and "handcraft techniques. He uses not only glass tubes but also 3DCG as a method of
            expression, placing emphasis on both analog and digital. Awards: LUMINE meets ART AWARD
            2020-2021 Audience Award, recent exhibitions: SICF23, order work: Chim↑Pom from Smappa!
            Group logo sign.
          </p>
        </Text>
        <Text>
          <p>市川大翔</p>
          <p>
            1991年生まれ。早稲田大学社会科学部卒業。IT企業にてインハウスデザイナーとして勤めるかたわら、ネオンサインのデザイン、バーナーワークを行う。「メディウムとしての光」「手工芸の技術」を軸に、ネオンサインの特性を活かしたアート作品を手がける。表現手法として、ガラス管だけでなく、3DCGを用いるなど、アナログ・デジタル双方に重点をおき制作を行なっている。受賞歴：LUMINE
            meets ART AWARD 2020-2021 オーディエンス賞、近年の展示：SICF23、オーダーワーク:Chim↑Pom
            from Smappa! Group ロゴサイン。
          </p>
        </Text>
      </SectionContainer>

      <PageTitle>
        <h1>WORKS</h1>
      </PageTitle>
      <UiCategory>
        <ul>
          <li>
            <a href="">All</a>
          </li>
          <li>
            <a href="">Art</a>
          </li>
          <li>
            <a href="">Client</a>
          </li>
        </ul>
      </UiCategory>
      <Item>
        <Picture>
          <img src="images/posts/202206_kawakyu/202206_kawakyu_00.jpg" alt="" />
        </Picture>
        <Info>
          <TitleEN>Kawakyu Art Exibition 2022 ”In a Dream”</TitleEN>
          <TitleJP>川久アート</TitleJP>
          <Tag>Art</Tag>
        </Info>
      </Item>

      <PageTitle>
        <h1>CONTACT</h1>
      </PageTitle>
      <SectionContainer>
        <SectionTitle>
          <h2>Contact</h2>
        </SectionTitle>
        <Adress>
          <a href="mailto:hellow@electrodeart">hellow@electrodeart.com</a>
        </Adress>
      </SectionContainer>

      <SectionContainer>
        <SectionTitle>
          <h2>Social</h2>
        </SectionTitle>
        <ColInfobox>
          <ul>
            <li>
              <p>
                <span>instagram</span>
              </p>
              <a href="">@electrode_taisho</a>
            </li>
            <li>
              <p>
                <span>Medium</span>
              </p>
              <a href="">electrodeart</a>
            </li>
            <li>
              <p>
                <span>twitter</span>
              </p>
              <a href="">@electrodeart</a>
            </li>
          </ul>
        </ColInfobox>
      </SectionContainer>

      <Item>
        <Info>
          <TitleEN>Kawakyu Art Exibition 2022 ”In a Dream”</TitleEN>
          <TitleJP>Kawakyu Art Exibition 2022 「夢中」</TitleJP>
          <Tag>Art</Tag>
        </Info>
        <Picture>
          <img src="images/posts/sample.jpg" alt="" />
        </Picture>
      </Item>
      <SectionContainer>
        <ColInfobox>
          <ul>
            <li>
              <p>
                <span>Year</span>
              </p>
              <p>2022</p>
            </li>
            <li>
              <p>
                <span>Project Info</span>
              </p>
              <p>Exhibition</p>
            </li>
          </ul>
        </ColInfobox>
      </SectionContainer>
      <Picture>
        <img src="images/posts/202206_kawakyu/202206_kawakyu_01.jpg" alt="" />
      </Picture>
      <Picture>
        <img src="images/posts/202206_kawakyu/202206_kawakyu_02.jpg" alt="" />
      </Picture>
      <SectionContainer>
        <Text>
          <p>
            Exhibition at Kawakyu Museum started on June 1KAWAKYU ART Exhibtion 2022 "Existential
            Dream" has started. Neon works are exhibited in accordance with the theme of this
            exhibition. In preparation for the exhibition, I was given the opportunity to stay at
            the Hotel Kawakyu for a week. I am spending a luxurious time in the gorgeous interior of
            Kawakyu Hotel. I am very glad that I was able to participate in this exhibition, as I
            had the opportunity to interact closely with the other artists participating in the
            residency and the curators. It is only an hour by plane from Tokyo, making it the
            perfect place for a short trip, so please come and visit us and stretch your legs.
          </p>
        </Text>
        <Text>
          <p>
            6/1より川久ミュージアムでの展示会 KAWAKYU ART Exhibtion
            2022「実在する夢」がスタートしました。 ⁡
            本展のテーマに合わせたネオンの作品を出展しています。出展にあたって1週間、ホテル川久への滞在の機会もいただきました。川久ホテルの絢爛なしつらえのなかで、贅沢な時間を過ごさせてもらっています。
            ⁡
            レジデンスに参加されている他の作家さんや、キュレーターの皆さんとの密な交流もあり、本当に参加できてよかったです。
            ⁡
            東京からは飛行機で1時間、小旅行にぴったりの場所ですので是非はねを伸ばしに遊びにきてください。
          </p>
        </Text>
      </SectionContainer>
    </Container>
  );
};

const Container = styled.div`
  background: #1d1d1d;
  color: #fff;
`;
const Item = styled.div`
  padding-bottom: 64px;
`;
const Picture = styled.div`
  & img {
    width: 100%;
  }
`;
const Info = styled.div`
  padding: 0 32px;
`;
const TitleEN = styled.p`
  font-size: 32px;
  padding-bottom: 24px;
  margin-bottom: 16px;
  border-bottom: 1px solid #fff;
`;
const TitleJP = styled.p`
  font-size: 16px;
  margin-bottom: 24px;
`;
const Tag = styled.span`
  display: inline-block;
  padding: 2px 4px;
  border: 1px solid #fff;
  border-radius: 4px;
  font-size: 16px;
`;

const MainTitle = styled.p`
  text-align: center;
  font-size: 80px;
  padding: 0 36px;
  @font-face {
    font-family: 'replica';
    src: url('../fonts/ReplicaLLWeb-Bold.woff') format('woff');
  }
  font-family: 'replica', sans-serif;
`;

const ButtonMore = styled.div`
  text-align: center;
  padding: 36px;
  font-size: 24px;
  margin-bottom: 36px;
  & a {
    display: block;
    padding: 10px;
    color: #fff;
    text-decoration: none;
    border: 1px solid #fff;
  }
`;

const PageTitle = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  height: 50vh;
  padding: 0 32px;
  background-image: url('../images/bg_about.png');
  background-size: cover;
  background-position: center;
  h1 {
    width: 100%;
    font-size: 48px;

    @font-face {
      font-family: 'replica';
      src: url('../fonts/ReplicaLLWeb-Bold.woff') format('woff');
    }
    font-family: 'replica', sans-serif;
  }
`;

const SectionContainer = styled.div`
  padding: 0 32px;
`;

const SectionTitle = styled.div`
  h2 {
    font-size: 32px;
    @font-face {
      font-family: 'replica';
      src: url('../fonts/ReplicaLLWeb-Bold.woff') format('woff');
    }
    font-family: 'replica', sans-serif;
  }
`;

const Text = styled.p`
  margin-bottom: 48px;
  text-align: justify;
  font-size: 16px;
`;

const UiCategory = styled.div`
  width: 100%;
  text-align: center;
  ul {
    display: inline-flex;
    list-style: none;
    padding: 72px 0;
    @font-face {
      font-family: 'replica';
      src: url('../fonts/ReplicaLLWeb-Bold.woff') format('woff');
    }
    font-family: 'replica', sans-serif;
  }
  ul li {
    margin: 0 16px;
    font-size: 24px;
    border: 1px solid #fff;
    border-radius: 4px;
  }
  ul li a {
    display: inlne-block;
    color: #fff;
    text-decoration: none;
    padding: 0 16px;
    transition: 0.3s ease-in-out;
  }

  ul li a:hover {
    color: #1d1d1d;
    background: #fff;
  }
`;

const Adress = styled.div`
  width: 100%;
  padding: 64px 0;
  text-align: center;
  font-size: 48px;
  a {
    color: #fff;
  }
`;

const ColInfobox = styled.div`
  font-size: 24px;
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    padding: 0;
  }
  li {
    width: 33%;
  }
  a {
    color: #fff;
  }
  span {
    font-size: 16px;
  }
`;
