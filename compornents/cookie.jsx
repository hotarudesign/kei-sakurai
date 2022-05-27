// import { Cookie, withCookie } from "next-cookie";

// export default function setCookie(key, value) {
//   document.cookie = key + "=" + value + ";";
// }

// export default function getCookie(key) {
//   const cookies = document.cookie;
//   const cookiesAry = cookies.split(";");

//   for (let i = 0; i < cookiesAry.length; i++) {
//     let cookie = cookiesAry[i].split("=");
//     if (cookie[0] === key) {
//       return cookie;
//     }
//   }
// }

// const keyName = "visited";
// const keyValue = true;
// const cookie = getCookie(keyName);

// if (typeof cookie === "undefined" || cookie[1] !== keyValue) {
//   //Cookieをセットする
//   setCookie(keyName, keyValue);

//   //ここに初回アクセス時の処理
//   console.log("初めての訪問です");
// } else {
//   //ここに通常アクセス時の処理
//   console.log("訪問済みです");
// }
