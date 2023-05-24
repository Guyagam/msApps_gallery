const baseUrl = "http://localhost:3001";
export const httpService = {
  getPhotos: (category, page, sortBy) => {
    return fetch(`${baseUrl}/api/photos/${category}/${page}/${sortBy}`).then(
      (res) => res.json()
    );
  },
};
