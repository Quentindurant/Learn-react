import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PageLayout } from "@/layout";
import { VIDEOS } from "../data";
import Link from "next/link";
import { notFound } from "next/navigation";
//async sert a fair un serveur component 
export default async function Page(props:{
    params: Promise<{videoId:string}>;
} ) {
  const params = await props.params; // grace a async, ce code est executé coté serveur
  const video = VIDEOS.find((video) => video.id === params.videoId);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  //si pas de video
  if (!video) {
    notFound();
  }
  return (
    <PageLayout>
        Formations Page
        <Card>
            <CardHeader>
                <CardTitle>{video.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">

                <ul className='list-disc list-inside'>
                    {video?.lessons.map(lesson => (
                        <li key={lesson.title}>{lesson.title}</li>
                    ))}
                </ul>
            </CardContent>
            <CardFooter>
                <Link href="/formations">Back</Link>
            </CardFooter>
        </Card>
    </PageLayout>
    );
}