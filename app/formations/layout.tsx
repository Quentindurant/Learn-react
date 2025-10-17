import { PageLayout } from "@/layout";
import Page from "./page";
import Link from "next/dist/client/link";
import { PropsWithChildren } from "react";

export default function layout (props: PropsWithChildren) {
    return (
        <PageLayout>
            <header className="border-b -mx-4 px-4 pb-2">
                <Link href='/formations' className='font-bold'>
                    Formations Layout
                </Link>
            </header>
            {props.children}
        </PageLayout>
    );
}