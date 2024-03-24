export abstract class Handler<T, Async extends boolean> {
	protected nextHandler: Handler<T, boolean> | undefined = undefined;

	abstract handle(request: T): Async extends true ? Promise<T> : T;

	next(request: T) {
		if (this.nextHandler) return this.nextHandler.handle(request);

		return request;
	}

	setNextHandler(nextHandler: Handler<T, boolean>) {
		this.nextHandler = nextHandler;

		return nextHandler;
	}
}
