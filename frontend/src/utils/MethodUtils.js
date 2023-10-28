import { serverIp, port,suffix } from "../constant/Url"

export const getBaseUrl=()=>{
    return serverIp+":"+port+suffix;
}