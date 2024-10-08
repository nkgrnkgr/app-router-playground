const http = require("node:http");
const url = require("node:url");

const PORT = 3001;

// サーバーを作成
const server = http.createServer(async (req, res) => {
  console.log("called request");
  // URLのパス部分を解析
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  // レスポンスヘッダーにJSONであることを指定
  res.writeHead(200, { "Content-Type": "application/json" });

  const todoMatch = path.match(/^\/todos\/(\d+)$/);
  if (todoMatch) {
    const todoId = todoMatch[1];
    const r = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    );
    const a = await r.json();

    const random = Math.floor(Math.random() * 9) + 1;
    res.end(
      JSON.stringify({
        ...a,
        random,
      }),
    );
    return;
    // res.end(JSON.stringify(a));
  }

  // レスポンスとしてJSONを送信
  res.end(
    JSON.stringify({
      userId: 1,
      id: 1,
      title: "a",
      completed: false,
    }),
  );
});

// サーバーをポート3000で待ち受け
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
