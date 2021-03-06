import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 300,
    marginTop: 20,
  },
  media: {
    height: 140,
  },
});

type NotebookCardPropsType = {
  id: string;
  title: string;
  content: string;
  onDelete: (id: string) => void;
};

export default function NotebookCard({
  id,
  title,
  content,
  ...props
}: NotebookCardPropsType) {
  const classes = useStyles();
const handleDelete =  (event: React.MouseEvent) => props.onDelete(id)

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://w7.pngwing.com/pngs/952/161/png-transparent-yellow-sticky-note-and-red-push-pin-illustration-post-it-note-paper-sticky-notes-miscellaneous-rectangle-material.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Название: {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Контент: {content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" color="primary">
          Подробнее
        </Button>
        <Button onClick={handleDelete} size="small" color="primary">
          Удалить
        </Button>
      </CardActions>
    </Card>
  );
}
