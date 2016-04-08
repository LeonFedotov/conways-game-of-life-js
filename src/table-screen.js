import React from 'react';

const Col = (set, j, v, i) => (
	<td
		key={`${j}:${i}:${v}`}
		onClick={set.bind(this, i, j)}
		title={`${j}:${i}:${v}`}
		style={{
			cursor: 'pointer',
			background: v ? 'black' : 'white',
			borderRadius: 10,
			width: 19,
			height: 19,
			fontSize: 5,
			margin: 1,
			padding: 0
	}}></td>
);
const Row = (set, r, i) => (
	<tr key={`r_${i}`}>
		<td style={{width:20, fontSize: 10}} key={`ri_${i}`}>{i}</td>
		{r.map(Col.bind(this, set, i))}
	</tr>
);

export default function TableScreen(props) {
	return <table cellpadding="0" cellspacing="1">
		<thead>
			<tr>
				<th></th>
				{props.board.map((c, i) => <th style={{width:20, fontSize: 10}} key={`ci_${i}`}>{i}</th>)}
			</tr>
		</thead>
		<tbody>{props.board.map(Row.bind(this, props.set))}</tbody>
	</table>
};