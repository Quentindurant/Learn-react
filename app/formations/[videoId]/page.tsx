import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageLayout } from "@/layout";
import { VIDEOS } from "../data";
//async sert a fair un serveur component 
export default async function Page(props:{
    params: Promise<{videoId:string}>;
} ) {
  const params = await props.params; // grace a async, ce code est executé coté serveur
  const video = VIDEOS.find((video) => video.id === params.videoId);

  //si pas de video
  if (!video) {
    return <p>invalid video</p>;
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
        </Card>
    </PageLayout>
    );
}