export const IntroPage = () => {
    return (
      <div className="prose max-w-none">
        <h2>Welcome to the Flexbox Playground 🧩</h2>
  
        <p>
          This interactive playground is designed to help you **learn and visualize** how{" "}
          <strong>Flexbox</strong> works using <strong>Tailwind CSS</strong>.
        </p>
  
        <h3>🔧 What is Flexbox?</h3>
        <p>
          Flexbox is a layout module in CSS that makes it easier to design flexible and efficient
          layouts, even when the size of your content is unknown or dynamic.
        </p>
  
        <h3>🎯 Why Tailwind?</h3>
        <p>
          Tailwind provides utility classes like <code>flex</code>, <code>justify-center</code>,
          <code>items-start</code>, and many more that map directly to Flexbox properties.
        </p>
  
        <h3>📚 How to use this site</h3>
        <ul>
          <li>Use the navigation menu to explore each Flexbox concept</li>
          <li>Each section includes:</li>
          <ul>
            <li>📘 A short explanation</li>
            <li>👀 A live visual example</li>
            <li>📄 The Tailwind code with syntax highlighting</li>
            <li>📋 A copy button to quickly grab the code</li>
          </ul>
        </ul>
  
        <h3>🚀 Tip</h3>
        <p>Try editing the code and experimenting in your own Tailwind projects!</p>
      </div>
    )
  }
  