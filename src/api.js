import axios from "axios";

export function GetUserData(){
    return axios.get(`https://605b249a27f0050017c0643d.mockapi.io/api/users`)
}

export function PostUserData(data){
    return axios.post(`https://605b249a27f0050017c0643d.mockapi.io/api/users`,data)

}

export function GetUserById(id){
    return axios.get(`https://605b249a27f0050017c0643d.mockapi.io/api/users${id}`)

 }
export function UpdateuserById(id,data){
    return axios.put(`https://605b249a27f0050017c0643d.mockapi.io/api/users${id}`,data)
}