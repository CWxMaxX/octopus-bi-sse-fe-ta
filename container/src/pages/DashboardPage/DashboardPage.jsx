import DashboardCard from "../../components/DashboardCard/DashboardCard";
import React, { Suspense, useEffect } from "react";
import StatCard from "dashboard/StatCard";
import { Grid, GridItem, Stack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

//Tried to implement these components from remote app, but it didn't work.
// const UserActivityLineChart = React.lazy(() => import("dashboard/UserActivityLineChart"));
// const DailyActiveUsersPieChart = React.lazy(() => import("dashboard/DailyActiveUsersPieChart"));
import DailyActiveUsersPieChart from "../../components/DailyActiveUsersPieChart/DailyActiveUsersPieChart";
import UserActivityLineChart from "../../components/UserActivityLineChart/UserActivityLineChart";
import { fetchDashboardData } from "../../store/reducers/dashboard/dashboardSlice"; 



const DashboardPage = () => {
  const dashboardStoreData = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDashboardData()); 
  }, [dispatch]);

  return (
    <>
      <Grid templateColumns="repeat(5, 1fr)" gap="6">
        <GridItem colSpan={3}>
          <Stack gap={6}>
            <DashboardCard>
              <StatCard counts={dashboardStoreData?.data?.statCardData} />
            </DashboardCard>
            <DashboardCard>
              <UserActivityLineChart chartData={dashboardStoreData?.data?.userActivityLineChartData} />
            </DashboardCard>
          </Stack>
        </GridItem>
        <GridItem colSpan={2}>
          <DashboardCard>
            <DailyActiveUsersPieChart data={dashboardStoreData?.data?.dailyActiveUsersPieChartData} />
          </DashboardCard>
        </GridItem>
      </Grid>
    </>
  );
};

export default DashboardPage;
