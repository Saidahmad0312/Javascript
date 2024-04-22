async function fetchData(userId) {
    try {
      const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      const userData = await userResponse.json();
  
      const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      const postsData = await postsResponse.json();
  
      console.log(`Avtor: ${userData.name}`);
      console.log(`Shahar: ${userData.address.city}`);
      console.log(`Kompaniya: ${userData.company.name}`);
  
      console.log("Maqolalar:");
      postsData.forEach(post => {
        console.log(post.title);
      });
  
    } catch (error) {
      console.error('Xatolik yuz berdi:', error);
    }
  }
  
  fetchData(1);
  