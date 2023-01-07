const { Storage } = require("megajs");
const UserAgent = require("user-agents");
const path = require("path");
const fs = require("fs");

const storage = new Storage({
  email: "unlimited.psace@gmail.com",
  password: "mega82645632147896",
  userAgent: new UserAgent().toString(),
});

const imageUpload = async (filePth) => {
  /**
   * this function to upload image file
   * filePth: str || arr string,
   * return: mega url string or array of string
   */

  var filesPath = [];
  if (!Array.isArray(filePth)) {
    filesPath.push(filePth.replace("\\\\", "/"));
  } else {
    filesPath = filePth;
  }

  var result = [];
  try {
    const { status } = await storage.ready;
    if (status === "ready") {
      for (const pth of filesPath) {
        // upload file
        const file = await storage.upload(
          pth.split("/").slice(-1).join(""),
          await fs.promises.readFile(pth)
        ).complete;

        result.push(await file.link());
      }
    }
  } catch (error) {
    console.log(error);
  }

  // close session
  await storage.close();

  return result;
};

// (async () => {
//   await imageUpload(
//     "C:\\Users\\abdulkarim\\Desktop\\تسعير المتجات\\IMG-20221031-WA0009.jpg"
//   );
// })();

module.exports = imageUpload;
