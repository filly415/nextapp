import Link from "next/link";

export default function First() {
    return (
        <div>
            <h1>
                My First Post
            </h1>
            <h3>
                <Link href="/index1">
                    Home
                </Link>
            </h3>
        </div>
    );
}