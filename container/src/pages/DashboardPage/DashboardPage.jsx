import DashboardCard from "../../components/DashboardCard/DashboardCard";
import React, { Suspense } from "react";
import StatCard from "dashboard/StatCard";
import { Grid, GridItem, Stack } from "@chakra-ui/react";

//Tried to implement these components from remote app, but it didn't work.
// const UserActivityLineChart = React.lazy(() => import("dashboard/UserActivityLineChart"));
// const DailyActiveUsersPieChart = React.lazy(() => import("dashboard/DailyActiveUsersPieChart"));
import DailyActiveUsersPieChart from "../../components/DailyActiveUsersPieChart/DailyActiveUsersPieChart";
import UserActivityLineChart from "../../components/UserActivityLineChart/UserActivityLineChart";

const DashboardPage = () => {
  return (
    <>
      <Grid templateColumns="repeat(5, 1fr)" gap="6">
        <GridItem colSpan={3}>
          <Stack gap={6}>
            <DashboardCard>
              <StatCard />
            </DashboardCard>
            <DashboardCard>
              <UserActivityLineChart />
            </DashboardCard>
          </Stack>
        </GridItem>
        <GridItem colSpan={2}>
          <DashboardCard>
            <DailyActiveUsersPieChart />
          </DashboardCard>
        </GridItem>
      </Grid>
    </>
  );
};

export default DashboardPage;
