import { Table } from "@chakra-ui/react";
import React from "react";
import "./ActivityLogTable.css";

const ActivityLogTable = () => {
  const items = [
    {
      username: "JohnDoe",
      activity: "Successfully logged in",
      performedBy: null,
      time: "5 mins ago",
      logId: "1",
    },
    {
      username: "JohnDoe",
      activity: "Viewed dashboard",
      performedBy: null,
      time: "7 mins ago",
      logId: "2",
    },
    {
      username: "JohnDoe",
      activity: "Updated profile information",
      performedBy: "JohnDoe",
      time: "15 mins ago",
      logId: "3",
    },
    {
      username: "JohnDoe",
      activity: "Uploaded a file 'invoice.pdf'",
      performedBy: "JohnDoe",
      time: "25 mins ago",
      logId: "4",
    },
    {
      username: "JohnDoe",
      activity: "Downloaded report 'summary.xlsx'",
      performedBy: "JohnDoe",
      time: "30 mins ago",
        logId: "5",
    },
    {
      username: "JohnDoe",
      activity: "Changed password",
      performedBy: "JohnDoe",
      time: "40 mins ago",
      logId: "6",
    },
    {
      username: "JohnDoe",
      activity: "Created a new project 'Marketing'",
      performedBy: "JohnDoe",
      time: "50 mins ago",
      logId: "7",
    },
    {
      username: "JohnDoe",
      activity: "Added a new team member 'JaneSmith'",
      performedBy: "JohnDoe",
      time: "55 mins ago",
      logId: "8",
    },
    {
      username: "JohnDoe",
      activity: "Removed a team member 'TestUser'",
      performedBy: "JohnDoe",
      time: "1 hour ago",
      logId: "9",
    },
    {
      username: "JohnDoe",
      activity: "Logged out",
      performedBy: null,
      time: "1 hour ago",
      logId: "10",
    },
  ];

  return (
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
        {items.map((item) => (
          <Table.Row key={item.logId}>
            <Table.Cell>{item.username}</Table.Cell>
            <Table.Cell>{item.activity}</Table.Cell>
            <Table.Cell>{item.performedBy}</Table.Cell>
            <Table.Cell>{item.time}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default ActivityLogTable;
