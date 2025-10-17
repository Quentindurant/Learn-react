import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageLayout } from "@/layout";
import Link from "next/dist/client/link";
import { VIDEOS, CACA } from "./data";

export default function Page() {
  return (  
    <PageLayout>
        Formations Page
        <Card>
            <CardHeader>
                <CardTitle>Titre de la formation</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                {VIDEOS.map((video) => (
                    <Link href={`/formations/${video.id}`} key={video.id} className="text-sm text-muted-foreground">
                        {video.title}
                    </Link>
                ))}
            </CardContent>
            <CardContent className="flex flex-col gap-4">
                {CACA.map((caca) => (
                    <Link href={`/formations/${caca.id}`} key={caca.id} className="text-sm text-muted-foreground">
                        {caca.title}
                    </Link>
                ))}
            </CardContent>
        </Card>
    </PageLayout>
    );
}