const posts = [
  { title: "Post Başlık 1", detail: "Post Detay 1" },
  { title: "Post Başlık 2", detail: "Post Detay 2" },
  { title: "Post Başlık 3", detail: "Post Detay 3" },
  { title: "Post Başlık 4", detail: "Post Detay 4" },
];

// List Post Start
const listPosts = () => {
  posts.map((post, index) => {
    console.log(`Post ${index + 1} Başlık : ${post.title} , Detay : ${post.detail}`);
  });
};
// List Post End

// Add Post Start
const addPost = (newPost) => {
  const promise = new Promise((resolve, reject) => {
    posts.push(newPost);
    resolve("Veri eklendi");
    // reject('Veri eklenirken hata oluştu');
  });
  return promise;
};
// Add Post End

listPosts();
addPost({ title: "Post Başlık 5", detail: "Post Detay 5" }).then(() => {
  console.log("Yeni Liste");
  listPosts();
}).catch(error => console.log(error));
