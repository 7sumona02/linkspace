import { toast } from "sonner"
import { supabase } from "@/lib/supabase-client"

export const signUpUser = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
    })

    if(error) {
        toast.error(error.message)
    }
    toast.success('Check your email to confirm your account')
    return {data,error}
}

export const signInUser = async (email, password) => {
   const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })
    if(error) {
        toast.error(error.message)
    }
    toast.success('Welcome back!') 
    return { data, error } 
}