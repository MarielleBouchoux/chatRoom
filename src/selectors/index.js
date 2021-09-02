/* eslint-disable import/prefer-default-export */
export const getHighestId = (items) => {
  const ids = items.map((item) => item.id);
  const maxId = Math.max(...ids);

  return maxId;
};

export const getIsMine = (author, pseudo) => pseudo === author;
