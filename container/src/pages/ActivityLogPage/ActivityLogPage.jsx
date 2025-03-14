import React from "react";
import StatCard from "dashboard/StatCard";
import DashboardCard from "../../components/DashboardCard/DashboardCard";
import Log from "log/Log";
import { Grid, GridItem } from "@chakra-ui/react";

const ActivityLogPage = () => {
  return (
    <div>
      <Grid templateColumns="repeat(1, 1fr)" gap="6">
        <GridItem>
          <DashboardCard>
            <StatCard />
          </DashboardCard>
        </GridItem>
        <GridItem>
          <DashboardCard>
            <Log />
          </DashboardCard>
        </GridItem>
      </Grid>
    </div>
  );
};

export default ActivityLogPage;
