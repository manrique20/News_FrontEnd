import { useEffect, useState } from "react";
import Subsection from "../../Atoms/Subsection/Subsection";
import axios from "axios";
import Trump from "../../../Img/Trump.jpg"
import { Link } from "react-router-dom";
import "./Section.css"

const Section = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await axios.get(`http://localhost:1337/api/news`);
        if (Array.isArray(response.data.data)) {
          setNewsData(response.data.data);
        } else {
          console.error("Data received is not an array:", response.data);
        }
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };
    fetchNewsData();
  }, []);
  return (
    <div className="section">
      {/* Renderizar los datos de las noticias */}
      {newsData.map((newsItem) => (
        <div key={newsItem.id}>
          <Link className={"section"} to={`/news/${newsItem.id}`}>
          <Subsection
            title={newsItem.attributes.Title}
            summary={newsItem.attributes.Short_Description}
            imageUrl={Trump}
            createdBy="Perry Stein and Devlin Barrett"
          />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Section;
