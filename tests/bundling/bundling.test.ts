import { Dirent } from "fs";
import fs from "fs";
import path from "path";

describe("Distribution Tests", () => {
  it("reads lib", () => {
    const {
      StyledString,
      style
    } = require("../../lib/index.cjs");
    expect(StyledString).toBeDefined();
    expect(style).toBeDefined();
  });

  it("reads JS Bundle", () => {


    let distFile: Dirent[];
    try {
      distFile = fs.readdirSync(path.join(process.cwd(), "dist"), {withFileTypes: true})
        .filter(d => d.isFile() && d.name.endsWith(".js"))
    } catch (e: unknown) {
      throw new Error("Error reading JS bundle: " + e);
    }

    if (distFile.length === 0)
      throw new Error("There should only be a js file in directory");


    const {
      StyledString,
      style
    } = require(`../../dist/${distFile[0].name}`);
    expect(StyledString).toBeDefined();
    expect(style).toBeDefined();
  });
});
