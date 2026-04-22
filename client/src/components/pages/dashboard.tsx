import { Button, Group, Space, Title } from "@mantine/core";
import { JobsContent } from "../JobsContent";
import { useAuth } from "../firebase";
import { useFetch } from "@mantine/hooks";

export function Dashboard() {
  const { currentUser } = useAuth();




          // const userDocRef = doc(db, "users", user.uid);
          // const userDocSnap = await getDoc(userDocRef);
          // console.log("🚀 ~ unsubscribe ~ userDocSnap:", userDocSnap)
          // const userData = userDocSnap.data() as User;
          // console.log("🚀 ~ unsubscribe ~ userData:", userData)
          // setUser(userData);

  
  const { data, loading, error, refetch, abort } = useFetch<Item[]>(
    'http://localhost:3000/api/db/jobApplication',
  );

    console.log("🚀 ~ Dashboard ~ data:", data)

  const firstName = currentUser?.displayName ? " " + currentUser.displayName.split(" ")[0] : "";
  return (
    <>
      <Title order={2}>Welcome back{firstName}!</Title>
      <Space h="md" />
      <Group>
        <Button>Refresh</Button>
        <Button>Fetch Older</Button>
        <Button>Fetch Newer</Button>
      </Group>
      <Space h="md" />
      <JobsContent />
    </>
  );
}
