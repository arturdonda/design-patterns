export type IBuilder<T> = {
	reset(): IBuilder<T>;
	build(): T;
} & { [K in keyof T as `set${Capitalize<string & K>}`]: (arg: T[K]) => IBuilder<T> };
