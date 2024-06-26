
export enum Status{
	TODO = "TODO",
	IN_PROGRESS = "IN_PROGRESS",
	DONE = "DONE"
}

export interface Task{
	id: string,
	name: string,
	status: Status,
	description?: string,
}