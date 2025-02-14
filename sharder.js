const { token } = require("./src/config.js");
const { ShardingManager } = require("discord.js");

const manager = new ShardingManager("./src/index.js", {
  respawn: true,
  autoSpawn: true,
  token: token,
  totalShards: 1,
  shardList: "auto",
});

manager
  .spawn({ amount: manager.totalShards, delay: null, timeout: -1 })
  .then((shards) => {
    console.log(`[CLIENT] ${shards.size} (các) mảnh được sinh ra.`);
  })
  .catch((err) => {
    console.log("[CLIENT] một lỗi đã xảy ra :", err);
  });

manager.on("shardCreate", (shard) => {
  shard.on("ready", () => {
    console.log(`[CLIENT] Shard ${shard.id} được kết nối với Cổng Discord.`);
  });
});



/*
 * Modified By Gamer CodeX
 * Discord username - ray.dev
 * Youtube - https://www.youtube.com/@GamerCodeX
 * Discord Server - https://dsc.gg/codexdev
 */