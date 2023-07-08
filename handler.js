// Handler is the first contact of a EXM function

export const handler = (state, action) => {
  const { input } = action;

  if (input.type === "create" || input.type === "update") {
    console.log("Created");
    state.posts[input.postId].name = input.post.name;
  }
  if (input.type === "delete") {
    delete state.posts[input.postId];
  }
  return {
    state,
  };
};
