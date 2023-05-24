import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const AMOUNT_PER_PAGE = 9;
app.get("/api/photos/:category/:page/:sortBy", async (req, res) => {
  try {
    const { category, page, sortBy } = req.params;

    const response = await fetch(
      `https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736` +
        `&q=${category}&per_page=${AMOUNT_PER_PAGE}&page=${page}`
    );
    const photos = await response.json();

    const sortedPhotos = photos.hits.sort(sortByKey(sortBy));
    res.json(sortedPhotos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong", error });
  }
});

app.listen(port, () => console.log(`Server is listening on port ${port}`));

function sortByKey(key) {
  return function (a, b) {
    if (a[key] < b[key]) {
      return -1;
    } else if (a[key] > b[key]) {
      return 1;
    }
    return 0;
  };
}
