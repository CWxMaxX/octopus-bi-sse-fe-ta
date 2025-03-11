import { Avatar, Button, Card } from "@chakra-ui/react"

const DashboardCard = ({children}) => {
  return (
    <Card.Root width="100%">
      <Card.Body gap="2">
        {children}
      </Card.Body>
    </Card.Root>
  )
}


export default DashboardCard