export const Services = { 
  getUsersData:()=>{
    return (fetch("https://jsonplaceholder.typicode.com/users"));
  },
  getUsersAlbums:()=>{
    return (fetch("https://jsonplaceholder.typicode.com/posts"));
  },
  getUsersAlbumDetails:(id)=>{
    return (fetch(`https://jsonplaceholder.typicode.com/posts/${id}`));
  },
  getUsers:()=>{
    return fetch("http://localhost:9000/users");
  },
  addUsers:(formData)=>{

    return fetch("http://localhost:9000/users",{method:"POST",body:JSON.stringify({
      Name:formData.Name,
      Email:formData.Email,
      Mobile:formData.Mobile
    }) , headers: {
      "content-type": "application/json"
  }});

  },

  updateUsers:(formData,id)=>{

    return fetch(`http://localhost:9000/users/${id}`,{method:"PUT",body:JSON.stringify({
      Name:formData.Name,
      Email:formData.Email,
      Mobile:formData.Mobile
    }) , headers: {
      "content-type": "application/json"
  }});

  },
  getuserData:(id)=>{
    return (fetch(`http://localhost:9000/users/${id}`));
  },

  getUserDelete:(id)=>{
    return (fetch(`http://localhost:9000/users/${id}`,{method:"DELETE"}));

  }
}