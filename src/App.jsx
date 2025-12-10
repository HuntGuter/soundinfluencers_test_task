import './App.css';
import './loader.css';
import './glass.css';
import Glass from './glass';
import { useRef } from "react";

function App() {
  const containerRef = useRef(null);

  return (
    <>
      <h1>Loader</h1>
      <div className="loader">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="bar"></div>
        ))}
      </div>
      
      <h1>Glass Effect</h1>
      <div className='container' ref={containerRef}>
        <p className='text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a aliquam quam. Nunc fermentum vel arcu in fermentum. Sed eget dapibus dui. Etiam in accumsan mauris, quis interdum quam. Cras lectus neque, elementum id dui sed, bibendum pulvinar augue. Donec sapien tortor, placerat ut velit ac, mattis vestibulum risus. Maecenas eget ex at lectus pharetra condimentum eget ac nunc.
          Integer eros erat, vehicula eget felis sit amet, viverra egestas elit. Praesent non feugiat arcu, in lacinia purus. Sed blandit, orci ac pellentesque pharetra, massa odio porttitor nibh, viverra ultricies nibh tellus in neque. Integer dignissim efficitur augue sed sodales. Maecenas cursus in ante nec mollis. Vivamus accumsan accumsan neque, non eleifend massa placerat sed. Aliquam tempus, neque sit amet malesuada efficitur, turpis risus lacinia nisi, quis tristique nisl enim vel elit. Nunc sagittis, mi ut aliquam tincidunt, risus tortor dignissim ex, sit amet posuere sem eros non arcu.
          In vel sapien sed sem scelerisque ullamcorper. Aenean sodales at lacus vitae convallis. Suspendisse eget varius tortor. Vestibulum pharetra porttitor urna eget pellentesque. Phasellus et nisl mauris. Vivamus ornare urna quis nunc accumsan pharetra. In maximus elit quis lacus sagittis elementum. Nullam nec sollicitudin mi. Mauris porttitor leo nec eros varius scelerisque.
        </p>
        <Glass containerRef={containerRef} />
      </div>
    </>
  )
}

export default App
