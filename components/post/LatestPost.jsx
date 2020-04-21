export default function LatestPost(props){
  return (
    <>
      <div className="latest-post-card">
        <div className="rated-post-content">
          <h2 className="rated-post-title">
            <a href="#" className="latest-post-link">
              {props.title}
            </a>
          </h2>
          <p className="latest-post-short-desc">{props.shortDesc}</p>
          <p className="rated-post-author">зохиолч {props.author}</p>
          <p className="latest-post-date">{props.date}</p>
        </div>
        
        <div className="latest-post-img-wrapper">
          <img src={props.coverImg} className="popular-post-img latest-post-img" alt=""/>
        </div>
      </div>
      <style jsx>{`
        
      `}</style>
    </>
  );
}