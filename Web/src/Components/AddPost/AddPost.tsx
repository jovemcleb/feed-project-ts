import React from "react";
import styles from "./AddPost.module.css";

export function AddPost() {
  return (
    <section className={styles.createPost}>
      <form className={styles.formCreate}>
        <textarea placeholder="Adicione seu novo Post" />
        <div className={styles.wrapButton}>
          <button>Publicar</button>
        </div>
      </form>
    </section>
  );
}
