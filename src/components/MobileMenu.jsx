"use client";
import { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function MobileMenu() {
    const [open, setOpen] = useState(false);
    const { data: session, status } = useSession();

    return (
        <div className="lg:hidden relative">
            <button
                onClick={() => setOpen(!open)}
                className="btn btn-ghost p-2 rounded-md"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>

            {open && (
                <ul className="menu dropdown-content mt-2 p-4 shadow-lg rounded-lg bg-base-100 w-40 absolute right-0">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/products">Products</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    {
                        status == 'authenticated' && <li>
                            <Link href="/dashboard/add-product">Add Product</Link>
                        </li>
                    }
                </ul>
            )}
        </div>
    );
}