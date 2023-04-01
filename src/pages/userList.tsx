import { GetServerSideProps, NextPage } from 'next'
import { DynamoDBClient, ScanCommand } from '@aws-sdk/client-dynamodb'

type UserProps = {
  Id: number
  Name: string
}

type UserListProps = UserProps[]

const UserList: NextPage = ({ users }: UserListProps) => {
  return (
    <>
      <h1>User List</h1>
      <ul>
        {users && users.length !== 0 ? (
          users.map(({ user }: UserProps) => (
            <li key={user.Id.N}>{user.Name.S}</li>
          ))
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
