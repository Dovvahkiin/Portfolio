import "../styles/pageStyles/NotFound.css";

// fix this

const NotFound = () => {
  return (
    <div className="mainContainer">
      <div className="notFoundImageBox">
        <p></p>
      </div>
      <div className="notFoundText">
        <p style={{ fontWeight: "bold" }}>
          - 404 - NOT FOUND! <br />
          <span style={{ fontWeight: "normal" }}>
            Unfortunately, this page does not exists.
          </span>
        </p>
        <p style={{ fontSize: "30px" }}></p>
      </div>
    </div>
  );
};

export default NotFound;
