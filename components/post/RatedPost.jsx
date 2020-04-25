import Link from 'next/link';

export default function RatedPost(props) {
  let stars = [];

  if(props.review) {
    let number = props.review;
    let counter;
    for(counter=0 ;counter < number; counter++){
      stars.push(<span key={counter} className="fa fa-star checked"></span>);
    }

    while(counter < 5) {
      stars.push(<span key={counter} className="fa fa-star"></span>);
      counter++;
    }
  }

  return (
    <>
      <Link href={"/posts/" + props.title}>
        <a className="rated-post-link">
          <div className="rated-card">
            <img src={props.coverImg} className="rated-post-img" alt=""/>
            <div className="rated-post-content">
              <div className="rated-post-review">
                {stars}
              </div>
              <h2 className="rated-post-title">{props.title}</h2>
              <p className="rated-post-author">зохиолч {props.author}</p>
            </div>
          </div>
        </a>
      </Link>
      
      <style jsx>{`
        :global(.rated-post-link){
          display: block;
          margin: 0 1rem;
        }

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

        :global(.rated-post-content){
          color: var(--main-font-color-dark);
          padding: 1rem 0;
        }

        :global(.rated-post-title){
          font-size: 1.8rem;
          transition: color .5s;
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

        :global(.rated-post-review .checked){
          color: var(--secondary-font-color)
        }

        :global(.rated-post-link:hover .rated-post-title){
          color: var(--secondary-font-color)
        }

        @media screen and (min-width: 900px){
          :global(.rated-post-author){
            line-height: 2;
            color: gray;
          }
        }
      `}</style>
    </>
  );
}