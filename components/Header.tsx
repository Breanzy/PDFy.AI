import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";
import { FilePlus2 } from "lucide-react";
import UpgradeButton from "./UpgradeButton";
import Image from "next/image";

export default function Header() {
    return (
        <div className="flex justify-between bg-white shadow-sm p-5 border-b">
            <div className="flex items-center justify-center gap-2">
                <Link
                    href="/dashboard"
                    className="flex items-center gap-2 text-2xl font-semibold"
                >
                    <Image
                        alt="App logo"
                        src="https://i.imgur.com/NBhsLXn.jpg"
                        width={40}
                        height={40}
                        className="rounded-full hidden md:block"
                    />
                    <span className="flex items-center">
                        PDFy.<span className="text-indigo-600">AI</span>
                    </span>
                </Link>
            </div>

            <SignedIn>
                <div className="flex items-center space-x-2">
                    <Button asChild variant="link" className="hidden md:flex">
                        <Link href="/dashboard/upgrade">Pricing</Link>
                    </Button>

                    <Button asChild variant="outline">
                        <Link href="/dashboard">My Documents</Link>
                    </Button>

                    <Button
                        asChild
                        variant="outline"
                        className="border-indigo-600"
                    >
                        <Link href="/dashboard/upload">
                            <FilePlus2 className="text-indigo-600" />
                        </Link>
                    </Button>

                    <UpgradeButton />
                    <UserButton></UserButton>
                </div>
            </SignedIn>
        </div>
    );
}
