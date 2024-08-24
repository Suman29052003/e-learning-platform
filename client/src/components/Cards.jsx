import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function Cards({
  id,
  image,
  title,
  companyLogo,
  type,
  desc,
  maxHeight,
}) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        width: "100%",
        height: maxHeight || 500,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between", // Ensures buttons stay at the bottom
        padding: 2,
        margin: "auto",
      }}
      className="hover:shadow-lg hover:scale-[1.02] duration-700 transition-all"
    >
      <div>
        <CardMedia component="img" alt="image" height="140" image={image} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            className="flex items-center w-full"
          >
            <img src={companyLogo} alt="" className="w-[20px] mr-4" />
            <span className="text-md">{title}</span>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <span>{desc}</span>
          </Typography>
        </CardContent>
      </div>
      <CardActions
        className="flex justify-between mt-auto"
        sx={{ paddingTop: 2, paddingBottom: 2 }}
      >
        <Button size="small" variant="contained" sx={{ marginRight: 1 }}>
          Enroll
        </Button>
        <Link to={`/course/${id}`}>
          <Button size="small" variant="outlined">
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
