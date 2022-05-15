import Layout from "../compornents/layout";
import AboutImage from "../compornents/About/AboutImage";
import AboutTextTop from "../compornents/About/AboutTextTop";
import AboutTextBottom from "./AboutTextBottom";
import AboutTextSkill from "./AboutTextSkill";

export default function About({ about }) {
  return (
    <Layout about>
      <main className="about">
        <div className="about__inner">
          <div className="about__topbox">
            <AboutImage />
            <AboutTextTop
              top={`昔から何かを一から作って誰かに届けることが好きでした。届けた相手の方に喜んでいただける制作を行い、その方の成功に繋がる体験を提供することを第一に考えて副業ビジネスに取り組んでいます。お客様が求めていることは何か、どうしてWebサイトやLPを制作して欲しいのか。そんな背景は原点の部分から把握し、お客様が思い描いた効果を制作物から発揮できるように取り組んでいます。`}
            />
          </div>
          <div className="about__bottombox">
            <AboutTextBottom
              left={`副業としてWebデザインを行う上で大切にしているのは常に自走することを忘れないことです。専門性の高いスキルを磨くことも必要ですし、そのスキルに幅を持たせることも重要だと考えています。現状に満足せず、新しいことも取り入れ続けることで、お客様から次々といただく課題やご要望に対して芯を捉えた改善方法を提案することができています。`}
            />
            <AboutTextSkill
              skill={`Skills`}
              skilldetail={`HTML,CSS(SCSS),JavaScript,WordPress`}
              tool={`Tools`}
              tooldetail={`Illustrator,Photoshop,XD,Premiere Pro`}
            />
          </div>
        </div>
      </main>
    </Layout>
  );
}
