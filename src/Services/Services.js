export const Services = { 
  getUsersData:()=>{
    return (fetch("https://jsonplaceholder.typicode.com/users"));
  },
  getUsersAlbums:()=>{
    return (fetch("https://jsonplaceholder.typicode.com/posts"));
  },
  getUsersAlbumDetails:(id)=>{
    return (fetch(`https://jsonplaceholder.typicode.com/posts/${id}`));
  }
}