import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x52f378050100e8704825B681eD3a1Dd729FD933c",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Youtube Play Button",
        description: "This NFT will give you access to CreatorDAO!",
        image: readFileSync("scripts/assets/youtube.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()