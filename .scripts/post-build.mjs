import fse from "fs-extra";
import { omit } from "ramda";

const BUILD_FOLDER = "dist";

// Create new package.json for dist folder
function createPackageFile() {
  const packageData = fse.readFileSync("./package.json", "utf8");
  const packageJSON = omit(
    ["devDependencies", "lint-staged", "scripts"],
    JSON.parse(packageData)
  );

  return fse.writeFile(
    `./${BUILD_FOLDER}/package.json`,
    JSON.stringify(packageJSON, null, 2),
    "utf8"
  );
}

function copyToBuildFolder(srcBase, folders) {
  folders.forEach(folder => {
    fse.copySync(`${srcBase}/${folder}`, `${BUILD_FOLDER}/${folder}`);
  });
}

createPackageFile();
copyToBuildFolder(".", ["react-native.config.js", "index.d.ts"]);
