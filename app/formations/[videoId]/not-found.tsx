import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PageLayout } from "@/layout";
import { VIDEOS } from "../data";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
//async sert a fair un serveur component 
export default async function NotFound(props:{
    params: Promise<{videoId:string}>;
}) {
      const params = await props.params;
  return (
    <PageLayout>
        Formations Page
        <Card>
            <CardHeader>
                <CardTitle>404</CardTitle>
                <CardDescription>lesson not found</CardDescription>
            </CardHeader>
            <CardFooter>
                <Skeleton className ='h-8 w-15'></Skeleton>
            </CardFooter>
        </Card>
    </PageLayout>
    );
}