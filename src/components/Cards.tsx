import "./Cards.css";

function Cards(props: any) {
  const tagStrArr = Array.from(props.tagStrArr);
  return (
    <div>
      {/* A div with container id to hold the card */}
      <div id="container">
        {/* <!-- A div with card class for the card  --> */}
        <div className="card">
          <img src={`${props.imageUrl}`} alt={`${props.imageAlt}`} />

          {/* <!-- A div with card__details class to hold the details in the card  --> */}
          <div className="card__details">
            {/* <!-- Span with tag class for the tag --> */}

            {tagStrArr.map(function (object: any, i: any) {
              return <CardTags tagName={object} className="tag" key={i} />;
            })}

            {/* <!-- A div with name class for the name of the card --> */}
            <div className="name">{props.cardTitle}</div>

            <p>{props.cardDescription}</p>
            {props.forSchool ? (
              <button>School Policy</button>
            ) : (
              <a
                className="githubRepo"
                href={`https://github.com/DanielCoder834/${props.githubUrl}`}
              >
                <button>Github Repo</button>
              </a>
            )}

            {props.isGame && (
              <a
                className="itchBtn"
                href={`https://danieltheprogrammer.itch.io/${props.itchUrl}`}
              >
                <button>Itch.io</button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function CardTags(props: any) {
  return <span className={props.className}>{props.tagName}</span>;
}

export { Cards, CardTags };
