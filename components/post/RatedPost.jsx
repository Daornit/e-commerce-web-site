import Link from 'next/link';

export default function RatedPost(props) {
  let stars = [];

  let number = props.review;
  let counter=0;
  for( ;counter < number; counter++){
    stars.push(<span key={counter} className="fa fa-star checked"></span>);
  }

  while(counter < 5) {
    stars.push(<span key={counter} className="fa fa-star"></span>);
    counter++;
  }

  return (
    <>
      <Link href={"/posts/" + props.url}>
        <a className="common-post-link">
          <div className="rated-card">
            <img src={props.coverImg} className="rated-post-img" alt=""/>
            <div className="common-post-content">
              <div className="rated-post-review">
                {stars}
              </div>
              <h2 className="common-post-title">{props.title}</h2>
              <p className="common-post-author">зохиолч {props.author}</p>
            </div>
          </div>
        </a>
      </Link>
      
      <style jsx>{`

        .rated-card{
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
        }

        .rated-post-img{
          height: 15rem;
          object-fit: cover;
        }

        .dark-color{
          color: black !important;
        }

        .fa-star{
          color: rgb(129, 129, 129);
        }

        .rated-post-review{
          font-size: 1.9rem;
        }

        @media screen and (min-width: 900px){
          
        }
      `}</style>
    </>
  );
}