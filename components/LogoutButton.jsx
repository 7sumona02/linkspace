'use client'

import { useUserSession } from "@/custom-hooks/useUserSession"
import { supabase } from "@/lib/supabase-client"
import Link from "next/link"
import { Button } from "./ui/button"

const LogoutButton = () => {
    const { session } = useUserSession()

    const LogoutUser = async () => {
        const { error } = await supabase.auth.signOut()
        if (error) {
            toast('Error loggin out')
        }
        toast.success("You are logged out")
    }
    return (
        session ? (
            <Button className="w-full mt-5" onClick={LogoutUser}>
                Logout
            </Button>
        ) : (
            <Link href="/">
                <Button className="w-full mt-5">
                    Login
                </Button>
            </Link>
        )
    )
}

export default LogoutButton