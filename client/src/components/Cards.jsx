import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Cards({image,title,companyLogo,type,desc}) {
  return (
    <Card sx={{ maxWidth: 345 }} className='hover:shadow-lg hover:scale-[1.02] duration-700 transition-all'>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" className='flex items-center w-full'>
            <img src={companyLogo} alt="" className="w-[20px] mr-4" />
          <span className='text-md'>{title}</span>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <span className="">{desc}</span>
        </Typography>
      </CardContent>
      <CardActions className=''>
        <Button size="small">Enroll</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
