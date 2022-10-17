import "./style.css";

const Section = ({ title, extraSectionContent, body }) => (
    <section className="section">
        <div className="section__body">
            <h2 className="section__title">{title}</h2>
            {body}
        </div>
        {extraSectionContent}
    </section>
);

export default Section;