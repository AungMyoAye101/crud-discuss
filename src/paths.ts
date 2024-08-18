const paths = {
  home() {
    return "/";
  },
  topic(topicSlung: string) {
    return `/topics/${topicSlung}`;
  },
  postCreate(topicSlung: string) {
    return `/topics/${topicSlung}/posts/new`;
  },
  postShow(topicSlung: string, postId: number) {
    return `/topics/${topicSlung}/posts/${postId}`;
  },
};

export default paths;
