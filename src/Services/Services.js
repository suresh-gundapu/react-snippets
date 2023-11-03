export const Services = { 
  getUsersData:()=>{
    return (fetch("https://jsonplaceholder.typicode.com/users"));
  }
}