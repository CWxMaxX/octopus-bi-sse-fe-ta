import React from "react";
import StatCard from "dashboard/StatCard";
import DashboardCard from "../../components/DashboardCard/DashboardCard";
import Log from "log/Log";
import { Grid, GridItem } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const ActivityLogPage = () => {
  const activityLogStoreData = useSelector((state) => state.activityLog);

  return (
    <div>
      <Grid templateColumns="repeat(1, 1fr)" gap="6">
        <GridItem>
          <DashboardCard>
            <StatCard counts={activityLogStoreData?.statCardData} />
          </DashboardCard>
        </GridItem>
        <GridItem>
          <DashboardCard>
            <Log logData={activityLogStoreData?.userActivityLogData}/>
          </DashboardCard>
        </GridItem>
      </Grid>
    </div>
  );
};

export default ActivityLogPage;
