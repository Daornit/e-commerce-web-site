export default function SectionHeader(props){
  return (
    <>
      <div className="section-header">
        <h4 className="section-headline">
          {props.title}
        </h4>
        <div className="line-custom"></div>
      </div>
      <style jsx>{`
        .section-header{
          padding: 1rem 2.5rem;
        }

        .section-headline{
          text-transform: uppercase;
          font-size: 1.5rem;
        }

        .line-custom{
          margin-top: 1rem;
          border-bottom: 1px solid grey;
        }

        .line-custom::before{
          content: "";
          display: block;
          width: 8rem;
          position: relative;
          left: 0;
          top: 0;
          transform: translateY(50%);
          border: 3px solid black;
        }

        @media screen and (min-width: 900px){
          .section-headline{
            font-size: 1.8rem;
          }
        }
      `}</style>
    </>
  );
}