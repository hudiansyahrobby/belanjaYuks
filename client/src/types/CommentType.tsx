export interface CommentType {
  id: string;
  content: string;
  rating: number;
  productId: string;
}

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

export interface GetCommentType {
  id: string;
  content: string;
  rating: number;
  userId: string;
  productId: string;
  createdAt: Date;
  updatedAt: Date;
  commentedBy: User;
}
