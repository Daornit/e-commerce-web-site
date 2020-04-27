import Link from 'next/link';

export default function LatestPost(props){
  return (
    <>
      <div className="latest-post-card">
        <div className="common-post-content padding-right">
          <h2 className="common-post-title">
            <Link href={"/posts/" + props.url}>
              <a className="latest-post-link">
                {props.title}
              </a>
            </Link>
          </h2>
          <p className="latest-post-short-desc">{props.shortDesc}</p>
          <p className="common-post-author">зохиолч {props.author}</p>
          <p className="latest-post-date">{props.date}</p>
        </div>
        
        <div className="latest-post-img-wrapper">
          <img src={props.coverImg} className="popular-post-img latest-post-img" alt=""/>
        </div>
      </div>
      <style jsx>{`
        .latest-post-card{
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
        }

        .latest-post-link{
          color: var(--main-font-color-dark);
          transition: color .5s;
        }

        .latest-post-link:hover{
          color: var(--secondary-font-color)
        }

        .latest-post-card > .common-post-content{
          display: flex;
          flex-direction: column;
          flex: 2;
        }

        .latest-post-img-wrapper{
          flex: 1;
          height: 8rem;
          overflow: hidden;
        }

        .latest-post-date{
          font-size: 1.2rem;
          line-height: 2;
          color: gray;
        }

        .latest-post-short-desc{
          display: none;
        }

        @media screen and (min-width: 900px){

          .latest-post-img-wrapper{
            height: 16rem;
          }

          .latest-post-short-desc{
            color: rgb(78, 78, 78);
            display: block;
          }
        }
      `}</style>
    </>
  );
}