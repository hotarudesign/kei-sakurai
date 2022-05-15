export default function AboutTextSkill(props) {
  return (
    <div className="about__bottombox_skill">
      <h3 className="about__bottombox_heading">{props.skill}</h3>
      <p className="about__bottombox_detail">{props.skilldetail}</p>
      <h3 className="about__bottombox_heading">{props.tool}</h3>
      <p className="about__bottombox_detail">{props.tooldetail}</p>
    </div>
  );
}
