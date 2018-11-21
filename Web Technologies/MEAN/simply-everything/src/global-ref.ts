export interface MyGlobal {
    id_token: string;
}

export abstract class GlobalRef {
    abstract get nativeGlobal(): MyGlobal;
}

export class BrowserGlobalRef extends GlobalRef {
    get nativeGlobal(): MyGlobal { return Window as MyGlobal; }
}

export class NodeGlobalRef extends GlobalRef {
    get nativeGlobal(): MyGlobal { return global as MyGlobal; }
}