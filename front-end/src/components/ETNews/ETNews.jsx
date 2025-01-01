import './ETNews.css';

export const ETNews = () => {
    return (
        <div className="et-news-section">
            <div className="et-news">
                <div className="news-type">
                    <p>Recent News</p>
                </div>
                <div className="et-news-items"></div>
            </div>
            <div className="et-news">
                <div className="news-type">
                    <p>Highlighted News</p>
                </div>
                <div className="et-news-items"></div>
            </div>

        </div>
    )
}