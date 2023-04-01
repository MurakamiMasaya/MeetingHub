import { DynamoDBClient, ScanCommand } from '@aws-sdk/client-dynamodb'
import { GetServerSideProps } from 'next'

type UserListProps = {
  users: {
    Id: number
    Name: string
  }[]
}

const UserList = ({ users }: UserListProps) => {
  console.log(users, 'users')
  return (
    <>
      <h1>User List</h1>
      <ul>
        {users && users.length !== 0 ? (
          users.map((user) => <li key={user.Id}>{user.Name}</li>)
        ) : (
          <li>No Users found</li>
        )}
      </ul>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const client = new DynamoDBClient({
    region: process.env.AWS_REGION,
    endpoint: process.env.DYNAMODB_ENDPOINT,
  })

  const tableName = 'sample-users'

  const command = new ScanCommand({
    TableName: tableName,
  })

  try {
    const result = await client.send(command)
    return {
      props: {
        users: result.Items,
      },
    }
  } catch (error) {
    console.log(error)
    return {
      props: {
        users: [],
      },
    }
  }
}

export default UserList
