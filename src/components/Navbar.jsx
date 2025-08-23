"use client"
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu"; // Client Component
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
    const { data: session, status } = useSession();
    return (
        <nav className="sticky top-0 left-0 w-full z-50 bg-base-100/80 backdrop-blur-lg shadow-md">
            <div className="max-w-7xl mx-auto px-4 md:px-4 ">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-bold  transition">
                            QuickCart
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex lg:items-center lg:space-x-6">
                        <Link href="/" className="font-medium text-base hover:text-primary transition">Home</Link>
                        <Link href="/products" className="font-medium text-base hover:text-primary transition">Products</Link>
                        <Link href="/about" className="font-medium text-base hover:text-primary transition">About</Link>
                        {
                            status == 'authenticated' && <Link href="/dashboard/add-product" className="font-medium text-base hover:text-primary transition">Add  Products</Link>
                        }
                    </div>

                    {/* Right Buttons */}
                    <div className="flex items-center gap-3">
                        <ThemeToggle />
                        {
                            status == 'authenticated' ? (
                                <>
                                    <button onClick={() => signOut()} className="btn btn-sm btn-primary text-white">Logout</button>
                                </>
                            ) : (<>
                                <Link href="/login" className="btn btn-sm btn-primary text-white">Login</Link>
                                <Link href="/signup" className="btn btn-sm btn-outline rounded">Sign Up</Link>
                            </>)
                        }

                        {/* Mobile Menu */}
                        <MobileMenu />
                    </div>
                </div>
            </div>
        </nav>
    );
}
