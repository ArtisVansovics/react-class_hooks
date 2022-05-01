import React, { useRef, useEffect, useState } from 'react';
import './App.scss';

const App = () => {
  const inputElementRef = useRef<HTMLInputElement | null>(null);
  const boxColorRef = useRef<HTMLInputElement | null>(null);
  const boxOriginalRef = useRef<HTMLInputElement | null>(null);
  const boxCloneWrapperRef = useRef<HTMLInputElement | null>(null);
  const boxAbsoluteRef = useRef<HTMLInputElement | null>(null);
  const boxLargeWrapperRef = useRef<HTMLInputElement | null>(null);
  const [count, setCount] = useState(0);

  // component life cycle -->
  // render (mounted)
  // update state & props
  // unmount

  // update state & props
  useEffect(() => {
    console.log('render & count is changed');
  }, [count]);

  // render (mounted)
  useEffect(() => {
    console.log('render only');

    // focus input on App render
    if (inputElementRef.current) {
      inputElementRef.current.focus();
    }
  }, []);

  // render with unmount
  useEffect(() => {
    console.log('render and unmount');

    return () => {
      // logic for unmount
    };
  }, []);

  const focusHandler = () => {
    // if inputElementRef is not null, focus on input
    if (inputElementRef.current) {
      const inputElement = inputElementRef.current;

      inputElement.focus();
    }
  };
  const boxColorHandler = () => {
    if (boxColorRef.current) {
      const boxColored = boxColorRef.current;

      boxColored.style.backgroundColor = 'gold';
    }
  };
  const cloneBoxHandler = () => {
    if (boxCloneWrapperRef.current && boxOriginalRef.current) {
      const boxWrapper = boxCloneWrapperRef.current;
      const boxClone = boxOriginalRef.current.cloneNode(true);

      boxWrapper.appendChild(boxClone);
    }
  };
  const moveBoxHandler = () => {
    if (boxAbsoluteRef.current) {
      const movingBox = boxAbsoluteRef.current;

      movingBox.style.top = '0';
      movingBox.style.right = '0';
      movingBox.style.left = 'auto';
      movingBox.innerText = 'In a corner';
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="box">
              <h1>{count}</h1>
              <button
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <div className="box">
              <form>
                <input
                  type="text"
                  ref={inputElementRef}
                />
                <button>Submit</button>
              </form>
              <button
                onClick={focusHandler}
              >
                Focus on input
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <div className="box">
              <div
                className="color-box"
                ref={boxColorRef}
              />
              <br />
              <button
                onClick={boxColorHandler}
              >
                Change color to gold
              </button>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6">
            <div className="box">
              <div
                className="clone-wrapper"
                ref={boxCloneWrapperRef}
              >
                <div
                  className="color-box"
                  ref={boxOriginalRef}
                />
              </div>
              <button
                onClick={cloneBoxHandler}
              >
                Clone div
              </button>
            </div>
          </div>
          <div className="col-xs-12">
            <div className="box">
              <div
                className="clone-wrapper large-wrapper"
                ref={boxLargeWrapperRef}
              >
                <div
                  className="color-box color-box--absolute"
                  ref={boxAbsoluteRef}
                />
              </div>
              <button
                onClick={moveBoxHandler}
              >
                Send div to corner
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
