import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageLayout } from "@/layout";
import Link from "next/dist/client/link";
import videos from "./data";

export default function Page() {
    return (
        <PageLayout>
            Formations Page
            <Card>
                <CardHeader>
                    <CardTitle>Titre de la formation</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                    {videos.map((video) => (
                        <div key={video.id}>
                            <div className="font-medium">{video.title}</div>
                            <div className="flex flex-col ml-2 mt-1">
                                {video.lessons.map((lesson) => (
                                    <Link key={lesson.id} href={lesson.href} className="text-sm text-muted-foreground">
                                        {lesson.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </PageLayout>
    );
}