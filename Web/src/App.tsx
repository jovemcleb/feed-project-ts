import { Header } from "./Components/Header/Header";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { AddPost } from "./Components/AddPost/AddPost";
import { Post } from "./Components/Posts/Post";

import "./global.css";
import styles from "./App.module.css";
import { posts } from "./Helpers/posts";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <AddPost />
          {posts.map(({ id, author, content, publishedAt }) => (
            <Post
              key={id}
              author={author}
              content={content}
              publishedAt={publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  );
}
