import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { ItemTypes } from '../../../utils/ItemTypes';

const useCardStyles = makeStyles({
  root: {
    width: 300,
    height: 350,
    marginRight: 10,
    marginBottom: 20
  },
  media: {
    height: 140,
  },
});

const useCardContentStyles = makeStyles({
  root: {
    height: 100,
  }
});

type ItemProps = {
  item: ItemTypes
}

const Item = (props: ItemProps) => {
  const { id, name, quantity, until, memo, image, isNeeds } = props.item

  const cardClasses = useCardStyles();
  const cardContentClasses = useCardContentStyles();

  const [ changeQuantity, setChangeQuantity ] = useState(quantity);
  const [ changeUntil, setChangeUntil ] = useState(until);

  console.log(changeQuantity)

  const handleChange = (event) => {
    setChangeUntil(event.target.value);
  };

  return (
    <Card className={cardClasses.root}>
      <CardActionArea>
        <CardMedia
          className={cardClasses.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent
          className={cardContentClasses.root}>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {memo}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ButtonGroup disableElevation variant="contained" color="default">
          <Button onClick={newQuantity => setChangeQuantity(changeQuantity + 1)}>UP</Button>
          <Button onClick={newQuantity => changeQuantity > 0 ? setChangeQuantity(changeQuantity - 1) : changeQuantity}>DOWN</Button>
        </ButtonGroup>
        <p style={{'width': '60px'}}>{changeQuantity}</p>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={changeUntil}
          onChange={handleChange}
        >
          <MenuItem value={''}> </MenuItem>
          <MenuItem value={'kilogram'}>kilogram</MenuItem>
          <MenuItem value={'gram'}>gram</MenuItem>
          <MenuItem value={'milligram'}>milligram</MenuItem>
          <MenuItem value={'pound'}>pound</MenuItem>
          <MenuItem value={'ounce'}>ounce</MenuItem>
          <MenuItem value={'liter'}>liter</MenuItem>
          <MenuItem value={'kiloliter'}>kiloliter</MenuItem>
          <MenuItem value={'gallon'}>gallon</MenuItem>
          <MenuItem value={'quart'}>quart</MenuItem>
          <MenuItem value={'pint'}>pint</MenuItem>
        </Select>
      </CardActions>
    </Card>
  );
}

export default Item;
