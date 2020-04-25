import Link from 'next/link';

export default function TrendPost(props) {
  return (
    <>
      <Link href={"/posts/" + props.title}>
        <a className="trend-post-link-grid-item">
          <div className="post-card">
            <img src={props.coverImg} className="post-card-background" alt=""/>
            <div className="post-content">
              <h2 className="post-title">{props.title}</h2>
              <p className="post-author">зохиолч {props.author}</p>
            </div>
          </div>
        </a>
      </Link>

      <style jsx>{`
        .trend-post-link-grid-item:hover .post-title{
          color: var(--secondary-font-color);
        }

        .post-card{
          display: flex;
          position: relative;
          align-items: flex-end;
          justify-content: left;
          background-image: linear-gradient(to top, rgba(49, 49, 49, 0.5), transparent);
          height: 22rem;
        }

        .post-card-background{
          position: absolute;
          top: 0;
          left: 0;
          z-index: -2;
          width: 100%;
          height: 22rem;
          object-fit: cover;
        }

        .post-content{
          padding: 1rem 2rem;
        }

        .post-title{
          color: #fff;
          font-size: 2.5rem;
          transition: color .5s;
        }

        @media screen and (min-width: 900px){
          
        }
      `}</style>
    </>
  );
}