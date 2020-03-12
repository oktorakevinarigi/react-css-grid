import React from 'react';
import './NestedGrids.css';

function NestedGrids() {
  return (
    <div id="content">
        <div>1</div>
		<div>2</div>
		<div>3</div>

		<div class="nested">
			<p>1</p>
			<p>2</p>
			<p>3</p>
			<p>4</p>
		</div>

		<div>5</div>
		<div>6</div>
    </div>
  );
}

export default NestedGrids;
