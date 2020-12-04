export const howManyReaded = (news) => {
  return news.filter((newsItem) => {
    return newsItem.isRead === false;
  }).length;
};
