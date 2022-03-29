function Article (props) {
    return (
        <article className={props.class}>
            <div className="article-text">
                <h2 className="article-title">{props.title}</h2>
                <p className="article-artist subhead-2">{props.artist}</p>
            </div>
            <img className="article-img" src={props.image}/>
        </article>
    )
}

export default Article