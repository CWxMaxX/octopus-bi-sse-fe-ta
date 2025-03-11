import DashboardCard from "../../components/DashboardCard/DashboardCard";
import React from "react";
import StatCard from "dashboard/StatCard";
import DailyActiveUsersPieChart from "dashboard/DailyActiveUsersPieChart";
import UserActivityLineChart from "dashboard/UserActivityLineChart";
import { Grid, GridItem, Stack } from "@chakra-ui/react";

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
