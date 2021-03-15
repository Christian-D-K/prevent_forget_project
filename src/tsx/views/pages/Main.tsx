import React from 'react'
import { ItemTypes } from '../../utils/ItemTypes'
import { IMAGES } from '../../utils/IMAGES'
import ItemList from '../../views/components/modules/ItemList'

const dummy: ItemTypes[] = [
  {
  id: 1,
  name: 'Monster absorute ZERO',
  quantity: 10,
  until: '',
  memo: 'its blue',
  image: IMAGES.EGG_IMAGE,
  isNeeds: true,
  },
  {
  id: 2,
  name: 'Beef',
  quantity: 500,
  until: 'gram',
  memo: 'あ',
  image: IMAGES.BEEF_IMAGE,
  isNeeds: true,
  },
  {
  id: 1,
  name: 'Water',
  quantity: 10,
  until: 'litre',
  memo: 'ECO buttol',
  image: IMAGES.WATER_IMAGE,
  isNeeds: true,
  },
]

const Main = () => {
  return (
    <>
      <ItemList userItems={dummy}/>
    </>
  )
}

export default Main
