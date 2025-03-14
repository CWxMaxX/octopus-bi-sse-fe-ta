import DashboardCard from "../../components/DashboardCard/DashboardCard";
import React, { Suspense } from "react";
import StatCard from "dashboard/StatCard";
import { Grid, GridItem, Stack } from "@chakra-ui/react";
import { useSelector } from "react-redux";

//Tried to implement these components from remote app, but it didn't work.
// const UserActivityLineChart = React.lazy(() => import("dashboard/UserActivityLineChart"));
// const DailyActiveUsersPieChart = React.lazy(() => import("dashboard/DailyActiveUsersPieChart"));
import DailyActiveUsersPieChart from "../../components/DailyActiveUsersPieChart/DailyActiveUsersPieChart";
import UserActivityLineChart from "../../components/UserActivityLineChart/UserActivityLineChart";



const DashboardPage = () => {
  const dashboardStoreData = useSelector((state) => state.dashboard);

  return (
    <>
      <Grid templateColumns="repeat(5, 1fr)" gap="6">
        <GridItem colSpan={3}>
          <Stack gap={6}>
            <DashboardCard>
              <StatCard counts={dashboardStoreData?.statCardData} />
            </DashboardCard>
            <DashboardCard>
              <UserActivityLineChart chartData={dashboardStoreData?.userActivityLineChartData} />
            </DashboardCard>
          </Stack>
        </GridItem>
        <GridItem colSpan={2}>
          <DashboardCard>
            <DailyActiveUsersPieChart data={dashboardStoreData?.dailyActiveUsersPieChartData} />
          </DashboardCard>
        </GridItem>
      </Grid>
    </>
  );
};

export default DashboardPage;
