import { ThumbsUp, Trash } from "phosphor-react";
import React, { useState } from "react";
import { Avatar } from "../Avatar/Avatar";
import styles from "./Comment.module.css";
import noneUser from "../../Assets/images.png";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

interface Comment {
  content: string;
  dateComment: Date;
}

interface CommentProps {
  comment: Comment;
  deleteComment: (commentToDelete: string) => void;
}

export function Comment({ comment, deleteComment }: CommentProps) {
  const { content, dateComment } = comment;

  const dateFormatted = format(dateComment, "dd 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(dateComment, {
    locale: ptBR,
    addSuffix: true,
  });

  const [likeCount, setLikeCount] = useState(0);

  const handleDeleteComment = () => {
    deleteComment(comment.content);
  };

  const handleLikeComment = () => {
    setLikeCount((state) => state + 1);
  };

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={noneUser} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong></strong>
              <time title={dateFormatted} dateTime={dateComment.toISOString()}>
                {publishedDateRelativeToNow}
              </time>
            </div>

            <button
              onClick={() => handleDeleteComment()}
              title="Excluir comentário"
            >
              <Trash size={22} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Curtir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
