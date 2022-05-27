import Layout from "../compornents/layout";
import AboutImage from "../compornents/About/AboutImage";
import AboutTextTop from "../compornents/About/AboutTextTop";
import AboutTextBottom from "../compornents/About/AboutTextBottom";
import AboutTextSkill from "../compornents/About/AboutTextSkill";
import { motion } from "framer-motion";

const slideItemRight = {
  offscreen: {
    x: 200,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.8,
    },
  },
  onscreenlate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.8,
      delay: 0.5,
    },
  },
};

const slideItemLeft = {
  offscreen: {
    x: -200,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.8,
    },
  },
  onscreenlate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.8,
      delay: 0.5,
    },
  },
};

export default function About({ about }) {
  return (
    <motion.div
      initial={{ opacity: 0 }} // 初期状態
      animate={{ opacity: 1 }} // マウント時
      exit={{ opacity: 0 }} // アンマウント時
    >
      <Layout about>
        <main className="about">
          <div className="about__inner">
            <div className="about__topbox">
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.4 }}
                variants={slideItemLeft}
              >
                <AboutImage />
              </motion.div>
              <motion.div
                initial="offscreen"
                whileInView="onscreenlate"
                viewport={{ once: true, amount: 0.4 }}
                variants={slideItemRight}
              >
                <AboutTextTop
                  top={`昔から何かを一から作って誰かに届けることが好きでした。届けた相手の方に喜んでいただける制作を行い、その方の成功に繋がる体験を提供することを第一に考えて副業ビジネスに取り組んでいます。お客様が求めていることは何か、どうしてWebサイトやLPを制作して欲しいのか。そんな背景は原点の部分から把握し、お客様が思い描いた効果を制作物から発揮できるように取り組んでいます。`}
                />
              </motion.div>
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
    </motion.div>
  );
}
