import React, { Component } from 'react';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';
import { ReactComponent as GithubIcon } from './utils/assets/github.svg';
import './App.scss';
import ThemeToggle from './utils/ThemeSwitch';

export default class App extends Component {
  render() {
    return (
      <header>
        <div className="App">
          <nav className="nav-bar">
            <h2 className="main-head">Sorting Visualizer</h2>
            <div className="right-icons">
              <ThemeToggle />
            </div>
          </nav>
          <SortingVisualizer></SortingVisualizer>
        </div>
      </header>
    );
  }
}
