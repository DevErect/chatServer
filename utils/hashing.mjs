import bcrypt from "bcrypt"

export async function hashing(string) {
    const hashedPassword = await bcrypt.hash(string, 10);
    console.log(hashedPassword, "hashedPassword")
    return hashedPassword
}
