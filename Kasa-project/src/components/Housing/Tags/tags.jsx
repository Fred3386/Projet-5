import "./Tags.scss";

const Tags = ({ tags }) => {
    return (
        <div className="housing-tags">
            {tags.map((tag) => (
                <span className="housing-tag" key={tag}>
                    {tag}
                </span>
            ))}
        </div>
    );
};

export default Tags;