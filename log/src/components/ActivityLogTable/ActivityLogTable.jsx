import { Table } from "@chakra-ui/react";
import React from "react";
import "./ActivityLogTable.css";

const ActivityLogTable = ({logData}) => {
  // Sample data structure
  // const items = [
  //   {
  //     username: "JohnDoe",
  //     activity: "Successfully logged in",
  //     performedBy: null,
  //     time: "5 mins ago",
  //     logId: "1",
  //   }
  // ];
  
  return (
    <>
      <div className="activity-log-title-container"><h1>Activity log</h1></div>
      <Table.Root size="sm">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Username</Table.ColumnHeader>
            <Table.ColumnHeader>Activity</Table.ColumnHeader>
            <Table.ColumnHeader>Performed By</Table.ColumnHeader>
            <Table.ColumnHeader>Time</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {logData.map((item) => (
            <Table.Row key={item.logId}>
              <Table.Cell>{item.username}</Table.Cell>
              <Table.Cell>{item.activity}</Table.Cell>
              <Table.Cell>{item.performedBy}</Table.Cell>
              <Table.Cell>{item.time}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </>
  );
};

export default ActivityLogTable;
