import React from 'react'
import Item from '../blocks/Item'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    padding: 10
  }
});

const ItemList = ({userItems}) => {
  const classes = useStyles();

  return (
    <>
      <GridList cellHeight={'auto'} className={classes.root}>
        {
          userItems.map((item) => {
            return <Item item={item} />
          })
        }
        </GridList>
    </>
  )
}

export default ItemList
