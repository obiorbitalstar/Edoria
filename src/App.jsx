import "./App.css";
import HTMLFlipBook from "react-pageflip";
import { pages } from "./pages";

function App() {
  return (
    <main className="main">
      <HTMLFlipBook
        width={550}
        height={733}
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1533}
        size="stretch"
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        className="demo-book"
      >
        {pages?.map((page, index) => (
          <div className="demoPage" key={index}>
            <div className="content">
              {page?.title && (
                <h1 style={{ fontSize: page?.titleFontSize }}>{page?.title}</h1>
              )}              {page?.image && <img src={page?.image} style={page?.widthandheight} />}
              {page?.text && page.text.split('\n').map((paragraph, idx) => (
          <p key={idx} style={{ fontSize: page.textFontSize }}>
            {paragraph}
          </p>
        ))}

            </div>
          </div>
        ))}
      </HTMLFlipBook>
    </main>
  );
}

export default App;
