import React, { useEffect } from "react";
import StatCard from "dashboard/StatCard";
import DashboardCard from "../../components/DashboardCard/DashboardCard";
import Log from "log/Log";
import { Grid, GridItem } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchActivityLogData } from "../../store/reducers/activityLog/activityLogSlice";

const ActivityLogPage = () => {
  const activityLogStoreData = useSelector((state) => state.activityLog);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchActivityLogData()); 
    }, [dispatch]);

  return (
    <div>
      <Grid templateColumns="repeat(1, 1fr)" gap="6">
        <GridItem>
          <DashboardCard>
            <StatCard counts={activityLogStoreData?.data?.statCardData} />
          </DashboardCard>
        </GridItem>
        <GridItem>
          <DashboardCard>
            <Log logData={activityLogStoreData?.data?.userActivityLogData}/>
          </DashboardCard>
        </GridItem>
      </Grid>
    </div>
  );
};

export default ActivityLogPage;
