export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  avatar?: string;
  bio?: string;
  followers: string[];
  following: string[];
  createdAt: string;
  location?: string;
  website?: string;
  isVerified?: boolean;
  isAdmin?: boolean;
}

export interface Post {
  id: string;
  content: string;
  image?: string;
  author: {
    id: string;
    username: string;
    avatar?: string;
    isVerified?: boolean;
  };
  likes: number;
  comments: Array<{
    id: string;
    content: string;
    author: {
      username: string;
      avatar?: string;
      isVerified?: boolean;
    };
  }>;
  createdAt: string;
}

export interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  posts: Post[];
  allUsers: User[];
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, username: string) => Promise<void>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => Promise<void>;
  followUser: (userId: string) => Promise<void>;
  unfollowUser: (userId: string) => Promise<void>;
  createPost: (content: string, image?: File) => Promise<void>;
  searchUsers: (query: string) => User[];
  getUserSuggestions: () => User[];
  updateProfilePicture: (file: File) => Promise<void>;
  getUserByUsername: (username: string) => User | null;
  verifyUser: (userId: string) => Promise<void>;
  unverifyUser: (userId: string) => Promise<void>;
  deletePost: (postId: string) => Promise<void>;
  editPost: (postId: string, content: string) => Promise<void>;
  isAdmin: () => boolean;
}