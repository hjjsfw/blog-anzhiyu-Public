var posts=["2025/03/02/hello-world/","2025/03/02/文章/","2025/03/02/这是新的文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };