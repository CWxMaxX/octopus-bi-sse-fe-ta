import React from "react";
import "./StatCard.css";
import { Grid, GridItem } from "@chakra-ui/react";

const StatCard = ({counts}) => {
  // const counts = {
  //   dailyActiveUsers: {
  //     count: 1051,
  //     date: "18 Mar 2020",
  //   },
  //   monthlyActiveUsers: {
  //     count: 60032,
  //     date: "18 Mar 2020",
  //   },
  //   dailyPerActiveUser: {
  //     count: 23,
  //     date: "18 Mar 2020",
  //   },
  // }
  return (
    <div className="stat-card-container">
      <Grid templateColumns="repeat(3, 1fr)" gap="6">
        <GridItem>
          <div className="stat-card-count-title">Daily Active Users</div>
          <div className="stat-card-count">{counts?.dailyActiveUsers?.count}</div>
          <div className="stat-card-date">{counts?.dailyActiveUsers?.date}</div>
        </GridItem>
        <GridItem>
          <div className="stat-card-count-title">Monthly Active Users</div>
          <div className="stat-card-count">{counts?.monthlyActiveUsers?.count}</div>
          <div className="stat-card-date">{counts?.monthlyActiveUsers?.date}</div>
        </GridItem>
        <GridItem>
          <div className="stat-card-count-title">Daily Time Per Active User</div>
          <div className="stat-card-count">{counts?.dailyPerActiveUser?.count}</div>
          <div className="stat-card-date">{counts?.dailyPerActiveUser?.date}</div>
        </GridItem>
      </Grid>
    </div>
  );
};

export default StatCard;
