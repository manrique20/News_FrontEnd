import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Atoms/Header";

const NewsContent = () => {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1337/api/news/${id}`
        );
        setNewsItem(response.data);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [id]);

  if (!newsItem) {
    return <div>Loading...</div>;
  }
  const listContent = () => {
    if (newsItem) {
      return newsItem.data.attributes.Content.map((element, index) => {
        return <p key={index}>{element.children[0].text}</p>;
      });
    } else {
      return <p>Loading...</p>;
    }
  };

  return (
    <div>
      <Header />
      <div>
        <div>
          <h2> {newsItem.data.attributes.Title}</h2>
          {listContent()}
        </div>
      </div>
    </div>
  );
};

export default NewsContent;
