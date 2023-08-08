// const express = require("express");
// const router = express.Router();

// router.get("/", async (req, res) => {
//   /**
//    * #swagger.tags = ['album-resource']
//    * #swagger.summary = 'Album 목록 조회'
//    * #swagger.description = '요청한 페이지에 해당하는 Album 목록을 조회합니다.'
//    */
//   const response = await fetch("https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?sidoName=%EA%B0%95%EC%9B%90&pageNo=1&numOfRows=100&returnType=xml&serviceKey=VORicb2%2BKIZcIHA9SO9Z9sY96PzB%2FyjU96%2Fzb%2FATVwnsdjrNWNBB8BbyDlCCvcPKXahtymeO7XDknN7p2lyMew%3D%3D&ver=1.0");
//   const pm = await response.json();
//   res.status(200).json(pm);
// });

// router.get("/:id", async (req, res) => {
//   /**
//    * #swagger.tags = ['album-resource']
//    * #swagger.summary = 'Album 상세정보 조회'
//    * #swagger.description = 'id에 해당하는 Album 상세정보를 조회합니다.'
//    */
//   const response = await fetch(
//     'https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?sidoName=%EA%B0%95%EC%9B%90&pageNo=1&numOfRows=100&returnType=xml&serviceKey=VORicb2%2BKIZcIHA9SO9Z9sY96PzB%2FyjU96%2Fzb%2FATVwnsdjrNWNBB8BbyDlCCvcPKXahtymeO7XDknN7p2lyMew%3D%3D&ver=1.0'
//   );
//   if (response.status === 404) {
//     return res.sendStatus(404);
//   }
//   const pm = await response.json();
//   res.status(200).json(pm);
// });

// module.exports = router;