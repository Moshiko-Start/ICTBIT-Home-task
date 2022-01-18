import { makeAutoObservable } from 'mobx';

export default class UserModel {
	public name: string;
	public age: number;

	constructor(name: string = '', age: number = 0) {
		makeAutoObservable(this);
		this.name = name;
		this.age = age;
	}

	set Name(txt: string) {
		this.name = txt;
	}

	set Age(val: number) {
		this.age = val;
	}

	get Name(): string {
		return this.name;
	}

	get Age(): number {
		return this.age;
	}
}
