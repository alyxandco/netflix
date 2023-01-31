import data from "../data.json";

const Section = () => {
  console.log(Section);
  return (
    <main>
      {data.map((mainCategory, index) => {
        return (
          <div>
            <h1 key={index}>{mainCategory.category}</h1>
            <div className="gallery">
              {mainCategory.images.map((picture) => {
                console.log(picture);
                return (
                  <div className="images">
                    <img alt="" src={picture} />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default Section;
