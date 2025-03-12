import React from 'react'
import './StatCard.css'
import { Grid, GridItem } from "@chakra-ui/react"

const StatCard = () => {
  return (
    <div className='stat-card-container'>
      <Grid templateColumns="repeat(3, 1fr)" gap="6">
        <GridItem>
          Count 1
        </GridItem>
        <GridItem>
          Count 2
        </GridItem>
        <GridItem>
          Count 3
        </GridItem>
      </Grid>
    </div>
  )
}

export default StatCard