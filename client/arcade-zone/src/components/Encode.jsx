import bcrypt from "bcryptjs"

export const Encode =(password)=>{
    const hashed= bcrypt.hashSync(password,15);
    return hashed
}