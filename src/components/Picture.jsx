const Picture = ({ data }) => {
  const { src, photographer } = data;
  return (
    <div className="picture">
      <div className="imageContainer">
        <img src={src.large} alt="img" />
      </div>
      <div className="info">
        <p>{photographer}</p>
      </div>
    </div>
  );
};

export default Picture;
