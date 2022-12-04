import React, { FormEvent, useState, ChangeEvent, InvalidEvent } from "react";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Coment/Comment";

import styles from "./Post.module.css";

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: string;
  content: string;
}

interface PostProps {
  author: Author;
  publishedAt: Date;
  content: Content[];
}

interface IComments {
  dateComment: Date;
  content: string;
}

export function Post({ author, content, publishedAt }: PostProps) {
  const [comments, setComments] = useState<IComments[]>([]);

  const [newCommentText, setNewCommentText] = useState("");

  const dateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const handleCreateNewComment = (e: FormEvent) => {
    e.preventDefault();
    setComments([
      ...comments,
      {
        dateComment: new Date(),
        content: newCommentText,
      },
    ]);
    setNewCommentText("");
  };

  const handleNewCommentChange = ({
    target,
  }: ChangeEvent<HTMLTextAreaElement>) => {
    target.setCustomValidity("");
    setNewCommentText(target.value);
  };

  const handleNewCommentInvalid = ({
    target,
  }: InvalidEvent<HTMLTextAreaElement>) => {
    target.setCustomValidity("Este campo é obrigatório");
  };

  const deleteComment = (commentToDelete: string) => {
    const newComments = comments.filter(
      (comment) => comment.content !== commentToDelete
    );
    setComments(newComments);
  };

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={dateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(({ type, content }) => {
          if (type === "paragraph") {
            return <p key={content}>{content}</p>;
          } else if (type === "link") {
            return (
              <p key={content}>
                <a href={content}>{content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={(e) => handleNewCommentChange(e)}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Comentar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment
            key={comment.content}
            comment={comment}
            deleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
}
