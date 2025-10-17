import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PageLayout } from "@/layout";
import { VIDEOS } from "../data";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
//async sert a fair un serveur component 
export default async function Page() {
  return (
    <PageLayout>
        Formations Page
        <Card>
            <CardHeader>
                <CardTitle>
                    <Skeleton className ='h-10 w-full'></Skeleton>
                    <Skeleton className ='h-8 w-full'></Skeleton>
                </CardTitle>
            </CardHeader>
            <CardFooter>
                <Skeleton className ='h-8 w-15'></Skeleton>
            </CardFooter>
        </Card>
    </PageLayout>
    );
}