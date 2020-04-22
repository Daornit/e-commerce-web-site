
export default function PopularPost(props) {
  return (
    <>
      <a href="/posts/test" className="rated-post-link">
        <div className="popular-card">
          <div className="popular-post-img-wrapper">
            <img src={props.coverImg} className="popular-post-img" alt=""/>
          </div>
          
          <div className="rated-post-content">
            <div className="popular-post-access">
              <span className="fa fa-eye"></span> {props.viewCount}
            </div>
            <h2 className="rated-post-title">{props.title}</h2>
            <p className="rated-post-author">зохиолч {props.author}</p>
          </div>
        </div>
      </a>

      <style jsx>{`
        .popular-card{
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
        }

        .popular-post-img-wrapper{
          background-image: linear-gradient(to bottom, rgba(49, 49, 49, 0.5), transparent);
        }

        :global(.popular-post-img){
          position: relative;
          z-index: -1;
          height: 15rem;
          object-fit: cover;
        }

        .popular-post-access{
          position: absolute;
          top: 10%;
          left: 10%;
          color: white;
          font-size: 1.5rem;
        }

        @media screen and (min-width: 900px){
          
        }
      `}</style>
    </>
  );
}