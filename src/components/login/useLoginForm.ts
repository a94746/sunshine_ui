import useInput from "@/common/hooks/useInput";

export default function useLoginForm() {
    const inputEmail = useInput()
    const inputPassword = useInput()
    const inputPassword2 = useInput()

    return {
        inputEmail: {...inputEmail},
        inputPassword: {...inputPassword},
        inputPassword2: {...inputPassword2},
    }
}