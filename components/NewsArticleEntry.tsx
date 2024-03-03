import { NewsArticle } from "@/models/NewsArticles";
import { Card, CardImg } from "react-bootstrap";
import Image from "next/image";
import styles from "@/styles/NewsArticleEntry.module.css";

interface NewsArticleEntryProps {
  article: NewsArticle;
}

const NewsArticleEntry = ({
  article: { title, url, description, urlToImage },
}: NewsArticleEntryProps) => {
  const validImageUrl =
    urlToImage?.startsWith("http://") || urlToImage?.startsWith("https://")
      ? urlToImage
      : undefined;

  return (
    <a href={url}>
      <Card className="h-100">
        <Card.Img variant="top" src={validImageUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </a>
  );
};

export default NewsArticleEntry;
