export function Server() {
  return (
    <div>
      <h2>This is Server Component</h2>
      <p>このコンポーネントはサーバーで実行されます。</p>
      <p>
        <pre className="bg-gray-900 p-4 rounded-lg text-sm">
          <code className="block text-gray-100">
            <span className="text-purple-400">const</span> hello ={" "}
            <span className="text-yellow-400">'Hello, world!'</span>
          </code>
          <code className="block text-gray-100">
            <span className="text-blue-400">console</span>.
            <span className="text-green-400">log</span>(hello)
          </code>
        </pre>
      </p>
    </div>
  );
}
