import React from 'react';
import { TASK_STATUSES } from '../myconfig.js';

const Task = props => {
	const statusChange = (e) => {
		props.onStatusChange(props.task.id, e.target.value);
	} 

	return (
		<div className="task">
			<div className="task-header">
				<div>{props.task.title}</div>
				<select value={props.task.status} onChange={statusChange}>
					{TASK_STATUSES.map(status => (
						<option key={status} value={status}>{status}</option>
					))}
				</select>
	
			</div>
			<hr />
			<div className="task-body">{props.task.description}</div>
		</div>
	);
}

export default Task;
